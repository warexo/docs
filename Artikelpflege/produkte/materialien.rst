Materialien / Zubehör
^^^^^^^^^^^^^^^^^^^^^

Zubehör
~~~~~~~~~~~~~~~~~~~

Mit der Zubehör Funktion können Sie Artikel definieren die automatisch im POS Kassensystem zusätzlich in den Warenkorb
gelegt werden.

Anzahl
    Wie viel Stück dieses Artikels werden in den Warenkorb mit abgelegt

Zubehör
    Der Artikel der mit in den Warenkorb gelegt wird

Cart type
    Bestimmt das Verhalten des Zubehörs

    in den Warenkorb legen (Anzahl * Bestellte Menge)
        Legt den Zubehör Artikel anhand des Felds `Anzahl` multipliziert mit der Warenkorb Menge ab

    in den Warenkorb legen
        Legt den Zubehör Artikel anhand des Felds `Anzahl` im Warenkorb ab

    in den Warenkorb legen (multiplizieren)
        Legt den Zubehör Artikel multipliziert mit der Warenkorb Menge ab

    nur anzeigen
        Zeigt den Artikel an, addiert jedoch nicht den Preis

Preis
    Aufpreis für den Zubehörartikel

Min./Max. Einkaufsmenge
    Das Zubehör wird nur hinzugefügt wenn die Warenkorb Menge zwischen diesen Werten liegt

Aktiv von/bis
    Das Zubehör wird nur innerhalb dieses Zeitraums hinzugefügt

Materialien
~~~~~~~~~~~~~~~~~~~

Das Materialsystem erlaubt es Ihnen sog. Stücklisten Artikel zu erstellen. Hiermit lassen sich komfortabel
Artikelbundles erstellen. So könnte ein Materialartikel z.B. eine Geschenkbox aus verschiedenen Artikeln oder
einen konfigurierten Computer darstellen.

Die Preise des Materialartikels können frei definiert werden oder aus den Materialien mit der Funktion
`Artikelpreis aus Materialien berechnen` direkt vererbt werden.

.. Hint:: Materialartikel haben keinen eigenen Lagerbestand, der Bestand ergibt sich aus den einzelnen Materialien.
    Der Lagerbestand wird immer aus dem Material mit dem niedrigsten Lagerbestand ermittelt.

    Beim Picking der Artikel werden die einzelnen Materialien kommissioniert und dann zum eigentlichen Bundle zusammengesetzt.

Ist Material
    Nur Artikel mit dieser Kennzeichnung können als Teile eines Materialartikels verwendet werden. Wenn diese Einstellung
    aktiv können keine weiteren Materialien zugeordnet werden. Verschachtelte Stücklisten sind nicht möglich.

Materialienbestand bei Berechnung des Lagerbestandes ignorieren
    Wenn diese Einstellung aktiviert ist, wird das Material aus der Berechnung des Lagerbestandes ausgeschlossen

Sortierung
    Die Materialien des Artikels werden aufsteigend anhand dieses Werts auf z.B. Picklisten sortiert

Materialeinheit
    Mengeneinheit für dieses Material z.B. :guilabel:`Stück` oder :guilabel:`Kg`

Material interner Name
    Wenn gesetzt wird auf der Packliste dieser Titel statt dem Artikeltitel angezeigt

.. sidebar:: Twig Kontext
    :class: floating

    .. list-table::
       :widths: 50 50
       :header-rows: 1

       * - Variable
         - Beschreibung
       * - appservice
         - AppService
       * - offer
         - Angebot

Zusätzliche Materialmenge für jede Bestellung
    Definiert die Menge dieses Artikels die zu jeder Bestellung (unabhängig von den Artikel oder Einstellungen) hinzugefügt
    wird. Kann über einen :doc:`Twig Ausdruck </Dokumente/twig>` dynamisch ermittelt werden.

.. Hint:: Über die zusätzliche Materialmenge für jede Bestellung können Sie einfach Zugabeartikel definieren die zu jeder
    Bestellung beigelegt werden sollen. Diese tauchen auf den Picklisten auf, jedoch nicht in den Dokumenten die dem Kunden
    zugehen. Dies könnten Anleitungen, Gratiszugaben etc. sein.

    **Diese Einstellung wirkt sich global aus, unabhängig von der Materialzuweisung**

Fertigungsauftrag
    Diese Funktion ist experimentell, nicht aktivieren

Materialien
    Fügen Sie hier die einzelnen Stücke hinzu aus denen der Artikel bestehen soll. Es können nur Artikel gewählt werden
    bei denen `Ist Material` aktiviert wurde. Füllen Sie diese Option bei Artikel mit der Option `Ist Material` nicht aus.
    Verschachtelte Materialien werden nicht unterstützt.

Materialien aus Optionen
    Sollte der Artikel :doc:`Optionen </Artikelpflege/optionen>` haben denen Materialien zugeordnet wurden,
    können Sie hier die Menge der Materialien pro Optionsauswahl festlegen.
    Hiermit wird das Feld Menge im Material der Option überschrieben.

