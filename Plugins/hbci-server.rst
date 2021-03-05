HBCI Server
###########
:date: 2015-02-18 11:32
:author: admin
:category: Plugins
:slug: hbci-server
:status: published

[alert style="danger"]Die Einrichtung des HBCI Servers sollte auf jeden Fall von einem sachkundigen Mitarbeiter durchgeführt werden, ein nicht sachgemäß abgesicherter HBCI Server kann ein erhebliches Sicherheitsrisiko bis hin zu ungewollten Kontobewegungen bedeuten. Bitte beachten Sie zusätzlich auf jeden Fall die Dokumentation des Hibiscus Payment Servers![/alert] Warexo besitzt eine integrierte Anbindung an den \ `Hibiscus Payment-Server <http://www.willuhn.de/products/hibiscus-server/>`__ - Der Hibiscus Payment-Server übernimmt vollautomatisch und zeitgesteuert die Ausführung von HBCI-Geschäftsvorfällen. Er ruft neue Umsätze ab und sendet Überweisungen oder Lastschriften bei Erreichen der Fälligkeit an die Bank. Die Umsätze werden vom Hibiscus Payment Server abgerufen und dann via XML-RPC an Warexo übertragen und dort verarbeitet. [alert]Die aktuellsten `Systemvoraussetzungen sowie Installationsanleitungen <http://www.willuhn.de/products/hibiscus-server/install.php>`__ finden Sie auf der `Website des Hibiscus Payment Servers <http://www.willuhn.de>`__ - die hier hinterlegte Dokumentation erhebt keinen Anspruch auf Vollständigkeit oder Aktualität[/alert]

Systemvoraussetzungen
---------------------

Betriebssystem
~~~~~~~~~~~~~~

-  GNU/Linux (x86 oder x86_64) oder
-  MS Windows

Datenbank
~~~~~~~~~

-  MySQL (mit InnoDB-Support) oder
-  H2 (embedded Datenbank, keine Installation nötig) oder
-  PostgreSQL

Java-Version
~~~~~~~~~~~~

-  SUN/Oracle Java 1.6 oder höher oder
-  OpenJDK 1.6 oder höher

Installation
------------

Die hier beschriebene Installationsmethode beschreibt die Verwendung der H2 Datenbank da es sich um die einfachste Methode handelt. Wenn Sie mit einer MySQL oder PostgreSQL Datenbank arbeiten möchten lesen Sie bitte die Dokumentation des Hibiscus Payment Servers.

-  Laden Sie das aktuellste Paket des Hibiscus Payment Servers hier herunter[button target="blank" size="large" color="green" url="http://www.willuhn.de/products/hibiscus-server/download.php"]Hibiscus Payment Server Download[/button]
-  Entpacken Sie das Paket in das gewünschte Installationsverzeichnis auf Ihrem Server
-  Wechseln Sie in das erstellte Verzeichnis "hibiscus-server"
-  Löschen Sie die Datei unter "cfg/de.willuhn.jameica.hbci.rmi.HBCIDBService.properties"
-  Starten Sie den Server mit folgendem Kommando

   ::

      ./jameicaserver.sh (Linux)
      jameicaserver (Windows)

Starten Sie den Server nicht mit Administrator- bzw. Root-Rechten sondern mit einem unpriviligierten Benutzeraccount.

Nur Linux: Das Init-Script "rcjameica" ist für OpenSuSE Linux vorbereitet, kann durch leichte Anpassungen aber auch für jede andere Distribution genutzt werden.

Beim ersten Start des Servers werden Sie zur Vergabe eines neuen Masterpasswortes aufgefordert, welches bei allen folgenden Starts benötigt wird. Wenn Sie dieses Passwort nicht immer manuell eingeben möchten (z.B. weil der Payment-Server beim Start des Betriebssystems automatisch geladen werden soll), dann können Sie es auch im Startkommando mit dem Parameter "-p <Passwort>" angeben.

Herstellen der Bankverbindung
-----------------------------

