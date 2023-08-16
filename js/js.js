function comeca (){
   document.getElementById("jogo1").removeAttribute("hidden");
   document.getElementById("jogo2").removeAttribute("hidden");
   document.getElementById("jogo3").removeAttribute("hidden");
   document.getElementById("jogo4").removeAttribute("hidden");
   document.getElementById("jogo5").removeAttribute("hidden");
   document.getElementById("jogo6").removeAttribute("hidden");
   document.getElementById("jogo7").removeAttribute("hidden");
   document.getElementById("jogo8").removeAttribute("hidden");
   document.getElementById("jogo9").removeAttribute("hidden");
}

function x1 ()
{
   document.getElementById("jogo1").value = "X";
}
function x2 ()
{
   document.getElementById("jogo2").value = "X";
}
function x3 ()
{
   document.getElementById("jogo3").value = "X";
}
function x4 ()
{
   document.getElementById("jogo4").value = "X";
}
function x5 ()
{
   document.getElementById("jogo5").value = "X";
}
function x6 ()
{
   document.getElementById("jogo6").value = "X";
}
function x7 ()
{
   document.getElementById("jogo7").value = "X";
}
function x8 ()
{
   document.getElementById("jogo8").value = "X";
}
function x9 ()
{
   document.getElementById("jogo9").value = "X";
}

function o1 ()
{
   document.getElementById("jogo1").value = "O";
}
function o2 ()
{
   document.getElementById("jogo2").value = "O";
}
function o3 ()
{
   document.getElementById("jogo3").value = "O";
}
function o4 ()
{
   document.getElementById("jogo4").value = "O";
}
function o5 ()
{
   document.getElementById("jogo5").value = "O";
}
function o6 ()
{
   document.getElementById("jogo6").value = "O";
}
function o7 ()
{
   document.getElementById("jogo7").value = "O";
}
function o8 ()
{
   document.getElementById("jogo8").value = "O";
}
function o9 ()
{
   document.getElementById("jogo9").value = "O";
}

function termina()
{
   if(document.getElementById("jogo1").value == "X" && document.getElementById("jogo2").value == "X" && document.getElementById("jogo3").value == "X" || 
      document.getElementById("jogo4").value == "X" && document.getElementById("jogo5").value == "X" && document.getElementById("jogo6").value == "X" || 
      document.getElementById("jogo7").value == "X" && document.getElementById("jogo8").value == "X" && document.getElementById("jogo9").value == "X" || 
      document.getElementById("jogo1").value == "X" && document.getElementById("jogo4").value == "X" && document.getElementById("jogo7").value == "X" || 
      document.getElementById("jogo2").value == "X" && document.getElementById("jogo5").value == "X" && document.getElementById("jogo8").value == "X" || 
      document.getElementById("jogo3").value == "X" && document.getElementById("jogo6").value == "X" && document.getElementById("jogo9").value == "X" ||
      document.getElementById("jogo1").value == "X" && document.getElementById("jogo5").value == "X" && document.getElementById("jogo9").value == "X" || 
      document.getElementById("jogo3").value == "X" && document.getElementById("jogo5").value == "X" && document.getElementById("jogo7").value == "X")
      {
         alert ("Player X ganhou.");
      }
   else if (document.getElementById("jogo1").value == "O" && document.getElementById("jogo2").value == "O" && document.getElementById("jogo3").value == "O" || 
            document.getElementById("jogo4").value == "O" && document.getElementById("jogo5").value == "O" && document.getElementById("jogo6").value == "O" || 
            document.getElementById("jogo7").value == "O" && document.getElementById("jogo8").value == "O" && document.getElementById("jogo9").value == "O" || 
            document.getElementById("jogo1").value == "O" && document.getElementById("jogo4").value == "O" && document.getElementById("jogo7").value == "O" || 
            document.getElementById("jogo2").value == "O" && document.getElementById("jogo5").value == "O" && document.getElementById("jogo8").value == "O" || 
            document.getElementById("jogo3").value == "O" && document.getElementById("jogo6").value == "O" && document.getElementById("jogo9").value == "O" ||
            document.getElementById("jogo1").value == "O" && document.getElementById("jogo5").value == "O" && document.getElementById("jogo9").value == "O" || 
            document.getElementById("jogo3").value == "O" && document.getElementById("jogo5").value == "O" && document.getElementById("jogo7").value == "O")
         {
            alert ("Player O ganhou.");  
         }
   else if (!document.getElementById("jogo1").value || !document.getElementById("jogo2").value || !document.getElementById("jogo3").value || 
            !document.getElementById("jogo4").value || !document.getElementById("jogo5").value || !document.getElementById("jogo6").value || 
            !document.getElementById("jogo7").value || !document.getElementById("jogo8").value || !document.getElementById("jogo9").value)    
   {
      alert ("O jogo não terminou");
   }
   else {
      alert ("Empate");
   }
}
