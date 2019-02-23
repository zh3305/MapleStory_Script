/**
 *Mary
 */
var status = 0;
var random = java.lang.Math.floor(Math.random() * 4);
var ca = java.util.Calendar.getInstance();

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
        var selStr = "\r\n#n#d#e#L1#交换150高贵帽子#l\r\n#n#d#e#L2#交换150高贵裤子#l\r\n#n#d#e#L3#交换150高贵衣服#l\n\r\n\r\n";
 cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.itemQuantity(4033647) >=1){
                    cm.dispose();
		    cm.openNpc(9900001,3001);
                    //cm.gainItem(4000313, -100);
cm.worldSpouseMessage(0x19,"[公告]伟大的"+ cm.getChar().getName() +"  在高贵交换NPC换取了属于自己的装备！");
			}else{
                cm.sendOk("你没有足够的 #v4033647# #z4033647# 无法打开！");
		cm.dispose();
            }
            break;
        case 1:
            if (cm.itemQuantity(4000313) >=0){
                    cm.dispose();
		    cm.openNpc(9310471,1);
			}else{
                cm.sendOk("你没有#v4033247# 足够的#v4000313#！");
		cm.dispose();
            }
            break;
        case 2:
            if (cm.itemQuantity(4001126) >=0){
                    cm.dispose();
		    cm.openNpc(9310471,2);
			}else{
                cm.sendOk("你没有足够的#v4001126#！");
		cm.dispose();
            }
            break;
        case 3:
            if (cm.itemQuantity(4033589) >=100){
		cm.gainItem(4033589,-100);
		cm.gainItem(1022097,1);//龙眼镜
                cm.sendOk("兑换#v1022097#x1成功.请查看背包");
		cm.dispose();
            } else {
                cm.sendOk("你没有100个#v4033589#");
		cm.dispose();
            }
            break;
        case 4:
            if (cm.itemQuantity(4033589) >=100){
		cm.gainItem(4033589,-100);
		cm.gainItem(1132013,1);//不灭的法老腰带
                cm.sendOk("兑换#v1132013#x1成功.请查看背包");
		cm.dispose();
            } else {
                cm.sendOk("你没有100个#v4033589#");
		cm.dispose();
            }
            break;
        }
    }
}