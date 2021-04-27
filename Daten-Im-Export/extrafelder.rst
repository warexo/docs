Extrafelder
###########

Warexo erlaubt es Ihnen über Extrafelder beliebige Metadaten zu speichern und in weitere Systeme zu exportieren.
Die Felder können für beliebige Entitäten wie Kategorien, Produkte etc. hinzugefügt werden.

Felder hinzufügen
~~~~~~~~~~~~~~~~~

Öffnen Sie den Menüpunkt :menuselection:`Einstellungen --> Mandant --> Extrafelder --> Neues Extrafeld`

.. attention:: Nachdem ein Feld angelegt wurde kann dieses nicht mehr entfernt werden!

Tabelle
    Definiert die Stammtabelle/Entität zu der das Extrafeld hinzugefügt werden soll (Kategorie, Produkt etc.)

Feld
    Interner Name des Felds, darf keine Sonderzeichen enthalten, muss vollständig klein geschrieben sein z.B. :guilabel:`mein_feld` :guilabel:`extradaten` :guilabel:`langerfeldname`

Anzeigename
    Titel des Feldes der in Warexo angezeigt wird, beliebig definierbar

Feldtyp
    Daten- und Eingabetyps des Felds, siehe Feldtypen

Gruppierung
    Frei wählbarer Gruppierungsschlüssel, Felder mit dem gleichen Schlüssel werden im selben Eingabebereich angezeigt.

Sortierung
    Die Eingabefelder werden aufsteigend anhand dieser Sortierung angezeigt

Auswahllistenwerte
    Wenn der Feldtyp :guilabel:`Auswahlliste` gewählt wird können hier die möglichen Werte eingetragen werden, ein Wert pro Zeile

Read-Only
    Wenn gewählt ist das Feld nur lesbar, nützlich für programmatische Erweiterungen

Translatable
    Macht das Feld mehrsprachig konfigurierbar

Vererbbar
    Wenn gewählt kann der Feldwert auf Variantenartikel vererbt werden (nur für Tabelle Artikel)

Numerisches Feld
    Wenn die Eingabe nur ganzzahlige Werte enthalten kann sollte diese Einstellung aktiviert werden

Wert ist mandantenübergreifend
    Wenn aktiv wird dieser Wert automatisch in allen Mandanten gespeichert, eine Eingabe pro Mandant ist dann nicht mehr möglich

Benutzerdef. Wert
    Erzeugt den Wert automatisch beim Speichern über eine Twig Anweisung

Product index field
    N/A

Feld befüllen
~~~~~~~~~~~~~

Nachdem das Feld angelegt wurde finden Sie im Bearbeitungsbereich der jeweiligen Tabelle unter Extrafelder den Eintrag.
Wenn Sie z.B. ein Feld für Artikel anlegen finden Sie das Feld unter
:menuselection:`Produkte --> Produktliste --> [Gewünschtes Produkt] --> Extrafelder --> [Gruppierung] --> [Anzeigename]`

Feld in den Webshop übertragen
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Oxid eShop
^^^^^^^^^^

Öffnen Sie die Datei :guilabel:`source/wawi/OxidFieldsContainerAdditional.php` und tragen Sie in der entsprechenden
Einstellung ein sog. Mapping ein.

$_aOtherProductFields
    Produktdaten Mapping Tabelle oxarticles

$_sOtherOfferItemFields
    Bestellpositionen Mapping Tabelle oxorderarticles

$_aOtherCategoryFields
    Kategorie Mapping Tabelle oxcategories

$_aOtherOrderFields
    Bestellungen Mapping Tabelle oxorder

$_aOtherManufacturerFields
    Hersteller Mapping Tabelle oxmanufacturer

$_aOtherCustomerFields
    Kunden Mapping Tabelle oxuser

$_aOtherAttributeFields
    Attribute Mapping Tabelle oxattribute

$_aOtherOptionFields
    Auswahllisten Mapping Tabelle oxselectlist

Beispiel für ein Mapping des Extrafelds :guilabel:`mein_feld` auf das Datenbankfeld :guilabel:`oxmeinfeld`

```$_aOtherProductFields = array('oxmeinfeld' => 'mein_feld')```
