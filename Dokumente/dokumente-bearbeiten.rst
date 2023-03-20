Dokumente bearbeiten
####################

Alle Dokumentenvorlagen sind als ODT Dateien im System hinterlegt. Innerhalb der Dokumente werden `Twig Variablen <https://twig.symfony.com/doc/2.x/>`__ ausgewertet um die Daten einzufügen.
Um die Dateien zu bearbeiten wird LibreOffice benötigt, bitte stellen installieren Sie `LibreOffice <https://de.libreoffice.org/>`__ bevor Sie fortfahren.

Dokumentenvorlagen herunterladen
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Öffnen Sie :menuselection:`Einstellungen --> Vorlagen --> Dokumente` und wählen Sie das gewünschte Dokument aus.
Wählen Sie in der Aktionsleiste die Schaltfläche :menuselection:`Vorlage herunterladen` und wählen Sie den gewünschten Mandanten oder die globale Vorlage.
Wenn noch keine Vorlagen angepasst wurden können Sie nur die globale Vorlage für alle Mandanten herunterladen.

.. DANGER:: Sichern Sie sich immer eine separate Kopie der Datei bevor Sie sie anpassen, in manchen Fällen zerstören die Formatierungen von LibreOffice die Kompatibilität mit Warexo


Dokumentenvorlagen bearbeiten
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Öffnen Sie die Datei mit LibreOffice, Ihnen stehen nun alle Formatierungsmöglichkeiten offen die LibreOffice bietet.
Bitte achten Sie darauf beim Formatieren nicht aus Versehen eine Twig Variable falsch abzuändern.

Twig Variablen beginnen und enden immer mit doppelten geschweiften Klammern.
Twig Funktionen beginnen und enden immer mit einem Prozentzeichen und einer geschweiften Klammer.

Übersetzungen sind von doppelten eckigen Klammern eingeschlossen.
Sondervariablen sind speziell für die Vorlagen vorformatierte Variablen, diese sind immer in doppelten Rautezeichen eingeschlossen.

.. DANGER:: Fügen Sie keine weichen Zeilenumbrüche hinzu! Wenn Sie einen twig-Code editieren, löschen Sie anschließend die Formatierung des geänderten Texts und wenden Sie die Formatierung nochmals an!


Twig Variable
^^^^^^^^^^^^^

.. code-block:: twig

   {{ order.orderNumber }}

Twig Funktion
^^^^^^^^^^^^^

.. code-block:: twig

   {% if order.orderNumber == '1234' %}Ausgabe{% else %}alternative Ausgabe{% endif %}

Übersetzungen
^^^^^^^^^^^^^

.. code-block:: twig

   [[Text der Übersetzt wird]]

Sondervariablen
^^^^^^^^^^^^^^^

.. code-block:: twig

   ##INVOICE_DATE##

Um die Sondervariablen anzupassen (z.B. ##SUMMARY_VALUE##) kopieren Sie die Datei src/Aggrosoft/WAWIBundle/Resources/templates/template_variables.xml ins app/Resources/templates und löschen Sie alle Tags außer ##SUMMARY_VALUE## 

z.B.

```
<?xml version="1.0" encoding="UTF-8"?>
<variables>

<variable>
<name>SUMMARY_VALUE</name>
<value>{{ cost.value|m }} {{ offer.currency }}{% if order.warehouse and order.warehouse.country.currency.isocode != offer.currency %} ({{ calc_in_currency(cost.value, offer.currency, order.warehouse.country.currency.isocode, offer.currencyrate)|m }} {{order.warehouse.country.currency.isocode}}){% endif %}</value>
</variable>

</variables>
```

Weitere Informationen zu Twig finden Sie in der `Twig Dokumentation <https://twig.symfony.com/doc/2.x/>`__ und im
entsprechenden :doc:`Handbucheintrag zu Twig </Dokumente/twig/>`.

Die wichtigsten Variablen innerhalb der Dokumente sind in den einzelnen Einträgen
:doc:`im Handbuch in der Kategorie Variablen </Variablen/index/>` zu finden.

Dokumentenvorlage ersetzen
~~~~~~~~~~~~~~~~~~~~~~~~~~

Wenn Sie die Vorlage nach Ihren Wünschen angepasst haben können Sie die Datei wieder hochladen.
Klicken Sie innerhalb des Dokumentenbildschirms :menuselection:`Benutzerdefinierte Vorlagen --> Hinzufügen`.

Mandant
    Wählen Sie den Mandanten für den diese Vorlage gültig ist.

Sprache
    Wenn eine Vorlage für eine bestimmte Sprache gültig sein soll wählen Sie diese hier aus.
    Wenn Sie nichts auswählen ist die Vorlage für alle Sprachen gültig.
    Die Sprache bezieht sich auf die Sprache des Endkunden.

Bedingung
    Eine optionale Twig Bedingung ob die Vorlage verwendet werden soll, erlaubt es in bestimmten Fällen besondere Vorlagen zu verwenden.
    So könnten Sie z.B. anhand der Kundengruppe oder Zahlungsart eine andere Rechnungsvorlage verwenden.

    Es stehen Ihnen hierzu folgende Variablen in der Bedingung zur Verfügung

    entity
        Das aktuelle Objekt auf das sich dieses Dokument bezieht

    appservice
        Eine Referenz auf das appservice Objekt

Datei
    Die angepasste ODT Datei für Ihre Vorlage.

Email Datei
    Wenn gewünscht kann für E-Mails eine andere Vorlage verwendet werden.
