DATEV
#####

Warexo erlaubt Ihnen einen einfache Export aller Steuerrelevanten Buchungs- und Bewegungsdaten im DATEV pro Format.

.. Attention:: Bitte beachten Sie dass die Exporte für DATEV Pro und nicht für DATEV Unternehmen Online oder andere Softwarelösungen zugeschnitten sind.

Plugin Einstellungen
~~~~~~~~~~~~~~~~~~~~

Wählen Sie das DATEV Exporter Plugin in Warexo unter :menuselection:`Systemverwaltung --> Schnittstellen --> Plugins`

Format
    Sie haben die Wahl ob das alte Datev ASCII Format oder das neue offizielle Datev Daten Format exportiert werden soll,
    wenn Sie oder ihr Steuerberater mit einem Datev Programm arbeiten wählen Sie das neue Format 510.
    Wenn Sie ein anderes Programm verwenden lesen Sie bitte in der Anleitung des Programms nach welches Format Sie benötigen.

Versandkosten extra ausweisen
    Wenn aktiviert werden die Versandkosten in einer separaten Buchungsreihe ausgegeben.
    Ansonsten werden die Versandkosten und der Bestellwert in einer Buchungsreihe geführt.

Exportdateien für jeden Steuersatz extra erstellen (veraltet)
    Wenn aktiviert wird für jeden Steuersatz eine Exportdatei erstellt, ansonsten werden Buchungen
    für alle Steuersätze in einer Datei ausgegeben. Diese Option ist mit dem neuen Datev Format nicht mehr notwendig.

Rechnungsnummer für bezahlte Bestellungen ohne Rechnungsnummer vergeben
    Wenn Sie den Export anstoßen und es existiert eine bezahlte Bestellung ohne Rechnungsnummer
    innerhalb der Exportdaten wird die Rechnungsnummer vorher automatisch vergeben.

Nicht bezahlte Bestellungen mit vergebener Rechnungsnummer verbuchen
    Erzeugt auch für nicht als bezahlt markierte Aufträge eine Buchungsreihe wenn diese eine Rechnungsnnummer besitzen

Gegenkonto Gutscheine
    Wenn Sie Gutscheine zum Verkauf anbieten werden die Umsätze auf diesen Zwischenkonto verbucht. Hilft dabei den Wert noch nicht eingelöster Gutscheine im Auge zu behalten.

Mahngebühren Gegenkonto
    Separates Gegenkonto für Mahngebühren.

Globale Konten
-----------------

Es folgen einige globale Konten die für den Export notwendig sind, die Standardkonten für SKR03 und SKR04 sind mit aufgeführt. Entnehmen Sie die Kontennummern bitte Ihrem jeweiligen Kontenplan.

Verrechnungskonto erhalt. Anzahl. bei Buchung über Debitorenkonto
    SKR03: 2650, SKR04: 7100

Konto Verbindlichkeiten aus Lieferungen und Leistungen
    SKR03: 1600, SKR04: 3300

Konto Bezugsnebenkosten
    SKR03: 3800, SKR04: 5800

Konto Erhaltene Skonti
    SKR03: 3730, SKR04: 5730

Konto Gewährte Skonti
    SKR03: 8730, SKR04: 4730

Konto Nebenkosten des Geldverkehrs
    SKR03: 9965, SKR04: 6855

Konto Verkaufsprovisionen
    SKR03: 4760, SKR04: 6770

Konto Sonstige Erträge unregelmäßig (Kassendifferenz)
    SKR03: 2709, SKR04: 4839

Konto Sonstige Aufwendungen unregelmäßig (Kassendifferenz)
    SKR03: 2309, SKR04: 6969

Ausgangsrechnungen und Zahlungseingänge getrennt verbuchen
    Trennt Ausgangsrechnungen und Zahlungseingänge in separate Buchungsreihen nach Debitorenkonten auf

Alle Zusatzkosten extra ausweisen
    Zusatzkosten werden separat als Buchungsreihe ausgegeben

Bestellpositionen extra ausweisen
    Für jede Bestellposition wird eine Buchungsreihe ausgegeben

Debitorennummern automatisch vergeben
    Wenn keine Debitorennummer existiert wird automatisch eine vergeben wenn nötig

Offene Verbindlichkeiten verbuchen
    Verbindlichkeiten werden auch dann als Buchungsreihe ausgegeben wenn diese noch offen sind

Positionen bei den Verbindlichkeiten extra ausweisen
    Für jede Position einer Verbindlichkeit wird eine Buchungsreihe ausgegeben

Kreditorennummern automatisch vergeben
    Wenn keine Kreditorennummer existiert wird automatisch eine vergeben wenn nötig

Eingangsrechnungen/Gutschriften und Zahlungsausgänge getrennt verbuchen
    Trennt Eingangsrechnungen und Zahlungsausgänge in separate Buchungsreihen nach Kreditorenkonten auf

Ausgangsrechnungen und Zahlungseingänge aus unterschiedlichen Datumsbereichen getrennt verbuchen
    Trennt Ausgangsrechnungen und Zahlungseingänge in separate Buchungsreihen auf wenn Sie ein unterschiedliches Datum aufweisen

Fehler bei Diskrepanzen in Buchungssätzen auslösen
    Es wird eine Fehlermeldung beim Datev Export ausgegeben falls die Buchungen unlogisch sind

Umsätze mit Privatpersonen im EU-Ausland: Lieferland exportieren
    Gibt das Lieferland mit aus wenn Umsätze mit Privatpersonen im EU-Ausland gebucht werden

Optionen für Belegfelder
------------------------------------------------

