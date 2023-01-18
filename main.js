'use strict';

function createSnowFlakes() {
    const snowflake = document.createElement('i');
    snowflake.classList.add('fa-regular'); 
    snowflake.classList.add('fa-snowflake');
    
    snowflake.style.left = Math.random() * window.innerWidth + 'px';  
    snowflake.style.fontSize = Math.random() * 5 * 3 + 'px';
    snowflake.style.opacity = Math.random(); 

    snowflake.addEventListener('mouseover', function(){
        this.style.visibility = 'hidden'
    })

    document.body.append(snowflake); 
    setTimeout(() => {
        snowflake.remove();
    }, 6000);
           
} 

setInterval(createSnowFlakes, 70) ;    


function createLightening() {
    const createLightening = document.createElement('i');

    createLightening.classList.add('fa-solid');
    createLightening.classList.add('fa-bolt-lightning');

    createLightening.style.left = Math.random() * window.innerWidth + 'px';  
    createLightening.style.top = Math.floor(Math.random() * 80 + 20) + 'px' ;       
    createLightening.style.opacity =  Math.random();

    setTimeout(() => {
        createLightening.remove();
    }, 3000);
                               

    document.body.append(createLightening)
    
}

setInterval(createLightening, 6000)