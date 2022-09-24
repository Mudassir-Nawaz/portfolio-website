let menuBtn = document.querySelector('#menu-btn');
let menu = document.querySelector('#menu');
let menuCross = document.querySelector('#menu-btn-cross')

menuBtn.addEventListener('click', ()=> {
    menuBtn.classList.add('hidden')
    if(menuCross.classList.contains('hidden')){
        menuCross.classList.toggle('hidden')
        menuCross.classList.toggle('block')
    }else{
        menuCross.classList.add('hidden')
    }
    
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
})
menuCross.addEventListener('click', ()=> {
    menuBtn.classList.toggle('block')
    menuBtn.classList.toggle('hidden')
    menuCross.classList.remove('block')
    menuCross.classList.add('hidden')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
    
})