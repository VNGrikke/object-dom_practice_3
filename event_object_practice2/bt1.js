let prev = document.getElementById('prev');
let next = document.getElementById('next');
let step2 = document.getElementById('step-2');
let step3 = document.getElementById('step-3');
let step4 = document.getElementById('step-4');
let stickStep2 = document.getElementById('stick-step-2');
let stickStep3 = document.getElementById('stick-step-3');
let stickStep4 = document.getElementById('stick-step-4');

let numberStep = 1;
if(numberStep===1){
    next.classList.add('bright2');
}
next.onclick = function(){
    numberStep++;
    if(numberStep===2){
        step2.classList.add('bright');
        stickStep2.classList.add('bright');
        prev.classList.add('bright2');
    }
    if(numberStep===3){
        step3.classList.add('bright');
        stickStep3.classList.add('bright');
    }
    if(numberStep===4){
        step4.classList.add('bright');
        stickStep4.classList.add('bright');
        next.classList.remove('bright2');
    }
    if (numberStep>4)numberStep=4;
console.log(numberStep);

}
prev.onclick = function(){
    numberStep--;
    if(numberStep===3){
        step4.classList.remove('bright');
        stickStep4.classList.remove('bright');
        next.classList.add('bright2');
    }
    if(numberStep===2){
        step3.classList.remove('bright');
        stickStep3.classList.remove('bright');
    }
    if(numberStep===1){
        step2.classList.remove('bright');
        stickStep2.classList.remove('bright');
        prev.classList.remove('bright2');
    }
    if (numberStep<1)numberStep=1;
console.log(numberStep);

}