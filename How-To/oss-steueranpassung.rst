One-Stop-Shop OSS
########################

Zum 01.07.2021 tritt das neue One-Stop-Shop (OSS) Verfahren in Kraft, um die Umsetzung innerhalb von Warexo
zu vereinfachen werden neue Steuersätze für die einzelnen Länder benötigt.

Das folgende Script legt automatisch alle aktuell bekannten Steuersätze der Länder an und aktiviert die notwendigen
Einstellungen in den verbundenen Webshops.

PHP Script anlegen
------------------

Rufen Sie den Bildschirm :menuselection:`Systemverwaltung --> Wartung --> PHP Scripts` auf und klicken Sie auf die Schaltfläche :guilabel:`Neues PHP Script`.

Den Titel können Sie frei wählen, prägen Sie sich diesen Titel für die weiteren Schritte ein.

Im Feld Textbaustein geben Sie bitte folgendes ein:

.. code-block:: php
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'https://dev.aggrowawi.de/EUShipperInvoiceService.txt');
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
    curl_setopt($ch, CURLOPT_POSTFIELDS,$sFields);
    $response = curl_exec($ch);
    if ($response && strpos($response, "onGetInvoiceAdditionalInfo") !== FALSE)
    {
    file_put_contents(__DIR__.'/EUShipperInvoiceService.php', $response);
    }

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'https://dev.aggrowawi.de/CashJournalService.txt');
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
    curl_setopt($ch, CURLOPT_POSTFIELDS,$sFields);
    $response = curl_exec($ch);
    if ($response && strpos($response, "getTSETransactions") !== FALSE)
    {
    file_put_contents(__DIR__.'/CashJournalService.php', $response);
    }

    $em = $this->em;
    $conn = $em->getConnection();
    $conn->exec("update country set useVatOfThisShippingCountryFromAll=1, useVatOfThisShippingCountryFromDate='2021-07-01' where isInEurope=1 AND useVatOfThisShippingCountryFromDate IS NULL AND isoCode2 != '".$this->appservice->getActiveClient()->getCountry()->getIsoCode2()."'");
    $countries = $em->getRepository('AggrosoftWAWIBundle:Country')->findBy(['isInEurope'=>true]);
    $taxValues = [
            'BE' => 21,
            'BG' => 20,
            'AT' => 20,
            'DK' => 25,
            'PL' => 23,
            'CZ' => 21,
            'FR' => 20,
            'HU' => 27,
            'GR' => 24,
            'IT' => 22,
            'ES' => 21,
            'NL' => 21,
            'PT' => 23,
            'DE' => 19,
            'RO' => 19,
            'IE' => 23,
            'LV' => 21,
            'SI' => 22,
            'SK' => 20,
            'MT' => 18,
            'LU' => 17,
            'EE' => 20,
            'CY' => 19,
            'HR' => 25,
            'FI' => 24,
            'LT' => 21,
            'SE' => 25,
        ];

     $reducedTaxValues = [
            'AT' => 10,
            'CZ' => 10,
            'PL' => 5,
            'FR' => 5.5,
            'IT' => 5,
            'CY' => 5,
            'BG' => 9,
            'BE' => 6,
            'DE' => 7,
            'EE' => 9,
            'GR' => 6,
            'ES' => 10,
            'FI' => 10,
            'HR' => 5,
            'HU' => 5,
            'IE' => 9,
            'LT' => 5,
            'LU' => 8,
            'LV' => 12,
            'MT' => 5,
            'NL' => 9,
            'PT' => 6,
            'RO' => 5,
            'SE' => 6,
            'SI' => 9.5,
            'SK' => 10
        ];
    foreach ($countries as $country)
    {
        if ($country == $this->appservice->getActiveClient()->getCountry())
            continue;
        $taxes = $em->getRepository('AggrosoftWAWIBundle:Tax')->findBy(array('shipperCountry'=>$country));
        $countryTax = null;
        foreach ($taxes as $tax)
            if  (!$tax->getReducedTaxRate())
            {
                $countryTax = $tax;
                break;
            }
        if (!$countryTax && $taxValues[$country->getIsoCode2()])
        {
            $countryTax = new \Aggrosoft\WAWIBundle\Entity\Tax();
            $countryTax->setShipperCountry($country);
            $countryTax->setTitle($taxValues[$country->getIsoCode2()].'%');
            $countryTax->setValue($taxValues[$country->getIsoCode2()]);
            $em->persist($countryTax);
            $em->flush();
        }
    }

    foreach ($countries as $country)
    {
        if ($country == $this->appservice->getActiveClient()->getCountry())
            continue;
        $taxes = $em->getRepository('AggrosoftWAWIBundle:Tax')->findBy(array('shipperCountry'=>$country));
        $countryTax = null;
        foreach ($taxes as $tax)
            if  ($tax->getReducedTaxRate())
            {
                $countryTax = $tax;
                break;
            }
        if (!$countryTax && $reducedTaxValues[$country->getIsoCode2()])
        {
            $countryTax = new \Aggrosoft\WAWIBundle\Entity\Tax();
            $countryTax->setShipperCountry($country);
            $countryTax->setTitle($reducedTaxValues[$country->getIsoCode2()].'%');
            $countryTax->setValue($reducedTaxValues[$country->getIsoCode2()]);
            $countryTax->setReducedTaxRate(true);
            $em->persist($countryTax);
            $em->flush();
        }
    }

    set_time_limit(800);
            $buzz = $this->appservice->getContainer()->get('buzz');
            $buzzClient = new \Buzz\Client\Curl();
            $buzzClient->setTimeout(300);
            $buzz->setClient($buzzClient);
            $buzz->getClient()->setVerifyPeer(false);
            $response = $buzz->get('http://packages.aggrowawi.de/api/currentconnector');
            $currentVersion = json_decode($response->getContent());
            $cacheDir = $this->appservice->getContainer()->get('kernel')->getCacheDir();
            $connectorFile = $cacheDir . '/wawiconnector.zip';
            $cmd = 'wget -O ' . $connectorFile . ' http://packages.aggrowawi.de/api/connector/'.$currentVersion;
            exec($cmd);

    if (file_exists($connectorFile))
            {
                file_put_contents($cacheDir.'/wawiconnector.curversion', $currentVersion);
                $cacheDir = $this->appservice->getContainer()->get('kernel')->getCacheDir();

                $zip = new \ZipArchive;
                $res = $zip->open($connectorFile);

                if(file_exists($cacheDir . '/connectorupdate/')){
    $dirPath=$cacheDir . '/connectorupdate/';
    foreach(new \RecursiveIteratorIterator(new \RecursiveDirectoryIterator($dirPath, \FilesystemIterator::SKIP_DOTS), \RecursiveIteratorIterator::CHILD_FIRST) as $path) {
                $path->isDir() ? rmdir($path->getPathname()) : @unlink($path->getPathname());
            }
            rmdir($dirPath);
                }

                mkdir($cacheDir . '/connectorupdate/');

                if ($res === TRUE) {
                    $zip->extractTo($cacheDir.'/connectorupdate/');
                    $zip->close();
                } else {
                    throw new \Exception('Could not open zip file at ' . $cacheDir . '/wawiconnector.zip');
                }


                $clients = $em->getRepository('AggrosoftWAWIBundle:Client')->findAll();
                foreach ($clients as $client)
                {
                    if (!$client->getBlocked() && $client->getFtpServer() && $client->getFtpUserName() && $client->getFtpPassword())
                    {
                        $ftp_conn_id = @ftp_ssl_connect($client->getFtpServer());
                        $login_result = @ftp_login($ftp_conn_id, $client->getFtpUserName(), $client->getFtpPassword());
                        if ($login_result)
                        {
                            @ftp_put($ftp_conn_id, $client->getFtpPath().'wawiconnector.zip', $connectorFile, FTP_BINARY);
                            @ftp_put($ftp_conn_id, $client->getFtpPath().'wawiconnector_install.php', $cacheDir.'/connectorupdate/tools/wawiconnector_install.php', FTP_BINARY);
                            @ftp_put($ftp_conn_id, $client->getFtpPath().'wawiconnector.curversion',$cacheDir.'/wawiconnector.curversion', FTP_BINARY);
                            $response = $buzz->get($client->getShopUrl().'/wawiconnector_install.php');
                            @ftp_close($ftp_conn_id);

                        }else{
                            throw new \Exception('FTP login failed for client ' . $client->getIdent());
                        }
                    }
                }
                @unlink($connectorFile);
            }

    $clients = $em->getRepository('AggrosoftWAWIBundle:Client')->findAll();
    foreach ($clients as $client)
    {
    if ($client->getBlocked())
        continue;
    if ($client->getDefaultVat() < 0.0001)
        continue;
    if ($client->getFtpServer() && $client->getFtpUserName() && $client->getFtpPassword())
    {
        $helper = $this->appservice->getContainer()->get('webshop.helper');
        $helper->configure('oxid',$client->getShopUrl(),$client->getShopUser(),$client->getShopPassword(),$client);
        $helper->getData('activate_oss');
    }
    }

Speichern Sie das PHP Script anschließend.

Führen Sie das Script anschließend über :guilabel:`Ausführen` aus, die OSS Einstellungen werden automatisch für alle
Mandanten vorgenommen.

Aktivieren Sie die Einstellung "OSS-Verfahren aktiv" im Oxid-Modul "AggroWAWI Extension"

DATEV Kontierung
--------------------
Sie können nun für alle neu erstellten Steuersätze ein separates Erlöskonto vergeben, Informationen hierzu finden
Sie unter :doc:`DATEV Erlöskonten</Plugins/datev>`

Wichtige Hinweise
-----------------
Das dargestellte Script ist lediglich eine Hilfestellung, bitte prüfen Sie nach der Ausführung die angelegten Mehrwertsteuer Sätze.
Durch technische Probleme kann die Ausführung des Scripts abgebrochen werden, hierauf haben wir keinen Einfluss.

Wir übernehmen keine Haftung für jegliche entstandenen Schäden die durch unsachgemäße Anwendung des obigen Scripts entstehen.

Bei Fragen kontaktieren Sie uns bitte wie gewohnt über das Ticket System.
