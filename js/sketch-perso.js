//var rectY = [ 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90 ];

function setup() {
    createCanvas( 600, 600 );
    //frameRate( 1 );
    noLoop();

    //var d = 100;
    //var t1 = d;
    //var t2 = t1 + d;
}

function draw() {
    background( 245 );
    fill(14, 149, 178);
   // noStroke();
    rect(50, 50, 125, 75);
    rect(175, 50, 225, 75);
    rect(400, 50, 125, 75);

    rect(50, 125, 125, 200);
    rect(175, 125, 225, 200);
    rect(400, 125, 125, 200);

    rect(50, 250, 125, 75);
    rect(175, 250, 225, 75);
    rect(400, 250, 125, 75);

    line(50,50,175,125);
    line(175,125,50,325);

    line(525,50,400,250);
    line(400,250,525,325);
    line(175,125,400,250);


}
