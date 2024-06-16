// target the menu btn
const menu_btn = document.querySelector('.menu-btn')
const curtain = document.querySelector('.curtain')

// target the nav
const nav_bar = document.querySelector('nav')

// add click event listener to it
menu_btn.addEventListener('click', handle_nav)

function handle_nav(){
    menu_btn.classList.toggle('close_effect')
    nav_bar.classList.toggle("show_effect")
   curtain.classList.toggle('show_effect')

}

curtain.addEventListener('click', handle_nav)


// calculate interest and amount logic

// target the form
const loan_form = document.querySelector('form')

// add submit event to it
loan_form.addEventListener('submit', calculate_loan)

function calculate_loan(event){
       
       event.preventDefault() // to prevent the form from reloading the page

      let principal = Number(document.querySelector(".principal").value)
      let duration = Number(document.querySelector('.duration').value)

      let rate = 0.1



function handleError(offender){
         document.querySelector(offender).classList.add('error_animation')
    setTimeout(function(){
           document.querySelector(offender).classList.remove('error_animation')
    }, 1000)
}

// method 2

if(principal < 10000){
   handleError('.principal')
    document.querySelector('.principal-error').innerHTML = "amount CANNOT be less than 10 000"
   setTimeout(function(){
           document.querySelector('.principal-error').innerHTML = ""
   },2000)
}

else if(principal > 1000000){
       handleError('.principal')
        document.querySelector('.principal-error').innerHTML = "amount CANNOT be greater than 10 000 000"
      setTimeout(function(){
           document.querySelector('.principal-error').innerHTML = ""
      }, 2000)

}

else if(duration < 3){
         handleError('.duration')
           document.querySelector('.duration-error').innerHTML = "amount CANNOT be less than 10000"

           setTimeout(function(){
              document.querySelector('.duration-error').innerHTML = ""
           }, 2000)
}

else if(duration > 36){
        handleError('.duration')
          document.querySelector('.duration-error').innerHTML = "amount CANNOT be longer than 36 months"

          setTimeout(function(){
                     document.querySelector('.duration-error').innerHTML = ""
          }, 2000)

}

else {
      
      //   calculate interest
      let interest = ( principal * duration * rate) / 12

    //   calculate amount
      let total_amount = principal + interest


    //  display the interest
    let interest_display = document.querySelector('.interest')
    interest_display.innerHTML = "₦" + interest.toFixed(1)


    // display the amount
    let amount_display = document.querySelector('.amount')
    amount_display.innerHTML = "₦" + total_amount.toFixed(1)

    loan_form.classList.add("show-result")

}

}


// reset app logic
// target the reset button
const reset_btn = document.querySelector('.reset_btn')

// add click event listener to the reset btn
reset_btn.addEventListener('click', clearApp)

function clearApp(){
       document.querySelector('.interest').innerHTML = "₦0.0"
       document.querySelector('.amount').innerHTML = "₦0.0"
      
       setTimeout(function(){
                 loan_form.classList.remove("show-result")
       }, 2000)
}





