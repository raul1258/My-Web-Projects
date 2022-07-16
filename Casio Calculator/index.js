(function(){

    let display = document.querySelector('.display');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    let backspace = document.querySelector('.btn-backspace');

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;  //event target dataset
            // console.log(value);
            display.value += value;  //pushing value inside our screen
        })
    });

    equal.addEventListener('click' ,function(e){
        if(display.value === ''){  //if its empty return empty
            display.value = "";
        }else {
            let answer = eval(display.value);   // else evalute the value and return
            display.value = answer;
        }
    });

    clear.addEventListener('click', function(e){
        display.value = "";
    });

    backspace.addEventListener('click', function(e){
        // let value = e.target.dataset.num;
        // let string = display.value.toString();
        // display.value = string.substr(0, string.length - 1);
        if(display.value === ''){
            display.value = "";
        }else {
            display.value = display.value.slice(0, -1);  
        }
    });
})();