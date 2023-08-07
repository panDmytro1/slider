const slidingContent = document.querySelector('.content');

let time = 3000,
    i = 0;
    isRight = true;

slidingContent.style.right = '0px';

function checking(){
    if(i >= slidingContent.offsetWidth - document.querySelector('.slider').offsetWidth){
        isRight = false;
    }else if(i == 0){
        isRight = true;
    }
}

function sliding(){
    
    checking();
    
    if(isRight){
        i += slidingContent.querySelector('div').offsetWidth;  
    }else{
        i -= slidingContent.querySelector('div').offsetWidth; 
    }

    slidingContent.style.right = `${i}px`;
}

let interval = setInterval(sliding, time);

