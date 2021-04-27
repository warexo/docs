Workflows
#########

Jedes Unternehmen hat individuelle Prozesse und Vorgehensweisen um sein Geschäft zu betreiben, um dieser Anforderung gerecht zu werden bietet Warexo mit den sogenannten Workflows eine Möglichkeit automatisierte Vorgänge im System anzustoßen. Ein Workflow besteht immer aus 3 Schichten:

-  Ereignis
-  Bedingung(en)
-  Aktion(en)

Um einen neuen Workflow anzulegen klicken Sie auf :menuselection:`Einstellungen --> Automatisierung --> Workflows --> Neuer Workflow`

Einstellungen
~~~~~~~~~~~~~

Aktiv
    Ob dieser Workflow derzeit ausgeführt wird

Titel
    Eindeutiger Titel um die Workflows zu unterscheiden

Ereignis
    Innerhalb von Warexo können verschiedenste Ereignisse vorkommen, vom Eingang einer Bestellung bis zum bearbeiten von Aufträgen.
    Wählen Sie in der Liste das gewünschte Ereignis bei dem die Aktion ausgelöst werden soll.

Bedingung
    Ob eine die Aktion eines Workflows ausgeführt wird kann über beliebige Bedingungen bestimmt werden.
    Klicken Sie auf |plus| :guilabel:`Hinzufügen` um eine neue Bedingung hinzuzufügen. Wählen Sie die Bedingung und daneben
    (wenn nötig) den gewünschten Wert. Jede Bedingung wird "UND" verknüpft, beachten Sie dazu die Beispiele unten.

Aktion
    Wenn alle Bedingungen zu einem bestimmten Ereignis zutreffen werden alle definierten Aktionen ausgeführt.
    Die Aktionen werden immer von oben nach unten ausgeführt. Klicken Sie auf |plus| :guilabel:`Hinzufügen`
    um eine neue Aktion hinzuzufügen. Füllen Sie anschließend die zugehörigen Felder der Aktion aus.

Beispiele
~~~~~~~~~

Auftrag bearbeiten
^^^^^^^^^^^^^^^^^^

Dieser spezielle Workflow wird immer angestoßen wenn die Schaltfläche "Auftrag bearbeiten" innerhalb des Auftrags gedrückt wird,
dieses Beispiel druckt automatisch das DHL Label und die Rechnung, versendet eine digitale Kopie der Rechnung an den Kunden
und markiert die Bestellung automatisch als versendet.

Ereignis
    Aufträge bearbeiten
    (*wenn Sie die Schaltfläche "Auftrag bearbeiten" innerhalb eines Auftrages betätigen wird diese Aktion ausgeführt, die Aktion kann auch über die Auftragsliste in Masse gestartet werden)*

Bedingungen
    Geben Sie in diesem Fall keine Bedingungen an, wenn Sie möchten können Sie Bedingungen definieren und verschiedene Aktionen je nachdem welche Daten der Auftrag enthält ausführen.

Aktionen
    Dokument drucken

    -  **Dokument** Intraship Label
    -  **Anzahl** 1
    -  **WAWI-Benutzer** Eingelogger Benutzer
    -  **In Sprache** Standardsprache

    *(Es wird ein bestimmtes Dokument ausgedruckt, die Daten des zugehörigen Objekts aus dem Ereignis werden übergeben)*

    Dokument drucken

    -  **Dokument** Rechnung
    -  **Anzahl** 1
    -  **WAWI-Benutzer** Eingelogger Benutzer
    -  **In Sprache** Standardsprache

    *(Es wird ein bestimmtes Dokument ausgedruckt, die Daten des zugehörigen Objekts aus dem Ereignis werden übergeben)*

    Dokument per E-Mail senden

    -  **Dokument** Rechnung
    -  **E-Mail** {{entity.offer.billingEmail}}
    -  **CC** *leer lassen*
    -  **In Sprache** Standardsprache
    -  **Textbaustein** *leer lassen*

    *(Es wird ein bestimmtes Dokument per E-Mail gesendet, die Daten des zugehörigen Objekts aus dem Ereignis werden übergeben)*

    Bestellung versenden

    Keine Einstellungen notwendig

    *(Die Bestellung wird versendet, analog zur Schaltfläche "Bestellung versenden")*

Hintergrund Kommissionierung
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Durch diesen Workflow wird Ware die sich nicht im Lager befindet automatisch eingebucht, anschließend werden die
benötigten Picklisten automatisch erstellt und kommissioniert. Verwenden Sie diesen Workflow wenn Sie mit der
Lagerhaltungsfunktion arbeiten möchten aber den Schritt der Kommissionierung überspringen möchten.

Ereignis
    Prüfung vor dem Versenden
    (*wenn Sie die Schaltfläche "Jetzt versenden" innerhalb eines Auftrages betätigen wird diese Aktion zunächst ausgeführt, schlägt sie fehl wird der Vorgang abgebrochen)*

Bedingungen
    Bestellung mit Lagerverwaltung - ja

    *(Die Bestellung enthält mindestens einen Artikel bei dem die Option "Lagerverwaltung aktiv" aktiviert ist)*

    Bestellung ist kommissioniert - nein

    *(Die Bestellung wurde noch nicht kommissioniert)*

Aktionen
    Artikel automatisch ins Lager einbuchen (wenn nicht auf Lager)

    *(Die von der Bestellung benötigte Menge der Artikel wird automatisch auf einen bestimmten Lagerplatz gebucht wenn sie nicht vorhanden ist)*

    Pickliste(n) erstellen

    *(Die Pickliste für die Bestellung wird automatisch angelegt)*

    Pickliste im Hintergrund kommissionieren

    *(Die Pickliste für die Bestellung wird automatisch im Hintergrund kommissioniert)*
