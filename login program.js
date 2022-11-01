// Ryker Hicks

function login()
{
   var bn = document.getElementById("Badge").value;
   var fn = document.getElementById("Firstname").value;
   var ln = document.getElementById("Lastname").value;
   if (bn > 1000 || bn < 100) 
   {
    alert("Access not Granted")
   }
   else if (fn + ln  > 20)
   {
    alert("Access not granted")
   }
}