export interface Student {
 readonly id: number;
 name: string;
 group: string;
 email?: string;
}
export type Result<T> =
 | { ok: true; value: T }
 | { ok: false; error: string };
export type StudentPatch =
 Partial<Pick<Student, 'name' | 'group'>>;

/* 
Задания 6-8
StudentCard ({name: string, id: number}) является описанием такой краткой карточки.

function getStudentCard(student: Student): StudentCard {
    return {name: student.name, id: student.id};
}

const unused = 1;
При запуске npm run lint строка выше вызовет ошибку
*/