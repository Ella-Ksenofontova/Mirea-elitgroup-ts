import { addStudent, getStudentCard, listByGroup, listStudents, countByGroup }
    from './students.js';

addStudent("Анна", "ЭГ-2");
addStudent("Илья", "ЭГ-2");
addStudent("Мария", "ЭГ-3");

console.log(listStudents());
console.log(listByGroup(' ЭГ-2 '));
console.log(listByGroup('эг-2'));
console.log(listByGroup(''));

console.log(getStudentCard(2));
console.log(getStudentCard(999));

const first = listStudents()[0]

if (first) first.name = "Виктор";

console.log(listStudents());

addStudent("111", "__proto__");
console.log(countByGroup());

