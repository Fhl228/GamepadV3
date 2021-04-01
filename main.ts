radio.setGroup(155)
pins.setPull(DigitalPin.P13, PinPullMode.PullUp)
pins.setPull(DigitalPin.P14, PinPullMode.PullUp)
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P2) > 600 && (pins.analogReadPin(AnalogPin.P1) > 400 && pins.analogReadPin(AnalogPin.P1) < 600)) {
        radio.sendNumber(3)
    } else if (pins.analogReadPin(AnalogPin.P2) < 400 && (pins.analogReadPin(AnalogPin.P1) > 400 && pins.analogReadPin(AnalogPin.P1) < 600)) {
        radio.sendNumber(4)
    } else if (pins.analogReadPin(AnalogPin.P1) < 300 && (pins.analogReadPin(AnalogPin.P2) > 400 && pins.analogReadPin(AnalogPin.P2) < 600)) {
        radio.sendNumber(5)
    } else if (pins.analogReadPin(AnalogPin.P1) > 600 && (pins.analogReadPin(AnalogPin.P2) > 400 && pins.analogReadPin(AnalogPin.P2) < 600)) {
        radio.sendNumber(6)
    } else if (pins.digitalReadPin(DigitalPin.P15) == 0) {
        radio.sendNumber(1)
    } else if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        radio.sendNumber(2)
    } else if (pins.analogReadPin(AnalogPin.P1) < 600 && pins.analogReadPin(AnalogPin.P1) > 400 && (pins.analogReadPin(AnalogPin.P2) < 600 && pins.analogReadPin(AnalogPin.P2) > 400)) {
        radio.sendNumber(0)
    } else if (pins.analogReadPin(AnalogPin.P2) > 600 && (pins.analogReadPin(AnalogPin.P1) < 300 && false)) {
        radio.sendNumber(7)
    } else if (pins.analogReadPin(AnalogPin.P2) > 600 && (pins.analogReadPin(AnalogPin.P1) > 700 && false)) {
        radio.sendNumber(8)
    } else {
    	
    }
})
