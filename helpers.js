function addClass(element, newClass) {
    if (typeof element == 'undefined') {
        return;
    } else if (!element.className) {
        element.className = newClass;
    } else if ((' ' + element.className + ' ').indexOf(' ' + newClass + ' ') > -1){
        return;
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

function SVGaddClass (element, newClass){
    if (typeof element == 'undefined'){
        return;
    } else if (element.getAttribute('class') == null){
        element.setAttribute('class', newClass);
    } else if (hasClass(element, newClass)){
        return;
    } else {
        element.setAttribute('class', element.getAttribute('class') + ' ' + newClass);
    }
}

function hasClass (element, className){
    return new RegExp('(\\s|^)' + className + '(\\s|$)').test(element.getAttribute('class'));
}

function getElementIndex(element, parentElement) {
    var index = Array.prototype.indexOf.call(parentElement.children, element);
    return index;
}

function toggleClass(element, className) {
    var visible = element.classList.contains(className);

    if (visible) {
        element.classList.remove(className);
    } else {
        element.classList.add(className);
    }
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

// to compare only with max width, send MQwidth(null, 'number');
function MQwidth(min, max = null){
    if (min !== null){
       var minimum = window.matchMedia('(min-width: ' + min + 'px)');
    }

    if (max !== null){
       var maximum = window.matchMedia('(max-width: ' + max + 'px)');
    }

   if (min !== null && max !== null){
        return (minimum.matches && maximum.matches);
    } else if (min !== null){
        return minimum.matches;
    } else if (max !== null){
        return maximum.matches;
    } else {
        return;
    }
}