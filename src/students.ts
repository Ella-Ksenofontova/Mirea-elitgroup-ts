import type {
    Result, Student,
} from './models.js';
import { parseName } from './validation.js';

const students: Student[] = [];
let nextId = 1;

export function addStudent(
    rawName: unknown,
    group: string,
): Result<Student> {
    const parsed = parseName(rawName);
    if (!parsed.ok) return parsed;
    if (group.trim().length === 0) {
        return { ok: false, error: 'Укажите группу' };
    }
    const student: Student = {
        id: nextId++, name: parsed.value, group: group.trim(),
    };
    students.push(student);
    return { ok: true, value: { ...student } };
}

export function findById<T extends { id: number }>(
    items: readonly T[],
    id: number,
): T | undefined {
    return items.find((item) => item.id === id);
}
export function listStudents(): Student[] {
    return students.map((student) => ({ ...student }));
}

export function listByGroup(group: string): Student[] {
    const trimmedGroup = group.trim();

    return students.filter(student => student.group === trimmedGroup).map(res => {return {...res}});
}

export function getStudentCard(id: number): Pick<Student, "id" |
"name"> | undefined {
    const student = findById(students, id);
    if (student === undefined) return student;

    return {name: student.name, id: student.id};
}

export function countByGroup(): Record<string, number> {
    const groupsData: Record<string, number> = Object.create(null);

    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        if (student === undefined) continue;

        const group = student.group;
        if (groupsData[group] === undefined) {
            groupsData[group] = 1;
        } else {
            groupsData[group]++;
        }
    }

    return groupsData;
}