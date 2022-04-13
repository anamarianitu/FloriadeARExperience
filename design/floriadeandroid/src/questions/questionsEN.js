const questionsEN = [
    {
        question: "How often do you eat animal-based products?",
        explanation: "beef, pork, chicken, fish, eggs, dairy products",
        answer1: {
            text: "Never",
            explanation: "vegan",
            value: 472
        },
        answer2: {
            text: "Infrequently",
            explanation: "vegetarian - eggs/dairy, no meat",
            value: 708
        },
        answer3: {
            text: "Occasionally",
            explanation: "really like veggies - occasional meat, eggs/dairy",
            value: 1543
        },
        answer4: {
            text: "Often",
            explanation: "balanced meat/veggies - meat a few times a week, eggs/dairy almost daily",
            value: 2478
        },
        answer5: {
            text: "Every day",
            explanation: "meat daily",
            value: 3186
        }
    },
    {
        question: "How much of the food that you eat is unprocessed, unpackaged or locally grown?",
        explanation: "less than 320 kilometers away",
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
        question: "Which housing type best describes your home?",
        explanation: "",
        answer1: {
            text: "multi-storey apartment",
            explanation: "",
            value: 267
        },
        answer2: {
            text: "Duplex, row house or building with 2-4 housing units",
            explanation: "",
            value: 400
        },
        answer3: {
            text: "Luxury condominium",
            explanation: "",
            value: 872
        },
        answer4: {
            text: "Freestanding, no running water",
            explanation: "",
            value: 1400
        },
        answer5: {
            text: "Freestanding, running water",
            explanation: "",
            value: 1800
        }
    },
    {
        question: "How many people live in your household?",
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
            text: "10 or more",
            explanation: "",
            value: 954
        }
    },
    {
        question: "What is the size of your home?",
        explanation: "in square meters",
        answer1: {
            text: "Tiny",
            explanation: "5-10m2",
            value: 216
        },
        answer2: {
            text: "Small",
            explanation: "10-40m2",
            value: 324
        },
        answer3: {
            text: "Medium",
            explanation: "40-130m2",
            value: 706
        },
        answer4: {
            text: "Large",
            explanation: "130-450m2",
            value: 1134
        },
        answer5: {
            text: "Huge",
            explanation: "450m2 or more",
            value: 1458
        }
    },
    {
        question: "How energy efficient is your home?",
        explanation: "",
        answer1: {
            text: "Very inefficient",
            explanation: "inefficient lighting, standard appliances",
            value: 1935
        },
        answer2: {
            text: "Below average",
            explanation: "efficient lighting, standard appliances",
            value: 1505
        },
        answer3: {
            text: "Average",
            explanation: "modern appliances, climate controls",
            value: 937
        },
        answer4: {
            text: "Above average",
            explanation: "well insulated, efficient lighting and appliances, careful use",
            value: 430
        },
        answer5: {
            text: "Energy efficient design",
            explanation: "passive heating/cooling, advanced temperature control and ventilation, low electricity use",
            value: 287
        }
    },
    {
        question: "What percentage of your home's electricity comes from renewable sources?",
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
        question: "Compared to your neighbors, how much trash do you generate?",
        explanation: "",
        answer1: {
            text: "Much less",
            explanation: "",
            value: 93
        },
        answer2: {
            text: "Less",
            explanation: "",
            value: 140
        },
        answer3: {
            text: "Same",
            explanation: "",
            value: 305
        },
        answer4: {
            text: "More",
            explanation: "",
            value: 490
        },
        answer5: {
            text: "Much more",
            explanation: "",
            value: 630
        }
    },
    {
        question: "How far do you travel by car each week?",
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
        question: "When you travel by car, how often do you carpool?",
        explanation: "",
        answer1: {
            text: "Never",
            explanation: "",
            value: 1265
        },
        answer2: {
            text: "Infrequently",
            explanation: "",
            value: 984
        },
        answer3: {
            text: "Occasionally",
            explanation: "",
            value: 613
        },
        answer4: {
            text: "Often",
            explanation: "",
            value: 281
        },
        answer5: {
            text: "Always",
            explanation: "",
            value: 187
        }
    },
    {
        question: "How far do you travel on public transportation each week?",
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
            text: "500km or more",
            explanation: "",
            value: 513
        }
    },
    {
        question: "How many hours do you fly each year?",
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
            text: "100 or more",
            explanation: "",
            value: 3382
        }
    },
]

export default questionsEN;