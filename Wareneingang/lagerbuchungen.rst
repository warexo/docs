Lagerbuchungen
##############
:date: 2015-03-24 10:07
:author: admin
:category: Wareneingang
:slug: lagerbuchungen
:status: published

[alert style="info"]Um eine genaue Übersicht darüber zu haben wo sich die Ware in Ihrem Lager befindet muss jede Warenbewegung erfasst werden. Warexo übernimmt einige der Buchungen voll automatisch für Sie - dazu zählt der Warenausgang bei Versand der Bestellung sowie die der Wareneingang bei Reklamationen. Sollten Sie jedoch ohne technische Hilfsmittel Ware in Ihr Lager auf-/entnehmen oder bewegen muss eine Buchung ausgeführt werden um dem System mitzuteilen wo die Ware sich nun befindet.[/alert]

Um eine neue Buchungsreihe zu erzeugen öffnen Sie den Bildschirm "Wareneingang" => "Lagerbuchungen" und klicken Sie auf

[wawibtn type="primary" icon="plus"]Neue Buchung[/wawibtn]

Buchungsdetails
~~~~~~~~~~~~~~~

Geben Sie zunächst die grundsätzlichen Details zu dieser Buchung ein, diese gelten für alle Artikel in dieser Buchung.

**Warenlager:** Um welches Lager geht es in dieser Buchung

**Typ:** Soll die Ware von einem Platz entnommen (Ausgang) oder zu einem Platz hinzugefügt (Eingang) werden

**Belegnummer:** Falls zu dieser Buchung ein Beleg existiert (Rechnungsnummer etc.) können Sie diesen hier zu Dokumentationszwecken hinterlegen

**Grund:** Der Grund für diese Buchung, damit andere Mitarbeiter die Hintergründe der Buchung leichter verstehen können

**Notiz:** Eine frei definierbare Notiz, ergänzend zum Grund

 Artikel definieren
~~~~~~~~~~~~~~~~~~~

Wenn alle Details definiert sind haben Sie 2 Möglichkeiten um Ware zu dieser Buchung festzulegen, entweder via Suchfunktion oder direkt per EAN Scan.

|lagerbuchung-artikelliste|

Führen Sie folgende Schritte durch um einen Artikel in die Buchung aufzunehmen:

-  Wählen Sie den gewünschten Lagerplatz für den Artikel (bei Eingangsbuchungen)
-  Geben Sie im Feld Menge die gewünschte Menge ein, lassen Sie das Feld leer um die Menge auf 1 zu belassen
-  Wählen Sie das Produkt über die Produkt wählen Eingabebox **oder** setzen Sie den Cursor in das EAN Scan Feld und scannen Sie die EAN Nummer des gewünschten Artikels.
-  Falls Sie das Produkt über die Eingabebox gewählt haben drücken Sie auf die Schaltfläche hinzufügen, bei EAN Scan wird der Artikel automatisch in die Liste übernommen

Wiederholen Sie diese Schritte für alle Artikel die verbucht werden sollen. Klicken Sie anschließend auf [wawibtn type="primary" ]Buchung ausführen[/wawibtn] um die Buchung durchzuführen.

Lagerbuchung per CSV Liste
~~~~~~~~~~~~~~~~~~~~~~~~~~

Sie können Ihre Bestände auch per CSV Import beeinflussen, erstellen Sie hierzu eine CSV Liste nach einem der folgenden Formate:

| Artikelnummer;EAN;Menge
| EAN;Menge
| Artikelnummer;Menge

Erstellen Sie eine CSV Datei nach diesem Format, der Spaltentrenner kann entweder Semikolon oder Komma sein. Die Spaltenköpfe müssen wie oben angegeben benannt sein. Die Menge kann negativ sein, in diesem Fall wird die Menge vom Bestand abgezogen. Laden Sie die Liste im Bereich "CSV-Datei verbuchen" hoch und wählen Sie für welchen Lagerplatz die Aktion angewendet werden soll. Zusätzlich können Sie die Begründung für die Lagerbuchungen mit angeben.

Artikel, die nicht auf Lager sind, werden nicht ausgebucht! Entsprechende Fehlermeldungen werden in der Notiz gespeichert.

 

.. |lagerbuchung-artikelliste| image:: http://doku.aggrosoft.de.dedi4489.your-server.de/wp-content/uploads/2015/03/lagerbuchung-artikelliste.jpg
   :class: alignnone wp-image-134 size-full
   :width: 1286px
   :height: 179px
   :target: http://doku.aggrosoft.de.dedi4489.your-server.de/wp-content/uploads/2015/03/lagerbuchung-artikelliste.jpg
