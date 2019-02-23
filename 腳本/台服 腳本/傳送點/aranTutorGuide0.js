function enter(pi) {
    if (pi.getInfoQuest(21002).equals("arr0=o;mo1=o;mo2=o;mo3=o")) {
        pi.environmentChange("aran/tutorialGuide1", 12);
        pi.playerMessage(5, "按下Ctrl鍵可對怪物進行一般攻擊 。");
        pi.updateInfoQuest(21002, "normal=o;arr0=o;mo1=o;mo2=o;mo3=o");
    }
}