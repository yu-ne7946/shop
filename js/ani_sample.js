

var pages = new SpaAni(".page", ".ani",500);

$(".page").eq(3).mousemove(function(evt){
var delta =50;
var cX= evt.clientX;
var cY = evt.clientY;
var iX=$(this).find(".can").width()/2;
var iY=$(this).find(".can").height()/2;
console.log(cY);
var mX = (iX- cX)/delta;
var mY = (iY- cY)/delta;
$(this).find(".can").css("transform","translate("+ mX+"px,"+ mY+"px)");

});