Systemvoraussetzungen
#####################

-  Apache2
-  MariaDB 11+ / MySQL 5.7+ (andere Versionen können funktionieren, werden aber nicht offiziell unterstützt)
-  PHP 7.4
-  JSON
-  ctype
-  SOAP
-  date.timezone in der php.ini gesetzt
-  CURL
-  PHP exec Funktion erlaubt und folgende Programme erlaubt und im $PATH verfügbar: mysqldump, wget, unzip, rm, grep
-  `Libreoffice <https://de.libreoffice.org/>`__ (Server Installation)
-  Ausgehende FTP via TLS Verbindung (FTPS) um Bilder zwischen Warexo und Webshop zu übertragen
   Eine Übertragung via SFTP ist aus performance Gründen nicht ratsam, wir arbeiten an einer optionalen Unterstützung.
-  SSL-Zertifikat auf dem Server (z.B. Lets Encrypt).

.. attention:: LibreOffice kann auf Hetzner Managed Servern über eine Hetzner Support Ticket Anfrage installiert werden

Empfohlene Einstellungen
~~~~~~~~~~~~~~~~~~~~~~~~

-  Sie sollten das PHP-XML Modul installiert haben
-  Sie sollten mindestens version 2.6.21 von libxml haben
-  PHP tokenizer sollte aktiviert sein
-  mbstring Funktionen sollten aktiviert sein
-  iconv sollte aktiviert sein
-  POSIX sollte aktiviert sein (nur für \*nix Systeme)
-  Intl sollte installiert sein mit ICU 4+
-  APC 3.0.17+ (oder ein anderer opcode cache)
-  php.ini Einstellungen

   -  short_open_tag = Off
   -  magic_quotes_gpc = Off
   -  register_globals = Off
   -  session.auto_start = Off


Hardware Empfehlungen
~~~~~~~~~~~~~~~~~~~~~

- *CPU* 4 Kerne
- *RAM* 16 GB
- *HDD* SSD wenn möglich

.. Hint:: Wir empfehlen einen eigenen dedizierten Server für den Betrieb von Warexo zu verwenden -
    statistische Auswertungen, Massenverarbeitungen und rechenintensive Operationen können schwache Systeme verlangsamen.