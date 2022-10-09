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
        days: 29,
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

const rootElement = document.querySelector("#root");
rootElement.insertAdjacentHTML(
    "beforeend",
    `<div class="gridContainer container"></div>
    <div class="flexContainer container"></div>
    <div class="blockContainer container"></div>
    <div class="modal">
        <div class="modal-content">
            <p>Some text in the Modal..</p>
        </div>
    </div>`
);

const gridContainer = document.querySelector(".gridContainer");
const flexContainer = document.querySelector(".flexContainer");
const blockContainer = document.querySelector(".blockContainer");

let monthIndex = 0;
for (monthIndex; monthIndex < 6; monthIndex++) {
    gridContainer.insertAdjacentHTML(
        "beforeend",
        monthComponent(
            year[monthIndex].nth,
            year[monthIndex].month,
            year[monthIndex].days
        )
    );
}

for (monthIndex; monthIndex < 11; monthIndex++) {
    flexContainer.insertAdjacentHTML(
        "beforeend",
        monthComponent(
            year[monthIndex].nth,
            year[monthIndex].month,
            year[monthIndex].days
        )
    );
}

blockContainer.insertAdjacentHTML(
    "beforeend",
    monthComponent(
        year[monthIndex].nth,
        year[monthIndex].month,
        year[monthIndex].days
    )
);

const monthName = document.querySelectorAll("section h2");
monthName.forEach(function (month) {
    month.addEventListener("click", function () {
        month.classList.toggle("grow");
    });
});

let modal = document.querySelector(".modal");
let modalContent = document.querySelector(".modal-content");
const monthElements = document.querySelectorAll("section");
const dayElements = document.querySelectorAll(".day");

// dayElements.forEach(function (days) {
//     days.addEventListener("click", function () {
//         modal.classList.toggle("visible");
//         let string = `http://numbersapi.com/#10/date`;
//         console.log(string);
//     });
// });
function showInfo() {
    for (let i = 0; i < dayElements.length; i++) {
        dayElements[i].addEventListener("click", function () {
            modal.classList.toggle("visible");
                fetch(`http://numbersapi.com/1/${i+1}/date`)
                .then((response) => response.text())
                .then((data) => {
                    modalContent.innerHTML = data;
                });
            console.log(i);
        });
    }
}
showInfo();
window.onclick = function (event) {
    if (event.target == modal) {
        modal.classList.toggle("visible");
    }
};
