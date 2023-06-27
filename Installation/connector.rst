Webshop Connector
#################

Um Daten zwischen Ihrem Webshop und Warexo auszutauschen wird ein sog. Connector in Ihrem Shop installiert.

Installation
~~~~~~~~~~~~

Oxid eShop
^^^^^^^^^^
Laden Sie den aktuellsten Oxid Connector auf der `Download Seite <https://packages.aggrowawi.de>`_ herunter.

Entpacken Sie das Archiv auf Ihrem Computer, kopieren Sie anschließend den Inhalt von :guilabel:`copy_this` bzw.
:guilabel:`copy_this_oxid6` (für Oxid ab Version 6) in den Installationsordner Ihres Webshops.

Kopieren Sie anschließend die Datei :guilabel:`changed_full/wawi/OxidFieldsContainerAdditional.php` in den entsprechenden Ordner im
Installationsordner des Webshops. Fügen Sie die Inhalte der Datei :guilabel:`changed_full/config.inc.php` an die config.inc.php
Datei Ihrer Oxid Installation an. Passen Sie die Einstellungen entsprechend an.

sWAWISepaCreditorNumber
    SEPA Gläubigeridentifikationsnummer für das Lastschrift Verfahren (Optional)

sWAWIClientIdent
    Ident. des Mandanten in Warexo der mit diesem Shop verknüpft wird

bWAWINotAssignAttributesToCategories
    Wenn true werden Attribute von Artikeln nicht automatisch den zugehörigen Kategorien zugewiesen

Im Ordner :guilabel:`extramodules` des Connectors befinden sich weitere optionale Erweiterungen für verschiedene Payment
oder Drittanbieter Module. Wenn Sie eines dieser Module verwenden kopieren Sie bitte den jeweiligen Inhalt des :guilabel:`copy_this`
Unterordners des Extra Moduls in Ihren Webshop Ordner. Für z.B. Amazon Payments kopieren Sie
die Inhalte von :guilabel:`extramodules/amazonpayments/copy_this/` in den Shop Ordner.

Shopware 6
^^^^^^^^^^
.. Hint:: Die Shopware Integration befindet sich in der Beta Phase, bei Fragen wenden Sie sich bitte an unseren Support.

Laden Sie die aktuellste Shopware Erweiterung auf der `Download Seite <https://github.com/warexo/shopware-plugin/releases>`_ herunter.

Installieren Sie die Erweiterung wie gewohnt über das Shopware Admin Backend unter :menuselection:`Erweiterungen --> Meine Erweiterungen --> Erweiterung hochladen`.

Shopware Plugin konfigurieren
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Für die Verbindung zwischen Shopware und Warexo ist eine sog. Integration notwendig. Diese können Sie über das Shopware Backend
unter :menuselection:`Einstellungen --> System --> Integrationen --> Intergration anlegen` erstellen. Die Integration muss vom Typ Administrator sein.

Notieren Sie sich Zugangs-ID und Sicherheitsschlüssel.

Konfigurieren Sie das Warexo Plugin innerhalb von Warexo unter
:menuselection:`Systemverwaltung --> Schnittstellen --> Plugins --> Shopware`

Zugangs-ID / Sicherheitschlüssel
    Die Zugangsdaten der Shopware Integration

Username / Passwort
    Legen Sie einen separaten Shopware Admin Benutzer für Warexo an und geben Sie hier die Zugangsdaten an.

