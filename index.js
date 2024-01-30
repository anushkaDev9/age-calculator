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
    let date=document.getElementById('input-date').value
   let month=parseInt(document.getElementById('input-mon').value)
    let year =parseInt(document.getElementById('input-year').value)
    yearText=document.getElementById('year')
    monText=document.getElementById('month')
    dateText=document.getElementById('date')
    if(date!==0 && date<31 && month!==0||month<13){
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
    
       yearText.innerText=totalYear
       monText.innerText=monTotal
       dateText.innerText=dateTotal
       date=0
       document.getElementById('input-date').value=''
       document.getElementById('input-mon').value=''
       document.getElementById('input-year').value=''
       month=0
       year=0
    }else{
        
            var errDate= document.getElementById('input-date')
            errDate.classList.add('error')
            var p=document.createElement('p')
            if()
            p.innerText="Undifened"
             var errDate= document.getElementById('input-mon')
             errDate.classList.add('error')
    }
    
    
}
function cals(){
    alert("hef")
}