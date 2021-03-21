/**
 * Created by simon on 19/10/2017.
 */
$(document).ready(function () {
    var _img = $("#img");
    var _btnAv = $("#btnAvanti");
    var _btnIn = $("#btnIndietro");
    var pathImg = "./img/", type = ".jpg", imgCorr=1;
    _img.prop("src", pathImg+imgCorr+type);
    _img.css("height", "200");
    _btnAv.on("click", function () {
    });
});