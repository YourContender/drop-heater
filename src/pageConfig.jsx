import promoImage from "./helpers/images/course/1.png";
import firstImage from "./helpers/images/course/7.png";
import secondImage from "./helpers/images/course/3.png";
import thirdImage from "./helpers/images/course/4.png";

//Juice 
import promoFlower from "./helpers/images/flowers/11.png";
import firstFlower from "./helpers/images/flowers/5.jpg";
import secondFlower from "./helpers/images/flowers/6.jpg";
import thirdFlower from "./helpers/images/flowers/1.jpg";
import fourthFlower from "./helpers/images/flowers/4.jpg";

// thanks page
import s1 from "./helpers/images/thanks/s1.jpg";
import s2 from "./helpers/images/thanks/s2.jpg";
import s3 from "./helpers/images/thanks/s3.jpg";
import s4 from "./helpers/images/thanks/s4.jpg";
import s5 from "./helpers/images/thanks/s5.jpg";

// lamp
import l1 from "./helpers/images/thanks/lamp/l1.jpg";
import l2 from "./helpers/images/thanks/lamp/l2.jpg";
import l3 from "./helpers/images/thanks/lamp/l3.jpg";
import l4 from "./helpers/images/thanks/lamp/l4.jpg";
import l5 from "./helpers/images/thanks/lamp/l5.jpg";
import l6 from "./helpers/images/thanks/lamp/l6.jpg";

// flower lilia
import li1 from "./helpers/images/thanks/lilia/li1.jpg";
import li2 from "./helpers/images/thanks/lilia/li2.png";
import li3 from "./helpers/images/thanks/lilia/li3.png";
import li4 from "./helpers/images/thanks/lilia/li4.png";
import li5 from "./helpers/images/thanks/lilia/li5.png";

// flower troyanda
import t1 from "./helpers/images/thanks/troyanda/t1.jpg";
import t2 from "./helpers/images/thanks/troyanda/t2.jpg";
import t3 from "./helpers/images/thanks/troyanda/t3.jpg";
import t6 from "./helpers/images/thanks/troyanda/t6.jpg";
import tk1 from "./helpers/images/thanks/troyanda/tk1.jpg";
import tk2 from "./helpers/images/thanks/troyanda/tk2.jpg";
import tk3 from "./helpers/images/thanks/troyanda/tk3.jpg";

// bottle
import b1 from "./helpers/images/thanks/bottle/b1.jpg";
import b2 from "./helpers/images/thanks/bottle/b2.jpg";
import b3 from "./helpers/images/thanks/bottle/b3.jpg";
import b4 from "./helpers/images/thanks/bottle/b4.jpg";
import b5 from "./helpers/images/thanks/bottle/b5.jpg";
import b6 from "./helpers/images/thanks/bottle/b6.jpg";
import b7 from "./helpers/images/thanks/bottle/b7.jpg";
import b8 from "./helpers/images/thanks/bottle/b8.jpg";
import b9 from "./helpers/images/thanks/bottle/b9.jpg";


export const thanksPage = [
    {
        id: 1,
        images: [s1, s2, s3, s4, s5],
        title: "Електробритва портативна VGR V-353",
        old: "680",
        new: "399",
        saleMessage: "Встигни придбати за акційною ціною",
        percent: "-42%"
    },
    {
        id: 2,
        images: [l1, l2, l3, l4, l5, l6],
        title: "Лампа-пастка для комарів із зарядкою від Usb ",
        old: "799",
        new: "450",
        saleMessage: "Встигни придбати за акційною ціною",
        percent: "-44%"
    }
];

