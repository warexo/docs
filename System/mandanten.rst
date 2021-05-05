Mandanten
###############

Warexo erlaubt es Ihnen je nach gebuchter Version bis zu 10 Mandanten anzulegen (weitere Mandanten auf Anfrage).
Den ersten Mandanten legen Sie während der Installation an, alle weiteren über
:menuselection:`Systemverwaltung --> Mandanten --> Neuer Mandant`

.. Hint:: Ein neuer Mandant ist immer dann notwendig wenn Sie eine weitere Rechnungsanschrift benötigen
    oder einen weiteren Webshop anbinden möchten. Falls Sie sich unsicher sind ob Sie einen neuen Mandanten
    anlegen sollten wenden Sie sich einfach an unseren Support.

Stammdaten
~~~~~~~~~~~~

Titel
    Titel für den Mandanten, wird in E-Mails, Vorlagen etc. verwendet

Ident.
    Eindeutige Identifikation, zur programmatischen Abgrenzung des Mandanten

.. Attention:: Die Ident. darf keine Sonder- oder Leerzeichen enthalten, wir raten zu einer 4 stelligen
    Ident. die aus reinen Großbuchstaben besteht z.B. :guilabel:`CPBD` oder :guilabel:`SLDO`

Adressdaten
    Rechnungsadresse des Mandanten

E-Mail
    Daten des E-Mail Absenders/Empfängers

Kontodaten
    Kontodaten die auf den Dokumenten angezeigt und für SEPA Dateien verwendet werden

Nummernkreise
    Nummernkreise für verschiedene Dokumente die einen Nummernkreis besitzen

Erste Nummern
    Die erste Nummer der jeweiligen Kreise die genutzt werden soll

.. Hint:: Die erste Nummer muss zum Nummernkreis passen, es werden sonst falsche Nummern oder Fehlermeldungen generiert.

Standardlieferstatus
    Lieferstatus der für Artikel exportiert wenn kein Lieferstatus gesetzt wurde

Lagerbestand aus Materialbestand berechnen
    Wenn aktiviert werden Lagerbestände von Artikeln die aus Materialien bestehen aus dem Bestand der Materialien errechnet.
    Hierbei wird der Bestand des Materials mit dem niedrigsten Lagerbestand verwendet

Einfache Lagerhaltung
    Deaktiviert Lagerbuchungen vollständig, die Bestände werden händisch in das Lagerbestandsfeld eingetragen und beim versenden einfach abgezogen.

Negative Buchungen erlauben
    Erlaubt es dem Lagerbestand negativ zu werden

Niedrigste Seriennummer zur Pickliste hinzufügen
    Beim Picking von Seriennummern Artikeln wird dann immer die niedrigste Seriennummer abgeholt

Automatischer Mindestlagerbestand: Verkäufe letzte x Tage
    Wenn gesetzt wird das Feld Mindestlagerbestand in den Artikel automatisch aus den Verkäufen der letzten X Tage berechnet

Automatischer Maximallagerbestand: Verkäufe letzte x Tage
    Wenn gesetzt wird das Feld Maximallagerbestand in den Artikel automatisch aus den Verkäufen der letzten X Tage berechnet

Min. automatischer Mindestlagerbestand
    Wenn der Mindestlagerbestand automatisch berechnet wird kann er nie unter diesen Wert fallen

Lagerbuchungsgründe
    Liste der Lagerbuchungsgründe für Lagerbuchungen

Artikelpreise netto eingeben
    Wenn aktiviert wird angenommen dass Artikelpreise Netto eingegeben werden

Nachkommastellen
    Verwendete Nachkommastellen für Forderungen bzw. Verbindlichkeiten

Detaillierte MwSt. Informationen anzeigen
    Wenn aktiviert werden auf Rechnungen und Angeboten die vollständigen MwSt. Informationen angezeigt (Versandkosten, Zusatzkosten etc.)

Kontenrahmen
    Verwendeter Standard Kontenrahmen SKR03 oder SKR04

Bezugskosten Prozentsatz
    Verwendeter Prozentsatz zur Berechnung von Bezugskosten

Bestandsbewertung
    Durchschnittstbewertung oder FiFo

Kundennummern Maske
    ...

HBCI Konto
    ...

Bestellmails nicht automatisch senden
    Deaktiviert den automatischen Versand von Versand- und Auftragsbestätigung

Rückzahlungen nicht automatisch über Schnittstellen erstatten
    Wenn aktiviert werden bei stornieren in Aufträgen die Beträge nicht automatisch über die jeweilige
    Zahlungsschnittstelle (PayPal, Klarna etc.) zurück erstattet. Der Auftragsbearbeiter muss bei der
    Erstattung im Auftrag dann manuell die Funktion :guilabel:`Zahlung erstatten` ausführen

Gewichte nicht aus Materialien berechnen
    Das Gewicht eines Artikels wird dann nicht mehr anhand der Materialien berechnet (sofern kein Gewicht gesetzt ist)

Skonto Betrag bei Teilerstattungen nicht abziehen
    Eventuell anfallende Skonti werden nicht mehr anteilig von der Erstattung abgezogen

Zusatzkosten Namen
    Bezeichnungen der Zusatzkosten 1-5

Maßnahme bei Retouren
    Standard Retourenmaßnahme

Aus der Statistik ausschließen
    Schließt diesen Mandanten aus den Statistikberechnungen aus

Auftragseingang statt Tagesumsatz in der Statistik anzeigen
    Zeigt den Auftragseingang statt dem Tagesumsatz in den Statistiken

Bestellungen gruppieren nach
    Bestimmt ob Bestellungen in der Statistik nach Bestell- oder Rechnungsdatum gruppiert werden

Dashboard statistics total dql
    Alternative DQL Anweisung um Summen in den Dashboard Statistiken zu berechnen

Zus. DQL-Bedingung für Dashboard-Diagramm
    Zusätzliches DQL für die Anzeige des Dashboard Diagramms

Produktsuche: zus. Felder
    Zusätzliche Felder die für die Produktsuche berücksichtigt werden sollen

Systempfade
    Vollständige Pfade zu notwendigen Programmen auf dem Server, Warexo versucht
    diese automatisch zu ermitteln. Wenn dies bei einem Programm nicht möglich ist
    muss der Pfad hier hinterlegt werden.

Webshop
~~~~~~~~~~

Siehe :doc:`Webshop Integration </Daten-Im-Export/webshop>`

Zuweisungen
~~~~~~~~~~~~

Innerhalb der Listen haben Sie die Möglichkeit komfortabel Produkte, Kategorien etc.
von anderen Mandanten zu diesem Mandanten zuzuweisen.