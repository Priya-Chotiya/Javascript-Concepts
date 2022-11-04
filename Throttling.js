// Throttling === it will run every time execution , limit the exceution of function , as soon as delay complete it will call function
// use case resize window , scroll bar
// only make the function call after cerntain time , wait untill certain time
// Ques 1 - Create a button UI and add throttle as follow - > 
//       --> Show "Button Pressed <X> times" every time button is pressed
//       --> Increase "Triggered <Y> times" count after 800ms of throttle



var incrementButton = document.querySelector('.increment_btn');
var buttonClick = document.querySelector('.increment_pressed');
var btnTrigged = document.querySelector('.increment_count');
var buttonCount = 0;
var tiggerCount = 0;


const myThrottle = (cb , delay) =>{
    let shouldWait = false
    return function (...args){
        // already execution is started 
        if (shouldWait) return
        cb(...args)
        shouldWait = true
        setTimeout(() => {
            shouldWait = false
        } , delay)
    }
}
const throttleCount = myThrottle(() =>{
    btnTrigged.innerHTML = tiggerCount++;
} , 1500)

 
incrementButton.addEventListener('click' ,() => {
    buttonClick.innerHTML = buttonCount++;
    throttleCount()
} );