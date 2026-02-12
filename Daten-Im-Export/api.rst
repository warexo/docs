REST API
================

Die Warexo API ist eine REST-basierte Schnittstelle zum Warexo ERP-System. Sie ermöglicht den programmatischen Zugriff auf alle Entitätstypen und bietet vollständige CRUD-Operationen (Create, Read, Update, Delete) sowie erweiterte Such- und Filterfunktionen.

**Base URL Format:** ``https://ihre-instanz.warexo.com/api/v1``


Authentifizierung
-----------------

Login
~~~~~

Um die API zu nutzen, müssen Sie sich zunächst authentifizieren und ein JWT-Token erhalten.

**Endpoint:** ``POST /api/v1/login``

**Request Headers:**

.. code-block:: text

    Content-Type: application/json

**Request Body:**

.. code-block:: json

    {
      "username": "ihr-benutzername",
      "password": "ihr-passwort"
    }

**Response (200 OK):**

.. code-block:: json

    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }

**Beispiel (cURL):**

.. code-block:: bash

    curl -X POST \
      -H "Content-Type: application/json" \
      -d '{"username":"user@example.com","password":"passwort123"}' \
      "https://ihre-instanz.warexo.com/api/v1/login"


Token-Nutzung
~~~~~~~~~~~~~

Nach erfolgreichem Login verwenden Sie das erhaltene Token in allen nachfolgenden Anfragen:

**Request Header:**

.. code-block:: text

    Authorization: Bearer {token}


Token-Refresh
~~~~~~~~~~~~~

Wenn Ihr Access-Token abgelaufen ist, können Sie es mit dem Refresh-Token erneuern, ohne sich erneut einzuloggen.

**Endpoint:** ``POST /api/v1/token/refresh``

**Request Headers:**

.. code-block:: text

    Content-Type: application/json

**Request Body:**

.. code-block:: json

    {
      "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }

**Response (200 OK):**

.. code-block:: json

    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }


Client-Auswahl
~~~~~~~~~~~~~~

Sie müssen bei jeder Anfrage den gewünschten Mandanten spezifizieren, der als Kontext genutzt wird. Diese ID können Sie vorab über den Client-Endpunkt abrufen:

**Request Header:**

.. code-block:: text

    X-Client-Id: {client_id}


Entitätstypen abrufen
---------------------

Entity-Metadaten
~~~~~~~~~~~~~~~~

Die vollständige Liste aller verfügbaren Entitätstypen mit ihren Spalten, Relationen und Datentypen kann abgerufen werden von:

**URL:** ``https://warexo.github.io/entity-docs/data/entities.json``

Dieses JSON-Dokument enthält:

- **325+ Entitätstypen** gruppiert nach Bundles
- **Spaltendefinitionen** mit Datentypen (string, integer, decimal, boolean, datetime, etc.)
- **Relationen** zwischen Entitäten (ManyToOne, OneToMany, ManyToMany, OneToOne)
- **Metadaten** wie Bundle-Zuordnung, Namespace und Klassenname


Häufig verwendete Entity-Typen
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
    :header-rows: 1

    * - Entity-Typ
      - API-Slug
      - Beschreibung
    * - Client
      - ``client``
      - Mandanten/Kunden
    * - Product
      - ``product``
      - Produkte
    * - Category
      - ``category``
      - Kategorien
    * - Order
      - ``order``
      - Bestellungen
    * - Invoice
      - ``invoice``
      - Rechnungen
    * - Vendor
      - ``vendor``
      - Lieferanten
    * - VendorProduct
      - ``vendorproduct``
      - Lieferanten-Produkt-Zuordnungen
    * - Stock
      - ``stock``
      - Lagerbestände

**Hinweis:** Der API-Slug entspricht dem Klassennamen in Kleinbuchstaben (z.B. ``VendorProduct`` → ``vendorproduct``).


CRUD-Operationen
----------------

Alle nachfolgenden Endpunkte erfordern Authentifizierung via ``Authorization: Bearer {token}`` Header.

1. Liste abrufen (GET)
~~~~~~~~~~~~~~~~~~~~~~

Ruft eine Liste von Entitäten eines bestimmten Typs ab.

**Endpoint:** ``GET /api/v1/entity/{type}``

**Query-Parameter:**

