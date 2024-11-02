document.addEventListener("DOMContentLoaded", function() {
    const menumobile = document.getElementById('menumobile');

    function toggleMenu(event) {
        if(event.type === 'touchstart') event.preventDefault();
        const nav = document.getElementById('nav');
        nav.classList.toggle('active');
        const active = nav.classList.contains('active');
        event.currentTarget.setAttribute('aria-expended', 'true');
        if(active){

            event.currentTarget.setAttribute('aria-label', 'Fechar Menu');

        } else{

            event.currentTarget.setAttribute('aria-label', 'Abrir Menu');

        }
    }

    menumobile.addEventListener('click', toggleMenu);
    menumobile.addEventListener('touchstart', toggleMenu);
});

var nextBtn = document.querySelector('.prox'),
    prevBtn = document.querySelector('.ante'),
    carrossel = document.querySelector('.carrossel'),
    list = document.querySelector('.list'),
    item = document.querySelector('.item'),
    runnignTime = document.querySelector('.timerunnig')

let timeRunning = 3000
let timeAutoNext = 7000

nextBtn.onclick = function(){
    showSlider('next')
}

prevBtn.onclick = function(){
    showSlider('prev')
}

let runtimeOut

let runNextAuto = setTimeout(() => {
    nextBtn.click()
}, timeAutoNext)

function resetTimeAnimation() {
    runningTime.style.animation = 'none'
    runningTime.offsetHeight /* trigger reflow */
    runningTime.style.animation = null 
    runningTime.style.animation = 'runningTime 7s linear 1 forwards'
}

function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll('.carrossel .list .item')
    if(type == 'next'){
        list.appendChild( sliderItemsDom[0])
        carrossel.classList.add('next')
    }else{
        list.prepend( sliderItemsDom[ sliderItemsDom.length - 1])
        carrossel.classList.add('prev')
    }

    clearTimeout(runtimeOut)

    runtimeOut = setTimeout(() => {
        carrossel.classList.remove('.prox')
        carrossel.classList.remove('.ante')
    }, timeRunning)

    clearTimeout(runNextAuto)
    runNextAuto = setTimeout(() => {
        nextBtn.click()
    }, timeAutoNext)

    resetTimeAnimation()
}

resetTimeAnimation()