function enter(pi) { // tutor00
    if (pi.getInfoQuest(21002).equals("normal=o;arr0=o;arr1=o;arr2=o;mo1=o;chain=o;mo2=o;mo3=o;mo4=o")) {
        pi.environmentChange("aran/tutorialGuide3", 12);
        pi.playerMessage(5, "連續攻擊後使用方向鍵和攻擊鍵，可進行命令攻擊。");
	pi.updateInfoQuest(21002, "cmd=o;normal=o;arr0=o;arr1=o;arr2=o;mo1=o;chain=o;mo2=o;mo3=o;mo4=o");
    }
}