var autoGrid = function(){

    var rowMaker = function(){
        for(var i = 0; i < 16; i++){
            $("#table").append("<tr class='row'></tr>");
        }
    };
    rowMaker();

    var cellMaker = function(){
        for(var i = 0; i < 16; i++){
            $(".row").append("<td class='cell'></td>");
        }
    };
    cellMaker();
    console.log("autoGridRan");
}
autoGrid();

//color change when mouse enter
$("#table").on("mouseenter", ".cell", function(){
    $(this).css("background-color", "black");
})