/**
 *Mary
 */
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
        var selStr = "你好，请选择你需要兑换的物品\r\n#L0##v2340000##L1##v2049100##L2##v1012191##L3##v1022097##L4##v1132013#";
 cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.itemQuantity(4310034) >=5){
		cm.gainItem(4310034,-5);
		cm.gainItem(2340000,1);//祝福卷轴
                cm.sendOk("兑换#v2340000#x1成功.请查看背包");
		cm.dispose();
            } else {
                cm.sendOk("你没有5个#v4310034#");
		cm.dispose();
            }
            break;
        case 1:
            if (cm.itemQuantity(4310034) >=5){
		cm.gainItem(4310034,-5);
		cm.gainItem(2049100,1);//混沌卷轴
                cm.sendOk("兑换#v2049100#x1成功.请查看背包");
		cm.dispose();
            } else {
                cm.sendOk("你没有5个#v4310034#");
		cm.dispose();
            }
            break;
        case 2:
            if (cm.itemQuantity(4310034) >=5){
		cm.gainItem(4310034,-5);
		cm.gainItem(1012191,1);//暗影双刀面巾
                cm.sendOk("兑换#v1012191#x1成功.请查看背包");
		cm.dispose();
            } else {
                cm.sendOk("你没有5个#v4310034#");
		cm.dispose();
            }
            break;
        case 3:
            if (cm.itemQuantity(4310034) >=5){
		cm.gainItem(4310034,-5);
		cm.gainItem(1022097,1);//龙眼镜
                cm.sendOk("兑换#v1022097#x1成功.请查看背包");
		cm.dispose();
            } else {
                cm.sendOk("你没有5个#v4310034#");
		cm.dispose();
            }
            break;
        case 4:
            if (cm.itemQuantity(4310034) >=5){
		cm.gainItem(4310034,-5);
		cm.gainItem(1132013,1);//不灭的法老腰带
                cm.sendOk("兑换#v1132013#x1成功.请查看背包");
		cm.dispose();
            } else {
                cm.sendOk("你没有5个#v4310034#");
		cm.dispose();
            }
            break;
        }
    }
}