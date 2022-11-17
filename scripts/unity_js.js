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

    document.getElementById('pro-btn').addEventListener('mouseenter', function () {
        document.getElementById('mass-exp-heading').innerText = "Unity Pro";
        document.getElementById('mass-exp-para').innerText = "The complete solution for professional to create and operate realtime 3d experience";

    })
    document.getElementById('pro-btn').addEventListener('mouseleave', ResetTitleArea);

    document.getElementById('ind-btn').addEventListener('mouseenter', function () {
        document.getElementById('mass-exp-heading').innerText = "Unity Industrial Collection";
        document.getElementById('mass-exp-para').innerText = "Bring CAD and 3D data into AR,VR and more with real-time 3D product visualisation.";

    })
    document.getElementById('ind-btn').addEventListener('mouseleave', ResetTitleArea);

    document.getElementById('ent-btn').addEventListener('mouseenter', function () {
        document.getElementById('mass-exp-heading').innerText = "Unity Enterprise";
        document.getElementById('mass-exp-para').innerText = "For large organizations with ambitious goals, creating at scale.";

    })
    document.getElementById('ent-btn').addEventListener('mouseleave', ResetTitleArea);

    document.getElementById('ads-btn').addEventListener('mouseenter', function () {
        document.getElementById('mass-exp-heading').innerText = "Unity Ads";
        document.getElementById('mass-exp-para').innerText = "Monitization and user aquisition solutions to support your revenue and growth goals";

    })
    document.getElementById('ads-btn').addEventListener('mouseleave', ResetTitleArea);

    document.getElementById('header-pruduct-btn').addEventListener('mouseenter', function () {
        document.getElementById('product-mass-exp').style = "display: block";
    });
    document.getElementById('header-pruduct-btn').addEventListener('mouseleave', function () {
        document.getElementById('product-mass-exp').style = "display: none";
    });

    document.getElementById('menu-btn-id').addEventListener('click', menuDraw);
    
});

document.onload = RestAll();
function RestAll(){
    document.getElementById("lg-pharos-btn").style = "Display : none;"
    document.getElementById("lg-config-car-btn").style = "Display : none;"
}

function ResetTitleArea() {
    document.getElementById('mass-exp-heading').innerText = "Discover more tools, Products and solutions";
    document.getElementById('mass-exp-para').innerText = "Extend the power of the world’s leading platform for creating and operating interactive, real-time 3D content.";
}

function menuDraw() {
    let side = document.getElementById("menu").style.left
    if (side == '0px')
        document.getElementById("menu").style.left = '-250px'
    else
        document.getElementById("menu").style.left = '0'
}