/* Kedrick
	Fishking King NPC
*/

var yrs = 200;
var gjyr = 2300001;
var ybyr = 2300000;
var njbs = 300000;
var ygt = 5350000;

var status = -1;
var sel;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
            return;
        }
        status--;
    }

    if (status == 0) {
        cm.sendSimple("#r" + cm.getVipname() + " #k,您想要做什么呢？#b\n\r #L1#买鱼饵钓鱼#l \n\r #L3#用鱼罐头兑换鱼饵#l#k");
    } else if (status == 1) {
        sel = selection;
        if (sel == 1) {
            cm.sendYesNo("购买 #r" + yrs + " #k 个 #b #i" + ybyr +":##t" + ybyr + "# #k 鱼饵 需要 #r" + njbs + " #k 金币 .\r\n 您想购买吗?");
        } else if (sel == 3) {
            if (cm.canHold(gjyr, yrs) && cm.haveItem(ygt, 1)) {
                if (!cm.haveItem(gjyr)) {
                    cm.gainItem(gjyr, yrs);
                    cm.gainItem(ygt, -1);
                    cm.sendNext("祝您钓鱼快乐！");
                } else {
                    cm.sendNext("您已经有#b #i" + gjyr +":##t" + gjyr + "# #k了.");
                }
            } else {
                cm.sendOk("请检查您的背包是否能够存放的下 #r" + yrs + " #k 个 #b #i" + gjyr +":##t" + gjyr + "# #k\r\n或者 您是否有#b #i" + ygt +":##t" + ygt + "#.");
            }
            cm.safeDispose();
        }
    } else if (status == 2) {
        if (sel == 1) {
            if (cm.canHold(ybyr, 120) && cm.getMeso() >= njbs) {
                if (!cm.haveItem(ybyr)) {
                    cm.gainMeso( - njbs);
                    cm.gainItem(ybyr, yrs);
                    cm.sendNext("祝您钓鱼快乐！");
                } else {
                    cm.sendNext("您已经有 #b #i" + ybyr +":##t" + ybyr + "# #k了.");
                }
            } else {
                cm.sendOk("请检查您的背包是否能够存放的下 #r" + yrs + " #k 个 #b #i" + ybyr +":##t" + ybyr + "# #k\r\n或者 您是否有#r" + njbs + " #k 金币.");
            }
            cm.safeDispose();
        }
    }
}