- ``fields[]`` (Array, optional): Zu ladende Felder. Kann mehrfach angegeben werden. Standard: alle Felder
- ``limit`` (Integer, optional): Maximale Anzahl der Ergebnisse (Standard: 10)
- ``offset`` (Integer, optional): Offset für Paginierung (Standard: 0)

**Request Headers:**

.. code-block:: text

    Authorization: Bearer {token}
    X-Client-Id: {client_id}

**Beispiel:**

.. code-block:: bash

    curl -X GET \
      -H "Authorization: Bearer {token}" \
      -H "X-Client-Id: 123" \
      "https://ihre-instanz.warexo.com/api/v1/entity/product?fields[]=id&fields[]=sku&fields[]=title&fields[]=price&limit=20&offset=0"

**Response (200 OK):**

.. code-block:: json

    [
      {
        "id": 1001,
        "sku": "PROD-001",
        "title": "Beispielprodukt",
        "price": 29.99
      },
      {
        "id": 1002,
        "sku": "PROD-002",
        "title": "Weiteres Produkt",
        "price": 49.50
      }
    ]


2. Einzelne Entität abrufen (GET)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Ruft eine einzelne Entität anhand ihrer ID ab.

**Endpoint:** ``GET /api/v1/entity/{type}/{id}``

**Request Headers:**

.. code-block:: text

    Authorization: Bearer {token}
    X-Client-Id: {client_id}

**Beispiel:**

.. code-block:: bash

    curl -X GET \
      -H "Authorization: Bearer {token}" \
      -H "X-Client-Id: 123" \
      "https://ihre-instanz.warexo.com/api/v1/entity/product/1001"

**Response (200 OK):**

.. code-block:: json

    {
      "id": 1001,
      "sku": "PROD-001",
      "title": "Beispielprodukt",
      "fulltitle": "Beispielprodukt - Premium Edition",
      "price": 29.99,
      "stock": 150,
      "active": true,
      "createdAt": "2025-01-15T10:30:00+00:00",
      "updatedAt": "2025-02-01T14:20:00+00:00"
    }


3. Erweiterte Suche (POST)
~~~~~~~~~~~~~~~~~~~~~~~~~~

Durchsucht Entitäten mit komplexen Filtern und Bedingungen.

**Endpoint:** ``POST /api/v1/searchentity/{type}``

**Query-Parameter:**

- ``limit`` (Integer, optional): Maximale Anzahl der Ergebnisse
- ``offset`` (Integer, optional): Offset für Paginierung

**Request Headers:**

.. code-block:: text

    Authorization: Bearer {token}
    X-Client-Id: {client_id}
    Content-Type: application/json

**Request Body:**

.. code-block:: json

    {
      "fields": ["sku", "title", "price", "vendor.title"],
      "limit": 10,
      "filter": [
        {
          "field": "sku",
          "operator": "STARTSWITH",
          "value": "PROD"
        },
        {
          "field": "price",
          "operator": "GREQ",
          "value": "20"
        },
        {
          "field": "active",
          "operator": "EQ",
          "value": true,
          "conjunction": "AND"
        }
      ]
    }

**Verfügbare Filter-Operatoren:**

- ``EQ`` - Gleich
- ``NEQ`` - Ungleich
- ``GT`` - Größer als
- ``GREQ`` - Größer oder gleich
- ``LT`` - Kleiner als
- ``LTEQ`` - Kleiner oder gleich
- ``CONTAINS`` - Enthält (Teilstring)
- ``STARTSWITH`` - Beginnt mit
- ``ENDSWITH`` - Endet mit
- ``ISNULL`` - Ist NULL
- ``ISNOTNULL`` - Ist nicht NULL
- ``IN`` - In Liste enthalten
- ``NOTIN`` - Nicht in Liste enthalten
- ``BETWEENINCL`` - Zwischen zwei Werten (inklusiv)

**Konjunktionen:**

- ``AND`` - UND-Verknüpfung (Standard)
- ``OR`` - ODER-Verknüpfung

**Relationen durchsuchen:**

Sie können über Relationen hinweg suchen, indem Sie Punkt-Notation verwenden:

.. code-block:: json

    {
      "field": "vendorproducts.vendor.title",
      "operator": "EQ",
      "value": "Lieferant GmbH"
    }

