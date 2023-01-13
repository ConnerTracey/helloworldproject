input.onButtonPressed(Button.A, function () {
    basic.showString("STARTING")
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(1)
    for (let index = 0; index < 1; index++) {
        music.playTone(349, music.beat(BeatFraction.Whole))
    }
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("B E B F C D C5 F ", 130)
})
basic.showString("PRESS A")
for (let index = 0; index < 2; index++) {
    music.playMelody("E B C5 A B G A F ", 130)
}
control.waitMicros(15)
basic.showString("FINISH")
