/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：枫叶交换枫叶币
 *  @Author Kent 
 */

var status;
var temp;
var cast;
var intype;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }
    switch (status) {
        case 0:
            var selStr = "这里可以使用#r#v4001126##t4001126##k兑换#r#v4310028##t4310028##k,兑换比例为#b1:2#k.那么你想进行兑换么?";
            cm.sendYesNo(selStr);
            break;
        case 1:
            var selStr = "你想兑换多少#r#v4310028##t4310028##k呢?\r\n\r\n";
            cm.sendGetNumber(selStr, 0, 0, 99999);
            break;
        case 2:
            if (selection == 0) {
                cm.sendOk("你觉得0个也需要兑换么?#k.");
                cm.safeDispose();
            } else {
                temp = selection * 2;
                cost = selection;
                cm.sendYesNo("你想使用 #r" + cost + "个#v4001126##t4001126##k 来兑换#b " + temp + "个#v4310028##t4310028###k吗?");
            }
            break;
        case 3:
            if (cm.getItemQuantity(4001126) < cost) {
                cm.sendOk("请确认你有足够的#b#v4001126##t4001126##k.");
            } else {
                cm.gainItem(4001126, -cost);
                cm.gainItem(4310028, temp);
                cm.sendOk("兑换好啦！欢迎下次在来");
            }
            cm.dispose();
            break;
    }
}
