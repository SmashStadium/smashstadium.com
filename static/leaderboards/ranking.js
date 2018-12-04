
function getRelOffset($element, event) {
    var parentOffset = $element.offset();
    var relX = event.pageX - parentOffset.left;
    var relY = event.pageY - parentOffset.top;
    return {
        x: relX,
        y: relY
    };
}

function setRelPos($element, offset) {
    $element.css({
        top: (offset.y+"px"),
        left: (offset.x+"px")
    });
}

function generateTooltip(text) {
    var $tooltip = $("<div>", {class: "tooltip"});
    $tooltip.text(text);
    return $tooltip;
}

/* comment hover handling */
$(".ldb-comment-inner").mouseenter(function(event) {
    var $wrapper = $("#wrapper");
    var offset   = getRelOffset($wrapper, event);
    var $tooltip = generateTooltip($(this).text().trim());
    var offset   = getRelOffset($wrapper, event);
    setRelPos($tooltip, {
            x: offset.x-$tooltip.width(),
            y: offset.y
    });
    $wrapper.append($tooltip);
    $tooltip.fadeIn(100);
}).mouseleave(function(event) {
    $(".tooltip").fadeOut(100, function() {
        $(this).remove();
    });
}).mousemove(function(event) {
    var $wrapper = $("#wrapper");
    var $tooltip = $(".tooltip");
    var offset   = getRelOffset($wrapper, event);
    setRelPos($tooltip, {
            x: offset.x-$tooltip.outerWidth(),
            y: offset.y
    });
});