'use strict';

function createSnowFlakes() {
    const snowflake = document.createElement('i');
    snowflake.classList.add('fa-regular'); 
    snowflake.classList.add('fa-snowflake');
    snowflake.style.left = Math.random() * window.innerWidth + 'px'; 
    snowflake.style.fontSize = Math.random() * 5 * 3 + 'px';
    snowflake.style.top =  Math.random() * innerHeight + 'px';
    snowflake.style.opacity = Math.random(); 
    snowflake.addEventListener('mouseover', function(){
        this.style.visibility = 'hidden'
    })

    document.body.append(snowflake); 
    setTimeout(() => {
        snowflake.remove();
    }, 4000);
           
} 

setInterval(createSnowFlakes, 70) ;

