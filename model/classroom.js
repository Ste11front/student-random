class Classroom {
    constructor() {
      this.students = [];
    }
    addStudent(student) {
      this.students.push(student);
    }
    randomizeStudents() {
      for (let i = this.students.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.students[i], this.students[j]] = [this.students[j], this.students[i]];
      }
    }
    printSquads() {
        let squadNumber = 1;
        let result = '';
        for (let i = 0; i < this.students.length; i += 2) {
          result += `Squadra ${squadNumber}: ${this.students[i]} e ${this.students[i + 1]}\n`;
          squadNumber++;
        }
        return result;
    }
}  