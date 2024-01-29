window.addEventListener('load',function(){
   
})
const d = new Date()
let yearNow=d.getFullYear();
let monNow=d.getMonth()+1
let yearText
function cal(){
    let datei=document.getElementById('input-date').value
   let month=parseInt(document.getElementById('input-mon').value)
    let year =parseInt(document.getElementById('input-year').value)
    yearText=document.getElementById('year')
   yearText.innerText=yearNow-year
   console.log(`mon now${monNow}`)
  console.log(`mon enter${month}`)
  console.log(month-monNow)
}