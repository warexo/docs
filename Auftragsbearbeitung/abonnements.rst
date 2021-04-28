Abonnements
############

Die Abonnements Funktion hilft dabei wiederkehrende Zahlungen für bestimmte Artikel oder Dienstleistungen anzulegen.
Hiefür werden für Kunden nach bestimmten Kriterien zu bestimmten Zeiten automatisch Aufträge im System generiert.

.. _Abonnements Plugin Einstellungen:

Plugin Einstellungen
--------------------

Sie finden die zugehörigen Plugin Einstellungen unter :menuselection:`Systemverwaltung --> Schnittstellen --> Plugins --> Abonnement`

Vertragsnummernkreis
    :doc:`Nummernkreis </Allgemein/nummernkreise>` für Vertragsnummern

Max. Anzahl der Erinnerungen bei Nichtzahlung
    Wie oft das Workflow Event `Zahlungsverzug des Abonnementvertrags (Erinnerung)`
    ausgelöst wird wenn eine Abonnementzahlung nicht pünktlich eingeangen ist. Anschließend wird das Workflow Event
    `Kündigungsprozess des Abonnementvertrags` ausgelöst.

    Legen Sie die entsprechenden :doc:`Workflows </Automatisierung/workflows>` an um Kunden per Mail
    zu Benachrichtigen oder Verträge automatisch zu Kündigen etc.

Anzahl der Tage zwischen den Erinnerungen
    Tage zwischen den Erinnerungen

Rechnungen Cron Url
    Dieses Cron Kommando muss ein mal täglich ausgeführt werden damit die Aufträge zu den Abos generiert werden.
    Legen Sie hierfür einen entsprechenden Cronjob bei Ihrem Hosting Provider an.

Abonnements anlegen
---------------------

Erstellen Sie über :menuselection:`Auftragsverwaltung --> Abonnements --> Neuer Abonnementvertrag` ein neues Abo.

Stammdaten
~~~~~~~~~~~~~~~~~~~~~~

Titel
    Beschreibender Titel für dieses Abo (automatisch vorausgefüllt)

Nummer
    Fortlaufende Nummer den Vertrags (automatisch vorausgefüllt)

Vetragsgruppe
    Wenn gewünscht kann der Vertrag einer Gruppe zugewiesen werden

Status
    Zugewiesener Status des Vertrags

Vertragsdatum
    Beginn des Vertrags

Unterschrieben am
    Hier kann optional das Unterschriftsdatum hinterlegt werden

Vertragsdauer
    Nach dieser Anzahl von Monaten werden für dieses Abo keine Aufträge mehr generiert
    (optional, ausgehend von Vertragsdatum bzw. Abrechnung ab Datum)

Abrechnung ab Datum
    Wenn gesetzt werden Aufträge für diesen Vertrag erst ab diesem Datum generiert

Notiz
    Interne Notiz

Kunde
    Kunde mit dem das Abo verknüpft ist

Uploads
    Erlaubt es Ihnen beliebige Dateianhänge zu diesem Vertrag zu hinterlegen (z.B. Unterschriebener Vertrag als Scan)

Positionen hinzügen
~~~~~~~~~~~~~~~~~~~~~~

Die einzelnen Positionen des Vertrages werden genutzt um die späteren Artikelpositionen im Auftrag anzugeben. Durch
klick auf |plus|:menuselection:`Hinzufügen` können belibig viele Positionen eingefügt werden.

Sortierung
    Sortierung der Position innerhalb des Auftrags

Anzahl
    Anzahl der Position

Artikel
    Artikel der verknüpft werden soll, freie Positionen sind für Abonnements nicht verfügbar.

Verkaufspreis
    Preis der Position, Netto wenn die Option :guilabel:`Netto Modus` in den Konditionen gesetzt ist - sonst Brutto

Zus. Info
    Erlaubt es zusätzliche Informationen in der Rechnungsposition anzugeben, wie zum Beispiel den zugehörigen
    Abrechnungszeitraum `Ihr Abo 03/2021`. Darf Twig Anweisungen enthalten
    `{{ "+1 month"|date("m") }}/{{ "+1 month"|date("Y") }}` ergibt `03/2021` je nach Datum

Kündigungsdatum
    Wenn eine Position gekündigt wird dann kann hier das Kündigungsdatum angegeben werden, die Position wird ab dann
    nicht mehr mit berechnet

Notiz
    Interne Notiz

Konditionen
~~~~~~~~~~~~~~~~~~~~~~

.. Hint:: Warexo bietet ein umfangreiches System um genau zu definieren wann eine Zahlung für ein Abo fällig ist. Nehmen
    Sie sich Zeit die Einstellungen an einem Testbenutzer auszuprobieren. Gerne hilft Ihnen unser Support bei speziellen
    Fragen weiter.

Zahlungsart
    Die Zahlungsart die für den Auftrag verwendet werden soll, eventuell Felder zu Zahlungsart erscheinend darunter.

Auftragstermine
    Dieses Feld steuert wann und wie oft Aufträge für diesen Vertrag generiert werden sollen. Siehe :ref:`Abonnements Auftragstermine definieren`.

Auftragstermine gültig ab
    Analog zum Feld :guilabel:`Abrechnung ab Datum` - dieses Feld wird bei einer manuellen Generierung von Aufträgen ignoriert.

