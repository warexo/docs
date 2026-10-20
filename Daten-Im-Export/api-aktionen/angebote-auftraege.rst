Angebote und Aufträge
=====================

Authentifizierung, ID-Konventionen und Fehlerformat: :doc:`API-Aktionen <index>`.

Benannte Aktionen
-----------------

Angebot bestätigen
~~~~~~~~~~~~~~~~~~

``POST /api/v1/action/placeoffer``

Bestätigt ein Angebot; optional mit Nummernvergabe und Preisneuberechnung.

**JSON-Parameter**

.. list-table::
   :header-rows: 1

   * - Parameter
     - Typ
     - Pflicht
     - Standard
     - Beschreibung
   * - ``id``
     - string
     - Ja
     - —
     - ID des Angebots (``Offer``).
   * - ``assignOfferNumber``
     - boolean
     - Nein
     - ``false``
     - Vergibt eine Angebotsnummer, falls noch keine vorhanden ist.
   * - ``calculatePrices``
     - boolean
     - Nein
     - ``false``
     - Berechnet die Angebotspreise neu.

**Request-Body**

.. code-block:: json

   {
     "id": "{offer_id}",
     "assignOfferNumber": true,
     "calculatePrices": true
   }

**Response:** ``200 OK``

.. code-block:: json

   null

Auftrag anlegen
~~~~~~~~~~~~~~~

``POST /api/v1/action/placeorder``

Wandelt ein Angebot in einen Auftrag um. Existiert bereits ein Auftrag zum Angebot, wird dessen ID zurückgegeben.

**JSON-Parameter**

.. list-table::
   :header-rows: 1

   * - Parameter
     - Typ
     - Pflicht
     - Standard
     - Beschreibung
   * - ``id``
     - string
     - Ja
     - —
     - ID des Angebots (``Offer``).
   * - ``salesChannel``
     - string
     - Nein
     - —
     - ID des Vertriebskanals (``SalesChannel``).
   * - ``sendmails``
     - boolean
     - Nein
     - ``false``
     - Aktiviert den E-Mail-Versand bei der Auftragserstellung.
   * - ``numberRange``
     - string
     - Nein
     - —
     - Nummernkreismuster für die Auftragsnummer.
   * - ``noevents``
     - boolean
     - Nein
     - ``false``
     - Unterdrückt Workflow-Events bei der Auftragserstellung.

**Request-Body**

.. code-block:: json

   {
     "id": "{offer_id}",
     "salesChannel": "{sales_channel_id}",
     "sendmails": true,
     "numberRange": "$123-{year}-ORD-{counter}",
     "noevents": false
   }

**Response:** ``200 OK``

.. code-block:: json

   {
     "id": "{order_id}"
   }

Auftragsstatus setzen
~~~~~~~~~~~~~~~~~~~~~

``POST /api/v1/action/setorderstatus``

Setzt den Status eines Auftrags.

**JSON-Parameter**

.. list-table::
   :header-rows: 1

   * - Parameter
     - Typ
     - Pflicht
     - Standard
     - Beschreibung
   * - ``id``
     - string
     - Ja
     - —
     - ID des Auftrags (``Order``).
   * - ``status``
     - string
     - Ja
     - —
     - Statuswert (``OrderStatus.value``), gültig im Mandanten des Auftrags.

**Request-Body**

.. code-block:: json

   {
     "id": "{order_id}",
     "status": "{status}"
   }

**Response:** ``200 OK``

.. code-block:: json

   {
     "id": "{order_id}"
   }

Routed Actions für Angebote
---------------------------

Angebot aus Vorlage erstellen
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

``POST /api/v1/routedaction/offer/new/-1``

Kopiert ein Vorlagenangebot und vergibt eine neue Angebotsnummer.

**JSON-Parameter**

.. list-table::
   :header-rows: 1

   * - Parameter
     - Typ
     - Pflicht
     - Standard
     - Beschreibung
   * - ``template``
     - string
     - Nein
     - —
     - ID des Vorlagenangebots (``Offer``). Ohne Angabe wird kein Angebot erstellt; die Response bleibt leer.

**Request-Body**

.. code-block:: json

   {
     "template": "{template_offer_id}"
   }

**Response:** ``200 OK``

