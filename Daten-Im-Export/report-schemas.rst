Vorgefertigte Reports
#####################

Hier finden Sie vorgefertigte Report Schemas die Sie herunterladen und über die
Funktion :menuselection:`Systemverwaltung --> Im-/Export --> Reporting --> Report Schema importieren`
direkt in Ihre Installation übernehmen können.

Lagerbestand zu bestimmtem Datum
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Wertet den Lagerbestand aller Artikel zu einem bestimmten Datum aus, passen Sie die Bedingung :guilabel:`Created` vor
der Verwendung entsprechend an.

:download:`Report-Schema herunterladen </_static/reports/Lagerbestand-zu-bestimmtem-Datum.json>`

Attributwerte
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Erstellt eine Liste der Attributwerte "Material" und "Lieferumfang" pro Artikel,
passen Sie die Attributnamen nach Wunsch an.

:download:`Report-Schema herunterladen </_static/reports/Attribute.json>`

Bildpfade
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Erstellt eine Liste der URLs zu den Produktbildern aller Artikel

:download:`Report-Schema herunterladen </_static/reports/Produktbilder.json>`

Hermes HSI
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Exportiert CSV Daten die im Hermes HSI importiert werden können.

:download:`Report-Schema herunterladen </_static/reports/Hermes-Export.json>`

OnTheSpot
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Exportiert CSV Daten die im OnTheSpot importiert werden können.

:download:`Report-Schema herunterladen </_static/reports/onthespot_export.json>`

Facebook
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Exportiert CSV Daten die im Facebook importiert werden können.

:download:`Report-Schema herunterladen </_static/reports/facebook.json>`

.. note::
    Wählen Sie in der Auftragsliste die gewünschten Aufträge aus und klicken Sie auf
    "Ausgewählte Zeilen" => "Reports" => "Reports als CSV" => "Hermes Export" um die Datei zu erstellen.
    
Newsletter-Abonnenten
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Exportiert alle Newsletter-Abonnenten aus dem Oxid-Shop (Double-Opt-In)

:download:`Report-Schema herunterladen </_static/reports/Newsletterabonnenten-nach-Anmeldung.json>`

Artikelexport für Webgains
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

:download:`Report-Schema herunterladen </_static/reports/Webgains.json>`

L-Shop Bestellung
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

:download:`Report-Schema herunterladen </_static/reports/L-Shop-Bestellung.json>`  

.. note::
    Legen Sie auch das Workflow-Event "Lieferantenbestellung versenden" an. 
    Dann legen Sie einen Workflow für dieses Event mit folgenden Aktionen an:
    
    1. Lieferantenbestellungen sofort exportieren (in einer CSV-Datei)
    
       * Report: L-Shop-Bestellung
       * Dateiname: {{entity.orderNumber}}.xml
       * Die Datei auf dem FTP-Server speichern (FTP-Host): Die Zugangsdaten bekommen Sie vom L-Shop
       * FTP-Benutzer: Die Zugangsdaten bekommen Sie vom L-Shop
       * FTP-Passwort: Die Zugangsdaten bekommen Sie vom L-Shop
       * FTP-Ordner: /
       * Passiver Modus: nein
       * Einträge einzeln exportieren: ja
       
       Bedingungen:
       
       * Lieferant ist L-Shop
       * Benutzerdef. Bedingung: {{not entity.exportDate}}
    
    2. EDI-Exportdatum setzen

OSS-Umsätze
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

:download:`Report-Schema herunterladen </_static/reports/OSS-Umsaetze.json>`
    
