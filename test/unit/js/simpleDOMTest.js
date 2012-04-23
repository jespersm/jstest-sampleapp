Loader.load("test/unit/js/env.rhino-1.2.js")
Loader.load("test/unit/js/qunit-boilerplate.js")
Loader.load("test/unit/js/jquery-1.7.1.js")

module("basic DOM Test");

test("query the DOM with jQuery", function() {
    $('<div id="myp">Some Text</div>').appendTo(document.body);
    equal("Some Text", $('#myp').text(), "Expected 'Some Text' to be in the div element");
});