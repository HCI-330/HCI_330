
const formCheck = (ev) => {
    mood = document.querySelector('#mood').value;
    if (mood == "placeholder")
    {
        alert("Hey you forgot to input a mood!");
    }
    else
    {
        alert("Journal saved!");
        window.location.href = 'february.html';
    }
};

const homepage = (ev) => {
    window.location.href = 'february.html';
};