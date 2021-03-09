eBay
####
:date: 2017-10-11 15:21
:author: admin
:category: Plugins
:slug: ebay
:status: published
:attachments: wp-content/uploads/2019/11/300px-EBay_logo.svg_.png

Mit dem eBay Plugin können Sie aus Ihren Produktdaten mit wenigen Klicks vollständige Angebot auf eBay erstellen.

Entwicklerkonto einrichten
~~~~~~~~~~~~~~~~~~~~~~~~~~

Folgen Sie diesem Link und den Anweisungen von eBay um ein Entwicklerkonto zu erstellen:

https://developer.ebay.com/base/membership/signin/default.aspx

eBay Application erstellen
~~~~~~~~~~~~~~~~~~~~~~~~~~

Für den Einsatz der Schnittstelle müssen Sie ein sog. Keyset erstellen. Loggen Sie sich in Ihr Entwicklerkonto ein und klicken Sie auf "Create a keyset" um die benötigten Daten zu erhalten. Achten Sie darauf ein Keyset für die Production Umgebung anzulegen falls Sie mit dem Listen beginnen möchten. Für Tests erstellen Sie ein Sandbox Keyset und aktivieren Sie die Einstellung "Sandbox" in den Plugin Einstellungen.

[alert]Bitte beachten Sie das ein normales Keyset nur 5000 Anfragen pro Tag erlaubt, Warexo benötigt um ein neues Angebot zu erstellen oder zu aktualisieren je 2 Anfragen. Für den Cronjob um Bestellungen abzufragen je eine Anfrage. Für Lagerbestandsabgleiche wird jeweils eine Anfrage pro Artikel verwendet. Wenn Sie ein hohes Aufkommen haben müssen Sie die Anwendung von eBay Zertifizieren lassen - wenden Sie sich in diesem Fall bitte direkt an eBay.[/alert]

Plugin Einstellungen
~~~~~~~~~~~~~~~~~~~~

Wählen Sie das eBay Plugin in Warexo unter Systemverwaltung => Plugins

Zugangsdaten
^^^^^^^^^^^^

-  App ID
-  Dev ID
-  Cert ID
-  User Token Application ID

Diese Daten erhalten Sie wie oben beschrieben über Ihren eBay Developer Account. Die User Token  Application ID finden Sie im Bereich User Tokens - beantragen Sie bitte einen Auth'n'Auth Token. Bitte achten Sie darauf den Token vollständig zu kopieren oder es kommt zu Authentifizierungsfehlern.

Sandbox
^^^^^^^

Aktivieren Sie diese Option wenn Sie Sandbox Zugangsdaten eingetragen haben um Ihre Listings vor dem Live Gang zu testen.

Land
^^^^

Ihr Hauptverkaufsland in dem Ihr eBay Verkäufer Konto erstellt wurde.

Aktive Länder
^^^^^^^^^^^^^

Wählen Sie hier alle Länder in denen Ihre Artikel angeboten werden sollen.

PayPal E-Mail-Adresse
^^^^^^^^^^^^^^^^^^^^^

Die PayPal E-Mail Adresse die mit Ihrem PayPal Konto verknüpft ist.

Angebote sind gültig
^^^^^^^^^^^^^^^^^^^^

Wie lang Angebote standardmäßig gültig sind (überschreibbar auf Artikelebene)

Artikel pro Aufruf
^^^^^^^^^^^^^^^^^^

Wie viele Artikel pro Cronjob zu eBay übertragen werden, falls die Exporte vom Server abgebrochen werden verringern Sie diesen Wert entsprechend.

Attribute exportieren
^^^^^^^^^^^^^^^^^^^^^

Wenn Sie diese Option aktivieren werden die in Warexo hinterlegten Attribute zu eBay übertragen.

Zusätzliche Artikelbeschreibung
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Text der an alle Artikelbeschreibungen bei Amazon mit angehangen wird

Bestellnummernkreis
^^^^^^^^^^^^^^^^^^^

Alternativer Bestellnummernkreis für eBay Aufträge die importiert werden (siehe `Nummernkreise <https://docs.warexo.de/allgemein/nummernkreise/>`__)

Lagerbestand nur im Cronjob exportieren
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Wenn Sie diese Option aktivieren wird der Lagerbestand bei eBay nur im Artikelexport Cronjob aktualisiert, ansonsten wird der Bestand sofort angepasst wenn Sie Inventuren vornehmen, Bestellungen eingehen etc. Diese Option kann je nach System viele Anfragen an eBay einsparen, wir raten diese Funktion zu verwenden.

Ebay Template
^^^^^^^^^^^^^

Dieser Textbaustein wird als Template für Ihre Angebote verwendet (überschreibbar auf Artikelebene).

