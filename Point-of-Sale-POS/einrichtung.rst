Einrichtung
###########

Für das POS System müssen bestimmte Software Bestandteile auf dem Terminal vorhanden sein.

.. Hint:: Bitte beachten Sie dass Lagerbestände im POS System nur aus dem Lager entnommen werden wenn es sich um ein Ausstellungs- oder Handelslager handelt.

Systemvoraussetzungen
~~~~~~~~~~~~~~~~~~~~~

-  Windows 7 oder Windows 10
-  `Foxit Reader <https://www.foxitsoftware.com/de/products/pdf-reader/>`__
-  :doc:`WAWIListener </Installation/wawilistener/>` installiert und konfiguriert

Warexo Einstellungen
~~~~~~~~~~~~~~~~~~~~

Achten Sie darauf dass folgende Einstellungen erfolgt sind:

-  :doc:`Plugin Einstellungen getätigt </Plugins/pos>`
-  Mindestens 1 :doc:`POS Laden erstellt <laeden>`
-  Mindestens 1 :doc:`POS Modell erstellt <modelle>` für diesen Laden
-  Mindestens 1 :doc:`POS Terminal erstellt <terminals>` für dieses Modell
-  Mindestens 1 POS Benutzer angelegt (siehe folgender Punkt)

Benutzereinrichtung
~~~~~~~~~~~~~~~~~~~

Legen Sie zunächst in der Benutzerverwaltung unter "Systemverwaltung" => "Benutzer" an. Jeder Mitarbeiter der sich
an einem Terminal anmelden können soll muss einen eigenen Benutzer erhalten. Vergeben Sie für die jeweiligen Benutzer
eine Bedienernummer und eine POS PIN. Beachten Sie bitte den Handbucheintrag zum Anlegen von neuen Benutzern.

Weisen Sie nun die Benutzer den jeweiligen Terminals zu an denen Sie sich anmelden können indem Sie die Einstellungen der Terminals anpassen.

WAWIListener Einstellungen
~~~~~~~~~~~~~~~~~~~~~~~~~~

Starten Sie auf dem jeweiligen Terminal den WAWIListener - klicken Sie im Menü auf :menuselection:`POS --> Einstellungen`.
Tragen Sie die zugehörige Nummer des Terminals ein und aktivieren Sie die Option :guilabel:`Kassenterminal (POS)` -
geben Sie den gewünschten Kassenzetteldrucker an. Klicken Sie auf OK um die Einstellungen zu bestätigen.

POS Login
~~~~~~~~~

Rufen Sie den Login Bildschirm der Warenwirtschaft mit dem Browser des gewünschten Terminals auf.
Klicken Sie auf den Button :guilabel:`POS` und geben Sie die Bedienernummer und POS Pin des gewünschten Benutzers ein.

Einrichting der TSE
~~~~~~~~~

-  Kopieren Sie die Dateien <WAWIListener-Ordner>\tsesdk\64bit\WormAPI.dll und <WAWIListener-Ordner>\tsesdk\64bit\WormAPIJni.dll ins Verzeichnis <WAWIListener-Ordner> (oder <WAWIListener-Ordner>\tsesdk\32bit\WormAPI.dll und <WAWIListener-Ordner>\tsesdk\32bit\WormAPIJni.dll falls die Kasse aufhängt)
-  Stecken Sie den TSE-Stick in eine USB-Anschluss ein (keine USB-Hubs verwenden!)
-  Tragen Sie die Seriennummer, Hauptlaufwerk, PIN, PUK und Time-Admin-PIN  in WAWIListener->POS->Einstellungen ein

   1. Seriennummer: z.B. kasse1
   
   2. Hauptlaufwerk: Hautplaufwerk des TSE-Stick, z.B. E
   
   3. PIN: 12345
   
   4. PUK: 123456
   
   5. Time-Admin-PIN: 98765
   
-  Starten Sie den WAWIListener neu
-  Aktualisieren Sie die Seite an der Kasse. Die TSE wird im WAWIListener automatisch konfiguriert.
-  Buchen Sie einen Testbeleg und prüfen Sie ob die TSE-Signatur auf dem Beleg steht
-  Stornieren Sie den Testbeleg
