let hour = document.getElementById("hour");
let moment = document.getElementById("moment");
let second = document.getElementById("second");





// console.log(ss)


let intss = setInterval(function(){
let date = new Date();


let ss = date.getSeconds()/60;
let mm = (ss+date.getMinutes())/60;
let hh = (mm+date.getHours())/12;

rotatation(hh,hour)
rotatation(mm,moment)
rotatation(ss,second)


},1000)

function rotatation(rot,el) {
    el.style.cssText= `transform: rotate(${rot*360}deg);`;
};




