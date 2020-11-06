"use strict";
exports.__esModule = true;
exports.ScoreStore = void 0;
var ScoreStore = /** @class */ (function () {
    function ScoreStore() {
    }
    /**
     * Get the current scores
     *
     * @returns an array of scores
     */
    ScoreStore.getScores = function () {
        return this.scores;
    };
    /**
     *
     * @param score the Score object
     */
    ScoreStore.setScore = function (score) {
        var existingScore = this.scores.find(function (s) { return s.name === score.name; });
        if (existingScore) {
            existingScore.points = score.points;
        }
        else {
            this.scores.push(score);
        }
    };
    /** Stores the scores */
    ScoreStore.scores = [];
    return ScoreStore;
}());
exports.ScoreStore = ScoreStore;
