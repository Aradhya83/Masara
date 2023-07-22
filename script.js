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

const totop=() =>window.scrollTo({top:0,behavior:'smooth'});

var Mainimge=document.getElementById("Mainimage");
    var smallimge= document.getElementsByClassName("smallimage");
    smallimge[0].onclick= function(){
        Mainimge.src= smallimge[0].src;
    }
    smallimge[1].onclick= function(){
        Mainimge.src= smallimge[1].src;
    }
    smallimge[2].onclick= function(){
        Mainimge.src= smallimge[2].src;
    }
    smallimge[3].onclick= function(){
        Mainimge.src= smallimge[3].src;
    }


 
function change(element){
    element.classList.toggle("fullsize");
} 
