Retouren
########

Retouren zu Bestellungen lassen sich mit wenigen Klicks in Warexo verwalten. 
Sie können die Ware als Defekt markieren und ersetzen oder andere Aktionen ausführen.

Retouren verarbeiten
~~~~~~~~~~~~~~~~~~~~

Öffnen Sie den Auftrag zu dem Sie eine Retoure erhalten haben über :menuselection:`Auftragsverwaltung --> Aufträge` 
und klicken Sie die Schaltfläche :guilabel:`Retoure` in der Aktionsleiste.

Artikel manuell wählen
^^^^^^^^^^^^^^^^^^^^^^

Klicken Sie unter |table| :menuselection:`Versendete Artikel` auf den Button :guilabel:`Hinzufügen`  
der Artikel wird in |table| :menuselection:`Zurückgesandte Artikel` übernommen. 

Wenn Sie mehr als einen Artikel zurück nehmen möchten klicken Sie den Button mehrmals.


Artikel scannen
^^^^^^^^^^^^^^^

Klicken Sie in das Feld :guilabel:`EAN Scan`, Scannen Sie die retournierten Artikel nacheinander ab. 
Die Artikel werden in |table| :menuselection:`Zurückgesandte Artikel` übernommen.

Retourengrund und Maßnahme wählen
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Wählen Sie für jeden Artikel den Retourengrund und eine geeignete Maßnahme. 

.. hint:: Die zur Verfügung stehenden Gründe können Sie unter :menuselection:`Einstellungen --> Taxonomie --> Retourengründe` definieren.  

Wählen Sie je nach Maßnahme das passende Lager für die retournierte Ware und den eventuell neu gewünschten Artikel.

Wenn Sie alle Daten eingegeben haben klicken Sie auf :guilabel:`Retoure buchen` um den Vorgang abzuschließen.

Retourenmaßnahmen
~~~~~~~~~~~~~~~~~~~~

Folgende Retourenmaßnahmen stehen zur Verfügung.

Ins Lager einbuchen, mit Gutschrift
    Der Artikel wird zurück in das Lager gebucht, für den Kunden wird eine Gutschrift erzeugt.

Ins Lager einbuchen, keine Gutschrift
    Der Artikel wird zurück in das Lager gebucht, der Kunde erhält keine Gutschrift.

Gutschrift, keine Lagerbuchung
    Der Artikel wird nicht in das Lager gebucht, der Kunde erhält eine Gutschrift.

Entsorgung, mit Gutschrift
    Der Artikel wird nicht in das Lager gebucht, der Kunde erhält eine Gutschrift.

Entsorgung, keine Gutschrift
    Der Artikel wird nicht in das Lager gebucht, der Kunde erhält keine Gutschrift.

Umtausch
    Der Artikel wird zurück in das Lager gebucht, der Kunde erhält einen anderen Artikel.
    Wenn Sie diese Maßnahme wählen erscheint automatisch eine Wahlmöglichkeit für den Tauschartikel.

Entsorgung, verschobener Umtausch
    Der Artikel wird nicht in das Lager gebucht, es wird ein neuer Auftrag erzeugt. In diesem
    Auftrag werden alle Positionen und Kosten auf 0 gesetzt. Der Auftrag kann dann normal bearbeitet
    werden um den Umtausch zu regeln.

Entsorgung, sofortiger Umtausch
    Der Artikel wird nicht in das Lager gebucht,  der Kunde erhält einen anderen Artikel.
    Wenn Sie diese Maßnahme wählen erscheint automatisch eine Wahlmöglichkeit für den Tauschartikel.

Service / Reparatur
    Diese Funktion ist experimentell, bitte verwenden Sie diese Funktion nicht ohne weitere Absprache mit uns.

Maßnahmentabelle
~~~~~~~~~~~~~~~~~~~~

+---------------------------------------+----------+------------+----------+-----------------+
| Maßnahme                              |  Buchung | Gutschrift | Umtausch | Neue Bestellung |
+---------------------------------------+----------+------------+----------+-----------------+
| Ins Lager einbuchen, mit Gutschrift   |  |check| |   |check|  | |remove| |     |remove|    |
+---------------------------------------+----------+------------+----------+-----------------+
| Ins Lager einbuchen, keine Gutschrift |  |check| |  |remove|  | |remove| |     |remove|    |
+---------------------------------------+----------+------------+----------+-----------------+
| Gutschrift, keine Lagerbuchung        | |remove| |   |check|  | |remove| |     |remove|    |
+---------------------------------------+----------+------------+----------+-----------------+
| Entsorgung, mit Gutschrift            | |remove| |   |check|  | |remove| |     |remove|    |
+---------------------------------------+----------+------------+----------+-----------------+
| Entsorgung, keine Gutschrift          | |remove| |  |remove|  | |remove| |     |remove|    |
+---------------------------------------+----------+------------+----------+-----------------+
| Umtausch                              |  |check| |  |remove|  |  |check| |     |remove|    |
+---------------------------------------+----------+------------+----------+-----------------+
| Entsorgung, verschobener Umtausch     | |remove| |  |remove|  | |remove| |     |check|     |
+---------------------------------------+----------+------------+----------+-----------------+
| Entsorgung, sofortiger Umtausch       | |remove| |  |remove|  |  |check| |     |remove|    |
+---------------------------------------+----------+------------+----------+-----------------+