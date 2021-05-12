var slider= document.getElementById("slider");
var emoji = document.getElementById("emoji");
var emoticons=["mood_bad", "sentiment_very_dissatisfied", "sentiment_satisfied",
  "sentiment_satisfied_alt", "sentiment_very_satisfied"];
var bool_list = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,];

slider.oninput=function(){
    emoji.innerHTML=emoticons[slider.value];
}

function checkColor(num, elem){

    if (bool_list[num] == false){

    if (elem == 'family'){
      document.getElementById('notification').innerHTML = "Your mood for today has been updated and a notification to your Family loop was sent."
    }
    if (elem == 'friends'){
      document.getElementById('notification').innerHTML = "Your mood for today has been updated and a notification to your Friends loop was sent."
    }
    if (elem == 'closefriends'){
      document.getElementById('notification').innerHTML = "Your mood for today has been updated and a notification to your BFFs loop was sent."
    }

    if (elem == 'private'){
      document.getElementById('notification').innerHTML = "Your mood for today has been updated and kept private."
    }

     document.getElementById(elem).style.backgroundColor = '#404040';
     document.getElementById(elem).style.color = 'white';
     bool_list[num] = true;
     }

     else if(bool_list[num] == true){
     document.getElementById(elem).style.color = '#404040';
     document.getElementById(elem).style.backgroundColor = 'white';
     bool_list[num] = false;
   }
 }
