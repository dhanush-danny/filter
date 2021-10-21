function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    webcam = createCapture(VIDEO);
    webcam.hide();
}

function draw() {
    image(webcam, 0, 0, 640, 480);
}

tint_color = "";

function apply_filter() {
    tint_color = document.getElementById("color_input").value;
    tint(tint_color);
}

function take_snapshot(){
    save("My_Pic.png");
}