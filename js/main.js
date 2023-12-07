// init global variables
let activeTreeVis;

let selectedTimeRange = [];


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
}

// function to