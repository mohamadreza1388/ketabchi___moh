$(function () {
    $('#open-close').click(function () {
        $('#menu ul').css("left","0")
        $('#menu .overlay').css("left","0")
    })
    $('.overlay').click(function () {
        $('#menu ul').css("left","-100%")
        $('#menu .overlay').css("left","-100%")
    })
})
