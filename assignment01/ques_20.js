// 20. Write a code which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-79, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F


function getGrade(num){
    if(num<=100 && num >=80){
        console.log("Grade A")
    }
    else if (num <=79 && num>=70 ){
        console.log("Grade B")
    }
    else if (num <=69 && num>=60 ){
        console.log("Grade C")
    }
    else if (num <=59 && num>=50 ){
        console.log("Grade D")
    }
    else {
        console.log("Grade F")
    }
}
getGrade(12)
getGrade(51)
getGrade(61)
getGrade(71)
getGrade(81)
getGrade(100)