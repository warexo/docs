Corona-Steuerhilfegesetz
########################

.. Attention:: Dieser Artikel ist nicht mehr relevant und nur noch zu Archivzwecken vorhanden


Am 28. Mai 2020 hat der Deutsche Bundestag den Gesetzesentwurf der Regierungskoalition zur Umsetzung steuerlicher Hilfsmaßnahmen zur Bewältigung der Corona-Krise (sog. „Corona-Steuerhilfegesetz“) beschlossen. die Zustimmung durch den Deutschen Bundesrat erfolgte bereits wenige Tage nach dem Bundestag nun am 5. Juni 2020.

Diese Änderung betrifft Sie direkt und benötigt eine zeitgenaue Umstellung der Mehrwertsteuer Sätze für Ihre Produkte. Warexo bietet Ihnen mit einer einfachen Anleitung die Möglichkeit diese Änderungen durchzuführen.

PHP Script anlegen
------------------

Das folgende PHP Script korrigiert die Mehrwertsteuer Sätze alle Mandanten, der Kategorien und Artikel (auch in allen Oxid-Shops). Außerdem werden automatisch die Mehrwertsteuer Konten für den Datev Export von 19% zu 16% und von 7% zu 5% geändert.

Rufen Sie den Bildschirm :menuselection:`Systemverwaltung --> Wartung --> PHP Scripts` auf und klicken Sie auf die Schaltfläche :guilabel:`Neues PHP Script`.

Den Titel können Sie frei wählen, prägen Sie sich diesen Titel für die weiteren Schritte ein.

Im Feld Textbaustein geben Sie bitte folgendes ein:

