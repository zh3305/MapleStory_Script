var status;
var newhandMap = 910150210;     // 新手地图
var SteppedSnailMap = 960000100;
var changeJobMap = 310030210;   // 转职地图
var text;
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var icon2 = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else {
            cm.dispose();
            return;
        }

        if (status == 0) {
            text = head + icon + "欢迎来到奇幻国度Online(www.qhmxd.com)\r\n\r\n";
			text += icon + "奇幻国度Online:\r\n" + icon2 + "是由奇幻工作室自主研发的一款游戏模拟器.\r\n\r\n"
			text += icon + "奇幻国度类型为:\r\n" + icon2 + "大型多人同时在线的即时战斗类型的角色扮演游戏,在继承和发扬冒险岛特色的风格的基础上进行新的创作,确保冒险岛系列的产品的延续性.\r\n\r\n"
			text += icon + "奇幻国度Online游戏:\r\n" + icon2 + "上手简单,游戏系统稳定,游戏节奏明快/简单.强调战斗,力求在战斗上体现出良好的操作感和游戏乐趣,并贯穿游戏始终.体现2D卷轴网络游戏爽快地特点.\r\n\r\n"
			text += icon + "奇幻国度Online游戏设置:\r\n" + icon2 + "经验(Exp)30B/金币暴率(Meso)10B/物品暴率(Item)5B.\r\n"
            cm.sendOkS(text, 1);
            if (cm.getMapId() != newhandMap) {
                cm.dispose();
                return;
            }
        } else if (status == 1) {
            text = head + "您已经初步了解了奇幻国度Online的背景，是否准备好进入新手副本？";
            cm.sendYesNo(text);
        } else if (status == 2) {
            var em = cm.getEventManager("SteppedSnail");
            if (em == null) {
                cm.sendOk("副本出错，请联系GM");
                cm.dispose();
                return;
            }

            var eim = em.newInstance(cm.getPlayer().getName());
            var map = eim.createInstanceMapS(SteppedSnailMap);
            var player = cm.getPlayer();
            var tomap = em.getMapFactory().getMap(changeJobMap);
            eim.registerPlayer(player);
            player.changeMap(map, map.getPortal(0));
            eim.startEventTimer(60000);
            cm.useItem(2003519); // 新手赠送一个超级巨人
            cm.worldBrodcastEffect(5121037, "[新手公告] : 欢迎[" + cm.getName() + "]来到奇幻国度~");
            cm.worldMessageYellow("[新手公告] : 欢迎[" + cm.getPlayer().getName() + "]来到奇幻国度~");
            cm.dispose();
        }
    }
}