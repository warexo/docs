Installation
############
:date: 2014-09-04 13:16
:author: admin
:category: Allgemein
:slug: installation
:status: published
:attachments: /_static/img/screenshots/ordnerstruktur.jpg

[alert style="danger"]Bitte achten Sie genau darauf welche Teile von Warexo lesbar im Document Root ihres Servers liegen dürfen, wenn andere Ordner als der web Unterordner über das Internet aufrufbar sind ist das ein extremes Sicherheitsrisiko! Sollten Sie bedenken haben lässt sich Warexo natürlich auch auf einem Server in Ihrem Intranet ablegen.[/alert]

Die Installation von Warexo sollte durch einen technisch versierten Mitarbeiter erfolgen, bitte beachten Sie `die Systemanforderungen </handbuch/systemvoraussetzungen>`__ bevor Sie mit der Arbeit beginnen. Sollten Sie sich unsicher sein treten Sie mit uns in Kontakt, wir helfen Ihnen gerne bei der Einrichtung. Die Warnungen in dieser Anleitung beziehen sich auf eine Installation auf einen im Internet erreichbaren Server, für Intranet Server empfehlen wir trotzdem unserer Anleitung zu folgen.

Daten entpacken
~~~~~~~~~~~~~~~

Nachdem Sie das Installationspaket herunter geladen haben entpacken Sie bitte das Archiv mit einem Programm Ihrer Wahl, wir empfehlen hierfür `7-zip <http://www.7-zip.de/>`__. Sie sehen nun folgende Verzeichnisstruktur:

|image0|

Dies sind alle Dateien die auf Ihren Webserver übertragen werden müssen, jedoch darf nur der Ordner web im Internet ansprechbar sein. Es handelt sich um ein extremes Sicherheitsrisiko wenn auch die anderen Ordner ansprechbar sind!

Webspace vorbereiten
~~~~~~~~~~~~~~~~~~~~

Wir empfehlen für Warexo entweder eine vollständige oder eine Subdomain zu verwenden, eine Installation in Unterordner ist nicht vorgesehen und wird nicht offiziell unterstützt. Legen Sie die Subdomain oder Domain entsprechend den Vorgaben Ihres Hosters an. Führen Sie nun folgende Schritte aus:

-  Verbinden Sie sich per FTP und laden sie **alle** Dateien und Ordner aus dem Installationspaket auf Ihren Server.
-  Setzen Sie im Hosting Control Panel oder in den Apache Einstellungen den document root der Domain auf den Ordner web der der Installation beilag

Rufen Sie folgende Adresse in Ihrem Browser auf:

   http://www.ihredomain.de/install.php

Es erscheint nun der Installationsassistent von Warexo - sollten Sie eine Fehlermeldung erhalten prüfen Sie bitte die Systemvoraussetzungen. Folgen Sie nun den Schritten im Installationsassistent.

[alert style="danger"]Der Installationsassistent darf auf keinen Fall über http://www.ihredomain.de/web/install.php erreichbar sein, dies bedeutet dass andere Ordner als der Ordner web im Internet erreichbar sind![/alert]

.. |image0| image:: /_static/img/screenshots/ordnerstruktur.jpg
   :class: alignnone size-full wp-image-1878
   :width: 111px
   :height: 196px
