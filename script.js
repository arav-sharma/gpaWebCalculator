/* change */

function calculateGPA(){
  var classGrade1 = ((100-document.getElementById("grade1").value)*0.05);
  var classGrade2 = ((100-document.getElementById("grade2").value)*0.05);
  var classGrade3 = ((100-document.getElementById("grade3").value)*0.05);
  var classGrade4 = ((100-document.getElementById("grade4").value)*0.05);
  var classGrade5 = ((100-document.getElementById("grade5").value)*0.05);
  var classGrade6 = ((100-document.getElementById("grade6").value)*0.05);
  var classGrade7 = ((100-document.getElementById("grade7").value)*0.05);

  var classGPA1 = (document.getElementById("weight1").value - classGrade1);
  var classGPA2 = (document.getElementById("weight2").value - classGrade2);
  var classGPA3 = (document.getElementById("weight3").value - classGrade3);
  var classGPA4 = (document.getElementById("weight4").value - classGrade4);
  var classGPA5 = (document.getElementById("weight5").value - classGrade5);
  var classGPA6 = (document.getElementById("weight6").value - classGrade6);
  var classGPA7 = (document.getElementById("weight7").value - classGrade7);

  var classGPA1UW = (4 - classGrade1);
  var classGPA2UW = (4 - classGrade2);
  var classGPA3UW = (4 - classGrade3);
  var classGPA4UW = (4 - classGrade4);
  var classGPA5UW = (4 - classGrade5);
  var classGPA6UW = (4 - classGrade6);
  var classGPA7UW = (4 - classGrade7);

  var totalGPA = ((classGPA1+classGPA2+classGPA3+classGPA4+classGPA5+classGPA6+classGPA7)/7)
  var totalUWGPA = ((classGPA1UW+classGPA2UW+classGPA3UW+classGPA4UW+classGPA5UW+classGPA6UW+classGPA7UW)/7)
  document.getElementById("displayGPA").innerHTML="Weighted GPA: " + totalGPA;
  document.getElementById("displayUWGPA").innerHTML="Unweighted GPA: " + totalUWGPA;
}