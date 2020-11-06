import { GameHandler } from '../server/game-handler';


describe('Submit entry', () => {

    // Instantiate a single instance of the game handler
    const gameHandler = new GameHandler();

    it('should correctly score the palendrome phrase "Al lets Della call Ed \'Stella.\'"', () => {
        expect(gameHandler.submitEntry({ name: 'test', word: "Al lets Della call Ed \'Stella.\'" }) === 31).toBe(true);
    });
});