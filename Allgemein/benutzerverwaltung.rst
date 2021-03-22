Benutzerverwaltung
##################

Sie können in Warexo beliebig viele Benutzer anlegen die mit der Software arbeiten können. Sie können genau festlegen welche Funktionen die Benutzer sehen und verwenden können.

Benutzer anlegen
~~~~~~~~~~~~~~~~

Öffnen Sie den Bildschirm :menuselection:`Systemverwaltung --> Rechte --> Benutzer` und klicken Sie auf 
:guilabel:`Neuer Benutzer` um einen neuen Benutzer anzulegen.

Aktiv
^^^^^

Nur aktive Benutzer können sich in das System einloggen.

Benutzername
^^^^^^^^^^^^

Der Benutzername der für den Login verwendet wird.

E-Mail
^^^^^^

Die E-Mail Adresse an die Systemmails für diesen Benutzer versendet werden.

Passwort
^^^^^^^^

Das Passwort mit dem sich der Benutzer einloggt - bitte verwenden Sie unbedingt sichere Passwörter (länger als 8 Zeichen, Sonderzeichen + Zahlen)

Vorname / Nachname
^^^^^^^^^^^^^^^^^^

Vor- und Nachname des Benutzers

Mandanten
^^^^^^^^^

Wenn Sie einem Benutzer Mandanten zuweisen kann er sich nur in diesen Mandanten anmelden.

WAWIListener-Benutzer
^^^^^^^^^^^^^^^^^^^^^

Mit dieser Funktion können Sie WAWIListener und Systembenutzer zusammenfassen, wählen Sie einfach als welcher Benutzer der Benutzer behandelt werden soll wenn der WAWIListener sich mit dem System verbindet. Leer lassen wenn nicht benötigt.

Freischalten / Ausschließen
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Warexo erlaubt eine feingranulare Einstellung der erlaubten Funktionen für einen Benutzer. 
Sobald Sie einen der folgenden Punkte freischalten sind alle weiteren Punkte gesperrt (White-List). 
Alternativ können Sie auch einzelne Punkte ausschließen (Black-List) oder eine beide Funktionen mischen.

Seiten
~~~~~~

Seiten beziehen sich in Warexo auf vollständige Navigationspunkte die Links in der Navigationsleiste zu finden sind. 
Eine Seite wäre z.B. Aufträge (order) oder Produkte (product).

Routen
~~~~~~

Routen bezeichnen einzelne Funktionen innerhalb des Systems. 
Eine Route wäre zum Beispiel das Bearbeiten von Produkten (product) oder das Stornieren von Aufträgen (order_storno)

Widgets
~~~~~~~

Widgets sind die einzelnen Feldgruppen innerhalb der Warenwirtschaft. Dies könnte das Dashboard sein, 
die Lieferanten eines Produkts (wid-id-product-vendors). Die IDs der einzelnen Widgets finden Sie über den Browser heraus. 
Eine Anleitung hierzu stellen wir in Kürze bereit.

Gruppen
~~~~~~~

Viele Datensätze lassen sich einzelnen Gruppen zuweisen, 
hiermit können Sie zum Beispiel Aufträge zu bestimmten Sachbearbeitern zuordnen oder 
Produkte nur von bestimmten Benutzern bearbeiten lassen.

Ausschlussgruppen negieren dieses Verhalten, schließen also Benutzer explizit von Gruppen aus.

WAWIListener Benutzer
~~~~~~~~~~~~~~~~~~~~~

Wenn der Benutzer sich im WAWIListener mit einem anderen Benutzer anmelden soll tragen Sie hier den entsprechenden Benutzernamen ein.
Die Hintergrundjobs werden dann entsprechend dem anderen Benutzer zugewiesen.

WAWIListener Server
~~~~~~~~~~~~~~~~~~~

Wenn im Unternehmen ein zentraler WAWIListener Server verwendet wird geben Sie hier die entsprechende URL ein.

Bedienernummer (POS) / POS PIN
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Wenn Sie möchten dass sich ein Benutzer an der Kasse anmelden kann weisen Sie ihm eine Bedienernummer und eine POS PIN zu.
