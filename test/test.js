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
    it('should not add a class which already exists', function(){
        var element = {
            className: 'test-class'
        };

        addClass(element, 'test-class');
        assert.equal(element.className, 'test-class');
    });
});
describe('SVGaddclass', function() {
    it('should add a class to svg', function() {
        var element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

        SVGaddClass(element, 'test-class');
        assert.equal(element.getAttribute('class'), 'test-class');
    });
    it('should add space between multiple svg classes', function() {
        var element = document.createElement('p');
        element.classList.add('test-class');

        SVGaddClass(element, 'test-class2');
        assert.equal(element.getAttribute('class'), 'test-class test-class2');
    });
    it('should not add a class to svg which already exists', function(){
        var element = document.createElement('p');
        element.classList.add('test-class');

        SVGaddClass(element, 'test-class');
        assert.equal(element.className, 'test-class');
    });
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
describe('toggleClass',function () {
    it('should remove a class if exists', function () {
       var element = document.createElement('p');
       element.classList.add('test-class');

       toggleClass(element, 'test-class');
       assert.equal(element.className, '');
    });
    it('should add a class if it does not exist', function () {
       var element = document.createElement('p');
       
       toggleClass(element, 'test-class');
       assert.equal(element.className, 'test-class');
    });
});
