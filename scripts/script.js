var row = 9;

$('.sec-part').on('change','.form-control',function(event) {
    calculate();
});

$('.out').change(function(event) {
    console.log('change');
});

$('.sal').change(function(event) {
    calculate();
});


$('.calculate').click(function(event) {
    calculate();
});

$('.sec-part').on('mouseenter','.dbtnc',function(){
    $("#"+$(this).attr("id")).addClass("dbtnc-r");
    $("#"+$(this).attr("id")).removeClass("dbtnc-w");
});

$('.sec-part').on('mouseleave','.dbtnc',function(){
    $("#"+$(this).attr("id")).removeClass("dbtnc-r");
    $("#"+$(this).attr("id")).addClass("dbtnc-w");
});


$('.sec-part').on('click','.dbtnc',function(){
    $("#data"+$(this).attr("id").substring(4,)).remove();
    calculate();
});

$(".addMore").click(function(){
    $(this).before( '<div class="input-group mb-3" id="data-' + row + '">'+
                        '<div class="input-group-prepend">'+
                            '<input class="input-group-text other-key" value="Other">'+
                        '</div>'+
                        '<input type="number" class="data form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" value="0">'+
                        '<div class="delete-btn">'+
                            '<i class="fas fa-times dbtnc dbtnc-w" id="dbtn-'+ row + '"></i>'+
                        '</div>'+
                    '</div>' );
    row++;
    calculate();
});

var total = 0;
var data = $(".data");
for(var i = 0; i < data.length; i++){
    total += Number(data[i].value);
}
if((Number($(".sal")[0].value) - total) > 0 ){
    if(!$(".out").hasClass("out-g")){
        $(".out").removeClass("out-r");
        $(".out").addClass("out-g");
    } 
}else{
    if(!$(".out").hasClass("out-r")){
        $(".out").removeClass("out-g");
        $(".out").addClass("out-r");
    } 
}
$(".out").val(Number($(".sal")[0].value) - total);

function calculate(){
    var total = 0;
    var data = $(".data");
    for(var i = 0; i < data.length; i++){
        total += Number(data[i].value);
    }
    if((Number($(".sal")[0].value) - total) > 0 ){
        if(!$(".out").hasClass("out-g")){
            $(".out").removeClass("out-r");
            $(".out").addClass("out-g");
        } 
    }else{
        if(!$(".out").hasClass("out-r")){
            $(".out").removeClass("out-g");
            $(".out").addClass("out-r");
        } 
    }
    $(".out").val(Number($(".sal")[0].value) - total);
}