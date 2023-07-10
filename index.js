const s1 = new Student('Ares', 'Fiumicelli', '1993', 'Are');
const s2 = new Student('Isabella', 'Ottonello', '1996', 'Isa');
const s3 = new Student('Francesca', 'Ercolani', '1989', 'Fra');
const s4 = new Student('Stefania', 'Ghergut', '1996', 'Stef');
const s5 = new Student('Manuela', 'Ariotti', '1988', 'Manu');
const s6 = new Student('Stefano', 'Florio', '1998', 'Ste');
const s7 = new Student('Luca', 'Verduci', '1999', 'Lu');
const s8 = new Student('Bryan', 'Rojas', '1994', 'Bry');
const s9 = new Student('Damiano', 'Di Lionardo', '1993', 'Dami');
const s10 = new Student('Cesare', 'Falzone', '2003', 'Cesa');


const class1 = new Classroom([s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]);



function renderPage(){

    const mainContainer = document.getElementById('main-container');

    mainContainer.innerHTML = '';
    
    for (let i = 0; i < class1.studentsArray.length; i++) {

        if(i % 2 === 0){
            const h3Element = document.createElement('h3');

            const node = document.createTextNode('Squadra ' + (i/2+1) + ': ');

            h3Element.appendChild(node);

            mainContainer.appendChild(h3Element);
        }

        const student = class1.studentsArray[i]
        
        const divElement = document.createElement('div');

        divElement.classList.add('student-div')

        const spanName = document.createElement('span');

        const textNodeName = document.createTextNode(student.toStringName());

        spanName.appendChild(textNodeName);

        divElement.appendChild(spanName);

        const spanSurname = document.createElement('span');

        const textNodeSurname = document.createTextNode(student.toStringSurname());

        spanSurname.appendChild(textNodeSurname); 

        divElement.appendChild(spanSurname);

        const spanYob = document.createElement('span');

        const textNodeYob = document.createTextNode(student.toStringYob());

        spanYob.appendChild(textNodeYob);

        divElement.appendChild(spanYob);

        const spanNickname = document.createElement('span');

        const textNodeNickname = document.createTextNode(student.toStringNickname());

        spanNickname.appendChild(textNodeNickname);

        divElement.appendChild(spanNickname);

        mainContainer.appendChild(divElement);
    }

}

renderPage();


function shuffle(){
    console.log('sto rimescolando');
    class1.shuffleStudents();
    renderPage();
}
