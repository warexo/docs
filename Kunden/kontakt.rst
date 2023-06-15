Kontakt / Ticket System
########################

Warexo beinhaltet ein Ticket System das es Ihnen erlaubt den E-Mail und Telefonkontakt zu koordinieren.

Einrichtung
~~~~~~~~~~~~~

Das Ticketing ruft E-Mails von einem IMAP Postfach ab und verwaltet dieses, um die Funktion nutzen zu können
sollte ein eigenes E-Mail Postfach speziell für den Kundenkontakt angelegt werden.

.. Hint:: Bitte rufen Sie die E-Mails des Kontaktpostfachs niemals direkt ab, es könnten sonst Nachrichten verloren gehen

Die Einstellungen zum IMAP Postfach legen Sie in den Mandanteneinstellungen unter
:menuselection:`Einstellungen --> Mandant --> Stamm --> Webshop` fest.

IMAP Server
    Server Adresse des E-Mail Postfachs

IMAP Port
    Server Port

IMAP Benutzer / Passwort
    IMAP Zugangsdaten

IMAP Verschlüsselung
    Genutzter Verschlüsselungsalgorithmus

.. Hint:: Sie erhalten die notwendigen IMAP Einstellungen von Ihrem Hoster bzw.
    E-Mail Provider

E-Mails abrufen
~~~~~~~~~~~~~~~~

Die Kundennachrichten können manuell über :menuselection:`Kunden --> Kontakt --> Nachrichten aktualisieren`
oder automatisch im Hintergrund über den unter :menuselection:`Systemverwaltung --> Schnittstellen --> Plugins --> Ticketsystem / Kundenkontakt`
angezeigten Cronjob abgerufen werden.

Auf Nachrichten antworten
~~~~~~~~~~~~~~~~~~~~~~~~~~

Wählen Sie die gewünschte Nachricht aus, verfassen Sie ihre gewünschte Antwort im Bereich :menuselection:`Antwort verfassen`
(die E-Mail-Vorlage können Sie im Textbaustein "Kontakt: Antwort für Kunde" anpassen)

Betreff
    Vorausgefüllt mit ursprünglichem Betreff, Re: als Prefix

Empfänger
    Vorausgefüllt mit Absender Adresse

CC
    Wenn gewünscht CC Adresse für die Nachricht

Status
    Status des Kontakts nach absenden der Nachricht, Standard ist :guilabel:`Beantwortet`

Vorlage
    Wenn gewählt wird automatisch eine Nachrichtenvorlage in das Nachrichtenfeld übertragen

Nachricht
    Geben Sie hier den Antworttext ein

Dateianhänge
    Beliebige Dateianhänge die mit versendet werden sollen

Kontakt Details bearbeiten
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Im Bereich :menuselection:`Informationen` haben Sie die Möglichkeit verschiedene Einstellungen vorzunehmen

Betreff
    Ändert den Betreff der Nachricht

Ticketbearbeiter
    Zuständiger Benutzer (aus der Benutzergruppe "Ticket-Support") der diese Nachricht bearbeiten soll.

Zugewiesene Benutzer
    Mehrere Benutzer (aus der Benutzergruppe "Ticket-Support") die diese Nachricht überwachen sollen

Kunde
    Verknüpfter Kunde

Zugewiesene Kunden
    Erlaubt es Nachrichten mehreren Kunden zuzuweisen

Status
    Aktueller Status der Nachricht

Kundennotiz
    Notiz die dem Kunden im Extranet angezeigt wird

Interne Notiz
    Interne Notiz die nur Ihre Sachbearbeiter sehen können

Voraussichtlicher Bearbeitungstermin
    Datum das dem Kunden als voraussichtlicher Bearbeitungstermin angezeigt wird

Geschätzer Aufwand
    Geschätzter Zeitaufwand der dem Kunden angezeigt wird

Bearbeitungstermin
    Start- und Enddatum an dem die Anfrage bearbeitet wird

Mandant
    Zugewiesener Mandant

Zeiterfassung erlaubt
    Der Kunde hat der Zeiterfassung zu diesem Ticket zugestimmt

Zeit tracken
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Ihre Sachbearbeiter können notieren wieviel Zeit für die Bearbeitung eines
Vorgangs benötigt wurde. Anhand dieser Zeiten können später Abrechnungen an
die Kunden erstellt werden. Über die Funktion :guilabel:`Timer starten` wird
ein Timer gestartet der im Hintergrund die verbrauchte Zeit zählt bis dieser
wieder beendet wird.

Um die verbrauchten Zeiten abzurechnen können Sie mit dem erweiterten Filter
:guilabel:`Tickets mit nicht abgerechneter Zeit` alle nicht abgerechneten Tickets
anzeigen und über die Funktion :menuselection:`Ausgewählte Zeilen --> Zeit abrechnen`
automatisch Angebote erstellen die die offenen Zeiten abrechnen.

.. Hint:: Der pro Stunde veranschlagte Preis wird in den Benutzergruppen festgelegt.
