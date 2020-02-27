const dateCheck = (ev) => {
    window.location.href = 'index.html';
};

const save = (ev) => {
  var name = document.querySelector('#myName').getAttribute('value');
  alert('Event Saved');
  window.location.href = 'newFebruary.html';
};

const homepage = (ev) => {
    window.location.href = 'february.html';
};

const dateCheckF = (ev) => {
    window.location.href = 'NewEvent.html';
};

document.querySelector('.future_date').onclick = (ev) => {
    dateCheckF();
}

document.querySelector('.current_date').onclick = (ev) => {
    journal();
}

const journal = (ev) => {
    window.location.href = 'Journaling(Data_collection_form).html';
}

document.querySelector('.past_date').onclick = (ev) => {
    console.log("onclick worked")
    dateCheck();
};
