Aufträge bearbeiten
###################

.. attention:: Um mit Warexo optimal arbeiten zu können empfehlen wir Ihnen für Ihre Produkte die Lagerhaltung zu aktivieren und eine Inventur durchzuführen bevor Sie Aufträge abarbeiten. Ohne diese Schritte kann es zu falschen oder unübersichtlichen Lagerbeständen im System kommen.

Die Auftragsbearbeitung erfolgt in 4 einfachen Schritten, Sie können entweder einzelne Aufträge oder mehrere Aufträge gleichzeitig bearbeiten.

Artikel aus dem Lager holen (Picking)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. Hint:: Damit eine Pickliste erstellt werden kann muss mindestens ein Artikel aus dem Auftrag mit aktivierter Lagerhaltung vorhanden sein. Wenn Sie die Lagerhaltung nicht verwenden möchten verwenden Sie bitte das Dokument Packliste und überspringen die Kommissionierung.

Einzelkommissionierung
^^^^^^^^^^^^^^^^^^^^^^

Diese Methode erzeugt eine einzelne Pickliste pro Auftrag

-  Öffnen Sie den gewünschten Auftrag über die Auftragsliste, Sie finden die Auftragsliste im Menüpunkt :menuselection:`Auftragsverwaltung --> Aufträge`
-  Wählen Sie den Menüpunkt :menuselection:`Dokumente --> Pickliste --> Drucken` oder  :menuselection:`Dokumente --> Pickliste --> Herunterladen` wir empfehlen den direkten Druck

Sammelkommissionierung
^^^^^^^^^^^^^^^^^^^^^^
 
Diese Methode erzeugt eine Pickliste für beliebig viele Aufträge

-  Öffnen Sie die Auftragsliste, Sie finden die Auftragsliste im Menüpunkt :menuselection:`Auftragsverwaltung --> Aufträge`
-  Markieren Sie die |check-square| Checkbox bei den gewünschten Aufträgen
-  Starten Sie den Druck über :menuselection:`Ausgewählte Zeilen --> Picklisten drucken`

.. DANGER:: Es kann vorkommen dass nicht alle Artikel eines Auftrags auf Lager sind, in diesem Fall kann für den entsprechenden Auftrag keine Pickliste erstellt werden und Sie erhalten eine Fehlermeldung. Korrigieren Sie in diesem Fall zunächst den Lagerbestand über eine Inventur. Wenn Sie stets darauf achten alle Lagerbewegungen über das System zu vollziehen sollten solche Meldungen nur im seltensten Fall vorkommen.

Die Pickliste(n) werden nun ausgedruckt, auf der Pickliste befinden sich folgende Informationen:

-  Nummer der Pickliste
-  Bestellnummern - alle Bestellnummern der Artikel auf dieser Pickliste
-  Barcode
-  Auftragsbearbeiter - wenn zugewiesen
-  Mandant - zugehöriger Mandant
-  Datum - Erstelldatum der Pickliste
-  Liste der Artikel mit benötigter Anzahl, wegeoptimiertem Lagerort zur Abholung, Artikelnummer, Bezeichnung und EAN oder Seriennummer / MHD

Nehmen Sie nun die Pickliste(n) und holen Sie nacheinander alle Artikel aus dem Lager

Kommissionierung
~~~~~~~~~~~~~~~~

Sie können die abgeholte Ware nun Auftrag für Auftrag abarbeiten oder die Ware zuerst verpacken, 
wie Sie den Prozess gestalten ist abhängig von Ihren Präferenzen.

Ware vorverpacken
^^^^^^^^^^^^^^^^^

Scannen Sie den Barcode auf der Pickliste oder rufen Sie die Pickliste über den Menüpunkt :menuselection:`Auftragsverwaltung --> Picklisten` 
auf und klicken auf die Schaltfläche :guilabel:`Kommissionierung`

In beiden Fällen öffnet sich der Bildschirm zum verpacken der Ware. In diesem Bildschirm sehen Sie eine Auflistung 
aller Artikel und Bestellungen die zu dieser Pickliste gehören. 

Scannen Sie nun Artikel für Artikel, in der Liste der Bestellungen werden diese nun zu den einzelnen Bestellungen zugeordnet.
Alternativ können Sie auch die Schaltfläche :guilabel:`Hinzufügen` neben der jeweiligen Position verwenden.

Legen Sie den Artikel nach dem Scannen in den zugehörigen Versandkarton, wir raten dazu die Kartons mit der Auftragsnummer 
zu versehen wenn Sie mehrere Aufträge bearbeiten.

Wenn Sie alle Artikel abgearbeitet haben erscheint eine Meldung und Sie können die Kommissionierung abschließen. 
Wenn Ihnen kein Barcode Scanner zur Verfügung steht können Sie die einzelnen Artikel auch über die Schaltfläche "hinzufügen"
zuordnen.

Einzelaufträge verpacken
^^^^^^^^^^^^^^^^^^^^^^^^

Öffnen Sie den gewünschten Auftrag über die Auftragsliste, klicken Sie auf die Schaltfläche :guilabel:`Kommissionierung`

Scannen Sie nun alle Artikel die zu diesem Auftrag gehören nach einander ein und legen diese in den Versandkarton. 

Wenn alle Artikel gescannt wurden erscheint eine Meldung und Sie können die Kommissionierung abschließen. 
Wenn Ihnen kein Barcode Scanner zur Verfügung steht können Sie die einzelnen Artikel auch über die Schaltfläche 
:guilabel:`Hinzufügen` zuordnen.

Versand vorbereiten
~~~~~~~~~~~~~~~~~~~

Dokumente drucken
^^^^^^^^^^^^^^^^^

Drucken Sie nun die für einzelnen Aufträge notwendigen Dokumente aus (Rechnung, Lieferschein, Paketlabel etc.)
Sie können dies wieder entweder für einzelne Aufträge oder für mehrere Aufträge gleichzeitig tun. 
Verwenden Sie hierzu die Einzelansicht der Aufträge oder die Massenbearbeitung, 
der Vorgang ist analog zum Erstellen der Pickliste.

Legen Sie die gewünschten Dokumente den einzelnen Paketen bei und legen Sie in den Warenausgang.

Aufträge als versandt markieren
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. attention:: Aufträge die nicht versendet werden verfälschen die reservierten Lagerbestände

Um die Kunden über den Warenversand zu benachrichtigen und die reservierten Lagerbestände zu übertragen markieren 
Sie nun die einzelnen Aufträge als versendet. 

Auch hier können Sie mehrere oder einzelne Aufträge markieren.

Automatisierung
~~~~~~~~~~~~~~~

Alle Prozesse des Warenausgangs können über Workflows Voll- oder Teilautomatisiert werden, 
da jedes Unternehmen seine eigenen Arbeitsabläufe und Methoden hat ist dieser Prozess im Standard nicht automatisiert. 

Im Abschnitt :doc:`Workflows </Automatisierung/workflows>` des Handbuchs stehen Ihnen Beispiele und weitere Informationen zur Automatisierung zur Verfügung. 
Wenn Sie Fragen zu diesem komplexen Thema haben sprechen Sie uns gerne an und wir unterstützen Sie.
