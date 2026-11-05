Shopware
########

Mit dem Shopware-Plugin tauscht Warexo Daten mit einem Shopware-6-Shop aus.
Artikel können an den Shop übertragen und Bestellungen aus dem Shop übernommen
werden. Die Verbindung richten Sie unter
:menuselection:`Systemverwaltung --> Schnittstellen --> Plugins --> Shopware`
ein.

Verbindung einrichten
~~~~~~~~~~~~~~~~~~~~

Tragen Sie die :guilabel:`Shop URL` und die Zugangsdaten der Shopware-Integration
ein. Wählen Sie anschließend den :guilabel:`Standard Verkaufskanal` aus. Mit
:guilabel:`Import begrenzen auf Verkaufskanäle` können Sie festlegen, aus welchen
Verkaufskanälen Bestellungen übernommen werden. Aktivieren Sie das Plugin erst,
wenn die Angaben stimmen.

Mit den Einstellungen für Bestellstatus legen Sie fest, bei welchem Status
eines Warexo-Auftrags die Bestellung in Shopware als „In Bearbeitung“ oder
„Abgeschlossen“ markiert wird. Die Option :guilabel:`Preise als Netto übertragen`
verwenden Sie nur, wenn Ihre Preise entsprechend gepflegt sind.

Was bedeutet „Mapping“?
~~~~~~~~~~~~~~~~~~~~~~~

„Mapping“ bedeutet **Zuordnung**: Sie sagen Warexo, welches Feld hier zu
welchem Feld in Shopware gehört. Zum Beispiel kann das Warexo-Extrafeld
„Materialhinweis“ mit einem Shopware-Extrafeld für denselben Hinweis verbunden
werden. Danach kann der Wert beim Datenaustausch an der richtigen Stelle landen.

Für die üblichen Artikeldaten wie Name, Artikelnummer, Bestand und Beschreibung
ist keine eigene Zuordnung nötig. Lassen Sie die Mapping-Felder leer, solange
Sie keine zusätzlichen Felder verbinden möchten.

Die Namen der Eingabefelder klingen ähnlich, haben aber verschiedene Aufgaben:

* :guilabel:`Extrafeld Mapping` verbindet ein Warexo-Feld mit einem
  **Shopware-Extrafeld**. Das Shopware-Extrafeld muss im Shop bereits angelegt
  sein.
* :guilabel:`Feld Mapping` verbindet ein Warexo-Feld mit einem **regulären
  Shopware-Feld**, beispielsweise einem Produktfeld. Nutzen Sie es nur, wenn
  die vorhandene Standardzuordnung nicht ausreicht.
* :guilabel:`Payload Mapping` betrifft zusätzliche Angaben innerhalb einer
  Bestellposition, die beim Bestellimport übernommen werden sollen.
* :guilabel:`LineItem Mapping` bestimmt, welche weiteren Arten von
  Bestellpositionen neben Produkten und Rabatten importiert werden.
* :guilabel:`Sprach Mapping` betrifft die Zuordnung von Sprachen. Die
  Standardzuordnung ist bereits hinterlegt.

Ein Extrafeld zuordnen
~~~~~~~~~~~~~~~~~~~~~~

Angenommen, in Warexo gibt es ein Extrafeld mit dem technischen Namen
``materialhinweis``. In Shopware haben Sie ein Extrafeld mit dem technischen
Namen ``mein_materialhinweis`` angelegt. Tragen Sie in
:guilabel:`Extrafeld Mapping` Folgendes ein::

   product:
     - local: materialhinweis
       remote: mein_materialhinweis

``product`` steht für Artikel. ``local`` ist der technische Feldname in Warexo,
``remote`` der technische Feldname in Shopware. Die sichtbaren Bezeichnungen
der Felder reichen hier nicht aus: Die Namen müssen genau so geschrieben sein,
wie sie im jeweiligen System hinterlegt sind.

Eine weitere Zuordnung für Artikel beginnt mit einem weiteren ``- local:``
unter ``product``. Achten Sie dabei auf die Einrückung wie im Beispiel. Wenn
Sie nach dem Speichern keinen Wert im Shop sehen, prüfen Sie zuerst die beiden
technischen Feldnamen und ob das Shopware-Extrafeld vorhanden ist.

Ein reguläres Shopware-Feld zuordnen
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Für :guilabel:`Feld Mapping` ist die Schreibweise ähnlich. Dieses Beispiel
überträgt ein eigenes Warexo-Feld als SEO-Titel eines Artikels::

   product:
     - local: mein_seo_titel
       remote: metaTitle

Der Name nach ``remote`` muss zu einem regulären Shopware-Produktfeld passen.
``metaTitle`` ist bereits über das normale Warexo-Feld für den SEO-Titel
zugeordnet. Verwenden Sie das Beispiel daher nur, wenn Sie den SEO-Titel
bewusst aus Ihrem eigenen Feld füllen möchten. Testen Sie die Zuordnung zuerst
mit einem Artikel und prüfen Sie das Ergebnis in Shopware.

.. note:: Ändern Sie bestehende Mappings mit Bedacht: Eine falsche Zuordnung
   kann dazu führen, dass Werte fehlen oder im falschen Feld landen. Bewahren
   Sie den bisherigen Inhalt auf, bevor Sie ihn ändern.
