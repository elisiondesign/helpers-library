var assert = chai.assert;

describe('addClass', function() {
    it('should add class to element', function() {
        var element = {
            className: ''
        };

        addClass(element, 'test-class');
        assert.equal(element.className, ' test-class');
    });

    it('should not add a class which already exists');
});

describe('removeClass', function() {
    it('should remove class from element', function() {
        var element = {
            className: 'test-class'
        };

        removeClass(element, 'test-class');
        assert.equal(element.className, '');
    });
});