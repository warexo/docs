DHL
###

Als Kunde der Deutschen Post haben Sie die Möglichkeit Paketlabels direkt aus Warexo heraus zu erstellen. Beachten Sie
bitte dass hierzu Zugänge zum Geschäftskundenportal notwendig sind. Sie erhalten diese Zugänge direkt von Ihrem
zuständigen  Sachbearbeiter bei DHL.

Via Geschäftskundenportal Benutzer erstellen
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Melden Sie sich im `Geschäftskundenportal <https://www.dhl-geschaeftskundenportal.de>`__ mit den Zugangsdaten die Sie
von DHL bekommen haben an. Fahren Sie im oberen rechten Menü über Ihren Namen und wählen Sie Benutzerverwaltung.
Füllen Sie die persönlichen Daten aus und klicken Sie auf weiter. Erlauben Sie die Fähigkeiten Versenden (Intraship),
Abholen, Retoure und Verfolgung, klicken Sie auf weiter. Folgen Sie den weiteren Einrichtungsschritten, im Normalfall
sind keine weiteren Einstellungen notwendig. Für weitergehende Informationen wenden Sie sich bitte an den GKP Support.
Am Ende der Installation werden die Zugangsdaten zu der in den persönlichen Daten hinterlegten E-Mail Adresse gesendet.
Melden Sie sich an und legen Sie einen Benutzer an. Wir raten Ihnen dazu einen Systembenutzer anzulegen da das Passwort
ansonsten alle 6 Monate geändert werden muss.

Plugin Einstellungen
~~~~~~~~~~~~~~~~~~~~

Sie finden die Einstellungen in Warexo unter Plugins => Intraship

Live Modus
    Legt fest ob das das Plugin Live benutzt wird, um den Entwicklungsmodus nutzen zu können müssen Sie sich einen
    Entwicklerzugang von DHL zur Verfügung stellen lassen. Normale GKP/Intraship Zugänge funktionieren nur im Live Modus.

API-Version
    Das Plugin unterstützt aktuell noch die alte GKP 1.0 Schnittstelle,
    wir raten dazu immer mit der neuesten Version zu arbeiten.

Benutzer
    Tragen Sie hier hier Ihren GKP Benutzer ein.

Passwort
    Tragen Sie hier Ihr GKP Passwort ein.

EKP
    Tragen Sie hier Ihre von DHL bestimmte EKP ein.

Benutzer/Passwort/Portal-ID DHL Retouren
    Wenn Sie DHL Retoure verwenden möchten tragen Sie hier die Zugangsdaten ein die Sie von DHL Retoure erhalten haben.

Standardgewicht (kg)
    Legen Sie fest welches Gewicht als Standard verwendet wird wenn ein Artikel kein hinterlegtes Gewicht hat.
    Das Gewicht eines Artikels muss mindestens 200g betragen, bei leichteren Artikeln hinterlegen Sie bitte mindestens einen Wert von 0,2.

Kunden E-Mail-Adresse nicht an DHL übergeben
    Entscheiden Sie ob die E-Mailadresse des Kunden an DHL übermittelt werden soll.
    Die Kunden erhalten dann keine Versand und Trackingmails mehr von DHL direkt.

Diese Adress- und Bankdaten verwenden anstatt den Daten aus den Mandanteneinstellungen
    Legen Sie fest welche Bankdaten abweichend zum Mandanten verwendet werden sollen.
    Es werden dann die hier eingetragenen Daten anstatt der im Mandanten hinterlegten Daten verwendet.

Versandarten konfigurieren
~~~~~~~~~~~~~~~~~~~~~~~~~~

Ihre verschiedenen Versandarten müssen den unterschiedlichen Produktcodes zugewiesen werden um später die richtigen
Labels generieren zu können. Um einen Produktcode zuzuweisen öffnen Sie bitte den
Menüpunkt :menuselection:`Einstellungen --> Mandant --> Versandarten`.

Wählen Sie die Versandart die Sie als Intraship Versandart konfigurieren möchten.
Im Bereich Intraship finden Sie die möglichen Einstellungen.

Tragen Sie :guilabel:`intraship` ins Feld "Handler" ein

Intraship Produkt Code
    Wählen Sie hier den Produkt Code der dieser Versandart entspricht, die möglichen Codes sind bereits vorausgefüllt.
    Die einzelnen Codes Ihrer Produkte erfragen Sie bitte bei DHL direkt.

Partner ID (Attendance)
    Zu jedem Produkt wird Ihnen von DHL eine Partner ID (sog. Attendance) zugewiesen.
    Diese können Sie über den Punkt "Versenden" im Geschäftskundenportal einsehen oder Ihren Vertragsdaten
    mit DHL entnehmen. Die Partner ID ist im Normalfall eine zweistellige Zahl in API Version 1.0
    und eine vierstellige Zahl in API Version 2.0.

Services
    Wenn gewünscht können Sie verschiedene Services für diese Versandart aktivieren wie z.B. Eigenhändig, Rückschein, Zustellnachweis etc.#

Max. Versicherungssumme
    Für versicherten Versand können Sie hier bestimmen ob die Versicherungssumme automatisch anhand des Bestellwerts berechnet oder fixiert gesetzt werden soll.

Versandlabels drucken
~~~~~~~~~~~~~~~~~~~~~

Nachdem Sie die entsprechenden Einstellungen gemacht haben können Sie für Aufträge Versandscheine generieren.
Öffnen Sie dazu den gewünschten Auftrag über :menuselection:`Auftragsverwaltung --> Aufträge`
und klicken Sie im oberen Menü auf :menuselection:`Intraship` und im Untermenü auf Beauftragen.

Nachdem Sie einen Versandschein beauftragt haben und dieser erstellt wurde können Sie im oberen Menü
:menuselection:`Intraship` den Versandschein herunterladen oder direkt drucken.