Mit den folgenden Optionen können Sie die Variablen Belegfelder der Datev Export Datei beeinflussen.

Belegfeld 1 / 2
    Hier können Sie festlegen was genau in Belegfeld 1 und 2 ausgegeben wird

DATEV-Mandant (5-stellige Nummer)
    Ihre Datev Mandantennummer, wird im neuen Datev Format verwendet

Berater (5-stellige Nummer)
    Ihre Datev Beraternummer, wird im neuen Datev Format verwendet

Sachkontennummernlänge (für die Belegendatei)
    Länge der Sachkontennummern für Belege

Sachkontennummernlänge (für die Kundendatei)
    Länge der Sachkontennummern für Kunden

Beleginfo – Art 1 - 8
    Bestimmt was im Beleginfo Art 1 bis 8 Feld geschrieben wird

Beleginfo – Inhalt 1 - 8
    Bestimmt was im Beleginfo Inhalt 1 bis 8 Feld geschrieben wird

Beleginfo – Inhalt 1 - 8 (benutzerdef.)
    Bestimmt was im Beleginfo Art 1 bis 8 Feld geschrieben wird, in diesem Feld kann twig verwendet werden um dynamische Daten auszugeben.

Zusatzinformation – Art 1 - 5
    Bestimmt was im Zusatzinformation Art 1 bis 5 Feld geschrieben wird

Zusatzinformation – Inhalt 1 - 5
    Bestimmt was im Zusatzinformation Inhalt 1 bis 5 Feld geschrieben wird

Debitorenkonten festlegen
~~~~~~~~~~~~~~~~~~~~~~~~~

Zu jeder Zahlungsart wird ein Debitorenkonto benötigt damit eine Buchungsreihe zu DATEV exportiert werden kann.
Sie können für verschiedene Zahlungsarten das gleiche Debitorenkonto hinterlegen.

Bearbeiten Sie hierzu die jeweilige Zahlungsart über :menuselection:`Einstellungen --> Mandant --> Zahlungsarten`

Im Bildschirm der Zahlungsart können Sie im Bereich "Extra Felder" das Konto in das Feld "Datev Konto (Debitorenkonto)" eintragen.

Erlöskonten festlegen
~~~~~~~~~~~~~~~~~~~~~

Jeder eingegangene Umsatz wird vom Exporter für Sie auf dem zugehörigen Erlöskonto vorkontiert.
Da sich die einzelnen Konten im Normalfall auf den für den Artikel zugehörigen Steuersatz beziehen werden die Konten
bei den Steuersätzen hinterlegt.

Öffnen Sie den Menüpunkt :menuselection:`Einstellungen --> Mandant --> Steuersätze` -
im Bereich "Datev" haben Sie die Möglichkeit die einzelnen notwendigen Erlöskonten für die verschiedenen
Konstellationen einzutragen. Wir raten dazu Ihren Steuerberater zu diesen Einstellungen zu Rate zu
ziehen damit die einzelnen Buchungen später auf den richtigen Konten landen.

Artikelspezifische Konten
~~~~~~~~~~~~~~~~~~~~~~~~~

Falls bestimmte Artikel in Ihrem Sortiment nicht unter die oben stehenden Konten fallen
können Sie diese für jeden Artikel speziell bestimmen. Die entsprechenden Einstellungen
finden Sie im einzelnen Artikel im Menü :menuselection:`Produkte --> Produktliste --> [Produkt wählen] --> Extrafelder --> Datev`

Buchungssätze kontrollieren
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Die einzelnen Buchungssätze die für einen Auftrag generiert werden können Sie jederzeit direkt in der
Auftragsbearbeitung unter :menuselection:`Warenausgang --> Aufträge --> Datev Buchung` kontrollieren.
Beachten Sie bitte das die Buchung nur eine Vorschau ist, es werden nur relevante Daten exportiert.
Siehe dazu "Daten exportieren" weiter unten.

Daten Exportieren
~~~~~~~~~~~~~~~~~

Um die generierten Daten im regelmäßigen Abstand Ihrem Steuerberater zur Verfügung zu stellen gehen Sie wie folgt vor:

-  Rufen Sie die Auftragsbearbeitung über den Menüpunkt :menuselection:`Warenausgang --> Aufträge` auf
-  Unter der Auftragsliste befindet sich der Punkt "Datev Export"
-  Wählen Sie den gewünschten Zeitraum aus dem Sie Buchungen generieren möchten
-  Klicken Sie auf "Exportieren"

Sie erhalten ein .zip Archiv das verschiedene Dateien enthält. Je nach Einstellungen erhalten Sie folgende Dateien:

datev_artikel_XX.xml
    Die für den DATEV ASCII Import vorbereiteten Artikeldaten für die Artikel die in der gewählten Periode gekauft wurden im XML Format.

datev_belege_XX.xml
    Die für den DATEV ASCII Import vorbereiteten Belege aus der gewählten Periode im XML Format.

datev_kunden_XX.xml
    Die für den DATEV ASCII Import vorbereiteten Kundendaten für die Kunden die in der gewählten Periode Artikel gekauft haben im XML Format.

datev_belege_XX.csv
    Die für den DATEV ASCII Import vorbereiteten Belege aus der gewählten Periode im CSV Format.

datev_kunden_XX.csv
    Die für den DATEV ASCII Import vorbereiteten Kundendaten für die Kunden die in der gewählten Periode Artikel gekauft haben im CSV Format.

.. Hint:: DATEV bietet mit seinem ASCII Importer zwei verschiedene Importformate - das XML und das CSV Format.
    Besprechen Sie bitte mit Ihrem Steuerberater welches Datenformat er benötigt.
