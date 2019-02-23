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
    if (status == 0) {//#L0#使用100个#v4000016#兑换1个#v5062002##l\r\n#L5#使用50个#v4000175#兑换1个#v5064000##l\r\n
        var selStr = "您好，我可以帮你兑换你想要的物品:\r\n\r\n#L16##r[New]兑换放大镜#l\r\n\r\n#b#L0#使用100个#v4000004#兑换1个#v5062000##l\r\n#L1#使用100个#v2049301#兑换1个#v2049300##l\r\n#L2#使用10个#v4000659#兑换1个#v4000038##l\r\n#L3#使用10个#v4000040#兑换1个#v5072000##l\r\n#L4#使用20个#v2210006#兑换1个#v5064100##l\r\n#L6#使用20个#v4000175#兑换1个#v5360014##l\r\n#L7#使用50个#v2049002#兑换1个#v2049004##l\r\n#L8#使用3个#v2049004#兑换1个#v2049005##l\r\n#L9#使用20个#v4030010#兑换1个#v2290285##l\r\n#L10#使用50个#v4310015#兑换10个#v4031997##l\r\n#L11#使用50个#v4021012#兑换10个#v4031997##l\r\n#L12#使用50个#v4021011#兑换10个#v4031997##l\r\n#L13#使用10个#v4000659#兑换1个#v4000038##l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.haveItem(4000004,100)) {
                cm.gainItem(4000004,-100);
                cm.gainItem(5062000,1);
		cm.worldMessage("恭喜玩家" + cm.getChar().getName() + "成功兑换一个神奇魔方" );
                cm.sendOk("恭喜你成功兑换1个#v5062000#!");
		cm.dispose();
            } else {
                cm.sendOk("你没有100个#v4000004#我不能给你兑换.");
		cm.dispose();
            }
            break;
        case 1:
            if (cm.haveItem(2049301,100)) {
                cm.gainItem(2049301,-100);
                cm.gainItem(2049300,1);
		cm.worldMessage("恭喜玩家" + cm.getChar().getName() + "成功兑换一个高级装备强化卷轴" );
                cm.sendOk("恭喜你成功兑换1个#v2049300#!");
		cm.dispose();
            } else {
                cm.sendOk("你没有100个#v2049301#我不能给你兑换.");
		cm.dispose();
            }
            break;
        case 2:
            if (cm.haveItem(4000659,10)) {
                cm.gainItem(4000659,-10);
                cm.gainItem(4000038,1);
		cm.worldMessage("恭喜玩家" + cm.getChar().getName() + "成功兑换一个金杯" );
                cm.sendOk("恭喜你成功兑换1个#v4000038#!");
		cm.dispose();
            } else {
                cm.sendOk("你没有10个#v4000659#我不能给你兑换.");
		cm.dispose();
            }
            break;
        case 3:
            if (cm.haveItem(4000040,10)) {
                cm.gainItem(4000040,-10);
                cm.gainItem(5072000,1);
		cm.worldMessage("恭喜玩家" + cm.getChar().getName() + "成功兑换一个高质地喇叭" );
                cm.sendOk("恭喜你成功兑换1个#v5072000#!");
		cm.dispose();
            } else {
                cm.sendOk("你没有10个#v4000040#我不能给你兑换.");
		cm.dispose();
            }
            break;
        case 4:
            if (cm.haveItem(2210006,20)) {
                cm.gainItem(2210006,-20);
                cm.gainItem(5064100,1);
		cm.worldMessage("恭喜玩家" + cm.getChar().getName() + "成功兑换一个保护卷轴" );
                cm.sendOk("恭喜你成功兑换1个#v5064100#!");
		cm.dispose();
            } else {
                cm.sendOk("你没有20个#v2210006#我不能给你兑换.");
		cm.dispose();
            }
            break;
        case 5:
            if (cm.haveItem(4000175,50)) {
                cm.gainItem(4000175,-50);
                cm.gainItem(5064000,1);
		cm.worldMessage("恭喜玩家" + cm.getChar().getName() + "成功兑换一个防爆卷轴" );
                cm.sendOk("恭喜你成功兑换1个#v5064000#!");
		cm.dispose();
            } else {
                cm.sendOk("你没有50个#v4000175#我不能给你兑换.");
		cm.dispose();
            }
            break;
        case 6:
            if (cm.haveItem(4000175,20)) {
                cm.gainItem(4000175,-20);
                cm.gainItem(5360014,1,30);
		cm.worldMessage("恭喜玩家" + cm.getChar().getName() + "成功兑换1个双倍爆率卡三小时权" );
                cm.sendOk("恭喜你成功兑换1个#v5360014#!");
		cm.dispose();
            } else {
                cm.sendOk("你没有20个#v4000175#我不能给你兑换.");
		cm.dispose();
            }
            break;
        case 7:
            if (cm.haveItem(2049002,50)) {
                cm.gainItem(2049002,-50);
                cm.gainItem(2049004,1);
		cm.worldMessage("恭喜玩家" + cm.getChar().getName() + "成功兑换1个白衣-仙" );
                cm.sendOk("恭喜你成功兑换1个#v2049004#!");
		cm.dispose();
            } else {
                cm.sendOk("你没有50个#v2049002#我不能给你兑换.");
		cm.dispose();
            }
            break;
        case 8:
            if (cm.haveItem(2049004,3)) {
                cm.gainItem(2049004,-3);
                cm.gainItem(2049005,1);
		cm.worldMessage("恭喜玩家" + cm.getChar().getName() + "成功兑换1个白衣-神" );
                cm.sendOk("恭喜你成功兑换1个#v2049005#!");
		cm.dispose();
            } else {
                cm.sendOk("你没有3个#v2049004#我不能给你兑换.");
		cm.dispose();
            }
            break;
        case 9:
            if (cm.haveItem(4030010,20)) {
                cm.gainItem(4030010,-20);
                cm.gainItem(2290285,1);
		cm.worldMessage("恭喜玩家" + cm.getChar().getName() + "成功兑换一个神秘能手册" );
                cm.sendOk("恭喜你成功兑换1个#v2290285#!");
		cm.dispose();
            } else {
                cm.sendOk("你没有20个#v4030010#我不能给你兑换.");
		cm.dispose();
            }
            break;
        case 10:
            if (cm.haveItem(4310015,50)) {
                cm.gainItem(4310015,-50);
                cm.gainItem(4031997,10);
		cm.worldMessage("恭喜玩家" + cm.getChar().getName() + "成功兑换10个蘑菇金币" );
                cm.sendOk("恭喜你成功兑换10个#v4031997#!");
		cm.dispose();
            } else {
                cm.sendOk("你没有50个#v4310015#我不能给你兑换.");
		cm.dispose();
            }
            break;
        case 11:
            if (cm.haveItem(4021012,50)) {
                cm.gainItem(4021012,-50);
                cm.gainItem(4031997,10);
		cm.worldMessage("恭喜玩家" + cm.getChar().getName() + "成功兑换10个蘑菇金币" );
                cm.sendOk("恭喜你成功兑换10个#v4031997#!");
		cm.dispose();
            } else {
                cm.sendOk("你没有50个#v4021012#我不能给你兑换.");
		cm.dispose();
            }
            break;
        case 12:
            if (cm.haveItem(4021011,50)) {
                cm.gainItem(4021011,-50);
                cm.gainItem(4031997,10);
		cm.worldMessage("恭喜玩家" + cm.getChar().getName() + "成功兑换10个蘑菇金币" );
                cm.sendOk("恭喜你成功兑换10个#v4031997#!");
		cm.dispose();
            } else {
                cm.sendOk("你没有50个#v4021011#我不能给你兑换.");
		cm.dispose();
            }
            break;
        case 13:
            if (cm.haveItem(4000659,10)) {
                cm.gainItem(4000659,-10);
                cm.gainItem(4000038,1);
		cm.worldMessage("恭喜玩家" + cm.getChar().getName() + "成功兑换一个金杯" );
                cm.sendOk("恭喜你成功兑换1个#v4000038#!");
		cm.dispose();
            } else {
                cm.sendOk("你没有10个#v4000659#我不能给你兑换.");
		cm.dispose();
            }
            break;
        case 16:
		cm.dispose();
		cm.openNpc(9900002,30);
            break;
        }
    }
}