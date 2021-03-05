GLS
###
:date: 2017-10-10 17:50
:author: admin
:category: Plugins
:slug: gls
:status: published

Der GLS Webservice erlaubt es Ihnen Paketlabels direkt aus Warexo heraus zu erstellen. Die benötigten Zugangsdaten erhalten Sie von GLS direkt. Der Shipping Handler lautet **gls**

Benutzer / Passwort / Kontakt ID
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Sie erhalten diese Daten von GLS direkt mitgeteilt, verwenden Sie hierfür folgendes Formular https://gls-group.eu/DE/de/kontakt?subject=98.804 erfragen.

Freischaltung des GLS Accounts
''''''''''''''''''''''''''''''

Weiterhin muss der GLS Account zur Nutzung mit dem GLS WebService freigeschaltet sein.

Das kann über diese Email beantragt werden: web-portal@gls-germany.com

Im Betreff der Anfrage bitte auf Warexo hinweisen.

Ist das nicht der Fall, wird dieser Fehler angezeigt: "The provided shipper is not allowed to create shipments"

Standardgewicht
^^^^^^^^^^^^^^^

Sollte das Gewicht einer Sendung nicht ermittelt werden können wird dieses Gewicht an die Schnittstelle für das Paket übergeben.

Kunden E-Mail-Adresse nicht an GLS übergeben
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Wenn diese Option aktiviert ist erhalten die Kunden keine Benachrichtigung von GLS über den Status des Pakets. Sie können natürlich jederzeit eigene E-Mails via Workflows an den Kunden versenden.

Diese Adress- und Bankdaten verwenden anstatt den Daten aus den Mandanteneinstellungen
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Wenn Sie diese Option aktivieren wird auf dem Label die Adresse die Sie darunter eingeben aufgedruckt statt den Mandanteneinstellungen.

Versandlabels drucken
~~~~~~~~~~~~~~~~~~~~~

Nachdem Sie die entsprechenden Einstellungen gemacht haben können Sie für Aufträge Versandscheine generieren. Öffnen Sie dazu den gewünschten Auftrag über "Auftragsverwaltung" => "Aufträge" und klicken Sie im oberen Menü auf [button size="small"]GLS[/button] und im Untermenü auf Beauftragen. Nachdem Sie einen Versandschein beauftragt haben und dieser erstellt wurde können Sie im oberen Menü  [button size="small"]GLS[/button] den Versandschein herunterladen oder direkt drucken.
