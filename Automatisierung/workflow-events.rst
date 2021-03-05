Workflow Events
###############
:date: 2017-10-25 13:03
:author: admin
:category: Automatisierung
:slug: workflow-events
:status: published

In manchen Fällen bietet Warexo keine vorgegebene Schaltfläche um ein Event auszulösen. Für diesen Fall können Sie sich eigene Schaltflächen erzeugen und diese mit einem Workflow belegen. Ein Workflow Event lässt sich für einzelne Datensätze oder auch für mehrere Datensätze auslösen.

Workflow Event erstellen
~~~~~~~~~~~~~~~~~~~~~~~~

Erzeugen Sie im Bildschirm "Einstellungen" Workflow-Events ein neues Event über die Schaltfläche "Neues Workflow Event".

Titel
^^^^^

Dieser Titel wird auf den Schaltflächen angezeigt

Ident
^^^^^

Eindeutige Identifikation für dieses Event, keine Leer- und Sonderzeichen verwenden.

Controller
^^^^^^^^^^

Auf welche Art von Daten bezieht sich das Event, die Schaltfläche taucht in den jeweiligen Listen und Detailansichten der Auswahl auf.

Workflow verknüpfen
~~~~~~~~~~~~~~~~~~~

Erstellen Sie einen neuen Workflow (siehe `Workflows <https://docs.aggrowawi.de/automatisierung/workflows/>`__) und wählen Sie als Event das eben erstellte Workflow Event aus. Es erscheint unter seinem Titel in der Liste der Events. Legen Sie die gewünschten Aktionen und Bedingungen fest.

Workflow Event auslösen
~~~~~~~~~~~~~~~~~~~~~~~

Es gibt 2 Möglichkeiten ein Workflow Event auszulösen:

Für einen Datensatz
^^^^^^^^^^^^^^^^^^^

Öffnen Sie den Detailbildschirm des Datensatzes (z.B. Auftragsdetails für Aufträge) und klicken Sie in der Aktionsleiste auf die Schaltfläche Aktionen. Wählen Sie nun das gewünschte Event, der zugrunde liegende Workflow wird ausgelöst.

Für mehrere Datensätze
^^^^^^^^^^^^^^^^^^^^^^

Haken Sie die gewünschten Datensätze für die Massenbearbeitung in der jeweiligen Liste an (z.B. Auftragsliste) und klicken Sie auf "Ausgewählte Zeilen" => "Aktion wählen". Wählen Sie nun das gewünschte Event, der zugrunde liegende Workflow wird für alle gewählten Datensätze nacheinander ausgelöst.

Beispiel
--------

Sie möchten einen beliebigen Textbaustein per E-Mail versenden wenn im Auftrag unter Aktionen das Workflow Event ausgelöst wird.

Wenn Sie einen beliebigen Textbaustein per Mail an einen Kunden per Klick schicken möchten:

-  Einstellungen => Automatisierung => Workflow Events => Neu anlegen:

   -  Ident. ohne Sonder-/Leerzeichen vergeben
   -  Controller: In diesem Fall "Bestellungen"

-  Einstellungen => Automatisierung => Workflows => Neu anlegen:

   -  Event = Name des Workflow Events
   -  Neue Aktion:

      -  E-Mail senden aus Textbaustein:

         -  E-Mail: {{entity.offer.billingEMail}}
         -  Textbaustein auswählen

Anschließend erscheint in den Aufträgen unter Aktionen ein neuer Punkt der so heißt wie das Workflow Event. Bei Klick und dann sollte eine Mail an den Kunden gesendet werden
