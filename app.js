const image1=document.querySelector('img');
const pera=document.querySelector('p');
const mathRendom = Math.ceil(Math.random()*2);
console.log(mathRendom);
function mosque() {
    
    if (mathRendom === 1) {
        image1.src ="./assets/424-original.jpg"
        pera.innerHTML="YOU WON THE TOSS"
    }else{
        image1.src ="";
        pera.innerHTML="YOU LOSS THE TOSS"
    }
    
}
function chand() {
    
    if (mathRendom === 1) {
        image1.src ="";
        pera.innerHTML="YOU LOSS THE TOSS"
    }else{
        image1.src ="./assets/424-chand.jpg";
        pera.innerHTML="YOU WON THE TOSS"
    }
    
}








 