export const thanksPageForFlower = [
    {
        id: 1,
        images: [li4, li2, li3, li1, li5],
        title: "Лілія Преміум-мікс (3 цибулини)",
        old: "370",
        new: "239",
        saleMessage: "На цей товар також діє акційна пропозиція",
        percent: "1 + 1 = 3",
        details: [
            {
                t: "Кількість:",
                d: "3 цибулини"
            },
            {
                t: "Глубина посадки:",
                d: "15см"
            },
            {
                t: "Відстань:",
                d: "20 см"
            },
            {
                t: "Колір плоду:",
                d: "Різнокольоровий"
            },
            {
                t: "Висота рослини:",
                d: "90-110 см"
            },
            {
                t: "Виробник:",
                d: "Нідерланди"
            },
            {
                t: "Підходить на зріз:",
                d: "Так"
            },
            {
                t: "Початок посадки:",
                d: "березень"
            },
            {
                t: "Кінець посадки:",
                d: "грудень"
            },
            {
                t: "Період квітнення:",
                d: "червень-серпень"
            },
        ],
    },
    {
        id: 2,
        images: [t1, t2, t3, t6],
        title: "Блакитна троянда (25 г.)",
        old: "250",
        new: "150",
        saleMessage: "На цей товар також діє акційна пропозиція",
        percent: "1 + 1 = 3",
        details: [
            {
                t: "Вага насіння:",
                d: "25 г."
            },
            {
                t: "Глубина посадки:",
                d: "10см"
            },
            {
                t: "Відстань:",
                d: "40 см"
            },
            {
                t: "Колір плоду:",
                d: "Синій"
            },
            {
                t: "Виробник:",
                d: "Україна"
            },
            {
                t: "Підходить на зріз:",
                d: "Так"
            },
            {
                t: "Початок посадки:",
                d: "березень"
            },
            {
                t: "Кінець посадки:",
                d: "жовтень"
            },
            {
                t: "Період квітнення:",
                d: "травень-вересень"
            },
        ],
    },
    {
        id: 3,
        images: [tk1, tk2, tk3],
        title: "Троянда кущова (25 г.)",
        old: "250",
        new: "150",
        saleMessage: "На цей товар також діє акційна пропозиція",
        percent: "1 + 1 = 3",
        details: [
            {
                t: "Вага насіння:",
                d: "25 г."
            },
            {
                t: "Глубина посадки:",
                d: "10 см"
            },
            {
                t: "Відстань:",
                d: "40 см"
            },
            {
                t: "Колір плоду:",
                d: "Рожевий"
            },
            {
                t: "Виробник:",
                d: "Україна"
            },
            {
                t: "Підходить на зріз:",
                d: "Так"
            },
            {
                t: "Початок посадки:",
                d: "березень"
            },
            {
                t: "Кінець посадки:",
                d: "грудень"
            },
            {
                t: "Період квітнення:",
                d: "червень-жовтень"
            },
        ],
    },
    {
        id: 4,
        images: [b1, b2, b3],
        title: "Біопрепарат-інсектицид для захисту овочів та саду від шкідників",
        old: "240",
        new: "170",
        saleMessage: "Встигни придбати за акційною ціною",
        percent: "-30%",
        details: [
            {
                t: "Виробник:",
                d: "Україна"
            },
            {
                t: "Характер дії пестициду:",
                d: "Суцільний"
            },
            {
                t: "Хімічний склад:",
                d: "Неорганічні"
            },
            {
                t: "Період перших ознак дії: ",
                d: "1 - 3 дні."
            },
            {
                t: "Усунення шкідників настає через: ",
                d: "3 - 7 днів."
            },
            {
                t: "Тривалість захисної дії, в середньому: ",
                d: "14 днів"
            },
            {
                t: "Діюча речовина:",
                d: "Біологічно активні продукти"
            },
            {
                t: "Препаративна форма:",
                d: "Концентрат емульсії"
            },
        ],
    },
    {
        id: 5,
        images: [b4, b5, b6],
        title: "Засіб від бур'янів Tolimo",
        old: "240",
        new: "170",
        saleMessage: "Встигни придбати за акційною ціною",
        percent: "-30%",
        details: [
            {
                t: "Препаративна форма:",
                d: "Концентрат суспензії"
            },
            {
                t: "Хімічний склад:",
                d: "Органічний"
            },
            {
                t: "Склад:",
                d: "Триосновні карбонові кислоти, магній, хлорид натрію, кальцій, азот"
            },
            
        ],
    },
    {
        id: 6,
        images: [b7, b8, b9],
        title: "Антаут - захист від різних видів мурах",
        old: "220",
        new: "120",
        saleMessage: "Встигни придбати за акційною ціною",
        percent: "-46%",
        details: [
            {
                t: "Повне знищення колонії мурах:",
                d: "5 - 7 днів"
            },
            {
                t: "Повторне застосування:",
                d: "10 - 15 днів"
            },
            {
                t: "Для тварин та людей:",
                d: "безпечний"
            },
            {
                t: "Застосовувати:",
                d: "у місцях скупчення мурашок"
            },
            {
                t: "Пропорція:",
                d: "40 г на 40 м2"
            },
        ],

    },
]