Benachrichtigung über bevorstehende Lieferung
    Definiert wann das Workflow Event `Abonnementvertrag: Benachrichtigung über bevorstehende Lieferung` ausgelöst werden soll.
    Wird im selben Format wie die Auftragstermine angegeben. Nutzen Sie diese Funktion um Kunden über eine bevorstehende Lieferung
    oder Abbuchung zu informieren, legen Sie hierzu einen Workflow mit dem Event an.

Zahlungsfrist
    Gibt an wann die zugehörige Rechnung fällig wird. Wird im `PHP strtotime <https://www.php.net/manual/de/function.strtotime.php>`__
    Format angegeben. Nutzen Sie unbedingt eine relative Zeitangabe.

    Beispiele

    - Erster Tag des Folgemonats nach Auftragsanlage :guilabel:`first day of next month`
    - 2 Tage nach Auftragsanlage :guilabel:`+2 days`
    - Nächster Dienstag nach Auftragsanlage :guilabel:`next Tuesday`

Versandart
    Versandart die dem Auftrag zugewiesen wird

Netto Modus
    Wenn aktiviert werden die Positionspreise Netto angegeben

VK-Preise als Netto-Preise
    Wenn aktiviert werden die Positionspreise als Netto Preise in den Auftrag übernommen

Währung
    Verwendete Währung für generierte Aufträge

Zahlungsart Gebühr
    Zahlungsart Aufschlag für generierte Aufträge

Versandkosten
    Versandkosten für generierte Aufträge

Rabatt
    Prozentualer oder fixer Rabatt für generierte Aufträge, nutzen Sie hier bitte nur eines der Felder

.. _Abonnements Auftragstermine definieren:

Auftragstermine definieren
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Das Feld Auftragstermine kann sehr flexibel eingesetzt werden, so können Abos z.B. 2 oder 4-Wöchig oder zu bestimmten
Tagen Aufträge generieren. Ein Stern :guilabel:`*` wird als Platzhalter genutzt um belibige Wochen, Tage oder Monate
zu erlauben. Mit dem Minus Zeichen :guilabel:`-` können Bereiche definiert werden. Mit einem Komma :guilabel:`,` werden
mehrere Auftragsterminbereiche erlaubt, dadurch werden mehrere Aufträge pro Monat definiert.

Zur Vereinfachung erlaubt dieses Feld auch spezielle Eingaben in deutschen Worten.

Hier einige Fallbeispiele um das Format zu verdeutlichen:

01.*.*
    Immer am 01. des Monats (monatliches Abo, Auftragserzeugung am 01.)

15.*.*
    Immer am 15. des Monats (monatliches Abo, Auftragserzeugung am 15.)

01.*.*, 15.*.*
    Immer am 01. und 15. des Monats (2 wöchentliches Abo, jeweils zum 01. und 15.)

01.01.*, 01.03.*, 01.05.*, 01.07.*, 01.09.*, 01.11.*
    Immer am 01. des Monats, jedoch nur alle 2 Monate (Januar, März, Mai, Juli, September, November)

gerade Woche: jeden zweiten Samstag
    Jeden Samstag, jedoch nur in geraden Wochen (2. und 4. Woche)

ungerade Woche: jeden zweiten Dienstag
    Jeden Dienstag, jedoch nur in ungeraden Wochen (1. und 3. Woche)

01-05.*.*
    Immer zwischen dem 01. und 05. des Monats.

.. Hint:: Nutzen Sie den Bereichsoperator :guilabel:`-` wenn aufgrund der Serverlast nicht alle Aufträge an einem Tag generiert werden
    können. Es werden keine doppelten Aufträge generiert, der Bereich erlaubt es Warexo lediglich wenn notwendig auch an
    späteren Tagen noch anfallende Bestellungen anzulegen. Zusätzlich kann ein Bereich bei Serverproblemen helfen um
    Aufträge am Tag nach einem Ausfall noch zu Erstellen.

Aufträge generieren
---------------------

.. attention:: Wenn ein Auftrag durch ein Abonnement generiert wird dann werden
    **keine Bestellbestätigungs- oder Stornierungs E-Mails versendet**.

    Wenn trotzdem Bestellbestätigungen versendet werden sollen nutzen Sie bitte das entsprechenden Workflow Event `Abonnementvertrag-Bestellung angelegt`.

    Für Stornierungen nutzen Sie das Workflow Event `Bestellung storniert` mit der Bedingung `Bestellung aus einem Abonemmentvertrag`

Die Aufträge werden entweder automatisch über den Cronjob (siehe :ref:`Abonnements Plugin Einstellungen`) oder manuell erzeugt.
Die manuelle Erzeugung kann genutzt werden um Aufträge auch außerhalb des Abrechnung ab Datums zu erzeugen. Die manuelle
Methode schlägt fehl wenn der Vertrag abgelaufen bzw. gekündigt ist oder der Auftragstermin nicht zum aktuellen Datum passt.

Die Funktion befindet sich unter :menuselection:`Auftragsverwaltung --> Abonnements --> [Abo wählen] --> Aufträge anlegen`

Verträge verwalten
---------------------

Verträge können manuell oder automatisch gesperrt oder gekündigt werden. Eine Sperre verhindert dass weitere Aufträge
generiert werden, diese Sperre kann wieder aufgehoben werden (Zahlungsverzug etc.). Ein gekündigter Vertrag erzeugt
keine Aufträge mehr (normale Kündigung).