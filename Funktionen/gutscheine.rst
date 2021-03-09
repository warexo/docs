Gutscheine
##########
:date: 2017-10-12 12:48
:author: admin
:category: Funktionen
:slug: gutscheine
:status: published

Warexo bietet Ihnen eine umfangreiche Funktion um Gutscheine innerhalb des Systems anzulegen. Die Gutscheine können in `Angeboten <https://docs.warexo.de/auftragsbearbeitung/angebote-anlegen/>`__, im `Webshop <https://docs.warexo.de/daten-im-export/webshop/>`__ und im `Kassensystem <https://docs.warexo.de/point-of-sale-pos/einrichtung/>`__ genutzt werden. Gutscheine werden immer in Serien zusammengefasst um die Verwaltung zu vereinfachen. Um die Gutscheinverwaltung zu öffnen navigieren Sie zum Menüpunkt "Einstellungen" => "Gutscheine". Weitere Einstellungen zu Gutscheinen finden Sie in den zugehörigen `Plugin Einstellungen. <https://docs.warexo.de/plugins/gutscheine-einstellungen/>`__

Gutscheinserie erstellen
~~~~~~~~~~~~~~~~~~~~~~~~

Klicken Sie auf [wawibtn icon="plus"]Neue Gutscheinserie[/wawibtn] um eine neue Serie zu erstellen.

Titel
^^^^^

Ein Titel für diese Gutscheinserie, wird in den Exportsystemen angezeigt.

Beschreibung
^^^^^^^^^^^^

Kurze interne Beschreibung für diese Gutscheinserie

Rabatt
^^^^^^

Die Höhe des Rabatts als Dezimalzahl, gibt den Wert als Währung oder Prozentangabe an, je nach Rabattart.

Rabattart
^^^^^^^^^

abs
'''

Absoluter Rabatt - wird als Währungswert abgezogen

%
'

Prozentualer Rabatt - wird abhängig vom Warenkorbwert abgezogen

Gültig von / bis
^^^^^^^^^^^^^^^^

Erlaubt es Gutscheine nur innerhalb eines bestimmten Zeitraums gültig zu machen

Min. Einkaufswert
^^^^^^^^^^^^^^^^^

Wenn dieser Wert höher als 0 ist muss mindestens dieser Warenkorbwert erreicht sein bevor der Gutschein eingelöst werden kann.

Ist Kaufgutschein
^^^^^^^^^^^^^^^^^

Wenn der Gutschein an einen Kunden verkauft wird muss diese Funktion aktiviert sein, für einfache Rabattgutscheine nicht.

Gültig mit gleicher Serie
^^^^^^^^^^^^^^^^^^^^^^^^^

Erlaubt es mehrere Gutscheine aus dieser Serie gleichzeitig einzulösen.

Gültig mit anderer Serie
^^^^^^^^^^^^^^^^^^^^^^^^

Erlaubt es diesen Gutschein mit einem Gutschein aus einer anderen Serie zu kombinieren.

Gültig mit gleicher Serie bei einer anderen Bestellung
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Erlaubt es einen anderen Gutschein aus dieser Serie bei weiteren Bestellungen zu verwenden.

Nur einmalig berechnen
^^^^^^^^^^^^^^^^^^^^^^

Diese Einstellung hat nur Auswirkung auf Gutscheine einer Gutscheinserie, denen Artikel und/oder Kategorien zugeordnet sind. Ist das Kontrollkästchen angehakt, wird der Gutschein für nur einen der Gutscheinserie zugewiesenen Artikel eingelöst, auch wenn mehrere solcher Artikel im Warenkorb liegen. Ist diese Einstellung nicht aktiv, wird der Gutschein auf jeden dieser Artikel angerechnet. **Diese Option wirkt sich aktuell nur im Webshop aus!**

Dokument
^^^^^^^^

Bestimmt die Dokumentenvorlage die verwendet wird um diesen Gutschein auszudrucken oder per E-Mail zu versenden.

Mandanten
^^^^^^^^^

Beschränkt diese Gutscheinserie auf bestimmte Mandanten, wenn kein Mandant ausgewählt wird ist diese Gutscheinserie für alle Mandanten gültig.

Gutscheine erzeugen
~~~~~~~~~~~~~~~~~~~

Nachdem Sie die Gutscheinserie erstellt haben können Sie Gutscheine für diese Serie erzeugen. Sie können je nach Einstellung entweder zufällige Gutscheinnummern erzeugen oder immer die selbe Gutscheinnummer verwenden.

Zufallsnummern generieren
^^^^^^^^^^^^^^^^^^^^^^^^^

Wenn diese Option aktiviert ist wird für jeden Gutschein automatisch eine Alphanumerische Gutscheinnummer erzeugt. Die Länge dieser Nummer können Sie in den `Plugin Einstellungen des Gutschein Plugins <https://docs.warexo.de/plugins/gutscheine-einstellungen/>`__ beeinflussen.

Gutscheinnummer
^^^^^^^^^^^^^^^

Wenn Sie statt Zufallsnummern immer die gleiche Nummer vergeben möchten, zum Beispiel für Rabattaktionen, dann geben Sie hier eine feste Alphanumerische Nummer für alle Gutscheine ein.

Anzahl
^^^^^^

Wie viele Gutscheine mit diesem Aufruf erzeugt werden sollen.

[alert]Klicken Sie im Anschluss auf [wawibtn]Generieren[/wawibtn] und warten Sie ab bis alle Gutscheine erstellt wurden.[/alert]

Gutscheinserien auf Artikel, Kategorien, Benutzer oder Gruppen beschränken
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Sie möchten dass ein Gutschein nur für bestimmte Artikel, Kategorien, Benutzer oder Gruppen verwendet werden kann? Navigieren Sie in der jeweiligen Gutscheinserie zur Zuweisungstabelle und wählen Sie auf der linken Seite die gewünschten Einträge aus. Klicken Sie auf den Pfeil nach Rechts Button um die Zuweisung vorzunehmen. Mit dem Pfeil nach Links Button können Sie die Zuweisung von Rechts wieder entfernen.

Gutscheine exportieren
~~~~~~~~~~~~~~~~~~~~~~

Wenn Sie möchten dass Gutscheine im Webshop verwendet werden können müssen die Gutscheine und die zugehörige Serie exportiert werden. Wählen Sie im Bereich "Export" ob Sie die nur die Gutscheinserie oder die Gutscheinserie samt aller Gutscheine exportieren möchten. Nur die Gutscheinserie zu exportieren eignet sich besonders wenn Sie nur Einstellungen an der Serie verändern und diese schnell in den Shop übertragen möchten. Klicken Sie anschließend auf [wawibtn]In den Shop exportieren[/wawibtn] und warten Sie bis alle Daten übertragen wurden.

Gutscheine drucken
~~~~~~~~~~~~~~~~~~

Wenn Sie alle Gutscheine in einer Serie in Masse drucken möchten können Sie die Druckfunktion verwenden. Klicken Sie hierzu einfach auf den [wawibtn]Gutscheine drucken[/wawibtn] Button im Bereich "Drucken". Bitte beachten Sie das alle Gutscheine dieser Serie zum Drucker gesendet werden!

Gutscheine per E-Mail versenden
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Im Bereich "Versenden" können Sie die Gutscheine oder die Gutscheinserie mit nur einem klick an eine bestimmte E-Mail Adresse senden. Wählen Sie einfach was versendet werden soll und geben Sie die E-Mail Adresse ein. Klicken Sie anschließend auf [wawibtn]Gutscheine versenden[/wawibtn].

 
