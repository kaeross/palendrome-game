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
        this.validate(entry.word);

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
        const alphabetOnly = word.toLowerCase().replace(/\s/gi, '');
        // Reverse the word
        const reversed = alphabetOnly.split('').reverse().join('');

        return alphabetOnly === reversed;
    }

    /**
     * Checks whether a word is valid, ie does it contain anything other than letters, digits or spaces
     * 
     * If the word is not valid an error will be thrown
     * 
     * @param word the string to validate
     */
    private validate(word: string): void {
        const valid = word.replace(/[^\s\w\d]/gi, '').length === word.length;

        if (!valid) {
            const error = new Error('Alphanumeric characters and spaces only');
            error.name = 'BadRequest';

            throw error;
        }
    }
}

export { GameHandler };