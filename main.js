//dark mode and scroll to top
let body = document.getElementById("body");
let light = 0;
function dark() {
    if (light == 1) {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        
        light = 0;
    }
    else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        

        light = 1;
    }
}
let btn1 = document.getElementById('btn1');
btn1.addEventListener('click', function () {

    window.scrollTo({

        top: 0,
        behavior: 'smooth'
    })

})