import { isEvenOrOdd } from '../../isEvenOrOdd';

describe('Testing function isEvenOrOdd', () => {
    it('Should return "Even" for an even number', () => {
        expect(isEvenOrOdd(2)).to.equal('Even');
    });

    it('Should return "Odd" for an odd number', () => {
        expect(isEvenOrOdd(7)).to.equal('Odd');
    });
});