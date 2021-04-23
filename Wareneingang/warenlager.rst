Warenlager
##########
:date: 2015-03-19 14:16
:author: admin
:category: Wareneingang
:slug: warenlager
:status: published
:attachments: /_static/img/screenshots/lagerdimensionen.png

Ein Neues Lager Erstellen
-------------------------

Warexo unterstützt beliebig viele Lager, beim Bestellen und Einbuchen der Ware können Sie bestimmen in welches Lager geliefert werden soll. Egal für welche Art der Lagerhaltung Sie sich entscheiden, das Erstellen des Lagers erfolgt immer nach den folgenden Schritten.

Analyse des vorhandenen Lagers
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Um im späteren Verlauf die korrekten Lagerplätze erstellen zu können ist es notwendig dass Sie eine genaue Übersicht darüber haben welche physischen Lagerplätze sich in Ihrem Lager befinden, hierzu benötigen Sie folgende Informationen:

-  In wie viele Ebenen ist das Lager unterteilt, Warexo unterstützt die folgendenden 4 Ebenen: **Halle, Regal, Fach und Ebene**
-  In welcher **Reihenfolge** werden die Plätze vom Mitarbeiter erreicht
-  **Wie groß** sind die einzelnen Plätze (L/B/H in cm) und **wie viel Kilogramm Gewicht** darf der Platz maximal halten
-  Um welche Art von Plätzen handelt es sich, Warexo unterstützt zusätzlich zu den normalen **Regalplätzen** für Ware auch **spezielle Plätze** um z.B. Wareneingänge oder Reklamationen zwischen zu lagern.
-  Wie sollen die Lagerplätze beschriftet werden: **Alphanumerisch, Numerisch, oder gemischt**

Notieren Sie sich diese Daten so genau wie nötig und fahren Sie zum nächsten Schritt fort.

Erstellen des Lagers
~~~~~~~~~~~~~~~~~~~~

Öffnen Sie den Punkt "Wareneingang" => "Warenlager" - klicken Sie auf den Button [wawibtn type="primary" icon="plus"]Neues Lager[/wawibtn]

**Name:** Bezeichnung des Lagers

**Ident.:** Internes Kürzel

**Beschreibung:** Informationen zu diesem Lager

**Typ:** Es stehen verschiedene Typen von Lagern zur Verfügung

-  Ausstellung
-  Handelslager
-  Regallager
-  Hochregallager
-  Kommisionierlager

.. Hint::Bitte beachten Sie dass Lagerbestände im POS System nur aus dem Lager entnommen werden wenn es sich um ein Ausstellungs- oder Handelslager handelt.

**Adressdaten (Firma, Vor-/Nachname etc.):** Die Lieferadresse die bei Lieferungen an dieses Lager angegeben werden soll

**Mandanten:** Welche Mandanten sollen Zugriff auf die Waren innerhalb dieses Lagers haben

Speichern Sie die Grundeinstellungen, anschließend werden die Dimensionen des Lagers definiert.

Lagerdimensionen festlegen
~~~~~~~~~~~~~~~~~~~~~~~~~~

Wie bereits erwähnt unterstützt Warexo bis zu 4 Dimensionen die frei aktiviert und verwendet werden können. Die Dimensionen sind von der Größten zur Kleinsten wie folgt:

-  Halle
-  Regal
-  Fach
-  Ebene

Aktivieren Sie die Dimensionen die Sie verwenden möchten, geben Sie das Trennzeichen das nach der Dimension folgen soll sowie die Länge (Anzahl von Zeichen in dieser Dimension) und die Beschriftungsart an. Ihnen wird für die eingegebenen Dimensionen automatisch ein Beispiel für einen Lagerplatz in diesem Layout angezeigt.

|image0|

Lagerplätze erstellen
~~~~~~~~~~~~~~~~~~~~~

Fügen Sie nun die einzelnen physischen Lagerplätze hinzu, für jeden Lagerplatz sind folgende Angaben notwendig:

| .. attention::Die Sortierung bestimmt die Reihenfolge der Artikel auf der Pickliste,
| stellen Sie sicher dass die am schnellsten erreichbaren Lagerplätze die niedrigste Sortierung erhalten.

**Sortierung:** Sollten 2 Lagerplätze mit der gleichen Ware gleich schnell erreichbar sein führt ein höherer Wert für Sortierung dazu dass dieser Platz bevorzugt wird

**Halle/Regal/Fach/Ebene**: Die Angabe der alphanumerischen/numerischen/gemischten Bezeichnung der jeweiligen Dimension- also z.B. AA oder 111 oder A1

**Status:** Der Status dieses Platzes, nur aktive Plätze werden bei der Warenentnahme berücksichtigt

**Typ:** Lagerplätze können verschiedene Typen aufweisen, ein normaler Platz in Ihrem Lager ist immer vom Typ Regalplatz. Mögliche Typen:

-  **Regalplatz:** Ein normaler Platz in Ihrem Lager in den Ware eingelagert und aus dem Ware entnommen wird
-  **Wareneingang:** Ein, meist unsortierter, Platz um Ware direkt nachdem Sie eingegangen ist zwischen zu lagern
-  **Pickwagen:** Wenn nötig können Sie die Ware nachdem Sie aus dem Lager entnommen und in den Pickwagen gelegt wurde hier markieren. Dadurch wird es möglich genau zu bestimmen wo sich die Ware während des Pickings befindet.
-  **Klärplatz:** Falls Sie Ware aus irgendeinem Grund heraus gerade nicht zuordnen oder einlagern können (Prüfung auf Reparatur, Unbekannte Reklamation etc.) können Sie die Artikel hier zwischen lagern bis geklärt ist was damit passieren soll.
-  **Boxenplatz:** Falls Sie mit der rollenden Kommissionierung arbeiten bezeichnet dieser Platz eine Box auf Ihrem rollenden Boxenwagen.
-  **Palettenplatz:** Ein Platz auf dem komplette Paletten von Produkten abgelegt werden um diese später einzeln oder in Masse in die Regalplätze zu verschieben.

**Max. Gewicht:** Das maximale Gewicht in Kilogramm dass auf diesem Platz gelagert werden darf

**Länge/Breite/Höhe:** Die Abmessungen dieses Platzes in cm

**Kommentar:** Ein interner Kommentar wenn benötigt

.. |image0| image::  /_static/img/screenshots/lagerdimensionen.png
   :class: alignnone wp-image-1905
   :width: 511px
   :height: 201px
