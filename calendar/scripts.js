const dateCheck = (ev) => {
    window.location.href = 'index.html';
};

const save = (ev) => {
  var name = document.querySelector('#myName').getAttribute('value');
  console.log(name);
  alert('Event Saved');
  window.location.href = 'newFebruary.html';
};

const homepage = (ev) => {
    window.location.href = 'february.html';
};

const dateCheckF = (ev) => {
    console.log("worked")
    document.querySelector('#hidden-panel').classList.remove('hidden');
};

document.querySelector('#addEvent26').onclick = (ev) => {
    dateCheckF();
};

document.querySelector('.current_date').onclick = (ev) => {
    journal();
};

const journal = (ev) => {
    window.location.href = 'Journaling(Data_collection_form).html';
};

const moodCheckF = (ev) => {
    window.location.href = 'weeklymood.html';
};
document.querySelector('.week').onclick = (ev) => {
    moodCheckF();
};

document.querySelector('.past_date').onclick = (ev) => {
    dateCheck();
};