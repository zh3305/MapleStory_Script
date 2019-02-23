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
/*
 * 4002000 - 蜗牛邮票 
 4002001 - 蓝蜗牛邮票
 4002002 - 木妖邮票
 4002003 - 绿水灵邮票
 */
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }
    switch (status) {
        case 0:
            var selStr = "这边可以购买特殊的邮票。\r\n#b#L0#购买#r#v4002000##t4002000##k 1050点卷#k\r\n#b#L1#购买#r#v4002001##t4002001##k 2090点卷#k\r\n#b#L2#购买#r#v4002002##t4002002##k 5230点卷#k\r\n#b#L3#购买#r#v4002003##t4002003##k 10450点卷#k";
            cm.sendSimple(selStr);
            break;
        case 1: //4310085
            intype = 4002000 + selection;
            var selStr = "那么你现在想用购买多少张#v" + intype + "##t" + intype + "#？(本次最大可以输入:99个)\r\n\r\n";
            cm.sendGetNumber(selStr, 0, 0, 99);
            break;
        case 2:
            if (selection == 0) {
                cm.sendOk("我不能和你兑换0张#b#v" + intype + "##t" + intype + "#k.");
                cm.safeDispose();
            } else {
                temp = selection;
                var base;
                switch (intype) {
                    case 4002000:
                        base = 1050;
                        break;
                    case 4002001:
                        base = 2090;
                        break;
                    case 4002002:
                        base = 5230;
                        break;
                    case 4002003:
                        base = 10450;
                        break;
                }
                cost = temp * base;
                cm.sendYesNo("你想使用 #b" + cost + " 点卷#k 来兑换#b " + temp + " 个#v" + intype + "##t" + intype + "##k吗?");
            }
            break;
        case 3:
            if (cm.getNX(1) < cost || !cm.canHold(intype)) {
                cm.sendOk("请确认你有足够多的点卷或者其他物品栏有足够的空间.");
            } else {
                cm.gainItem(intype, temp);
                cm.gainNX(-cost);
                cm.sendOk("兑换好啦！欢迎下次在来");
            }
            cm.dispose();
            break;
    }
}
