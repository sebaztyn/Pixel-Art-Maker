// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function(event) {
    event.preventDefault();
    var columnValue = $("#inputHeight").val();
    var rowValue = $("#inputWeight").val();
    makeGrid(rowValue, columnValue);

});


function makeGrid(x, y) {
    // Your code goes here!
    $("tr").remove()
    for (var i = 1; i <= x; i++) {
        $("#pixelCanvas").append("<tr id=table" + i + "></tr>");
        for (var j = 1; j <= y; j++) {
            $("#table" + i).append("<td></td>");
        }
    }

var colorSelector;
$("td").click(function addColor() {
    colorSelector = $("#colorPicker").val();
    if($(this).attr("style")){
    	$(this).removeAttr("style");
    }else{
    	$(this).attr("style", 'background-color:' +colorSelector);
    	}
	});
}