.. code-block:: json

   {
     "redirectLocation": {
       "name": "offer_edit",
       "params": {
         "entityId": "{new_offer_id}"
       }
     }
   }

Angebot kopieren
~~~~~~~~~~~~~~~~

``POST /api/v1/routedaction/offer/copy/{offer_id}``

Dupliziert ein Angebot mit neuer Angebotsnummer. Zahlungsdatum, Versanddatum und Zahlungstransaktions-ID werden zurückgesetzt.

**Pfadparameter**

.. list-table::
   :header-rows: 1

   * - Parameter
     - Typ
     - Beschreibung
   * - ``offer_id``
     - string
     - ID des Datensatzes vom Typ ``Offer``.

**JSON-Parameter**

.. list-table::
   :header-rows: 1

   * - Parameter
     - Typ
     - Pflicht
     - Standard
     - Beschreibung
   * - ``amount``
     - integer
     - Nein
     - ``0``
     - Anzahl der Kopien. ``0`` entspricht einer Kopie.

**Request-Body**

.. code-block:: json

   {
     "amount": 1
   }

**Response:** ``200 OK``

.. code-block:: json

   {
     "redirectLocation": {
       "name": "offer_edit",
       "params": {
         "entityId": "{new_offer_id}"
       }
     }
   }

**Bekannte Einschränkung:** Bei ``amount > 1`` können die Kopien gespeichert
werden, obwohl die Response fehlschlägt. Für eine Kopie ``amount: 1`` verwenden.

Angebot mit anderem Preismodus kopieren
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Erstellt eine Angebotskopie mit neuer Angebotsnummer im angegebenen Preismodus.

.. list-table::
   :header-rows: 1

   * - Endpoint (POST)
     - Verhalten
   * - ``/api/v1/routedaction/offer/copytonetto/{offer_id}``
     - Nettomodus; Preisumrechnung bei Bedarf; Zahlungs- und Versanddatum werden zurückgesetzt.
   * - ``/api/v1/routedaction/offer/copyshippedtonetto/{offer_id}``
     - Nettomodus; Preisumrechnung bei Bedarf; Versanddatum und Status werden übernommen.
   * - ``/api/v1/routedaction/offer/copytobrutto/{offer_id}``
     - Bruttomodus; Preisumrechnung bei Bedarf; Zahlungs- und Versanddatum werden zurückgesetzt.

**Pfadparameter**

.. list-table::
   :header-rows: 1

   * - Parameter
     - Typ
     - Beschreibung
   * - ``offer_id``
     - string
     - ID des Datensatzes vom Typ ``Offer``.

**Request-Body**

.. code-block:: json

   {}

**Response:** ``200 OK``

.. code-block:: json

   {
     "redirectLocation": {
       "name": "offer_edit",
       "params": {
         "entityId": "{new_offer_id}"
       }
     }
   }

Festschreibung aufheben
~~~~~~~~~~~~~~~~~~~~~~~

``POST /api/v1/routedaction/offer/allowupdateinvoice/{offer_id}``

Gibt ein Angebot mit Rechnung zur Bearbeitung frei.

**Pfadparameter**

.. list-table::
   :header-rows: 1

   * - Parameter
     - Typ
     - Beschreibung
   * - ``offer_id``
     - string
     - ID des Datensatzes vom Typ ``Offer``.

**Request-Body**

.. code-block:: json

   {}

**Bekannte Einschränkung:** Der Endpunkt ist derzeit fehlerhaft; eine
erfolgreiche Speicherung ist nicht gewährleistet.

Routed Actions für Aufträge
---------------------------

Eigenständigen Auftrag abspalten
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

``POST /api/v1/routedaction/order/splitseparateorder/{order_id}``

Überträgt ausgewählte Positionen oder Teilmengen in einen eigenständigen Auftrag
mit neuer Auftragsnummer. Die übertragenen Mengen werden aus dem ursprünglichen
Auftrag entfernt. Der neue Auftrag verweist auf seinen Ursprungsauftrag.

Pfad- und JSON-Parameter: :ref:`order-split-parameter`.
Der Aufteilungsmodus ist fest vorgegeben; ``separateOrder`` wird ignoriert.
Ein Zielmandant über ``client`` ist bei dieser Aktion nicht zulässig.

**Request-Body**

