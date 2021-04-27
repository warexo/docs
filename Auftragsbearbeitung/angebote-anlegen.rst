Angebote anlegen
################

Jedem Auftrag in Warexo liegt ein entsprechendes Angebot zugrunde. Angebote lassen sich an Kunden versenden, 
Drucken oder mit weiteren Workflow Aktionen verknüpfen. Mit nur einem Klick wandeln Sie ein Angebot in einen Auftrag um.

Angebot erstellen
~~~~~~~~~~~~~~~~~

Sie können Angebote entweder direkt über den Kunden :menuselection:`Kunden --> Kundenliste --> Kunde auswählen --> &Angebot erstellen`
oder über die Angebotsliste :menuselection:`Auftragsverwaltung --> Angebote --> &Neues Angebot` anlegen.

Rechnungsadresse
^^^^^^^^^^^^^^^^

Sie können wahlweise einen bereits bestehenden Kunden über das Feld Kunde wählen oder einfach die Adressfelder selbst ausfüllen. 
Wenn Sie einen Kunden wählen für den Konditionen hinterlegt wurden wird das Angebot anschließend automatisch gespeichert.

Lieferung an
^^^^^^^^^^^^

Wenn gewünscht können Sie eine alternative Lieferadresse für das Angebot angeben, 
ansonsten wird die Rechnungsadresse als Lieferadresse verwendet. 
Über das Feld Adresse können Sie für den gewählten Kunden hinterlegte Adressen suchen und wählen.

Angebotsdetails
^^^^^^^^^^^^^^^

Netto Modus
    Aktiviert die Berechnung der Steuern aus den Netto Summen - aktivieren Sie diesen Haken nur für folgende Fälle:

    -  Netto Preis Angebote für B2B Kunden
    -  Steuerfreie innergemeinschaftliche Lieferungen (§ 14 Abs. 4 UStG)
    -  Steuerfreie Lieferungen in Drittländer

.. attention:: Ob die Steuern auf der Rechnung ausgewiesen werden kommt auf das Empfängerland des Kunden an und ob die Umsatzsteuer Ident. korrekt angegeben wurde.

Zahlungsart
    Die Zahlungsart die für dieses Angebot verwendet werden soll.

Versandart
    Die Versandart die für dieses Angebot verwendet werden soll.

Sprache
    Legt die Sprache fest in der Dokumente und Textbausteine an den Kunden weitergegeben werden.

Währung
    Die Währung die für dieses Angebot verwendet werden soll.

Geplantes Versanddatum
    Wenn Sie ein geplantes Versanddatum angeben können Sie über die Workflow Aktion `Geplantes Versanddatum erreicht` eigene Funktionen ausführen.
    Hierzu muss ein entsprechender :doc:`Workflow </Automatisierung/workflows>` konfiguriert werden.

Auftragsbearbeiter
    Wenn der Auftrag von einem bestimmen Sachbearbeiter verarbeitet werden soll wählen Sie hier den entsprechenden Benutzer.

Angebotsstatus
    Aktueller Status des Angebots.

Felder
    Zusätzliche Felder der gewählten Zahlungsart, erscheinen je nach Einstellung der Zahlungsart.
    Zum Beispiel die Bankverbindung für eine Lastschriftzahlung.

Zusatzinformationen
^^^^^^^^^^^^^^^^^^^^

Zus. Info 1/2/3
    Dieses Feld kann mit einem freien Text belegt werden und wird auf den Dokumenten zum Auftrag ausgegeben (e.g. Rechnung)

Interne Notiz
    Dieses Feld kann mit einem freien Text belegt werden und wird den Auftragsbearbeitern in Warexo angezeigt, der Kunde kann dieses Feld nicht einsehen.

Vermittler
    Der zugehörige Vermittler dem die Provision für dieses Angebot gutgeschrieben werden soll.

.. seealso::
    :doc:`Weitere Informationen zu Vermittlern </Auftragsbearbeitung/vermittler>`

Abrechnungsdatum Vermittlerprovisionen
    Wenn gesetzt wird die Provision für den Vermittler zu diesem Datum fällig, nicht erst mit erfolgtem Versand des Auftrags.

Als Vorlage speichern
    Speichert dieses Angebot als Vorlage, geben Sie hier einen eindeutigen Titel ein.
    Anschließend können Sie in der Angebotsliste neue Angebote aus dieser Vorlage erstellen,
    alle getroffenen Werte werden in das neue Angebot kopiert.

Uploads
^^^^^^^

Hier können Sie beliebige Dateianhänge an das Angebot anhängen.

Angebotspositionen
^^^^^^^^^^^^^^^^^^

Es gibt 2 verschiedene Postionsarten die Sie hinzufügen können

Artikel Positionen
''''''''''''''''''

