// mood, value
// happy,1
// sad,1
// content,0
// excited,3
// angry,2

var trace = {
  y: [3, 2, 2, 5, 5, 5],
  x: [16, 17, 19, 20, 21, 22],
  type: 'scatter'
};

var data = [trace];


var layout = {
    // title: 'Hide the Plotly Logo on the Modebar',
    showlegend: false
};

Plotly.newPlot('myDiv', data, layout, {displaylogo: false});




const moodpage = (ev) => {
    console.log("mood page is called")
    window.location.href = 'weeklymood.html';

};
// Plotly.newPlot('myDiv', data, layout, {modeBarButtonsToRemove: ['2D','3D','Cartesian','Geo','Other']})
