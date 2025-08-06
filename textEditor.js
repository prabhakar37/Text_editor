// MAKE upperCase or lowerCase button act as SUBMIt + CONVERT button 

let rawData = document.getElementById('input-field');
let buttons = document.querySelectorAll('.btn');
let output = document.getElementById('output-field')

buttons.forEach(function(button){
    // let data = rawData.value;
    button.addEventListener('click', function(){
        let data = rawData.value;
        // console.log(data);
        rawData.value = '';

        // console.log(button.classList)   // return DOMTokenList(2)
        // now check which button is clicked;
        let clickedBtn = button.classList[1];   

        if(clickedBtn === 'uppercase'){
            output.innerText = data.toUpperCase();
        }
        else if(clickedBtn === 'lowercase'){
            output.innerText = data.toLowerCase();
        }
        else if(clickedBtn === 'capitalize'){
            let capData ='';
            for(let i=0; i<data.length; i++){
                if(data.charAt(i-1) == '' || data.charAt(i-1) == ' '){
                    capData = capData + data.charAt(i).toUpperCase()
                }
                else{
                    capData = capData + data.charAt(i).toLowerCase()
                }
            }
            output.innerText = capData;
        }
        else if(clickedBtn === 'bold'){
            // whenever we use JS functionality of HTML tag, it return with tag ( <b>Ram</b> ) so .innerHTML
            output.innerHTML = data.bold();
        }
        else if(clickedBtn === 'italic'){
            output.innerHTML = data.italics();
        }
        else if(clickedBtn === 'underline'){ 
            output.innerHTML = `<u>${data}</u>`;
        }
    });
})