.. code-block:: php
    
    $dt = new \DateTime;
    $julydt = new \DateTime('2020-07-01 00:00:00');
    $jandt = new \DateTime('2021-01-01 00:00:00');
    if ($dt < $julydt)
        return;
    
    $em = $this->em;
    $taxes = $em->getRepository('AggrosoftWAWIBundle:Tax')->findAll();
    $tax19 = null;
    $tax7 = null;
    $tax16 = null;
    $tax5 = null;
    foreach ($taxes as $tax)
    {
        if ($tax->getShipperCountry())
            continue;
        if (abs($tax->getValue() - 16) < 0.0001)
            $tax16 = $tax;
        if (abs($tax->getValue() - 5) < 0.0001)
            $tax5 = $tax;
        if ($tax->getValue() != 19 && $tax->getValue() != 7)
            continue;
        if (abs($tax->getValue() - 19) < 0.0001)
            $tax19 = $tax;
        if (abs($tax->getValue() - 7) < 0.0001)
            $tax7 = $tax;
        
    }
    if (!$tax16)
    {
        $tax16 = new \Aggrosoft\WAWIBundle\Entity\Tax();
        $tax16->setTitle("16%");
        $tax16->setValue(16);
        $em->persist($tax16);
        $em->flush();
        $em->refresh($tax16);
    }
    if (!$tax5)
    {
        $tax5 = new \Aggrosoft\WAWIBundle\Entity\Tax();
        $tax5->setTitle("5%");
        $tax5->setValue(5);
        $em->persist($tax5);
        $em->flush();
        $em->refresh($tax5);
    }
    $conn = $em->getConnection();
    if ($dt < $jandt)
    {
        $conn->exec("update category set tax_id=".$conn->quote($tax16->getId(),\PDO::PARAM_STR)." where tax_id=".$conn->quote($tax19->getId(),\PDO::PARAM_STR));
        $conn->exec("update product set tax_id=".$conn->quote($tax16->getId(),\PDO::PARAM_STR)." where tax_id=".$conn->quote($tax19->getId(),\PDO::PARAM_STR));
        $conn->exec("update category set tax_id=".$conn->quote($tax5->getId(),\PDO::PARAM_STR)." where tax_id=".$conn->quote($tax7->getId(),\PDO::PARAM_STR));
        $conn->exec("update product set tax_id=".$conn->quote($tax5->getId(),\PDO::PARAM_STR)." where tax_id=".$conn->quote($tax7->getId(),\PDO::PARAM_STR));
        $clients = $em->getRepository('AggrosoftWAWIBundle:Client')->findAll();
        foreach ($clients as $client)
        {
            if (intval($client->getDefaultVat()) == 19)
            {
                $client->setDefaultVat(16);
                $em->persist($client);
            }
            else if (intval($client->getDefaultVat()) == 7)
            {
                $client->setDefaultVat(5);
                $em->persist($client);
            }
        }
    }
    else
    {
        $conn->exec("update category set tax_id=".$conn->quote($tax19->getId(),\PDO::PARAM_STR)." where tax_id=".$conn->quote($tax16->getId(),\PDO::PARAM_STR));
        $conn->exec("update product set tax_id=".$conn->quote($tax19->getId(),\PDO::PARAM_STR)." where tax_id=".$conn->quote($tax16->getId(),\PDO::PARAM_STR));
        $conn->exec("update category set tax_id=".$conn->quote($tax7->getId(),\PDO::PARAM_STR)." where tax_id=".$conn->quote($tax5->getId(),\PDO::PARAM_STR));
        $conn->exec("update product set tax_id=".$conn->quote($tax7->getId(),\PDO::PARAM_STR)." where tax_id=".$conn->quote($tax5->getId(),\PDO::PARAM_STR));
        $clients = $em->getRepository('AggrosoftWAWIBundle:Client')->findAll();
        foreach ($clients as $client)
        {
            if (intval($client->getDefaultVat()) == 16)
            {
                $client->setDefaultVat(19);
                $em->persist($client);
            }
            else if (intval($client->getDefaultVat()) == 5)
            {
                $client->setDefaultVat(7);
                $em->persist($client);
            }
        }
    }
    $curClient = $this->appservice->getActiveClient();
    
    foreach ($clients as $client)
    {
        $this->appservice->switchClient($client);
        $clientShemes = $em->getRepository('AggrosoftWAWIBundle:ClientSheme')->findByClient($client);
        foreach ($clientShemes as $clientSheme)
        {
                if ($clientSheme->getTable()->getTitle() == 'tax')
                {
                    if (!$this->appservice->getMetaFieldValue($tax16, $clientSheme->getField()))
                    {
                        $this->appservice->setMetaFieldValue($tax16, $clientSheme->getField(), $this->appservice->getMetaFieldValue($tax19, $clientSheme->getField()), false);
                    }
                    if (!$this->appservice->getMetaFieldValue($tax5, $clientSheme->getField()))
                    {
                        $this->appservice->setMetaFieldValue($tax5, $clientSheme->getField(), $this->appservice->getMetaFieldValue($tax7, $clientSheme->getField()), false);
                    }
                }
        }

    }
    $this->appservice->switchClient($curClient);
    $em->flush();
    $oxidCode = '<?php class Tax16Module {'."\n";
    $oxidCode .= 'public function change_all_taxes() {'."\n";
    $oxidCode .= '$oConf = agConfig::getInstance();';
    if ($dt < $jandt)
    {
        $oxidCode .= 'oxDb::getDb()->execute("update oxcategories set oxvat=16 where oxvat=19");'."\n";
        $oxidCode .= 'oxDb::getDb()->execute("update oxcategories set oxvat=5 where oxvat=7");'."\n";
        $oxidCode .= 'oxDb::getDb()->execute("update oxarticles set oxvat=16 where oxvat=19");'."\n";
        $oxidCode .= 'oxDb::getDb()->execute("update oxarticles set oxvat=5 where oxvat=7");'."\n";
        
        $oxidCode .= 'if ($oConf->getShopConfVar("dDefaultVat") == 19) $oConf->saveShopConfVar("num", "dDefaultVAT", 16);'."\n";
        $oxidCode .= 'if ($oConf->getShopConfVar("dDefaultVat") == 7) $oConf->saveShopConfVar("num", "dDefaultVAT", 5);'."\n";
    }
    else
    {
        $oxidCode .= 'oxDb::getDb()->execute("update oxcategories set oxvat=19 where oxvat=16");'."\n";
        $oxidCode .= 'oxDb::getDb()->execute("update oxcategories set oxvat=7 where oxvat=5");'."\n";
        $oxidCode .= 'oxDb::getDb()->execute("update oxarticles set oxvat=19 where oxvat=16");'."\n";
        $oxidCode .= 'oxDb::getDb()->execute("update oxarticles set oxvat=7 where oxvat=5");'."\n";
        $oxidCode .= 'if ($oConf->getShopConfVar("dDefaultVat") == 16) $oConf->saveShopConfVar("num", "dDefaultVAT", 19);'."\n";
        $oxidCode .= 'if ($oConf->getShopConfVar("dDefaultVat") == 5) $oConf->saveShopConfVar("num", "dDefaultVAT", 7);'."\n";
    }
    $oxidCode .= '}'."\n";
    $oxidCode .= '} ModuleManager::getInstance()->registerModule( new Tax16Module );'."\n";
    file_put_contents($this->appservice->getContainer()->get('kernel')->getCacheDir()."/tax16_module.php", $oxidCode);
    $webshophelper = $this->appservice->getContainer()->get('webshop.helper');
    foreach ($clients as $client)
    {
        if (!$client->getFtpServer() || !$client->getShopUrl())
            continue;
        $conn_id = ftp_ssl_connect($client->getFtpServer());
        if ($client->getFtpPassive()){
            ftp_pasv($conn_id, true);
        }
        ftp_login($conn_id, $client->getFtpUserName(), $client->getFtpPassword());
        ftp_put($conn_id, $client->getFtpPath()."wawi/tax16_module.php", $this->appservice->getContainer()->get('kernel')->getCacheDir()."/tax16_module.php", FTP_BINARY);
        $webshophelper->configure('oxid', $client->getShopUrl(), $client->getShopUser(), $client->getShopPassword(), $client, $conn_id);
        $webshophelper->getData('change_all_taxes');
        ftp_close($conn_id);
    }

