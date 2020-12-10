var activeIndex = 0;
var scrollTopPadding = -100;
var wrapper;
var fields;
function setActiveTab() {
    fields.removeClass('active');
    var activeField = fields.eq(activeIndex);
    activeField.addClass('active');
    activeField.find('input').focus();
}
function scrollToActiveField(field) {
    var index = fields.index(field);
    if (index !== activeIndex) {
        activeIndex = index;
        var offset = $(field).offset().top;
        wrapper.animate({ scrollTop: wrapper.scrollTop() + offset + scrollTopPadding }, 200);
        setActiveTab();
    }
}
function scrollToActiveFieldByIndex(index) {
    scrollToActiveField(fields.eq(index));
}
$(document).ready(function () {
    wrapper = $('.wrapper');
    fields = $('.field');
    fields.click(function () {
        scrollToActiveField(this);
    });
    var inputs = $('.field input');
    inputs.focus(function () {
        scrollToActiveField($(this).parent());
    });
    inputs.keydown(function (event) {
        if (event.keyCode === 13 && this.validity.valid) { // enter
            var nextInputIndex = inputs.index(this) + 1;
            if (nextInputIndex < inputs.length) {
                inputs.eq(nextInputIndex).focus();
            }
        }
    });
    setActiveTab();
});