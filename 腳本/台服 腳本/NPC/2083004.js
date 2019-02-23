/*
 闇黑龍王
 */
/* global cm */

var minLevel = [130, 130, 135];
var maxLevel = [255, 255, 255];
var maxEnter = 2;
var pqName = "闇黑龍王";
var eventNames = ["SimpleHorntail", "HorntailBattle", "ChaosHorntail"];
var open = true;
var status = -1;
var mode = -1;

function start() {
    if (!cm.isLeader()) {
        cm.sendOk("只有隊伍隊長提出申請.");
        cm.dispose();
        return;
    }

    cm.sendSimple("#e<Boss: 闇黑龍王>#n\r\n闇黑龍王復活了. 這樣下去會引起火山爆發後,會把冰原雪域的全山脈變為一片地獄.\r\n#b\r\n#L0# 申請入場<Boss: 闇黑龍王>.#l");
}


function action(mode, type, selection) {
    if (mode === 1) {
        status++;
    } else {
        status--;
    }

    if (status === 0) {
        cm.sendSimple("#e<BOSS: 闇黑龍王>#n\r\n選擇想要的模式.\r\n\r\n#L0# 簡單模式 ( 等級" + minLevel[0] + " 以上 )#l\r\n#L1# 一般模式 ( 等級 " + minLevel[1] + " 以上 )#l\r\n#L2# 混沌模式 ( 等級 " + minLevel[2] + " 以上 )#l");
    } else if (status === 1) {
        if (mode !== -1) {
            mode = selection;
        }

        if (!cm.isAllPartyMembersAllowedLevel(minLevel[mode], maxLevel[mode])) {
            cm.sendNext("所有成員等級" + minLevel[mode] + "級以上" + maxLevel[mode] + "級以下才可以入場。");
        } else if (!cm.isAllPartyMembersAllowedPQ(pqName, maxEnter)) {
            cm.sendNext("你的隊員\"" + cm.getNotAllowedPQMember(pqName, maxEnter).getName() + "\"次數已經達到上限了。");
        } else {
            var em = cm.getEventManager(eventNames[mode]);
            if (em === null || open === false) {
                cm.sendSimple("配置文件不存在,請聯繫管理員。");
            } else {
                var prop = em.getProperty("state");
                if (prop === null || prop.equals("0")) {
                    em.startInstance(cm.getParty(), cm.getMap(), 255);
                    cm.gainMembersPQ(pqName, 1);
                } else {
                    cm.sendSimple("已經有隊伍在進行了,請換其他頻道嘗試。");
                }
            }
        }
        cm.dispose();
    } else {
        cm.dispose();
    }
}