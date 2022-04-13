const questionsGE = [
    {
        question: "Wie oft essen Sie tierische Produkte?",
        explanation: "rind, schwein, huhn, fisch, eier, milchprodukte",
        answer1: {
            text: "Niemals",
            explanation: "vegan",
            value: 472
        },
        answer2: {
            text: "Selten",
            explanation: "vegetarisch - Eier/Milch, kein Fleisch",
            value: 708
        },
        answer3: {
            text: "Gelegentlich",
            explanation: "wirklich wie Gemüse - gelegentlich Fleisch, Eier/Milchprodukte",
            value: 1543
        },
        answer4: {
            text: "Oft",
            explanation: "ausgewogenes Fleisch/Gemüse - Fleisch ein paar Mal pro Woche, Eier/Milchprodukte fast täglich",
            value: 2478
        },
        answer5: {
            text: "Jeden Tag",
            explanation: "fleisch täglich",
            value: 3186
        }
    },
    {
        question: "Wie viele der Lebensmittel, die Sie essen, sind unverarbeitet, unverpackt oder lokal angebaut?",
        explanation: "weniger als 320 Kilometer entfernt",
        answer1: {
            text: "0%",
            explanation: "",
            value: 1404
        },
        answer2: {
            text: "25%",
            explanation: "",
            value: 1092
        },
        answer3: {
            text: "50%",
            explanation: "",
            value: 680
        },
        answer4: {
            text: "75%",
            explanation: "",
            value: 312
        },
        answer5: {
            text: "100%",
            explanation: "",
            value: 208
        }
    },
    {
        question: "Welche Wohnform beschreibt Ihr Zuhause am besten?",
        explanation: "",
        answer1: {
            text: "Mehrstöckige Wohnung",
            explanation: "",
            value: 267
        },
        answer2: {
            text: "Duplex, Reihenhaus oder Gebäude mit 2-4 Wohneinheiten",
            explanation: "",
            value: 400
        },
        answer3: {
            text: "Luxus-Eigentumswohnung",
            explanation: "",
            value: 872
        },
        answer4: {
            text: "Freistehend, kein fließendes Wasser",
            explanation: "",
            value: 1400
        },
        answer5: {
            text: "Freistehendes, fließendes Wasser",
            explanation: "",
            value: 1800
        }
    },
    {
        question: "Wie viele Personen leben in Ihrem Haushalt?",
        explanation: "",
        answer1: {
            text: "1",
            explanation: "",
            value: 141
        },
        answer2: {
            text: "2-3",
            explanation: "",
            value: 212
        },
        answer3: {
            text: "4-6",
            explanation: "",
            value: 462
        },
        answer4: {
            text: "7-10",
            explanation: "",
            value: 742
        },
        answer5: {
            text: "10 oder mehr",
            explanation: "",
            value: 954
        }
    },
    {
        question: "Wie groß ist Ihr Haus?",
        explanation: "in Quadratmetern",
        answer1: {
            text: "Winzig",
            explanation: "5-10m2",
            value: 216
        },
        answer2: {
            text: "Klein",
            explanation: "10-40m2",
            value: 324
        },
        answer3: {
            text: "Mittel",
            explanation: "40-130m2",
            value: 706
        },
        answer4: {
            text: "Groß",
            explanation: "130-450m2",
            value: 1134
        },
        answer5: {
            text: "Riesig",
            explanation: "450m2 oder mehr",
            value: 1458
        }
    },
    {
        question: "Wie energieeffizient ist Ihr Zuhause?",
        explanation: "",
        answer1: {
            text: "Sehr ineffizient",
            explanation: "ineffiziente Beleuchtung, Standardgeräte",
            value: 1935
        },
        answer2: {
            text: "Unterdurchschnittlich",
            explanation: "ineffiziente Beleuchtung, Standardgeräte",
            value: 1505
        },
        answer3: {
            text: "Durchschnitt",
            explanation: "moderne Geräte, Klimasteuerungen",
            value: 937
        },
        answer4: {
            text: "Überdurchschnittlich",
            explanation: "gut isolierte, effiziente Beleuchtung und Geräte, sorgfältiger Gebrauch",
            value: 430
        },
        answer5: {
            text: "Energieeffizientes Design",
            explanation: "passives Heizen/Kühlen, fortschrittliche Temperaturregelung und Belüftung, geringer Stromverbrauch",
            value: 287
        }
    },
    {
        question: "Wie viel Prozent des Stroms Ihres Hauses stammt aus erneuerbaren Quellen?",
        explanation: "",
        answer1: {
            text: "0%",
            explanation: "",
            value: 2309
        },
        answer2: {
            text: "25%",
            explanation: "",
            value: 1796
        },
        answer3: {
            text: "50%",
            explanation: "",
            value: 1118
        },
        answer4: {
            text: "75%",
            explanation: "",
            value: 513
        },
        answer5: {
            text: "100%",
            explanation: "",
            value: 342
        }
    },
    {
        question: "Wie viel Müll produzierst du im Vergleich zu deinen Nachbarn?",
        explanation: "",
        answer1: {
            text: "Viel weniger",
            explanation: "",
            value: 93
        },
        answer2: {
            text: "Weniger",
            explanation: "",
            value: 140
        },
        answer3: {
            text: "Gleich",
            explanation: "",
            value: 305
        },
        answer4: {
            text: "Mehr",
            explanation: "",
            value: 490
        },
        answer5: {
            text: "Viel mehr",
            explanation: "",
            value: 630
        }
    },
    {
        question: "Wie weit fahren Sie jede Woche mit dem Auto?",
        explanation: "",
        answer1: {
            text: "0km",
            explanation: "",
            value: 408
        },
        answer2: {
            text: "0-100km",
            explanation: "",
            value: 612
        },
        answer3: {
            text: "100-250km",
            explanation: "",
            value: 1334
        },
        answer4: {
            text: "250-500km",
            explanation: "",
            value: 2142
        },
        answer5: {
            text: "500km or more",
            explanation: "",
            value: 2754
        }
    },
    {
        question: "Wenn Sie mit dem Auto anreisen, wie oft bilden Sie Fahrgemeinschaften?",
        explanation: "",
        answer1: {
            text: "Nie",
            explanation: "",
            value: 1265
        },
        answer2: {
            text: "Selten",
            explanation: "",
            value: 984
        },
        answer3: {
            text: "Gelegentlich",
            explanation: "",
            value: 613
        },
        answer4: {
            text: "Oft",
            explanation: "",
            value: 281
        },
        answer5: {
            text: "Immer",
            explanation: "",
            value: 187
        }
    },
    {
        question: "Wie weit fahren Sie jede Woche mit öffentlichen Verkehrsmitteln?",
        explanation: "",
        answer1: {
            text: "0km",
            explanation: "",
            value: 76
        },
        answer2: {
            text: "0-100km",
            explanation: "",
            value: 114
        },
        answer3: {
            text: "100-250km",
            explanation: "",
            value: 249
        },
        answer4: {
            text: "250-500km",
            explanation: "",
            value: 399
        },
        answer5: {
            text: "500km oder mehr",
            explanation: "",
            value: 513
        }
    },
    {
        question: "Wie viele Stunden fliegen Sie jedes Jahr?",
        explanation: "",
        answer1: {
            text: "0",
            explanation: "",
            value: 237
        },
        answer2: {
            text: "0-10",
            explanation: "",
            value: 356
        },
        answer3: {
            text: "10-50",
            explanation: "",
            value: 1424
        },
        answer4: {
            text: "50-100",
            explanation: "",
            value: 2136
        },
        answer5: {
            text: "100 oder mehr",
            explanation: "",
            value: 3382
        }
    },
]

export default questionsGE;