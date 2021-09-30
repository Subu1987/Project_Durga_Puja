
let countDownDate= new Date("Oct 11, 2021 00:00:00").getTime();

let x= setInterval(()=>{

    let now = new Date().getTime();
    let diffence= countDownDate - now ;

    let days= Math.floor(diffence / (1000*60*60*24));
    let hours= Math.floor(diffence % (1000*60*60*24) / (1000*60*60));
    let minutes= Math.floor(diffence % (1000*60*60) / (1000*60));
    let seconds= Math.floor(diffence % (1000*60) / (1000));

    document.getElementById('launch').innerHTML= days + "d : " + hours + "h : " + minutes + "m : " + seconds + "s ";

    if(diffence<0){
        clearInterval(x);
        document.getElementById('launch').innerHTML= "EXPIRED"
    }

},1000);

let playPauseEffect=()=>{

    document.getElementById('playPauseEffect').style.animationPlayState="paused";


}
