Installationsassistent
######################

Der Installationsassistent lädt beim ersten Start die benötigten Pakete der Drittanbieter herunter, 
dieser Vorgang kann einige Zeit in Anspruch nehmen. 
Sollte eine Fehlermeldung erscheinen installieren Sie bitte die Drittanbieter Pakete manuell.

Datenbank Einstellungen
~~~~~~~~~~~~~~~~~~~~~~~

Geben Sie hier die Zugangsdaten zu Ihrer MySQL Datenbank ein, 
legen Sie diese bitte vorher in Ihrem Hosting Control Panel oder direkt auf dem Server an. 
Es muss sich um eine MySQL 5 Datenbank handeln.

Datenbank Initialisierung
~~~~~~~~~~~~~~~~~~~~~~~~~

Nachdem Sie korrekte Datenbank Daten eingegeben haben werden automatisch alle notwendigen Daten in Ihre Datenbank geschrieben. 
Bitte unterbrechen Sie diesen Vorgang nicht und schließen Sie nicht das Browser Fenster.

Admin Benutzer
~~~~~~~~~~~~~~

Erstellen Sie hier den Hauptbenutzer, mit diesem Super Administrator können Sie alle Funktionen aufrufen. 
Bitte achten Sie darauf eine korrekte E-Mail Adresse einzugeben und sich Benutzernamen und Passwort zu merken.

Config Anpassung
~~~~~~~~~~~~~~~~

Öffnen Sie nach Abschluss der Installation die Datei app/config/parameters.yml und passen Sie die Einstellung
:guilabel:`wawi.url` an. Geben Sie hier die vollständige Webadresse der Installation ein z.B. :guilabel:`https://wawi.example.org`

Leeren Sie anschließend den Systemcache über :menuselection:`Systemverwaltung --> Systemaktualisierung --> Cache leeren`