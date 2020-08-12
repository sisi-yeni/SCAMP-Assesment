const f_sequence = [0, 1];
 
var i;

function get_sequence () {

  var x = document.getElementById("sequenceNo").value;  
  for  (i = 1; i < x; i++) {
     var new_z = f_sequence[i]  + f_sequence[i-1] 
     f_sequence.push(new_z);
  }
  var f = f_sequence;
  document.getElementById("results").innerHTML = f;
}


 