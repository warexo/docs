Produkte
########
:date: 2019-03-05 10:22
:author: admin
:category: Variablen
:slug: twig-variablen-produkte
:status: published

Allgemeine Variablen
--------------------

-  {{product.sku}} - Artikelnummer
-  {{product.title}} - Produkttitel
-  {{product.fulltitle}} - Voller Produkttitel
-  {{product.ean}} - EAN
-  {{product.internalean}} - interne EAN
-  {{product.distean}} - Hersteller-EAN
-  {{product.mpn}} - MPN
-  {{product.longdescription}} - Langbeschreibung
-  {{product.description}} - Beschreibung
-  {{product.active}} - Aktiv (1/0)
-  {{product.children}} - Varianten
-  {{product.leafchildren}} - Endvarianten (die kaufbaren Varianten)
-  {{product.parent}} - Elternartikel
-  {{product.width}} - Breite
-  {{product.height}} - Höhe
-  {{product.length}} - Länge
-  {{product.weight}} - Gewicht
-  {{product.widthalsoatparent}} - Breite (auch vom Stammartikel vererbt)
-  {{product.heightalsoatparent}} - Höhe (auch vom Stammartikel vererbt)
-  {{product.lengthalsoatparent}} - Länge (auch vom Stammartikel vererbt)
-  {{product.weightalsoatparent}} - Gewicht (auch vom Stammartikel vererbt)
-  {{product.countryOfOrigin}} - Ursprungsland: Name
-  {{product.countryOfOrigin.isocode2}} - Ursprungsland: ISO-2
-  {{product.customsTariffNumber}} - Zolltariffnummer
-  {{product.adult}} - FSK-18 (1/0)
-  {{product.minimumAge}} - Mindestalter
-  {{product.manufacturer}} - Hersteller
-  {{product.vendor}} - Lieferant
-  {{product.nonMaterial}} - Immaterieller Artikel (1/0)
-  {{product.bulkGoods}} - Sperrgut

Preise/Steuer
-------------

-  {{product.price}} - Preis
-  {{product.getClientOrBasePrice(client())}} - Preis im aktuellen Mandanten
-  {{product.uvp}} - UVP
-  {{product.actpurchaseprice}} - Akt. EKP
-  {{product.midpurchaseprice}} - Kalk. EKP
-  `{{appservice.getContainer().get('tax.service').getProductTaxRate(product)}}` - Steuersatz %
-  {{(product.price/product.unitQuantity)|m}}{{client().defaultcurrency.isocode}}/{{product.unitName}} - Grundpreis

Staffelpreise
-------------

{% for scaleprice in product.scaleprices %}...{% endfor %}

-  {{scaleprice.amountFrom}} - Menge von
-  {{scaleprice.amountTo}} - Menge bis
-  {{scaleprice.amountTo}} - Typ (0 - abs, 1 - % Rabatt)
-  {{scaleprice.price}} - Preis
-  {{scaleprice.client}} - Mandant
-  {{scaleprice.customerGroup}} - Kundengruppe

Kundengruppenpreise
-------------------

{% for custprice in product.prices %}...{% endfor %}

-  {{custprice.price}} - Preis
-  {{custprice.customerGroup}} - Kundengruppe
-  {{custprice.salesChannel}} - Vertriebskanal
-  {{custprice.client}} - Mandant

Produktbilder
-------------

{% for picture in product.pictures %}...{% endfor %}

-  {{picture.sort}} - Sortierung
-  `<wawi-url>/{{asset('uploads/' ~ product.getActiveClient().getIdent() ~ '/' ~ picture.getSubPath() ~ '/' ~ picture.getPictureName())}}` - Bild-URL
-  

Lager
-----