Damit der Hibiscus Server eine Verbindung mit der Bank herstellen kann muss, je nach Bank, möglicherweise ein sog. INI Brief erstellt werden und an die Bank weitergegeben werden. Sollten Sie bereits mit einer Online Banking Software arbeiten können Sie den Schlüssel aus dieser Software exportieren und in den Server einspielen. Wie und ob Sie den Schlüssel exportieren können entnehmen Sie bitte der Dokumentation Ihrer Online Banking Software. Sollte Ihre Bank noch mit dem alten PIN/TAN Verfahren arbeiten wird kein INI Brief benötigt.

Schlüssel erstellen (optional)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Die einfachste Methode um den Schlüssel zu erstellen ist die Verwendung einer Online Banking Software, der Hersteller des Hibiscus Payment Servers bietet hierfür die Java Desktop Software Hibiscus. Laden Sie die Software hier herunter und folgen Sie der Installationsanleitung:

[button size="large" color="green" target="blank" href="http://www.willuhn.de/products/hibiscus/download.php"]Hibiscus Download[/button]

Starten Sie die Software, Sie werden nun aufgefordert einen Bank Zugang einzurichten. Führen Sie die folgenden Schritte vollständig aus - nachdem Sie die Einrichtung abgeschlossen haben wird ein Schlüssel erstellt. Diese Schlüsseldatei wird später benötigt, bitte merken Sie sich das Passwort des Schlüssels so wie den Pfad zur Schlüsseldatei. Wenn Ihre Bank mit einer Schlüsseldiskette arbeitet wird ein INI-Brief erstellt, diesen müssen Sie ausdrucken, unterschreiben und Ihrer Bank zukommen lassen. Bitte fahren Sie erst fort wenn Sie die Bestätigung haben dass die Initialisierung erfolgreich abgeschlossen wurde.

Schlüssel importieren
~~~~~~~~~~~~~~~~~~~~~

Starten Sie den Hibiscus Payment Server - Sie erreichen die Oberfläche unter folgender URL:

::

   https://[IHRE_DOMAIN_HIER]:8080/hibiscus

Ersetzen Sie [IHRE_DOMAIN_HIER] durch die Server URL oder Domain. Anschließend erscheint eine Passwort Abfrage, geben Sie als Benutzernamen admin und als Passwort das von Ihnen beim ersten Serverstart gesetzte Master Passwort für den Payment Server ein.

|hibiscus-server|

Klicken Sie auf der Rechten Seite der Verwaltungsoberfläche auf HBCI-Sicherheitsmedien verwalten

|hibiscus-server-2|

Klicken Sie neben der Spalte mit der Bezeichnung die zu Ihrem Schlüssel passt auf öffnen - Schlüsseldiskette oder PIN/TAN je nach verwendetem Verfahren.

|pin-tan| |schluesseldiskette|

Je nach gewähltem Verfahren muss entweder für die zuvor erstellte Schlüsseldiskette aus der Desktop Software gewählt werden oder es müssen die entsprechenden PIN/TAN Daten eingegeben werden. Klicken Sie anschließend auf importieren bzw. speichern.

Konten prüfen
~~~~~~~~~~~~~

Nachdem die Verbindung erfolgreich hergestellt wurde werden automatisch die verfügbaren Konten dieser HBCI Kennung abgerufen. Rufen Sie den Startbildschirm des Hibiscus Payment Servers auf und klicken Sie rechts auf Konten verwalten.

|hibiscus-server|

Eine Liste mit Ihren Konten wird aufgeführt, für die spätere Verbindung mit Warexo müssen wir nun die Konten-ID heraus finden. Klicken Sie auf die Schaltfläche öffnen neben dem gewünschten Konto das mit Warexo verbunden werden soll. Die Adressezeile Ihres Browsers wird nun eine URL im folgenden Format anzeigen:

::

   https://[IHRE_DOMAIN_HIER]:8080/hibiscus/account.html?id=1

Die hier gezeigte URL endet mit der Zeichenkette **id=1** - dies bedeutet das gewünschte Konto besitzt die \ **ID 1**

