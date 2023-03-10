Warexo Bridge
#############

Warexo arbeitet komplett in Ihrem Webbrowser, damit Systemnahe Funktionen wie z.B. Druckfunktionen etc. 
verwendet werden können benötigen Sie eine kleine Software im Hintergrund die mit Warexo kommuniziert.

Hierfür würde die sog. Warexo Bridge (auch WAWIListener genannt) geschaffen, dieses Java Programm ermöglicht 
alle nötigen Kommunikationen zwischen dem Arbeitsrechner und der Warenwirtschaft.

Installation
~~~~~~~~~~~~

-  Installieren Sie Open JDK (8 oder 9) (https://adoptopenjdk.net/)
-  Installieren Sie LibreOffice (https://de.libreoffice.org/)
-  Installieren Sie FOXIT PDF Reader (https://www.foxit.com/de/pdf-reader/)
-  Laden Sie den WAWIListener herunter, die aktuellste Version finden Sie in Ihrer Warenwirtschaft unter dem Punkt "Systemverwaltung" => "Systemaktualisierung" oben rechts
-  Entpacken Sie das \*.zip Archiv direkt nach :guilabel:`C:\\WAWIListener`
-  Starten Sie die Datei :program:`WAWIListener.jar` per Doppelklick - das Programm muss immer laufen wenn Sie mit Warexo arbeiten.
-  **Nur für Kunden von DomainFactory:** Entfernen Sie in der Datei ``web/.htaccess`` die Rautenzeichen im Code

.. code-block::

   # RewriteCond %{HTTP:Authorization} ^(.+)$
   # RewriteRule .\* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]

.. sidebar:: Statusanzeige

   |image0| 

Die Warexo Bridge sollte immer im Hintergrund laufen wenn Sie mit Warexo arbeiten,
ob die Verbindung aktiv ist sehen Sie oben in Warexo.

Ist der Button Grün ist die Verbindung aktiv, ist der Button Rot konnte keine Verbindung hergestellt werden. 

Klicken Sie auf den roten Button um zu prüfen warum die Verbindung nicht hergestellt werden konnte.

Einrichtung
~~~~~~~~~~~

Nach dem ersten Start oder wenn Sie den Menüpunkt :menuselection:`WAWI --> Einstellungen` wählen 
öffnet sich der Bildschirm um die Zugangsdaten zu hinterlegen.

.. sidebar:: Korrekte WAWI-URL

   - http://wawi.meinshop.de |thumbs-up| korrekt
   - wawi.meinshop.de |thumbs-down| falsch
   - http://wawi.meinshop.de/foo |thumbs-down| falsch

WAWI-Url
^^^^^^^^

Url zur Warexo Installation inklusive Protokoll, achten Sie darauf bei aktiviertem SSL https als 
Protokoll voran zu stellen.

Benutzer / Passwort
^^^^^^^^^^^^^^^^^^^

Benutzername und Passwort mit dem Sie sich auch in Warexo anmelden

Zeitabschnitt zwischen Drucken der Aufträge
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Sekunden die zwischen dem Druck von mehreren Aufträgen abgewartet wird 
wenn mehrere Aufträge abgearbeitet werden

Zeitabschnitt zwischen Drucken einzelner Dokumente
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Sekunden die zwischen dem Druck von mehreren Dokumenten abgewartet wird

Druckaufträge alle X Minuten abholen
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Sollte durch eine Hintergrundaufgabe eine Druckfunktion gestartet werden 
wird dieser in einer Warteschlange abgelegt. 
Der Computer prüft in diesem Intervall ob neue Aufträge vorhanden sind.

Pfad zu LibreOffice
^^^^^^^^^^^^^^^^^^^

Falls Sie LibreOffice nicht im standard Pfad installiert haben geben 
Sie hier den kompletten Pfad bis zur soffice.exe Datei ein - 
z.B. :program:`D:\\Programme\\\LibreOffice\\\program\\\soffice.exe`

Rechnungen und Gutschriften in Ordner kopieren
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Wenn gewünscht können alle erstellten PDF Druckdateien in einen separaten Ordner kopiert werden

Druckprotokoll erstellen
^^^^^^^^^^^^^^^^^^^^^^^^

Wenn mehrere Dokumente gedruckt wird wird automatisch eine Übersicht gedruckt ob 
Fehler bei bestimmten Dokumenten aufgetreten sind

Adobe Reader nicht benutzen
^^^^^^^^^^^^^^^^^^^^^^^^^^^

Versucht den Druckauftrag direkt per PCL an den Drucker zu senden, PCL fähiger Drucker wird benötigt.

.. |image0| image:: /_static/img/screenshots/aggrowawi-listener-active.png
   :class: alignnone size-full wp-image-1794
   :width: 146px
   :height: 37px
