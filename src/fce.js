(function(){
    "use strict";
    var FCE = {};

    // Helpers
    var forEach = function(elements, callback){
            [].forEach.call(elements,callback);
        },
        query = function(criteria){
            return document.querySelector(criteria);
        },
        queryAll = function(criteria){
            return document.querySelectorAll(criteria)
        },
        forEachElement = function(criteria, callback){
            forEach(queryAll(criteria), callback);
        },
        findParent = function(e, nodeName) {
            var current = e;
            while (current != null && current.nodeName != 'FORM')
                current = current.parentElement;
            return current;
        },
        createElement = function(name, attrs){
            var e = document.createElement(name);
            for ( var prop in attrs ) {
                e[prop] = attrs[prop]
            }
            return e;
        },
        log = function(msg){
            console.log(msg);
        };

function setValue(element) {
    var form = findParent(element, "FORM");
    if (form === null) { return; }

    var query = 'input[name=' + element.attributes['data-name'].value + ']';
    var hidden = form.querySelector(query);
    if (hidden === null) {return ; }

    hidden.value = element.innerHTML;
}

function attach(){
    forEachElement('form *[data-name]', function(e){
        addHiddenFor(e);
        setValue(e);
        e.addEventListener("click",onClick);
        e.addEventListener("blur",onBlur);
        e.addEventListener("input",onChange);
    });
}

function onChange(e){
    setValue(e.target);
}

function onClick(e){
    e.target.contentEditable = true;
}

function onBlur(e){
    onChange(e)
    e.targetcontentEditable = "inherit";
}

function addHiddenFor(target){
    var form = findParent(target, 'FORM'),
        element;
    if (form === null) { return null; }
    element = createElement('input', {"type":"hidden", "name": target.attributes['data-name'].value});
    form.insertBefore(element);
}

FCE['autoload'] = function(){
    window.addEventListener("load",attach, false);
    document.addEventListener("page:load",attach, false);
}


window.FCE = FCE;
})()
