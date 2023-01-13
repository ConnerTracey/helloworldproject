input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        # . . . #
        # . . . #
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("START")
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # # .
        . # . # .
        . # # . .
        `)
})
basic.showLeds(`
    . . # . .
    # . # . #
    . # # # .
    # . # . #
    # . # . #
    `)
