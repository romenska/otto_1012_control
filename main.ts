input.onGesture(Gesture.Shake, function () {
    radio.sendValue("come", 0)
})
function reset () {
    robotbit.Servo(robotbit.Servos.S1, 90)
    robotbit.Servo(robotbit.Servos.S2, 90)
    robotbit.Servo(robotbit.Servos.S3, 80)
    robotbit.Servo(robotbit.Servos.S4, 96)
    robotbit.Servo(robotbit.Servos.S5, 110)
    robotbit.Servo(robotbit.Servos.S6, 90)
    robotbit.Servo(robotbit.Servos.S7, 80)
    robotbit.Servo(robotbit.Servos.S8, 90)
}
radio.setGroup(1)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendValue("forward", 100)
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendValue("back", 100)
    }
    basic.pause(5)
})
