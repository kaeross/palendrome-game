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
     * Adds the score to the score store
     * 
     * Adds all scores as a new score even if the player exists to allow multiple, non cumulative, turns
     * 
     * @param score the Score object
     */
    public static setScore(score: Score): void {
        ScoreStore.scores.push(score);
    }

}

export { ScoreStore };