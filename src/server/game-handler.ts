import { ScoreStore } from "./score-store";
import { Score } from "./models/score";

class GameHandler {

    /**
     * Gets the top 5 scores
     * 
     * @returns an array of the top 5 scores
     */
    public getScores(): Score[] {
        const allScores = ScoreStore.getScores();

        const sortedScores = allScores.sort((a, b): number => {

            if (a.points === b.points) {
                return 0;
            }

            return a.points < b.points ? 1 : -1;
        });

        return [...sortedScores].splice(0, 5);
    }

    /**
     * Handles game submission
     * 
     * @param entry an object containing the player name and word submission
     * 
     * @returns the word score
     */
    public submitEntry(entry: { name: string, word: string }): number {
        const score = this.scoreWord(entry.word);
        ScoreStore.setScore({ name: entry.name, points: score });

        return score;
    }


    /**
     * Scores a potential palendrome. The score is 0 if the word was not a palendrome
     * 
     * @param word the submitted word to be scored
     * 
     * @returns the score as a number
     */
    private scoreWord(word: string): number {
        return this.isPalendrome(word) ? word.length : 0;
    }

    /**
     * Checks whether a given word is a palendrome
     * 
     * @param word the potential palendrome
     * 
     * @returns true if the word is a palendrome
     */
    private isPalendrome(word: string): boolean {
        // Remove all special characters and spaces
        const alphabetOnly = word.toLowerCase().replace(/[^a-z0-9]/gi, '');
        // Reverse the word
        const reversed = alphabetOnly.split('').reverse().join('');

        return alphabetOnly === reversed;
    }
}

export { GameHandler };