
const nextMonth = (ev) => {
    window.location.href = 'november.html';
};

document.querySelector('.next').onclick = (ev) => {
    console.log("onclick worked")
    nextMonth();
};

const prevMonth = (ev) => {
    window.location.href = 'september.html';
};

document.querySelector('.prev').onclick = (ev) => {
    console.log("onclick worked")
    prevMonth();
}
