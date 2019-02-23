function start() {
    ms.EnableUI(1);
    ms.DisableUI(true);
    switch (ms.getMapId()) {
        case 914090010:
            ms.showWZEffect("Effect/Direction1.img/aranTutorial/Scene0");
            break;
        case 914090011:
            ms.showWZEffect("Effect/Direction1.img/aranTutorial/Scene1" + (ms.getPlayerStat("GENDER") == 0 ? "0" : "1"));
            break;
        case 914090012:
            ms.showWZEffect("Effect/Direction1.img/aranTutorial/Scene2" + (ms.getPlayerStat("GENDER") == 0 ? "0" : "1"));
            break;
        case 914090013:
            ms.showWZEffect("Effect/Direction1.img/aranTutorial/Scene3");
            break;
        case 914090100:
            ms.showWZEffect("Effect/Direction1.img/aranTutorial/HandedPoleArm" + (ms.getPlayerStat("GENDER") == 0 ? "0" : "1"));
            break;
        case 914090200:
            ms.showWZEffect("Effect/Direction1.img/aranTutorial/Maha");
            break;
    }
    ms.dispose();
}