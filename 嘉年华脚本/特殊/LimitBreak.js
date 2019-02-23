/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：武器破攻
 *  @Author Kent 
 */

var status;
var con = 10;
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
            var selStr = "我可以帮助你的武器进行破攻，当然你需要付出一点东西:\r\n\r\n#b#L1#[使用泰密硬币]#k\r\n";
            cm.sendSimple(selStr);
            break;
        case 1:
            if (selection == 1) {
                con = parseInt(Math.max(cm.getLimitBreak() / 100000, 100) / 10);
                cm.sendSimple("嗯..根据当前武器的情况, \r\n#b#L1#使用#e#r" + con + "#k#n个泰密硬币破攻#r100W#k\r\n#b#L12#使用#e#r" + (con * 12) + "#k#n个泰密硬币破攻#r1500W#k");
            }
            break;
        case 2:
            var cost = con * selection;
            if (cm.getItemQuantity(4310085) >= cost) {
                var limit = 1000000 * (selection != 1 ? 15 : 1);
                if (cm.WeaponLimitBreak(limit)) {
                    cm.gainItem(4310085, -cost);
                    cm.sendOk("武器进行破攻完成.");
                } else {
                    cm.sendOk("请确认是否有佩戴武器或武器已经达到系统限制.");
                }
            } else {
                cm.sendOk("你确认你有#e#r" + cost + "#k#n个泰密硬币.");
            }
            cm.dispose();
            break;
    }
}
