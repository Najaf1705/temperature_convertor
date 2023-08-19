const finp=document.getElementById("ftemp"),
sinp=document.getElementById("stemp"),
fop=document.getElementById("ftype"),
sop=document.getElementById("stype")

window.addEventListener("load",()=>finp.focus())

sop.addEventListener("change",first)
fop.addEventListener("change",second)

finp.addEventListener("input",first)
sinp.addEventListener("input",second)

function first(){
  if(fop.value==sop.value){
    sinp.value=finp.value
  }
  if(fop.value=="celsius"&&sop.value=="fahrenheit"){
    sinp.value=((finp.value*9)/5+32).toFixed(2);
  }
  if(fop.value=="celsius"&&sop.value=="kelvin"){
    sinp.value=(parseFloat(finp.value)+273.25).toFixed(2);
  }
  if(fop.value=="fahrenheit"&&sop.value=="celsius"){
    sinp.value=(((finp.value-32)*5)/9).toFixed(2);
  }
  if(fop.value=="fahrenheit"&&sop.value=="kelvin"){
    sinp.value= ((finp.value - 32) * (5/9) + 273.15).toFixed(2);
  }
  if(fop.value=="kelvin"&&sop.value=="celsius"){
    sinp.value=(parseFloat(finp.value)-273.25).toFixed(2);
  }
  if(fop.value=="kelvin"&&sop.value=="fahrenheit"){
    sinp.value=((finp.value-273.15) * (9/5) + 32).toFixed(2);
  }
  if(!finp.value)
    sinp.value=''
}

function second(){
  if(fop.value==sop.value){
    finp.value=sinp.value
  }
  if(fop.value=="celsius"&&sop.value=="fahrenheit"){
    finp.value=(((sinp.value-32)*5)/9).toFixed(2);
  }
  if(fop.value=="celsius"&&sop.value=="kelvin"){
    finp.value=(parseFloat(sinp.value)-273.25).toFixed(2);
  }
  if(fop.value=="fahrenheit"&&sop.value=="celsius"){
    finp.value=((sinp.value*9)/5+32).toFixed(2);
  }
  if(fop.value=="fahrenheit"&&sop.value=="kelvin"){
    finp.value=((sinp.value-273.15) * (9/5) + 32).toFixed(2);
  }
  if(fop.value=="kelvin"&&sop.value=="celsius"){
    finp.value=(parseFloat(sinp.value)+273.25).toFixed(2);
  }
  if(fop.value=="kelvin"&&sop.value=="fahrenheit"){
    finp.value= ((sinp.value - 32) * (5/9) + 273.15).toFixed(2);
  }
  if(!sinp.value)
    finp.value=''
}



// sinp.addEventListener("input",()=>{
//   finp.value=(((sinp.value-32)*5)/9).toFixed(2);
//   if(!sinp.value)
//     finp.value=''
// })