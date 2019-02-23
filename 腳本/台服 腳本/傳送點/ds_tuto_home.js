function enter(pi) {
    if (pi.isQuestActive(23201) || pi.isQuestFinished(23201)) {
        return;
    }
    if (pi.getPortal().getName() === "ds_tuto_home0") {
        pi.forceStartQuest(23200);
        pi.ShowWZEffect("Effect/OnUserEff.img/normalEffect/demonSlayer/chatBalloon1");
    } else if (pi.getPortal().getName() === "ds_tuto_home1") {
        pi.forceCompleteQuest(23200);
        pi.ShowWZEffect("Effect/OnUserEff.img/normalEffect/demonSlayer/chatBalloon0");
    }
}