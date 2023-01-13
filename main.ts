input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("START")
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Yes)
})
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
