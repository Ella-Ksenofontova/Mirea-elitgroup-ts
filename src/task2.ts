function passingScores(values: number[]): number[] {
    return values.filter(score => 60 <= score && score <= 100);
}

console.log(passingScores( [0, 59, 60, 100, 101])); // [60, 100]