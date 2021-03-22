Rechnungskorrekturen
####################

.. attention:: Warexo bietet derzeit keine Funktion um Endkunden Gutschriften zukommen zulassen, 
               jede Endkunden-Gutschrift in Warexo bezieht sich auf einen Auftrag und ist somit eine Rechnungskorrektur. 
               
               **Legen Sie freie Gutschriften bitte in Ihrer FiBU Software an**

Um Kunden Teile oder vollständige Positionen eines Auftrages zu erstatten bietet Warexo verschiedene Funktionen. 
Da sich Rechnungskorrekturen immer auf einen Auftrag beziehen öffnen Sie bitte zunächst 
den Auftrag :menuselection:`Auftragsverwaltung --> Aufträge`

Teilgutschrift
~~~~~~~~~~~~~~

Wählen Sie in der Liste der Auftragspositionen die Schaltfläche :guilabel:`Aktion`
geben Sie im Bereich Teilgutschrift den Brutto Betrag ein der gutgeschrieben werden soll 
und klicken Sie auf :guilabel:`Gutschreiben` 

Das System erzeugt nun automatisch eine Rechnungskorrektur, 
je nach Einstellungen der Zahlungsart wird automatisch der Betrag an den Kunden gesendet.

Position stornieren
~~~~~~~~~~~~~~~~~~~

Diese Funktion erzeugt eine vollständige Gutschrift einer Position und auch die entsprechende Rechnungskorrektur. 
Die Funktion ist analog zur Teilgutschrift über den vollständigen Betrag der Position.

Auftrag stornieren
~~~~~~~~~~~~~~~~~~

Wenn Sie den vollständigen Auftrag stornieren werden alle Positionen und alle Gebühren vollständig an den Kunden erstattet. 
Auch für diesen Vorgang wird eine Rechnungskorrektur über die vollständige Höhe des Auftragswertes erzeugt.

.. DANGER:: Eine Stornierung kann nicht rückgängig gemacht werden! 
            Hierfür muss das ursprüngliche Angebot kopiert und ein neuer Auftrag angelegt werden