Speichern Sie das PHP Script anschließend.

**Sie können dieses Script manuell am 01.07.2020 in einem Mandanten ausführen (Button "Ausführen")**.

|image0|

Ausführung automatisieren
-------------------------

Sollten Sie Sie das Script nicht manuell sondern automatisch nachts am 01.07.2020 ausführen wollen muss ein Workflow und ein Cronjob angelegt werden.

Bei automatischer Ausführung können Sie nicht sofort prüfen ob die Änderungen korrekt ausgeführt wurden, wir raten zur manuellen Ausführung!

Workflow anlegen
~~~~~~~~~~~~~~~~

Damit das PHP Script zur richtigen Zeit ausgeführt werden kann muss ein Workflow in irgendeinem Mandanten erstellt werden.

Rufen Sie den Bildschirm "Einstellungen" => "Automatisierung" => "Workflows" auf. Wählen Sie die Schaltfläche "Neuer Workflow" und setzen Sie folgende Einstellungen:

| **Aktiv**: Ja
| **Ereignis**: Stündlicher Cronjob
| **Sortierung**: 0

Fügen Sie nun eine Bedingung hinzu über die Schaltfläche "Neue Bedingung" und setzen Sie folgende Einstellungen:

| **Typ**: Benutzerdefiniert
| **Befehl**: ``{{'now'|date('Y-m-d H') == '2020-07-01 00' or 'now'|date('Y-m-d H') == '2021-01-01 00'}}``

Fügen Sie nun eine Aktion hinzu über die Schaltfläche "Neue Aktion" und setzen Sie folgende Einstellungen:

| **Aktion**: PHP Script ausführen
| **Script**: Titel des zuvor erstellten PHP Scripts

Speichern Sie anschließend den Workflow.

Stündlichen Cronjob prüfen/einrichten
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Das Script wird vom stündlichen Cronjob ausgeführt, dieser Cronjob ist nicht zwingend erforderlich für den Betrieb von Warexo. Aus diesem Grund muss geprüft werden ob folgender Cronjob auf Ihrem Server eingerichtet ist und stündlich ausgeführt wird:

``wawi:cron hourly --env=prod > /dev/null &``

Der genaue Befehl kommt auf Ihre Hosting Umgebung an und verhält sich analog zum Bestellimport und dem Dokumentenversand Cronjob. Diese sollten bereits eingerichtet sein und können als Vorlage für den benötigten stündlichen Cronjob dienen.

Wo die Cronjobs eingerichtet werden kommt auf Ihren Hosting Anbieter an, bei Hetzner finden Sie die Cronjobs in der konsoleh, unter der Domain im Punkt "Einstellungen" => "Konfiguration" => "Cronjob Manager".

Informationen für Amazon Seller
-------------------------------

Dieses Script ändert nur die Mehrwertsteuer Sätze für Artikel in Warexo, Webshop und dem POS Modul. Den Mehrwertsteuer Satz für Amazon Artikel ändern Sie bitte direkt in Ihren Seller-Central Einstellungen. Weitere Hilfestellung hierzu erhalten Sie direkt von Amazon.

Informationen für POS Benutzer
------------------------------

**Aktualisieren Sie unbedingt den Datenstamm an der Kasse am 01.07.2020 - ansonsten werden die Mehrwertsteuer Änderungen nicht korrekt übernommen und es kommt zu einem fehlerhaften Kassenbericht!**

Wichtige Hinweise
-----------------

Das dargestellte Script ist lediglich eine Hilfestellung, bitte prüfen Sie nach der Ausführung die Mehrwertsteuer Einstellungen für alle Verkaufskanäle. Durch technische Probleme kann die Ausführung des Scripts abgebrochen werden, hierauf haben wir keinen Einfluss.

Wir übernehmen keine Haftung für jegliche entstandenen Schäden die durch unsachgemäße Anwendung des obigen Scripts entstehen.

Bei Fragen kontaktieren Sie uns bitte wie gewohnt über das Ticket System.

.. |image0| image:: /_static/img/screenshots/Screenshot_2020-06-10-Warexo-Acme-Store2.png
   :class: wp-image-1942

