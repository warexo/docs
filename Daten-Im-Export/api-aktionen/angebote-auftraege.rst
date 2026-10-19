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
