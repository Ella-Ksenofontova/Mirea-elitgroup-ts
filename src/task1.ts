function greet(name: string): string {
 return `Привет, ${name}!`;
}

/* 
console.log(greet(42));
    Будет ошибка из-за того, что тип значения 42 - number, а функция ожидает значение string. 

    Возможное решение - greet("42");
*/