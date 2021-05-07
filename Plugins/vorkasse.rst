Vorkasse
########

Das Vorkasse Plugin sorgt dafür dass Kunden, die per Vorkasse bezahlen, automatisch daran erinnert werden ihre Zahlung zu leisten.
Sollte der Kunde nach einem bestimmten Zeitraum nicht bezahlt haben wird die Bestellung automatisch storniert und die
reservierte Ware wird wieder freigegeben. Der Payment Handler lautet **prepayment**

Plugin Einstellungen
~~~~~~~~~~~~~~~~~~~~~~

.. sidebar:: Twig Kontext
    :class: floating

    .. list-table::
       :widths: 50 50
       :header-rows: 1

       * - Variable
         - Beschreibung
       * - appservice
         - AppService
       * - order
         - Referenz zur Bestellung

Verwendungszweck (Variables Feld => Bestellung)
    Dieses Feld bestimmt welchen Verwendungszweck der Kunde für seine Zahlung verwenden sollte,
    diese Einstellung wird auch vom Bankabgleich (HBCI oder MT940) verwendet.
    Sollte per Twig Anweisung gefüllt werden z.B. ``{{ order.orderNumber }}``

Wie viele Tage nach der Bestelleingang die Zahlungserinnerung versenden
    Bestimmt nach jeweils wie vielen Tagen eine Zahlungserinnerung per E-Mail an den Kunden gesendet wird.
    Der Inhalt dieser E-Mail wird über den zugehörigen Textbaustein bestimmt.

Wie viel Mal die Zahlungserinnerungen versenden
    Bestimmt wie oft die Zahlungserinnerung gesendet wird bevor die Bestellung automatisch storniert wird.

Zahlungserinnerungen nur ab angegebenem Datum versenden
    Sollten Sie alte Bestellungen in Warexo importieren können Sie hier festlegen ab welchem frühesten Bestelldatum
    Bestellungen berücksichtigt werden sollen, wenn Erinnerungen versendet werden.

.. sidebar:: Twig Kontext
    :class: floating

    .. list-table::
       :widths: 50 50
       :header-rows: 1

       * - Variable
         - Beschreibung
       * - appservice
         - AppService
       * - order
         - Referenz zur Bestellung

Benutzerdef. Bedingung
    Benutzerdefinierte Twig Bedingung ob eine Erinnerung für die jeweilige Bestellung versendet werden soll

Cronjob
~~~~~~~~

Legen Sie den unter `Cronjob für Zahlungserinnerungen` angezeigten Befehl als Cronjob auf Ihrem Server an. Wir empfehlen die Ausführung
**mindestens 2 mal täglich** oder öfter. Wenn der Cron nicht mindestens 2 mal am Tag läuft kann es zu fehlenden Erinnerungen kommen.

Zahlungsart Einstellungen
~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. Hint:: Der :doc:`Handler </System/zahlungsarten>` lautet **prepayment**

Folgende Einstellungen können für die :doc:`Zahlungsart </System/zahlungsarten>` getroffen werden.

*Dieses Plugin hat keine zusätzlichen Zahlungsart Einstellungen*