// setTimeout(greetUser, 5000)
let timing =  setInterval(greetUser, 5000)


// call back
function greetUser(){
       alert("hello user, welcome to Codeprof Academy")
}


// clear time interval logic

const clear_time = document.querySelector('.clear_interval')

clear_time.addEventListener('click', clearTiming)

function clearTiming(){
      clearInterval(timing)
}
