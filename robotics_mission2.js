function detectDst() {
    return ev3_ultrasonicSensorDistance(ev3_ultrasonicSensor());
}

function dstPerSec() {
    display(ev3_connected(ev3_ultrasonicSensor()));
    let i = undefined;
    for (i = 0; i < 100; i = i + 1) {
        display(detectDst());
        ev3_pause(1000);
    }
}
dstPerSec();

// function reverse10cm(){
//     const posA = ev3_motorGetPosition(ev3_motorA());
//     const posB = ev3_motorGetPosition(ev3_motorB());
//     ev3_runToAbsolutePosition(ev3_motorA(), posA - 180, 200);
//     ev3_runToAbsolutePosition(ev3_motorB(), posB - 180, 200);
//     return ev3_pause(2000);
// }

// function reverse30cm() {
//     let i = undefined;
//     for (i = 0; i < 3; i = i + 1) {
//         reverse10cm();
//     }
//     return ev3_pause(1);
// }

// function reverseWhenClose() {
//     while (display(detectDst()) > 60) {
//         ev3_runForTime(ev3_motorA(), 1000, 100);
//         ev3_runForTime(ev3_motorB(), 1000, 100);
//         ev3_pause(1000);
//     }
//     reverse30cm();
//     return ev3_pause(1);
// }

// function move40cm() {
//     let i = undefined;
//     for (i = 0; i < 4; i = i + 1) {
//             move10cm();
//     }
// }
// function move10cm(){
//     const posA = ev3_motorGetPosition(ev3_motorA());
//     const posB = ev3_motorGetPosition(ev3_motorB());
//     ev3_runToAbsolutePosition(ev3_motorA(), posA + 180, 200);
//     ev3_runToAbsolutePosition(ev3_motorB(), posB + 180, 200);
//     return ev3_pause(2000);
// }

// function cc_turn90() {
//     const posA = ev3_motorGetPosition(ev3_motorA());
//     const posB = ev3_motorGetPosition(ev3_motorB());
//     ev3_runToAbsolutePosition(ev3_motorA(), posA + -160, 200);
//     ev3_runToAbsolutePosition(ev3_motorB(), posB + 160, 200);
//     return ev3_pause(2000);
// }

// function cw_turn90() {
//     const posA = ev3_motorGetPosition(ev3_motorA());
//     const posB = ev3_motorGetPosition(ev3_motorB());
//     ev3_runToAbsolutePosition(ev3_motorA(), posA + 160, 200);
//     ev3_runToAbsolutePosition(ev3_motorB(), posB + -160, 200);
//     return ev3_pause(2000);
// }

// function goAround() {
//     while (display(detectDst()) > 60) {
//         ev3_runForTime(ev3_motorA(), 1000, 100);
//         ev3_runForTime(ev3_motorB(), 1000, 100);
//         ev3_pause(1000);
//     }
//     if (display(math_floor(math_random() * 10)) % 2 === 0) {
//         cc_turn90();
//         let i = undefined;
//         move40cm();
//         cw_turn90();
//         return goAround();
//     } else {
//         cw_turn90();
//         move40cm();
//         cc_turn90();
//         return goAround();
//     }
// }

// goAround();