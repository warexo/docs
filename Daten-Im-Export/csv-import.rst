CSV-Import
##########

Mit der CSV-Import Funktion können massenweise Daten aus einer Datei eingelesen werden. Die Datei kann entweder lokal auf dem Server liegen oder automatisch von einem FTP Server heruntergeladen werden.

CSV-Import erstellen
~~~~~~~~~~~~~~~~~~~~

Erstellen Sie einen neuen Report über :menuselection:`Systemverwaltung --> Im-/Export --> CSV-Import --> Neuer CSV-Import`

Tabelle
    Bestimmt die Art von Daten die importiert werden soll

Aktiv
    Nur aktive Importe können automatisch im Hintergrund ausgeführt werden

Titel
    Eindeutiger Titel für diesen Import

Upload benutzen
    Wenn diese Option gewählt ist wird die im Feld CSV-Datei hochgeladene Datei importiert. Ansonsten wird die Datei vom angegebenen Pfad zur CSV Datei heruntergeladen.

Bilder usw. herunterladen
    Wenn diese Option gewählt ist werden Bilder und andere Medien automatisch beim Import mit heruntergeladen.
    Sinnvoll wenn die Import Datei URL's zu Bildern o.Ä. enthält.

Nur aktualisieren (Datenabgleich)
    Wenn aktiviert legt der Import keine neuen Datensätze an sondern aktualisiert nur vorhandene Datensätze.

Daten vor dem Import löschen
    Wenn aktiviert löscht der Import alle gefundenen Zeilen vor dem Import - Achtung diese Option löscht Daten ohne vorherige Nachfrage!

CSV-Datei
    Wenn die Option Upload benutzen gewählt ist laden Sie hier die CSV-Datei hoch die importiert werden soll

Pfad zu CSV-Datei
    Wenn die Option Upload benutzen nicht gewählt ist geben Sie hier die URL zur CSV-Datei an

Benutzer / Passwort
    Wenn die CSV Datei hinter einem Zugriffsschutz (.htaccess) liegt dann können Sie hier Benutzername und Passwort angeben

CSV-Feldtrennzeichen
    Der Feldtrenner der Datei, Standard ist Semikolon

CSV-Textmarkierungszeichen
    Das Textmarkierungszeichen, Standard ist doppeltes Hochkomma :guilabel:`"`

CSV-Zeichenkodierung
    Zeichenkodierung der Import Datei

"Parent"-Feld in CSV
    Spaltentitel des Feldes in dem der Primärschlüssel des Elternartikels steht - nur notwendig wenn mehrdimensionale Varianten von Produkten mit importiert werden sollen.

Anzahl der Items pro Aufruf
    Wie viele Zeilen pro Durchgang importiert werden sollen.

Benutzerdefinierter Service
    Wenn eine eigener Symfony Service für den Import genutzt werden soll geben Sie hier den vollständigen Klassennamen ein. Die Klasse sollte die folgende Klasse erweitern

    .. code-block:: php

       Aggrosoft\WAWIBundle\Importer\CSVImporter

WAWI-Feld als CSV-Primärschlüssel
    Bestimmt das Feld das als eindeutige Kennzeichnung verwendet werden soll. Dies könnte eine ID, die Artikelnummer oder EAN oder weitere Felder in der Datei sein. Bitte achten Sie darauf dass dieses Feld auch später in den Feldern definiert werden muss! Ohne einen Primärschlüssel ist es nicht möglich vorhandene Datensätze zu aktualisieren.

WAWI-Feld als CSV-Sekundärschlüssel
    Wenn gewünscht können Sie einen zweiten Schlüssel als zusätzliche Kennzeichnung verwenden. Der Importer sucht dann zusätzlich nach diesem Feld wenn der Datensatz ermittelt wird.

Importmodus
    Wenn Sie Collections (siehe :doc:`Reporting </Daten-Im-Export/reporting>`) importieren kann es sein dass alte Datensätze gelöscht werden müssen.
    Da der Importer nicht unterscheiden kann ob alte Einträge erhalten werden sollen können Sie das Verhalten hier wählen.

    -  **Kollektionen vor dem Import löschen (REPLACE)** - Löscht Collections bevor diese neu angelegt werden
    -  **Kollektionen vor dem Import nicht löschen (SOFT UPDATE)** - Löscht Collections nicht bevor diese angelegt werden

Bedingung für Import
    Twig-Bedingung ob die jeweilige Zeile importiert werden soll - die Variable **data** bezeichnet die aktuelle Zeile die importiert werden soll. Beispielsweise

.. code-block:: twig

   {%if data.meinfeld == "test"%}1{%else%}0{%endif%}

Felder definieren
~~~~~~~~~~~~~~~~~

