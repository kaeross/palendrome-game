"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.GameHandler = void 0;
var score_handler_1 = require("./score-handler");
var GameHandler = /** @class */ (function () {
    function GameHandler() {
    }
    /**
     * Gets the top 5 scores
     *
     * @returns an array of the top 5 scores
     */
    GameHandler.prototype.getScores = function () {
        var allScores = score_handler_1.ScoreStore.getScores();
        var sortedScores = allScores.sort(function (a, b) {
            if (a.points === b.points) {
                return 0;
            }
            return a.points < b.points ? 1 : -1;
        });
        return __spreadArrays(sortedScores).splice(0, 5);
    };
    /**
     * Handles game submission
     *
     * @param entry an object containing the player name and word submission
     *
     * @returns the word score
     */
    GameHandler.prototype.submitEntry = function (entry) {
        var score = this.scoreWord(entry.word);
        score_handler_1.ScoreStore.setScore({ name: entry.name, points: score });
        return score;
    };
    /**
     * Scores a potential palendrome. The score is 0 if the word was not a palendrome
     *
     * @param word the submitted word to be scored
     *
     * @returns the score as a number
     */
    GameHandler.prototype.scoreWord = function (word) {
        return this.isPalendrome(word) ? word.length : 0;
    };
    /**
     * Checks whether a given word is a palendrome
     *
     * @param word the potential palendrome
     *
     * @returns true if the word is a palendrome
     */
    GameHandler.prototype.isPalendrome = function (word) {
        // Remove all special characters and spaces
        var alphabetOnly = word.toLowerCase().replace(/[^a-z0-9]/gi, '');
        // Reverse the word
        var reversed = alphabetOnly.split('').reverse().join('');
        return alphabetOnly === reversed;
    };
    return GameHandler;
}());
exports.GameHandler = GameHandler;
