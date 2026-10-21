.. _installation-zugriff-absichern:

Warexo per .htaccess absichern
######################################

.. attention:: Benötigen Sie Unterstützung bei der Absicherung Ihrer Installation? Wenden Sie sich bitte per Support-Ticket an uns.

Warexo läuft derzeit mit PHP 7.4; ein Versionswechsel ist aktuell nicht möglich.
Aufgrund der `gemeldeten PHP-Sicherheitslücken <https://watchtowr.com/intelligence/php-cve-2026-109618-faq/>`__
sollten alle Kunden den Zugriff auf ihre Installation einschränken.
Die Zugriffssperre reduziert die Angriffsfläche, behebt aber nicht die PHP-Lücke selbst.

Die folgenden Beispiele gelten für Apache 2.4 und gehören in ``web/.htaccess``.
Ersetzen Sie bisherige Zugriffsfreigaben wie ``Order allow,deny``, ``Allow from All``
oder ``Require all granted`` durch eine der Varianten. Bestehende Rewrite-Regeln bleiben erhalten.

``/json`` einschließlich Unterpfaden und ``/services/notify_payment_status`` bleiben
in beiden Varianten ohne zusätzlichen Apache-Zugriffsschutz öffentlich erreichbar.
Die Ausnahme für ``/json`` wird nur bei Verwendung des WAWIListeners benötigt,
die Ausnahme für ``/services/notify_payment_status`` für PayPal.
Falls Sie ``/anonymousgateway*`` nutzen, aktivieren Sie zusätzlich die jeweils kommentierte Freigabe.

Empfohlen: feste IP-Adressen
===================================

Ersetzen Sie die Beispieladressen durch die festen **öffentlichen IP-Adressen**
von Büro, VPN, Shopserver und weiteren benötigten Systemen:

.. code-block:: apache

   <RequireAny>
       Require expr "%{REQUEST_URI} =~ m#^/json(/|$)# || reqenv('REDIRECT_URL') =~ m#^/json(/|$)#"
       Require expr "%{REQUEST_URI} == '/services/notify_payment_status' || reqenv('REDIRECT_URL') == '/services/notify_payment_status'"
       # Nur aktivieren, wenn /anonymousgateway* genutzt wird:
       # Require expr "%{REQUEST_URI} =~ m#^/anonymousgateway# || reqenv('REDIRECT_URL') =~ m#^/anonymousgateway#"

       # Büro
       Require ip 203.0.113.10
       # Shopserver
       Require ip 198.51.100.20
   </RequireAny>

Abgesehen von diesen Ausnahmen werden Zugriffe von anderen IP-Adressen gesperrt.
Prüfen Sie anschließend den Zugriff von einer erlaubten und einer fremden IP
sowie die Funktion von Connectoren und WAWIListener.

Alternative: Passwortschutz
====================================================

.. warning:: Diese Variante ist weniger sicher als die Beschränkung auf feste IP-Adressen.

Legen Sie die Passwortdatei außerhalb von ``web`` an:

.. code-block:: bash

   htpasswd -cB /pfad/zu/warexo/.htpasswd warexo-zugang

Das Passwort wird abgefragt. Verwenden Sie ``-c`` nur beim erstmaligen Anlegen,
da eine vorhandene Datei sonst überschrieben wird.

Tragen Sie anschließend in ``web/.htaccess`` ein und passen Sie ``AuthUserFile`` an:

.. code-block:: apache

   AuthType Basic
   AuthName "Warexo"
   AuthBasicProvider file
   AuthUserFile "/pfad/zu/warexo/.htpasswd"

   <RequireAny>
       Require expr "%{REQUEST_URI} =~ m#^/json(/|$)# || reqenv('REDIRECT_URL') =~ m#^/json(/|$)#"
       Require expr "%{REQUEST_URI} == '/services/notify_payment_status' || reqenv('REDIRECT_URL') == '/services/notify_payment_status'"
       # Nur aktivieren, wenn /anonymousgateway* genutzt wird:
       # Require expr "%{REQUEST_URI} =~ m#^/anonymousgateway# || reqenv('REDIRECT_URL') =~ m#^/anonymousgateway#"

       Require valid-user
   </RequireAny>

``REDIRECT_URL`` berücksichtigt die interne Umschreibung auf ``app.php``.
Verwenden Sie diese Variante nur über HTTPS. Prüfen Sie, dass die Oberfläche
und direkte PHP-Aufrufe ein Passwort verlangen und die JSON-Schnittstelle
weiterhin funktioniert. Die Warexo-API-Anmeldung bleibt erforderlich.

Hilfreiche Links:

* `Generator für .htaccess und .htpasswd <https://htpasswd-generator.de/>`__ – für den Passwortschutz (bcrypt auswählen).
* `Hetzner: Verzeichnisschutz in konsoleH einrichten <https://docs.hetzner.com/de/managed/webserver/webserver-configuration-konsoleh/#verzeichnisschutz>`__ – die benötigten Ausnahmen wie oben ergänzen.
