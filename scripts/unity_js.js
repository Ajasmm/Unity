$(document).ready(function () {
    $('#pray-btn').mouseenter(function () { 
        document.getElementById("made-with-unity").style = "background-image: url('https://raw.githubusercontent.com/Ajasmm/Unity/main/images/pray-of.webp')";
        document.getElementById("lg-pray-btn").style = "Display : block;"
        document.getElementById("lg-pharos-btn").style = "Display : none;"
        document.getElementById("lg-config-car-btn").style = "Display : none;"
        document.getElementById("md-pray-btn").style = "background-color: #2196f3;"
        document.getElementById("md-pharos-btn").style = "background-color: #8b98a4;"
        document.getElementById("md-config-car-btn").style = "background-color: #8b98a4;"
    });
    $('#md-pray-btn').click(function () { 
        document.getElementById("made-with-unity").style = "background-image: url('https://raw.githubusercontent.com/Ajasmm/Unity/main/images/pray-of.webp')";
        document.getElementById("lg-pray-btn").style = "Display : block;"
        document.getElementById("lg-pharos-btn").style = "Display : none;"
        document.getElementById("lg-config-car-btn").style = "Display : none;"
        document.getElementById("md-pray-btn").style = "background-color: #2196f3;"
        document.getElementById("md-pharos-btn").style = "background-color: #8b98a4;"
        document.getElementById("md-config-car-btn").style = "background-color: #8b98a4;"
    });

    $('#pharos-btn').mouseenter(function () { 
        document.getElementById("made-with-unity").style = "background-image: url('https://raw.githubusercontent.com/Ajasmm/Unity/main/images/pharos-ar-made-with-unity.jpg')";
        document.getElementById("lg-pray-btn").style = "Display : none;"
        document.getElementById("lg-pharos-btn").style = "Display : block;"
        document.getElementById("lg-config-car-btn").style = "Display : none;"
        document.getElementById("md-pray-btn").style = "background-color: #8b98a4;"
        document.getElementById("md-pharos-btn").style = "background-color: #2196f3;"
        document.getElementById("md-config-car-btn").style = "background-color: #8b98a4;"
    });
    $('#md-pharos-btn').click(function () { 
        document.getElementById("made-with-unity").style = "background-image: url('https://raw.githubusercontent.com/Ajasmm/Unity/main/images/pharos-ar-made-with-unity.jpg')";
        document.getElementById("lg-pray-btn").style = "Display : none;"
        document.getElementById("lg-pharos-btn").style = "Display : block;"
        document.getElementById("lg-config-car-btn").style = "Display : none;"
        document.getElementById("md-pray-btn").style = "background-color: #8b98a4;"
        document.getElementById("md-pharos-btn").style = "background-color: #2196f3;"
        document.getElementById("md-config-car-btn").style = "background-color: #8b98a4;"
    });

    $('#config-car-btn').mouseenter(function () { 
        document.getElementById("made-with-unity").style = "background-image: url('https://raw.githubusercontent.com/Ajasmm/Unity/main/images/auto-showcase-1920x1080%401x.jpg')";
        document.getElementById("lg-pray-btn").style = "Display : none;"
        document.getElementById("lg-pharos-btn").style = "Display : none;"
        document.getElementById("lg-config-car-btn").style = "Display : block;"
        document.getElementById("md-pray-btn").style = "background-color: #8b98a4;"
        document.getElementById("md-pharos-btn").style = "background-color: #8b98a4;"
        document.getElementById("md-config-car-btn").style = "background-color: #2196f3;"
    });
    $('#md-config-car-btn').click(function () { 
        document.getElementById("made-with-unity").style = "background-image: url('https://raw.githubusercontent.com/Ajasmm/Unity/main/images/auto-showcase-1920x1080%401x.jpg')";
        document.getElementById("lg-pray-btn").style = "Display : none;"
        document.getElementById("lg-pharos-btn").style = "Display : none;"
        document.getElementById("lg-config-car-btn").style = "Display : block;"
        document.getElementById("md-pray-btn").style = "background-color: #8b98a4;"
        document.getElementById("md-pharos-btn").style = "background-color: #8b98a4;"
        document.getElementById("md-config-car-btn").style = "background-color: #2196f3;"
    });

    $('#more-btn').mouseenter(function () {
        const more_exp_area = document.getElementById('more-exp-area');
        more_exp_area.style = "display: flex;";
        
    });
    $('#more-btn').mouseleave(function () {
        const more_exp_area = document.getElementById('more-exp-area');
        more_exp_area.style.display = "none";   
    });
    
});

document.onload = RestAll();
function RestAll(){
    document.getElementById("lg-pharos-btn").style = "Display : none;"
    document.getElementById("lg-config-car-btn").style = "Display : none;"
}