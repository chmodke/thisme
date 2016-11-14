/**
 * Created by kehao on 16-11-14.
 */
window.onload=function () {
    width_wranning();
}

function width_wranning(){
    var width=window.screen.width;
    if(width<980){
        document.getElementById('width_wranning').innerHTML='为获得最佳视觉效果，请使用宽度不小于980像素显示器';
    }
}