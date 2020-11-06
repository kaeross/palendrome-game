import { GameHandler } from '../server/game-handler';


describe('Submit entry', () => {

    // Instantiate a single instance of the game handler
    const gameHandler = new GameHandler();

    it('should correctly score the palendrome phrase "Al lets Della call Ed \'Stella.\'"', () => {
        expect(gameHandler.submitEntry({ name: 'test', word: "Al lets Della call Ed \'Stella.\'" })).toBe(31);
    });

    it('should find that 9oo9 is a palendrome', () => {
        expect(gameHandler.submitEntry({ name: 'test', word: '9oo9' })).toBeGreaterThan(0);
    });

    it('should score the word paledrome 0', () => {
        expect(gameHandler.submitEntry({ name: 'test', word: 'palendrome' })).toBe(0);
    });
});