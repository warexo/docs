Twig Template Sprache
#####################

Die Template Sprache Twig wird in vielen Bereichen von Warexo verwendet um Variable Daten in das System einzuspeisen.

.. attention:: Warexo unterstützt aktuell Twig in Version 1.24

Variablen
~~~~~~~~~

Warexo übergibt je nach Kontext verschiedenste Variablen die verwendet werden können. Variablen können Attribute oder Unterelemente enthalten die angesprochen werden können.

Sie können mit der Punkt Notation (.) oder mit der Subscript Syntax ([]) arbeiten, wir empfehlen aus Lesbarkeitsgründen die Punkt Notation zu verwenden:

.. code-block:: twig

   {{ foo.bar }}
   {{ foo['bar'] }}

Wenn das Attribut ein Sonderzeichen verwendet können Sie die *attribute* Funktion verwenden:

.. code-block:: twig

   {# Equivalent für das nicht funktionierende foo.data-foo #}
   {{ attribute(foo, 'data-foo') }}

Bitte beachten Sie dass die geschweiften Klammern nicht Teil der Variable sind sondern der Ausgabefunktion. Wenn Sie Variablen innerhalb von Tags verwenden setzen Sie keine geschweiften Klammern außen herum.

Variablen erzeugen und ändern
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Sie können Variablen einen Wert zuweisen, verwenden Sie hierzu den *set* Tag:

.. code-block:: twig

   {% set foo = 'foo' %}
   {% set foo = [1, 2] %}
   {% set foo = {'foo': 'bar'} %}

Filter
~~~~~~

Variablen können mit Filtern modifiziert werden. Filter werden von der Variable mit dem Pipe Symbol (|) abgegrenzt und können optionale Argumente haben. Filter können verkettet werden. Die Ausgabe eines Filters wird an den nächsten Filter weiter gereicht.

Dieses Beispiel entfernt alle HTML Tags aus der Variable *name* und schreibt den jeweils ersten Buchstaben groß:

.. code-block:: twig

   {{ name|striptags|title }}

Filter mit Argumenten schließen die Argumente in Hochkommas ein. Dieses Beispiel verkettet alle Elemente in der Variable *list* mit einem Komma:

.. code-block:: twig

   {{ list|join(', ') }}

Um einen Filter auf eine code Stelle anzuwenden schließen Sie diese in den *filter* Tag ein:

.. code-block:: twig

   {% filter upper %}
    Dieser Text wird in Großbuchstaben ausgegeben
   {% endfilter %}

Mehr Informationen zu Filtern finden Sie in der `Twig Dokumentation <https://twig.symfony.com/doc/2.x/filters/index.html>`__.

Verfügbare Filter
-----------------

* cursign - Währungszeichen, z.B. {{offer.currency|cursign}}
* d - Datum, z.B. {{order.created|d}}
* m - Preisformatierung, z. B. {{offer.sum|m}}
* q - Formatierung für Mengen (ganze Zahlen werden ohne Komma dargestellt), z. B. {{item.quantity|q}}
* unitname - Übersetzung der Mengeneinheit, z.B. {{product.unitName|unitname}}
* basename - PHP-Funktion basename
* json_decode - PHP-Funktion json_decode
* base64 - PHP-Funktion base64_encode
* daysago - Zeitdifferenz in Tagen. z.B. Bestellung wurde vor {{order.created|daysago}} angelegt


Funktionen
~~~~~~~~~~

Funktionen können aufgerufen werden um Inhalte zu generieren. Funktionen werden mit ihrem Namen gefolgt von runden Klammern (()) aufgerufen und können Argumente haben.

Die *range* Funktion zum Beispiel erzeugt eine Liste mit ganzzahligen Werten in einem Bereich

.. code-block:: twig

   {% for i in range(0, 3) %}
    {{ i }},
   {% endfor %}

Mehr Informationen zu den integrierten Twig Funktionen finden Sie in der `Twig Dokumentation <https://twig.symfony.com/doc/2.x/functions/index.html>`__.

Kontrollstrukturen
~~~~~~~~~~~~~~~~~~

Eine Kontrollstruktur bezeichnet alles dass den Fluss eines Programms beeinflusst - Bedingungen (z.B. *if*/*elseif*/*else*), *for*-Schleifen sowie Dinge wie Blöcke. Kontrollstrukturen sind immer in {% ... %} eingeschlossen.

Um zum Beispiel eine Liste mit Bestellnummern in der Variable *orders* zu erzeugen, verwenden Sie den *for* Tag:

.. code-block:: twig

   {% for order in orders %}
     {{ order.orderNumber }},
   {% endfor %}

Der *if* Tag kann verwendet werden um einen Ausdruck zu prüfen:

.. code-block:: twig

   {% if orders|length > 0 %}
     Folgende Bestellungen sind vorhanden:
     {% for order in orders %}
       {{ order.orderNumber }},
     {% endfor %}
   {% endif %}

Mehr Informationen zu den integrierten Twig Tags finden Sie in der `Twig Dokumentation <https://twig.symfony.com/doc/2.x/tags/index.html>`__.
