/* 
 * 乌鲁斯
 */
var status = -1;
var maxenter = 3;
var minLevel = 100;
var maxLevel = 255;
var maxenter = 3;
var PQLog = "乌鲁斯";
function start() {
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
            return;
        }
        cm.dispose();
        return;
    }

    if (status == 0) {
        cm.sendSimpleN("#b你想要怎么样? #k\r\n#L0#快速开始(通过匹配进行18人挑战)#l\r\n#L1#组队游戏(1人~18人挑战)#l\r\n#L2#确认今天的剩余次数#l");
    } else if (status == 1) {
        if (selection == 0) {
            cm.openUI(0x123);
            cm.dispose();
        } else if (selection == 1) {
            if (cm.getParty() == null) {
                cm.sendNextN("你并未组队啊, 如果你想以个人的形式和其他勇士一同挑战乌鲁斯, 就选择快速开始. ");
            } else if (!cm.isLeader()) { // 不是队长
                cm.sendNextN("队长必须在这里。请让他和我说话。");
            } else if (!cm.isAllPartyMembersAllowedLevel(minLevel, maxLevel)) {
                cm.sendNextN("组队成员等级 " + minLevel + " 以上 " + maxLevel + " 以下才可以入场。");
            } else if (!cm.isAllPartyMembersAllowedPQ(PQLog, maxenter)) {
                cm.sendNextN("你的队员#r#e \"" + cm.getNotAllowedPQMemberName(PQLog, maxenter) + "\" #k#n次数已经达到上限了。");
            } else if (!cm.allMembersHere()) {
                cm.sendNextN("你的组队部分成员不在当前地图,请召集他们过来后在尝试。"); //判断组队成员是否在一张地图..
            } else {
                cm.openUI(0x12A);
            }
            cm.dispose();
        } else if (selection == 2) {
            cm.sendNextN("今天还可以挑战" + (maxenter - cm.getEventCount("乌鲁斯")) + "次, 只不过, 不要忘了, 入场次数的限制是针对账号的.");
            cm.dispose();
        }
    }
}
