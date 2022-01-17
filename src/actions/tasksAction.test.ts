import { correctGuess } from "./tasksAction";

describe('testing correct guess action creator', () => {

    it('return an action of CorrectGuess', () => {
        /**
         * for object checking we use @function - .toEqual({})
         */
        const correctGuessAction = correctGuess();
        expect(correctGuessAction).toEqual({
            type: 'CorrectGuess'
        })
    })

})

describe('testing tasks Action', () => {

    it('', () => {

    })

})

