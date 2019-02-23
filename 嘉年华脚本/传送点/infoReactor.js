function enter(pi) {
    if (pi.isQuestFinished(1008)) {
        pi.TutInstructionalBalloon("UI/tutorial.img/22");
    } else if (pi.isQuestFinished(1020)) {
        pi.TutInstructionalBalloon("UI/tutorial.img/27");
    }
    return false;
}