.. code-block:: json

   {
     "items": [
       {"id": "{offer_item_id}", "quantity": 2}
     ],
     "transferShippingCosts": true,
     "paymentsSplittingType": 0
   }

**Response:** ``200 OK``

.. code-block:: json

   {
     "redirectLocation": {
       "name": "order_edit",
       "params": {"entityId": "{new_order_id}"}
     },
     "id": "{new_order_id}"
   }

Teillieferung erstellen
~~~~~~~~~~~~~~~~~~~~~~~

``POST /api/v1/routedaction/order/createpartialshipping/{order_id}``

Ordnet ausgewählte Positionen oder Teilmengen einer neuen Teillieferung zu.
Diese bleibt dem Hauptauftrag zugeordnet und erhält dessen Auftragsnummer mit
fortlaufender Teilnummer. Die Positionen bleiben Bestandteil des Hauptauftrags.
Der Aufruf erstellt die Teillieferung; er bucht keinen Versand.

Pfad- und JSON-Parameter: :ref:`order-split-parameter`.
Der Aufteilungsmodus ist fest vorgegeben; ``separateOrder`` wird ignoriert.

**Request-Body**

.. code-block:: json

   {
     "items": [
       {"id": "{offer_item_id_1}", "quantity": 2},
       {"id": "{offer_item_id_2}", "quantity": 1}
     ]
   }

**Response:** ``200 OK``

.. code-block:: json

   {
     "redirectLocation": {
       "name": "order_edit",
       "params": {"entityId": "{partial_order_id}"}
     },
     "id": "{partial_order_id}"
   }

Bei Angabe eines gültigen Zielmandanten in ``client`` bleibt die erfolgreiche
Response leer. Der Zielmandant benötigt eine passende Versandart mit demselben
Bezeichner oder Titel wie die Versandart des Quellauftrags.

.. _order-split-parameter:

Parameter der Aufteilung
~~~~~~~~~~~~~~~~~~~~~~~~

Die folgenden Parameter gelten für ``splitseparateorder`` und
``createpartialshipping`` sowie den allgemeinen Endpunkt
``POST /api/v1/routedaction/order/split/{order_id}``.

**Pfadparameter**

.. list-table::
   :header-rows: 1

   * - Parameter
     - Typ
     - Beschreibung
   * - ``order_id``
     - string
     - ID des Quellauftrags (``Order``). Bei einer Teillieferung wird deren Hauptauftrag aufgeteilt.

**JSON-Parameter**

.. list-table::
   :header-rows: 1

   * - Parameter
     - Typ
     - Pflicht
     - Standard
     - Beschreibung
   * - ``items``
     - array<object>
     - Ja
     - —
     - Nicht leere Liste der aufzuteilenden Positionen mit ID und Menge.
   * - ``transferShippingCosts``
     - boolean
     - Nein
     - ``false``
     - Überträgt bei einem eigenständigen Auftrag die Versandkosten vollständig auf den neuen Auftrag und setzt sie im Quellauftrag auf null. Ohne Wirkung bei Teillieferungen.
   * - ``paymentsSplittingType``
     - integer
     - Nein
     - ``0``
     - Verteilung vorhandener Zahlungen bei eigenständigen Aufträgen: ``0`` anteilig nach Auftragswert, ``1`` neuer Auftrag zuerst, ``2`` Quellauftrag zuerst.
   * - ``client``
     - string
     - Nein
     - —
     - ID des Zielmandanten (``Client``); nur für Teillieferungen. Ohne Angabe bleibt der Mandant unverändert.
   * - ``separateOrder``
     - boolean
     - Nein
     - ``false``
     - Nur bei ``/order/split``: ``true`` erstellt einen eigenständigen Auftrag, ``false`` eine Teillieferung. Die beiden spezialisierten Endpunkte überschreiben diesen Wert.

**Positionsschema (``items[]``)**

.. list-table::
   :header-rows: 1

   * - Feld
     - Typ
     - Pflicht
     - Beschreibung
   * - ``id``
     - string
     - Ja
     - ID der Auftragsposition (``OfferItem``) des Quellauftrags.
   * - ``quantity``
     - number | string
     - Ja
     - Positive Menge, maximal die bestellte Positionsmenge. Dezimalzahlen können als Zahl oder als String mit Punkt oder Komma übergeben werden.

