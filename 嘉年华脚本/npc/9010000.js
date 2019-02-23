
/**
 *冒险岛运营员
 **/
var status = -1;

function start() {
    status = -1;
    cm.sendSimple("有什么可以帮助你的？\r\n#L3#我要进宠物化\r\n#L4#我要进行宠物染色#k\r\n");
}

function action(mode, type, selection) {

    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }

    switch (status) {
        case 0: //这是status
            cm.dispose();
            switch (selection) {
                case 0: //这是selection
                    cm.openNpc(9010000, "Deletechr");
                    return;
                case 1: 
                    cm.openNpc(9010000, "Onlinebonus");
                    return;
                case 2: 
                    cm.openNpc(9010000, "MuiltPet");
                    return;
                case 3: 
                    cm.openNpc(9102001, "PetEvolution");
                    return;
                case 4: 
                    cm.openNpc(9102001, "ChangePetcolor");
                    return;
                case 5: 
                    cm.openNpc(9010000, "Compensate");
                    return;
                case 20: //这是selection
                    cm.openNpc(9010000, "Invitation");
                    break;
            }
            if (selection == 0) {
                //cm.sendOk("在冒险岛生活还愉快吗？");
                //cm.dispose();

            } else if (selection == 1) {

            } else if (selection == 2) {

            } else if (selection == 3) {

            } else if (selection == 4) {

            } else if (selection == 5) {

            }
            break;
        case 1: //
            cm.dispose();//这是结束脚本，请按照实际情况使用
            break;
    }
}
