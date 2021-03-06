/*
 BOSS扎昆
 */
var minLevel = [90, 90];
var maxLevel = [255, 255];
var maxEnter = [3,1];
var pqName = ["普通扎昆","进阶扎昆"];
var eventNames = ["BossZakum_NORMAL", "BossZakum_CHAOS"];
var open = true;
var status = -1;
var zakumMode;
function start() {
    if (!cm.isLeader()) {
        cm.sendOk("只有队长才可以申请入场。");
        cm.dispose();
        return;
    }
    zakumMode = cm.getMapId() - 211042400;
    if (zakumMode == 0) {
        if (!cm.haveItem(4001017)) {
            cm.sendOk("你没有需要献给普通扎昆的祭品，因此无法进行移动。");
            cm.dispose();
        } else {
            cm.sendSimple("#e<BOSS - 扎昆：普通模式>#n\r\n扎昆复活了啊。再这样下去, 一旦它引起火山爆发的话, 冰峰雪域山脉将会整个变成地狱。\r\n#r(扎昆的祭坛的入场次数为#e每天" + maxEnter[zakumMode] + "次#n, 入场记录#e每天午夜0点#n将会初始化。)\r\n#b\r\n#L0#申请进入普通扎昆副本。(队员会同时移动。)#l");
        }
    } else if (zakumMode == 1) {
        if (!cm.haveItem(4001017)) {
            cm.sendOk("你没有需要献给进阶扎昆的祭品，因此无法进行移动。");
            cm.dispose();
        } else {
            cm.sendSimple("#e<扎昆：进阶模式>#n\r\n扎昆复活了啊。再这样下去, 一旦它引起火山爆发的话, 冰峰雪域山脉将会整个变成地狱。\r\n#r(扎昆的祭坛的入场次数为#e每天" + maxEnter[zakumMode] + "次#n, 入场记录#e每天午夜0点#n将会初始化。)\r\n#b\r\n#L0#申请进入进阶扎昆副本。(队员会同时移动。)#l");
        }
    } else if (zakumMode == 2) {
        if (!cm.haveItem(4001796)) {
            cm.sendOk("你没有需要献给简单扎昆的祭品，因此无法进行移动。");
            cm.dispose();
        } else {
            cm.sendSimple("#e<扎昆简单模式>#n\r\n扎昆复活了啊。再这样下去, 一旦它引起火山爆发的话, 冰峰雪域山脉将会整个变成地狱。\r\n#r(扎昆的祭坛的入场次数为#e每天" + maxEnter[zakumMode] + "次#n, 入场记录#e每天午夜0点#n将会初始化。)\r\n#b\r\n#L0#申请进入简单扎昆副本。(队员会同时移动。)#l");
        }
    } else {
        cm.sendOk("出现未知错误。");
        cm.dispose();
    }
}


function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    if (!cm.isAllPartyMembersAllowedLevel(minLevel[zakumMode], maxLevel[zakumMode])) {
        cm.sendNext("所有成员等级" + minLevel[zakumMode] + "级以上" + maxLevel[zakumMode] + "级以下才可以入场。");
    } else if (!cm.isAllPartyMembersAllowedPQ(pqName[zakumMode], maxEnter[zakumMode])) {
        cm.sendNext("你的队员\"" + cm.getNotAllowedPQMemberName(pqName[zakumMode], maxEnter[zakumMode]) + "\"次数已经达到上限了。");
    } else {
        var em = cm.getEventManager(eventNames[zakumMode]);
        if (em == null || open == false) {
            cm.sendSimple("配置文件不存在,请联系管理员。");
        } else {
            var prop = em.getProperty("state");
            if (prop == null || prop.equals("0")) {
                em.startInstance(cm.getParty(), cm.getMap(), 255);
                cm.gainMembersPQ(pqName[zakumMode], 1);
            } else {
                cm.sendSimple("已经有队伍在进行了,请换其他频道尝试。");
            }
        }
    }
    cm.dispose();
}
