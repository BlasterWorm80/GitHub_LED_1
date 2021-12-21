input.onButtonPressed(Button.A, function () {
    basic.pause(500)
    while (!(input.buttonIsPressed(Button.A))) {
        for (let index = 0; index < 3; index++) {
            SuperBit.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
            SuperBit.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
            SuperBit.RGB_Program().show()
            basic.pause(75)
            SuperBit.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
            SuperBit.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
            SuperBit.RGB_Program().show()
            basic.pause(75)
        }
        for (let index = 0; index < 3; index++) {
            SuperBit.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
            SuperBit.RGB_Program().setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
            SuperBit.RGB_Program().show()
            basic.pause(75)
            SuperBit.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
            SuperBit.RGB_Program().setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            SuperBit.RGB_Program().show()
            basic.pause(75)
        }
    }
})