Preisvorschlag erlauben
^^^^^^^^^^^^^^^^^^^^^^^

Aktiviert die Option "Preisvorschlag erlauben" für neue Angebote standardmäßig (überschreibbar auf Artikelebene).

Bilder-URL
^^^^^^^^^^

Wenn Sie nicht möchten dass die URL zu Ihrer Warexo Installation öffentlich gemacht wird können Sie hier einen alternative Domain verknüpfen. Legen Sie hierzu eine neue Domain auf Ihrem Webspace an und setzen Sie den Document Root auf den web/uploads/ Ordner innerhalb der Warexo Installation.

Bestellungen ab Zeitpunkt importieren
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Falls Sie bereits länger mit eBay arbeiten kann es sein dass alte Bestellungen nicht als Aufträge importiert werden sollen. Legen Sie hier den Zeitraum fest ab dem die Aufträge importiert werden sollen.

Bearbeitungszeit
^^^^^^^^^^^^^^^^

Standardwert für die Bearbeitungszeit (überschreibbar auf Artikelebene).

Max. Lagerbestand pro Artikel
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Der zu eBay exportierte Lagerbestand wird diesen Wert nie übersteigen (überschreibbar auf Artikelebene).

Zahlungsart '...' aktiv
^^^^^^^^^^^^^^^^^^^^^^^

Aktiviert die jeweiligen Zahlungsarten für Ihre eBay Angebote.

Widerrufsfrist
^^^^^^^^^^^^^^

Wie lang kann ein Kauf widerrufen werden.

Rücksendekosten werden bezahlt von
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Bestimmt wer die Rücksendekosten trägt

Retouren
^^^^^^^^

Bestimmt ob Artikel zurückgegeben werden können oder nicht

Weitere Angaben zu Rücknahmebedingungen
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Wählen Sie hier den Textbaustein der für Ihre Widerrufsbelehrung verwendet werden, **bitte unbedingt korrekt ausfüllen.**

ebay Plus aktiv
^^^^^^^^^^^^^^^

Wenn Sie eBay Plus verwenden möchten aktivieren Sie diese Einstellung

Verfügbare Versand-/ Zahlungs-/ Rücknahmebedingungen
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Wenn Sie die jeweiligen Versand-/ Zahlungs- oder Rücknahmebedingungen für bestimmte Artikel beschränken möchten geben Sie hier die jeweiligen Werte im Format <id>|<title> ein. Die ID kann aktuell nur direkt über Ihr eBay Konto ausgelesen werden. Eine Anleitung hierzu befindet sich hier.

Zahlungsbedingung
^^^^^^^^^^^^^^^^^

Wählen Sie hier eine der verfügbaren Zahlungsbedingungen als Standardeinstellung.

Rücknahmebedingung
^^^^^^^^^^^^^^^^^^

Wählen Sie hier eine der verfügbaren Rücknahmebedingungen als Standardeinstellung.

Abgelaufene Angebote bei Inventur nicht wiedereinstellen
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Experimentelle Option, wird entfernt - nicht aktivieren!

Ebay Kategorie ID "Sonstige"
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Sollten Sie einen Artikel einstellen dessen Kategorie nicht zugewiesen werden kann wird diese ebay Kategorie als Ersatz verwendet.

Ebay Shop Kategorie ID "Sonstige"
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Sollten Sie einen Artikel einstellen dessen Kategorie nicht zugewiesen werden kann wird diese eBay Shop Kategorie als Ersatz verwendet.

Artikelzustand
^^^^^^^^^^^^^^

Standardwert für den Artikelzustand.

%-Preisaufschlag
^^^^^^^^^^^^^^^^

Wenn Sie hier einen Wert definieren werden die Preise für Artikel die zu eBay übertragen werden um diesen Faktor erhöht.

Sprache für das Land/Site ...
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Erlaubt die Zuweisung von Warexo Sprachen zu eBay Marktplätzen, so können z.B. englische Übersetzungen für den Italienischen Marktplatz verwendet werden.

Kategorie Einstellungen
~~~~~~~~~~~~~~~~~~~~~~~

Viele Einstellungen können bereits auf Kategorie Ebene voreingestellt werden, dies erleichtert Ihnen die spätere Konfiguration der Artikel. Die Felder aus den Plugin Einstellungen können Sie hier nach belieben überschreiben. Die folgende Beschreibung bezieht sich nur auf Felder die nicht im Plugin konfiguriert werden konnten.

Ebay Kategorie Id 1/2
^^^^^^^^^^^^^^^^^^^^^

