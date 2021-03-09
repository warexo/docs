Amazon
######
:date: 2016-01-27 11:38
:author: admin
:category: Plugins
:slug: amazon
:status: published

*Im Laufe des zweiten Halbjahres 2019 wurde von Amazon eine neue Datenschutzrichtlinie zum Umgang mit Kundendaten (Personal Identifiable Information) eingeführt. Aufgrund dieser Änderung ist es aktuell nicht möglich Kundendaten über die Amazon Schnitstelle zu importieren. Ein Import ist aktuell nur mit bereits vorhandenen MWS Zugangsschlüsseln möglich. Diese Richtlinie wurde von Amazon festgelegt und verhindert aktuell den Auftragsimport. Amazon gibt aktuell keine konkreten Termine vor wann die Kundendaten wieder verfügbar sind.*

Warexo erlaubt Ihnen einen einfache Export aller Produktrelevanten Daten zu Amazon zu Übertragen.

Verkäuferkonto einrichten
~~~~~~~~~~~~~~~~~~~~~~~~~

Folgen Sie diesem Link und den Anweisungen von Amazon um ein Verkäuferkonto zu erstellen:

`http://services.amazon.de/verkaufen_amazon‎ <http://services.amazon.de/verkaufen_amazon‎>`__

[STRIKEOUT:Zugang zu MWS einrichten]
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

[STRIKEOUT:Um Produkte per Schnittstelle auf dem Amazon Marktplatz verkaufen zu können benötigen Sie Zugang zu den Amazon Marketplace Webservices (MWS). Folgen Sie diesem Link um eine Freischaltung zu beantragen:]

https://developer.amazonservices.de/

[STRIKEOUT:Wenn Sie gefragt werden geben Sie an dass Sie MWS für Ihr eigenes Amazon Verkäuferkonto freischalten möchten. Wenn der Vorgang abgeschlossen ist erhalten Sie die für das Plugin benötigten Amazon MWS Zugangsdaten.]

App Authorisieren
~~~~~~~~~~~~~~~~~

Um die Amazon Schnittstelle von Warexo zu nutzen haben wir eine App bereit gestellt:

https://sellercentral.amazon.de/apps/store/dp/amzn1.sellerapps.app.63c040cc-0227-4f29-a825-c803be4a86fd

Melden Sie sich mit Ihrem Seller-Central Konto an und folgen Sie den Schritten zur Authorisierung. Sie erhalten anschließend einen "Token für die MWS-Autorisierung" statt dem Zugangsschlüssel und dem geheimen Schlüssel.

Plugin Einstellungen
~~~~~~~~~~~~~~~~~~~~

Wählen Sie das Amazon Plugin in Warexo unter Systemverwaltung => Plugins

Zugangsdaten
^^^^^^^^^^^^

-  Händler ID
-  Marktplatz ID's

Im Feld Marktplatz ID geben Sie bitte zusätzlich nochmals die Marktplatz ID Ihres Hauptverkaufslandes ein.

Für Zugang über die App:
''''''''''''''''''''''''

-  Token für die MWS-Autorisierung

Den Token erhalten Sie am Ende der App Authorisierung.