Verwenden Sie den Button :guilabel:`Position hinzufügen` um eine neue Artikel Position hinzuzufügen.

Freie Positionen
''''''''''''''''''
 
Verwenden Sie den Button :guilabel:`Freie Position hinzufügen` um eine neue freie Position hinzuzufügen. 
Sie können den Text, Preis und die MwSt. für freie Positionen selbst bestimmen. 
Im Gegensatz zu Artikel Positionen ist jedoch keine Lagerhaltung aktiviert, freie Positionen erscheinen also auch nicht beim Picking Vorgang.

Funktionsschaltflächen
''''''''''''''''''''''''''''''''''''

|plus| :guilabel:`Position löschen`
    Klicken um die Position zu entfernen

|reorder| :guilabel:`Position verschieben`
    Festhalten und Position nach oben/unten schieben um die Reihenfolge zu verändern

|clone| :guilabel:`Position duplizieren`
    Erzeugt eine Kopie der Position in der Reihe darunter

|refresh| :guilabel:`Position aktualisieren`
    Aktualisiert die Preise etc. manuell

Rab :guilabel:`Rabatt neu-berechnen` 
    Berechnet die für den Kunden hinterlegten Preise neu - überschreibt eventuelle manuelle Änderungen

Positionsdaten
''''''''''''''''''

Anzahl
    Legt die Anzahl dieser Position fest

Artikel
    Bei einer Artikelposition suchen Sie hier nach dem gewünschten Artikel, für freie Positionen geben Sie einfach den gewünschten Text ein.

Zusatz Info
    Zusätzliche Informationen zu dieser Position

    Zus. Info
        Informationstext der unter der Position in den Dokumenten angezeigt wird

    Geschenkverpackung
        Preis für die Geschenkverpackung wenn gewünscht

    Notiz
        Interne Notiz zu dieser Position

    Alt. Position (Menge)
        Sobald Sie hier eine Menge eintragen wird die Position in der Preisberechnung im Angebot ausgeklammert.
        Im Gesamtpreis wird die Position nicht addiert.

    Abw. Mengeneinheit
        Überschreibt die Mengeneinheit des gewählten Artikels

    Gewicht
        Überschreibt das Gewicht des gewählten Artikels

    Datei
        Dateianhang zu dieser Position

    Min. MHD
        Forciert beim Picking des Artikels dass mindestens dieses MHD gepickt werden muss.

    Abw. DATEV-Konto
        Alternatives Buchungskonto für diese Position im DATEV Buchungsexport

    Produktkategorie (für Dokumente)
        Gruppiert die Positionen anhand eines beliebigen Textes. Positionen mit der gleichen Gruppe
        werden in Dokumenten zusammengefasst dargestellt.

EKP
    Informationen zum aktuellen Einkaufspreis, Rohertrag etc.

VK-Brutto / VK-Netto
    Legt den Brutto/Netto Preis für eine einzelne Position fest, aktualisiert bei Änderung das jeweils andere Feld.

MwSt. %
    Die Mehrwertsteuer für diese Position in Prozent, kann nur für freie Positionen verändert werden.

Diskonte & Aufschläge
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Rabatt
    Hier können Sie einen absoluten Rabatt festlegen der für das Gesamte Angebot gilt.

Gutschein-Rabatt
    Falls der Kunde einen Kaufgutschein verrechnen möchte können Sie hier einen absoluten Gutscheinrabatt eingeben - nur für die Verrechnung von Kaufgutscheinen verwenden!

Versandkosten
    Die Versandkosten die für dieses Angebot berechnet werden sollen.

Zahlungsart-Aufschlag
    Zusätzliche Gebühren für die gewählte Zahlungsart die berechnet werden sollen.

Verpackungskosten
    Zusätzliche Gebühren für die Verpackung die berechnet werden sollen.

Grußkarte
    Zusatzkosten für eine eventuell Grußkarte.

Skonto
    Erlaubt es Ihnen Skonto Konditionen festzulegen, Sie können einen absoluten oder prozentualen Skontowert festlegen
    und die Tage wie lang dieser Skonto gültig sein soll.

Angebote weiter verarbeiten
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Nachdem Sie das Angebot gespeichert haben können Sie über die Schaltfläche :guilabel:`Dokumente` in der 
Aktionsleiste verschiedene Funktionen ausführen. Sie können das Dokument drucken, per E-Mail an den Kunden senden oder herunterladen.

Angebote annehmen
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Wenn Sie einen Auftrag für dieses Angebot anlegen möchten klicken Sie die Schaltfläche :guilabel:`Auftrag anlegen` - 
der zugehörige Auftrag wird angelegt und Sie werden automatisch zum 
:doc:`Auftragsbildschirm </Auftragsbearbeitung/auftraege-bearbeiten>` weiter geleitet.