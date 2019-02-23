function start() {
    cm.sendYesNo("寫在石板的字在發光打開在石板後的門.要移動到秘密通道嗎??");
}

function action(mode, type, selection) {
    if (mode == 1) {
        cm.warp(240050400);
    } else {
        cm.sendNext("要移動的話就跟我對話.");
    }
    cm.dispose();
}