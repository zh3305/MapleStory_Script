var status = -1;
var sel;
var fishList = Array(
        Array(0, 4031628),
        Array(0, 4031641),
        Array(0, 4031642),
        Array(0, 4031643),
        Array(0, 4031644),
        Array(1, 4031627),
        Array(1, 4031633),
        Array(1, 4031634),
        Array(1, 4031635),
        Array(1, 4031636),
        Array(2, 4031630),
        Array(2, 4031637),
        Array(2, 4031638),
        Array(2, 4031639),
        Array(2, 4031640),
        Array(3, 4031631),
        Array(3, 4031645),
        Array(3, 4031646),
        Array(3, 4031647),
        Array(3, 4031648)
        );
var fishreward = [2022644, 2022643, 2022645, 2022646];

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;

    if (status == 0) {
        cm.sendNext("今天的钓鱼还顺利吗？钓鱼最大的快感就是抓到大鱼吧！不晓得你今天的鱼获是不是让你满意…");
    } else if (status == 1) {
        cm.sendNext("若是抓到不太满意的鱼获，只要你愿意，我可以帮你把鱼儿料理成美味的佳肴…");
    } else if (status == 2) {
        cm.sendSimple("哈哈~是不是很好奇我的料理手法？是不是很期待啊？ \n\r #b#L0# 大小多样的剑鱼各10条 #l \n\r #L1# 大小多样的青鱼各10条 #l \n\r #L2# 大小多样的鲤鱼各10条 #l \n\r #L3# 大小多样的鲑鱼各10条 #l");
    } else if (status == 3) {
        for (var i = 0; i < fishList.length; i++) {
            if (fishList[i][0] == selection) {
                if (!cm.haveItem(fishList[i][1], 10)) {
                    cm.sendOk("可惜啰~若有机会，希望下次可以帮你做出美味料理~");
                    cm.safeDispose();
                    return;
                }
            }
        }
        if (cm.canHold(fishreward[selection], 20)) {
            for (var i = 0; i < fishList.length; i++) {
                if (fishList[i][0] == selection) {
                    cm.gainItem(fishList[i][1], -10);
                }
            }
            cm.gainItem(fishreward[selection], 20);
            cm.sendNext("好啦,已经烹饪好了,请收好。");
        } else {
            cm.sendOk("可惜啰~请整理下你的背包空间.");
        }
        cm.safeDispose();
    }
}
