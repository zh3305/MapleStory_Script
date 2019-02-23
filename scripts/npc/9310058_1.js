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
        var selStr = "#r想兑换什么:#b\r\n#L1#1个#v4310002#兑换 2个 #v2022893#\r\n#L2#1个#v4032398#兑换 2个 #v5062000#\r\n#L3#1个#v4032398#兑换 1个 #v5062002#\r\n#L4#4个#v4032398#兑换 1个#v5064000#\r\n#L5#30个#v4032398#兑换 20个#v4000463#\r\n#L6#15个#v4032398#兑换 1个#v1142295#";
 cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 1:
            if (cm.itemQuantity(4310002) >=1){
                cm.gainItem(2022893,2);
		cm.gainItem(4310002, -1);
		cm.sendOk("兑换成功！");
		cm.dispose();
            } else {
                cm.sendOk("对不起，你没有1个#v4310002#");
		cm.dispose();
            }
            break;
        case 2:
            if (cm.itemQuantity(4032398) >=1){
		cm.gainItem(5062000,2);
		cm.gainItem(4032398, -1);
		cm.sendOk("兑换成功！");
		cm.dispose();
            } else {
                cm.sendOk("对不起，你没有1个#v4032398#");
		cm.dispose();
            }
            break;
        case 3:
            if (cm.itemQuantity(4032398) >=1){
		cm.gainItem(5062002,1);
		cm.gainItem(4032398, -1);
		cm.sendOk("兑换成功！");
		cm.dispose();
            } else {
                cm.sendOk("对不起，你没有1个#v4032398#");
		cm.dispose();
            }
            break;
        case 4:
            if (cm.itemQuantity(4032398) >=4){
		cm.gainItem(5064000,1);
		cm.gainItem(4032398, -4);
		cm.sendOk("兑换成功！");
		cm.dispose();
            } else {
                cm.sendOk("对不起，你没有4个#v4032398#");
		cm.dispose();
            }
            break;
        case 5:
            if (cm.itemQuantity(4032398) >=30){
		cm.gainItem(4000463,20);
		cm.gainItem(4032398, -30);
		cm.sendOk("兑换成功！");
		cm.dispose();
            } else {
                cm.sendOk("对不起，你没有30个#v4032398#");
		cm.dispose();
            }
            break;
        case 6:
            if (cm.itemQuantity(4032398) >=15){
		cm.gainItem(1142295,1);
		cm.gainItem(4032398, -15);
		cm.sendOk("兑换成功！");
		cm.dispose();
            } else {
                cm.sendOk("对不起，你没有15个#v4032398#");
		cm.dispose();
            }
            break;
        }
    }
}