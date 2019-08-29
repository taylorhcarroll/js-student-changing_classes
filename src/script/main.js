const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]


// //creates a student
// const createStudentComponent = (name, subject, info, grade) => {
//     return `
//         <div class="student">
//             <h1 class="xx- large ${grade}">${name}</h1>
//             <section class= "bordered dashed section--padded">${subject}</section>
//             <aside class="pushRight">${info}</aside>
//         </div>
//     `;
// };

// // Then store a reference to an existing HTML element
// const studentContainer = document.querySelector("#container")

// //position the students on the DOM
// for (let i = 0; i < students.length; i++) {
//     const student = students[i];
//     //changes student class based on score
//     let studentComponent;
//     if (student.score >= 60) {
//         studentComponent = "passing";
//     } else {
//         studentComponent = "failing";
//     }
//     // Update its contents with the return value of the function
//     studentContainer.innerHTML += createStudentComponent(
//         student.name,
//         student.subject,
//         student.info,
//         studentComponent
//     );
// }


// //creates a student
// const createStudentComponent = (name, subject, info, grade) => {
//     return `
//         <div class="student">
//             <h1 class="xx- large ${grade}">${name}</h1>
//             <section class= "bordered dashed section--padded">${subject}</section>
//             <aside class="pushRight">${info}</aside>
//         </div>
//     `;
// };

//object that defines a student who passed
const passed = (person) => {
    return `
    <div class="student">
    <h1 class="xx-large passing">${person.name}</h1>
    <section class="bordered dashed section--padded">${person.subject}</section>
    <aside class="pushRight">${person.info}</aside>
</div>`
}

//object that defines a student who failed
const failed = (person) => {
    return `
    <div class="student">
    <h1 class="xx-large failing">${person.name}</h1>
    <section class="bordered dashed section--padded">${person.subject}</section>
    <aside class="pushRight">${person.info}</aside>
</div>`
}

//allows you to place the objects on the DOM
let studentContainer = document.querySelector("#container");

//function to create students based on score
for (const student of students) {
    console.log(student.score); //console to make sure this function was actually doing something
    let studentComponent = ""
    if (student.score >= 60) {
        studentComponent = passed(student)     
    } else {
        studentComponent = failed(student)
    }
    studentContainer.innerHTML += studentComponent;
}


