let Hands = 0
input.onGesture(Gesture.Shake, function () {
    Hands = randint(1, 3)
    if (Hands == 1) {
        basic.showIcon(IconNames.Diamond)
    } else if (Hands == 2) {
        basic.showIcon(IconNames.Square)
    } else if (Hands == 0) {
        basic.showIcon(IconNames.Scissors)
    }
})
