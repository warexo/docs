Warenlager
##########

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

Erstellen Sie ein neues Lager über :menuselection:`Wareneingang --> Einstellungen --> Warenlager --> Neues Lager`

Name
    Bezeichnung des Lagers

Ident.
    Internes Kürzel

Sortierung
    Lager mit höherer Sortierung werden beim Picking über verschiedene Lagerstätten hinweg bevorzugt

Typ
    Es stehen verschiedene Typen von Lagern zur Verfügung

    -  Ausstellung
    -  Handelslager
    -  Regallager
    -  Hochregallager
    -  Kommisionierlager

    .. Hint:: Bitte beachten Sie dass Lagerbestände im POS System nur aus dem Lager entnommen werden wenn es sich um ein
        Ausstellungs- oder Handelslager handelt.

Beschreibung
    Interne Informationen zu diesem Lager

Adressdaten (Firma, Vor-/Nachname etc.)
    Die Lieferadresse die bei Lieferungen an dieses Lager angegeben werden soll

Mandanten
    Welche Mandanten sollen Zugriff auf die Waren innerhalb dieses Lagers haben

Ausgeschlossene Mandanten
    Warenlager wird aus dem Mandanten komplett ausgeschlossen. Lagerbuchungen aus diesen Mandanten sind dann nicht mehr möglich.

Standard im Mandanten
    Bei neuen Lagerbuchungen in den gewählten Mandanten wird dieses Lager vorausgewählt

Benutzer
    Wenn gesetzt dürfen nur diese Benutzer auf das Lager zugreifen, ansonsten alle Benutzer

Ausgeschlossene Benutzer
    Wenn gesetzt dürfen nur diese Benutzer nicht auf das Lager zugreifen

Rollende Inventur in allen Mandanten erlauben
    Zeigt das Lager in der rollenden Inventur auch dann an wenn es nicht dem aktuellen Mandanten zugeordnet ist

Speichern Sie die Grundeinstellungen, anschließend werden die Dimensionen des Lagers definiert.

Lagerdimensionen festlegen
~~~~~~~~~~~~~~~~~~~~~~~~~~

.. Hint:: Die Dimensionen können nicht mehr geändert werden nachdem Lagerplätze angelegt wurden, entfernen Sie alle Lagerplätze um die Dimensionen zu ändern

Warexo unterstützt bis zu 4 Dimensionen die frei aktiviert und verwendet werden können. Die Dimensionen sind von der Größten zur Kleinsten wie folgt:

-  Halle
-  Regal
-  Fach
-  Ebene

Aktivieren Sie die Dimensionen die Sie verwenden möchten, geben Sie das Trennzeichen das nach der Dimension folgen soll sowie die Länge
(Anzahl von Zeichen in dieser Dimension) und die Beschriftungsart an. Ihnen wird für die eingegebenen Dimensionen
automatisch ein Beispiel für einen Lagerplatz in diesem Layout angezeigt.

Lagerplätze erstellen
~~~~~~~~~~~~~~~~~~~~~

Siehe :doc:`/Wareneingang/Einstellungen/lagerplaetze`