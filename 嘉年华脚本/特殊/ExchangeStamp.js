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
            var selStr = "这边可以对收集到的邮票进行兑换。\r\n#b#L0#兑换#r#v4002000##t4002000##k 每张1000点卷#k\r\n#b#L1#兑换#r#v4002001##t4002001##k 每张2000点卷#k\r\n#b#L2#兑换#r#v4002002##t4002002##k 每张5000点卷#k\r\n#b#L3#兑换#r#v4002003##t4002003##k 每张10000点卷#k";
            cm.sendSimple(selStr);
            break;
        case 1: //4310085
            intype = 4002000 + selection;
            var base;
            switch (intype) {
                case 4002000:
                    base = 1000;
                    break;
                case 4002001:
                    base = 2000;
                    break;
                case 4002002:
                    base = 5000;
                    break;
                case 4002003:
                    base = 10000;
                    break;
            }
            temp = cm.getItemQuantity(intype);
            if (temp > 0) {
                cost = temp * base;
                cm.sendYesNo("是否要兑换 " + temp + "张#b#v" + intype + "##t" + intype + "##k.");
            } else {
                cm.sendOk("你并没有#b#v" + intype + "##t" + intype + "##k...");
                cm.safeDispose();
            }
            break;
        case 2:
            cm.gainItem(intype, -temp);
            cm.gainNX(cost);
            cm.sendOk("兑换好啦！欢迎下次在来");
            cm.dispose();
            break;
    }
}
