var chai = require('chai');
var assert = chai.assert;
var jsdom = require('mocha-jsdom');
var helpers = require('../helpers.js');

//initialize DOM
jsdom();

describe('addClass', function () {

    it('should add a class to element', function () {
        var element = document.createElement('p');

        helpers.addClass(element, 'test-class');
        assert.equal(element.className, 'test-class');
    });
    it('should add space between multiple classes', function () {
        var element = document.createElement('p');
        element.classList.add('test-class');

        helpers.addClass(element, 'test-class2');
        assert.equal(element.className, 'test-class test-class2');
    });
    it('should not add a class which already exists', function () {
        var element = document.createElement('p');

        helpers.addClass(element, 'test-class');
        assert.equal(element.className, 'test-class');
    });
    it('should add a class to svg', function () {
        var element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

        helpers.addClass(element, 'test-class');
        assert.equal(element.getAttribute('class'), 'test-class');
    });
    it('should add space between multiple svg classes', function () {
        var element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        element.classList.add('test-class');

        helpers.addClass(element, 'test-class2');
        assert.equal(element.getAttribute('class'), 'test-class test-class2');
    });
    it('should not add a class to svg which already exists', function () {
        var element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        element.classList.add('test-class');

        helpers.addClass(element, 'test-class');
        assert.equal(element.getAttribute('class'), 'test-class');
    });
});

describe('removeClass', function () {
    it('should remove class from element', function () {
        var element = document.createElement('p');
        element.classList.add('test-class');

       helpers.removeClass(element, 'test-class');
        assert.equal(element.className, '');
    });
    it('should remove svg class from element', function () {
        var element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        element.classList.add('test-class');

        helpers.removeClass(element, 'test-class');
        assert.equal(element.getAttribute('class'), '');
    });
});

describe('hasClass', function () {
    it('should return true when element has a class', function () {
        var element = document.createElement('p');
        element.classList.add('test-class');

        var res = helpers.hasClass(element, 'test-class');
        assert.equal(res, true);
    });
    it('should return false when element does not have a class', function () {
        var element = document.createElement('p');
        var res = helpers.hasClass(element, 'test-class');
        assert.equal(res, false);
    });
});

describe('toggleClass', function () {
    it('should remove a class if exists', function () {
        var element = document.createElement('p');
        element.classList.add('test-class');

        helpers.toggleClass(element, 'test-class');
        assert.equal(element.className, '');
    });
    it('should add a class if it does not exist', function () {
        var element = document.createElement('p');

        helpers.toggleClass(element, 'test-class');
        assert.equal(element.className, 'test-class');
    });
});

//TODO: figure out how to test window.matchMedia function

// describe('mqWidth', function () {
//     it('should return true if screen width falls within the min-width defined by css media queries', function () {
//         var minWidth = 200;

//         assert.equal(mqWidth(minWidth), window.matchMedia('(min-width: ' + minWidth + 'px)').matches);
//     });

//     it('should return true if screen width falls within the max-width defined by css media queries', function () {
//         var maxWidth = 200;

//         assert.equal(mqWidth(null, maxWidth), window.matchMedia('(max-width: ' + maxWidth + 'px)').matches);
//     });

//     it('should return true if screen width falls within the min-width and max-width defined by css media queries', function () {
//         var minWidth = 200;
//         var maxWidth = 2000;

//         assert.equal(mqWidth(minWidth, 2000), (window.matchMedia('(min-width: ' + minWidth + 'px)').matches) && window.matchMedia('(max-width: ' + maxWidth + 'px)').matches);
//     });

// });
