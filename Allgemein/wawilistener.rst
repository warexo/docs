Warexo Bridge
#############
:date: 2016-02-02 19:08
:author: admin
:category: Allgemein
:slug: wawilistener
:status: published
:attachments: /_static/img/screenshots/aggrowawi-listener-active.png

Warexo arbeitet komplett in Ihrem Webbrowser, damit Systemnahe Funktionen wie z.B. Druckfunktionen etc. verwendet werden können benötigen wir eine kleine Software im Hintergrund die mit Warexo kommuniziert. Hierfür würde die sog. Warexo Bridge geschaffen, dieses Java Programm ermöglicht alle nötigen Kommunikationen zwischen dem Arbeitsrechner und der Warenwirtschaft.

Installation
~~~~~~~~~~~~

-  Installieren Sie Java SE (8 oder 9) (https://www.java.com/de/)
-  Installieren Sie LibreOffice 6.1 (https://de.libreoffice.org/)
-  Installieren Sie Adobe Reader DC (https://get.adobe.com/de/reader/)
-  Laden Sie den WAWIListener herunter, die aktuellste Version finden Sie in Ihrer Warenwirtschaft unter dem Punkt "Systemverwaltung" => "Systemaktualisierung" oben rechts
-  Entpacken Sie das \*.zip Archiv direkt nach C:\WAWIListener
-  Starten Sie die Datei WAWIListener.jar per Doppelklick - das Programm muss immer laufen wenn Sie mit Warexo arbeiten.
-  **Nur für Kunden von DomainFactory:** Entfernen Sie in der Datei web/.htaccess die Rautenzeichen im Code

| # RewriteCond %{HTTP:Authorization} ^(.+)$
| # RewriteRule .\* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]

Die Warexo Bridge sollte immer im Hintergrund laufen wenn Sie mit Warexo arbeiten, ob die Verbindung aktiv ist sehen Sie oben in der Warenwirtschaft |image0| ist der Button Grün ist die Verbindung aktiv, ist der Button Rot konnte keine Verbindung hergestellt werden. Klicken Sie auf den roten Button um zu prüfen warum die Verbindung nicht hergestellt werden konnte.

Einrichtung
~~~~~~~~~~~

Nach dem ersten Start oder wenn Sie den Menüpunkt "WAWI" => "Einstellungen" wählen öffnet sich der Bildschirm um die Zugangsdaten zu hinterlegen.

WAWI-Url
^^^^^^^^

Url zur Installation der Warenwirtschaft inklusive Protokoll:

http://wawi.meinshop.de [wpb-faa icon="fa-thumbs-o-up"] korrekt

wawi.meinshop.de [wpb-faa icon="fa-thumbs-o-down"] falsch

http://wawi.meinshop.de/foo [wpb-faa icon="fa-thumbs-o-down"] falsch

Benutzer/Passwort
^^^^^^^^^^^^^^^^^

Benutzername und Passwort mit dem Sie sich auch in der Warenwirtschaft anmelden

Zeitabschnitt zwischen Drucken der Aufträge
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Sekunden die zwischen dem Druck von mehreren Aufträgen abgewartet wird wenn mehrere Aufträge abgearbeitet werden

Zeitabschnitt zwischen Drucken einzelner Dokumente
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Sekunden die zwischen dem Druck von mehreren Dokumenten abgewartet wird

Druckaufträge alle X Minuten abholen
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Sollte durch eine Hintergrundaufgabe eine Druckfunktion gestartet werden wird dieser in einer Warteschlange abgelegt. Der Computer prüft in diesem Intervall ob neue Aufträge vorhanden sind.

Pfad zu LibreOffice
^^^^^^^^^^^^^^^^^^^

Falls Sie LibreOffice nicht im standard Pfad installiert haben geben Sie hier den kompletten Pfad bis zur soffice.exe Datei ein - z.B. D:\Programme\LibreOffice\program\soffice.exe

Pfad zu AdobeReader
^^^^^^^^^^^^^^^^^^^

Falls Sie Adobe Reader nicht im standard Pfad installiert haben geben Sie hier den kompletten Pfad bis zur AcroRd32.exe Datei ein - z.B. C:\Program Files (x86)\Adobe\Reader 11.0\Reader\AcroRd32.exe

Rechnungen und Gutschriften in Ordner kopieren
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Wenn gewünscht können alle erstellten PDF Druckdateien in einen separaten Ordner kopiert werden

Druckprotokoll erstellen
^^^^^^^^^^^^^^^^^^^^^^^^

Wenn mehrere Dokumente gedruckt wird wird automatisch eine Übersicht gedruckt ob Fehler bei bestimmten Dokumenten aufgetreten sind

Adobe Reader nicht benutzen
^^^^^^^^^^^^^^^^^^^^^^^^^^^

Versucht den Druckauftrag direkt per PCL an den Drucker zu senden, PCL fähiger Drucker wird benötigt.

.. |image0| image:: /_static/img/screenshots/aggrowawi-listener-active.png
   :class: alignnone size-full wp-image-1794
   :width: 146px
   :height: 37px