Die Felder bestimmen welche Daten aus Ihrer Import Datei in welches Feld der Datenbank geschrieben werden.

.. attention:: Es müssen alle Schlüsselfelder (siehe oben) sowie alle Pflichtfelder (bei Neuanlage) definiert werden. Wenn eine dieser Angaben fehlt schlägt der Import fehl!

Sortierung
    Die Felder werden nach der angegebenen Sortierung eingelesen, von niedrigster zur höchster.

CSV-Feld
    Spaltentitel des Feldes innerhalb der Import Datei. Bitte beachten Sie das Dateien ohne Spaltenköpfe nicht importiert werden können.

WAWI-Feld
    Das Feld innerhalb des Systems in das der Wert übertragen werden soll.

WAWI-Zuordnungsfeld
    Wenn Sie als WAWI-Feld eine Relation oder Collection wählen können Sie hier ein alternatives Feld für die Zuordnung verwenden.
    So können Sie zum Beispiel den Hersteller anhand des Titels zuweisen oder eine Kategorie anhand der ID.
    Im Normalfall versucht der Importer die Zuweisung anhand des Titels vorzunehmen.

.. sidebar:: Twig Kontext
    :class: floating

    .. list-table::
       :widths: 50 50
       :header-rows: 1

       * - Variable
         - Beschreibung
       * - appservice
         - AppService
       * - em
         - EntityManager
       * - entity
         - Gefundenes Objekt zur CSV Reihe
       * - data
         - Aktuelle CSV Reihe
       * - value
         - Wert der aktuellen CSV Zelle

Benutzerdefinierter Wert
    Wenn Sie hier einen Wert eingetragen wird immer dieser Wert in das Feld geschrieben, egal welcher Wert in der Datei eingetragen ist.
    Dieses Feld ist per Twig anpassbar.

.. Hint:: Numerische Werte müssen einen Punkt als Dezimaltrenner verwenden, sollte Ihre CSV Spalte ein Komma enthalten können Sie folgenden
    benutzerdefinierten Wert verwenden:

    .. code-block:: twig

        {{ value|replace(',','.') }}

Sprache
    Die Sprache in der die Daten importiert werden sollen falls das Feld Mehrsprachig ist.

Variantenfelder
~~~~~~~~~~~~~~~

Wenn Sie Produkte importieren ist es möglich auch die Varianten der Produkte mit zu erstellen. Damit der Importer die Varianten anlegen kann müssen Sie definieren welche Felder die Varianten beschreiben.

Sortierung
    Die Felder werden in dieser Reihenfolge eingelesen, von niedrigster zu höchster.

CSV-Feld für Variantennamen
    Spaltentitel des Feldes in dem sich der Name der Variante befindet - Größe, Farbe, Art etc.

CSV-Feld für Variantentitel
    Spaltentitel des Feldes in dem sich der Wert für den Titel der Variante befindet - XL, Rot, Konturgeschnitten etc.

WAWI-Zuordnungsfeld
    Wenn Sie als WAWI-Feld eine Relation oder Collection wählen können Sie hier ein alternatives Feld für die Zuordnung verwenden. So können Sie zum Beispiel den Hersteller anhand des Titels zuweisen oder eine Kategorie anhand der ID. Im Normalfall versucht der Importer die Zuweisung anhand des Titels vorzunehmen.

.. sidebar:: Twig Kontext
    :class: floating

    .. list-table::
       :widths: 50 50
       :header-rows: 1

       * - Variable
         - Beschreibung
       * - appservice
         - AppService
       * - em
         - EntityManager
       * - entity
         - Gefundenes Objekt zur CSV Reihe
       * - data
         - Aktuelle CSV Reihe
       * - value
         - Wert der aktuellen CSV Zelle

Benutzerdefinierter Wert
    Wenn Sie hier einen Wert eingetragen wird immer dieser Wert in das Feld geschrieben, egal welcher Wert in der Datei eingetragen ist.
    Dieser Wert kann Twig enthalten.

Sprache
    Die Sprache in der die Daten importiert werden sollen falls das Feld Mehrsprachig ist.

Cronjobs
~~~~~~~~

Cronjob Kommando
    Wenn Sie möchten dass der Cronjob regelmäßig im Hintergrund ausgeführt wird, erstellen Sie einen neuen Cronjob der das angezeigte Kommando ausführt.

Downloadjob Kommando
    Wenn der CSV-Import Bilder herunterladen soll muss dieser Cronjob laufen um die zugehörigen Bilder schrittweise auf Ihren Server herunterzuladen.

    .. attention:: Ohne diesen Cronjob können keine Bilder von entfernten Servern heruntergeladen werden. Bitte warten Sie mit weiteren Exporten der Daten bis alle Bilder heruntergeladen wurden!