**Beispiel (cURL):**

.. code-block:: bash

    curl -X POST \
      -H "Authorization: Bearer {token}" \
      -H "X-Client-Id: 123" \
      -H "Content-Type: application/json" \
      -d '{
        "fields": ["sku", "title", "price"],
        "filter": [
          {"field": "sku", "operator": "STARTSWITH", "value": "PROD"},
          {"field": "price", "operator": "GREQ", "value": "20"}
        ]
      }' \
      "https://ihre-instanz.warexo.com/api/v1/searchentity/product"

**Response (200 OK):**

.. code-block:: json

    [
      {
        "sku": "PROD-001",
        "title": "Beispielprodukt",
        "price": 29.99
      },
      {
        "sku": "PROD-005",
        "title": "Premium Produkt",
        "price": 89.00
      }
    ]


4. Entität erstellen (POST)
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Erstellt eine neue Entität.

**Endpoint:** ``POST /api/v1/entity/{type}``

**Request Headers:**

.. code-block:: text

    Authorization: Bearer {token}
    X-Client-Id: {client_id}
    Content-Type: application/json

**Request Body (Einzelne Entität):**

.. code-block:: json

    {
      "sku": "PROD-NEW-001",
      "title": "Neues Produkt",
      "price": 39.99,
      "active": true
    }

**Request Body (Bulk-Erstellung):**

.. code-block:: json

    [
      {
        "sku": "PROD-NEW-001",
        "title": "Produkt 1",
        "price": 39.99
      },
      {
        "sku": "PROD-NEW-002",
        "title": "Produkt 2",
        "price": 49.99
      }
    ]

**Beispiel (cURL):**

.. code-block:: bash

    curl -X POST \
      -H "Authorization: Bearer {token}" \
      -H "X-Client-Id: 123" \
      -H "Content-Type: application/json" \
      -d '{
        "sku": "PROD-NEW-001",
        "title": "Neues Produkt",
        "price": 39.99,
        "active": true
      }' \
      "https://ihre-instanz.warexo.com/api/v1/entity/product"

**Response (201 Created):**

.. code-block:: json

    {
      "id": 1050
    }


5. Entität aktualisieren (PATCH)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Aktualisiert eine bestehende Entität.

**Endpoint:** ``PATCH /api/v1/entity/{type}/{id}``

**Request Headers:**

.. code-block:: text

    Authorization: Bearer {token}
    X-Client-Id: {client_id}
    Content-Type: application/json

**Request Body:**

.. code-block:: json

    {
      "title": "Aktualisierter Titel",
      "price": 34.99
    }

**Hinweis:** Sie müssen nur die Felder angeben, die aktualisiert werden sollen.

**Beispiel (cURL):**

.. code-block:: bash

    curl -X PATCH \
      -H "Authorization: Bearer {token}" \
      -H "X-Client-Id: 123" \
      -H "Content-Type: application/json" \
      -d '{
        "title": "Aktualisierter Titel",
        "price": 34.99
      }' \
      "https://ihre-instanz.warexo.com/api/v1/entity/product/1050"

**Response (200 OK):**

.. code-block:: json

    {
      "id": 1050,
      "sku": "PROD-NEW-001",
      "title": "Aktualisierter Titel",
      "price": 34.99,
      "active": true,
      "updatedAt": "2026-02-09T14:30:00+00:00"
    }


6. Entität löschen (DELETE)
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Löscht eine Entität anhand ihrer ID.

**Endpoint:** ``DELETE /api/v1/entity/{type}/{id}``

**Request Headers:**

.. code-block:: text

    Authorization: Bearer {token}
    X-Client-Id: {client_id}

**Beispiel (cURL):**

.. code-block:: bash

    curl -X DELETE \
      -H "Authorization: Bearer {token}" \
      -H "X-Client-Id: 123" \
      "https://ihre-instanz.warexo.com/api/v1/entity/product/1050"

**Response (204 No Content):**

.. code-block:: text

    (Leerer Response-Body bei erfolgreichem Löschen)

Extrafelder
-------------------------------------

