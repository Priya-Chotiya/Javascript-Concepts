// Debouncing And Throttling helps us to optimize certain events , 
// Debouncing === it limits the execution of function call and waits for certain amount of, time before running it again.
// when the time difference between 2 keypress event , then pnly make a function   
// use case = search in input
// Ques 1 - Create a button UI and add debounce as follow - > 
//       --> Show "Button Pressed <X> times" every time button is pressed
//       --> Increase "Triggered <Y> times" count after 800ms of debounce



var incrementButton = document.querySelector('.increment_btn');
var buttonClick = document.querySelector('.increment_pressed');
var btnTrigged = document.querySelector('.increment_count');
var buttonCount = 0;
var tiggerCount = 0;


const myDebounce = (cb , delay) =>{
    let timer;
    return function (...args){
        // when the gap between trigger button less than delay we need to clear timeout
        if(timer) clearTimeout(timer);

        timer = setTimeout(() => {
            cb(...args)

        } , delay)
    }
}
const debounceCount = myDebounce(() =>{
    btnTrigged.innerHTML = tiggerCount++;
} , 1500)

 
incrementButton.addEventListener('click' ,() => {
    buttonClick.innerHTML = buttonCount++;
    debounceCount()
} );