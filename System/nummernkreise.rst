Nummernkreise
#############

Nummernkreise werden genutzt um z.B. Rechnungsnummern nach einem bestimmten Schema innerhalb der Warenwirtschaft zu generieren. 
Sämtliche Nummernkreise werden nach folgendem Schema aufgebaut - die Aufteilung in Blöcke gilt nur zur besseren Visualisierung

:guilabel:`Präfix`:guilabel:`%1$`:guilabel:`Anzahl Nummern`:guilabel:`d`

Ein Beispiel für einen Kreis von 100000001 bis 100999999 wäre

``100%1$06d``

Bitte achten Sie darauf dass Sie zwingend das Prozentzeichen im jeweiligen Nummernkreis angeben, 
benötigen Sie kein Präfix müssen Sie trotzdem mit dem Prozentzeichen beginnen. Für sämtliche Steuerbefehle gelten die Regeln der `PHP Funktion sprintf <http://php.net/manual/de/function.sprintf.php>`__
