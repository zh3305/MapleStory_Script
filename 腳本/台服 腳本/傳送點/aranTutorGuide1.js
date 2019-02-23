function enter(pi) { // tutor00
    if (pi.getInfoQuest(21002).equals("normal=o;arr0=o;arr1=o;mo1=o;mo2=o;mo3=o;mo4=o")) {
        pi.environmentChange("aran/tutorialGuide2", 12);
        pi.playerMessage(5, "連續按下Ctrl鍵，可發動連續攻擊。");
        pi.updateInfoQuest(21002, "normal=o;arr0=o;arr1=o;mo1=o;chain=o;mo2=o;mo3=o;mo4=o");
    }
}