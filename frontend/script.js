const year = [
    {
        month: "January",
        id: "jan",
        nth: 1,
        days: 31,
    },
    {
        month: "February",
        id: "febr",
        nth: 2,
        days: 28,
    },
    {
        month: "March",
        id: "marc",
        nth: 3,
        days: 31,
    },
    {
        month: "April",
        id: "apr",
        nth: 4,
        days: 30,
    },
    {
        month: "May",
        id: "may",
        nth: 5,
        days: 31,
    },
    {
        month: "June",
        id: "june",
        nth: 6,
        days: 30,
    },
    {
        month: "July",
        id: "july",
        nth: 7,
        days: 31,
    },
    {
        month: "August",
        id: "aug",
        nth: 8,
        days: 31,
    },
    {
        month: "September",
        id: "sept",
        nth: 9,
        days: 30,
    },
    {
        month: "October",
        id: "oct",
        nth: 10,
        days: 31,
    },
    {
        month: "November",
        id: "nov",
        nth: 11,
        days: 30,
    },
    {
        month: "December",
        id: "dec",
        nth: 12,
        days: 31,
    },
];

const dayComponent = function (dayCount) {
    return `
        <div class="day">${dayCount}</div>
    `;
};
const monthComponent = function (nth, name, days) {
    let daysHtml = "";
    for (let i = 1; i <= days; i++) {
        daysHtml += dayComponent(i);
    }
    return `
        <section class="${name}" id="${nth}">
            <h2>${name}</h2>
            ${daysHtml}
            <div class="selected-day"></div>
        </section>
    `;
};

let monthIndex = 0;
const rootElement = document.querySelector("#root");

rootElement.insertAdjacentHTML("beforeend", `<h1>2022</h1>`);
rootElement.insertAdjacentHTML(
    "beforeend",
    `<button class="addMonth">Add month</button>`
);
rootElement.insertAdjacentHTML(
    "beforeend",
    `<button class="removeMonth">Remove month</button>`
);

const addButtonElement = rootElement.querySelector(".addMonth");
const removeButtonElement = rootElement.querySelector(".removeMonth");

addButtonElement.addEventListener("click", function () {
    if (monthIndex < 12) {
        rootElement.insertAdjacentHTML(
            "beforeend",
            monthComponent(
                year[monthIndex].nth,
                year[monthIndex].month,
                year[monthIndex].days
            )
            )
            monthIndex = 12;            
            addButtonElement.disabled = true;
    } else {
    }
    // itt jelennek meg a hónapok click hatására
    // initJanuaryEvents();  függvényt meg kell hívni miután megjelentek a hónapok

    const dayElements = document.querySelectorAll(".day");
    // clicked class hozzáadása minden day elemhez for ciklussal
    // for(let i = 0; i<dayElements.length; i++) {
    //     dayElements[i].addEventListener("click", function() {
    //         dayElements[i].classList.toggle("clicked");
    //     })
    // };
    // clicked class hozzáadása minden day elemhez forEach-el
    // dayElements.forEach(function (day) {
    //     day.addEventListener("click", function () {
    //         day.classList.toggle("clicked");
    //     });
    // });

    //egyszerre jeleníti meg az összes hónapot
     for (let monthIndex = 1; monthIndex < 12; monthIndex++) {
         rootElement.insertAdjacentHTML(
             "beforeend",
             monthComponent(
                 year[monthIndex].nth,
                 year[monthIndex].month,
                 year[monthIndex].days
             )
         );
     }
});

removeButtonElement.addEventListener("click", function () {
    if (monthIndex != 0) {
        rootElement.querySelector("section:last-of-type").remove();
        monthIndex--;
        addButtonElement.disabled = false;
    }
});
// kiszervezve az eltüntető funkció |
const hideDays = function (days) {
    for (let day of days) {
        day.classList.add("hidden");
    }
};
const showDayInfo = function (dayIndex) {
    let selectedDayInfo = document.querySelector(".January .selected-day");
    selectedDayInfo.textContent = `${dayIndex} of January`;
};

// every day selected + click eventlistenerek added (hideDays, ShowDayInfo);
// const initJanuaryEvents = function () {
//     let days = document.querySelectorAll(".January .day");
//     for (let day of days) {
//         day.addEventListener("click", function () {
//             hideDays(days);
//             showDayInfo(day.textContent);
//         });
//     }
// };
