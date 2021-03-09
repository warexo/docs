Lieferantenbestellungen
#######################
:date: 2017-10-10 14:49
:author: admin
:category: Variablen
:slug: lieferantenbestellungen
:status: published

| **Allgemeine** **Information**
| {{entity.orderNumber}} - Bestellnummer
| {{entity.created|d}} - Bestelldatum
| {{entity.note}} - Notiz
| {{entity.printDate|d}} - Druckdatum
| {{entity.mailDate|d}} - per Mail gesendet am

| **Angaben zum Lieferanten**
| {{entity.vendorCompany}} - Firma
| {{entity.vendorStreet}} - Straße
| {{entity.vendorZip}} - PLZ
| {{entity.vendorCity}} - Stadt
| {{entity.vendorCountry}} - Land
| {{entity.vendorPhone}} - Telefon
| {{entity.vendorFax}} - Fax
| {{entity.vendorEMail}} - E-Mail-Adresse
| {{entity.vendorContact}} - Ansprechpartner

| **Rechnungsadresse
  **\ {{entity.billingCompany}} - Firma
| {{entity.billingSalutation|trans}} - Anrede
| {{entity.billingFirstName}} - Vorname
| {{entity.billingLastName}} - Nachname
| {{entity.billingStreet}} - Straße
| {{entity.billingCity}} - Stadt
| {{entity.billingZip}} - PLZ
| {{entity.billingCountry}} - Land
| {{entity.billingVatId}} - USt.-Id.
| {{entity.billingPhone}} - Telefon
| {{entity.billingFax}} - Fax

| **Lieferadresse
  **\ {{entity.shippingCompany}} - Firma
| {{entity.shippingSalutation|trans}} - Anrede
| {{entity.shippingFirstName}} - Vorname
| {{entity.shippingLastName}} - Nachname
| {{entity.shippingStreet}} - Straße
| {{entity.shippingCity}} - Stadt
| {{entity.shippingZip}} - PLZ
| {{entity.shippingCountry}} - Land
| {{entity.shippingPhone}} - Telefon
| {{entity.shippingFax}} - Fax

| **Bestellpositionen
  **\ {{item.quantity}} - Menge
| {{item.deliveredQuantity}} - gelieferte Menge
| {{item.sort}} - Position
| {{item.ean}} - EAN
| {{item.productTitle}} - Bezeichnung
| {{item.variantTitle}} - Bezeichnung (Artikelvariante)
| {{item.productOption}} - Bezeichnung (gewählte Optionen)
| {{item.productParameter}} - Parameter
| {{item.vendorSku}} - Lief. Artikelnummer
| {{item.price}} - Einzelpreis
| {{item.vat}} - Mehrwertsteuer (%)
| {{item.note}} - Notiz
| {{item.sum}} - Gesamtsumme (Einzelpreis*Menge)
| {{item.unitquantity}} - Mengeneinheit
| {{item.offerItem}} - dazugehörige Bestellposition (OfferItem) für On-Demand-Artikel
