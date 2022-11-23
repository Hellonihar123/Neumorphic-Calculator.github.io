/*METHOD-------- 1*/
/*
let result= document.getElementById('outputscreen');

let operation =(number)=>{
    result.value+=number;
}

let Result=()=>{
    try{
        result.value=eval(result.value);

    }

    catch(err){
        alert('invalid inputs')
    }
}

function clr(){
    result.value ='';

}

function del(){
    result.value= result.value.slice(0,-1);
    } 

*/


/*METHOD -------2*/

let screen = document.getElementById('outputscreen');
buttons = document.querySelectorAll('button');
let screenValue = '';

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'CLR') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else if (buttonText == 'DEL') {
            screen.value = screen.value.slice(0,-1);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}




