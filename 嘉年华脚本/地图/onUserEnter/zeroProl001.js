var status = -1;

function action(mode, type, selection) {
    if (mode == 0) {
        status--;
    } else {
        status++;
    }

    switch (ms.getMapId()) {        
        case 321000001:
            if (status == 0) {
                ms.getDirectionStatus(true);
                ms.EnableUI(1);
                ms.DisableUI(true);
                ms.playMovie("zero1.avi");
		ms.teachSkill(101120204, 0, 10); // 秈顶忌吊阑
		ms.teachSkill(101120104, 0, 10); // 秈顶窰瞨阑
                ms.teachSkill(101110203, 0, 10); // 秈顶臂辅腑辟
                ms.teachSkill(101110200, 0, 10); // 秈顶臂锣舠
                ms.teachSkill(101110102, 0, 10); // 秈顶臂
                ms.teachSkill(101100201, 0, 10); // 秈顶癹臂ぇ
                ms.teachSkill(101100101, 0, 10); // 秈顶猌竟щ耏
                ms.teachSkill(101000101, 0, 10); // 秈顶綺阑
            } else {
                ms.EnableUI(0);
                ms.dispose();
                ms.warp(321000000, 0);
            }
            break;
        default:
            ms.dispose();
    }
}