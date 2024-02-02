window.addEventListener('load',function(){
   
})
const d = new Date()
let yearNow=d.getFullYear();
let monNow=d.getMonth()+1
let dateNow=d.getDate()
let yearText
let totalYear
let monTotal
let monText
let dateTotal
let dateText
function cal(){
    let date=parseInt(document.getElementById('input-date').value)
   let month=parseInt(document.getElementById('input-mon').value)
    let year =parseInt(document.getElementById('input-year').value)
    yearText=document.getElementById('year')
    monText=document.getElementById('month')
    dateText=document.getElementById('date')
    
        console.log("hello")
        if(dateNow<date){
            monTotal=(monNow-month)-1
            let pre=monNow-1
            if(pre===1||pre===3||pre===5||pre===7||pre===8||pre===10||pre===12){
                dateTotal=date+31
            }
        }else{
            dateTotal=dateNow-date
        }
        if(monNow<month){
           
            totalYear=(yearNow-year)-1
            monNow=monNow+12
            monTotal=monNow-month
        }else{
            totalYear=(yearNow-year)
            monTotal=monNow-month
        }
        document.getElementById('input-date').classList.remove('error')
        document.getElementById('input-mon').classList.remove('error')
        document.getElementById('input-year').classList.remove('error')
       yearText.innerText=totalYear
       monText.innerText=monTotal
       dateText.innerText=dateTotal
       date=0
       document.getElementById('input-date').value=''
       document.getElementById('input-mon').value=''
       document.getElementById('input-year').value=''
     
    
           
            
     
    
    
    
}
function cals(){
    alert("hef")
}