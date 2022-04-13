const questionsNL = [
    {
        question: "Hoe vaak eet u dierlijke producten?",
        explanation: "rundvlees, varkensvlees, kip, vis, eieren, zuivelproducten",
        answer1: {
            text: "Nooit",
            explanation: "veganistisch",
            value: 472
        },
        answer2: {
            text: "Niet vaak",
            explanation: "vegetarisch - eieren/zuivel, geen vlees",
            value: 708
        },
        answer3: {
            text: "Af en toe",
            explanation: "hou echt van groenten - af en toe vlees, eieren/zuivel",
            value: 1543
        },
        answer4: {
            text: "Vaak",
            explanation: "gebalanceerd vlees/groenten - vlees een paar keer per week, eieren/zuivel bijna dagelijks",
            value: 2478
        },
        answer5: {
            text: "Elke dag",
            explanation: "dagelijks vlees",
            value: 3186
        }
    },
    {
        question: "Hoeveel van het voedsel dat u eet is onbewerkt, onverpakt of lokaal geteeld?",
        explanation: "minder dan 320 kilometer verwijderd",
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
        question: "Welk woningtype beschrijft uw woning het beste?",
        explanation: "",
        answer1: {
            text: "Appartementen complex met meerdere verdiepingen",
            explanation: "",
            value: 267
        },
        answer2: {
            text: "Duplex, rijtjeshuis of gebouw met 2-4 wooneenheden",
            explanation: "",
            value: 400
        },
        answer3: {
            text: "Luxe appartementen complex",
            explanation: "",
            value: 872
        },
        answer4: {
            text: "Vrijstaand, geen stromend water",
            explanation: "",
            value: 1400
        },
        answer5: {
            text: "Vrijstaand, stromend water",
            explanation: "",
            value: 1800
        }
    },
    {
        question: "Hoeveel mensen wonen er in uw huishouden?",
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
            text: "10 of meer",
            explanation: "",
            value: 954
        }
    },
    {
        question: "Hoe groot is uw huis?",
        explanation: "in vierkante meters",
        answer1: {
            text: "Mini",
            explanation: "5-10m2",
            value: 216
        },
        answer2: {
            text: "Klein",
            explanation: "10-40m2",
            value: 324
        },
        answer3: {
            text: "Gemiddeld",
            explanation: "40-130m2",
            value: 706
        },
        answer4: {
            text: "Groot",
            explanation: "130-450m2",
            value: 1134
        },
        answer5: {
            text: "Heel groot",
            explanation: "450m2 of meer",
            value: 1458
        }
    },
    {
        question: "Hoe energiezuinig is uw huis?",
        explanation: "",
        answer1: {
            text: "Zeer inefficiënt",
            explanation: "inefficiënte verlichting, standaard apparaten",
            value: 1935
        },
        answer2: {
            text: "Onder gemiddeld",
            explanation: "inefficiënte verlichting, standaard apparaten",
            value: 1505
        },
        answer3: {
            text: "Gemiddeld",
            explanation: "moderne apparaten, klimaatregelingen",
            value: 937
        },
        answer4: {
            text: "Boven gemiddeld",
            explanation: "goed geïsoleerd, efficiënte verlichting en apparaten, zorgvuldig gebruik",
            value: 430
        },
        answer5: {
            text: "Energie-efficiënt",
            explanation: "passieve verwarming/koeling, geavanceerde temperatuurregeling en ventilatie, laag elektriciteitsverbruik",
            value: 287
        }
    },
    {
        question: "Welk percentage van de elektriciteit van uw huis komt uit hernieuwbare bronnen?",
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
        question: "Hoeveel afval genereert u in vergelijking met uw buren?",
        explanation: "",
        answer1: {
            text: "Veel minder",
            explanation: "",
            value: 93
        },
        answer2: {
            text: "Minder",
            explanation: "",
            value: 140
        },
        answer3: {
            text: "Hetzelfde",
            explanation: "",
            value: 305
        },
        answer4: {
            text: "Meer",
            explanation: "",
            value: 490
        },
        answer5: {
            text: "Veel meer",
            explanation: "",
            value: 630
        }
    },
    {
        question: "Hoe ver reist u wekelijks met de auto?",
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
            text: "500km of meer",
            explanation: "",
            value: 2754
        }
    },
    {
        question: "Als u met de auto reist, hoe vaak carpoolt u dan?",
        explanation: "",
        answer1: {
            text: "Nooit",
            explanation: "",
            value: 1265
        },
        answer2: {
            text: "Niet vaak",
            explanation: "",
            value: 984
        },
        answer3: {
            text: "Af en toe",
            explanation: "",
            value: 613
        },
        answer4: {
            text: "Vaak",
            explanation: "",
            value: 281
        },
        answer5: {
            text: "Altijd",
            explanation: "",
            value: 187
        }
    },
    {
        question: "Hoe ver reist u wekelijks met het openbaar vervoer?",
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
            text: "500km of meer",
            explanation: "",
            value: 513
        }
    },
    {
        question: "Hoeveel uur vliegt u per jaar?",
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
            text: "100 of meer",
            explanation: "",
            value: 3382
        }
    },
]

export default questionsNL;