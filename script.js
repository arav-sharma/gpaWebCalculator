function calculateGPA(){
    // Calculates the difference in class grades from the max achievable grade of 100
    var classGrade1 = parseInt(((100-document.getElementById("grade1").value)*0.05));
    var classGrade2 = parseInt(((100-document.getElementById("grade2").value)*0.05));
    var classGrade3 = parseInt(((100-document.getElementById("grade3").value)*0.05));
    var classGrade4 = parseInt(((100-document.getElementById("grade4").value)*0.05));
    var classGrade5 = parseInt(((100-document.getElementById("grade5").value)*0.05));
    var classGrade6 = parseInt(((100-document.getElementById("grade6").value)*0.05));
    var classGrade7 = parseInt(((100-document.getElementById("grade7").value)*0.05));

    // Subtracts grade difference (above) from GPA difference from max achievable GPA 
    // (dependent on weight value: 5, 4.5, 4)
    var classGPA1 = parseInt((document.getElementById("weight1").value - classGrade1));
    var classGPA2 = parseInt((document.getElementById("weight2").value - classGrade2));
    var classGPA3 = parseInt((document.getElementById("weight3").value - classGrade3));
    var classGPA4 = parseInt((document.getElementById("weight4").value - classGrade4));
    var classGPA5 = parseInt((document.getElementById("weight5").value - classGrade5));
    var classGPA6 = parseInt((document.getElementById("weight6").value - classGrade6));
    var classGPA7 = parseInt((document.getElementById("weight7").value - classGrade7));

    // Same as above but weight is set to 4 for unweighted
    var classGPA1UW = parseInt((4 - classGrade1));
    var classGPA2UW = parseInt((4 - classGrade2));
    var classGPA3UW = parseInt((4 - classGrade3));
    var classGPA4UW = parseInt((4 - classGrade4));
    var classGPA5UW = parseInt((4 - classGrade5));
    var classGPA6UW = parseInt((4 - classGrade6));
    var classGPA7UW = parseInt((4 - classGrade7));

    // Calculates average weighted & unweighted GPAs
    var totalGPA = parseFloat(((classGPA1+classGPA2+classGPA3+classGPA4+classGPA5+classGPA6+classGPA7)/7));
    var totalUWGPA = parseFloat(((classGPA1UW+classGPA2UW+classGPA3UW+classGPA4UW+classGPA5UW+classGPA6UW+classGPA7UW)/7));
    
    // Displays calculated GPA to website
    document.getElementById("header4").innerHTML="<u>Calculated GPAs:</u>";
    document.getElementById("displayGPA").innerHTML="<b>- Cumulative GPA: </b>" + totalGPA;
    document.getElementById("displayUWGPA").innerHTML="<b>- Unweighted GPA: </b>" + totalUWGPA;

    // Declares 9th Grade GPA Variables
    var weighted9 = document.getElementById("9thGPA").value;
    var unweighted9 = document.getElementById("9thUWGPA").value;

    // Averages 9th Grade GPA + Inputted Grades (i.e. 10th Grade)
    var weightedTotal = (parseFloat(totalGPA) + parseFloat(weighted9))*0.5;
    var unweightedTotal = (parseFloat(totalUWGPA) + parseFloat(unweighted9))*0.5;
    
    // Displays calculated (total) GPA to website
    document.getElementById("totalGPA").innerHTML="<b>- Total Cumulative GPA: </b>" + weightedTotal;
    document.getElementById("totalUWGPA").innerHTML="<b>- Total Unweighted GPA: </b>" + unweightedTotal;
    
    // Quartile Rankings (based on weighted GPA)
    var top10 = 4.1250;
    var qrt1 = 3.8892;
    var qrt2 = 3.5428;
    var qrt3 = 3.0250;
    var qrt4 = 3.0200;

    // Declares quartile text for website
    var displayqrt = document.getElementById("quartile")
    
    // Calculates quartile ranking
    if (weightedTotal >= top10) {
        displayqrt.innerHTML="<b>Quartile Rank:</b> Top 10%"
    }
    if (weightedTotal >= qrt1) and (weightedTotal < top10); {
        displayqrt.innerHTML="<b>Quartile Rank:</b> Quartile 1"
    }
    if (weightedTotal >= qrt2) and (weightedTotal < qrt1); {
        displayqrt.innerHTML="<b>Quartile Rank:</b> Quartile 2"
    }
    if (weightedTotal >= qrt3) and (weightedTotal < qrt2); {
        displayqrt.innerHTML="<b>Quartile Rank:</b> Quartile 3"
    }
    if (weightedTotal >= qrt4) and (weightedTotal < qrt3); {
        displayqrt.innerHTML="<b>Quartile Rank:</b> Quartile 4"
    }

    // Adds "disclaimer" or information regarding quartile calculations 
    document.getElementById("disclaimer").innerHTML = "<i> *based on 2023 AISD Calculations for C/O 2026</i>";
}
