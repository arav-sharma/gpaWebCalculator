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
    document.getElementById("header4").innerHTML="<u>Calculated GPAs:</u>";
    document.getElementById("displayGPA").innerHTML="<b>- Cumulative GPA: </b>" + totalGPA;
    document.getElementById("displayUWGPA").innerHTML="<b>- Unweighted GPA: </b>" + totalUWGPA;
    // ------------------------------------------------------------------------------------------------------------ //
    var weighted9 = document.getElementById("9thGPA").value;
    var unweighted9 = document.getElementById("9thUWGPA").value;

    var weightedTotal = (parseInt(totalGPA) + parseInt(weighted9))*0.5;
    var unweightedTotal = (parseInt(totalUWGPA) + parseInt(unweighted9))*0.5;
    
    document.getElementById("totalGPA").innerHTML="<b>- Total Cumulative GPA: </b>" + weightedTotal;
    document.getElementById("totalUWGPA").innerHTML="<b>- Total Unweighted GPA: </b>" + unweightedTotal;
    // ------------------------------------------------------------------------------------------------------------ //

    var top10 = 4.1250;
    var qrt1 = 3.8892;
    var qrt2 = 3.5428;
    var qrt3 = 3.0250;
    var qrt4 = 3.0200;

    var displayqrt = document.getElementById("quartile")
    
    if (weightedTotal >= top10) {
        displayqrt.innerHTML="<b>Quartile Rank: Top 10%</b>"
    }
    if (weightedTotal >= qrt1) and (weightedTotal < top10); {
        displayqrt.innerHTML="<b>Quartile Rank: Quartile 1</b>"
    }
    if (weightedTotal >= qrt2) and (weightedTotal < qrt1); {
        displayqrt.innerHTML="<b>Quartile Rank: Quartile 2</b>"
    }
    if (weightedTotal >= qrt3) and (weightedTotal < qrt2); {
        displayqrt.innerHTML="<b>Quartile Rank: Quartile 3</b>"
    }
    if (weightedTotal >= qrt4) and (weightedTotal < qrt3); {
        displayqrt.innerHTML="<b>Quartile Rank: Quartile 4</b>"
    }

    document.getElementById("disclaimer").innerHTML = "<i> *based on 2023 AISD Calculations for C/O 2026</i>";
}
