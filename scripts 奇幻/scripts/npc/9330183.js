var status = 0;
var selStr;
var sel;
var selitem;

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
        selStr = "嘿,怎么了?你不是在艺术俱乐部..#b\r\n";
        selStr += "#L1#所以,呃,你有喜欢过任何人?#l\r\n";
        selStr += "#L2#我对你有点动心.#l\r\n";
        selStr += "#L3#咱们出去!你懂的#l\r\n";
        selStr += "#L4#我的心里只有你没有他#l\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        sel = selection;
        if (sel == 1) {
            cm.sendOk("真的吗?..");
        }
        if (sel == 2) {
            cm.sendOk("噢，我不敢相信");
        }
        if (sel == 3) {
            cm.sendOk("你能再没有节操一点吗?");
        }
        if (sel == 4) {
            cm.removeNpc(9330183);
            cm.spawnNpc(9330192, 198, 157);
            cm.getPlayer().getMap().startSimpleMapEffect("好吧。你赢了。跟你的老师来提高他们的友谊水平", 5120067);
        }
        cm.dispose();
    }
}