Verbindet diese Kategorie mit der entsprechenden eBay Kategorie ID - bitte beachten Sie dass ein Listing nur in einer Endkategorie möglich ist. Wenn eine Kategorie noch Unterkategorien hat müssen Sie eine der Unterkategorien wählen.

Ebay Shop Kategorie Id 1/2
^^^^^^^^^^^^^^^^^^^^^^^^^^

Verbindet diese Kategorie mit Ihrer entsprechenden eBay Shop Kategorie ID - bitte beachten Sie dass ein Listing nur in einer Endkategorie möglich ist. Wenn eine Kategorie noch Unterkategorien hat müssen Sie eine der Unterkategorien wählen.

Artikel Einstellungen
~~~~~~~~~~~~~~~~~~~~~

Auf Artikel Ebene können Sie die Einstellungen der Kategorien und des Plugins für jeden Artikel noch anpassen. Die folgende Beschreibung bezieht sich nur auf Felder die nicht im Plugin oder der Hauptkategorie des Artikels konfiguriert werden konnten.

Ebay Angebot Id
^^^^^^^^^^^^^^^

Falls Sie einen Artikel mit einem bestimmten eBay Angebot verknüpfen möchten können Sie hier die entsprechende ID eingeben. Wenn Sie einen Artikel auf eBay anbieten wird dieser Wert automatisch gefüllt. In den weiteren Feldern können Sie die Werte noch für die einzelnen Länder konfigurieren.

Ebay Angebot Ids
^^^^^^^^^^^^^^^^

Analog zu der einzelnen ID können Sie hier mehrere IDs von Angeboten angeben die verknüpft werden sollen. Tragen Sie die IDs kommasepariert ein.

Ebay Ended Time
^^^^^^^^^^^^^^^

Die Endzeit des jeweiligen Angebots, kann in den weiteren Feldern noch für die einzelnen Länder angepasst werden.

Ebay Akt. Preis
^^^^^^^^^^^^^^^

Aktionspreis der für eBay verwendet werden soll, diese Funktion ist ähnlich zur UVP Funktion und erzeugt einen Streichpreis bei eBay.

Ebay Titel
^^^^^^^^^^

Überschreibt das Titel Feld des Artikels für den Export zu eBay. Leer lassen um den normalen Titel zu verwenden.

Ebay Artikel-Prefix / Suffix
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Setzt einen Prefix oder Suffix vor den Artikeltitel für eBay.

Eingestellter Lagerbestand
^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: col-lg-10

    ...

Versandart Einstellungen
~~~~~~~~~~~~~~~~~~~~~~~~

Damit bei Angebotserstellung oder  Auftragsimport die korrekten Versandarten eingestellt werden und auch die entsprechenden Tracking Informationen an eBay übertragen werden müssen die Versandarten konfiguriert werden.

eBay Versandart
^^^^^^^^^^^^^^^

Die bei eBay gewählte Versandart die zu dieser Versandart gehört.

eBay Site
^^^^^^^^^

Die Länderseite zu der diese Versandart zugeordnet werden soll.

eBay Priorität
^^^^^^^^^^^^^^

Gibt die Sortierung für mehrere Versandarten eines Angebotes an.

eBay Carrier Code
^^^^^^^^^^^^^^^^^

Wählen Sie den entsprechenden Versanddienstleister für diese Versandart. Wenn dieses Feld nicht gefüllt ist kann keine Trackingnummer an eBay übergebene werden.

eBay Versandbedingung
^^^^^^^^^^^^^^^^^^^^^

Wenn Sie bei eBay Versandbedingungen definiert haben können Sie diese hier zuweisen. Dadurch werden die bei eBay definierten Versandkosten statt den in Warexo hinterlegten verwendet.

Artikel zu eBay übertragen
~~~~~~~~~~~~~~~~~~~~~~~~~~

Sie können Artikel entweder einzeln oder in Masse zu eBay übertragen. Klicken Sie entweder beim Produkt in der Eingabebox "eBay" die Schaltfläche "Stammartikel inkl. aller Varianten zu eBay übertragen" oder wählen Sie in der Produktliste mehrere Produkte und verwenden Sie die Massenaktion "Artikel zu eBay exportieren". Sie können auch alle konfigurierten Artikel über die Schaltfläche in den Plugin Einstellungen exportieren. Bitte beachten Sie dass der Cronjob für die Übertragung der Artikel zuständig ist, es kann also eine gewisse Zeit dauern bis die Artikel übertragen sind.

Cronjobs einrichten
~~~~~~~~~~~~~~~~~~~

Bitte richten Sie die jeweiligen Cronjobs ein die Ihnen in den Plugin Einstellungen angezeigt werden (Bestellimport und Artikelexport) - jenachdem wie Sie den Cronjob konfigurieren werden Artikel exportiert und Aufträge importiert.
