//Script
//add date to header
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var dateHead = document.querySelector("#date")

today = mm + '/' + dd + '/' + yyyy;
console.log(today);
document.getElementById('date').innerHTML="Here is your schedule for today " + today

$(document).ready(function(){
    $("button[id^='reset']").click(function(){
        var id=this.id
        var num=id.substr(5)
        console.log(id)
        console.log(num)
        $('#time'+num).val('');
    })
})


//set background based on time
    function setBackgroundForTimeOfDay() {
        for(var i=7; i<19;i++){
      const box = document.getElementById("time"+i)
      const hours = new Date().getHours();
      if (hours>i){
        box.style.backgroundColor= 'gray';
        box.style.opacity=.75;
        box.style.color="black";
    }
      else if(hours===i){
        box.style.backgroundColor = 'yellow';
        box.style.opacity=.75;
        box.style.color="black";
    }
        else{
        box.style.backgroundColor = 'green';
        box.style.opacity=.75;
        box.style.color="black";
        }
    }
}
    setBackgroundForTimeOfDay();

