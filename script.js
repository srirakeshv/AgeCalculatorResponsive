let input_day=document.querySelector('#days')
let input_month=document.querySelector('#months')
let input_year=document.querySelector('#years')
let result_day=document.querySelector('#dy')
let result_month=document.querySelector('#mn')
let result_year=document.querySelector('#yr')
let button=document.querySelector('.image')
let day=document.querySelector('#d')
let month=document.querySelector('#m')
let year=document.querySelector('#y')
let label_year=document.querySelector('#yyyy')
let label_month=document.querySelector('#mm')
let label_day=document.querySelector('#dd')

// initial setup
day.style.display='none'
month.style.display='none'
year.style.display='none'

// date section present
let now=new Date()
let curr_day=now.getDate()
let curr_month=now.getMonth()
let curr_year=now.getFullYear()

// leap year checking for wrong display
function isLeapYear(yr){
    if (Number(yr)%400===0 || (Number(yr)%4===0 && Number(yr)%100!==0))
    {
        return true
    }
    else{
        return false
    }
}

// checking month having 31 days
function oddMonth(mn){
    if (Number(mn)===1 || Number(mn)===3 || Number(mn)===5 || Number(mn)===7 || Number(mn)===8 || Number(mn)===10 || Number(mn)===12)
    {
        return true
    }
    else{
        return false
    }
}

// checking month having 30 days
function evenMonth(mo){
    if (mo===4 || mo===6 || mo===9 || mo===11)
    {
        return true
    }
    else{
        return false
    }
}

// age calculations
function calculation(year,month,date)
    {   let result=0
        let month_result=0
        let date_result=0
        if((Number(month))>=(curr_month+1) && (Number(date)>curr_day))
        {
            result=curr_year-Number(year)-1
            result_year.innerHTML=result
            month_result=(curr_month+1)-1
            result_month.innerHTML=month_result
            date_result=31-(Number(date)-curr_day)
            result_day.innerHTML=date_result
        }
        else if((Number(month))>=(curr_month+1) && (Number(date)<=curr_day))
        {
            result=curr_year-Number(year)-1
            result_year.innerHTML=result
            month_result=(curr_month+1)
            result_month.innerHTML=month_result
            date_result=curr_day-Number(date)
            result_day.innerHTML=date_result
        }
        else if((Number(month))<(curr_month+1) && (Number(date)>curr_day))
        {
            result=curr_year-Number(year)
            result_year.innerHTML=result
            month_result=(curr_month+1)-Number(month)
            result_month.innerHTML=month_result
            date_result=31-(Number(date)-curr_day)
            result_day.innerHTML=date_result
        }
        else if((Number(month))<(curr_month+1) && (Number(date)<=curr_day))
        {
            result=curr_year-Number(year)
            result_year.innerHTML=result
            month_result=(curr_month+1)-Number(month)
            result_month.innerHTML=month_result
            date_result=curr_day-Number(date)
            result_day.innerHTML=date_result
        }
    }

// if empty presses means this function executes the output
function empty(){
    result_day.innerHTML='--'
    result_month.innerHTML='--'
    result_year.innerHTML='--'
}


//event listener function
button.addEventListener('click',()=>{

    // checking the width size
    if (window.innerWidth<=450)
    {
        if (((input_day.value==='') && (input_month.value==='') && (input_year.value==='')))
        {
            empty()
            button.style.top='27%'
        }
        else{
            button.style.top='23%'
            calculation(input_year.value,input_month.value,input_day.value)
        }
        
    }
    else{
        if((input_day.value==='') && (input_month.value==='') && (input_year.value===''))
        {
            empty()
            button.style.top='23%'
        }
        else{
            calculation(input_year.value,input_month.value,input_day.value)
            button.style.top='19%'
        }
    }

    // error display
    // day
    if (input_day.value===''){
        day.style.display='block'
        day.innerHTML='This is required field'
        input_day.style.borderColor='hsl(0, 100%, 67%)'
        label_day.style.color='hsl(0, 100%, 67%)'
    }
    else{
        day.style.display='none'
        input_day.style.borderColor='hsl(0, 0%, 94%)'
        label_day.style.color='hsl(0, 1%, 44%)'
        if (input_day.value>=1 && input_day.value<=31)
        {
            day.style.display='none'
        }
         else{
            day.style.display='block'
            day.innerHTML='Must be a valid day'
            input_day.style.borderColor='hsl(0, 100%, 67%)'
            label_day.style.color='hsl(0, 100%, 67%)'
            empty()
            button.style.top='23%'
        }
    }
    // month
    if (input_month.value===''){
        month.style.display='block'
        month.innerHTML='This is required field'
        input_month.style.borderColor='hsl(0, 100%, 67%)'
        label_month.style.color='hsl(0, 100%, 67%)'
    }
    else{
        month.style.display='none'
        input_month.style.borderColor='hsl(0, 0%, 94%)'
        label_month.style.color='hsl(0, 1%, 44%)'
        if (input_month.value>=1 && input_month.value<=12)
        {
            month.style.display='none'
            if ((Number(input_day.value>=1) && Number(input_day.value<=28)) && Number(input_month.value)===2 && isLeapYear(Number(input_year.value)))
            {
                
                console.log('yes')
            }
            else if((Number(input_day.value>=1) && Number(input_day.value<=29)) && Number(input_month.value)===2 && !isLeapYear(Number(input_year.value)))
            {
                console.log('yes n')
            }
            else if ((Number(input_day.value>=1) && Number(input_day.value<=31)) && oddMonth(Number(input_month.value)))
            {
                console.log('31')
            }
            else if((Number(input_day.value>=1) && Number(input_day.value<=30)) && evenMonth(Number(input_month.value)))
            {
                console.log('30')
            }
            else{
                console.log('not')
            }
        }
         else{
            month.style.display='block'
            label_month.style.color='hsl(0, 100%, 67%)'
            input_month.style.borderColor='hsl(0, 100%, 67%)'
            month.innerHTML='Must be a valid month'
            empty()
        }
    }
    // year
    if (input_year.value===''){
        year.style.display='block'
        year.innerHTML='This is required field'
        input_year.style.borderColor='hsl(0, 100%, 67%)'
        label_year.style.color='hsl(0, 100%, 67%)'
    }
    else{
        year.style.display='none'
        input_year.style.borderColor='hsl(0, 0%, 94%)'
        label_year.style.color='hsl(0, 1%, 44%)'
        if (input_year.value>=0 && input_year.value<=2023)
        {
            year.style.display='none'
        }
         else{
            year.style.display='block'
            year.innerHTML='Must be in the past'
            input_year.style.borderColor='hsl(0, 100%, 67%)'
            label_year.style.color='hsl(0, 100%, 67%)'
            empty()
        }
    }

    
    
})
