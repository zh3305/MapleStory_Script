/*
 * 次元之鏡
 */
var targetLocation;
var target;
var ret = false;

function start() {
    if (cm.getMapId() == 512000000) {
        ret = true;
        cm.sendSimple("你想去哪?\r\n#L0#原本的地方#l\r\n#L1#弓箭手村#l");
    } else {
        cm.sendSlideMenu(0, cm.getSlideMenuSelection(0));
    }
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    if (ret) {
        if (selection == 0) {
            cm.warp(cm.getSavedLocation("MULUNG_TC"));
            cm.clearSavedLocation("MULUNG_TC");
        } else {
            cm.warp(100000000);
        }
        cm.dispose();
        return;
    }
    switch (selection) {
        case 802://中式婚禮
            targetLocation = "AMORIA";
            break;
        default:
            targetLocation = "MULUNG_TC";
    }
    cm.saveReturnLocation(targetLocation);
    target = cm.getSlideMenuDataIntegers(0, selection)[0];
    if (target == 0) {
        target = 950000100;
    }
    cm.warp(target, cm.getSlideMenuDataIntegers(0, selection)[1]);
    cm.dispose();
}
