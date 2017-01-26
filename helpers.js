function addClass (element, newClass){

    // Check if elemnt exists, exit if not
    if (!element){
        return;
    } 

    // if the element has no class, just add a new class
    else if (element.getAttribute('class') == null){
        element.setAttribute('class', newClass);
    } 

    // if the class already exists, exit
    else if (hasClass(element, newClass)){
        return;
    } 

    // If the element already has a class, add the new one to the list
    else {
        element.setAttribute('class', element.getAttribute('class') + ' ' + newClass);
    }
}

function removeClass (element, className){
    // Check if element exists, exit if not
    if (!element) {
        return;
    }

    // first get the current class list, get rid of the desired class and return new state
    var newState = element.getAttribute('class').replace(new RegExp('(\\s|^)' + className + '(\\s|$)', 'g'), '$2');

    //set the new class list
    element.setAttribute('class', newState);
}

function hasClass (element, className){

    // test if the element has contains given class
    // return TRUE if yes
    return new RegExp('(\\s|^)' + className + '(\\s|$)').test(element.getAttribute('class'));
}

function getElementIndex(element, parentElement) {
    // determine numerical position (index) of the element within the parrent
    var index = Array.prototype.indexOf.call(parentElement.children, element);
    return index;
}

function toggleClass(element, className) {
    // Determine whether the element contains given class
    var visible = element.classList.contains(className);

    // if yes, remove it
    if (visible) {
        removeClass(element, className);
    } 

    // if not, add it to the list
    else {
        addClass(element, className);
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

// determine window width the same way CSS @media does

function mqWidth(min, max = null){
    // to compare only with max width, send MQwidth(null, 'number');

    // set if minimum width is given
    if (min !== null){
       var minimum = window.matchMedia('(min-width: ' + min + 'px)');
    }

    // set if maxium width is given
    if (max !== null){
       var maximum = window.matchMedia('(max-width: ' + max + 'px)');
    }

    // check if both min and max widths are met by current window size
   if (min !== null && max !== null){
        return (minimum.matches && maximum.matches);
    } 

    // check if maximum width is met
    else if (min !== null){
        return minimum.matches;
    } 

    // check if minimum width is met
    else if (max !== null){
        return maximum.matches;
    } 

    // prevent unforseen errors
    else {
        return;
    }
}

//export for easier testing with mocha
if (typeof module !== 'undefined' && module.exports != null) {
    exports.addClass = addClass;
    exports.removeClass = removeClass;
    exports.hasClass = hasClass;
    exports.toggleClass = toggleClass;
    exports.makeRequest = makeRequest;
    exports.parseSafeJSON = parseSafeJSON;
    exports.addEvent = addEvent;
    exports.mqWidth = mqWidth;
}