Shop URL
    Die vollständige URL des Shopware Shops (e.g. https://www.meinshop.de)

Sales Channel ID
    Obsolet, nicht mehr verwenden

Bestellstatus "In Bearbeitung"
    Sobald ein Warexo Auftrag in diesen Status übergeht wird der Shopware Bestellstatus auf "In Bearbeitung" gesetzt.

Bestellstatus "Abgeschlossen"
    Sobald ein Warexo Auftrag in diesen Status übergeht wird der Shopware Bestellstatus auf "Abgeschlossen" gesetzt.

Mapping
    Wird noch dokumentiert, aktuell bitte nicht ohne Nachfrage verwenden

Mandanten konfigurieren
~~~~~~~~~~~~~~~~~~~~~~~~

Konfigurieren Sie die notwendigen Stammdaten des Mandanten unter :menuselection:`Einstellungen --> Mandant --> Stamm --> Webshop`

Shop-URL
    Vollständige URL zum Webshop, inklusive Protokoll Angabe (https://www.meinshop.de)

Shop Typ
    Art des Webshops (Oxid, Shopware, Woocommerce etc.)

Shop Admin Benutzer / Passwort
    Benutzername und Passwort für den Admin Benutzer mit dem sich Warexo authentifizieren soll. Legen Sie für diese Verbindung
    am besten einen separaten Benutzer an.

FTP Server
    Zugangsdaten für eine FTP(S) Verbindung zum Shop, diese werden zur Dateiübertragung genutzt. Der Pfad ist relativ zu den
    für den Benutzer angegebenen Root Pfad und sollte mit einem Slash (/) enden.

Weitere Informationen finden Sie im entsprechenden Handbucheintrag :doc:`/Daten-Im-Export/webshop`

Verbindung testen
~~~~~~~~~~~~~~~~~~~~~~~~

Über die Funktion :menuselection:`Einstellungen --> Mandant --> Stamm --> Webshop Verbindung prüfen`
können Sie einen Verbindungstest ausführen. Nach der Erstinstallation wird der Verbindungstest Sie auffordern
den Webshop Connector zu initialisieren.

Führen Sie hierfür :menuselection:`Systemverwaltung --> Systemaktualisierung --> Connector aktualisieren` aus

Ein weiterer Verbindungstest sollte nun erfolgreich sein, ab diesem Moment können Daten übertragen werden.
Manuelle Datenübertragungsmöglichkeiten finden Sie unter :menuselection:`Systemverwaltung --> Schnittstellen --> Webshop`

Automatischer Bestellimport
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Unter :menuselection:`Systemverwaltung --> Schnittstellen --> Webshop --> Bestellimport` werden Ihnen die notwendigen
Cron Befehle angezeigt. Legen Sie diese im gewünschten Intervall auf Ihrem Server an.

Erstimport
~~~~~~~~~~
Führen Sie unter :menuselection:`Systemverwaltung --> Schnittstellen --> Webshop --> Import` nacheinander alle Importe
einmalig durch. Bitte halten Sie hierbei die Reihenfolge der Einträge in der Auswahlliste ein.

Verfügbare Parameter für config.inc.php
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. Hint:: Nur für Oxid eShop

wawiExportOrdersOnlyFromDate (str)
    Shop-Bestellungen nur ab einem bestimmten Datum importieren (z.B $this->wawiExportOrdersOnlyFromDate = '2022-01-01 00:00:00';)

wawiNotReplaceVariantIds (bool)
    oxid der Artikelvarianten nicht überschreiben

bWAWINotAssignAttributesToCategories (bool)
    Keine Attribute beim Artikelexport den Kategorien zuweisen 

aWAWIExcludedAttributesToCategories (arr)
    Attribute beim Artikelexport den Kategorien nicht zuweisen (Liste der oxattribute.oxid)

wawiUseExtranetMetaDescription (bool)
    Das Feld "Extranet -> Beschreibungstext für Meta-Tags" als oxid-Metadescription exportieren

wawiNotExportProductGroupsIfGroupNotExists (bool)
    Artikel-Artikelgruppe-Zuweisung nicht exportieren, wenn die Kundengruppe im Shop nicht existiert

warexoUseShopId (str)
    Shop-Id für den aktuellen Subshop (nur für Oxid EE!)

bWAWINotReplaceOrderItems (bool)
    Bestellpositionen beim Bestellexport(abgleich) nicht überschreiben

aWAWIDisabledFunctions (arr)
    Benutzerdef. Array von gesperrten Funktionen (sieh. modules/aggrowawi/extensions/views/aggrowawi_oxshopcontrol.php)

wawiIgnoreCategoryGroups (bool)
    Zugewiesene Kategoriegruppen ignorieren und die Kategorie für alle Kunden anzeigen

wawiNotOverrideIsVisible (bool)
    oxarticles::isVisible nicht überschreiben (für einige Oxid-Module relevant)

wawiNotHideArticleWithGroups (bool)
    Zugewiesene Artikelgruppen ignorieren und den Artikel für alle Kunden anzeigen (der Artikel wird dann nicht kaufbar)
    
wawiUseSortFieldForCustomerPrices (bool)
    Kundengruppenpreise nach oxsort statt oxprice aufsteigend sortieren
     
sWAWISepaCreditorNumber (str)
    SEPA Gläubiger-Identifikationsnummer (für die Thankyou-Seite)

sWAWIClientIdent (str)
    WAWI-Mandant Ident (für die Thankyou-Seite)

Connector erweitern
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Die Datenübertragung des Connectors lässt sich mit einem einfachen Modulsystem erweitern. Hierzu muss eine Datei mit
der Benennung :guilabel:`*_module.php` entweder direkt im Unterordner :guilabel:`wawi` oder in einem beliebigen Modul unter :guilabel:`modules/[MODULENAME]/warexo`
existieren.

Ein Beispiel wäre ein Modul unter dem Pfad :guilabel:`wawi/custom_module.php` wie folgt:

.. code-block:: php

    <?php

        class CustomModule{

            /* Used for custom function being called from warexo */
            public function my_custom_function($param)
            {
                // custom function, can be called from warexo
                return 'some_fancy_result';
            }
            /* Used to add or map custom data when sending data from oxid to warexo */
            public function get_additional_fields($table, $data, $entity=null)
            {
              if ($table === 'oxorder' && $entity && $entity->oxorder__somecustomfield->value) {
                $data['someCustomField'] = $entity->oxorder__somecustomfield->value;
              }
              return $data;
            }
            /* Used to add custom field names, same format as used in OxidFieldsContainerAdditional */
            public function get_additional_field_names($table)
            {
              if ($table === 'oxorder') {
                return ['oxid_field_1' => 'warexoExtraField1' , 'oxid_field_2' => 'warexoExtraField2'];
              }
              return [];
            }
            /* Event handler for any of the events, can be used to modify import/export data or react to some events */
            public function onAfterSetProducts($data){
                // Modify $data here or call any function you like
            }
        }

        $customModule = new CustomModule;
        ModuleManager::getInstance()->registerModule( $customModule );
        ModuleManager::getInstance()->addEventListener( WAWIConnectorEvents::AFTER_SET_PRODUCTS, $customModule, 'onAfterSetProducts' );

Verfügbare Events
~~~~~~~~~~~~~~~~~~~~

beforeSetProductOptions($data)
    * $data - Array von assoc. Arrays mit den WAWI-Feldern

afterSetProductOptions($data)
    * $data - Array von assoc. Arrays mit den WAWI-Feldern

beforeAddProductOption($data)
    * $data - Assoc. Array mit den WAWI-Feldern

afterAddProductOption($data, $oSelectList)
    * $data - Assoc. Array mit den WAWI-Feldern
    * $oSelectList - oxselectlist-Objekt

beforeSetProducts($data)
    * $data - Array von assoc. Arrays mit den WAWI-Feldern

afterSetProducts($data)
    * $data - Array von assoc. Arrays mit den WAWI-Feldern

beforeAddProduct($data)
    * $data - Assoc. Array mit den WAWI-Feldern

afterAddProduct($data, $oArticle)
    * $data - Assoc. Array mit den WAWI-Feldern
    * $oArticle - oxarticle-Objekt

beforProductStockUpdated($data)
    * $data - Assoc. Array mit den WAWI-Feldern

afterProductStockUpdated($data, $oArticle)
    * $data - Assoc. Array mit den WAWI-Feldern
    * $oArticle - oxarticle-Objekt

afterAddCustomer($data, $oUser)
    * $data - Assoc. Array mit den WAWI-Feldern
    * $oUser - oxuser-Objekt
    
beforePrepareUploadedPictures($type, $pictures, $data)
    * $type - product, category, manufacturer, productoption
    * $pictures - array von {sort, pictureName}
    * $data - Assoc. Array mit den WAWI-Feldern

afterSetProductPictures($oArticle, $data)
    * $data - Assoc. Array mit den WAWI-Feldern
    * $oArticle - oxarticle-Objekt


Oxid-Widgets in Warexo einbauen
~~~~~~~~~~~~~~~~~~~~

* Legen Sie im wawi-Ordner des Oxid-Shops die Datei *_widgets.inc.php an
* Fügen Sie folgende Zeilen hinzu:

.. code-block:: php

    //Artikel
    $extra_product_widgets = array(
        array("title" => "<Widget-Titel>", "id" => "<id, z.B. mywidget>", "controller" => "<cl-Klasse>", "height" => "<z.B. 300px>", "article" => "<false|true (100%-Breite)>")
    );


Verfügbare Variablen:
    * $extra_product_widgets
    * $extra_category_widgets
    * $extra_manufacturer_widgets
    * $extra_customer_widgets
    * $extra_discount_widgets
    * $extra_order_widgets
    * $extra_attribute_widgets

Extranet
~~~~~~~~~~~~~~~~~~~~

* Legen Sie eine Subdomain (z.B. extranet.meinshop.de) an. Die Domain soll mit dem Verzeichnis wawi/web verknüpft sein.
* Richten Sie ein SSL-Zertifikat ein
* Legen Sie die Webseite unter Einstellung->Extranet->Websites an. 
* Tragen Sie die Extranet-URL (https://<domain) in Oxid Admin->Erweiterungen->Module->AggroWAWI Extension->Einstell. ein
* Aktivieren Sie die Optionen "Extranet Aktiv", "Extranet Bestellungen Aktiv" usw
