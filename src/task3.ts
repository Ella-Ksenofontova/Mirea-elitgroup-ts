interface Student {
    readonly id: number;
    name: string,
    group: string,
    email?: string;
    status: EnrollmentStatus
}

type EnrollmentStatus = "active" | "paused" | "finished";

/*
const student: Student = {id: 1, name: "Ella", group: "ЭГ-01-25", status: "unknown"}

Ошибка возникает из-за того, что строка "unknown" не может быть преобразована ни в одну из строк "active" | "paused" | "finished", которые образуют тип EnrollmentStatus
*/