function getGrade(grade) {
    if (grade < 3) {
        console.log(`Fail (2)`);
    } else if (grade < 3.50) {
        console.log(`Poor (${grade.toFixed(2)})`);
    } else if (grade < 4.50) {
        console.log(`Good (${grade.toFixed(2)})`);
    } else if (grade < 5.50) {
        console.log(`Very good (${grade.toFixed(2)})`);
    } else {
        console.log(`Excellent (${grade.toFixed(2)})`);
    }
}

getGrade(3.33)
getGrade(4.50)
getGrade(2.99)