window.addEventListener('load',function(){
   
})
const d = new Date()
let yearCurr=d.getFullYear();
let monCurr=d.getMonth()+1
let dateCurr=d.getDate()
let yearText
let totalYear
let monTotal
let monText
let dateTotal
let dateText
let userDate
function cal(){
    
    let userDate=document.getElementById('input-date').value
   let userMonth=document.getElementById('input-mon').value
    let userYear =document.getElementById('input-year').value
    yearText=document.getElementById('year')
    monText=document.getElementById('month')
    dateText=document.getElementById('date')
    
        //validation 
        let checkDate=(userDate=='' || userDate==0|| userDate>31)
        let checkMon=(userMonth=='' || userMonth==0||userMonth>12)
        let checkYear=(userYear==''||userYear>yearCurr)
        let checkTotal=checkDate || checkMon || checkYear
        if(checkTotal){    
            if(userDate==''){
                document.getElementById('input-date').classList.add('error')
                document.getElementById('error-date').innerText='The field is required'
                document.getElementById('error-date').style.color='hsl(0, 100%, 67%)'
                document.getElementById('text-day').style.color='hsl(0, 100%, 67%)'
            }else if(userDate==0 || userDate>31){
                document.getElementById('input-date').classList.add('error')
                document.getElementById('error-date').innerText='Must be a valid day'  
                document.getElementById('error-date').style.color='hsl(0, 100%, 67%)'
                document.getElementById('text-day').style.color='hsl(0, 100%, 67%)'
            }
            if(userMonth==''){
                document.getElementById('input-mon').classList.add('error')
                document.getElementById('error-mon').innerText='The field is required'
                document.getElementById('error-mon').style.color='hsl(0, 100%, 67%)'
                document.getElementById('text-mon').style.color='hsl(0, 100%, 67%)'
            }else if(userMonth==0 || userMonth>12){
                document.getElementById('input-mon').classList.add('error')
                document.getElementById('error-mon').innerText='Must be a valid month'
                document.getElementById('error-mon').style.color='hsl(0, 100%, 67%)'
                document.getElementById('text-mon').style.color='hsl(0, 100%, 67%)'
            }
            if(userYear==''){
                document.getElementById('input-year').classList.add('error')
                document.getElementById('error-year').innerText='The field is required'
                document.getElementById('error-year').style.color='hsl(0, 100%, 67%)'
                document.getElementById('text-year').style.color='hsl(0, 100%, 67%)'
            }else if(userYear==0 || userYear>yearCurr){
                document.getElementById('input-year').classList.add('error')
                document.getElementById('error-year').innerText='Must be in the past'
                document.getElementById('error-year').style.color='hsl(0, 100%, 67%)'
                document.getElementById('text-year').style.color='hsl(0, 100%, 67%)'   
            }
        }else{
            document.getElementById('input-date').classList.remove('error')
            document.getElementById('input-mon').classList.remove('error')
            document.getElementById('input-year').classList.remove('error')
            document.getElementById('error-year').innerText=''
            document.getElementById('error-mon').innerText=''
            document.getElementById('error-date').innerText=''
            document.getElementById('text-year').style.color='rgb(127, 125, 125)'
            document.getElementById('text-mon').style.color='rgb(127, 125, 125)'
            document.getElementById('text-day').style.color='rgb(127, 125, 125)'
            userDate=parseInt(userDate)
            userMonth=parseInt(userMonth)
            userYear=parseInt(userYear)
           //step1 
           totalYear=yearCurr-userYear
           //step2 
           if(monCurr<userMonth){  
            totalYear--
            monCurr+=12
            monTotal=monCurr-userMonth
           }else{
            monTotal=monCurr-userMonth
           }
           //step 3 
           if(dateCurr<userDate){
            monTotal--
            let previousMonth=monCurr-1
            if(previousMonth===1||previousMonth===3||previousMonth===5||previousMonth===7||previousMonth===8||previousMonth===10||
                previousMonth===12){
                dateTotal=date+31
            }else if(previousMonth===2){
                dateTotal=date+28
            }else{
                dateTotal=date+30
            }
           }else{
            dateTotal=dateCurr-userDate
           }
           yearText.innerText=totalYear
           monText.innerText=monTotal
           dateText.innerText=dateTotal
        }
        
      
        
        
      
       date=0
       document.getElementById('input-date').value=''
       document.getElementById('input-mon').value=''
       document.getElementById('input-year').value=''
     
    
           
            
     
    
    
    
}
function cals(){
    alert("hef")
}