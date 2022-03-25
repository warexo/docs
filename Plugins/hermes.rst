Hermes
######

.. Attention:: Hermes erlaubt derzeit keine direkte Anbindung von Warexo an die neue HSI Schnittstelle.
    Dadurch ist es aktuell nicht möglich Versandscheine direkt aus Warexo heraus zu erzeugen. Nutzen
    Sie bitte hierfür aktuell den :doc:`vorgefertigten Report </Daten-Im-Export/report-schemas>` um die Daten
    per CSV Format in das Hermes Backend zu übertragen.

Der Hermes Webservice erlaubt es Ihnen Paketlabels direkt aus Warexo heraus zu erstellen.
Die benötigten Zugangsdaten erhalten Sie von Hermes direkt unter `diesem Link <https://developerportal.hlg.de>`__ oder über
Ihren jeweiligen Hermes Vertriebsmitarbeiter.

Plugin Einstellungen
~~~~~~~~~~~~~~~~~~~~~~~~~

Partner ID / API-Passwort
    Sie erhalten diese Daten von Hermes direkt oder über den oben genannten Link.

Live Modus
    Legt fest ob das das Plugin Live benutzt wird, um den Entwicklungsmodus nutzen zu können müssen Sie sich einen Entwicklerzugang von Hermes zur Verfügung stellen lassen. Normale Zugänge funktionieren nur im Live Modus.

Versandart Einstellungen
~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. Hint:: Der :doc:`Handler </System/versandarten>` lautet **hermes**

Folgende Einstellungen können für die :doc:`Versandart </System/versandarten>` getroffen werden.

Paket Klasse
    Hermes Paketklasse für den Paketaufkleber

Sperrgut
    Aktiviert Sperrgutversand

Versandlabels drucken
~~~~~~~~~~~~~~~~~~~~~

Nachdem Sie die entsprechenden Einstellungen gemacht haben können Sie für Aufträge Versandscheine generieren.
Öffnen Sie dazu den gewünschten Auftrag über :menuselection:`Auftragsverwaltung --> Aufträge`
und klicken Sie im oberen Menü auf :menuselection:`Hermes` und im Untermenü auf Beauftragen.

Nachdem Sie einen Versandschein beauftragt haben und dieser erstellt wurde können Sie im oberen Menü
:menuselection:`Hermes` den Versandschein herunterladen oder direkt drucken.