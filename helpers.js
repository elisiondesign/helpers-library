function addClass(element, newClass) {
    if (typeof element == 'undefined') {
        return;
    } else if (!element.className) {
        element.className = newClass;
    } else {
        element.className = element.className.replace(/\s+$/gi, '') + ' ' + newClass;
    }
}

function removeClass(element, className) {
    if (typeof element == 'undefined') {
        return;
    }
    element.className = element.className.replace(className, '');
}

function getElementIndex(element, parentElement) {
    var index = Array.prototype.indexOf.call(parentElement.children, element);
    return index;
}

function toggleClass(element, className) {
    var visible = document.querySelector('.' + className);
    if (visible !== null) {
        element.classList.remove(className);
    } else {
        element.classList.add(className);
    }
}

function hasClass(element, className) {
    if (element.classList.contains(className)) {
        return true;
    }
    return false;
}

function makeRequest(url, callback) {

    var httpRequest = new XMLHttpRequest();
    if (!httpRequest) {
        return false;
    }

    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            callback(httpRequest.responseText);
        }
    };

    httpRequest.open('GET', url);
    httpRequest.send();
}

function parseSafeJSON(data) {
    var jsonString = data.replace(")]}',", "");
    return JSON.parse(jsonString);
}

//safely registers event listener
function addEvent(object, event, callback) {

    if (object == null || typeof(object) == 'undefined') return;

    if (object.addEventListener) {
        object.addEventListener(event, callback, false);

    } else if (object.attachEvent) {
        object.attachEvent("on" + event, callback);

    } else {
        object["on" + event] = callback;
    }
}