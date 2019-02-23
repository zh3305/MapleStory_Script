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
            var selStr = "我可以对#b[泰密硬币]#k进行兑换，#b[泰密硬币]#k可以兑换许多绝版东西哟。\r\n#r1000W金币#k可以兑换#r1个泰密硬币#k 当然也可以用来兑换金币，#r1个泰密硬币#k可以兑换#r900W金币#k\r\n那么现在你想？\r\n#b#L1#[金币兑换泰密硬币]#k\r\n#b#L2#[泰密硬币兑换金币]#k";
            cm.sendSimple(selStr);
            break;
        case 1: //4310085
            intype = selection;
            if (intype == 1) {
                var selStr = "那么你现在想用#r金币#k兑换#r泰密硬币#k，兑换比率是：#r2500W金币#k可以兑换#r1个泰密硬币#k，那么你要兑换多少个#r泰密硬币#k呢？(本次最大可以输入:99个)\r\n\r\n";
            } else if (intype == 2) {
                var selStr = "那么你现在想用#r泰密硬币#k兑换#r金币#k，兑换比率是：#r1个泰密硬币#k可以兑换#r2000W金币#k，那么你想使用兑换多少#r泰密硬币#k进行兑换呢？(本次最大可以输入:99个)\r\n\r\n";
            }
            cm.sendGetNumber(selStr, 0, 0, 99);
            break;
        case 2:
            if (intype == 1) {
                if (selection == 0) {
                    cm.sendOk("我不能和你兑换0个#b[泰密硬币]#k.");
                    cm.safeDispose();
                } else {
                    temp = selection;
                    cost = temp * 25000000;
                    cm.sendYesNo("你想使用 #b" + cost + " 金币#k 来兑换#b " + temp + " 个[泰密硬币]#k吗?");
                }
            } else if (intype == 2) {
                if (selection == 0) {
                    cm.sendOk("你不能用0个#b[泰密硬币]#k进行兑换.");
                    cm.safeDispose();
                } else {
                    temp = selection;
                    cost = temp * 20000000;
                    cm.sendYesNo("你想使用#b " + temp + " 个[泰密硬币]#k 来兑换#b" + cost + " 金币#k吗?");
                }
            }
            break;
        case 3:
            if (intype == 1) {
                if (cm.getMeso() < cost || !cm.canHold(4310085)) {
                    cm.sendOk("请确认你有足够多的金币或者其他物品栏有足够的空间.");
                } else {
                    cm.gainItem(4310085, temp);
                    cm.gainMeso(-cost);
                    cm.sendOk("兑换好啦！欢迎下次在来");
                }
            } else if (intype == 2) {
                if (cm.getItemQuantity(4310085) < temp) {
                    cm.sendOk("请确认你有足够的#b[泰密硬币]#k.");
                } else {
                    cm.gainItem(4310085, -temp);
                    cm.gainMeso(cost);
                    cm.sendOk("兑换好啦！欢迎下次在来");
                }
            }
            cm.dispose();
            break;
    }
}