Bei ``quantity`` gleich der Positionsmenge wird die gesamte Position übernommen.
Bei einer kleineren Menge wird die Position zunächst in die übertragene Menge
und die Restmenge aufgeteilt.

**Bekannte Einschränkungen**

- Für ``paymentsSplittingType`` sind die numerischen Werte ``0``, ``1`` und ``2``
  zu verwenden. Die symbolischen Werte ``DISTRIBUTE``, ``SPLITTED_ORDER_FIRST``
  und ``MAIN_ORDER_FIRST`` werden derzeit nicht korrekt ausgewertet.
- Die Einzelaufteilung mit ``quantity: "*"`` und die Materialaufteilung über
  ``materials`` bzw. ``optionMaterials`` sind derzeit fehlerhaft.

**Fachliche Fehler**

Fehlerstatus und Fehlerformat: :doc:`API-Aktionen <index>`.

.. list-table::
   :header-rows: 1

   * - Bedingung
     - Fehlermeldung / Verhalten
   * - ``items`` ist leer
     - ``Wählen Sie die Bestellpositionen``
   * - Position nicht gefunden
     - ``OfferItem with id {id} not found``
   * - Menge nicht positiv oder nicht numerisch
     - ``Anzahl muss eine positive Zahl sein``
   * - Menge größer als die Positionsmenge
     - ``Anzahl größer als die bestellte Menge``
   * - Auftrag gehört zu einer Sammelpickliste mit mehreren Aufträgen
     - ``Bestellungen für die eine Sammelpickliste erstellt wurde, können nicht gesplittet werden``
   * - Auftrag kommissioniert, aber noch nicht versendet
     - ``Kommissionierte Bestellungen dürfen nicht gesplittet werden``
   * - Auftrag storniert
     - ``Stornierte Bestellungen können nicht gesplittet werden``
   * - Eigenständiger Auftrag mit Zielmandant
     - Abweisung; Mandantenwechsel ist nur bei Teillieferungen zulässig.
   * - Eigenständiger Auftrag mit Rechnungsnummer, eingelöstem Kaufgutschein oder mehreren Zahlungsbedingungen
     - Abweisung mit der jeweiligen fachlichen Fehlermeldung.
   * - Zahlungsart für eigenständigen Auftrag nicht unterstützt
     - Zulässige Zahlungs-Handler: ``invoice``, ``prepayment``, ``paypal``, ``debitnote``, ``nopayment``.
   * - Teillieferung aus bereits versendeten Positionen
     - Abweisung mit ``Die Bestellung wurde schon versendet``.

Auftragsposition aufteilen
~~~~~~~~~~~~~~~~~~~~~~~~~~

``POST /api/v1/routedaction/order/splititem/-1``

Teilt eine Auftragsposition in zwei neue Positionen innerhalb desselben Auftrags
auf: eine Position mit ``quantity`` und eine mit der Restmenge. Die ursprüngliche
Position wird gelöscht. Die Response enthält die ID der Position mit der
abgetrennten Menge; die Restposition kann anschließend über den Auftrag
abgerufen werden. Es wird kein zusätzlicher Auftrag angelegt.

Die Positions-ID wird als ``offerItem`` übergeben. Der Pfadwert ``-1`` bezeichnet
den ungespeicherten Auftragskontext.

**JSON-Parameter**

.. list-table::
   :header-rows: 1

   * - Parameter
     - Typ
     - Pflicht
     - Standard
     - Beschreibung
   * - ``offerItem``
     - string
     - Ja
     - —
     - ID der aufzuteilenden Auftragsposition (``OfferItem``).
   * - ``quantity``
     - number | string
     - Ja
     - —
     - Abzutrennende Menge; größer als null und kleiner als die Positionsmenge. Numerische Strings benötigen einen Dezimalpunkt; Dezimalkommas werden abgewiesen.

**Request-Body**

.. code-block:: json

   {
     "offerItem": "{offer_item_id}",
     "quantity": 2
   }

**Response:** ``200 OK``

.. code-block:: json

   {
     "splittedItem": {
       "id": "{split_offer_item_id}"
     }
   }

Die ursprüngliche ``offerItem``-ID ist nach erfolgreicher Aufteilung nicht mehr
verwendbar. Nachfolgende Positionsaktionen müssen die neuen IDs verwenden.

