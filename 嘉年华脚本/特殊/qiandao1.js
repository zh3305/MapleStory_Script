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
        var selStr = "#r想兑换什么:#b\r\n#L1#鬼节快乐x1\r\n#L2#神奇魔方x5\r\n#L3#高级魔方x10\r\n#L4#防暴卷轴x10\r\n#L5#国庆中介币x10\r\n#L6#出席报到终结者勋章x30";
 cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 1:
            if (cm.itemQuantity(4032398) >=1){
                cm.gainItem(2022893,5);
		cm.gainItem(4032398, -1);
		cm.sendOk("兑换成功！");
		cm.dispose();
            } else {
                cm.sendOk("对不起，签到图章不足#v4032398#x1。");
		cm.dispose();
            }
            break;
        case 2:
            if (cm.itemQuantity(4032398) >=3){
		cm.gainItem(5062000,5);
		cm.gainItem(4032398, -3);
		cm.sendOk("兑换成功！");
		cm.dispose();
            } else {
                cm.sendOk("对不起，签到图章不足#v4032398#x3。");
		cm.dispose();
            }
            break;
        case 3:
            if (cm.itemQuantity(4032398) >=7){
		cm.gainItem(5062002,5);
		cm.gainItem(4032398, -7);
		cm.sendOk("兑换成功！");
		cm.dispose();
            } else {
                cm.sendOk("对不起，签到图章不足#v4032398#x7。");
		cm.dispose();
            }
            break;
        case 4:
            if (cm.itemQuantity(4032398) >=14){
		cm.gainItem(5064000,5);
		cm.gainItem(4032398, -14);
		cm.sendOk("兑换成功！");
		cm.dispose();
            } else {
                cm.sendOk("对不起，签到图章不足#v4032398#x14。");
		cm.dispose();
            }
            break;
        case 5:
            if (cm.itemQuantity(4032398) >=21){
		cm.gainItem(4000463,10);
		cm.gainItem(4032398, -21);
		cm.sendOk("兑换成功！");
		cm.dispose();
            } else {
                cm.sendOk("对不起，签到图章不足#v4032398#x21。");
		cm.dispose();
            }
            break;
        case 6:
            if (cm.itemQuantity(4032398) >=30){
		cm.gainItem(1142295,1);
		cm.gainItem(4032398, -30);
		cm.sendOk("兑换成功！");
		cm.dispose();
            } else {
                cm.sendOk("对不起，签到图章不足#v4032398#x30。");
		cm.dispose();
            }
            break;
        }
    }
}