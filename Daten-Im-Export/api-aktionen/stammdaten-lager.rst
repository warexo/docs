Stammdaten und Lager
====================

Authentifizierung, ID-Konventionen und Fehlerformat: :doc:`API-Aktionen <index>`.

Kategoriebild entfernen
-----------------------

``POST /api/v1/routedaction/category/deletepicture/{category_id}``

Entfernt eine Bildzuordnung der Kategorie.

**Pfadparameter**

.. list-table::
   :header-rows: 1

   * - Parameter
     - Typ
     - Beschreibung
   * - ``category_id``
     - string
     - ID des Datensatzes vom Typ ``Category``.

**JSON-Parameter**

.. list-table::
   :header-rows: 1

   * - Parameter
     - Typ
     - Pflicht
     - Standard
     - Beschreibung
   * - ``type``
     - string
     - Ja
     - —
     - ``icon``: Icon-Zuordnung (``iconName``). ``thumb``: Bildzuordnung (``pictureName``).

**Request-Body**

.. code-block:: json

   {
     "type": "thumb"
   }

**Response:** ``200 OK``, leerer Body.

Hersteller-Icon entfernen
-------------------------

``POST /api/v1/routedaction/manufacturer/deleteicon/{manufacturer_id}``

Entfernt die Icon-Zuordnung des Herstellers.

**Pfadparameter**

.. list-table::
   :header-rows: 1

   * - Parameter
     - Typ
     - Beschreibung
   * - ``manufacturer_id``
     - string
     - ID des Datensatzes vom Typ ``Manufacturer``.

**Request-Body**

.. code-block:: json

   {}

**Response:** ``200 OK``, leerer Body.

Gewicht und Volumen eines Lagerplatzes berechnen
------------------------------------------------

``POST /api/v1/routedaction/warehousestoragelocation/calculateweight/{location_id}``

Berechnet Gewicht und Volumen neu und aktualisiert den Lagerplatz.

**Pfadparameter**

.. list-table::
   :header-rows: 1

   * - Parameter
     - Typ
     - Beschreibung
   * - ``location_id``
     - string
     - ID des Datensatzes vom Typ ``WarehouseStorageLocation``.

**Request-Body**

.. code-block:: json

   {}

**Response:** ``200 OK``, leerer Body.

Artikeletiketten für einen Lagerplatz drucken
---------------------------------------------

``POST /api/v1/routedaction/warehousestoragelocation/printproductlabels/{location_id}``

Erzeugt Druckaufträge mit der Dokumentvorlage ``artikeletikett`` für die
Produkte am Lagerplatz. Druckkontext ist der authentifizierte Benutzer.

**Pfadparameter**

.. list-table::
   :header-rows: 1

   * - Parameter
     - Typ
     - Beschreibung
   * - ``location_id``
     - string
     - ID des Datensatzes vom Typ ``WarehouseStorageLocation``.

**JSON-Parameter**

.. list-table::
   :header-rows: 1

   * - Parameter
     - Typ
     - Pflicht
     - Standard
     - Beschreibung
   * - ``inqty``
     - integer
     - Nein
     - ``0``
     - ``0``: ein Etikett je Produkt. Andere Werte: Etikettenanzahl gemäß Restmenge der Lagerbuchung.

**Request-Body**

.. code-block:: json

   {
     "inqty": 0
   }

**Response:** ``200 OK``, leerer Body.

Jedes Produkt wird einmal berücksichtigt. Bei mehreren Buchungen desselben
Produkts gilt die Restmenge der zuerst berücksichtigten Buchung. Die Response
enthält keine Etikettendatei.