Die vorhandenen :doc:`Extrafelder </Daten-Im-Export/extrafelder>` können über die API wie normale Felder behandelt werden.
Sie können in der Feldauswahl, bei der Erstellung und Aktualisierung von Entitäten verwendet werden.
Der Bezeichner entspricht dem Wert "Feld" im Extrafeld.

Für eine Liste aller im System gepflegten Extrafelder nutzen Sie den folgenden Endpunkt:

**Endpoint:** ``POST /api/v1/searchentity/clientscheme``


Aktionen / Action Endpoints
-------------------------------------

Bestimmte vordefinierte Aktionen können über spezielle Endpunkte aufgerufen werden, z.B. um einen Auftrag zu bestätigen oder eine Rechnung zu stornieren.

**Endpoint Format:** ``POST /api/v1/_action/{action_name}``

Angebot bestätigen
~~~~~~~~~~~~~~~~~~~

**Endpoint:** ``POST /api/v1/_action/placeoffer``

**Body:**

.. code-block:: json

    {
      "id": 1234,
      "assignOfferNumber": true,
      "calculatePrices": true
    }

Parameter

.. list-table::
  :header-rows: 1

  * - Parameter
    - Beschreibung
  * - ``id``
    - ID des Angebots, das bestätigt werden soll
  * - ``assignOfferNumber``
    - Ob eine Angebotsnummer zugewiesen werden soll (Standard: false)
  * - ``calculatePrices``
    - Ob die Preise neu berechnet werden sollen (Standard: false)

Auftrag anlegen
~~~~~~~~~~~~~~~~~~~

**Endpoint:** ``POST /api/v1/_action/placeorder``

**Body:**

.. code-block:: json

    {
      "id": 1234,
      "salesChannel": 1234,
      "sendmails": true,
      "numberRange": "$123-{year}-ORD-{counter}",
      "noevents": true
    }

Parameter

.. list-table::
  :header-rows: 1

  * - Parameter
    - Beschreibung
  * - ``id``
    - ID des Angebots, das in einen Auftrag umgewandelt werden soll
  * - ``salesChannel``
    - ID des Vertriebskanals für den Auftrag (optional)
  * - ``sendmails``
    - Ob E-Mails versendet werden sollen (Standard: false)
  * - ``numberRange``
    - Nummernkreis für die Auftragsnummer (optional)
  * - ``noevents``
    - Ob keine Workflow Events ausgeführt werden sollen (Standard: false)


Spezielle Steuerungsfelder
---------------------------

Bei der Erstellung und Aktualisierung von Entitäten können spezielle Felder mit doppeltem Unterstrich als Präfix verwendet werden, um das Verhalten der API zu steuern.

__foreignKeys
~~~~~~~~~~~~~

Definiert, wie Fremdschlüssel-Relationen aufgelöst werden sollen. Standardmäßig werden Relationen über die ID aufgelöst, aber mit ``__foreignKeys`` können Sie alternative Felder angeben.

**Format:** Array von Objekten mit Zuordnungsschlüsseln

**Beispiel:**

.. code-block:: json

    {
      "__foreignKeys": [
        {"payment": "id"},
        {"shipping": "id"},
        {"customer": "customerNumber"}
      ],
      "customer": "KK-41",
      "payment": "9e257793-3fec-11e4-a1c5-4061862b83cf",
      "shipping": "9e260baa-3fec-11e4-a1c5-4061862b83cf"
    }

In diesem Beispiel:

- ``{"payment": "id"}`` - Die Zahlungsart wird nach dem Feld ``id`` gesucht
- ``{"customer": "customerNumber"}`` - Der Kunde wird nach dem Feld ``customerNumber`` statt nach ``id`` gesucht

__customPrimaryKey
~~~~~~~~~~~~~~~~~~

Definiert einen benutzerdefinierten Primärschlüssel für die Entität. Dies ermöglicht Idempotenz - bei wiederholten Anfragen mit demselben Schlüssel wird die existierende Entität aktualisiert statt eine neue zu erstellen.

**Verwendung:** Idempotency Key für sichere Wiederholungen von Anfragen

.. note::
   Dieses Feld ist **Pflicht** bei der Verwendung von speziellen Steuerungsfeldern

**Beispiel:**

.. code-block:: json

    {
      "__customPrimaryKey": "uniqNumber",
      "uniqNumber": "550e8400-e29b-41d4-a716-446655440000",
      "customer": "123",
      "items": [...]
    }

