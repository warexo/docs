Versandarten
##################

Neue Versandarten legen Sie unter :menuselection:`Einstellungen --> Mandant --> Versandarten --> Neue Versandart` an.

Einstellungen
~~~~~~~~~~~~~~~

Aktiv
    Nur aktive Versandarten werden Kunden angezeigt

Handler
    Dieses Feld legt die Verknüpfung zwischen einer Versandart und einer Versandschnittstelle fest. Dies könnte zum
    Beispiel :guilabel:`intraship`, :guilabel:`gls` oder :guilabel:`hermes` sein. Informationen zum jeweiligen Handler
    finden Sie in der Dokumentation zu den Plugineinstellungen der Versandschnittstelle.

Ident.
    Eindeutige Identifikation, verknüpft die Versandart zusätzlich mit den Vertriebskanälen. Bei einer Webshop Versandart
    tragen Sie hier die ID der Versandart im Webshop ein.

.. Hint:: Wenn eine Webshop Bestellung importiert wird und es existiert keine Versandart mit einer passenden Ident. wird
    automatisch eine neue Versandart erzeugt

Kosten
    Versandkosten

Sortierung
    Versandarten werden aufsteigend sortiert angezeigt

Lieferzeit
    Gibt die Lieferzeit der Versandart an

Min./Max. Einkaufsmenge
    Versandart ist nur verfügbar wenn die Gesamtmenge des Auftrags im festgelegten Bereich liegt

Min./Max. Gewicht
    Versandart ist nur verfügbar wenn das Gesamtgewicht des Auftrags im festgelegten Bereich liegt

Min./Max. Größe
    Versandart ist nur verfügbar wenn die Gesamtfläche (cm2) des Auftrags im festgelegten Bereich liegt

Min./Max. Breite/Höhe/Länge
    Versandart ist nur verfügbar wenn die Gesamtgrößen des Auftrags im festgelegten Bereich liegen

Vertriebskanäle
    Vertriebskanäle in die diese Versandart exportiert wird

Zahlungsarten
    Verfügbar / Ausgeschlossen für diese Zahlungsarten

Länder
    Verfügbar / Ausgeschlossen für diese Länder

Kundengruppen
    Verfügbar / Ausgeschlossen für diese Kundengruppen

Kategorien
    Verfügbar / Ausgeschlossen für diese Produktkategorien

Produkte
    Verfügbar / Ausgeschlossen für diese Produkte

.. sidebar:: Twig Kontext
    :class: floating

    .. list-table::
       :widths: 50 50
       :header-rows: 1

       * - Variable
         - Beschreibung
       * - appservice
         - AppService Instanz
       * - offer
         - Angebot
       * - shipping
         - Versandart
       * - salesChannel
         - Vertriebskanal

Benutzerdefinierte Bedingung
    Bestimmt Verfügbarkeit dynamisch per Twig

Versandkosten
    Erlaubt es Ihnen beliebig viele Versandkostenregeln zu definieren. Sobald eine Versandkostenregel gültig ist
    wird dieser Preis statt dem Preis der Versandart verwendet.

Versandpakete
    ...