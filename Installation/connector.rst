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
1. wawiExportOrdersOnlyFromDate - Shop-Bestellungen nur ab einem bestimmten Datum importieren (z.B $this->wawiExportOrdersOnlyFromDate = '2022-01-01 00:00:00';)
2. wawiNotReplaceVariantIds - oxid der Artikelvarianten nicht überschreiben (z.B $this->wawiNotReplaceVariantIds = 1;)
