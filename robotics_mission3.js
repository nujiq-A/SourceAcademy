// while(true) {
//     if (ev3_touchSensorPressed(ev3_touchSensor2())) {
//         break ;
//     } else {
//         display(ev3_reflectedLightIntensity(ev3_colorSensor()));
//         ev3_pause(1000);
//     }
// }

function correctPosition() {
    display("turning");
    let i = undefined;
    for (i = 0; display(ev3_reflectedLightIntensity(ev3_colorSensor())) > 40 && i < 3; i = i + 1) {
        display("left");
        ev3_runForTime(ev3_motorA(), 300, -200);
        ev3_runForTime(ev3_motorB(), 300, 200);
        ev3_pause(300);
    }
    if (ev3_reflectedLightIntensity(ev3_colorSensor()) > 40) {
        display("revert");
        ev3_runForTime(ev3_motorA(), 300, 200);
        ev3_runForTime(ev3_motorB(), 300, -200);
        ev3_pause(300);
        for (i = 0; display(ev3_reflectedLightIntensity(ev3_colorSensor())) > 40 && i < 3; i = i + 1) {
            display("right");
            ev3_runForTime(ev3_motorA(), 300, 200);
            ev3_runForTime(ev3_motorB(), 300, -200);
            ev3_pause(300);
        }
        if (ev3_reflectedLightIntensity(ev3_colorSensor()) > 40) {
            return correctPosition();
        } else { }
    } else {
        return ev3_pause(1);
    }
}
function followLine() {
    
    while (display(ev3_reflectedLightIntensity(ev3_colorSensor())) < 40) {
        ev3_runForTime(ev3_motorA(), 100, 100);
        ev3_runForTime(ev3_motorB(), 100, 100);
        ev3_pause(100);
    }
    correctPosition();
    
    if (ev3_touchSensorPressed(ev3_touchSensor2())) {
        return ev3_pause(1);
    } else {
        return followLine();
    }
}

followLine();