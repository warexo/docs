API-Aktionen
============

Referenz für fachliche Aktionen außerhalb der CRUD-Endpunkte.
Authentifizierung und Entitätszugriff: :doc:`REST API <../api>`.

.. toctree::
   :maxdepth: 1

   angebote-auftraege
   kunden
   stammdaten-lager
   formulare-workflows


HTTP-Schnittstelle
------------------

.. list-table::
   :header-rows: 1

   * - Eigenschaft
     - Wert
   * - Basis-URL
     - ``https://{host}/api/v1``
   * - HTTP-Methode
     - ``POST``
   * - Benannte Aktion
     - ``/action/{action}``
   * - Routed Action
     - ``/routedaction/{route}/{action}/{id}``
   * - Request-Format
     - JSON-Objekt; ``{}`` bei Aufrufen ohne JSON-Parameter.

**Request-Header**

.. list-table::
   :header-rows: 1

   * - Header
     - Wert
     - Beschreibung
   * - ``Authorization``
     - ``Bearer {token}``
     - JWT aus ``POST /api/v1/login``.
   * - ``X-Client-Id``
     - ``{client_id}``
     - ID des Mandanten für den Aufruf.
   * - ``Content-Type``
     - ``application/json``
     - Format des Request-Bodys.

Aktionsarten
------------

``/action/{action}`` adressiert eine Geschäftsoperation über einen globalen
Aktionsnamen, etwa ``placeorder``. Die Operation bestimmt selbst, welche
Datensätze sie verarbeitet; deren IDs werden im JSON-Body übergeben.

``/routedaction/{route}/{action}/{id}`` ordnet eine Aktion einem Fachbereich
wie ``order`` oder ``offer`` zu. ``route`` bestimmt den Entitätstyp;
``id`` liefert den Kontextdatensatz, der vor Ausführung der Aktion geladen
wird. Beispiel: ``offer/copy/{offer_id}`` kopiert das angegebene Angebot.

Die Trennung betrifft die Adressierung und Kontextauflösung. Die Pfade sind
keine austauschbaren URL-Varianten; maßgeblich ist der dokumentierte Endpunkt
des jeweiligen Vorgangs.


Parameter und IDs
-----------------

Entitäts-IDs werden als Strings übergeben. Platzhalter wie ``{order_id}``
stehen für IDs der jeweiligen Warexo-Instanz. JSON-Feldnamen sind
case-sensitive.

Bei Routed Actions ist ``id`` die Kontext-ID des durch ``route`` bestimmten
Entitätstyps. Sie kann als letztes Pfadsegment oder als JSON-Feld übergeben
werden. Der Pfadparameter hat Vorrang.

.. code-block:: text

   POST /api/v1/routedaction/offer/copy/{offer_id}
   {"amount": 1}

   POST /api/v1/routedaction/offer/copy
   {"id": "{offer_id}", "amount": 1}

``id: "-1"`` verwendet einen ungespeicherten Kontext. Referenzierte Datensätze
werden über separate JSON-Felder adressiert, beispielsweise ``offerItem`` bei
``order/stornoitem``. Der zulässige Kontext und die Referenzparameter sind pro
Endpunkt angegeben.

Responses
---------

.. list-table::
   :header-rows: 1

   * - HTTP-Status
     - Body
     - Bedeutung
   * - ``200 OK``
     - JSON oder leer
     - Aktion erfolgreich; Format gemäß Endpunktbeschreibung.
   * - ``401 Unauthorized``
     - Fehlermeldung
     - Token ungültig oder abgelaufen.
   * - ``403 Forbidden``
     - Fehlermeldung
     - Benutzer gesperrt oder Zugriff verweigert.
   * - ``500 Internal Server Error``
     - Fehlermeldung
     - Unter anderem fehlende Parameter, unbekannte IDs und fachliche Fehler.

Fehlerantworten können trotz ``Content-Type: application/json`` einen
unquotierten Text enthalten. Leere Erfolgsantworten und Textfehler müssen ohne
JSON-Parsing verarbeitet werden.

**Beispiel einer Fehlerantwort**

.. code-block:: text

   HTTP/1.1 500 Internal Server Error
   Content-Type: application/json

   missing offerItem

Navigations- und Downloadantworten
----------------------------------

Einige Aktionen liefern Steuerdaten für die Warexo-Oberfläche:

.. list-table::
   :header-rows: 1

   * - Feld
     - Typ
     - Bedeutung
   * - ``redirectLocation``
     - string | object
     - Navigationsziel als URL oder Objekt mit ``name`` und ``params``; HTTP-Status bleibt ``200``.
   * - ``__shouldDownload``
     - boolean
     - ``true`` kennzeichnet eine zum Download bereitgestellte Datei.
   * - ``fileName``
     - string
     - Name der zum Download bereitgestellten Datei.

.. code-block:: json

   {
     "redirectLocation": {
       "name": "offer_edit",
       "params": {
         "entityId": "{new_offer_id}"
       }
     }
   }

cURL-Beispiel
-------------

.. code-block:: bash

   curl -X POST \
     -H "Authorization: Bearer {token}" \
     -H "X-Client-Id: {client_id}" \
     -H "Content-Type: application/json" \
     -d '{"amount": 1}' \
     "https://{host}/api/v1/routedaction/offer/copy/{offer_id}"
