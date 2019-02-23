/* global cm */

//副本開關 開啟、true 關閉、false
var open = true;
//副本腳本名
var name = ["HillaBattle", "DarkHillaBattle"];
//等級限制
var minLevel = [120, 170];
var maxLevel = [255, 255];
//次數限制
var maxenter = 2;
//記錄次數名稱
var PQName = '希拉';

var status = -1;

var out = false;

function start() {
    if (cm.getMapId() === 262031300 || cm.getMapId() === 262030300) {
        cm.sendYesNo("你確定要從這裡出去嗎？");
        out = true;
        return;
    }
    if (cm.getParty() === null) {
        cm.sendOk("要組1人以上的隊伍,才能入場.");
        cm.dispose();
        return;
    } else if (!cm.isLeader()) {
        cm.sendOk("只有隊長才可以申請入場.");
        cm.dispose();
        return;
    }
    cm.sendSimple("#e<Boss: 希拉>#n\r\n準備好擊敗希拉, 成功真正解放阿斯旺嗎? 若遠征隊員在其他區域,請大家集合一起吧..\r\n#b\r\n#L0# 申請<Boss: 希拉> 的入場.#l");
}

function action(mode, type, selection) {
    if (out) {
        if (mode === 1) {
            cm.warp(262000000, 0);
        }
        cm.dispose();
        return;
    }
    if (mode === 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }

    if (status === 0) {
        cm.sendSimple("#e<Boss: 希拉>#n\r\n請選擇想要的模式.\r\n\r\n#L0# 普通模式 ( 等級 " + minLevel[0] + " 以上 )#l\r\n#L1# 困難模式 ( 等級 " + minLevel[1] + " 以上 )#l\r\n");
    } else if (status === 1) {
        if (selection !== 0 && selection !== 1) {
            cm.sendOk("出現未知錯誤。");
            cm.dispose();
            return;
        }
        if (!cm.isAllPartyMembersAllowedLevel(minLevel[selection], maxLevel[selection])) {
            cm.sendNext("組隊成員等級 " + minLevel[selection] + " 以上 " + maxLevel[selection] + " 以下才可以入場。");
        } else if (!cm.isAllPartyMembersAllowedPQ(PQName, maxenter)) {
            cm.sendNext("你的隊員\"" + cm.getNotAllowedPQMember(PQName, maxenter).getName() + "\"次數已經達到上限了。");
        } else {
            var em = cm.getEventManager(name[selection]);
            if (em === null || !open) {
                cm.sendOk("要挑戰的希拉副本還未開放。");
            } else {
                var prop = em.getProperty("state");
                if (prop === null || prop.equals("0")) {
                    em.startInstance(cm.getParty(), cm.getMap(), 255);
                    cm.gainMembersPQ(PQName, 1);
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