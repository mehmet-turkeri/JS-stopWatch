const timer = document.querySelector(".timer");
const buttons = document.querySelector(".buttons");
const resetle = document.querySelector(".reset");
const changer = document.querySelector(".btn");
let salise = 0;
let saniye = 0;
let dakika = 0;
let saliseBas = "";
let saniyeBas = "";
let dakikaBas = "";
let interval;
let durum = 0;

changer.onclick=function() {
    if (durum == 0) {
        interval = setInterval(counter, 10);
        changer.innerHTML = `<i class="fa-regular fa-circle-pause"></i>`;
        durum = 1;   
}else{
    clearInterval(interval);
    changer.innerHTML = `<i class="fa-regular fa-circle-play"></i>`;
    durum = 0;
}

}


resetle.onclick=function() {
    if (durum == 0) {
    salise = 0;
    saniye = 0;
    dakika = 0;
    ekranaBas();
    }      
    
}


function counter(){
    if(salise < 60){
        salise += 1;

    }else {
        salise = 0;
        saniye += 1;
    }

    if(saniye > 59){
        saniye = 0;
        dakika += 1;
    }

    if(dakika > 59){
        dakika = 0;
    }
    
    ekranaBas();

}

function ekranaBas(){
    if(salise < 10){
        saliseBas = "0" + salise;
    }else{
        saliseBas = salise;
    }

    if(saniye < 10){
        saniyeBas = "0" + saniye;
    }else{
        saniyeBas = saniye;
    }

    if(dakika < 10){
        dakikaBas = "0" + dakika;
    }else{
        dakikaBas = dakika;
    }

    timer.innerHTML = ` ${dakikaBas} : ${saniyeBas} : ${saliseBas} `;
}