**Fehler**

.. list-table::
   :header-rows: 1

   * - Bedingung
     - Fehlermeldung
   * - ``offerItem`` fehlt
     - ``missing offerItem``
   * - ``quantity`` fehlt
     - ``Property quantity missing``
   * - ``quantity`` ist nicht numerisch
     - ``quantity: expected a numeric value``
   * - Menge größer oder gleich der Positionsmenge
     - ``Splitmenge ist zu groß``
   * - Menge kleiner oder gleich null
     - ``Splitmenge muss immer positive Zahl sein`` bzw. bei fehlender Splitmenge ``Geben Sie die Splitmenge ein``.

Teilgutschrift für eine Auftragsposition erstellen
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

``POST /api/v1/routedaction/order/credititem/-1``

Erstellt eine betragsbezogene Teilgutschrift für eine Auftragsposition und
aktualisiert Rechnung und Gutschrift. Eine automatische Zahlungserstattung
erfolgt, sofern sie im Mandanten aktiviert ist, ``notrefund`` nicht gesetzt ist
und ein erstattbarer Betrag vorhanden ist.

Die Positions-ID wird als ``offerItem`` übergeben. Der Pfadwert ``-1`` bezeichnet
den ungespeicherten Auftragskontext.

**JSON-Parameter**

.. list-table::
   :header-rows: 1

   * - Parameter
     - Typ
     - Pflicht
     - Standard
     - Beschreibung
   * - ``offerItem``
     - string
     - Ja
     - —
     - ID der Auftragsposition (``OfferItem``).
   * - ``total``
     - number | string
     - Ja
     - —
     - Positiver Bruttobetrag der Teilgutschrift in Auftragswährung. Numerische Strings benötigen einen Dezimalpunkt; Dezimalkommas werden abgewiesen.
   * - ``reference``
     - string | null
     - Nein
     - ``null``
     - Referenztext, der an den Teilgutschrifttext der Position angehängt wird.
   * - ``notrefund``
     - boolean
     - Nein
     - ``false``
     - ``true`` unterdrückt die automatische Zahlungserstattung; die Teilgutschrift wird dennoch erstellt.

**Request-Body**

.. code-block:: json

   {
     "offerItem": "{offer_item_id}",
     "total": 10.50,
     "reference": "Preisnachlass wegen Beschädigung",
     "notrefund": true
   }

**Response:** ``200 OK``, leerer Body.

Der Betrag wird zu vorhandenen Teilgutschriften addiert. Ein wiederholter Aufruf
erstellt eine weitere Teilgutschrift. Auftragsrabatte werden bei der Berechnung
des Erstattungsbetrags anteilig berücksichtigt.

**Fehler**

.. list-table::
   :header-rows: 1

   * - Bedingung
     - Fehlermeldung
   * - ``offerItem`` fehlt
     - ``missing offerItem``
   * - ``total`` fehlt
     - ``Property total missing``
   * - ``total`` ist nicht numerisch
     - ``total: expected a numeric value``
   * - Betrag kleiner oder gleich null
     - ``Der Betrag muss positiv sein``
   * - Betrag übersteigt den Positionswert abzüglich vorhandener Teilgutschriften; Auftrag ohne Auftragsrabatt
     - ``Der Betrag ist zu hoch``
   * - Auftrag mit Zahlungsbedingungen ohne Rechnungsnummer
     - ``Teilgutschrift kann nicht erstellt werden. Die Bestellung hat die Zahlungsbedingungen.``

Steuer einer Auftragsposition erstatten
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

``POST /api/v1/routedaction/order/refunditemtax/-1``

Erstattet den Steueranteil einer Auftragsposition unter Berücksichtigung
vorhandener Teilgutschriften und Auftragsrabatte. Aktualisiert die
Steuererstattungsbeträge an Position und Auftrag sowie Rechnung und Gutschrift.
Der Aufruf löst keine direkte Zahlungserstattung aus.

Die Positions-ID wird als ``offerItem`` übergeben. Der Pfadwert ``-1`` bezeichnet
den ungespeicherten Auftragskontext.

**JSON-Parameter**

.. list-table::
   :header-rows: 1

   * - Parameter
     - Typ
     - Pflicht
     - Standard
     - Beschreibung
   * - ``offerItem``
     - string
     - Ja
     - —
     - ID der Auftragsposition (``OfferItem``).

