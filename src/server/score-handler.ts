import { Score } from "./models/score";

abstract class ScoreStore {

    /** Stores the scores */
    private static scores: Score[] = [];

    /**
     * Get the current scores
     * 
     * @returns an array of scores
     */
    public static getScores(): Score[] {
        return this.scores;
    }

    /**
     * 
     * @param score the Score object
     */
    public static setScore(score: Score): void {
        const existingScore = this.scores.find((s) => s.name === score.name);
        if (existingScore) {
            existingScore.points = score.points;
        }
        else {
            this.scores.push(score);
        }
    }

}

export { ScoreStore };