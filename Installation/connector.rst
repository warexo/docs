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
~~~~~~~~~~

wawiExportOrdersOnlyFromDate (str): 
    Shop-Bestellungen nur ab einem bestimmten Datum importieren (z.B $this->wawiExportOrdersOnlyFromDate = '2022-01-01 00:00:00';)

2. wawiNotReplaceVariantIds (bool): oxid der Artikelvarianten nicht überschreiben

3. bWAWINotAssignAttributesToCategories (bool): Keine Attribute beim Artikelexport den Kategorien zuweisen 

4. aWAWIExcludedAttributesToCategories (arr): Attribute beim Artikelexport den Kategorien nicht zuweisen (Liste der oxattribute.oxid)

5. wawiUseExtranetMetaDescription (bool): Das Feld "Extranet -> Beschreibungstext für Meta-Tags" als oxid-Metadescription exportieren

6. wawiNotExportProductGroupsIfGroupNotExists (bool): Artikel-Artikelgruppe-Zuweisung nicht exportieren, wenn die Kundengruppe im Shop nicht existiert

7. warexoUseShopId (str): Shop-Id für den aktuellen Subshop (nur für Oxid EE!)

8. bWAWINotReplaceOrderItems (bool): Bestellpositionen beim Bestellexport(abgleich) nicht überschreiben

9. aWAWIDisabledFunctions (arr): Benutzerdef. Array von gesperrten Funktionen (sieh. modules/aggrowawi/extensions/views/aggrowawi_oxshopcontrol.php)

10. wawiIgnoreCategoryGroups (bool): Zugewiesene Kategoriegruppen ignorieren und die Kategorie für alle Kunden anzeigen

11. wawiNotOverrideIsVisible (bool): oxarticles::isVisible nicht überschreiben (für einige Oxid-Module relevant)

12. wawiNotHideArticleWithGroups (bool): Zugewiesene Artikelgruppen ignorieren und den Artikel für alle Kunden anzeigen (der Artikel wird dann nicht kaufbar)

13. sWAWISepaCreditorNumber (str): SEPA Gläubiger-Identifikationsnummer (für die Thankyou-Seite)

14. sWAWIClientIdent (str): WAWI-Mandant Ident (für die Thankyou-Seite)

