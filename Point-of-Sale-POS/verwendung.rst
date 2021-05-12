POS Bedienerhandbuch
####################

Oberfläche
-------------------

.. figure:: /_static/img/screenshots/aggrowawi-pos.png
   :figclass: sticky-right
   :alt: Warexo POS Oberfläche

Der Bildschirm für das Point-Of-Sale System gliedert sich in verschiedene Bereiche,
alle Funktionen sind für den Touchbetrieb geeignet - Maus und Tastatur werden nicht zwingend benötigt.

Die unten genannten Elemente wurden im oberen Vorschau Bildschirm nummeriert.

Warenkorb (1)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Alle Artikel der derzeitigen Session die hinzugefügt wurden, der aktuell gewählte Artikel wird farbig hinterlegt.
Berühren Sie eine Zeile um diese zu aktivieren.

Bedienerfeld (2)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Auf der linken Seite des Feldes befindet sich ein Zahlenblock der je nach Modus verschiedene Funktionen ausführt.
Das Feld reagiert wie eine klassische Registrierkasse, bitte beachten Sie das bei der Verwendung.
Das Bedienerfeld kann über die Schaltflächen "Anz", "Rab" und "Preis" in 3 verschiedene Modi versetzt werden.

Anzahl Modus "Anz"
    Wenn eine Zahl im Zahlenblock gedrückt wird ändert sich die Menge des gewählten Artikels im Warenkorb Bereich.
    Durch drücken von "X" wird die letzte Stelle der aktuellen Anzahl entfernt, ist keine Stelle mehr übrig wird die
    Anzahl auf 0 gesetzt. Wird "X" bei Menge 0 nochmals gedrückt verschwindet der Artikel aus dem Warenkorb.

Rabatt Modus "Rab"
    Öffnet den Bildschirm um Gutscheine einzulösen oder beliebige Rabatte für den Kunden zu gewähren.
    Der Zahlenblock wird verwendet um den gewünschten Rabatt einzugeben. Durch drücken von "X" wird die letzte Stelle
    des aktuellen Rabatts gelöscht. Ist keine Stelle mehr übrig wird der Rabatt auf 0 gesetzt, beim nächsten klick
    schließt sich das Rabatt Fenster und der Anzahl Modus wird wieder aktiviert.

Preis Modus "Preis"
    Wenn eine Zahl im Zahlenblock gedrückt wird ändert sich der **Einzelpreis** des aktuellen Artikels im Warenkorb.
    Durch drücken von "X" wird die letzte Stelle des Einzelpreises entfernt, ist keine Stelle mehr übrig wird der
    Einzelpreis auf 0 gesetzt. Nochmaliges Drücken bei einem Preis von 0 hat keine Auswirkungen,
    verwenden Sie den "Anz" Modus um Artikel vollständig zu entfernen.

Kunde
    Wenn gewünscht können Sie den aktuellen Einkauf einem Kunden zuweisen oder einen neuen direkt über das POS-System anlegen.

Zahlung
    Ruft den Bildschirm zur Zahlung der Artikel auf, siehe "Zahlungen entgegennehmen"

Artikelübersicht (3)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Zeigt die derzeitigen Artikel an, Sie können Artikel entweder durch berühren oder via Barcode Scan zum Warenkorb hinzufügen.
Wenn der Artikel eine Mengenangabe benötigt wird nachdem der Artikel hinzugefügt wurde ein Abfragebildschirm zur Menge angezeigt.

Funktionsleiste (4)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Service Menü
    Enthält alle wichtigen Service Funktionen für die Kasse.

Kassenbericht erstellen
    Exportiert die Bestellungen und öffnet das Kassenzählprotokoll - der Bediener muss nun die Kasse zählen und die Bestände eintragen.
    Dieser Vorgang ist in Deutschland gesetzlich vorgeschrieben und muss jeden Abend vor Kassenschluss durchgeführt werden.

