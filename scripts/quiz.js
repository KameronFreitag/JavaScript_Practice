function paragraph( itemToPrint )
{
  document.write("<p>" + itemToPrint + "</p>");
}

//THIS IS HORRIBLY IMPLEMENTED AND INEFFICIENT
//BUT IT'S 3AM AND I'M BEAT
//FIX IT LATER!

var QandA = [["Q1","1",false],["Q2","2",false],["Q3","3",false]];
var answer = "";
document.write("<div>");
document.write("<h2>Your Answers</h2>");
for(var i = 0; i < QandA.length; i+=1)
{
  answer = prompt(QandA[i][0]);
  if(answer === QandA[i][1])
  {
    paragraph("OOOOO " + answer + " OOOOO");
    QandA[i][2] = true;
  }else {
    paragraph("XXXXX " + answer + " XXXXX");
  }
}

document.write("<h2>CORRECT</h2>");
for(var k = 0; k < QandA.length; k+=1)
{
  if(QandA[k][2] === true)
  {
    paragraph(QandA[k][0]);
    QandA.splice(k, 1);
    k-=1;
  }
}

/**/
document.write("<h2>INCORRECT</h2>");
while(QandA.length > 0)
{
  paragraph(QandA[0][0]);
  QandA.splice(0,1);
}
/**/
document.write("</div>");
