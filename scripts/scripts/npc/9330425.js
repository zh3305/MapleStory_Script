var status = 0;
var mh ="#fUI/UIWindow/Quest/icon6/7#";

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
        var selStr = "#r#h ##k#k你好，我是工匠师傅，你可以选择以下功能：\r\n"; 
            //selStr +="#b#L0#"+ mh +"11周年纪念币\r\n";
			selStr +="#e#r#L1#"+ mh +"卷轴制作#n#k[#bNew#k]\r\n";
			selStr +="#e#d#L2#"+ mh +"武器分解#n#k[#bNew#k]\r\n";
			selStr +="#e#b#L7#"+ mh +"150装备回炉系统#n#k[#bNew#k]\r\n";
			//selStr +="#r#L3#"+ mh +"老公老婆戒指升级#k[#bNew#k]\r\n";
			//selStr +="#r#L4#"+ mh +"冒险岛11周年纪念币兑换#k[#bNew#k]\r\n";
			//selStr +="#r#L5#"+ mh +"中介币购买11周年纪念币#k[#bNew#k]\r\n";
			selStr +="#e#d#L6#"+ mh +"口袋符号装备制作#n#k[#bNew#k]\r\n";
		cm.sendSimple(selStr);
        } else if (status == 1) { 
        switch (selection) {
        case 0:
		    cm.dispose();
		    cm.sendOk("11周年国庆纪念币：\r\n1.可通过任务系统,回收系统,兑换系统,每日福利获得!\r\n)2.收集的纪念币越多兑换物品越好,至于收集多少看你实力!"); 
            break;
		case 1:
            cm.dispose();
            cm.openNpc(9120033, 14);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(9120033, 3);
            break;
        case 3:
            cm.dispose();
            cm.openNpc(9120033, 1);
            break;
        case 4:
            cm.dispose();
            cm.openNpc(9120033, 2);
            break;
        case 5:
            cm.dispose();
			cm.openNpc(9120033, 12);
            break;
		case 6:
            cm.dispose();
			cm.openNpc(9120033, 13);
            break;
		case 7:
            cm.dispose();
			cm.openNpc(9120033, 15);
            break;
        }
    }
}
