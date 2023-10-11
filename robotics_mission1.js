ev3_runToAbsolutePosition(ev3_motorA(), 180, 200);
ev3_runToAbsolutePosition(ev3_motorB(), 180, 200);
ev3_pause(1500);

ev3_runToAbsolutePosition(ev3_motorA(), -160, 200);
ev3_runToAbsolutePosition(ev3_motorB(), 160, 200);
ev3_pause(2000);

function move5cm(){
    const posA = ev3_motorGetPosition(ev3_motorA());
    const posB = ev3_motorGetPosition(ev3_motorB());
    ev3_runToAbsolutePosition(ev3_motorA(), posA + 75, 200);
    ev3_runToAbsolutePosition(ev3_motorB(), posB + 75, 200);
    return ev3_pause(1500);
}

function move10cm(){
    const posA = ev3_motorGetPosition(ev3_motorA());
    const posB = ev3_motorGetPosition(ev3_motorB());
    ev3_runToAbsolutePosition(ev3_motorA(), posA + 180, 200);
    ev3_runToAbsolutePosition(ev3_motorB(), posB + 180, 200);
    return ev3_pause(2000);
}

function cc_turn90() {
    const posA = ev3_motorGetPosition(ev3_motorA());
    const posB = ev3_motorGetPosition(ev3_motorB());
    ev3_runToAbsolutePosition(ev3_motorA(), posA + -160, 200);
    ev3_runToAbsolutePosition(ev3_motorB(), posB + 160, 200);
    return ev3_pause(2000);
}
function cw_turn90() {
    const posA = ev3_motorGetPosition(ev3_motorA());
    const posB = ev3_motorGetPosition(ev3_motorB());
    ev3_runToAbsolutePosition(ev3_motorA(), posA + 160, 200);
    ev3_runToAbsolutePosition(ev3_motorB(), posB + -160, 200);
    return ev3_pause(2000);
}


function k(){
    move10cm();
    cc_turn90();
    move5cm();
    cw_turn90();
    move10cm();
    move5cm();
    return ev3_pause(1);
}
k();
// cc_turn(90);
// move(5);
// cc_turn(-90);
// move(15);
