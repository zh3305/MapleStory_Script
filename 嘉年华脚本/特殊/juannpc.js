/* 点卷商店 */

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，请您选择您需要的功能:\r\n(#r请看好购买哦.点了就买啦!#k):\r\n#b#L0#普通卷轴1#l\r\n#L4#普通卷轴2#l\r\n#L5#普通卷轴3#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(9900002, "putongjuan"); //双倍道具
            break;
        case 1:
		//cm.sendOk("请到鲁彪那去买吧，我这里都没货了~");
            cm.dispose();
            cm.openNpc(9900002, 6); //绝版点装
            break;
        case 2:
		//cm.sendOk("请到鲁彪那去买吧，我这里都没货了~");
            cm.dispose();
            cm.openNpc(9900002, 4); //各种椅子
            break;
        case 3:
            cm.dispose();
            cm.openNpc(9900002, 9); //各种喇叭
            break;
        case 4:
            cm.dispose();
            cm.openNpc(9900002, "putongjuan2"); //洗点卷轴
            break;
        case 5:
		//cm.sendOk("请到鲁彪那去买吧，我这里都没货了~");
            cm.dispose();
            cm.openNpc(9900002, "putongjuan3"); //玩具商店
            break;
        case 6:
            cm.dispose();
            cm.openNpc(9900002, 25); //骑宠商店
            break;
	case 7:
            cm.dispose();
            cm.openNpc(9900002, 100); //破攻石头
            break;
	case 8:
            cm.dispose();
            cm.openNpc(9900002, 1301); //一键潜能
            break;
        }
    }
}