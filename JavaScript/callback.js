// function passed to other functio as a parameter is caled as a callback function
// function wchich acepts other function as parametwer and return another function as a result is called higher order function
console.log("callback and higher order function");

function getCapture(camera){

    camera();


}

getCapture(function(){
    console.log("this is a callback function");
});

function returnFunc(){
    return function(){
        console.log("this is a higher order function");
    }
}

const higherOrderFunc = returnFunc();

higherOrderFunc();

returnFunc()();


