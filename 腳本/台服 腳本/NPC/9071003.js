/* RED 1st impact
 Monster Park Shuttle
 Made by Daenerys
 */

var status = -1;
var m;

function start() {
    if (cm.getMapId() == 951000000) {
        cm.sendYesNo("您好，我們怪物公園接送服務一直為滿足顧客而努力。您要回村莊嗎？");
        m = 1;
    } else {
        cm.sendYesNo("親愛的顧客，您要移動到充滿歡樂的休菲凱曼之怪物公園嗎？");
    }
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == -2) {
        if (m == 1) {
            cm.sendNext("離開怪物公園時請來找我，我回用心服務。");
        } else {
            cm.sendNext("隨時都可利用喔，若改變想法請隨時再度光臨。");
        }
        cm.dispose();
    } else if (status == 0) {
        if (m == 1) {
            cm.sendNext("好，那我會安全又舒適的送您到村莊。");
        } else {
            cm.sendNext("現在是" + cm.getLevel() + " 等級。#b高級 可使用地下城#k。祝你在怪物公園度過美好的時光。");
        }
    } else if (status == 1) {
        if (m == 1) {
            cm.warp(cm.getSavedLocation("MONSTER_PARK"));
            cm.clearSavedLocation("MONSTER_PARK");
        } else {
            cm.saveReturnLocation("MONSTER_PARK");
            cm.warp(951000000);
        }
        cm.dispose();
    } else {
        cm.dispose();
    }
}