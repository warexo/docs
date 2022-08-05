Gutscheine
##########

Für weitere Informationen wie Gutscheinserien und Gutscheine erstellt werden springen Sie bitte zum Handbucheintrag
für :doc:`Gutscheinserien </Diskonte/gutscheine>`

Plugin Einstellungen
~~~~~~~~~~~~~~~~~~~~~~

Anzahl der Zeichen in Gutscheinnummer
    Bestimmt die Länge von Zufallsnummern in erstellten Gutscheinen.

Gutschein als PDF-Datei im Anhang senden
    Wenn Sie diese Option aktivieren wird an die Gutschein E-Mail die an den Kunden versendet wird (nur Kaufgutscheine)
    automatisch der Gutschein im PDF Format angehängt. Welche Vorlage hierfür verwendet wird können Sie über die Dokument
    Einstellung in der Gutscheinserie festlegen.

Gutscheine für gekauften Gutscheinartikel nicht erstellen
    Wenn Sie die Gutscheinserien für gekaufte Gutscheine selbst vorher erstellen möchten, können Sie mit dieser Funktion
    das automatische Erstellen der Gutscheinserien deaktivieren.

Kaufgutscheine auch bei folgenden Mandanten einlösbar
    Erlaubt es Kaufgutscheine aus diesem Mandanten auch bei anderen Mandanten einzulösen

POS: Gutscheine für gekauften Gutscheinartikel erstellen
    Aktivieren Sie diese Option wenn Sie möchten dass ein Gutschein der über das Kassensystem gekauft wird, automatisch als Gutscheinserie erzeugt wird.
    
Gutscheinvorlagen
~~~~~~~~~~~~~~~~~~~~~~

Dokument "Gutschein"

Verfügbare Variablen:

{{entity}} - Gutschein

{{receiver}} - Gutscheinempfänger (Vorname + Nachname)

{{sender}} - Gutscheinsender (Vorname + Nachname)

{{message}} - Nachricht
