POS
###

Mit dem Warexo POS Modul können Sie eine oder mehrere Ladengeschäfte und deren Kassen bedienen.
Weitere Informationen finden Sie im :doc:`Handbuchabschnitt zu Point-of-Sale </Point-of-Sale-POS/index>`.

Plugin Einstellungen
~~~~~~~~~~~~~~~~~~~~~~

.. Hint:: Im Bildschirm finden Sie im unteren Bereich Beispieldaten für die Einstellungen,
    Sie können diese einfach übernehmen oder eigene Einstellungen vornehmen.

Kassenbonvorlage
    Vorlage für den Kassenbon, kopieren Sie die angezeigte Standardvorlage als Basis

Schriftgröße
    Schriftgröße der Texte (Standard = 11)

Zeilenhöhe
    Zeilenhöhe der Text (Standard = 11.1)

Font-Dateien
    Erlaubt die Verwendung eigener Schriftarten, geben Sie hier den Dateinamen der TTF Datei an.
    Legen Sie die Datei unter dem selben Namen direkt im :doc:`WAWIListener </Installation/wawilistener>`
    Ordner des Kassenrechners ab.

Positionen auf mehreren Zeilen ausgeben
    Sollte eine Position nicht auf einer Zeile ausgegeben werden können wird die Zeile umgebrochen. Ansonsten
    wird der Titel gekürzt.

Breite der Positionsspalte (%)
    Bestimmt wieviel Prozent der Breite des Kassenbons nimmt der Titel der Position ein

Einzahlung auf Bank Konto
    DATEV Buchungskonto das verwendet wird wenn Geld auf das Bankkonto übertragen wird.

Geldtransit Konto
    DATEV Buchungskonto um Geld zwischen Läden etc. hin und her zu bewegen.

Privateinnahmen/Entnahmen Konto
    DATEV Buchungskonto für Private Ein- und Ausgaben.

Bareinnahmen Buchungssatz
    DATEV Buchungstext wenn eine Bareinnahme verbucht wird.

Barentnahme Buchungssatz
    DATEV Buchungstext wenn eine Barentnahme verbucht wird.

Artikeldaten jede x Minuten aktualisieren
    Gibt den Zeitabstand in Minuten an in dem die Artikelstammdaten am Terminal mit der Warenwirtschaft im Hintergrund abgeglichen werden

Bestellungen jede x Minuten in WAWI exportieren
    Gibt den Zeitabstand in Minuten an in dem die generierten Belege an die Warenwirtschaft gesendet werden

Varianten nicht zusammen mit Stammartikel in POS exportieren
    ...

Optionen in POS exportieren
    Exportiert :doc:`Artikeloptionen </Artikelpflege/optionen>` in die Kassen

Anzahl der Artikel pro Seite
    Bestimmt wie viele Artikel pro Seite in der Kasse angezeigt werden

Artikelnamen in Produktboxen verkürzen
    Lange Artikeltitel werden zugeschnitten statt mehrzeilig angezeigt

WAWIListener automatisch aktualisieren
    Sobald ein Update für den WAWIListener bereit steht wird dieses an der Kasse automatisch aktualisiert,
    dabei muss die Arbeit unterbrochen werden.

Kategorie / Artikel Sortierung
    Bestimmt in welcher Reihenfolge Kategorien und Artikel an der Kasse sortiert werden

Gründe für Rabatte
    Gründe für Rabatte die Bediener wählen können, einer pro Zeile

Eigenbeleg-Vorlage
    Bonvorlage für Eigenbelege

Steuererstattungsbeleg-Vorlage
    Bonvorlage für Steuererstattungen (Ausfuhr MwSt. Erstattung)

Kassensturz-Vorlage
    Bonvorlage für Kassensturz

Kassenzählprotokoll-Vorlage (Bon)
    Bonvorlage für Kassenzählprotokoll

Gutscheinbon-Vorlage
    Bonvorlage für Gutscheine

Rabatt-Gutschein-Vorlage
    Bonvorlage für Rabattgutscheine

Information zur Zahlung
    ...

Vordefinierte Notizen
    ...

Kundenadresse auf dem Beleg nicht anzeigen
    Zeigt auf Belegen die Kunden zugeordnet sind keine Adresse mit an

Breite / Höhe des Thumbnails
    Größe der Artikelbildvorschau an der Kasse

Alt. Stornobonvorlage
    Alternative Bonvorlage für Stornos

Synchronisierung: Anzahl der Artikel pro Aufruf
    Wie viele Artikel pro Anfrage an den Warexo Server aktualisiert werden,
    zu viele Artikel können Performance Probleme verursachen.

Belege buchen, wenn die Eingabetaste gedruckt wird
    Wenn aktiviert führt ein drücken der Eingabetaste sofort zur Bonerstellung

Performance: WebSql-Indizen verwenden
    Verbessert die Performance an der Kasse, experimentelle Funktion

Artikel mit gleicher EAN beim Abscannen anzeigen
    ...

Signatur auf dem Bon nicht anzeigen
    Blendet die TSE Signatur auf dem Kassenbon aus

Buchungen von Barzahlungen ohne Eingabe von 'Gezahlt' nicht erlauben
    Verhindert eine Buchung ohne Eingabe des gezahlten Betrages

Buchungen von EC-Zahlungen ohne Transaktionsnummer nicht erlauben
    Verhindert eine Buchung ohne Eingabe der Transaktionsnummer

Kartenzahlungen: der zu zahlende Betrag per ZVT an EC-Terminal übermitteln
    Übermittelt den zu zahlenden Betrag per ZVT an das EC-Terminal. Hierfür muss ZVT eingerichtet sein

Kartenzahlungen: EC-Transaktionsdetails auf Kassenzettel drucken
    Zeigt EC-Transaktionsdaten auf dem Kassenbon

Bestandsprüfung: Warnung bei Zahlung anzeigen, falls ein Artikel nicht auf Lager ist
    Warnt den Bediener bei Zahlung wenn ein Artikel lt. Bestand nicht auf Lager ist

Bestandsprüfung: Warnung beim Einlegen in den Warenkorb anzeigen, falls ein Artikel nicht auf Lager ist
    Warnt den Bediener beim Einlegen in den Warenkorb wenn ein Artikel lt. Bestand nicht auf Lager ist

Kundendetails: Benutzerdef. Formular mit zusätzlichen Kundendaten
    ...


POS Einrichtung
~~~~~~~~~~~~~~~~~~~~~~

Siehe :doc:`POS Einrichtung </Point-of-Sale-POS/einrichtung>`