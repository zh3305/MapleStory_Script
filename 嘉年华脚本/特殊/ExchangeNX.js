/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：专属币交换
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
            var selStr = "这里可以使用#r金币#k兑换#r点卷#k,兑换比例为#b9000W:1000#k.那么你想进行兑换么?";
            cm.sendYesNo(selStr);
            break;
        case 1:
            var selStr = "你想兑换多少点卷呢?\r\n(#r点卷单位为一千,兑换1000点只需要输入#b1#r,以此类推#k).)\r\n\r\n";
            cm.sendGetNumber(selStr, 0, 0, 99);
            break;
        case 2:
            if (selection == 0) {
                cm.sendOk("你觉得0点卷也需要兑换么?#k.");
                cm.safeDispose();
            } else {
                temp = selection * 0.9;
                cost = selection * 1000;
                cm.sendYesNo("你想使用 #r" + temp + "E 金币#k 来兑换#b " + cost + " 点卷#k吗?");
            }
            break;
        case 3:
            var mesos = temp * 100000000;
            if (cm.getMeso() < mesos) {
                cm.sendOk("请确认你有足够的#b金币#k.");
            } else {
                cm.gainMeso(-mesos);
                cm.gainNX(cost);
                cm.sendOk("兑换好啦！欢迎下次在来");
            }
            cm.dispose();
            break;
    }
}
