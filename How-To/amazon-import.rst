Amazon Bestellungen importieren
#################################

.. Attention:: Aufgrund der Abschaltung der MWS API werden Amazon Bestellungen derzeit nicht automatisch importiert.
    Wir arbeiten an einer schnellstmöglichen Lösung für dieses Problem.

CSV Import anlegen
------------------

.. Attention:: Um die Amazon Bestelldatei zu importieren ist ein Hotfix in Ihrem System notwendig, sprechen Sie uns an
    und wir installieren diesen Hotfix für Sie.

Wir bieten ein CSV-Import Schema an mit dem der Import vollautomatisch angelegt wird, laden Sie die Schema Datei hier herunter:

:download:`CSV Import Schema herunterladen </_static/imports/amazon.json>`

Navigieren Sie anschließend innerhalb von Warexo zum Menüpunkt :menuselection:`Systemverwaltung --> Im-/Export --> CSV-Import`
und laden Sie die CSV Import Schema Datei im Bereich "CSV-Import Schema importieren" hoch.

Dieser Schritt ist nur einmalig notwendig, die folgenden Schritte müssen täglich ausgeführt werden.

Amazon Bestellbericht generieren
------------------------------------

Loggen Sie sich in Ihr Seller-Central Konto ein, navigieren Sie anschließend zum Menüpunkt
:menuselection:`Bestellungen --> Bestellberichte`.

Falls noch nicht geschehen klicken Sie auf :guilabel:`Spalten im Bestellbericht hinzufügen oder entfernen` und wählen Sie alle verfügbaren
Spalten aus und speichern Sie die Einstellungen.

Wählen Sie im Reiter "Neue Bestellungen" im Bereich "Bericht anfordern" den gewünschten Datumsbereich den Sie importieren möchten.
Klicken Sie auf die Schaltfläche :guilabel:`Anfragen`.

Der Bericht wird nun erstellt, dieser Vorgang kann einige Minuten dauern.
Anschließend steht dieser im Bereich "Bericht herunterladen" zur Verfügung.

Laden Sie die Berichtsdatei herunter, diese wird für den Import in Warexo verwendet.

Amazon Bestellbericht importieren
------------------------------------

Navigieren Sie innerhalb von Warexo zum Menüpunkt :menuselection:`Systemverwaltung --> Im-/Export --> CSV-Import`,
wählen Sie beim Import "Amazon Bestellungen" im Aktionsmenü die Aktion "Bearbeiten" oder klicken Sie auf die
entsprechende Zeile um den Import zu öffnen.

Laden Sie den Amazon Bestellbericht im Feld "Datei" hoch und speichern Sie den Import.

Klicken Sie im Bereich "Import" auf "Import jetzt starten" und warten Sie bis der Import abgeschlossen ist.

Prüfen Sie nun die erstellten Angebote im Menüpunkt :menuselection:`Auftragsverwaltung --> Angebote`,
wenn alle Angebote korrekt angelegt wurden markieren Sie diese und wandeln diese in Bestellungen um.

.. Attention:: Sollte sich im Bestellbericht eine Bestellung befinden die bereits über die Schnittstelle importiert wurde
    wandeln Sie das erstellte Angebot nicht in eine Bestellung um. Dies sollte nur beim ersten Import nötig sein.

Wichtige Hinweise
-----------------

Bei Fragen kontaktieren Sie uns bitte wie gewohnt über das Ticket System.