-  {{product.usestock }} - Lagerverwaltung aktiv
-  {{product.availableOn|d}} - Lieferbar am
-  {{product.minDeliveryTime}} - Lieferzeit min. Wert
-  {{product.maxDeliveryTime}} - Lieferzeit max. Wert
-  {{product.deliveryTimeUnit}} - Lieferzeit Einheit (DAY, WEEK, MONTH)
-  {{product.stockbuffer}} - Pufferbestand
-  {{product.minimumStock}} - Min. Lagerbestand
-  {{product.maximumStock}} - Max. Lagerbestand
-  {{product.deliveryStatus}} - Lieferstatus (1=Standard, 2=Wenn ausverkauft offline, 3=Wenn ausverkauft nicht bestellbar, 4=Fremdlager)
-  {{product.getClientStock(client())}} - Lagerbestand im aktuellen Mandanten
-  {{product.getRealClientStock(client())}} - Lagerbestand in Vertriebskanälen (Lagerbestand - Lagerpuffer - reserv. Bestand + Bestand beim Lieferanten)
-  {{product.getClientReservedStock(client())}} - Reservierter Lagerbestand
-  {{appservice.getContainer().get('warehouse.service').getStorageLocationsOfProduct(product)}} - Lagerpätze mit diesem Produkt

Lieferantenpreise
-----------------

{% for vp in product.vendorproducts %}…{% endfor %}

-  {{vp.vendor}} - Lieferant
-  {{vp.vendor.titel}} - Lieferantenname
-  {{vp.price}} - Preis
-  {{vp.vendorSku}} - Lief. Artikelnummer
-  {{vp.vendorTitle}} - Lief. Produkttitel
-  {{vp.vendorStock}} - Lief. Lagerbestand
-  {{vp.minimumAmount}} - Mindestabnahme
-  {{vp.minimumAmountStep}} - Rundungsmenge
-  {{vp.buyingUnitName}} - Mengeneinheit (Einkauf)
-  {{vp.buying2saleUnitFormula}} - Mengeneinheit Einkauf/Verkauf Formel
-  {{vp.acceptanceRange}} - Abnahmeintervall
-  {{vp.deliveryTime}} - Lieferzeit
-  {{vp.comment}} - Kommentar
-  {{vp.dropshipping}} - Dropshipping Artikel (1/0)
-  {{vp.ondemand}} - Ondemand
-  {{vp.addToOwnStock}} - Lief. Bestand zu eigenem Lagerbestand hinzufügen

Kategorien
----------

{% for cat in product.categories %}...{% endfor %}

-  {{cat.title}} - Titel
-  {{cat.active}} - Aktiv (1/0)
-  {{cat.externalLink}} - Externe URL
-  {{cat.customsTariffNumber}} - Zolltarifnummer
-  {{cat.skipDiscounts}} - Alle neg. Nachlässe ignorieren
-  {{cat.productGroup}} - Warengruppe (1/0)
-  {{cat.parent}} - Unterkategorie von
-  {{cat.description}} - Beschreibung
-  {{cat.longdescription}} - Langbeschreibung

Attribute
---------

{% for attrvalue in product.attributevalues %}{% endfor %}

-  {{attrvalue.attribute}} - Attribut
-  {{attrvalue.attribute.title}} - Attributname
-  {{attrvalue.value}} - Attributwert

Materialien
-----------

{% for mat in product.materials %}...{% endfor %}

-  {{product.isMaterial}} - Ist Material (1/0)
-  {{product.ignoreCalcStockOnCombinedProducts}} - Materialienbestand bei der Berechnung des Lagerbestandes ignorieren
-  {{product.materialSort}} - Material Sortierung
-  {{product.materialUnit}} - Materialeinheit
-  {{product.materialInternalName}} - Material interner Name
-  {{product.materialBundleQuantity}} - Zus. Materialmenge für jede Bestell.
-  {{product.isProductionOrder}} - Fertigungsauftrag
-  {{mat.quantity}} - Anzahl
-  {{mat.materialProduct}} - Zugewiesener Material (Artikel)