Wenn eine Entität mit demselben ``uniqNumber`` bereits existiert, wird diese aktualisiert statt eine neue zu erstellen.

__collectionBehavior
~~~~~~~~~~~~~~~~~~~~

Steuert das Verhalten bei der Aktualisierung von Collection-Feldern (Arrays von verwandten Entitäten).

**Format:** Assoziatives Objekt mit Collection-Feldnamen als Schlüssel

**Operatoren:**

- ``replace`` - Leert die Collection vor dem Hinzufügen neuer Elemente
- ``remove`` - Entfernt Elemente aus der Collection basierend auf ``assignmentKeys``

**Beispiel 1: Collection ersetzen**

.. code-block:: json

    {
      "__collectionBehavior": {
        "items": {
          "operator": "replace"
        }
      },
      "items": [
        {"quantity": 2, "product": "5a8b7cfc-6a4b-11e4-8574-4061862b83cf"}
      ]
    }

Die bestehenden Items werden gelöscht und durch die neuen ersetzt.

**Beispiel 2: Elemente entfernen**

.. code-block:: json

    {
      "__collectionBehavior": {
        "pictures": {
          "operator": "remove",
          "assignmentKeys": ["sort"]
        }
      },
      "pictures": [
        {"sort": 2}
      ]
    }

Entfernt alle Bilder mit ``sort = 2`` aus der Collection.

**Vollständiges Beispiel: Auftrag erstellen**

.. code-block:: json

    {
      "__foreignKeys": [
        {"customer": "id"},
        {"client": "id"},
        {"payment": "id"},
        {"shipping": "id"},
        {"language": "id"},
        {"billingCountry": "id"}
      ],
      "__customPrimaryKey": "uniqNumber",
      "__collectionBehavior": {
        "items": {
          "operator": "replace"
        }
      },
      "customer": "840ae227-335d-11e4-a1c5-4061862b83cf",
      "uniqNumber": "550e8400-e29b-41d4-a716-446655440000",
      "billingFirstName": "Max",
      "billingLastName": "Mustermann",
      "billingCompany": "Musterfirma GmbH",
      "billingStreet": "Musterstraße 1",
      "billingZip": "12345",
      "billingCity": "Musterstadt",
      "billingCountry": "de",
      "billingEMail": "max@example.com",
      "created": "2026-02-09 12:45:00",
      "updated": "2026-02-09 12:45:00",
      "client": "840ae227-335d-11e4-a1c5-4061862b83cf",
      "payment": "9e257793-3fec-11e4-a1c5-4061862b83cf",
      "shipping": "9e260baa-3fec-11e4-a1c5-4061862b83cf",
      "language": "582d3ccd-a443-11e3-893c-4061862b83cf",
      "currency": "EUR",
      "items": [
        {
          "quantity": 2,
          "product": "5a8b7cfc-6a4b-11e4-8574-4061862b83cf",
          "productTitle": "Lagerartikel",
          "__foreignKeys": [{"product": "id"}]
        }
      ]
    }


Relationen und verschachtelte Felder
-------------------------------------

Relationen in Feldauswahl
~~~~~~~~~~~~~~~~~~~~~~~~~

Sie können verwandte Entitäten direkt mit abfragen, indem Sie Punkt-Notation verwenden:

**Beispiel:**

.. code-block:: text

    GET /api/v1/entity/product?fields[]=id&fields[]=sku&fields[]=categories.title&fields[]=vendor.name

Dies lädt für jedes Produkt auch die Titel der zugeordneten Kategorien und den Namen des Lieferanten.


Relationstypen
~~~~~~~~~~~~~~

Die Warexo API unterstützt folgende Relationstypen:

- **ManyToOne (→)**: Viele Entitäten verweisen auf eine Entität (z.B. viele Produkte → ein Lieferant)
- **OneToMany (←)**: Eine Entität hat viele verwandte Entitäten (z.B. ein Lieferant ← viele Produkte)
- **ManyToMany (↔)**: Viele zu viele Beziehung (z.B. Produkte ↔ Kategorien)
- **OneToOne (⇄)**: Eins zu eins Beziehung


Beispiel: Komplexe verschachtelte Abfrage
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Request:**

