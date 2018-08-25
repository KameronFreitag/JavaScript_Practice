var outputDiv = document.getElementById("quizOutput");

function print( itemToPrint )
{
  outputDiv.innerHTML += itemToPrint;
}

//THIS IS HORRIBLY IMPLEMENTED AND INEFFICIENT
//BUT IT'S 3AM AND I'M BEAT
//FIX IT LATER!

var QandA = [["Q1","1",false],["Q2","2",false],["Q3","3",false]];
var answer = "";

print("<h2>Your Answers</h2>");
for(var i = 0; i < QandA.length; i+=1)
{
  answer = prompt(QandA[i][0]);
  if(answer === QandA[i][1])
  {
    print("<p>OOOOO " + answer + " OOOOO</p>");
    QandA[i][2] = true;
  }else {
    print("<p>XXXXX " + answer + " XXXXX</p>");
  }
}

print("<h2>CORRECT</h2>");
for(var k = 0; k < QandA.length; k+=1)
{
  if(QandA[k][2] === true)
  {
    print("<p>" + QandA[k][0] + "</p>");
    QandA.splice(k, 1);
    k-=1;
  }
}

/**/
print("<h2>INCORRECT</h2>");
while(QandA.length > 0)
{
  print("<p>" + QandA[0][0] + "</p>");
  QandA.splice(0,1);
}
/**/
document.write("</div>");
