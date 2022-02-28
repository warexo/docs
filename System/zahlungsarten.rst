Zahlungsarten
##################

Neue Zahlungsarten legen Sie unter :menuselection:`Einstellungen --> Mandant --> Zahlungsarten --> Neue Zahlungsart` an.

Einstellungen
~~~~~~~~~~~~~~~

Aktiv
    Nur aktive Zahlungsarten werden Kunden angezeigt

Handler
    Dieses Feld legt die Verknüpfung zwischen einer Zahlungsart und einer Zahlungsschnittstelle fest. Dies könnte zum
    Beispiel :guilabel:`paypal`, :guilabel:`prepayment` oder :guilabel:`cashondelivery` sein.
    Informationen zum jeweiligen Handler finden Sie in der Dokumentation zu den Plugineinstellungen der Zahlungsschnittstelle.

Ident.
    Eindeutige Identifikation, verknüpft die Zahlungsart zusätzlich mit den Vertriebskanälen. Bei einer Webshop Zahlungsart
    tragen Sie hier die ID der Zahlungsart im Webshop ein.

.. Hint:: Wenn eine Webshop Bestellung importiert wird und es existiert keine Zahlungsart mit einer passenden Ident. wird
    automatisch eine neue Zahlungsart erzeugt

Sortierung
    Versandarten werden aufsteigend sortiert angezeigt

Zuordnungsschlüssel
    Kann verwendet werden um Zahlungsarten beim Import aus Fremdsystemen zuzuweisen

Kreditoren-Zahlungsart
    Zahlungsart ist nur für Kreditorenrechnungen verfügbar

Ist Verrechnung
    Wenn aktiviert wird bei Verbindlichkeiten die Zahlung zwischen Kreditoren und Debitorenkonto ausgeglichen

Skonto % / Tage
    Standard Skonto Einstellungen

Zahlungsziel
    Zahlungsziel in Tagen für diese Zahlungsart

Zahlungsgebühr für Händler (Fest/%)
    ...

Stornogebühr für Händler (Fest/%)
    ...

Ausgeschlossene Mandanten
    Nicht verfügbar in diesen Mandanten

Vertriebskanäle
    Wird in diesen Vertriebskanälen verwendet (wenn verfügbar, je nach Kanal)

Kundengruppen
    Für diese Kundengruppen verfügbar bzw. ausgeschlossen

Länder
    Für diese Länder verfügbar bzw. ausgeschlossen

Kategorien
    Für diese Kategorien verfügbar bzw. ausgeschlossen

Ausschließliche Kategorien
    Nur verfügbar wenn ausschließlich Artikel aus diesen Kategorien gewählt wurden

Produkte
    Für diese Produkte verfügbar bzw. ausgeschlossen

Ausschließliche Produkte
    Nur verfügbar wenn ausschließlich diese Artikel gewählt wurden

Payment processing link
    ...

Langbeschreibung
    Beschreibung der Zahlungsart für Kunden in den Vertriebskanälen (wenn verfügbar)

Felder
    Eine Zahlungsart kann je nach Handler verschiedene Eingabefelder benötigen (z.B. Bankdaten bei SEPA Einzug)
    Die Felder können frei definiert werden.
