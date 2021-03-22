Internetmarke
#############
:date: 2017-12-05 15:50
:author: admin
:category: Plugins
:slug: internetmarke
:status: published

Mit den Services der Internetmarke der deutschen Post können Sie bequem E-Porto aus Warexo heraus buchen. Alles was Sie hierzu benötigen ist eine sog. Portokasse.Die benötigten Zugangsdaten erhalten Sie von DPD direkt unter diesem Link `https://portokasse.deutschepost.de/portokasse/ <https://portokasse.deutschepost.de/portokasse/#!/>`__. Der Shipping Handler lautet **internetmarke**

Live Modus
^^^^^^^^^^

Aktivieren Sie diese Option wenn Sie mit einer regulären Portokasse arbeiten, falls Sie einen Testaccount verwenden möchten deaktivieren Sie diese Option.

Benutzername / Passwort
^^^^^^^^^^^^^^^^^^^^^^^

Die Zugangsdaten für Ihre Portokasse (siehe Link oben).

Versandart einrichten
~~~~~~~~~~~~~~~~~~~~~

Erstellen Sie eine neue Versandart oder bearbeiten Sie eine bestehende. Setzen Sie das Feld Handler auf **internetmarke**

Internetmarke Labeltyp
^^^^^^^^^^^^^^^^^^^^^^

Wählen Sie PDF wenn Sie die Marke direkt drucken möchten, PNG Marken können in andere Dokumente eingebettet werden. Um die Marke einzubetten verwenden Sie bitte folgendes Snippet:

::

   {{custom_function('imlabel',{order:order, width:250,height:250*0.46})|raw}}

.. attention::Bitte beachten Sie dass das Porto sofort berechnet wird wenn das jeweilige Dokument gedruckt wird, eine Erstattung oder Stornierung ist nicht möglich

Internetmarke Produkt-Code
^^^^^^^^^^^^^^^^^^^^^^^^^^

Das Produkt dass für das Porto gebucht werden soll.

Art der Internetmarke
^^^^^^^^^^^^^^^^^^^^^

Die Internetmarke kann mit oder ohne Adressat gedruckt werden.

Internetmarke Druckformat
^^^^^^^^^^^^^^^^^^^^^^^^^

Wählen Sie ein von der Internetmarke vorgegebenes Druckformat für die Marke.