Ein weiteres Beispiel

::

   https://[IHRE_DOMAIN_HIER]:8080/hibiscus/account.html?id=13

In diesem Fall wäre die **ID** für das gewünschte **Konto = 13** - bitte notieren Sie sich diesen Wert für jedes Konto das mit Warexo verbunden werden soll. Konten die Sie nicht für Zahlungsvorgänge benötigen sollten Sie aus Sicherheitsgründen löschen. Bitte beachten Sie dass die Konten nicht erneut abgerufen werden können, löschen Sie nur Konten die Sie wirklich nicht benötigen.

Plugin Einstellungen festlegen
------------------------------

Öffnen Sie Ihre Warexo Installation, wählen Sie den gewünschten Mandanten und rufen Sie den Menüpunkt **Systemverwaltung => Plugins** auf. Wählen Sie das Plugin mit der ident hbci aus und füllen Sie das folgende Formular aus.

**Jameica Server Url**

Geben Sie hier die Domain an unter der Ihr Hibiscus Payment Server läuft, die URL sollte wie folgt lauten und zeigt auf die XML-RPC Schnittstelle des Servers:

::

   https://[IHRE_DOMAIN_HIER]:8080/xmlrpc/

Analog zur vorherigen Einrichtung geben Sie auch hier wieder Ihren Domain Namen oder die Server IP ein, darauf folgend wie oben dargestellt den Port und den Knoten xmlrpc - **achten Sie auf den Slash am Ende dieser Einstellung**.

**Konto ID**

Die ID des Kontos die Sie im vorherigen Schritt "Konten prüfen" notiert haben, es werden nur die Umsätze dieses Kontos abgeglichen. Sie können für verschiedene Mandanten das selbe Konto verwenden, wir raten jedoch dazu für jeden Mandanten ein separates Konto einzurichten.

**Jameica Benutzer**

Der Benutzer mit dem Sie sich auch in der Weboberfläche authentifizieren, meisten **admin**

**Jameica Passwort**

Das Masterpasswort dass Sie beim ersten start des Hibiscus Payment Servers eingegeben haben, **nicht** das Passwort der Schlüsseldatei.

**Bestellnummern Prefix**

Sie können optional ein Bestellnummern Prefix für die Bestellungen festlegen, im Verwendungszweck der Buchung wird dann nicht mehr nur nach der blanken Bestellnummer sondern nach dem Prefix + der Bestellnummer gesucht. Dies erhöht die Erkennungsrate und führt zu einem leichteren Abgleich der Bestellungen. Beachten Sie jedoch dass Sie Ihren Kunden dieses Prefix mitteilen damit es auch wirklich im Verwendungszweck erscheint.

Beispiel:

| Sie setzen als Bestellnummern Prefix **AB-** fest, ein Kunde bestellt mit der
| **Bestellnummer 12345** - der Verwendungszweck der vom Kunden nun angegeben werden sollte lautet
| **AB-12345.** Wird dieser Verwendungszweck exakt so dem Kunden kommuniziert und auch vom Kunden angegeben kann die Bestellung zu 100% zugeordnet werden ohne eine Fehlertoleranz.

**Jameica Start/Stop Script**

Wenn gewünscht können Sie hier den Pfad zu einem Script eingeben das ausgeführt wird um den Server per Knopfdruck direkt in Ihrer Warexo Installation zu starten oder zu stoppen. Bitte achten Sie darauf dass der Aufruf direkt an die PHP exec Funktion weitergegeben wird - Sie sollten also dafür Sorge tragen den Prozess in den Hintergrund zu verschieben (z.B. via angehangenem & Zeichen unter Unix Systemen) und keine falschen oder schädlichen Kommandos an den Server zu senden.

Sicherheitsmaßnahmen ergreifen
------------------------------

Die folgenden Sicherheitshinweise stellen lediglich die Mindestanforderungen für einen Umgang mit dem HBCI Server dar - Sie sollten auf jeden Fall auf alle möglichen Maßnahmen zurückgreifen die Ihre Hostingumgebung Ihnen bietet.

