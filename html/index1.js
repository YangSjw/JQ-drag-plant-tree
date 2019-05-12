
function init() {
    console.log(1)
    console.log(document.body.clientWidth)
    console.log($("#ground").offset().top)
    console.log($("#ground").offset().left)
};
init();
$(function(){
    var iX, iY, oX, oY;
    var grX = $("#ground").offset().left;
    var grY = $("#ground").offset().top;
    $("#drag").on('mousedown',function(e) {
        iX = e.clientX - $("#drag").offset().left;
        iY = e.clientY - $("#drag").offset().top;
        $(document).on('mousemove',function(ev) {
                var evv = ev || window.event;
                oX = evv.clientX - iX;
                oY = evv.clientY - iY;
                $("#drag").css({
                    "left":oX + "px", "top":oY + "px"
                });
        });
        $(document).on('mouseup',function(evn) {
            if(oX>grX){
                $("#drag").css({
                    "left":25 + "%", "top":12 + "%"
                })
            }else{
                $("#drag").css({
                    "left":12 + "%", "top":12 + "%"
                })
            }
            $(document).off('mousemove');
            evn.cancelBubble = true;
        })
  
    });

})