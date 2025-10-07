$(document).ready(function () {
    $(".tag").hover(function () {
            $(this).attr("src", "Images/logo_a.png");
        },
        function () {
            $(this).attr("src", "Images/Logo.png");
        });
});
