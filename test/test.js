var assert = chai.assert;

describe('addClass', function() {
    it('should add a class to element', function() {
        var element = {
            className: ''
        };

        addClass(element, 'test-class');
        assert.equal(element.className, 'test-class');
    });
    it('should add space between multiple classes', function() {
        var element = {
            className: 'test-class'
        };

        addClass(element, 'test-class2');
        assert.equal(element.className, 'test-class test-class2');
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
describe('hasClass',function () {
    it('should return true when element has a class', function () {
       var element = document.createElement('p');
       element.classList.add('test-class');
       var res = hasClass(element, 'test-class');
       assert.equal(res, true);
    });
    it('should return false when element does not have a class', function () {
       var element = document.createElement('p');
       var res = hasClass(element, 'test-class');
       assert.equal(res, false);
    });
});