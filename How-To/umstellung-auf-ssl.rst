Umstellung auf SSL
##################

-  Richten Sie ein SSL-Zertifikat für die WAWI-Domain ein
-  Fügen Sie folgende Zeilen in der Datei web/.htaccess hinzu:

.. code-block:: html

   RewriteCond %{SERVER_PORT} !^443$
   RewriteRule (.*) https://%{HTTP_HOST}/$1 [L]

-  Ändern Sie den WAWI-Url im WAWIListener Tool (unter WAWI->Einstellungen)
-  Starten Sie den WAWIListener neu
-  Öffnen Sie folgenden Link im Chrome Browser

.. code-block:: html

   chrome://flags/#allow-insecure-localhost

-  Wählen Sie die Option "Enabled"
-  Starten Sie den Chrome Browser neu
