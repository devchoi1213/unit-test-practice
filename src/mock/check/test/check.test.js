const check = require('../check');

describe('check', () => {
    let onSuccess;
    let onFail;

    beforeEach(() => {
        onSuccess = jest.fn();
        onFail = jest.fn();
    })

    it('should call onSuccess when predicate is true', function () {
        check(() => true, onSuccess, onFail);

        // expect(onSuccess.mock.calls.length).toBe(1);
        expect(onSuccess).toHaveBeenCalledTimes(1);
        // expect(onFail.mock.calls.length).toBe(0);
        expect(onFail).toHaveBeenCalledTimes(0);
        // expect(onSuccess.mock.calls[0][0]).toBe('yes');
        expect(onSuccess).toHaveBeenCalledWith('yes');
    });

    it('should call onFail when predicate is false', function () {
        check(() => false, onSuccess, onFail);

        expect(onSuccess.mock.calls.length).toBe(0);
        expect(onFail.mock.calls.length).toBe(1);
        expect(onFail.mock.calls[0][0]).toBe('no');
    });
})
