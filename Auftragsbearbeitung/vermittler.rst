Vermittler
##########
:date: 2019-12-03 15:47
:author: alex
:category: Auftragsbearbeitung
:slug: vermittler
:status: published

Warexo erlaubt es Ihnen Aufträge die von Dritten vermittelt wurden einfach zu überwachen und, wenn gewünscht, eine selbst definierte Provision auszuzahlen.

Vermittler definieren
---------------------

Ein Vermittler wird in Warexo unter einem Kundenkonto geführt, legen Sie also zunächst für jeden gewünschten Vermittler einen Kundendatensatz unter "Kunden" => "Kundenliste" => "Neuer Kunde" an. Geben Sie die entsprechenden Stammdaten des Vermittlers ein.

Provisionsmodell definieren
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Tragen Sie im Kundendatensatz im Bereich "Konditionen", wenn benötigt, folgende Felder ein.

Vermittlerprovision %
^^^^^^^^^^^^^^^^^^^^^

Eine prozentuale Vermittlerprovision anhand des Brutto Auftragswertes die als Provision ausgezahlt wird.

Fix. Vermittlerprovision
^^^^^^^^^^^^^^^^^^^^^^^^

Eine absolute Vermittlerprovision in Euro. Diese wird auf die prozentuale Provision addiert falls diese zusätzlich eingetragen wird.

Vermittlerprovision Formel
^^^^^^^^^^^^^^^^^^^^^^^^^^

Sollten Sie die Vermittlerprovision dynamisch berechnen wollen können Sie hier einen `Twig Ausdruck <https://www.warexo.de/handbuch/twig/>`__ eintragen. Der `Twig Ausdruck <https://www.warexo.de/handbuch/twig/>`__ überschreibt die prozentuale und fixe Provision vollständig. Folgende Variablen sind verfügbar:

-  **entity / order**
   Das Bestellungs (Order) Objekt
-  **offer**
   Das Angebots (Offer) Objekt
-  **agent**
   Das Kunden (Customer) Objekt des Vermittlers
-  **appservice**
   Eine Referenz auf das AppService Objekt

Vermittler URL-Parameter
^^^^^^^^^^^^^^^^^^^^^^^^

Wenn Sie dem Vermittler eine sog. Affiliate URL zuweisen möchten geben Sie hier den vollständigen Ausdruck für seinen Parameter ein.

**Beispiel:**

.. code:: wp-block-preformatted

   affiliate_id=25

Weitere Informationen finden Sie weiter unten unter "Automatische Zuweisung via Webshop"

Vermittler zuweisen
-------------------

Vermittler können automatisch oder manuell zugewiesen werden, die einfachste Möglichkeit ist die manuelle Zuweisung von Vermittlern zu Angeboten.

Manuelle Zuweisung
~~~~~~~~~~~~~~~~~~

Öffnen Sie das gewünschte Angebot über "Auftragsverwaltung" => "Angebote". Wählen Sie im Bereich "Zusatz. Info" => "Vermittler" den gewünschten Vermittler. Sie können nach dem Namen des Kundensatzes oder der Kundennummer suchen. Speichern Sie im Anschluss das Angebot.

Automatische Zuweisung via Webshop
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Der Webshop Connector erlaubt eine automatische Zuweisung von Aufträgen zu einem Vermittler wenn der vermittelte Kunde über einen sog. Affiliate Link in den Shop gelenkt geleitet wurde. Geben Sie hierzu zunächst wie oben beschrieben den "Vermittler URL Parameter" beim Kundendatensatz des Vermittlers ein.

Webshop Connector konfigurieren
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Damit der Parameter funktionieren kann muss dieser in den Webshop Connector Einstellungen aktiviert werden. Tragen Sie dazu im Webshop Admin Interface in den Connector Einstellungen unter "Vermittler URL Parameter" die erlaubten Namen ein. Für das oben aufgeführte Beispiel:

.. code:: wp-block-preformatted

   affiliate_id=25

Geben Sie in den Einstellungen

.. code:: wp-block-preformatted

   affiliate_id

an um den Parameter zu aktivieren. Sie können beliebig viele Parameter aktivieren. Geben Sie jeweils nur einen Parameter pro Zeile an.

Affiliate Link an Vermittler mitteilen
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Für das oben genannte Beispiel geben Sie folgenden Link an Ihren Vermittler weiter:

.. code:: wp-block-preformatted

   https://www.meinshop.de/?affiliate_id=25

Der Webshop Connector speichert den zugehörigen Vermittler sobald der Kunde über einen Link mit dem entsprechenden Parameter den Shop besucht. Tätigt der Kunde innerhalb von 24 Stunden einen Kauf wird der Vermittler automatisch dem Angebot in Warexo zugewiesen.

Affiliate Link prüfen
^^^^^^^^^^^^^^^^^^^^^

Rufen Sie Ihren Webshop über den Affiliate Link auf und tätigen Sie eine Bestellung. Nachdem die Bestellung in Warexo importiert wurde sollte der Vermittler automatisch dem Angebot zugewiesen worden sein (analog zur manuellen Zuweisung).

Automatische Zuweisung via Workflows
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Viele Auftrags und Angebotsrelevanten Events erlauben es die Workflow Aktion "Vermittler zuweisen" auszuführen. Nutzen Sie diese Aktion in Verbindung mit dem Workflow System um Vermittler anhand von beliebigen Kriterien zuzuweisen.

Vermittler Provisionen
~~~~~~~~~~~~~~~~~~~~~~

Alle noch offenen oder bereits ausgezahlten Vermittler Provisionen können über "Kreditorenverwaltung" => "Provisionen" => "Vermittler Provisionen" eingesehen werden. Über diese Übersicht können Sie für einzelne oder mehrere offene Provisionen Verbindlichkeiten generieren.

Verbindlichkeiten erstellen / Provisionen auszahlen
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Verwenden Sie die Schaltfläche "Verbindlichkeit erstellen" in der Liste der Provisionen um für eine einzelne Provision eine Verbindlichkeit zu erzeugen.

Nutzen Sie die Filter und Sortierfunktionen der Liste um die für den gewünschten Zeitraum etc. Provisionen zu filtern. Wählen Sie nun alle Reihen aus und klicken Sie auf "Ausgewählte Zeilen" => "Verbindlichkeiten erstellen" um gesammtelte Verbindlichkeiten je Vermittler zu erstellen.

Nach erstellen der Verbindlichkeit wechselt der Status der Provision automatisch auf "Offene Verbindlichkeit". Wenn die zugehörige Verbindlichkeit als bezahlt markiert wird dann wechselt der Status auf "ausgezahlt".


