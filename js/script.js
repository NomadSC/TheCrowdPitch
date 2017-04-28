// Sticky Navbar //
var affixElement = '#navbar-main';

$(affixElement).affix({
    offset: {
        // Distance of between element and top page
        top: function () {
            return (this.top = $(affixElement).offset().top)
        },
        // when start #footer 
        bottom: function () {
            return (this.bottom = $('#footer').outerHeight(true))
        }
    }
});

// Collapse Navbar Auto Close //
$(document).ready(function () {
    $("nav").find("li").on("click", "a", function () {
        $('.navbar-collapse.in').collapse('hide');
    });
});

// Sign up Modal //
$('#myModal1').on('shown.bs.modal', function () {
    $('#myInput').focus()
})

$('#myModal2').on('shown.bs.modal', function () {
    $('#myInput').focus()
})

// Header Video Modal //
$('#myModal3').on('hide.bs.modal', function (e) {
    var $if = $(e.delegateTarget).find('iframe');
    var src = $if.attr("src");
    $if.attr("src", '/empty.html');
    $if.attr("src", src);
});

// Click and Disappear Button //
//$(document).ready(function(){
//    $("#disclosure-close").click(function(){
//        $("#disclosure-text").hide();
//    });
//});

//$(document).ready(function(){
//    $("#disclosure-close2").click(function(){
//        $("#disclosure-text2").hide();
//    });
//});

// Photo Upload //
$('.fileinput').fileinput()