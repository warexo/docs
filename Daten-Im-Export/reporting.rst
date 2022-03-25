Reporting
#########


Die Reporting Funktion ermöglicht es Daten in verschiedenen Formaten aus der Warenwirtschaft heraus zu exportieren.
Sie können selbst festlegen welche Daten exportiert werden. Außerdem können Sie die Daten vor dem Export filtern um nur
die notwendigen Zeilen zu exportieren. Aktuell erzeugt Warexo CSV Dateien, weitere Formate folgen.

Einen Report erstellen
~~~~~~~~~~~~~~~~~~~~~~

Erstellen Sie einen neuen Report über :menuselection:`Systemverwaltung --> Im-/Export --> Reports --> Neuer Report`

Entity
    Die sog. Entity legt das zugrunde liegende Datenbankobjekt für den Report fest, dies sollte immer die Haupttabelle
    sein aus der Sie die Daten exportieren möchten. Über die Felder können Sie auch verknüpfte Tabellen mit ansprechen.
    Eine vollständige Übersicht über die Datenbankstruktur finden Sie `unter diesem Link <https://dbdocs.warexo.de>`__.

Aktiv
    Nur aktivierte Reports können automatisiert im Hintergrund exportiert werden.

Titel
    Eindeutiger Titel um diesen Report zu identifizieren.

Dateiname
    Wenn gewünscht können Sie einen Dateinamen festlegen unter dem die Exportdatei auf dem Server generiert wird. Wenn Sie keinen Dateinamen eingeben dann wird dieser nach dem ersten  Export automatisch erzeugt.

CSV-Feldtrennzeichen
    Das Feldtrennzeichen für die CSV-Exportdatei. Standard ist Semikolon :guilabel:`;`

CSV-Textmarkierungszeichen
    Das Feldtrennzeichen für die CSV-Exportdatei. Standard ist " (doppelte Hochkommas)

CSV-Zeichenkodierung
    Die Dateikodierung der Exportdatei. Standard ist UTF-8

Anzahl der Items pro Aufruf
    Wie viele Zeilen pro Aufruf generiert werden sollen, mehr Zeilen beschleunigen den Export - es kann aber zu Abbrüchen führen. Standard ist 10.

Notiz
    Interne Notiz

DQL-Bedingung
    Erlaubt es eine zusätzliche `DQL-Bedingung <http://docs.doctrine-project.org/projects/doctrine-orm/en/latest/reference/dql-doctrine-query-language.html>`__ für jede Zeile auszuwerten.
    Die Variable :guilabel:`e` ist in dieser Bedingung mit der Entity dieser Zeile verknüpft.

Benutzedefinierte Bedingung
    Erlaubt es eine Twig-Variable auszuwerten um zu bestimmen ob die aktuelle Zeile im Export enthalten sein soll. Verfügbare Variablen sind:

    -  **entity** - die aktuelle Entity dieser Zeile
    -  **appservice** - Verknüpfung zum Helferservice
    -  **value** - Ermittelter Feldwert dieser Zeile
    -  **report** - Das aktuelle Report Objekt

    Beispiel: `{{appservice.getContainer().get('shirtnetwork.service').hasShirtnetworkItems(entity)}}`

Sortieren nach
    Bestimmt nach welchem Kriterium der Report sortiert werden soll.

Sprache
    Die Sprache die für den Export verwendet werden soll.

Bedingungen
~~~~~~~~~~~

Mit Bedingungen können Sie festlegen welche Daten exportiert werden sollen, so könnten Sie zum Beispiel Aufträge nach
dem Datum filtern oder Benutzer nach ihren Nachnamen. Nur wenn **alle Bedingungen** zutreffen wird die jeweilige Zeile ausgegeben.
Klicken Sie auf |plus|:guilabel:`Hinzufügen` um eine Bedingung hinzuzufügen.

Sortierung
    Die Bedingungen werden anhand dieser Sortierung abgearbeitet, von der niedrigsten zur höchsten.

Feld
    Bestimmt das Feld auf das diese Bedingung angewendet wird. Siehe Felder auswählen.

Operator
    Das Feld wird mit Wert mit diesem Operator verglichen.

Wert
    Der Wert mit dem das Feld verglichen werden soll.

Bedingung für
    Beachten Sie bitte dass diese Einstellung nur für sog. Collections (siehe Felder auswählen) sinnvoll ist. Bei normalen Feldwerten wählen Sie bitte unbedingt die Einstellung "Alle Elemente".

    Alle Elemente
        Die Reihe wird nur ausgegeben wenn die Bedingung für alle Elemente dieses Felds zutrifft.

    Mindestens ein Element
        Die Reihe wird nur ausgegeben wenn die Bedingung für mindestens ein Element dieses Felds zutrifft. **Nur für Collections wählen wenn gewünscht.**

Spalten
~~~~~~~

Die Spalten legen die Daten fest die in die Exportdatei geschrieben werden.

Sortierung
    Die Felder werden anhand dieser Sortierung abgearbeitet, von der niedrigsten zur höchsten.

Spaltentitel
    Titel der in der Exportdatei für diese Spalte verwendet wird.

Feld
    Bestimmt das Feld aus dem der Wert ausgelesen wird. Siehe Felder auswählen.

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
         - Gefundenes Objekt zur Zeile
       * - column
         - Aktuelle Spalte
       * - report
         - Referenz auf den Report
       * - value
         - Wert der aktuellen Spalte
       * - item
         - Collection Eintrag (wenn es sich um eine Collection handelt)

