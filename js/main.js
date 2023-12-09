// init global variables
let activeTreeVis;

let selectedTimeRange = [0, 1];
let selectedNodeID = 0;


// load data using promises
let promises = [
    d3.json("data/tree.json")
];

Promise.all(promises)
    .then(function (data){
        initTree(data)
    })
    .catch(function(err){console.log(err)
    });

function initTree(data) {
    console.log("data: ", data)
    activeTreeVis = new TreeVis();
    activeDetailVis = new DetailVis();
}

// function to