import type { Result } from './models.js';
export function parseName(value: unknown): Result<string> {
    if (typeof value !== 'string') {
        return { ok: false, error: 'Имя должно быть строкой' };
    }
    const name = value.trim();
    if (name.length === 0) {
        return { ok: false, error: 'Имя не должно быть пустым' };
    }
    return { ok: true, value: name };
}