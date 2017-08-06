describe('addClass', function () {

    it('should add a class to element', function () {
        var element = document.createElement('p');

        addClass(element, 'test-class');
        assert.equal(element.className, 'test-class');
    });
    it('should add space between multiple classes', function () {
        var element = document.createElement('p');
        element.classList.add('test-class');

        addClass(element, 'test-class2');
        assert.equal(element.className, 'test-class test-class2');
    });
    it('should not add a class which already exists', function () {
        var element = document.createElement('p');

        addClass(element, 'test-class');
        assert.equal(element.className, 'test-class');
    });
    it('should add a class to svg', function () {
        var element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

        addClass(element, 'test-class');
        assert.equal(element.getAttribute('class'), 'test-class');
    });
    it('should add space between multiple svg classes', function () {
        var element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        element.classList.add('test-class');

        addClass(element, 'test-class2');
        assert.equal(element.getAttribute('class'), 'test-class test-class2');
    });
    it('should not add a class to svg which already exists', function () {
        var element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        element.classList.add('test-class');

        addClass(element, 'test-class');
        assert.equal(element.getAttribute('class'), 'test-class');
    });
});

describe('removeClass', function () {
    it('should remove class from element', function () {
        var element = document.createElement('p');
        element.classList.add('test-class');

        removeClass(element, 'test-class');
        assert.equal(element.className, '');
    });
    it('should remove svg class from element', function () {
        var element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        element.classList.add('test-class');

        removeClass(element, 'test-class');
        assert.equal(element.getAttribute('class'), '');
    });
    it('should handle an element without class tag declared', function () {
        var element = document.createElement('p');

        removeClass(element, 'test-class');
        expect(element.getAttribute('class')).to.be.null;
    });
});

describe('hasClass', function () {
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

describe('toggleClass', function () {
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

describe('getStyle', function () {
    it('should get current style of element', function () {
        var element = document.createElement('p');
        element.style.display = 'block';

        getStyle(element, 'block');
        assert.equal(element.style.display, 'block');
    });

});

// describe('isNodeList', function () {
//     it('should return true if object is a Node List', function () {
//         var element = document.createElement('p');
//         element.classList.add('test-class');
//         var nodeList = document.querySelectorAll['.test-class'];

//         isNodeList(nodeList);
//         assert.equal(isNodeList(nodeList), true);
//     });

// });

describe('isArray', function () {
    it('should return true if object is an array', function () {
        var element = [1, 2];

        isArray(element);
        assert.equal(isArray(element), true);
    });
    it('should return false if object is not an array', function () {
        var element = 1;

        isArray(element);
        assert.equal(isArray(element), false);
    });

});

describe('debounce', function () {
    it('should get current limit how often a function may initiate', function () {
        var counter = 1;
        var dynamicFunction = setInterval(debounce(function(counter){
            return counter++;
        }, 10), 100);

        setTimeout(function(){
            clearInterval(dynamicFunction);
            assert.equal(counter, 2);
        }, 200);

    });

});
