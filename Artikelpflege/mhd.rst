Mindesthaltbarkeitsdatum MHD
########################################

Warexo erlaubt die Verwaltung des Mindesthaltbarkeitsdatums der Artikel in Ihrem Lager.

.. Hint:: Beim :doc:`Picking </Auftragsbearbeitung/auftraege-bearbeiten>` von Artikeln haben Artikel deren MHD früher abläuft Vorrang

Artikel mit MHD einbuchen
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Geben Sie bei der :doc:`Lagerbuchung </Wareneingang/Bestand/lagerbuchungen>` beim Einbuchen des Artikels das Feld
MHD mit an. Der eingebuchte Artikel wird ab diesem Zeitpunkt als MHD Artikel geführt. Wenn gewünscht können
Sie zusätzlich im Feld Seriennummer die Chargennummer des Artikels angeben.

.. attention:: Es müssen alle im Lager befindlichen Artikel eines Typs wahlweise mit oder ohne MHD geführt werden.
    Sollten sich dieser Artikel bereits ohne MHD im Lager befinden erhalten Sie eine Fehlermeldung, buchen Sie dann
    zunächst alle Artikel des Typs ohne MHD aus.

MHD Einstellungen am Artikel
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Im Bereich :guilabel:`Erweiterte Informationen` des :doc:`Artikels </Artikelpflege/produkte/stamm>` können Sie eine
MHD Karenzzeit sowie eine MHD Pflicht definieren.

Überblick über MHD Artikel
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Unter :menuselection:`Produkte --> MHD` sehen Sie alle aktuellen Artikel im Lager mit MHD Angaben. Nutzen Sie die
:guilabel:`Erweiterte Filter` Funktion um Artikel zu finden die bald ablaufen.