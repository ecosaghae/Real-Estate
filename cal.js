

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// Cost Splitter 
function calc()
{
    let a = parseInt(document.getElementById('total').value);
    let b = parseInt(document.getElementById('people').value);
    let oper = document.getElementById('operators').value;

    if(oper === '/')
    {
        document.getElementById('result').value = a/b;
    }
}

// sign up
$('.message a').click(function(){
    $('form').animate({height:"toggle", opacity: "toggle"}, "slow");
});
