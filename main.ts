let humedad = 0
/**
 * Pin 0 = sensor de humedad
 * 
 * Pin 1 = relé
 * 
 * Pin 5 = led blanco (seco)
 * 
 * Pin 2 = led blanco (humedo)
 */
basic.forever(function () {
    humedad = pins.analogReadPin(AnalogPin.P0)
    if (humedad <= 200) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P5, 1)
        basic.showIcon(IconNames.Yes)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P5, 0)
        basic.showIcon(IconNames.No)
    }
})
