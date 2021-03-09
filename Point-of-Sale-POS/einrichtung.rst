Einrichtung
###########
:date: 2016-02-02 14:52
:author: admin
:category: Point of Sale (POS)
:slug: einrichtung
:status: published

Für das POS System müssen bestimmte Software Bestandteile auf dem Terminal vorhanden sein.

[alert style="info"]Bitte beachten Sie dass Lagerbestände im POS System nur aus dem Lager entnommen werden wenn es sich um ein Ausstellungs- oder Handelslager handelt.[/alert]

Systemvoraussetzungen
~~~~~~~~~~~~~~~~~~~~~

-  Windows 7 oder Windows 10
-  Java SE (http://www.java.com/de/)
-  Foxit Reader (https://www.foxitsoftware.com/de/products/pdf-reader/)
-  LibreOffice (https://de.libreoffice.org/)
-  Adobe PDF Reader - DC Version wird derzeit nicht unterstützt (https://www.adobe.com/support/downloads/detail.jsp?ftpID=5507)
-  `WAWIListener <http://docs.warexo.de/allgemein/wawilistener/>`__ installiert und konfiguriert

Warexo Einstellungen
~~~~~~~~~~~~~~~~~~~~

Achten Sie darauf dass folgende Einstellungen erfolgt sind:

-  `Plugin Einstellungen getätigt <http://docs.warexo.de/plugins/pos/>`__
-  Mindestens 1 `POS Laden erstellt <http://docs.warexo.de/point-of-sale-pos/laeden/>`__
-  Mindestens 1 `POS Modell erstellt <http://docs.warexo.de/point-of-sale-pos/modelle/>`__ für diesen Laden
-  Mindestens 1 `POS Terminal erstellt <http://docs.warexo.de/point-of-sale-pos/terminals/>`__ für dieses Modell
-  Mindestens 1 POS Benutzer angelegt (siehe folgender Punkt)

Benutzereinrichtung
~~~~~~~~~~~~~~~~~~~

Legen Sie zunächst in der Benutzerverwaltung unter "Systemverwaltung" => "Benutzer" an. Jeder Mitarbeiter der sich an einem Terminal anmelden können soll muss einen eigenen Benutzer erhalten. Vergeben Sie für die jeweiligen Benutzer eine Bedienernummer und eine POS PIN. Beachten Sie bitte den Handbucheintrag zum Anlegen von neuen Benutzern.

Weisen Sie nun die Benutzer den jeweiligen Terminals zu an denen Sie sich anmelden können indem Sie die Einstellungen der Terminals anpassen.

WAWIListener Einstellungen
~~~~~~~~~~~~~~~~~~~~~~~~~~

Starten Sie auf dem jeweiligen Terminal den WAWIListener - klicken Sie im Menü auf POS => Einstellungen. Tragen Sie die zugehörige Nummer des Terminals ein und aktivieren Sie den Haken "Kassenterminal (POS)" - geben Sie den gewünschten Kassenzetteldrucker an. Klicken Sie auf OK um die Einstellungen zu bestätigen.

POS Login
~~~~~~~~~

Rufen Sie den Login Bildschirm der Warenwirtschaft mit dem Browser des gewünschten Terminals auf. Klicken Sie auf den Button [wawibtn type="secondary"]POS[/wawibtn] und geben Sie die Bedienernummer und POS Pin des gewünschten Benutzers ein.
