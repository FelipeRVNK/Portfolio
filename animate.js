const targets = document.querySelectorAll('[data-animate]');
const animationClass = 'anime';

function animeScroll(){
    const windowTop = window.scrollY + window.innerHeight * 0.75;
    targets.forEach(function(element){
        if(windowTop > element.offsetTop){
            element.classList.add(animationClass);
        }else{
            element.classList.remove(animationClass);
        }
    });

    
}

animeScroll();

window.addEventListener('scroll', function(){
    animeScroll();
})