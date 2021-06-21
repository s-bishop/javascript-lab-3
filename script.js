"use strict"

// 1.Declare a variable named submissions that is initialized to an array with the following objects: name, score, date, passed




const submissions = [
    {
        name:"Jane",
        score:95,
        date:"2020-01-04",
        passed:true
    },
    {
        name:"Joe",
        score:77,
        date:"2018-05-14",
        passed:true
    },
    {
        name:"Jack",
        score:59,
        date:"2019-07-05",
        passed:false
    },
    {
        name:"Jill",
        score:88,
        date:"2020-04-22",
        passed:true
    }
]
console.log(submissions)


// 2.Declare a function named addSubmission
// (1)Parameter(s): array, newName, newScore, newDate
// (2)Functionality: construct an object and push it into the array. The object must have the same properties as the objects already in the array. Use conditional statements to set the value for the passed property to true if the score is greater than or equal to 60 and false otherwise.

function addSubmission(array, newName, newScore, newDate) {
    let newObject={
        name: newName,
        score: newScore,
        date: newDate,
        passed: newScore >= 60,
    };

    submissions.push(newObject)
}

addSubmission(submissions, "John", 55, "2012-04-08")



// 3.Declare a function named deleteSubmissionByIndex
// (1)Parameter(s): array, index
// (2)Functionality: remove the object from the array at the specified index using the splice method.

function deleteSubmissionByIndex (array, index){
    submissions.splice(index, 1);
    console.log(submissions);
}

deleteSubmissionByIndex(submissions, 0)


// 4.Declare a function named deleteSubmissionByName
// (1)Parameter(s): array, name
// (2)Functionality: remove the object from the array that has the provided name.  Incorporate the findIndex method and the splice method.

function deleteSubmissionByName (array, name){
    let index = array.findIndex(element => element.name === name)
    submissions.splice(index, 1);
        console.log(submissions)
}
deleteSubmissionByName(submissions, "Joe")

// 5.Declare a function named editSubmission
// (1)Parameter(s): array, index, score
// (2)Functionality: update an object’s score in the array at the specified index. Use conditional statements to set the value for the passed property to true if the score is greater than or equal to 60 and false otherwise.

function editSubmission (array, index, score){
    submissions[index].score = score;
    submissions[index].passed = score >= 60;
    console.log(submissions);
}
editSubmission(submissions, 0, 92)

// 6.Declare a function named findSubmissionByName
// (1)Parameter(s): array, name
// (2)Functionality: return the object in the array that has the provided name. Use the find method.

function findSubmissionByName (array, name){
    let findObject = array.find(element => element.name === name);
    console.log(findObject);
}
findSubmissionByName(submissions, "Jack")

// 7.Declare a function named findLowestScore
// (1)Parameter(s): array
// (2)Functionality: return the object in the array that has the lowest score. Use the forEach method to loop through the whole array.

function findLowestScore (array) {
    let scoreArray = array.map(a => a.score);
    let lowScore = scoreArray[0];
    scoreArray.forEach(function(score){
        if (score <= lowScore){
            lowScore = score;
        }
    })
    let lowestScoreObject = array.find(element => element.score === lowScore);
    console.log(lowestScoreObject);
}
findLowestScore(submissions)

// 8.Declare a function named findAverageScore
// (1)Parameter(s): array
// (2)Functionality: return the average quiz score.  Use a for...of loop.

function findAverageScore (array) {
    let scoreArray = array.map(a => a.score);
    let total = 0;
    let finalTotal = 0;
    for (let score of scoreArray){
        total += score
    }
    finalTotal = total / scoreArray.length;
    let roundTotal = Math.round(finalTotal * 100) / 100;
    console.log(roundTotal);
}
findAverageScore(submissions)

// 9.Declare a function named filterPassing
// (1)Parameter(s): array
// (2)Functionality: return a new array using the filter method. The filter method should find objects in the array that have passing scores. 

function filterPassing (array) {
    console.log("The passing scores are:");
    console.log(array.filter(element => element.passed === true));
}

filterPassing(submissions);

// 10>Declare a function named filter90AndAbove
// (1)Parameter(s): array
// (2)Functionality: return a new array using the filter method. The filter method should find objects in the array that have scores greater than or equal to 90.


function filter90AndAbove (array) {
    console.log("These scores are 90 and above:");
    console.log(array.filter(element => element.score >= 90));
}
filter90AndAbove(submissions)