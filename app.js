const manuela = new Student('Manuela');
const damiano = new Student('Damiano');
const cesare = new Student('Cesare');
const luca = new Student('Luca');
const stefano = new Student('Stefano');
const bryan = new Student('Bryan');
const francesca = new Student('Francesca');
const isabella = new Student('Isabella');
const stefania = new Student('Stefania');
const ares = new Student('Ares');

const classroom = new Classroom();
classroom.addStudent(manuela);
classroom.addStudent(damiano);
classroom.addStudent(cesare);
classroom.addStudent(luca);
classroom.addStudent(stefano);
classroom.addStudent(bryan);
classroom.addStudent(francesca);
classroom.addStudent(isabella);
classroom.addStudent(stefania);
classroom.addStudent(ares);

classroom.randomizeStudents();
classroom.printSquads();

console.log(classroom.printSquads());