.. code-block:: bash

    curl -X POST \
      -H "Authorization: Bearer {token}" \
      -H "X-Client-Id: 123" \
      -H "Content-Type: application/json" \
      -d '{
        "fields": [
          "sku",
          "title",
          "price",
          "categories.title",
          "vendorproducts.vendor.title",
          "vendorproducts.purchaseprice"
        ],
        "limit": 5,
        "filter": [
          {
            "field": "active",
            "operator": "EQ",
            "value": true
          }
        ]
      }' \
      "https://ihre-instanz.warexo.com/api/v1/searchentity/product"

**Response:**

.. code-block:: json

    [
      {
        "sku": "PROD-001",
        "title": "Beispielprodukt",
        "price": 29.99,
        "categories": [
          {"title": "Elektronik"},
          {"title": "Gadgets"}
        ],
        "vendorproducts": [
          {
            "vendor": {"title": "Lieferant GmbH"},
            "purchaseprice": 15.50
          }
        ]
      }
    ]


Fehlerbehandlung
----------------

HTTP-Statuscodes
~~~~~~~~~~~~~~~~

.. list-table::
    :header-rows: 1

    * - Code
      - Bedeutung
      - Beschreibung
    * - 200
      - OK
      - Anfrage erfolgreich
    * - 201
      - Created
      - Entität erfolgreich erstellt
    * - 204
      - No Content
      - Erfolgreich gelöscht, kein Inhalt
    * - 400
      - Bad Request
      - Ungültige Anfrage oder Parameter
    * - 401
      - Unauthorized
      - Fehlende oder ungültige Authentifizierung
    * - 403
      - Forbidden
      - Keine Berechtigung für diese Ressource
    * - 404
      - Not Found
      - Entität oder Endpoint nicht gefunden
    * - 422
      - Unprocessable Entity
      - Validierungsfehler
    * - 500
      - Internal Server Error
      - Serverfehler


Fehler-Response-Format
~~~~~~~~~~~~~~~~~~~~~~

Fehlerantworten enthalten in der Regel folgendes Format:

.. code-block:: json

    {
      "error": "Fehlerbeschreibung",
      "message": "Detaillierte Fehlermeldung",
      "code": 400
    }

**Beispiel (401 Unauthorized):**

.. code-block:: json

    {
      "error": "Unauthorized",
      "message": "Invalid or expired token"
    }

**Beispiel (422 Validierungsfehler):**

.. code-block:: json

    {
      "error": "Validation failed",
      "violations": [
        {
          "field": "sku",
          "message": "SKU ist bereits vergeben"
        },
        {
          "field": "price",
          "message": "Preis muss größer als 0 sein"
        }
      ]
    }


Best Practices
--------------

1. Token-Management
~~~~~~~~~~~~~~~~~~~

- Speichern Sie Access- und Refresh-Token sicher
- Implementieren Sie automatisches Token-Refresh bei 401-Responses
- Verwenden Sie HTTPS für alle API-Anfragen


2. Paginierung
~~~~~~~~~~~~~~

- Verwenden Sie immer ``limit`` und ``offset`` für große Datenmengen
- Empfohlene Seitengröße: 10-100 Einträge
- Sehr große Limits (>1000) können zu Performance-Problemen führen


3. Feldauswahl
~~~~~~~~~~~~~~

- Laden Sie nur die Felder, die Sie wirklich benötigen
- Verwenden Sie ``fields[]``-Parameter, um die Datenmenge zu reduzieren
- Reduziert Bandwidth und verbessert Performance


4. Filter-Optimierung
~~~~~~~~~~~~~~~~~~~~~

- Kombinieren Sie Filter mit UND-Verknüpfung für präzisere Ergebnisse
- Verwenden Sie Indizes: Filtern Sie bevorzugt nach ID, SKU oder anderen indizierten Feldern
- Vermeiden Sie zu viele ODER-Verknüpfungen


5. Fehlerbehandlung
~~~~~~~~~~~~~~~~~~~

- Implementieren Sie Retry-Logik für temporäre Fehler (500, 503)
- Loggen Sie Fehler mit Request-Details für Debugging
- Validieren Sie Daten vor dem Senden


6. Rate Limiting
~~~~~~~~~~~~~~~~

