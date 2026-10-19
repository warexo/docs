Formulare, Listen und Workflows
===============================

Authentifizierung, ID-Konventionen und Fehlerformat: :doc:`API-Aktionen <index>`.

Listenaktionen arbeiten auf konfigurierten Formularen und Grids.
Allgemeine Entitätssuche: ``POST /api/v1/searchentity/{type}``.

Workflow-Event auslösen
-----------------------

``POST /api/v1/routedaction/workflow/raise/-1``

Führt die dem Event zugeordneten Workflows für die Zielentität aus. Bei
Produkten mit Varianten erfolgt die Ausführung zusätzlich für die Blattvarianten.

**Alias:** ``POST /api/v1/routedaction/workflow/raiseevent/-1``

**JSON-Parameter**

.. list-table::
   :header-rows: 1

   * - Parameter
     - Typ
     - Pflicht
     - Standard
     - Beschreibung
   * - ``event``
     - string
     - Ja
     - —
     - ID des Workflow-Events (``WorkflowEvent``).
   * - ``entityId``
     - string
     - Ja
     - —
     - ID der Zielentität.
   * - ``entityType``
     - string
     - Ja
     - —
     - Doctrine-Entitätstyp, zum Beispiel ``AggrosoftWAWIBundle:Order``.

**Request-Body**

.. code-block:: json

   {
     "event": "{workflow_event_id}",
     "entityId": "{order_id}",
     "entityType": "AggrosoftWAWIBundle:Order"
   }

**Response:** ``200 OK``, leerer Body.

Element aus einem Formular entfernen
------------------------------------

``POST /api/v1/routedaction/customform/removeitem/-1``

Entfernt ein Collection-Element anhand des konfigurierten Formularfeldes.

**JSON-Parameter**

.. list-table::
   :header-rows: 1

   * - Parameter
     - Typ
     - Pflicht
     - Standard
     - Beschreibung
   * - ``fieldId``
     - string
     - Ja
     - —
     - ID des Collection-Feldes (``CustomFormField``).
   * - ``entityId``
     - string
     - Ja
     - —
     - ID der übergeordneten Entität.
   * - ``itemId``
     - string
     - Ja
     - —
     - ID des zu entfernenden Elements.
   * - ``entityType``
     - string
     - Ja
     - —
     - Doctrine-Entitätstyp der übergeordneten Entität.

**Request-Body**

.. code-block:: json

   {
     "fieldId": "{field_id}",
     "entityId": "{entity_id}",
     "itemId": "{item_id}",
     "entityType": "AggrosoftWAWIBundle:Offer"
   }

**Response:** ``200 OK``, leerer Body.

Listenaktion für mehrere Datensätze ausführen
---------------------------------------------

``POST /api/v1/routedaction/customformgrid/executemassaction/{grid_id}``

Führt eine konfigurierte Listenaktion für ausgewählte Datensätze aus.

**Pfadparameter**

.. list-table::
   :header-rows: 1

   * - Parameter
     - Typ
     - Beschreibung
   * - ``grid_id``
     - string
     - ID des Datensatzes vom Typ ``CustomFormGrid``.

**JSON-Parameter**

.. list-table::
   :header-rows: 1

   * - Parameter
     - Typ
     - Pflicht
     - Standard
     - Beschreibung
   * - ``actionId``
     - string
     - Ja
     - —
     - ID der Listenaktion (``CustomFormGridAction``).
   * - ``entityIds``
     - array<string>
     - Ja
     - —
     - Datensatz-IDs. ``["all"]`` adressiert alle Ergebnisse der gespeicherten Listensuche.
   * - ``actionParameter``
     - abhängig von Aktion
     - Nein
     - ``null``
     - Parameterwert gemäß Definition der Listenaktion.

**Request-Body**

.. code-block:: json

   {
     "actionId": "{grid_action_id}",
     "entityIds": [
       "{entity_id_1}",
       "{entity_id_2}"
     ],
     "actionParameter": null
   }

**Response:** ``200 OK``. JSON oder leerer Body, abhängig von der Listenaktion.
Dateiergebnisse werden als Downloadreferenz zurückgegeben:

.. code-block:: json

   {
     "__shouldDownload": true,
     "fileName": "{file_name}"
   }

**Fehler:** Leere Ergebnisauswahl: ``Bitte wählen Sie einen Eintrag``.

Listensuche speichern
---------------------

``POST /api/v1/routedaction/customformgrid/gridsearch/{grid_id}``

Speichert Suchwerte und Operatoren im Benutzerkontext und setzt die
Listenseite auf den Anfang zurück. Schlüssel der Suchobjekte sind die
Formularfeld-IDs des Grids.

**Pfadparameter**

.. list-table::
   :header-rows: 1

   * - Parameter
     - Typ
     - Beschreibung
   * - ``grid_id``
     - string
     - ID des Datensatzes vom Typ ``CustomFormGrid``.

**JSON-Parameter**

.. list-table::
   :header-rows: 1

   * - Parameter
     - Typ
     - Pflicht
     - Standard
     - Beschreibung
   * - ``form``
     - object
     - Ja
     - —
     - Suchwerte nach Formularfeld-ID.
   * - ``form2``
     - object
     - Nein
     - —
     - Zweiter Wert je Feld für Bereichssuchen, etwa ``BETWEENINCL``.
   * - ``searchoperator``
     - object
     - Nein
     - —
     - Suchoperator je Formularfeld-ID, etwa ``CONTAINS``.
   * - ``searchedfield``
     - string
     - Nein
     - —
     - Zuletzt geänderte Feld-ID; berücksichtigt konfigurierte Filter-Rücksetzungen.
   * - ``searchinallclients``
     - boolean
     - Nein
     - ``false``
     - Überträgt die Suche auf passende Grids mit demselben Bezeichner in anderen Mandanten.

**Request-Body**

.. code-block:: json

   {
     "form": {
       "{field_id}": "Suchwert"
     },
     "form2": {},
     "searchoperator": {
       "{field_id}": "CONTAINS"
     }
   }

**Response:** ``200 OK``

.. code-block:: json

   {
     "redirectLocation": "{grid_url}"
   }

Filterbereich ein- oder ausklappen
----------------------------------

``POST /api/v1/routedaction/customformgrid/togglefilter/{grid_id}``

Speichert den Anzeigezustand des Filterbereichs im Benutzerkontext.

**Pfadparameter**

.. list-table::
   :header-rows: 1

   * - Parameter
     - Typ
     - Beschreibung
   * - ``grid_id``
     - string
     - ID des Datensatzes vom Typ ``CustomFormGrid``.

**JSON-Parameter**

.. list-table::
   :header-rows: 1

   * - Parameter
     - Typ
     - Pflicht
     - Standard
     - Beschreibung
   * - ``collapsed``
     - boolean
     - Ja
     - —
     - ``true``: eingeklappt. ``false``: ausgeklappt.

**Request-Body**

.. code-block:: json

   {
     "collapsed": true
   }

**Response:** ``200 OK``, leerer Body.
