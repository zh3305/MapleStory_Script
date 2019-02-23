/*
	NPC 名字: 		可罗宾-守门人
	所在地图: 		生命之穴洞口
	脚本名字: 		暗黑龙王远征队
*/

var status = 0;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode != 1) {
        //cm.playerMessage("操作: status-- " + status);
        if (status == 10 || status == 11) {
            cm.dispose();
        }
        status--;
    }
    if (cm.getPlayer().getMapId() == 240040700) {
        if (selection < 100) {
            cm.sendSimple("#r#L100#暗黑龙王(普通)#l\r\n#L101#暗黑龙王(进阶)#l\r\n#L102#我不挑战了#l");
        } else {
            if (selection == 100) {
                if (cm.haveItem(5220006) && (cm.getPlayer().getClient().getChannel() == 3 || cm.getPlayer().getClient().getChannel() == 4)) {
                    cm.gainItem(5220006, -1);
                    cm.warp(240050400, 0); //暗黑龙王入口
                    cm.dispose();
                } else {
                    cm.warp(240040600);
                    cm.sendOk("只有在3频道或4频道才可以参加黑龙远征队 \n如果没有黑龙入场卷 就不能进入.");
                    cm.dispose();
                }
            } else if (selection == 101) {
                if (cm.haveItem(5220006) && (cm.getPlayer().getClient().getChannel() == 3 || cm.getPlayer().getClient().getChannel() == 4)) {
                    cm.gainItem(5220006, -1);
                    cm.warp(240050400, 0); //暗黑龙王入口
                    //cm.warp(240060201, 0); //进阶暗黑龙王
                    cm.dispose();
                } else {
                    cm.warp(240040600);
                    cm.sendOk("只有在3频道或4频道才可以参加黑龙远征队 \n如果没有黑龙入场卷 就不能进入.");
                    cm.dispose();
                }
            } else if (selection == 102) {
                cm.warp(240040600);
                cm.dispose();
            }
        }
    }
}