Webshop
#######
:date: 2017-10-12 12:36
:author: admin
:category: Daten Im-/Export
:slug: webshop
:status: published

[alert type="info"]Bitte installieren Sie zunächst den entsprechenden Webshop Connector für Ihr System bevor Sie mit den folgenden Schritten fortfahren.

Webshop Verbindung einrichten
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Bitte hinterlegen Sie zuerst die notwendigen Daten in den Mandanteneinstellungen, Sie finden die Einstellungen unter "Einstellungen" => "Mandanteneinstellungen" im Bereich Webshop.

Shop-URL
^^^^^^^^

Die vollständige URL zu Ihrem Webshop inklusive Protokoll - bitte beachten Sie dass keine HTTP Redirects von dieser Domain zu einer anderen erfolgen dürfen. Wenn Ihr Shop also unter mehreren Domains erreichbar ist, geben Sie immer die Haupt URL an die nicht weitergeleitet wird. Wenn Ihr Shop nur unter https zu erreichen ist, geben Sie die URL inklusive https:// als Protokoll an. Hängen Sie keine zusätzlichen Zeichen an die URL an!

Shop Admin Benutzer / Passwort
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Gültiger Shop Admin Benutzer inkl. Passwort der für die Verbindung und Datenübertragung mit dem Webshop genutzt werden soll. Wir raten dazu einen separaten Benutzer mit einem starken Passwort anzulegen.

FTP Server / Benutzer / Passwort
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Gültige FTP Zugangsdaten zum Server auf dem der Webshop abgelegt wurde. Wir raten dazu einen separaten Benutzer mit einem starken Passwort anzulegen. Der Benutzer sollte möglichst nur Zugriff zum Webshop Verzeichnis erhalten.

FTP Pfad zum Shop
^^^^^^^^^^^^^^^^^

Pfad zum Hauptverzeichnis des Shop, ausgehend vom FTP Zielverzeichnis des oben eingegebenen Benutzers. Wenn das Zielverzeichnis des FTP Benutzers direkt auf den Webshop zeigt dann ein einfacher Slash /

.. attention::Speichern Sie die Einstellungen und verwenden Sie die Schaltfläche "Verbindung zum Shop prüfen" in der Aktionsleiste. Sie erhalten eine entsprechende Meldung ob die Verbindung erfolgen konnte

Webshop Daten importieren
~~~~~~~~~~~~~~~~~~~~~~~~~

.. attention::Warexo agiert immer als Master System, bitte beachten Sie dass Sie die Daten nur anfänglich importieren und nach dem Wechsel alle relevanten Daten über Warexo pflegen!

Wenn Sie anfangen mit Warexo zu arbeiten können Sie die Daten aus Ihrem Shop zunächst importieren. Öffnen Sie den Bildschirm "Systemverwaltung" => "Webshop", im Bereich "Importieren" können Sie die Einstellungen treffen. Klicken Sie anschließend auf Import starten, der Import wird dann im Hintergrund ausgeführt. Aktualisieren Sie die Seite um den Fortschritt zu beobachten.

Datentyp wählen
^^^^^^^^^^^^^^^

Wählen Sie welche Daten Sie importieren möchten, wir raten beim Erstimport dazu alle Punkte nacheinander abzuarbeiten.

Felder
^^^^^^

Wenn Sie nur bestimmte Felder aus der Shop Datenbank importieren möchten tragen Sie diese hier ein. Komma separiert ohne Leerzeichen.

Foreign IDs
^^^^^^^^^^^

Wenn Sie nur Datensätze mit einer bestimmten ID importieren möchten tragen Sie diese hier ein. Komma separiert ohne Leerzeichen.

Cronjobs konfigurieren
~~~~~~~~~~~~~~~~~~~~~~

Damit Warexo die Bestellungen von Ihrem Webshop regelmäßig importiert und relevante Dokumente per E-Mail versendet müssen Sie die notwendigen Cronjobs einrichten. Die benötigten Befehle werden Ihnen angezeigt. Die Zeitabstände sind frei definierbar.

Daten zum Webshop exportieren
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Wenn benötigt können Sie alle Daten eines Typs zum Webshop übertragen. Da dieser Vorgang sehr lang dauern kann raten wir dazu die Exportieren Funktion in der Aktionsleiste zu verwenden (direkt in den jeweiligen Produkten, Kategorien etc.)

Wählen Sie einfach im Bereich Export den Datentyp den Sie exportieren möchten und klicken Sie auf Export starten. Der Export läuft im Hintergrund, aktualisieren Sie die Seite um den Fortschritt zu sehen.

Datenstamm zurücksetzen
~~~~~~~~~~~~~~~~~~~~~~~

Wenn beim Import der Webshop Daten ein Fehler aufgetreten ist, oder Sie aus irgendeinem anderen Grund alle Warexo Daten löschen möchten, wählen Sie einfach den entsprechenden Datentyp und starten Sie den Vorgang. \ **Diese Funktion löscht alle Daten die mit dem aktiven Mandanten zu tun haben, der Vorgang kann nur über ein Backup zurückgesetzt werden!**

Gelöschte Daten übernehmen
~~~~~~~~~~~~~~~~~~~~~~~~~~

Falls Sie massenweise Daten aus der Datenbank gelöscht haben (via Script o.Ä.) können Sie die Löschungen hier in den Webshop exportieren, die Datensätze werden dann im Webshop entfernt.
