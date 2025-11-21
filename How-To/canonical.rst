Canonical & Kategorien – Warexo → Shopware 6
============================================

Dieses Dokument erklärt, wie Warexo als zentrale Kategorieverwaltung mit mehreren Shopware-Shops
zusammenarbeitet und wie Canonical-URLs im Multishop-System sauber gesetzt werden.

-----

1) Warexo – zentraler Kategoriebaum
------------------------------------

In Warexo gibt es einen **zentralen Kategoriebaum**. Ziel ist es, jede logische Kategorie,
z. B. **„T-Shirts“**, nur **einmal** anzulegen und nicht pro Shop zu duplizieren.

Vorteile:

- zentrale Pflege nur an einer Stelle
- kein Kategorien-Chaos in der WaWi
- Shops können komplett unterschiedliche Strukturen besitzen
- SEO bleibt sauber, da Canonicals klar definiert werden können

Beispiel – zentrale Kategorie in Warexo:

- Warexo-Kategorie: ``T-Shirts``

Mapping in den Shops:

- Shop A → ``/t-shirts/``
- Shop B → ``/herren/t-shirts/``
- Shop C → ``/sortiment/tops/``

Platzhalter-Grafik (später ersetzen):

    Warexo-Kategorie „T-Shirts“
        → Shop A Kategorie
        → Shop B Kategorie
        → Shop C Kategorie

-----

2) Kategorien in Shopware 6 anlegen
------------------------------------

Bevor Warexo Kategorien oder Canonicals korrekt exportieren kann, müssen die Kategorien
**zuerst in Shopware 6** existieren. Diese Kategorien bilden die Zielpunkte für das spätere
Mapping in Warexo.

Vorgehen:

1. Shopware Admin öffnen: *Kataloge → Kategorien*
2. Pro Verkaufskanal einen eigenen Kategoriebaum anlegen
3. Kategorien erstellen, z. B.:
   - ``/t-shirts/``
   - ``/damen/bestseller/``
   - ``/sale/``
   - ``/neuheiten/``
4. Im Verkaufskanal den **Kategorie-Einstiegspunkt** setzen
5. Diese Kategorien stehen später in Warexo für:
   - Kategorie-Verknüpfungen
   - Canonical Kategorie

.. image:: https://www.laden-kasse.de/media/71/58/6c/1763731259/katbaum.png?ts=1763731259
   :alt: Shopware Kategorienbaum
   :width: 600px

Merksatz
~~~~~~~~

    Shopware bildet die Struktur ab – Warexo steuert, wo der Artikel landet.

-----

3) Canonical- & Shopware-Einstellungen (Warexo → Kategorie)
------------------------------------------------------------

In jeder Warexo-Kategorie werden die Einstellungen gepflegt, die für den Export nach Shopware
relevant sind.

Wichtige Felder:

1. **Kategorie-Verknüpfungen**  
   Mapping von Warexo-Kategorie → Shopware-Kategorie je Verkaufskanal

2. **Produkt-Zuweisungs-Typ**  
   Manuell oder dynamische Produktgruppen

3. **Canonical Kategorie**  
   Die Shopware-Hauptkategorie für die Canonical-URL

4. **Canonical Verkaufskanal**  
   Der Shop, dessen Domain als Canonical verwendet wird

5. **Canonical Verhalten**  
   - **Nur Produkte** (empfohlen)
   - **Kategorien & Produkte** (Kategorie selbst wird canonical)

.. image:: https://www.laden-kasse.de/media/c1/86/44/1763731897/kateinstellungenshopware-shirt-x.png?ts=1763731897
   :alt: Canonical Einstellungen in Warexo und Shopware
   :width: 600px

Wichtig
~~~~~~~

    Erst die zentrale Kategorie in Warexo anlegen – dann Canonical & Shopware-Mappings konfigurieren.

-----

4) Warexo – Kategorie-Konfiguration (Artikelebene)
--------------------------------------------------

Auf Artikelebene wird in Warexo eingestellt:

- die **Hauptkategorie (canonical)**  
- die **weiteren Kategorien** (zusätzliche Sichtbarkeit)

### Hauptkategorie (Canonical)

Beispiel::

    /t-shirts/

Diese Kategorie definiert später die Canonical-URL in Shopware.

.. image:: https://www.laden-kasse.de/media/aa/0c/01/1763730166/hauptkat.png?ts=1763732058
   :alt: Warexo Hauptkategorie am Artikel
   :width: 600px

### Kategorien (weitere Sichtbarkeit)

Beispiel::

    /damen/bestseller/
    /sale/
    /neuheiten/

.. image:: https://www.laden-kasse.de/media/0d/75/7d/1763730321/kategorien.png?ts=1763730321
   :alt: Warexo Kategorien-Auswahl am Artikel
   :width: 600px

-----

5) Ergebnis in Shopware 6
--------------------------

Nach dem Export erscheinen Produkte:

- in allen zugewiesenen Kategorien aller Shops  
- aber mit einer **einheitlichen Canonical-URL**, die in Warexo definiert wurde  

### Shop A – Hauptshop

Domain::

    https://shop-a.de

Canonical-URL::

    https://shop-a.de/t-shirts/artikelname

Weitere sichtbare Pfade::

    https://shop-a.de/damen/bestseller/artikelname
    https://shop-a.de/sale/artikelname
    https://shop-a.de/neuheiten/artikelname

Canonical-Tag::

    <link rel="canonical" href="https://shop-a.de/t-shirts/artikelname">

### Shop B – eigene Kategorienstruktur

Domain::

    https://shop-b.de

Artikel-URLs::

    https://shop-b.de/herren/t-shirts/artikelname
    https://shop-b.de/sale/artikelname
    https://shop-b.de/angebote/neu/artikelname

Canonical-Tag::

    <link rel="canonical" href="https://shop-a.de/t-shirts/artikelname">

### Shop C – komplett anderer Kategoriebaum

Domain::

    https://shop-c.de

Artikel-URLs::

    https://shop-c.de/sortiment/tops/artikelname
    https://shop-c.de/trends/sommer/artikelname
    https://shop-c.de/neuheiten/artikelname

Canonical-Tag::

    <link rel="canonical" href="https://shop-a.de/t-shirts/artikelname">

-----

Kurzfazit
---------

- zentrale Warexo-Kategorie: z. B. ``T-Shirts``
- Mapping je Shop auf unterschiedliche Shopware-Kategorien
- Artikel bekommt eine feste Canonical-URL (Hauptshop + Hauptkategorie)
- alle anderen Shops zeigen korrekt per Canonical auf den Hauptshop
