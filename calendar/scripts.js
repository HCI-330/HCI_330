const dateCheck = (ev) => {
    window.location.href = 'index.html';
};

const homepage = (ev) => {
    window.location.href = 'february.html';
};

document.querySelector('.past_date').onclick = (ev) => {
    console.log("onclick worked")
    dateCheck();
};

const dateCheckF = (ev) => {
    document.querySelector('#hidden-panel').classList.remove('hidden');
};

document.querySelector('.future_date').onclick = (ev) => {
    dateCheckF();
};

document.querySelector('.current_date').onclick = (ev) => {
    journal();
};

const journal = (ev) => {
    window.location.href = 'Journaling(Data_collection_form).html';
};

