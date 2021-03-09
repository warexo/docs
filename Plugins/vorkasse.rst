Vorkasse
########
:date: 2017-10-10 15:50
:author: admin
:category: Plugins
:slug: vorkasse
:status: published

Das Vorkasse Plugin sorgt dafür dass Kunden, die per Vorkasse bezahlen, automatisch daran erinnert werden ihre Zahlung zu leisten. Sollte der Kunde nach einem bestimmten Zeitraum nicht bezahlt haben wird die Bestellung automatisch storniert und die reservierte Ware wird wieder freigegeben. Der Payment Handler lautet **prepayment**

Cronjob für Zahlungserinnerungen
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Legen Sie den hier angezeigten Befehl als Cronjob auf Ihrem Server an. Wir empfehlen die Ausführung **mindestens 2 mal täglich** oder öfter. Wenn der Cron nicht mindestens 2 mal am Tag läuft kann es zu fehlenden Erinnerungen kommen.

Verwendungszweck (Variables Feld => Bestellung)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Dieses Feld bestimmt welchen Verwendungszweck der Kunde für seine Zahlung verwenden sollte, diese Einstellung wird auch vom Bankabgleich (HBCI oder MT940) verwendet.

Wie viele Tage nach der Bestelleingang die Zahlungserinnerung versenden
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Bestimmt nach jeweils wie vielen Tagen eine Zahlungserinnerung per E-Mail an den Kunden gesendet wird. Der Inhalt dieser E-Mail wird über den zugehörigen Textbaustein bestimmt.

Wie viel Mal die Zahlungserinnerungen versenden
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Bestimmt wie oft die Zahlungserinnerung gesendet wird bevor die Bestellung automatisch storniert wird.

Zahlungserinnerungen nur ab angegebenem Datum versenden
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Sollten Sie alte Bestellungen in Warexo importieren können Sie hier festlegen ab welchem frühesten Bestelldatum Bestellungen berücksichtigt werden sollen, wenn Erinnerungen versendet werden.


