Rechnungen / Mahnwesen
######################
:date: 2017-10-23 14:44
:author: admin
:category: Plugins
:slug: rechnungen-mahnwesen
:status: published

Warexo bietet ein integriertes Mahnwesen für Aufträge die per Rechnung bezahlt werden. Das Mahnwesen bietet bis zu 3 Mahnstufen. Dafür müssen Sie das Plugin "Rechnung" konfigurieren (Systemverwaltung->Schnittstellen->Plugins).

Zahlungsfrist bei Rechnungen
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Die Zahlungsfrist in Tagen ab Generierung der Rechnung bevor eine Mahnung erstellt wird

Alt. Zahlungsfrist für Zahlungsart 'Rechnung 30 Tage'
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Für die Zahlungsart Rechnung 30 Tage kann hier eine alternative Zahlungsfrist definiert werden

Zahlungsfrist bei zweiter Mahnung
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Die Zahlungsfrist nach der ersten Mahnung bis die zweite Mahnung generiert wird.

Zahlungsfrist bei dritter Mahnung
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Die Zahlungsfrist nach der zweiten Mahnung bis die dritte Mahnung generiert wird.

Mahnungen versenden bei Zahlungsverzug über x Kalendertage
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Wie viele Tage nach dem erreichen der Zahlungsfrist die Mahnung erstellt und versendet werden soll.

Mahngebühren
^^^^^^^^^^^^

Die Mahngebühren für die einzelnen Mahnstufen die aufgeschlagen werden sollen.

Mahnungen nur ab angegebenem Datum versenden
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Wenn Sie Alt-Aufträge importieren können Sie hier festlegen ab welchem Auftragsdatum das Mahnwesen aktiviert werden soll.

Cronjob anlegen
~~~~~~~~~~~~~~~

Legen Sie einen Cronjob an der den unter "Cronjob für Zahlungserinnerungen" angezeigten Befehl mindestens einmal täglich ausführt. Wenn dieser Cronjob nicht angelegt ist werden keine Mahnungen versendet.

Workflows anlegen
~~~~~~~~~~~~~~~~~

Ereignis "Erste Mahnung versenden"

Ereignis "Zweite Mahnung versenden"

Ereignis "Dritte Mahnung versenden"

Ereignis "Inkasso"


