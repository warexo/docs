Preise / Konditionen
^^^^^^^^^^^^^^^^^^^^^

Preise
~~~~~~~~~~

Preis
    Brutto VK Preis (analog zu Stammdaten)

Einkaufspreis
    Ihr gemittelter EKP für spätere statistische Auswertungen

UVP
    Unverbindliche Preisempfehlung des Herstellers

.. sidebar:: Twig Kontext
    :class: floating

    .. list-table::
       :widths: 50 50
       :header-rows: 1

       * - Variable
         - Beschreibung
       * - appservice
         - AppService
       * - em
         - EntityManager
       * - product
         - Referenz zum Produkt
       * - entity
         - Analog zu `product`

Preisformel
    Der Preis des Artikels kann nach einer Preisformel über einen :doc:`Twig Ausdruck </Dokumente/twig>` dynamisch ermittelt werden.
    Wenn eine Preisformel gesetzt wurde wird der Preis nach jedem Speichern automatisch nach der Formel neu berechnet.

    .. admonition:: Beispiel

       VK Preis soll EK-Preis plus 20% sein

       `{{product.purchasePrice * 1.2}}`

Preis nach den Materialpreisen berechnen
    Berechnet den VK Preis automatisch aus den Einzelpreisen der Materialien aus dem dieser Artikel besteht

MwSt.
    Der zu verwendende Mehrwertsteuersatz für diesen Artikel

Alle neg. Nachlässe ignorieren
    Ignoriert im Webshop alle negativen Nachlässe (Rabatte etc.) für diesen Artikel

Staffelpreise
    Die Artikel können über beliebige Mengenstaffelpreise verfügen,
    je nach Einstellung und Export System werden diese entweder an die Varianten vererbt oder nicht.

    Geben Sie einfach die gewünschten einschließlichen Mengen von bis an, welche Art Rabatt gewährt werden soll –
    prozentual oder absolut und den Zielpreis oder die Prozent die abgezogen werden sollen.

    Die Preise lassen sich wahlweise auch nur für bestimmte Kundengruppen, Mandanten oder Vertriebskanäle definieren.

Preise
    Der Grundpreis des Artikels kann anhand von Kundengruppe, Mandant oder Vertriebskanal angepasst werden. Sobald
    ein spezieller Preis gilt wird der Wert im Feld Preis damit überschrieben.

Landsteuer
    Erlaubt es für bestimmte Länder einen anderen MwSt. Satz für diesen Artikel zu verwenden

Preisübersicht
~~~~~~~~~~~~~~~

Hier finden Sie einen schnellen Überblick über alle berechneten Preise für die unterschiedlichen Einstellungen.

Lieferanten
~~~~~~~~~~~~~~~

Ein Artikel kann von beliebig vielen Lieferanten bereitgestellt werden,
wenn Sie die Warehouse Funktionen nutzen wollen dann sollten Sie hier die jeweiligen Lieferanten hinterlegen.

Preis
    Ihr Einkaufspreis des Artikels beim Lieferanten

Mindestabnahme
    Wie viele Stück dieses Artikels bestellt werden müssen

Rundungsmenge
    Wenn eine Rundungsmenge eingeben wird muss dieser Artikel in dieser Schrittgröße bei der Lieferantenbestellung
    gewählt werden.

    .. admonition:: Beispiel

       Bei Rundungsmenge 5 kann der Artikel nur in den Mengen 5, 10, 15, 20 etc. bestellt werden

Mengeneinheit (Einkauf)
    Die Mengeneinheit in der Sie diesen Artikel beim Lieferanten bestellen z.B. :guilabel:`Karton`

Mengeneinheit Einkauf/Verkauf Formel
    Sollten Sie den Artikel in einer anderen Menge in das Lager buchen als Sie in beim Lieferanten einkaufen
    können Sie hier die Umrechnungsmenge eingeben.

    .. admonition:: Beispiel

       Sie kaufen beim Lieferanten einen Karton Wein mit 6 Flaschen ein, Sie lagern und verkaufen jedoch einzelne Flaschen.
       Geben Sie in der `Mengeneinheit` :guilabel:`Karton` ein und in `Mengeneinheit Einkauf/Verkauf Formel` :guilabel:`6`.
       Sobald eine Lieferantenbestellung des Lieferanten eingebucht wird werden 6 Flaschen beim Scannen des Artikels eingebucht.

Abnahmeintervall
    In welchem Zeitraum kann der Artikel nachbestellt werden

Lieferzeit
    Ungefähre Lieferzeit des Artikels wenn er beim Lieferanten bestellt wird

Lieferanten Lagerbestand
    Sollte Ihnen der Lieferant eine Liste mit seinen eigenen tagaktuellen Lagerbeständen liefern
    können so können diese Daten verwendet werden um die Bestellungen zu optimieren.
    Bei Bedarf kann dieses Feld hier manuell gepflegt werden (nicht empfohlen).

Lieferanten Artikelnummer
    Die Artikelnummer unter der dieser Artikel beim Lieferanten bestellt werden soll

Lieferanten Titel
    Titel des Artikels beim Lieferanten

Kommentar
    Interner Kommentar zum Lieferantenartikel

Dropshipping Artikel
    Der Artikel wird bei Bestellung direkt vom Lieferanten an den Endkunden bestellt,
    hierzu muss der Lieferant Dropshipping unterstützen.

Ondemand
    Für On-Demand Artikel erscheint in den Aufträgen automatisch die Möglichkeit diese beim Lieferanten zu bestellen.
    Über verschiedene Workflows lassen sich Aufträge mit On-Demand Artikeln einfach abwickeln.

Lief. Bestand zu eigenem Bestand hinzufügen
    Auf Wunsch kann der vom Lieferanten gemeldete Bestand automatisch zu Ihrem Lagerbestand hinzu addiert werden.

Hauptlieferant
    Wenn aktiviert wird der EKP des Artikels automatisch auf den EKP bei diesem Lieferanten gesetzt

Service / Reparatur
~~~~~~~~~~~~~~~~~~~

Diese Funktion ist experimentell, bitte derzeit nicht verwenden.

Lizenzverwaltung
~~~~~~~~~~~~~~~~~~

Lizenzverwaltung aktiv
    Aktiviert die Softwarelizenzverwaltung für diesen Artikel

Lizenz gültig
    Wie lang die erworbene Lizenz gültig ist in Tagen

Supportdauer
    Wie lang Updates und Support für diesen Artikel angeboten werden in Tagen

Lizenzupdate Preis
    Wieviel Prozent des ursprünglichen Preises für eine Supportverlängerung fällig werden

