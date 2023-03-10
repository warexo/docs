Aufträge / Rechnungen
#####################
:date: 2017-10-10 14:47
:author: admin
:category: Variablen
:slug: auftraege
:status: published

| {{entity}}, {{order}}-Bestellung
| {{entity.offer}}, {{offer}}-Angebot

**Allgemeine Information**

-  {{order.orderNumber}}
-  {{order.created|d}} oder ##ORDER_DATE## - Bestelldatum
-  {{order.offer.estimatedShippingDate|d}} - geplantes Versanddatum
-  {{order.offer.shippingDate|d}} oder ##SHIPPING_DATE## - Versanddatum
-  {{order.offer.paidDate|date('d.m.Y H:i:s')}} oder ##PAID_DATE## - Bezahldatum
-  {{order.invoiceNumber}} - Rechnungsnummer
-  {{order.invoiceDate|d}} oder ##INVOICE_DATE##
-  {{order.creditNoteNumber}} - Gutschriftsnummer (Rechnungskorrektur)
-  {{order.creditNoteDate|d}} - Gutschriftsdatum (Rechnungskorrektur)
-  {{order.pickList.picklistNumber}} - Picklistennummer
-  {{order.offer.sum}}, {{order.offer.getSum()}} - Gesamtsumme abzgl. Stornosumme
-  {{order.offer.getSum(true)}} - Gesamtsumme inkl. Stornosumme
-  {{order.getRestSumToPaid()}} - Summe zu bezahlen
-  {{order.offer.language.title}} - Bestellsprache
-  {{order.offer.stornosum}}, {{order.offer.getStornoSum()}} - Stornosumme
-  {{order.children}} - Teillieferungen
-  {{order.parentOrder}} - Hauptbestellung (bei Teillieferung)
-  {{order.parentShippingOrder}} - Hauptlieferung (bei Sammellieferung)
-  {{order.ordersToShip}} - Bestellungen in der Sammellieferung
-  `{{order.offer.vouchers}} - eingelöste Gutscheine <https://docs.warexo.de/gutscheine-2/>`__
-  {{order.offer.salevouchers}} - generierte Kaufgutscheine
-  `{{order.offer.agentCustomer}} - Vermittler <https://docs.warexo.de/kunden/>`__
-  {{order.offer.nettoMode}} - Netto-Modus (1/0)
-  {{order.warehouse}} - Versandlager
-  {{order.saleschannel}} - Vertriebskanal
-  {{order.clerk.username}} - Auftragsbearbeiter (Benutzername)
-  {{order.clerk.firstName}} {{order.clerk.lastName}} - Auftragsbearbeiter (Vorname und Nachname)
-  {{order.offer.customerReference}} - "Ihr Zeichen" / Kundenreferenz
-  {{order.lastRemindWithRemindCosts.remindcosts|m}} - Mahngebühren
-  {{order.remind1.timestamp|d}} - Erste Mahnung: Datum
-  {{order.remind1.paymentTermDate|d}} - Erste Mahnung: Zahlungsziel
-  {{order.remind2.timestamp|d}} - Zweite Mahnung: Datum
-  {{order.remind2.paymentTermDate|d}} - Zweite Mahnung: Zahlungsziel
-  {{order.remind3.timestamp|d}} - Dritte Mahnung: Datum
-  {{order.remind3.paymentTermDate|d}} - Dritte Mahnung: Zahlungsziel

**Rechnungsadresse**

-  {{offer.billingCompany}} - Firma
-  {{offer.billingFirstName}} - Vorname
-  {{offer.billingLastName}} - Nachname
-  {{offer.billingStreet}} - Straße
-  {{offer.billingCity}} - Stadt
-  {{offer.billingZip}} - PLZ
-  {{offer.billingCountry}} - Land ({{offer.billingCountry.isocode2}} - ISO-Nummer)
-  {{offer.billingState}} - Bundesland ({{offer.billingState.isocode}} - ISO-Nummer)
-  {{offer.billingAdditionalInfo}} - Zus. Info (z.B. c/o)
-  {{offer.billingSalutation|trans}} - Anrede
-  {{offer.billingPhone}} - Telefon
-  {{offer.billingFax}} - Fax
-  {{offer.billingEMail}} - E-Mail-Adresse
-  {{offer.billingVatId}} - Ust. Id.

**Lieferadresse**

-  {{offer.shippingCompany}} - Firma
-  {{offer.shippingFirstName}} - Vorname
-  {{offer.shippingLastName}} - Nachname
-  {{offer.shippingStreet}} - Straße
-  {{offer.shippingCity}} - Stadt
-  {{offer.shippingZip}} - PLZ
-  {{offer.shippingCountry}} - Land ({{offer.shippingCountry.isocode2}} - ISO-Nummer)
-  {{offer.shippingState}} - Bundesland ({{offer.shippingState.isocode}} - ISO-Nummer)
-  {{offer.shippingAdditionalInfo}} - Zus. Info (z.B. c/o)
-  {{offer.shippingSalutation|trans}} - Anrede
-  {{offer.shippingPhone}} - Telefon
-  {{offer.shippingFax}} - Fax

**Bestellpositionen**

-  ##ITEM_AMOUNT## - bestellte Menge plus Mengeneinheit
-  {{item.quantity}} - bestellte Menge
-  ##ITEM_DESC## - Bezeichnung (Titel + gewählte Optionen usw)
-  {{item.productTitle}} - Bezeichnung
-  {{item.variantTitle}} - Artikelvariante, gewählte Optionen
-  {{item.productOption}} - gewählte Optionen
-  {{item.productParameter}} - Parameter (z.B. persparams in Oxid)
-  {{item.sku}} - Artikelnummer
-  {{item.info}} - Notiz
-  {{item.price}} - Einzelpreis
-  {{item.sum}} - Gesamtpreis
-  {{item.vat}} - Mehrwertsteuer (%)
-  {{item.weight}} - Gewicht
-  {{item.storno}} - true, wenn Bestellposition storniert ist
-  {{item.stornoPositionSum}} - gutgeschriebener Betrag
-  {{item.stornoPositionText}} - Referenz
-  `{{item.product}} - Artikel <https://docs.warexo.de/twig-variablen-produkte/>`__