Benutzerdefinierter Wert
    Wenn Sie hier einen Wert eingetragen wird immer dieser Wert in das Feld geschrieben, egal welcher Wert in der Spalte eingetragen ist.
    Dieses Feld ist per Twig anpassbar.

Gruppierung
    Sie können Collections mit einer Aggregats oder Gruppenfunktion auswerten.

    Gruppieren
        Gruppiert die Daten anhand dieses Felds, erzeugt für jede Gruppe eine einzelne Zeile.

    Gruppieren und in Spalten vertauschen
        Erzeugt für jede Gruppe eine separate Spalte für jedes Aggregatsfeld in diesem Report.

    Aggr. mit Sum (Summe)
        Summiert die Werte in der Gruppe.

    Aggr. mit Count (Anzahl)
        Zählt die Werte in der Gruppe.

    Aggr. mit Avg (Mittelwert)
        Ermittelt den Mittelwert in der Gruppe.

    Aggr. mit Min
        Ermittelt den kleinsten Wert in der Gruppe.

    Aggr. mit Max
        Ermittelt den größten Wert in der Gruppe

    Verketten mit ,
        Verkettet die Daten der Gruppe mit Komma und gibt diese aus.

    Verketten mit ;
        Verkettet die Daten der Gruppe mit Semikolon und gibt diese aus.

    1/2/3/4/5-tes Element
        Gibt nur das jeweils 1/2/3/4/5 Element der Gruppe aus.

    n-tes Element (n - Gruppierungsparameter)
        Gibt nur das jeweils **n**-te Elemente der Gruppe aus. Tragen Sie **n** in das Feld Gruppierungsparameter ein.

    Element mit einer Bedingung (Gruppierungsparameter)
        Erlaubt es eine Twig-Bedingung für die Gruppierung zu verwenden. Der Paramter **value** bezeichnet die aktuelle Entity in der Collection. Tragen Sie die Bedingung in das Feld Gruppierungsparameter ein.

Gruppierungsparameter
    Wenn die gewählte Gruppierung einen Parameter benötigt tragen Sie diesen hier ein.

Zus. Funktion
    Erlaubt es eine spezielle Funktion auf den Feldwert anzuwenden

    -  **MONTH** - extrahiert den Monat aus einem Datum als Zahl
    -  **MONTHNAME** - gibt den Namen des Monats aus einem Datum aus
    -  **YEAR** - extrahiert das Jahr aus einem Datum als Zahl
    -  **Produktbild-URL in WAWI** - Findet den Link zum Bild zu der Entity in dieser Zeile, nur für Picture Entities.
    -  **HTML-Tags entfernen** - Entfernt alle HTML Inhalte (siehe `strip_tags <http://php.net/manual/de/function.strip-tags.php>`__)
    -  **Shop-URL** - Findet den Link im Webshop zu der Entity in dieser Zeile, nur für Product,Category und Manufacturer Entities.

Spaltentyp
    Datentyp dieser Spalte.

Sprache
    In welcher Sprache soll die Zeile ausgegeben werden wenn es mehrere Übersetzungen gibt.

Felder wählen
~~~~~~~~~~~~~

Wenn Sie Bedingungen anlegen oder Felder hinzufügen können Sie das Feld ausgehend von der Entity wählen.
Hierbei ist zwischen normalen Feldern, Relationen und sog. Collections zu unterscheiden.
Ein Beispiel für ein normales Feld wäre der Titel eines Produkts, eine Relation wäre das Thumbnail,
eine Collection hingegen wären alle Bilder eines Produkts.
Relationen und Collections sind untereinander verknüpft und beziehen sich auf andere Entities.

Wenn Sie ein Feld wählen bietet Ihnen das System für Collections die Möglichkeit an entweder die Collection direkt
zu wählen oder ein normales Feld aus der Collection. Wenn Sie eine Collection als Feld wählen achten Sie bitte
darauf eine sinnvolle Gruppierung zu wählen, es kann sonst kein Wert für das Feld ermittelt werden.
Bei Relationen können Sie direkt den Feldwert wählen da es nur ein mögliches Ergebnis gibt.

Sie können durch die Auswahl von Collections und deren Felder beliebige verknüpfte Werte ermitteln,
bitte beachten Sie jedoch dass komplexe Exporte lange Zeit benötigen um erzeugt zu werden.

Produkte zuweisen
~~~~~~~~~~~~~~~~~

Wenn Sie als Entity Product wählen können Sie bestimmte Produkte vorfiltern, der Export berücksichtigt dann nur die gewählten Produkte.

Datei manuell exportieren
~~~~~~~~~~~~~~~~~~~~~~~~~

Klicken Sie im Bereich "Exportieren" die Schaltfläche "Export jetzt starten" um den Report manuell zu erstellen.
Aktualisieren Sie die Seite um den Fortschritt zu sehen, wenn der Export abgeschlossen ist können Sie die Datei
herunterladen und die Log-Datei einsehen.

Datei automatisch exportieren
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Legen Sie einen Cronjob auf Ihrem Server an der das angezeigte Cronjob Kommando ausführt, die Datei wird dann automatisch vom Cronjob aktuell gehalten.

Mit einem Workflow verknüpfen
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Mit dem Befehl "Workflow mit Bedingungen anlegen" erstellen Sie mit einem Klick einen Workflow mit dem Sie den Report
noch genauer begrenzen können. Legen Sie hierzu einfach im erzeugten Report eine neue Aktion mit Bedingungen an.
