Inventuren
##########

.. Hint:: Um mit den vollen Lagerfunktionen von Warexo zu arbeiten muss der gesamte zu verwaltende Lagerbestand hinterlegt werden.
    Hierzu bietet Warexo eine Inventurfunktion um Massenweise Ihren derzeitigen Lagerbestand anzulegen,
    zusätzlich lässt sich hiermit auch die notwendige jährliche Inventur erledigen.

Stichtaginventur
~~~~~~~~~~~~~~~~

Um eine Inventur durchzuführen starten Sie :menuselection:`Wareneingang --> Bestand --> Inventur --> Neue Inventur`

Bitte beachten Sie dass eine Inventur nur dann durchgeführt werden kann wenn keine
unkommissionierten Picklisten mehr für die gesperrten Lagerplätze vorliegen. Sie erhalten ansonsten beim Sperren eine entsprechende Hinweismeldung.
Wenn Sie eine rollende Inventur verwenden möchten springen Sie bitte zu `Rollende Inventur`_.

Stammdaten und Lagerplatz festlegen
    Vergeben Sie für die Inventur eine laufende Nummer, wählen Sie die gewünschten Lager und hinterlegen Sie wenn benötigt eine Notiz.
    Wählen Sie nun den Lagerplatz für den Sie die Inventur durchführen möchten.

IST-Bestand erfassen
----------------------

Über die Warexo Oberfläche
    Sie haben 2 Möglichkeiten die einzelnen Artikel im gewählten Lagerplatz zu erfassen, entweder per Suche oder via EAN Scan.
    Führen Sie folgende Schritte für jeden Artikel im Lagerplatz aus:

    -  Geben Sie den Bestand des Artikels ein, wenn Sie mehrere Artikel aus dem Platz genommen haben, ansonsten lassen Sie das Feld leer und die Menge wird automatisch auf 1 gesetzt.
    -  Suchen Sie das Produkt über die Suchfunktion oder setzen Sie den Cursor in das EAN Scan Feld und scannen Sie den Artikel
    -  Der Artikel erscheint daraufhin in der Liste, ist der Artikel bereits in der Liste wird die Menge entsprechend der Eingabe im Mengenfeld erhöht.

    Wenn Sie alle Artikel erfasst haben klicken Sie auf die Schaltfläche :menuselection:`Speichern`

    Sie haben nun die Möglichkeit das Inventurprotokoll auszudrucken, dies gibt Ihnen genaue Informationen über eventuelle Fehlbestände in diesem Lagerplatz.

    Nachdem Sie das Protokoll geprüft haben können Sie mit der Schaltfläche :menuselection:`Inventur buchen` den Lagerbestand
    aller Artikel in diesem Lagerplatz auf die geprüfte Menge setzen. Der Lagerbestand wird dann automatisch korrigiert.

Per CSV Inventurliste
    .. Attention:: Bearbeiten Sie die CSV Inventurliste bitte ausschließlich mit LibreOffice **nicht mit Microsoft Excel o.Ä.**

    Geben Sie im Bereich :guilabel:`Inventurliste` die benötigten Einstellungen an und klicken Sie auf
    :guilabel:`CSV Inventurliste herunterladen`. Füllen Sie die Spalte Lagerbestand für alle gewünschten Artikel aus und
    laden Sie die Liste via `CSV Inventurliste hochladen` wieder hoch.

    Exportieren
        Bestimmt welche Buchungsreihen exportiert werden

        Gesperrte Lagerplätze
            Die Buchungsreihen der gesperrten Lagerplätze werden exportiert

        Gesperrte Lagerplätze und weitere Lagerplätze
            Wie gesperrte Lagerplätze, jedoch werden alle weiteren Lagerplätze mit exportiert auf denen sich Artikel
            befinden die auf den gesperrten Lagerplätzen liegen

        Alle Artikel mit aktiver Lagerhaltung
            Exportiert alle Artikel und deren Lagerbestände unabhängig des Sperrkennzeichens, jedoch nur für Artikel bei denen Lagerhaltung aktiviert wurde

        Alle Artikel
            Exportiert alle Artikel und deren Lagerbestände unabhängig des Sperrkennzeichens

    Kategorie
        Exportiert nur Artikel aus dieser Kategorie

    Hersteller
        Exportiert nur Artikel von diesem Hersteller

    0 Bestand ignorieren
        Exportiert eine Buchungsreihe auch dann wenn der Artikel aktuell nicht mehr auf Lager liegt

    .. Hint:: Bitte keine Spalte in der CSV-Datei löschen oder tauschen, es darf nur das Semikolon als CSV-Trennzeichen verwendet werden.

        Erlaubte Formate für Inventurdatum: 2017-07-01 08:00:00 und 01.07.2017 08:00:00

        Gelöschte Zeilen werden vom System nicht übernommen. Der Bestand aus der gelöschten Zeile bleibt in Warexo unverändert.

        Wenn Sie den Artikel auf einen anderen Lagerplatz umbuchen wollen, kopieren Sie die Zeile mit der Buchung,
        ändern Sie das Lager und Lagerplatz und tragen Sie den Bestand in die Spalte "Lagerbestand" ein.

        Bei der Buchung wird nur der Ist-Bestand (die Spalte 'Lagerbestand') ins System übernommen.

        Die Artikel-Stammdaten (EKP, VKP usw) werden nicht überschrieben.

        Für einen Abgleich von Artikel-Stammdaten benutzen Sie die Funktion "CSV-Import".

Rollende Inventur
~~~~~~~~~~~~~~~~~

Wenn Sie die Artikelbestände im laufenden Betrieb, also Artikel für Artikel pflegen möchten können Sie die rollende Inventur nutzen. Hierfür gehen Sie wie folgt vor:

-  Suchen Sie den Artikel in der Artikelliste unter :menuselection:`Produkte --> Produktliste` oder über die Produktliste der Lieferanten bei den jeweiligen Lieferanten Details
-  Klicken Sie in der Spalte Lager auf die farbig hinterlegte Lagermenge - dieses Feld erscheint nicht bei Produkten die Varianten besitzen
-  Sie erhalten nun die Möglichkeit vorhandene Lagerplätze via Inventur zu korrigieren oder einfach neue Bestände hinzuzubuchen, jenachdem ob der Artikel chaotisch oder statisch gelagert wird muss entweder ein Lagerplatz ermittelt werden oder Sie geben die gewünschte Menge einfach ein.
-  Bestätigen Sie die Inventur und die Ware wird automatisch eingebucht


