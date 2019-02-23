function start() {
    if (ms.getInfoQuest(21019).equals("miss=o;helper=clear")) {
        ms.updateInfoQuest(21019, "miss=o;arr=o;helper=clear");
        ms.TutInstructionalBalloon("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow3");
    }
    ms.dispose();
}
