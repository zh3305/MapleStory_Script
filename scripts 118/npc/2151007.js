function start() {
    cm.sendSimple("可以到各个修炼场去的电梯。请选择想要去的层数。#b\r\n#L0#地下2层训练室A#l\r\n#L1#地下3层训练室B#l\r\n#L2#地下4层训练室C#l\r\n#L3#地下5层训练室D#l#k");
}

function action(mode, type, selection) {
    if (mode == 1) { //or 931000400 + selection..?
        switch (selection) {
        case 0:
            cm.warp(310010100, 0);
            break;
        case 1:
            cm.warp(310010200, 0);
            break;
        case 2:
            cm.warp(310010300, 0);
            break;
        case 3:
            cm.warp(310010400, 0);
            break;
        case 4:
            cm.warp(310010500, 0);
            break;
        }
    }
    cm.dispose();
}