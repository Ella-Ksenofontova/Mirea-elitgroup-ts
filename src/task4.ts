const grades: number[] = [0, 75, 90];
const first = grades[0];


/*
console.log(first.toFixed(1));
Предупреждение IDE возникает из-за того, что длина массива может быть нулевой - тип number[] этого не запрещает. Правильный синтаксис такой:
console.log(first?.toFixed(1));
*/
