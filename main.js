const s1 = new Student("manuela", "ariotti");
const s2 = new Student("damiano", "di lionardo");
const s3 = new Student("cesare", "falzone");
const s4 = new Student("luca", "verduci");
const s5 = new Student("isabella", "ottonello");
const s6 = new Student("stefania", "ghergut");
const s7 = new Student("ares", "fiumicelli");
const s8 = new Student("francesca", "ercolani");
const s9 = new Student("stefano", "florio");
const s10 = new Student("bryan", "rojas");

console.log(s1.toString());

const class1 = new Classroom([s1,s2,s3,s4,s5,s6,s7,s8,s9,s10]);

//console.log(document);

//console.log(document.getElementById('main-container'));

// const mainContainer = document.getElementById('main-container');

// const h2Element = document.createElement('h2');

// const textNode = document.createTextNode(s1.toString());

// mainContainer.appendChild(textNode);

// mainContainer.appendChild(h2Element);

function renderPage() {
    const mainContainer = document.getElementById('main-container');
    for (const student of class1.studentsArray[i]) {
        const h2Element = document.createElement('h2');
        const textNode = document.createTextNode(student.toString());
        h2Element.appendChild(textNode);
        mainContainer.appendChild(h2Element);
    }
}

// card