Druckfunktionen
    Erlaubt es die Kassen- und Tagesberichte und verschiedene Protokolle des Vortags zu drucken.

Barein- und Entnahmen buchen
    Wenn Barmittel aus der Kasse entnommen oder eingelegt werden muss dies über diese Funktion geschehen da die Kassenberichte und Zählprotokolle sonst nicht korrekt erstellt werden können.

.. attention:: Beachten Sie dass die abendliche Geldentnahme vor der Erstellung des Kassenberichts erfolgen muss da diese sonst für den Folgetag gebucht wird und nicht im Kassenbericht auftaucht.

Kassenbewegung
    Übersicht über alle aktuellen Kassenbewegungen des laufenden Tages

Bons/Retouren
    Übersicht über alle Kassenbons die gedruckt wurden, wenn Sie eine Retoure buchen möchten suchen Sie hier den zugehörigen Bon anhand der Nummer.
    Klicken Sie den gewünschten Bon an, in der Bon Übersicht können Sie die einzelnen Artikel die retourniert werden sollen anklicken oder die gewünschten Artikel abscannen.

    Klicken Sie auf |times| :guilabel:`Stornieren` um den Stornobon zu drucken und die Buchung auszuführen.

Toolbar (5)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Die Toolbar erlaubt es Ihnen schnell zwischen verschiedenen Warenkörben umzuschalten - Sie können beliebig viele Warenkörbe gleichzeitig verwalten.
Klicken Sie auf |plus| um einen neuen Warenkorb zu starten.

Durch Klick auf eine beliebige Nummer :guilabel:`1` :guilabel:`2` :guilabel:`3` können Sie zwischen den Warenkörben hin und her springen.

Die Schaltfläche |minus| entfernt den aktuellen Warenkorb aus der Liste, bitte beachten Sie das ein geschlossener Warenkorb nicht wiederhergestellt werden kann.

Mit |refresh| werden die Produktdaten mit der Warenwirtschaft abgeglichen, bitte beachten Sie dass dieser Vorgang sehr lang dauern kann und nicht abgebrochen werden kann.

|expand| wechselt in den Vollbildschirm Modus oder beendet diesen.

|exchange| wechselt zwischen Links- und Rechtshänder Oberfläche

Navigation (6)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Zeigt den aktuell gewählten Kategoriepfad im oberen Bereich, durch klick auf eine Kategorie wird diese geöffnet
und die Artikel in der Übersicht angezeigt. Durch Klick auf |home| springen
Sie zurück in den Hauptbereich. Im Bereich darunter befinden sich die Kategorien, drücken Sie eine
Kategorie um die Artikel und Unterkategorien dieser Kategorie anzuzeigen.

Suchfeld (7)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Erlaubt das Suchen nach Artikeln per Texteingabe, wir empfehlen die Artikel wenn möglich via Barcode Scan oder Navigation hinzuzufügen.

Zahlungen entgegennehmen
---------------------------

Wenn alle Artikel aufgenommen wurden und alle eventuell vorhandenen Gutscheine angegeben wurden klicken Sie auf
"Zahlung" im Bedienerfeld um den Zahlungsbildschirm zu öffnen

Zahlungsweise (1)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Wählen Sie ob die Zahlung Bar, per EC, per Rechnung oder gemischt entgegen genommen wird.

Gezahlt (2)
~~~~~~~~~~~~~~~~~~~~~~~~~~

Geben Sie über das Bedienerfeld den gegebenen Betrag de Kunden ein, das Rückgeld wird automatisch berechnet.
Dieser Vorgang ist je nach Einstellung optional.

Rückgeld (3)
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Die Summe die dem Kunden als Rückgeld zu geben ist.

Buchen (4)
~~~~~~~~~~~~~~~~~~~~~~~~~

Klicken Sie auf Buchen um den Bon zu drucken und den Vorgang abzuschließen,
die Kasse öffnet sich und Sie können dem Kunden sein mögliches Rückgeld übergeben.
