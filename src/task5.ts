function normalizeGroup(value: unknown): string | undefined {
    if (typeof value !== "string") return undefined;
    const newValue = value.trim();

    if (!newValue.length) return undefined;

    return newValue;
}

for (let val of [" ЭГ-2 ", "  ", 42, null]) {
    console.log(normalizeGroup(val));

    /*
     ЭГ-2
    undefined
    undefined
    undefined
    */
}