Für Zugang über eigenen MWS Account (veraltet):
'''''''''''''''''''''''''''''''''''''''''''''''

-  AWS Zugangsschlüssel-ID (AWS Access Key ID)
-  Geheimer Schlüssel (Secret Key)

Ihre persönlichen Zugänge zu MWS, diese erhalten Sie am Ende der MWS Registrierung.

Händler Token
^^^^^^^^^^^^^

Sie finden Ihren Händler Token in der Amazon Seller Central (http://sellercentral.amazon.de) unter "Einstellungen" => "Informationen zum Verkäuferkonto" => "Geschäftsdaten" => "Ihr Händlertoken"

Land
^^^^

Ihr Hauptverkaufsland in dem Ihr Amazon Verkäufer Konto erstellt wurde.

Aktive Länder
^^^^^^^^^^^^^

Wählen Sie hier alle Länder in denen Ihre Artikel angeboten werden sollen.

Währung
^^^^^^^

Die Währung in der die Artikel angeboten werden, muss übereinstimmen mit der Währung in der Sie Ihre Artikelpreise pflegen

Marke
^^^^^

Wenn Sie eine Amazon Marke registriert haben geben Sie sie hier ein, bitte nur ausfüllen nach genehmigter Markenanmeldung bei Amazon (`mehr Informationen <https://www.google.de/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwiRwrDDqtvKAhWDhA8KHd_xDxgQFggfMAA&url=https%3A%2F%2Fsellercentral-europe.amazon.com%2Fgp%2Fhelp%2Fhelp.html%2Fref%3Dag_200955930_cont_69022%3Fie%3DUTF8%26itemID%3D200955930%26language%3Dde_DE&usg=AFQjCNFWltCvjwnIWB4g8duge_NVO8685A&sig2=9asMf5ZG69ofXSqNis9ofw>`__)

Artikel Präfix
^^^^^^^^^^^^^^

Textangabe die vor alle Produkttitel gesetzt wird die bei Amazon gelistet werden

Der Produkttitel wird an Amazon so übertragen:

<Artikel Präfix><Titel><Artikel Suffix>

Artikel Suffix
^^^^^^^^^^^^^^

Textangabe die an alle Produkttitel angehängt wird die bei Amazon gelistet werden

Der Produkttitel wird an Amazon so übertragen:

<Artikel Präfix><Titel><Artikel Suffix>

Zusätzliche Artikelbeschreibung
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Text der an alle Artikelbeschreibungen bei Amazon mit angehangen wird

Amazon Attribute (Bullet Points)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Amazon Bullet Points werden in Amazon oben angezeigt. Maximal 5 Attribute die für alle Artikel mit übertragen werden, eines pro Zeile

Amazon Keywords
^^^^^^^^^^^^^^^

Suchbegriffe die für alle Artikel zusätzlich mit übertragen werden

Bestellnummernkreis
^^^^^^^^^^^^^^^^^^^

Wenn gewünscht spezieller Bestellnummernkreis für die Aufträge die über Amazon importiert werden (siehe `Nummernkreise <http://docs.warexo.de/allgemein/nummernkreise/>`__)

Max. Anzahl der zugeordneten Produktoptionen
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Wie viele Optionen eines Produktes maximal mit übertragen werden sollen, hierbei geht es um die Anzahl der Auswahleinträge - es werden immer alle Optionen übertragen.

Amazon Variation für XXX
^^^^^^^^^^^^^^^^^^^^^^^^

Für jede Artikelvariation die sich in Ihrem System befindet können Sie hier bestimmen wie der Name der Auswahl in Amazon angezeigt wird. Diese Eingabefelder werden dynamisch anhand Ihrer Artikel berechnet und angezeigt.

Cron URL
^^^^^^^^

Damit die Bestellungen automatisch importiert und die Artikel exportiert werden müssen die beiden angezeigten Cron Jobs eingerichtet werden, bitte wenden Sie sich an Ihren Administrator wenn Sie Hilfe beim einrichten der Cron Jobs benötigen.

Artikeleinstellungen
~~~~~~~~~~~~~~~~~~~~

Damit ein Produkt zu Amazon exportiert werden kann müssen für den Artikel noch spezielle Einstellungen vorgenommen werden. Öffnen Sie den gewünschten Artikel über die Produktliste und springen Sie zur Eingabebox "Amazon".

Nicht zu Amazon exportieren
^^^^^^^^^^^^^^^^^^^^^^^^^^^

Der Artikel wird nie zu Amazon exportiert, weder einzeln noch im Massenexport.

Stammartikel nicht zu Amazon exportieren
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Es werden nur die untersten Varianten als einzelne Artikel zu Amazon gesendet, dadurch verlieren die Artikel Ihre Gruppierung unter dem Hauptartikel und erscheinen als einzelne Angebote bei Amazon.

.. _artikel-präfix-1:

Artikel Präfix
^^^^^^^^^^^^^^

Textangabe die vor den Produkttitel bei Amazon gesetzt wird.

Der Produkttitel wird an Amazon so übertragen:

<Artikel Präfix><Titel><Artikel Suffix>

.. _artikel-suffix-1:

Artikel Suffix
^^^^^^^^^^^^^^

Textangabe die an den Produkttitel bei Amazon angehangen wird.

Der Produkttitel wird an Amazon so übertragen:

<Artikel Präfix><Titel><Artikel Suffix>

.. _zusätzliche-artikelbeschreibung-1:

Zusätzliche Artikelbeschreibung
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Text der an die Artikelbeschreibung bei Amazon mit angehangen wird.

Amazon Attribute (Bullet Points), max. 5 Zeilen
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Amazon Bullet Points werden in Amazon oben angezeigt. Maximal 5 Attribute die für alle Artikel mit übertragen werden, eines pro Zeile

ASIN
^^^^

Wenn der Artikel bereits bei Amazon von Ihnen oder einem anderen Händler gelistet wird können Sie hier die zugehörige ASIN eintragen. Im Normalfall wird die ASIN automatisch ermittelt oder erstellt - diese Angabe ist optional.

Amazon SKU
^^^^^^^^^^

Spezielle Artikelnummer die anstatt der normalen Artikelnummer an Amazon übertragen werden soll

Amazon Theme
^^^^^^^^^^^^

Hauptkategorie des Artikels bei Amazon

Amazon Produkt-Typ
^^^^^^^^^^^^^^^^^^

Unterkategorie des Artikels

Amazon Browsenode
^^^^^^^^^^^^^^^^^

ID der Suchpfade

.. _amazon-keywords-1:

Amazon Keywords
^^^^^^^^^^^^^^^

Suchbegriffe die an Amazon mit übermittelt werden sollen, Kommasepariert.

Amazon Binding Type
^^^^^^^^^^^^^^^^^^^

Wie das Buch gebunden wurde - nur für Buchangebote notwendig.

Artikel zu Amazon übertragen
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Sie können Artikel entweder einzeln oder in Masse zu Amazon übertragen. Klicken Sie entweder beim Produkt in der Eingabebox "Amazon" die Schaltfläche "Stammartikel inkl. aller Varianten zu Amazon übertragen" oder wählen Sie in der Produktliste mehrere Produkte und verwenden Sie die Massenaktion "Artikel an Amazon exportieren". Sie können auch alle konfigurierten Artikel über die Schaltfläche in den Plugin Einstellungen exportieren.