export const pageConfig = {
    title: 'Фітнес тренажер для преса і віджимань',
    content: [
        {
            "type": "basicHeaderBlock",
            "title": "Фітнес тренажер для преса і віджимань"
        },
        {
            "type": "promoBlock",
            "src": promoImage,
            "oldPrice": "1100 грн",
            "newPrice": "799 грн",
        },

        {
            "type": "timerBlock",
            "text": `
                Цiну знижено через випуск нової моделi. Додаткову iнформацiю Вам 
                надасть наш менеджер. Ваша розмова може бути записана з метою 
                покращення якостi обслуговування.
            `
        },

        {
            "type": "descriptionBlock",
            "title": "Ти коли-небудь мріяв про кубики пресу ?",
            "subtitle": `
                Цей компактний і легкий тренажер включає в себе три ключові елементи: дошку для планки, 
                платформу для віджимань та трубчастий еспандер. Поєднуючи ці елементи, тренажер пропонує 
                повноцінне тренування, яке охоплює не тільки м'язи пресу, а й руки, ноги, грудні м'язи, сідниці та спину.
            `,
            "descrList": [
                {
                    "type": "photo",
                    "image": firstImage
                },
                {
                    "type": "text",
                    "boldType": "Дошка для планки:",
                    "descr": `
                        М'які підлокітники та нековзні ручки забезпечують комфорт та зручність під час виконання вправ. 
                        Вбудований таймер та місце для телефону дозволяють відстежувати час тренування та звільняють від необхідності контролювати час.
                    `
                },
                {
                    "type": "text",
                    "boldType": "Платформа для віджимань: ",
                    "descr": `
                        Сім різних положень для регулювання кута навантаження допомагають націлювати 
                        тренування на різні групи м'язів. Вставні ручки дозволяють легко змінювати положення, збільшуючи ефективність тренувань.
                    `,
                },
                {
                    "type": "text",
                    "boldType": "Трубчастий еспандер: ",
                    "descr": `
                        Ідеальний для тренування м'язів рук і зап'ясть. 
                        Легко приєднується до основи платформи, пропонуючи різноманітні варіанти вправ.
                    `
                },
                {
                    "type": "photo",
                    "image": secondImage
                },
                {
                    "type": "text",
                    "boldType": null,
                    "descr": `
                        Фітнес-тренажер для пресу LK202310-17 є ідеальним вибором для тих, хто прагне підтримувати фізичну форму та займатися спортом вдома.
                    `
                },
                {
                    "type": "photo",
                    "image": thirdImage
                },
                {
                    "type": "text",
                    "boldType": null,
                    "descr": `
                        Він займає мало місця, легко переміщується та зберігається, що робить його незамінним помічником 
                        у домашніх тренуваннях. На відміну від звичайного ролика для пресу, цей тренажер пропонує різноманіття 
                        вправ та можливість тренувати різні групи м'язів, роблячи кожне тренування максимально ефективним.
                    `
                },
            ]
        },

        {
            "type": "detailsBlock",
            "details": [
                {
                    "title": "Модель тренажера:",
                    "descr": "Міні тренажер; домашній; багатофункціональний"
                },
                {
                    "title": "Система навантаження:",
                    "descr": "Механічна; аеродинамічна; ремінна"
                },
                {
                    "title": "Розмір:",
                    "descr": "60 х 30 х 3 см"
                },
                {
                    "title": "Максимальна вага:",
                    "descr": "150 кг"
                },
                {
                    "title": "Матеріал:",
                    "descr": "Пластик"
                },
            ]
        },

        {
            "type": "questionBlock",
            "title": "Фітнес тренажер"
        },

        {
            "type": "orderBlock",
            "title": "Фітнес тренажер для преса і віджимань",
            "image": promoImage,
            "oldPrice": "1100 грн",
            "newPrice": "799 грн",
        }
    ],
};



