Workflow Events
###############

In manchen Fällen bietet Warexo keine vorgegebene Schaltfläche um ein Event auszulösen. Für diesen Fall können Sie sich
eigene Schaltflächen erzeugen und diese mit einem Workflow belegen. Ein Workflow Event lässt sich für einzelne Datensätze
oder auch für mehrere Datensätze auslösen.

Workflow Event erstellen
~~~~~~~~~~~~~~~~~~~~~~~~

Erzeugen Sie unter :menuselection:`Einstellungen --> Automatisierung --> Workflow-Events --> Neues Workflow Event` ein neues Event

Titel
    Dieser Titel wird auf den Schaltflächen angezeigt

Ident
    Eindeutige Identifikation für dieses Event, keine Leer- und Sonderzeichen verwenden.

Controller
    Auf welche Art von Daten bezieht sich das Event, die Schaltfläche taucht in den jeweiligen Listen und Detailansichten der Auswahl auf.

Workflow verknüpfen
~~~~~~~~~~~~~~~~~~~

Erstellen Sie einen neuen Workflow (siehe `Workflows <https://docs.warexo.de/automatisierung/workflows/>`__) und wählen Sie als Event das eben erstellte Workflow Event aus.
Es erscheint unter seinem Titel in der Liste der Events. Legen Sie die gewünschten Aktionen und Bedingungen fest.

Workflow Event auslösen
~~~~~~~~~~~~~~~~~~~~~~~

Es gibt 2 Möglichkeiten ein Workflow Event auszulösen:

Für einen Datensatz
^^^^^^^^^^^^^^^^^^^

Öffnen Sie den Detailbildschirm des Datensatzes (z.B. Auftragsdetails für Aufträge) und klicken Sie in der Aktionsleiste auf die Schaltfläche Aktionen.
Wählen Sie nun das gewünschte Event, der zugrunde liegende Workflow wird ausgelöst.

Für mehrere Datensätze
^^^^^^^^^^^^^^^^^^^^^^

Haken Sie die gewünschten Datensätze für die Massenbearbeitung in der jeweiligen Liste an (z.B. Auftragsliste) und klicken Sie auf :menuselection:`Ausgewählte Zeilen --> Aktion wählen`.
Wählen Sie nun das gewünschte Event, der zugrunde liegende Workflow wird für alle gewählten Datensätze nacheinander ausgelöst.

Beispiel
--------

Sie möchten einen beliebigen Textbaustein per E-Mail versenden wenn im Auftrag unter Aktionen das Workflow Event ausgelöst wird.

Wenn Sie einen beliebigen Textbaustein per Mail an einen Kunden per Klick schicken möchten:

-  :menuselection:`Einstellungen --> Automatisierung --> Workflow Events --> Neues Workflow Event`

   -  Ident. ohne Sonder-/Leerzeichen vergeben
   -  Controller: In diesem Fall `Bestellungen`

-  :menuselection:`Einstellungen --> Automatisierung --> Workflows --> Neuer Workflow`

   -  Event = Name des Workflow Events
   -  Neue Aktion:

      -  E-Mail senden aus Textbaustein:

         -  E-Mail: {{entity.offer.billingEMail}}
         -  Textbaustein auswählen

Anschließend erscheint in den Aufträgen unter Aktionen ein neuer Punkt der so heißt wie das Workflow Event.
Bei Klick wird eine Mail an den Kunden gesendet.

Standard Workflow Events
~~~~~~~~~~~~~~~~~~~~~~~~

Bestellung versenden
    1. Event "Prüfung vor dem Versenden" (check.order.can.send)
    2. Event "Vor dem Versenden" (before.send.order)
    3. Optionell: Event "Alle Teillieferungen versendet" (all.partial.orders.shipped)
    4. Event "Bestellung versendet" (send.order)
