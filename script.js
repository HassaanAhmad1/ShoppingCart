var PA=document.getElementById('PA');
var SC=document.getElementById('SC');
var TCA=document.getElementById('TCA');
var discountcode=document.getElementById('discount_code1');
const DN=(incdec,itemprice)=>{
    var interval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    if(interval.value <=0){
        interval.value =0;
        alert('Negative value not allowed ');
    }else{
        interval.value=parseInt(interval.value)-1;
        interval.style.background='#fff';
        interval.style.color='#000';
        itemprice.innerHTML=parseInt(itemprice.innerHTML);
        PA.innerHTML=parseInt(PA.innerHTML)-15;
        TCA.innerHTML=parseInt(PA.innerHTML)+parseInt(SC.innerHTML)
    }
}
const IN=(incdec,itemprice)=>{
    var interval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    if(interval.value >=5){
        interval.value =5;
        alert('max 5 allowed');
        interval.style.background='red';
        interval.style.color='#fff';
    }else{
        interval.value=parseInt(interval.value)+1;
        PA.innerHTML=parseInt(PA.innerHTML)+15;
        TCA.innerHTML=parseInt(PA.innerHTML)+parseInt(SC.innerHTML)
    }
} 
let OT=false;
 discount_code = () => {
    let totalamtcurr = parseInt(TCA.innerHTML);
    let error_trw = document.getElementById('error_trw');
    if(discountcode.value === 'Hassaan'&&!OT){
        DC.innerHTML=parseInt(DC.innerHTML)-15;
     newtotalamt = totalamtcurr - 15;
    TCA.innerHTML = newtotalamt;
    error_trw.innerHTML = "Hurray! code is valid";
    OT=true
    }else if(discountcode.value === 'Hassaan'&&OT){
        error_trw.innerHTML = "You already use code ";
        }else{
    error_trw.innerHTML = "Try Again! Valid code is Hassaan";
    }
}
