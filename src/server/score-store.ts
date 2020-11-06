import { Score } from "./models/score";

class ScoreStore {

    /** Stores the scores */
    private static scores: Score[] = [];

    constructor() { }

    /**
     * Get the current scores
     * 
     * @returns an array of scores
     */
    public static getScores(): Score[] {
        return ScoreStore.scores;
    }

    /**
     * 
     * @param score the Score object
     */
    public static setScore(score: Score): void {
        const existingScore = ScoreStore.scores.find((s) => s.name === score.name);
        if (existingScore) {
            existingScore.points = score.points;
        }
        else {
            ScoreStore.scores.push(score);
        }
    }

}

export { ScoreStore };