- Beachten Sie eventuelle Rate Limits Ihrer Instanz
- Implementieren Sie exponentielles Backoff bei wiederholten Fehlern
- Verwenden Sie Bulk-Operationen für mehrere Entitäten


Erweiterte Funktionen
---------------------

Grid-API (zukünftig)
~~~~~~~~~~~~~~~~~~~~

Die Grid-API ermöglicht den Zugriff auf vordefinierte Listen-Ansichten:

**Endpoint:** ``GET /api/v1/grid/{id}/{page}``

Diese Funktion bietet paginierte Listen mit Sortierung und vordefinierten Such-Feldern.


Form-Rendering (zukünftig)
~~~~~~~~~~~~~~~~~~~~~~~~~~

**Endpoint:** ``GET /api/v1/renderform/{form}/{entity}/{grid}``

Rendert deklarative ERP-Formulare als interaktive Eingabemasken.


Beispiel-Workflows
-------------------

Workflow 1: Produkt suchen und aktualisieren
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

    # 1. Login
    curl -X POST \
      -H "Content-Type: application/json" \
      -d '{"username":"user@example.com","password":"pass123"}' \
      "https://ihre-instanz.warexo.com/api/v1/login"

    # Response: {"token": "...", "refresh_token": "..."}

    # 2. Produkt suchen
    curl -X POST \
      -H "Authorization: Bearer {token}" \
      -H "X-Client-Id: 123" \
      -H "Content-Type: application/json" \
      -d '{
        "fields": ["id", "sku", "title", "price"],
        "filter": [{"field": "sku", "operator": "EQ", "value": "PROD-001"}]
      }' \
      "https://ihre-instanz.warexo.com/api/v1/searchentity/product"

    # Response: [{"id": 1001, "sku": "PROD-001", "title": "...", "price": 29.99}]

    # 3. Preis aktualisieren
    curl -X PATCH \
      -H "Authorization: Bearer {token}" \
      -H "X-Client-Id: 123" \
      -H "Content-Type: application/json" \
      -d '{"price": 34.99}' \
      "https://ihre-instanz.warexo.com/api/v1/entity/product/1001"


Workflow 2: Bulk-Produkterstellung
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

    # Login (Token erhalten)

    # Mehrere Produkte auf einmal erstellen
    curl -X POST \
      -H "Authorization: Bearer {token}" \
      -H "X-Client-Id: 123" \
      -H "Content-Type: application/json" \
      -d '[
        {"sku": "BULK-001", "title": "Produkt 1", "price": 19.99},
        {"sku": "BULK-002", "title": "Produkt 2", "price": 24.99},
        {"sku": "BULK-003", "title": "Produkt 3", "price": 29.99}
      ]' \
      "https://ihre-instanz.warexo.com/api/v1/entity/product"


Workflow 3: Filtern mit mehreren Bedingungen
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

    # Produkte finden, die:
    # - Aktiv sind
    # - Preis zwischen 20 und 100 Euro
    # - SKU beginnt mit "PROD"
    # - Lieferant ist "Lieferant GmbH"

    curl -X POST \
      -H "Authorization: Bearer {token}" \
      -H "X-Client-Id: 123" \
      -H "Content-Type: application/json" \
      -d '{
        "fields": ["id", "sku", "title", "price", "vendorproducts.vendor.title"],
        "filter": [
          {"field": "active", "operator": "EQ", "value": true},
          {"field": "price", "operator": "GREQ", "value": "20"},
          {"field": "price", "operator": "LTEQ", "value": "100", "conjunction": "AND"},
          {"field": "sku", "operator": "STARTSWITH", "value": "PROD", "conjunction": "AND"},
          {"field": "vendorproducts.vendor.title", "operator": "EQ", "value": "Lieferant GmbH", "conjunction": "AND"}
        ],
        "limit": 50
      }' \
      "https://ihre-instanz.warexo.com/api/v1/searchentity/product"


Support und weitere Ressourcen
-------------------------------

- **Entity-Metadaten:** https://warexo.github.io/entity-docs/data/entities.json
- **API Testing Tool:** Verwenden Sie das Warexo API Playground für interaktive Tests https://github.com/warexo/api-playground
- **Support:** Kontaktieren Sie Ihren Warexo-Administrator für Instanz-spezifische Fragen
