Canonical & Kategorien – Warexo → Shopware 6
============================================

Bevor in **Warexo** etwas zu Kategorien oder Canonicals eingestellt wird, muss klar sein:

- Warexo verwaltet Kategorien zentral
- Shopware hat pro Verkaufskanal seine eigenen Strukturen
- Die Canonical-URL entsteht durch die Kombination aus beiden

-----

1) Warexo – zentraler Kategoriebaum
------------------------------------

In Warexo gibt es einen **zentralen Kategoriebaum**.  
Ziel: Jede logische Kategorie – z. B. **„T-Shirt“** – wird **einmal** angelegt und anschließend
für jeden Shopware-Shop per Mapping zugeordnet.

Vorteile:

- keine doppelten Kategorien in Warexo
- zentrale Pflege
- konsistente Logik in allen Shops
- weniger Fehler in SEO und Struktur

**Grafik-Platzhalter (soll später ersetzt werden)**

    Warexo-Kategorie „T-Shirt“
        → Shop A Kategorie
        → Shop B Kategorie
        → Shop C Kategorie

Shops in Shopware können vollkommen unterschiedliche Kategoriebäume haben, z. B.:

- ``/herren/t-shirts/``
- ``/tops/``
- ``/sommer/neuheiten/``

Über die Kategorie-Verknüpfungen in Warexo wird definiert:

- welche Warexo-Kategorie → zu welcher Shopware-Kategorie gehört
- für welchen Verkaufskanal welches Mapping gilt
- dass die Warexo-Kategorie *nicht* dupliziert werden soll

**Best Practice**

- Möglichst wenige zentrale Kategorien in Warexo verwenden
- Unterschiede der Shops ausschließlich per Mapping lösen

-----

2) Warexo – Kategorie-Konfiguration (Artikelebene)
--------------------------------------------------

Auf Artikelebene legt Warexo fest:

- die **Hauptkategorie (Canonical)**
- die **zusätzlichen Kategorien**, in denen der Artikel angezeigt werden soll

### Hauptkategorie (Canonical)

Beispiel::

    /t-shirts/

Diese Kategorie bestimmt später die Canonical-URL in Shopware.

.. image:: https://www.laden-kasse.de/media/aa/0c/01/1763730166/hauptkat.png?ts=1763732058
   :alt: Warexo Hauptkategorie
   :width: 600px

### Kategorien-Auswahl

Weitere Kategorien für zusätzliche Sichtbarkeit, z. B.:

::

    /damen/bestseller/
    /sale/
    /neuheiten/

.. image:: https://www.laden-kasse.de/media/0d/75/7d/1763730321/kategorien.png?ts=1763730321
   :alt: Warexo Kategorien
   :width: 600px

-----

3) Kategorien in Shopware 6 anlegen
------------------------------------

Shopware erhält seine Kategorien **zuerst im System selbst**.  
Diese Kategorien sind später die Zielpunkte für das Mapping aus Warexo.

Vorgehen:

1. Shopware Admin öffnen: *Kataloge → Kategorien*
2. Für jeden Verkaufskanal einen eigenen Kategoriebaum anlegen
3. Kategorien unterhalb der Hauptnavigation erstellen:
   - ``/t-shirts/``
   - ``/damen/bestseller/``
   - ``/sale/``
   - ``/neuheiten/``
4. Im Verkaufskanal den Einstiegspunkt setzen
5. Kategorien dienen später für:
   - Kategorie-Verknüpfungen
   - Canonical Kategorie

.. image:: https://www.laden-kasse.de/media/71/58/6c/1763731259/katbaum.png?ts=1763731259
   :alt: Shopware Kategorienbaum
   :width: 600px

**Merksatz**

    Shopware bildet die Struktur ab – Warexo steuert, wo der Artikel landet.

-----

4) Canonical- & Shopware-Einstellungen (Warexo → Kategorie)
------------------------------------------------------------

Für jede Warexo-Kategorie werden anschließend die eigentlichen Shopware-relevanten Einstellungen gesetzt:

### Wichtige Felder

1. **Kategorie-Verknüpfungen**
   - Mapping von Warexo → Shopware je Verkaufskanal

2. **Produkt-Zuweisungs-Typ**
   - manuell  
   - oder dynamische Produktgruppen aus Shopware

3. **Canonical Kategorie**
   - Shopware-Kategorie, die der Hauptpfad für Canonicals ist

4. **Canonical Verkaufskanal**
   - der Shop, dessen Domain als Canonical dient

5. **Canonical Verhalten**
   - **Nur Produkte** → empfohlen  
   - **Kategorien & Produkte** → Kategorie selbst wird ebenfalls canonical

.. image:: https://www.laden-kasse.de/media/c1/86/44/1763731897/kateinstellungenshopware-shirt-x.png?ts=1763731897
   :alt: Canonical Einstellungen Shopware
   :width: 600px

**Wichtig**

    Erst die zentrale Warexo-Kategorie definieren, dann die Canonical- und Shopware-Mappings festlegen.

-----

5) Ergebnis in Shopware 6
--------------------------

Nach dem Export erscheinen Produkte:

- in allen zugewiesenen Kategorien
- mit einem sauberen Canonical-Pfad
- ohne Duplicate Content

### Beispiel – Hauptshop (Shop A)

Canonical-URL::

    https://shop-a.de/t-shirts/artikelname

Weitere sichtbare Pfade::

    https://shop-a.de/damen/bestseller/artikelname
    https://shop-a.de/sale/artikelname
    https://shop-a.de/neuheiten/artikelname

Canonical-Tag::

    <link rel="canonical" href="https://shop-a.de/t-shirts/artikelname">

### Andere Shops (B, C …)

- können abweichende Kategorien besitzen
- nutzen aber den gleichen Canonical-Pfad

-----

Kurzfazit
---------

+ Zentrale Warexo-Kategorie: z. B. **T-Shirt**
+ Je Shop Mapping per Kategorie-Verknüpfung
+ Unterschiedliche Shopware-Strukturen → kein Problem
+ Eine eindeutige Canonical-URL → keine SEO-Duplikate

