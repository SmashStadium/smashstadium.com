
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

function updateCharScores($charTable, info) {
    // use api to get new data
    // info would contain game, character, region, etc
    // this is a fill-in for what returned data would look like
    var data = [
        {
            player: "player1",
            country: "lebanon",
            score: "3.52 IGT",
            rank: "#1" 
        },
        {
            player: "player2",
            country: "usa",
            score: "3.53 IGT",
            rank: "#2" 
        },
        {
            player: "player3",
            country: "lebanon",
            score: "3.55 IGT",
            rank: "#3"
        }
    ];
    var $rows = $charTable.find(".char-table").children();
    $rows.each(function(index) {
        $(this).find(".char-rank").text(data[index].rank);
        $(this).find(".char-playername").text(data[index].player);
        $(this).find(".char-score").text(data[index].score);
        var $countryThumb = $(this).find(".thumb");
        $countryThumb.removeClass();
        $countryThumb.addClass("thumb thumb-flag-" + data[index].country);
        if ($(this).hasClass("char-row-sub")) {
            $countryThumb.addClass("thumb-tiny");
        }
    });
}

$(".char-region").click(function (e) {
    e.stopPropagation();
    e.preventDefault()
    var $char = $(this).parent().parent();
    updateCharScores($char, "not implemented");
    // switch region
    var $switch = $(this).parent();
    $switch.children().removeClass("char-region-active");
    $(this).addClass("char-region-active");
});

$(".char-collapse").change(function() {
    var classes = ".char-table, .char-region-switch";
        if(this.checked) {
            $(classes).hide();
        } else {
            $(classes).show();
        }
    });