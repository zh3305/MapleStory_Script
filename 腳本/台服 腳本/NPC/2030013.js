/*
 BOSS殘暴炎魔
 */
/* global cm */

var minLevel = [90, 90, 50];
var maxLevel = [255, 255, 255];
var maxEnter = 2;
var pqName = "殘暴炎魔";
var eventNames = ["ZakumBattle", "ChaosZakum", "SimpleZakum"];
var open = true;
var status = -1;
var zakumMode;
function start() {
    if (!cm.isLeader()) {
        cm.sendOk("只有隊伍隊長提出申請.");
        cm.dispose();
        return;
    }
    zakumMode = cm.getMapId() - 211042400;
    if (zakumMode === 0) {
        if (!cm.haveItem(4001017)) {
            cm.sendOk("您沒有需要獻給一般魔的祭品，因此無法進行移動。");
            cm.dispose();
        } else {
            cm.sendSimple("#e<炎魔 : 一般模式>#n\r\n炎魔復活了. 如果就這樣放著不管引起火山爆後把整個冰原雪域山脈變成地域.\r\n#r(炎魔的祭壇 #e一天可進入" + maxEnter + "回#n, 進入記錄#e每日整點初始化#n .)\r\n#b\r\n#L0# 申請進入炎魔.(組隊員同時移動.)#l");
        }
    } else if (zakumMode === 1) {
        if (!cm.haveItem(4001017)) {
            cm.sendOk("你没有需要献给混沌炎魔的祭品，因此無法進行移動。");
            cm.dispose();
        } else {
            cm.sendSimple("#e<炎魔 : 混沌模式>#n\r\n炎魔復活了. 如果就這樣放著不管引起火山爆後把整個冰原雪域山脈變成地域.\r\n#r(炎魔的祭壇 #e一天可進入" + maxEnter + "回#n, 進入記錄#e每日整點初始化#n .)\r\n#b\r\n#L0# 混沌 申請進入炎魔.(組隊員同時移動.)#l");
        }
    } else if (zakumMode === 2) {
        if (!cm.haveItem(4001796)) {
            cm.sendOk("你没有需要献给容易炎魔的祭品，因此無法進行移動。");
            cm.dispose();
        } else {
            cm.sendSimple("#e<炎魔容易模式>#n\r\n炎魔復活了. 如果就這樣放著不管引起火山爆後把整個冰原雪域山脈變成地域.\r\n#r(炎魔的祭壇 #e一天可進入" + maxEnter + "回#n, 入場記錄 #e每日整點#n重置.)\r\n#b\r\n#L0# 申請進入炎魔容易.(組隊員同時移動.)#l");
        }
    } else {
        cm.sendOk("出現未知錯誤。");
        cm.dispose();
    }
}


function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    if (!cm.isAllPartyMembersAllowedLevel(minLevel[zakumMode], maxLevel[zakumMode])) {
        cm.sendNext("所有成員等級" + minLevel[zakumMode] + "以上" + maxLevel[zakumMode] + "以下才可以入場。");
    } else if (!cm.isAllPartyMembersAllowedPQ(pqName, maxEnter)) {
        cm.sendNext("你的隊員\"" + cm.getNotAllowedPQMember(pqName, maxEnter).getName() + "\"次數已經達到上限了。");
    } else {
        var em = cm.getEventManager(eventNames[zakumMode]);
        if (em == null || open == false) {
            cm.sendSimple("配置文件不存在,請聯繫管理員。");
        } else {
            var prop = em.getProperty("state");
            if (prop == null || prop.equals("0")) {
                em.startInstance(cm.getParty(), cm.getMap(), 255);
                cm.gainMembersPQ(pqName, 1);
            } else {
                cm.sendSimple("已經有隊伍在進行了,請換其他頻道嘗試。");
            }
        }
    }
    cm.dispose();
}