Sichere Passwörter verwenden
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Stellen Sie sicher dass das Masterpasswort sowie die Passwörter der Schlüsseldateien ausreichend lang und komplex sind, zu kurze oder einfache Passwörter sind ein erhebliches Sicherheitsrisiko!

Nicht benötigte Operationen deaktivieren
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Der Hibiscus Payment Server ist von Grund auf so konfiguriert dass beliebige Operationen via XML-RPC ausgeführt werden können, für den Betrieb von Warexo werden jedoch nicht alle Operationen benötigt. Öffnen Sie die Web Oberfläche des Hibiscus Payment Servers und wählen Sie rechts den Punkt System-Einstellungen. In der Liste der XML-RPC Operationen benötigen Sie, sofern Sie keine direkten Rückbuchungen veranlassen wollen, lediglich konto und umsatz - alle anderen Operationen können deaktiviert werden. Wenn gewünscht können noch die Operationen sepaueberweisung und sepalastschrift für die entsprechenden Funktionen in Warexo aktiviert werden, setzen Sie in diesem Fall bitte zusätzlich ein sinnvolles Auftragslimit.

Firewall konfigurieren (wichtig!)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Stellen Sie sicher dass der Hibiscus Payment Server nur von der Server IP der Warexo Installation und wenn gewünscht von Ihrer Firmen IP erreichbar ist. Alle Anfragen von anderen Stellen sollten strikt unterbunden werden um höchst mögliche Sicherheit zu gewährleisten.

Installation überprüfen
-----------------------

Melden Sie sich in Ihrer Warexo Installation an, öffnen Sie den Menüpunkt **Auftragsverwaltung => HBCI**\ ** **\ und klicken Sie auf die Schaltfläche \ **Konto abgleichen**. Nach einigen Sekunden sollten die Umsätze abgeholt sein, sollten Sie eine Fehlermeldung erhalten prüfen Sie bitte die Installation und achten Sie darauf dass der HBCI Server gestartet und erreichbar ist. Klicken Sie nun auf **Umsätze gegen prüfen** und Sie erhalten eine aufbereitet Liste von abgeglichenen Umsätzen zu den eingegangenen Bestellungen. Für die Verwendung dieser Funktion lesen Sie bitte den zugehörigen Abschnitt im Handbuch von Warexo.

.. |hibiscus-server| image:: http://doku.aggrosoft.de.dedi4489.your-server.de/wp-content/uploads/2015/02/hibiscus-server-300x117.png
   :class: alignnone wp-image-69 size-medium
   :width: 300px
   :height: 117px
   :target: http://doku.aggrosoft.de.dedi4489.your-server.de/wp-content/uploads/2015/02/hibiscus-server.png
.. |hibiscus-server-2| image:: http://doku.aggrosoft.de.dedi4489.your-server.de/wp-content/uploads/2015/02/hibiscus-server-2-300x62.png
   :class: alignnone wp-image-72 size-medium
   :width: 300px
   :height: 62px
   :target: http://doku.aggrosoft.de.dedi4489.your-server.de/wp-content/uploads/2015/02/hibiscus-server-2.png
.. |pin-tan| image:: http://doku.aggrosoft.de.dedi4489.your-server.de/wp-content/uploads/2015/02/pin-tan-300x112.png
   :class: alignnone size-medium wp-image-77
   :width: 300px
   :height: 112px
   :target: http://doku.aggrosoft.de.dedi4489.your-server.de/wp-content/uploads/2015/02/pin-tan.png
.. |schluesseldiskette| image:: http://doku.aggrosoft.de.dedi4489.your-server.de/wp-content/uploads/2015/02/schluesseldiskette-300x81.png
   :class: alignnone size-medium wp-image-78
   :width: 300px
   :height: 81px
   :target: http://doku.aggrosoft.de.dedi4489.your-server.de/wp-content/uploads/2015/02/schluesseldiskette.png