**Request-Body**

.. code-block:: json

   {
     "offerItem": "{offer_item_id}"
   }

**Response:** ``200 OK``, leerer Body.

**Fehler**

.. list-table::
   :header-rows: 1

   * - Bedingung
     - Fehlermeldung
   * - ``offerItem`` fehlt
     - ``missing offerItem``
   * - Position storniert
     - ``Die Bestellposition wurde schon storniert``
   * - Steuer bereits erstattet
     - ``Der Steuer wurde schon erstattet``
   * - Position steuerfrei
     - ``Die Bestellposition ist steuerfrei``
   * - Auftrag mit Zahlungsbedingungen ohne Rechnungsnummer
     - ``Teilgutschrift kann nicht erstellt werden. Die Bestellung hat die Zahlungsbedingungen.``

Auftrag stornieren
~~~~~~~~~~~~~~~~~~

``POST /api/v1/routedaction/order/storno/{order_id}``

Storniert den Auftrag einschließlich seiner Positionen und führt die Bestands-
und Belegverarbeitung aus. Gutschriften und Stornomails werden abhängig vom
Auftragszustand erzeugt. Bereits stornierte Aufträge bleiben unverändert.

**Pfadparameter**

.. list-table::
   :header-rows: 1

   * - Parameter
     - Typ
     - Beschreibung
   * - ``order_id``
     - string
     - ID des Datensatzes vom Typ ``Order``.

**Request-Body**

.. code-block:: json

   {}

**Response:** ``200 OK``, leerer Body.

**Fachliche Fehler**

.. list-table::
   :header-rows: 1

   * - Bedingung
     - Verhalten
   * - POS-Auftrag
     - Abweisung mit ``Die POS-Aufträge dürfen nicht geändert werden``.
   * - Teillieferung
     - Einzelstornierung wird abgewiesen.
   * - Versendete Lagerartikel
     - Abweisung, falls die erforderliche Retoure nicht abgeschlossen ist.

Auftragsposition stornieren
~~~~~~~~~~~~~~~~~~~~~~~~~~~

``POST /api/v1/routedaction/order/stornoitem/-1``

Storniert die gesamte Menge einer Auftragsposition (``OfferItem``) einschließlich
Auftrags-, Bestands- und Belegverarbeitung. Bereits stornierte Positionen
bleiben unverändert. Teilmengen werden nicht unterstützt.

**JSON-Parameter**

.. list-table::
   :header-rows: 1

   * - Parameter
     - Typ
     - Pflicht
     - Standard
     - Beschreibung
   * - ``offerItem``
     - string
     - Ja
     - —
     - ID der zu stornierenden Auftragsposition (``OfferItem``).

**Request-Body**

.. code-block:: json

   {
     "offerItem": "{offer_item_id}"
   }

**Response:** ``200 OK``, leerer Body.

Der Pfadwert ``-1`` bezeichnet den ungespeicherten Auftragskontext. Die
Positions-ID wird ausschließlich über ``offerItem`` adressiert. Ein anderer
``id``-Wert im Pfad oder Body muss eine Auftrags-ID (``Order``) sein.

**Alternative ohne Kontext-ID im Pfad**

.. code-block:: text

   POST /api/v1/routedaction/order/stornoitem

**Request-Body**

.. code-block:: json

   {
     "id": "-1",
     "offerItem": "{offer_item_id}"
   }

**Fachliche Fehler**

.. list-table::
   :header-rows: 1

   * - Bedingung
     - Fehlermeldung
   * - ``offerItem`` fehlt
     - ``missing offerItem``
   * - Position gehört zu einem POS-Auftrag
     - ``Die POS-Aufträge dürfen nicht geändert werden``
   * - Auftrag mit Zahlungsbedingungen ohne Rechnungsnummer
     - ``Teilgutschrift kann nicht erstellt werden. Die Bestellung hat die Zahlungsbedingungen.``

**cURL**

.. code-block:: bash

   curl -X POST \
     -H "Authorization: Bearer {token}" \
     -H "X-Client-Id: {client_id}" \
     -H "Content-Type: application/json" \
     -d '{"offerItem": "{offer_item_id}"}' \
     "https://{host}/api/v1/routedaction/order/stornoitem/-1"
