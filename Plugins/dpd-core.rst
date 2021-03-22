DPD
###
:date: 2017-10-10 17:14
:author: admin
:category: Plugins
:slug: dpd-core
:status: published

[alert type="error"]Bitte beachten Sie dass Warexo den **DPD Core Webservice** und den **DPD Cloud Webservice** unterstützt. Für die Nutzung des DPD Core Webservice müssen Sie MyDPD Pro Kunde sein. Kunden von MyDPD Business können diese Schnittstelle nicht verwenden.

Der DPD Core Webservice erlaubt es Ihnen Paketlabels direkt aus Warexo heraus zu erstellen. Die benötigten Zugangsdaten erhalten Sie von DPD direkt unter diesem Link https://esolutions.dpd.com/entwickler/dpd-cloud-webservice.aspx?allowcloud=true oder über Ihr jeweiliges DPD Depot. Der Shipping Handler lautet **dpd**

Delis ID / Passwort
^^^^^^^^^^^^^^^^^^^

Sie erhalten diese Daten von DPD direkt oder über den oben genannten Link.

Depot Nr.
^^^^^^^^^

Die 4-stellige Nummer ihres zuständigen Depots.

Customs Terms
^^^^^^^^^^^^^

Falls notwendig können alternative Zollerklärungen übergeben werden, stimmen Sie dieses Kennzeichen bitte bei Bedarf mit DPD ab. Lassen Sie dieses Feld leer wenn es nicht benötigt wird.

Verwendungszweck für Nachnahme
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Dieser Text wird auf das Label aufgedruckt um den Kunden über den Inhalt des Paketes bei Nachnahme Lieferungen zu informieren. Die Platzhalter {ordnernr} und {client} werden jeweils mit der Bestellnummer oder der Ident. des aktiven Mandanten ersetzt.

Nummernkreis Anfang / Ende (DPD Core)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Sie erhalten von DPD einen zugewiesenen Nummernkreis in dem die Paketscheine gedruckt werden. Wenn dieser Nummernkreis erschöpft ist müssen Sie einen neuen Nummernkreis bei Ihrem Sachbearbeiter beantragen.

Diese Adress- und Bankdaten verwenden anstatt den Daten aus den Mandanteneinstellungen
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Wenn Sie diese Option aktivieren wird auf dem Label die Adresse die Sie darunter eingeben aufgedruckt statt den Mandanteneinstellungen.

DPD-Predict benutzen
^^^^^^^^^^^^^^^^^^^^

Wenn von DPD aktiviert können Sie hiermit die Predict Funktion aktivieren.

DPD-Cloud Webservice benutzen
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Aktivieren Sie diese Option wenn Sie statt dem DPD Core den DPD Cloud Webservice nutzen.

*Information lt. DPD zu Cloud Webservice Zugangsdaten:*

   Möchten Sie eine Freischaltung für den DPD Cloud Webservice in unserem Livesystem, so wenden Sie sich über DPD eSolutions an unser IT-Team via it@dpd.com oder kontaktieren Sie uns über unsere deutschlandweite Hotline unter 0180 6 373200*.

PartnerCredentials / UserCredentials (DPD Cloud)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Füllen Sie die API Zugangsdaten für den DPD Cloud Webservice hier ein, wenn Sie DPD Core nutzen wird dies nicht benötigt.

Versandlabels drucken
~~~~~~~~~~~~~~~~~~~~~

Nachdem Sie die entsprechenden Einstellungen gemacht haben können Sie für Aufträge Versandscheine generieren. Öffnen Sie dazu den gewünschten Auftrag über "Auftragsverwaltung" => "Aufträge" und klicken Sie im oberen Menü auf [button size="small"]DPD[/button] und im Untermenü auf Beauftragen. Nachdem Sie einen Versandschein beauftragt haben und dieser erstellt wurde können Sie im oberen Menü  [button size="small"]DPD[/button] den Versandschein herunterladen oder direkt drucken.
