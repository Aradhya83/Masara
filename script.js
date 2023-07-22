const bar= document.getElementById('bar');
const nav= document.getElementById('navbar');
const close= document.getElementById('close');
if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

const totop=() =>window.scrollTo({top:0,behavior:'smooth',scrollEase: 0.05});