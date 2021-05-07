Internetmarke
#############

Mit den Services der Internetmarke der deutschen Post können Sie bequem E-Porto aus Warexo heraus buchen.
Alles was Sie hierzu benötigen ist eine sog. Portokasse.
Die benötigten Zugangsdaten erhalten Sie von DPD direkt unter `diesem Link <https://portokasse.deutschepost.de/portokasse/>`__

Plugin Einstellungen
~~~~~~~~~~~~~~~~~~~~~~

Live Modus
    Aktivieren Sie diese Option wenn Sie mit einer regulären Portokasse arbeiten, falls Sie einen Testaccount verwenden möchten deaktivieren Sie diese Option.

Benutzername / Passwort
    Die Zugangsdaten für Ihre Portokasse (siehe Link oben).

Versandart Einstellungen
~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. Hint:: Der :doc:`Handler </System/versandarten>` lautet **internetmarke**

Folgende Einstellungen können für die :doc:`Versandart </System/versandarten>` getroffen werden.

Labeltyp
    Ob das Label als PDF oder PNG Datei erstellt werden soll

    .. Hint:: PNG Marken können in andere Dokumente eingebettet werden. Um die Marke einzubetten verwenden Sie bitte folgendes Snippet:

        ``{{custom_function('imlabel',{order:order, width:250,height:250*0.46})|raw}}``

Produkt-Code
    Gewünschtes Produkt

Art der Internetmarke
    Ob die Marke mit oder ohne Adresse generiert werden soll

Druckformat
    Druckformat der Marke

Preis (Cent)
    Portohöhe in Euro Cent


Internetmarke drucken
~~~~~~~~~~~~~~~~~~~~~

Nachdem Sie die entsprechenden Einstellungen gemacht haben können Sie für Aufträge Porto generieren.
Öffnen Sie dazu den gewünschten Auftrag über :menuselection:`Auftragsverwaltung --> Aufträge`
und klicken Sie im oberen Menü auf :menuselection:`Internetmarke` und im Untermenü auf Beauftragen.

Nachdem Sie das Porto beauftragt haben und es erstellt wurde können Sie im oberen Menü
:menuselection:`Internetmarke` die Marke herunterladen oder direkt drucken.
