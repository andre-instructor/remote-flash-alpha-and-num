radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # . # .
            `)
        basic.pause(500)
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # . .
            . # . # .
            . # # # .
            `)
        basic.pause(500)
        basic.showLeds(`
            . # # # .
            . # . . .
            . # . . .
            . # . . .
            . # # # .
            `)
        basic.pause(500)
    }
    if (receivedNumber == 2) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
        basic.pause(500)
        basic.showLeds(`
            . # # # .
            . . . # .
            . . # # .
            . . . # .
            . # # # .
            `)
        basic.pause(500)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
radio.setGroup(58)