// JUICE PROD
export const pageConfigJuice = {
    title: 'Тюльпан Преміум-мікс (10 шт)',
    content: [
        {
            "type": "basicHeaderBlock",
            "title": "Тюльпани Преміум-мікс (Преміум цибулини - 10 шт)"
        },
        {
            "type": "promoBlock",
            "src": promoFlower,
            "oldPrice": "379 грн",
            "newPrice": "259 грн",
        },

        {
            "type": "timerBlock",
            "text": `
                Зараз діє акційна ціна, ми хочемо подарувати вам яскраві весняні фарби за вигідною ціною! Ваша розмова може бути записана з метою 
                покращення якостi обслуговування.
            `
        },

        {
            "type": "sale",
            "text": "На кожну замовлену 2-гу упаковку з цибулинами тюльпану отримуй 3-ю у подарунок - ",
            "highlightedWord": "безкоштовно",
            "img": fourthFlower
        },

        {
            "type": "descriptionBlock",
            "title": "Тюльпани - це яскравий символ весни та тепла, який повинен бути у кожній оселі!",
            "subtitle": `
                Наші тюльпани – це відбірні сорти з великими бутонами та насиченими кольорами, які довго радуватимуть око.
            `,
            "descrList": [
                {
                    "type": "photo",
                    "image": firstFlower
                },
                {
                    "type": "text",
                    "boldType": "Свіжість гарантована",
                    "descr": `
                        Ми дбайливо відбираємо кожну цибулину, щоб ваші квіти були здоровими, міцними та довговічними.
                        Тюльпани – це символ весни, радості та оновлення. Вони стануть чудовим сюрпризом для будь-якої нагоди.
                    `
                },
                {
                    "type": "photo",
                    "image": secondFlower
                },
                {
                    "type": "text",
                    "boldType": "Тюльпани – це",
                    "descr": `
                         одна з найбільш невибагливих весняних квіток. Вони добре ростуть як у відкритому ґрунті, так і в горщиках, 
                        не вимагаючи складного догляду. Для пишного цвітіння достатньо висадити цибулини в родючий ґрунт восени, забезпечити їм 
                        помірний полив навесні та періодично удобрювати.
                    `,
                },
                
                // {
                //     "type" : "advantages",
                //     "titleAdvantage": "Переваги",
                //     "listAdvantage": ["- Потужна", "- Компактна", "- Простота керування", "- Портативний", "- Свіжий сік за лічені хвилини"]
                // },

                {
                    "type": "photo",
                    "image": thirdFlower
                },

                {
                    "type": "text",
                    "boldType": "Тюльпани –",
                    "descr": `
                          чудово підходять як для прикрашання садових ділянок, так і для вирощування в домашніх умовах. 
                         У саду їх можна висаджувати групами, створюючи яскраві квіткові композиції, або комбінувати з іншими 
                         весняними рослинами – нарцисами, гіацинтами, мускарі.
                    `,
                },

                // {
                //     "type" : "use",
                //     "titleUse": "Як використовувати ?",
                //     "listUse": [
                //         "1. Натисніть і утримуйте перемикач упродовж 2 секунд для вмикання живлення і скидання, індикатор залишиться увімкненим.",
                //         "2. Покладіть фрукт у чашку (шкірою вгору)",
                //         "3. Поверніть за годинниковою стрілкою, щоб закріпити верхню кришку.",
                //         "4. Натисніть перемикач, для початку приготування соку",
                //         "5. Зачекайте, поки не закінчеться приготування соку",
                //         "6. Помістіть чашку під носик і відкрийте затвор."
                //     ]
                // },
                
                

                // {
                //     "type" : "package",
                //     "titlePackage": "Комплектація",
                //     "listPackage": ["Електрична соковичавниця", "USB-кабель", "Заводське паковання"]
                // }
            ]
        },

        {
            "type": "detailsBlock",
            "details": [
                {
                    "title": "Кількість в упаковці: ",
                    "descr": "10 шт."
                },
                {
                    "title": "Глибина посадки: ",
                    "descr": "5-15 см"
                },
                {
                    "title": "Відстань: ",
                    "descr": "10 см"
                },
                {
                    "title": "Висота рослини:",
                    "descr": "40 см"
                },
                {
                    "title": "Потреба в сонці:",
                    "descr": "Сонце"
                },
                {
                    "title": "Тип продукту:",
                    "descr": "Цибулини"
                },
                {
                    "title": "Країна:",
                    "descr": "Нідерланди"
                },
                {
                    "title": "Підходить на зрізку:",
                    "descr": "Так"
                },
                {
                    "title": "Період цвітіння:",
                    "descr": "Травень"
                },
                {
                    "title": "Період посадки (старт):",
                    "descr": "Березень"
                },
                {
                    "title": "Період посадки (кінець):",
                    "descr": "Грудень"
                },
            ]
        },

        {
            "type": "questionBlock",
            "title": "Тюльпан Преміум-мікс (10 шт)"
        },

        {
            "type": "orderBlock",
            "title": "Тюльпани Преміум-мікс (Преміум цибулини - 10 шт)",
            "image": promoFlower,
            "oldPrice": "379 грн",
            "newPrice": "259 грн",
        }
    ],
};


