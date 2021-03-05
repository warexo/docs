Kunden
######
:date: 2019-03-07 09:14
:author: admin
:category: Variablen
:slug: kunden
:status: published

Stammdaten
----------

-  {{entity.customerNumber}} - Kundennummer
-  {{entity.blocked}} - Gesperrt
-  {{entity.company}} - Firma
-  {{entity.salutation|trans}} - Anrede
-  {{entity.titel}} - Titel
-  {{entity.firstname}} - Vorname
-  {{entity.lastname}} - Nachname
-  {{entity.additionalInfo}} - Zus. Info
-  {{entity.street}} - Straße
-  {{entity.zip}} - PLZ
-  {{entity.city}} - Stadt
-  {{entity.country}} - Land
-  {{entity.state}} - Bundesland
-  {{entity.vatId}} - Ust.-Id
-  {{entity.vatNumber}} - Steuernummer
-  {{entity.email}} - E-Mail-Adresse
-  {{entity.phone}} - Telefonnummer
-  {{entity.fax}} - Fax
-  {{entity.privatePhone}} - Telefon privat
-  {{entity.mobilePhone}} - Telefon mobil
-  {{entity.url}} - Webseite
-  {{entity.emailForInvoice}} - E-Mail-Adresse für Rechnungsversand
-  {{entity.birthDate|d}} - Geburtsdatum
-  {{entity.note}} - Notiz
-  {{entity.crossClients}} - Zus. Mandanten
-  {{entity.hasGroupByIdent('<Gruppe-Ident>')}} - Kunde ist zur Gruppe zugewiesen
-  {{entity.client}} - Mandant

Lieferadressen
--------------

{% for addr in entity.addresses %}...{% endfor %}

-  {{addr.defaultShippingAddress}} - An diese Adresse liefern (1/0)
-  {{addr.salutation|trans}} - Anrede
-  {{addr.title}} - Titel
-  {{addr.company}} - Firma
-  {{addr.firstname}} - Vorname
-  {{addr.lastname}} - Nachname
-  {{addr.additionalInfo}} - Zus. Info
-  {{addr.street}} - Straße
-  {{addr.zip}} - PLZ
-  {{addr.city}} - Stadt
-  {{addr.country}} - Land
-  {{addr.state}} - Bundesland
-  {{addr.phone}} - Telefon
-  {{addr.fax}} - Fax
-  

Ansprechpartner
---------------

{% for person in entity.contactPersons %}...{% endfor %}

-  {{person.salutation|trans}} - Anrede
-  {{person.firstname}} - Vorname
-  {{person.lastname}} - Nachname
-  {{person.title}} - Titel
-  {{person.email}} - E-Mail-Adresse
-  {{person.phone}} - Telefon
-  {{person.fax}} - Fax
-  {{person.mobile}} - Mob.
-  {{person.privatePhone}} - Private Telefonnummer
-  {{person.note}} - Notiz

Konditionen
-----------

-  {{entity.nettoMode}} - Netto-Modus (1/0)
-  {{entity.noTax}} - Steuerfrei (nur für Gutschriften!) (1/0)
-  {{entity.creditorAccount}} - Kreditorenkonto
-  {{entity.payment}} - Zahlungsart
-  {{entity.shipping}} - Versandart
-  {{entity.creditorPayment}} - Kreditoren-Zahlungsart
-  {{entity.language}} - Sprache
-  {{entity.bankAccountHolder}} - Kontoinhaber
-  {{entity.bankName}} - Bankname
-  {{entity.bicCode}} - BIC
-  {{entity.ibanNumber}} - IBAN
-  {{entity.sepaMandate}} - SEPA-Mandatsreferenz
-  {{entity.sepaMandateStatus}} - SEPA Mandatsstatus (once - einmalig, first - erstmalig, recurring - mehrmalig, final - letztmalig)
-  {{entity.debitNotePaymentTerm}} - Zahlungsziel Lastschrift (Tage)
-  {{entity.paypalEMail}} - PayPal E-Mail-Adresse
-  {{entity.paymentTerm}} - Zahlungsziel (Tage)
-  {{entity.cashDiscountPercent}} - Skonto %
-  {{entity.cashDiscountDays}} - Skonto Tage
-  {{entity.offerAdditionalInfo}} - Zus. Info für Angebote
-  {{entity.offerAdditionalInfo2}} - Zus. Info 2 für Angebote
-  {{entity.offerAdditionalInfo3}} - Zus. Info 3 für Angebote
-  {{entity.agentPercentFee}} - Vermittlerprovision %
-  {{entity.agentFixFee}} - Fix. Vermittlerprovision
-  {{entity.agentFeeFormula}} - Vermittlerprovision Formel
-  {{entity.boni}} - Boni

Statistik
---------

-  {{appservice.getContainer().get('customer.service').getOrdersTotalSum(entity)}} - Umsatz
-  {{appservice.getContainer().get('customer.service').getCreditBalance(entity)}} - Guthaben


