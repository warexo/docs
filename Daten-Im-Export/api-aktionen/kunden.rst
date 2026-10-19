Kunden und Kontakte
===================

Authentifizierung, ID-Konventionen und Fehlerformat: :doc:`API-Aktionen <index>`.

Auskunftsmail versenden
-----------------------

``POST /api/v1/routedaction/customer/sendinforeply/{customer_id}``

Versendet die Auskunftsmail für einen Kunden.

**Pfadparameter**

.. list-table::
   :header-rows: 1

   * - Parameter
     - Typ
     - Beschreibung
   * - ``customer_id``
     - string
     - ID des Datensatzes vom Typ ``Customer``.

**Request-Body**

.. code-block:: json

   {}

**Response:** ``200 OK``, leerer Body.

Kontaktmaske öffnen
-------------------

``POST /api/v1/routedaction/customer/newcontact/{customer_id}``

Liefert das Navigationsziel für einen neuen Kontakt. Der Aufruf speichert
keinen Kontakt; die Kunden-ID ist nicht Bestandteil der Response.

**Pfadparameter**

.. list-table::
   :header-rows: 1

   * - Parameter
     - Typ
     - Beschreibung
   * - ``customer_id``
     - string
     - ID des Datensatzes vom Typ ``Customer``.

**Request-Body**

.. code-block:: json

   {}

**Response:** ``200 OK``

.. code-block:: json

   {
     "redirectLocation": {
       "name": "contactedit",
       "params": {
         "entityId": -1
       }
     }
   }

Kontaktmaske mit Kundenzuordnung öffnen
---------------------------------------

``POST /api/v1/routedaction/contact/new/-1``

Liefert das Navigationsziel für einen neuen Kontakt mit Kundenzuordnung.
Der Kontakt wird beim Aufruf nicht gespeichert.

**JSON-Parameter**

.. list-table::
   :header-rows: 1

   * - Parameter
     - Typ
     - Pflicht
     - Standard
     - Beschreibung
   * - ``customerId``
     - string
     - Ja
     - —
     - ID des Kunden (``Customer``).

**Request-Body**

.. code-block:: json

   {
     "customerId": "{customer_id}"
   }

**Response:** ``200 OK``

.. code-block:: json

   {
     "redirectLocation": {
       "name": "contact_edit",
       "params": {
         "entityId": "-1",
         "customerId": "{customer_id}"
       }
     }
   }
