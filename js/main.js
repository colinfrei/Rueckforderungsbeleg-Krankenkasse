function init() {
    var annotations = {
        'file:///Users/colinfrei/Projects/Rueckforderungsbeleg/img/rueckforderungsbeleg_1.png': [
            {
                text: "<strong>Rechnungssteller</strong><br />" +
                    "Enthält EAN-Nummer, ZSR-Nummer und Kontaktdaten zum Rechnungssteller.<br />" +
                    "Der Rechnungssteller kann gleich sein wie der Leistungserbringer, wird aber teilweise an " +
                    "spezialisierte Firmen ausgelagert.",
                geometry: {x: 0.092, y: 0.060, width: 0.800, height: 0.027}
            },
            {
                text: "<strong>Leistungserbringer</strong><br />" +
                    "Enthält EAN-Nummer, ZSR-Nummer und Kontaktdaten zum Leistungserbringer,",
                geometry: {x: 0.092, y: 0.090, width: 0.800, height: 0.022}
            },


            // Zeilen Patient
            {
                text: "Adresse",
                geometry: {x: 0.178, y: 0.117, width: 0.393, height: 0.065}
            },
            {
                text: "Geburtsdatum",
                geometry: {x: 0.178, y: 0.185, width: 0.393, height: 0.012}
            },
            {
                text: "Geschlecht",
                geometry: {x: 0.178, y: 0.199, width: 0.393, height: 0.011}
            },
            {
                text: "Unfalldatum",
                geometry: {x: 0.178, y: 0.213, width: 0.393, height: 0.011}
            },
            {
                text: "Unfall-/Verfügungsnr",
                geometry: {x: 0.178, y: 0.227, width: 0.393, height: 0.011}
            },
            {
                text: "AHV-Nr.",
                geometry: {x: 0.178, y: 0.240, width: 0.393, height: 0.011}
            },
            {
                text: "Versicherten-Nr.",
                geometry: {x: 0.178, y: 0.254, width: 0.393, height: 0.011}
            },
            {
                text: "Betriebs-Nr./Name",
                geometry: {x: 0.178, y: 0.267, width: 0.393, height: 0.011}
            },
            {
                text: "Kanton",
                geometry: {x: 0.178, y: 0.2805, width: 0.393, height: 0.011}
            },
            {
                text: "Rechnungskopie",
                geometry: {x: 0.178, y: 0.2945, width: 0.393, height: 0.011}
            },
            {
                text: "Vergütungsart",
                geometry: {x: 0.178, y: 0.3085, width: 0.393, height: 0.011}
            },
            {
                text: "Gesetz",
                geometry: {x: 0.178, y: 0.322, width: 0.393, height: 0.011}
            },
            {
                text: "Behandlungsgrund",
                geometry: {x: 0.178, y: 0.336, width: 0.393, height: 0.012}
            },
            {
                text: "Behandlung",
                geometry: {x: 0.178, y: 0.350, width: 0.393, height: 0.011}
            },
            {
                text: "Erbringungsort",
                geometry: {x: 0.178, y: 0.364, width: 0.393, height: 0.011}
            },

            /** Zeilen Patient Rechts **/
            {
                text: "EAN-Nr. der Krankenkasse des Patienten",
                geometry: {x: 0.583, y: 0.117, width: 0.35, height: 0.011}
            },
            {
                text: "Adresse für Couvert",
                geometry: {x: 0.583, y: 0.150, width: 0.35, height: 0.170}
            },
            {
                text: "Rechnungsnr.",
                geometry: {x: 0.583, y: 0.350, width: 0.35, height: 0.011}
            },
            {
                text: "Rechnungs-/Mahndatum",
                geometry: {x: 0.583, y: 0.364, width: 0.35, height: 0.011}
            },


            {
                text: "<strong>Zeile EAN-Liste:</strong><br />" +
                    "Eine oder mehrere EAN-Nummern von Personen, welche in den Spalten A und V referenziert werden.<br />" +
                    "Anhand der ersten Ziffer wird darauf referenziert, danach kommt ein Schrägstrich und dann die EAN-Nummer der Person.<br />" +
                    "http://www.medregom.admin.ch/",
                geometry: {x: 0.178, y: 0.408, width: 0.393, height: 0.011}
            },

            /** Spalten Liste **/
            {
                text: "<strong>Spalte Datum</strong><br />" +
                    "Datum der Leistungserbringung",
                geometry: {x: 0.089, y: 0.436, width: 0.080, height: 0.4065}
            },
            {
                text: "<strong>Spalte Tarif: Tarifnummer</strong><br />TODO",
                geometry: {x: 0.185, y: 0.436, width: 0.030, height: 0.4065}
            },
            {
                text: "<strong>Spalte Tarifziffer</strong><br />http://onb.tarmedsuisse.ch/",
                geometry: {x: 0.222, y: 0.436, width: 0.06, height: 0.4065}
            },
            {
                text: "<strong>Spalte Bezugsziffer</strong><br />bezieht sich auf Tarifziffer",
                geometry: {x: 0.297, y: 0.436, width: 0.06, height: 0.4065}
            },
            {
                text: "<strong>Spalte Si: Session-Nummer</strong><br />" +
                    "Wenn am gleichen Tag mehrere Arztbesuche geschahen werden diese in dieser Spalte" +
                    " durch eine aufzählende Nummer unterschieden",
                geometry: {x: 0.384, y: 0.436, width: 0.009, height: 0.4065}
            },
            {
                text: "<strong>Spalte St: Betroffene Körperhälfte</strong><br />" +
                    "Leer, <strong>L</strong> für Linke Körperhälfte oder <strong>R</strong> für Rechte Körperhälfte",
                geometry: {x: 0.402, y: 0.436, width: 0.02, height: 0.4065}
            },
            {
                text: "<strong>Spalte Anzahl</strong><br />" +
                    "Wie oft dieser Punkt verrechnet werden soll. Bei Medikamenten kann dies mehrere Packungen sein," +
                    " bei Arztleistungen bspw. mehrere 5-Minuten-Abschnitte.",
                geometry: {x: 0.435, y: 0.436, width: 0.037, height: 0.4065}
            },
            {
                text: "<strong>Spalte TP AL / Preis: Taxpunkt der ärztlichen Leistung</strong><br />" +
                    "Wieviel Taxpunkte eine Einheit dieser Leistung kostet. Siehe Erklärung Taxpunkte.",
                geometry: {x: 0.48, y: 0.436, width: 0.068, height: 0.4065}
            },
            {
                text: "<strong>Spalte f AL: Skalierungsfaktor Taxpunkte</strong><br />" +
                    "??",
                geometry: {x: 0.554, y: 0.436, width: 0.0255, height: 0.4065}
            },
            {
                text: "<strong>Spalte TPW AL: Taxpunktwert der ärztlichen Leistung</strong><br />" +
                    "",
                geometry: {x: 0.582, y: 0.436, width: 0.042, height: 0.4065}
            },
            {
                text: "<strong>Spalte TP TL: Taxpunkt der technischen Leistung</strong><br />" +
                    "",
                geometry: {x: 0.65, y: 0.436, width: 0.055, height: 0.4065}
            },
            {
                text: "<strong>Spalte f TL: Skalierungsfaktor der technischen Leistung</strong><br />" +
                    "",
                geometry: {x: 0.7105, y: 0.436, width: 0.0245, height: 0.4065}
            },
            {
                text: "<strong>Spalte TPW TL: Taxpunktwert der technischen Leistung</strong><br />" +
                    "Siehe: Taxpunktwerte (TODO)",
                geometry: {x: 0.738, y: 0.436, width: 0.042, height: 0.4065}
            },
            {
                text: "<strong>Spalte A: Ausführender Arzt</strong><br />" +
                    "Referenz auf die EAN-Nummer des Arzte (siehe Feld EAN-Liste)",
                geometry: {x: 0.789, y: 0.436, width: 0.009, height: 0.4065}
            },
            {
                text: "<strong>Spalte V: Verantwortlicher Arzt</strong><br />" +
                    "Referenz auf die EAN-Nummer des Arzte (siehe Feld EAN-Liste)",
                geometry: {x: 0.806, y: 0.436, width: 0.009, height: 0.4065}
            },
            {
                text: "<strong>Spalte P: Pflichtleistungscode</strong><br />" +
                    "0 = Pflichtleistung gemäss KVG<br />1 = Nichtpflichtleistung",
                geometry: {x: 0.823, y: 0.436, width: 0.009, height: 0.4065}
            },
            {
                text: "<strong>Spalte M: MwSt-Code</strong><br />" +
                    "Mehrwertsteuercode der Leistung",
                geometry: {x: 0.841, y: 0.436, width: 0.009, height: 0.4065}
            },
            {
                text: "<strong>Spalte Betrag: Positionsbetrag</strong><br />" +
                    "Betrag dieser Position, nicht gerundet",
                geometry: {x: 0.858, y: 0.436, width: 0.074, height: 0.4065}
            }
        ]
    };

    anno.makeAnnotatable(document.getElementById('image1'));
    for (var file in annotations) {
        annotations[file].forEach(function(annotation) {
            anno.addAnnotation({
                src: file,
                text: annotation.text,
                shapes: [{
                    type: 'rect',
                    geometry: annotation.geometry
                }],
                editable : false
            });
        });
    }
}