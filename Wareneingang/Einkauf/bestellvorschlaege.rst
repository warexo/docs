Bestellvorschläge
########################

Warexo gibt Ihnen auf Wunsch eine Liste von Bestellvorschlägen vor, damit Artikel in den Bestellvorschlägen auftauchen
müssen die :doc:`entsprechende Felder </Artikelpflege/produkte/lager>` :guilabel:`Min. Lagerbestand` und
:guilabel:`Max. Lagerbestand` befüllt sein.

Tabellenspalten
~~~~~~~~~~~~~~~~~~~

Grundinformationen
    Zeigt Artikelnummer, Titel etc. des Artikels

Lagerinformationen
    Zeigt den aktuellen Bestand, wieviel des Artikels im Zulauf ist und wie oft der Artikel in den letzten 30 Tagen verkauft
    wurde.

Fehlbestände
    Fehlbestand bezieht sich auf das Feld :guilabel:`Min. Lagerbestand`, Fehlbestand2 auf :guilabel:`Max. Lagerbestand`

Bestellmenge
    Berechnete Menge die auf die Einkaufsliste übernommen wird, tragen Sie eine benutzerdefinierte Menge ein um eine
    abweichende Menge zu bestellen

Bedarf
    Genutzt um Bedarf nach Tagen zu bestellen (Bestellformel 1, 4 und 7)

Artikel auf Bestellliste setzen
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Wählen Sie bei einer einzelnen Position die Aktion :guilabel:`Auf die Einkaufsliste setzen` um den Artikel nach Fehlbestand
auf die Einkaufsliste zu setzen. Die angezeigte Bestellmenge wird übernommen.

Um einen oder mehrere Artikel nach den Formeln zu bestellen wählen Sie die |check-square| Checkbox neben den Artikeln aus
und verwenden Sie :menuselection:`Ausgewählte Zeilen --> Auf die Einkaufsliste`.

Nach Fehlbestand
    Setzt die Artikel nach Fehlbestand oder Fehlbestand2 auf die Einkaufsliste

    :guilabel:`Min./Max. Bestand` + :guilabel:`Lagerpuffer` - :guilabel:`Lagerbestand` + :guilabel:`Reserv. Bestand` - :guilabel:`Bestellte Menge`

Formel 1 / 4
    Durchschnittlicher Tagesbedarf der letzten 30 Tage multipliziert mit dem angegebenen Bedarf

    :guilabel:`Verkäufe letzte 30 Tage / 30` * :guilabel:`Bedarf` - :guilabel:`Lagerbestand`

    Formel 1 gilt für den aktuellen Mandanten, Formel 4 über alle Mandanten hinweg

Formel 2 / 5
    Analog zu 1/4 - jedoch wird generell ein Bedarf von 30 Tagen angenommen

    Formel 2 gilt für den aktuellen Mandanten, Formel 5 über alle Mandanten hinweg

Formel 3
    Analog zu :guilabel:`Nach Fehlbestand`, jedoch über alle Mandanten hinweg

Formel 6
    Bedarf für 30 Tage über alle Mandanten hinweg

    :guilabel:`Verkäufe letzte 30 Tage aller Mandanten` - :guilabel:`Lagerbestand aktueller Mandant` + :guilabel:`Pufferbestand`

Formel 7
    Analog zu Formel 6, jedoch mit dem eingegebenen Bedarf berechnet