//business logic://
var encrypt = function(msg) {
  var letterOnly = msg.split('');
  

  if (msg === ) { // 1.make sure they enter something
    alert("please enter a message") 
  }
}

// 2.remove spacing/punctuation

// 3.use total length of message to determine output grid

// 4.output returned value in strings of 5


//User Interface Logic://
$(document).ready(function(){
  $("form#secretMessage").submit(function(event){
    event.preventDefault();

    var msg = $("input#input").val();
    var result = encrypt(msg);
    if (result) {
      $(".return").Text(result);
    }
  });
});
