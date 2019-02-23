var status = 0;
var minLevel = 200;
var maxLevel = 255;
var minPartySize = 1;
var maxPartySize = 6;
var maxenter = 10;
var PQLog = "外星访客";
var sel = -1;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    var mapid = cm.getMapId();
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (mapid == 861000001) {
            onExit(mode, type, selection);
        } else if (mapid == 861000000) {
            onStart(mode, type, selection);
        } else {
            onEvent(mode, type, selection);
        }
    }
}


function onEvent(mode, type, selection) {
    if (status == 0) {
        cm.sendSimple("想#b和全部队友一起#k放弃抵御外星人的攻击并退出吗？\r\n\r\n#b#L0#退出。#l");
    } else if (status == 1) {
        cm.warpParty(861000000, 0);
        cm.dispose();
    }
}

function onExit(mode, type, selection) {
    if (status == 0) {
        cm.sendSimple("听别的冒险家说偶尔还会出现'稀有的'BOSS…#b\r\n#L1# 要从这里出去。#l");
    } else if (status == 1) {
        cm.warp(861000000);
        cm.dispose();
    }
}
function onStart(mode, type, selection) {
    if (status == 0) {
        cm.sendSimple("这宇宙飞船内部存在奇怪的磁场！参与实验的冒险家太少了…\r\n\r\n#b#L0# 询问事件#l\r\n#e#L1# 进入宇宙飞船内部。#l#n\r\n#L2# 寻找组队成员。#l#n\r\n#L3# 查看今天剩余的入场次数。.#l\r\n");
    } else if (status == 1) {
        sel = selection;
        switch (sel) {
            case 0:
                cm.sendNext("一天晚上，听到奇怪的声音后打开窗户一看，有巨大的火球从天而降！！");
                break;
            case 1: //
                cm.sendSimple("好的……准备好了的话，就进入那道光！\r\n\r\n#b#L1#进入宇宙船#l");
                break;
            case 2:
                cm.sendOk("请向周围的朋友们请求组队。使用寻找组队(快捷键O)功能，可以在任何时间任何地点寻找组队。敬请参考。");
                cm.dispose();
                break;
            case 3:
                var pqtry = maxenter - cm.getPQLog(PQLog);
                if (pqtry <= maxenter) {
                    cm.sendOk("今天还能进行 " + pqtry + " 次.");
                    cm.dispose();
                }
                cm.dispose();
                break;
        }
    } else if (status == 2) {
        if (sel == 0) {
            cm.sendNext("赶到这里后发现那个巨大的火球是宇宙飞船…还发现里面有数量庞大的生命体。而且，还发现很可怕的家伙。如果找不到那家伙，说不定冒险岛世界会有大事情。 ");
        } else {
            cm.sendNext("1. 必须在限定时间内消灭掉180个怪物或BOSS。\r\n2. 5个关卡必须#b#e“全部完成”#k#n，才能在出口处获得“大量的额外经验值”。\r\n\r\n这两点一定要记住！");
        }
    } else if (status == 3) {
        if (sel == 0) {
            cm.sendNext("所以我在找愿意进入宇宙飞船内部的最强冒险家，帮助我寻找那家伙的痕迹。");
        } else {

            if (cm.getParty() == null) { // 没有组队
                cm.sendOk("需要有一个队伍在可以入场。");
                cm.dispose();
            } else if (!cm.isLeader()) { // 不是队长
                cm.sendOk("队长必须在这里。请让他和我说话。");
                cm.dispose();
            } else if (!cm.allMembersHere()) {
                cm.sendOk("你的组队部分成员不在当前地图,请召集他们过来后在尝试。"); //判断组队成员是否在一张地图..
                cm.dispose();
            } else if (!cm.isAllPartyMembersAllowedLevel(minLevel, maxLevel)) {
                cm.sendNext("组队成员等级 " + minLevel + " 以上 " + maxLevel + " 以下才可以入场。");
                cm.dispose();
            } else if (!cm.isAllPartyMembersAllowedPQ(PQLog, maxenter)) {
                cm.sendNext("你的队员#r#e \"" + cm.getNotAllowedPQMemberName(PQLog, maxenter) + "\" #k#n次数已经达到上限了。");
                cm.dispose();
            } else {
                var party = cm.getParty().getMembers();
                var next = true;
                if (!cm.isAdmin() && (party.size() > maxPartySize || party.size() < minPartySize)) {
                    next = false;
                }
                if (next) {
                    var em = cm.getEventManager("Visitors");
                    if (em == null) {
                        cm.sendOk("此任务正在建设当中。");
                    } else {
                        var prop = em.getProperty("state");
                        if (prop.equals("0") || prop == null) {
                            cm.dispose();
                            em.startInstance(cm.getParty(), cm.getMap(), 209);
                            cm.gainMembersPQ(PQLog, 1);
                            return;
                        } else {
                            cm.sendOk("外星访客任务里面已经有人了，请稍等！");
                        }
                    }
                } else {
                    cm.sendYesNo("你需要有一个 " + minPartySize + " - " + maxPartySize + " 人的队伍. 请您组好队员后再试.");
                }
                cm.dispose();
            } //判断组队
        }
    } else if (status == 4) {
        if (sel == 0) {
            cm.sendNext("方法很简单。\r\n在5个房间各在5分钟内#打败#b#e'180只外星访问者'#k#n就行了。\r\n当然，如果有BOSS出现，#b#e只打败BOSS#k#n就可以了。如果能非常成功地调查宇宙船内部，就给你'惊人的经验值'。\r\n你…要帮我吗？");
        } else {

        }
    } else if (status == 5) {
        cm.sendOk("但，要记住宇宙飞船每天只能探索" + maxenter + "次。");
        cm.dispose();
    }
}

