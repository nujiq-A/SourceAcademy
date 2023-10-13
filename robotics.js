////// Mission 1

// Question 1
ev3_speak("ni hao ma");

// Question 2

ev3_runToAbsolutePosition(ev3_motorA(), 180, 200);
ev3_runToAbsolutePosition(ev3_motorB(), 180, 200);
ev3_pause(1500);

// Question 3

ev3_runToAbsolutePosition(ev3_motorA(), -160, 200);
ev3_runToAbsolutePosition(ev3_motorB(), 160, 200);
ev3_pause(2000);

// Question 4

function move5cm(){
    ev3_runToRelativePosition(ev3_motorA(), 90, 200);
    ev3_runToRelativePosition(ev3_motorB(), 90, 200);
    return ev3_pause(2000);
}

function move10cm(){
    ev3_runToRelativePosition(ev3_motorA(), 180, 200);
    ev3_runToRelativePosition(ev3_motorB(), 180, 200);
    return ev3_pause(2000);
}

function cc_turn90() {
    ev3_runToRelativePosition(ev3_motorA(), -160, 200);
    ev3_runToRelativePosition(ev3_motorB(), 160, 200);
    return ev3_pause(2000);
}
function cw_turn90() {
    ev3_runToRelativePosition(ev3_motorA(), 160, 200);
    ev3_runToRelativePosition(ev3_motorB(), -160, 200);
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


/////Mission 2
//Question 1

function detectDst() {
    return ev3_ultrasonicSensorDistance(ev3_ultrasonicSensor()) / 10;
}

// we use 0.1 as scaling factor because 
/*    robot reads 220 when at 20 cm from an object
    and 105 when at 10 cm from an object*/

function dstPerSec() {
    while (!ev3_touchSensorPressed(ev3_touchSensor2())) {
        display(detectDst());
        ev3_pause(1000);
    }
    return(ev3_pause(1));
}
dstPerSec();

// Question 2

function detectDst() {
    return ev3_ultrasonicSensorDistance(ev3_ultrasonicSensor()) / 10;
}

function reverse10cm(){
    const posA = ev3_motorGetPosition(ev3_motorA());
    const posB = ev3_motorGetPosition(ev3_motorB());
    ev3_runToAbsolutePosition(ev3_motorA(), posA - 180, 200);
    ev3_runToAbsolutePosition(ev3_motorB(), posB - 180, 200);
    return ev3_pause(2000);
}

function reverse30cm() {
    let i = undefined;
    for (i = 0; i < 3; i = i + 1) {
        reverse10cm();
    }
    return ev3_pause(1);
}

function reverseWhenClose() {

    while (display(detectDst()) > 10) {
        ev3_runForTime(ev3_motorA(), 1000, 100);
        ev3_runForTime(ev3_motorB(), 1000, 100);
        ev3_pause(1000);
    }
    reverse30cm();
    return ev3_pause(1);
}

reverseWhenClose();

// Question 3

function detectDst() {
    return ev3_ultrasonicSensorDistance(ev3_ultrasonicSensor()) / 10;
}

function move40cm() {
    let i = undefined;
    for (i = 0; i < 4; i = i + 1) {
            move10cm();
    }
    return ev3_pause(1);
}
function move10cm(){
    ev3_runToRelativePosition(ev3_motorA(), 180, 200);
    ev3_runToRelativePosition(ev3_motorB(), 180, 200);
    return ev3_pause(2000);
}

function cc_turn90() {
    ev3_runToRelativePosition(ev3_motorA(), -160, 200);
    ev3_runToRelativePosition(ev3_motorB(), 160, 200);
    return ev3_pause(2000);
}

function cw_turn90() {
    ev3_runToRelativePosition(ev3_motorA(), 160, 200);
    ev3_runToRelativePosition(ev3_motorB(), -160, 200);
    return ev3_pause(2000);
}

function goAround() {
    while (display(detectDst()) > 10) {
        ev3_runForTime(ev3_motorA(), 1000, 100);
        ev3_runForTime(ev3_motorB(), 1000, 100);
        ev3_pause(1000);
    }
    if (display(math_floor(math_random() * 10)) % 2 === 0) {
        cc_turn90();
        move40cm();
        cw_turn90();
        return goAround();
    } else {
        cw_turn90();
        move40cm();
        cc_turn90();
        return goAround();
    }
}

goAround();

/**************************justyn's code*****************************/
// function reverseWhenClose() {
//     ev3_motorSetSpeed(ev3_motorA(), 200);
//     ev3_motorSetSpeed(ev3_motorB(), 200);
//     while(display(detectDst()) > 10) {
//         ev3_motorStart(ev3_motorA());
//         ev3_motorStart(ev3_motorB());
//     }
//     reverse30cm();
//     return ev3_pause(1);

// }
// reverseWhenClose();*/
    

// //Question 3
// function avoid() {
//     while(detect(Dst()) > __) { 
//         ev3_motorSetSpeed(ev3_motorA(), 200);
//         ev3_motorSetSpeed(ev3_motorB(), 200);
//         ev3_motorStart(ev3_motorA());
//         ev3_motorStart(ev3_motorB());
//     }
//     if(math_random() > 0.5) {
//         //left
//     }
//     else {
//         //right
//     }
    
    
// }
/**************************justyn's code*****************************/

///////////Mission 3
//Question 1
// while(true) {
//     if (ev3_touchSensorPressed(ev3_touchSensor2())) {
//         break ;
//     } else {
//         display(ev3_reflectedLightIntensity(ev3_colorSensor()));
//         ev3_pause(1000);
//     }
// }

//Question 2
/*function reverse(){
    const posA = ev3_motorGetPosition(ev3_motorA());
    const posB = ev3_motorGetPosition(ev3_motorB());
    ev3_runToAbsolutePosition(ev3_motorA(), posA - 25, 100);
    ev3_runToAbsolutePosition(ev3_motorB(), posB - 25, 100);
    return ev3_pause(2000);
}

let x = 0;

function correctPosition() {
    display("turning");
    let i = 0;
    display(x);
    if (x === 0) {
        
        x = x + 1;
        for (i = 0; display(ev3_reflectedLightIntensity(ev3_colorSensor())) < 40 && i < 2; i = i + 1) {
            display("left");
            ev3_runForTime(ev3_motorA(), 100, -100);
            ev3_runForTime(ev3_motorB(), 100, 100);
            ev3_pause(300);
        }
    } else {
        
        x = x - 1;
        if (ev3_reflectedLightIntensity(ev3_colorSensor()) > 40) {
            for (i = 0; display(ev3_reflectedLightIntensity(ev3_colorSensor())) < 40 && i < 2; i = i + 1) {
                display("right");
                ev3_runForTime(ev3_motorA(), 200, 120);
                ev3_runForTime(ev3_motorB(), 200, -120);
                ev3_pause(300);
            }
        }
        
    }
    
    return ev3_pause(1);
}
function followLine() {
    
    while (display(ev3_reflectedLightIntensity(ev3_colorSensor())) < 40) {
        ev3_runForTime(ev3_motorA(), 100, 100);
        ev3_runForTime(ev3_motorB(), 100, 100);
        ev3_pause(100);
    }
    reverse();
    correctPosition();
    
    if (ev3_touchSensorPressed(ev3_touchSensor2())) {
        return ev3_pause(1);
    } else {
        return followLine();
    }
}

followLine();*/

//Question 3
function reverse(){
    const posA = ev3_motorGetPosition(ev3_motorA());
    const posB = ev3_motorGetPosition(ev3_motorB());
    ev3_runToAbsolutePosition(ev3_motorA(), posA - 25, 50);
    ev3_runToAbsolutePosition(ev3_motorB(), posB - 25, 50);
    return ev3_pause(1000);
}

let counter = 1;
function cibai() {
    let i = undefined;
    for (i = 0; display(ev3_reflectedLightIntensity(ev3_colorSensor())) > 40 && i < 3; i = i + 1) {
        ev3_runForTime(ev3_motorA(), 300, -100);
        ev3_runForTime(ev3_motorB(), 300, 100);
        ev3_pause(100);
    }
    for (i = 0; display(ev3_reflectedLightIntensity(ev3_colorSensor())) > 40 && i < 6; i = i + 1) {
        ev3_runForTime(ev3_motorA(), 300, 100);
        ev3_runForTime(ev3_motorB(), 300, -100);
        ev3_pause(100);
    }
    
    return ev3_pause(1);
}

function correctPosition() {
    display("turning");
    if (display(ev3_reflectedLightIntensity(ev3_colorSensor())) > 40) {
        display("left");
        ev3_runForTime(ev3_motorA(), 120 * math_pow(2, counter), -100);
        ev3_runForTime(ev3_motorB(), 120 * math_pow(2, counter), 100);
        ev3_pause(100);
        counter = counter + 1;
    }
    if (display(ev3_reflectedLightIntensity(ev3_colorSensor())) > 40) {
        display("right");
        ev3_runForTime(ev3_motorA(), 120 * math_pow(2, counter), 100);
        ev3_runForTime(ev3_motorB(), 120 * math_pow(2, counter), -100);
        ev3_pause(100);
        counter = counter + 1;
    }
    return ev3_pause(1);
}

function followLine() {
    while (display(ev3_reflectedLightIntensity(ev3_colorSensor())) <= 40) {
        ev3_runForTime(ev3_motorA(), 100, 100);
        ev3_runForTime(ev3_motorB(), 100, 100);
        ev3_pause(100);
    }
    // cibai();
    correctPosition();
    if (ev3_touchSensorPressed(ev3_touchSensor2())) {
        return ev3_pause(1);
    } else {
        return followLine();
    }
}

followLine();
