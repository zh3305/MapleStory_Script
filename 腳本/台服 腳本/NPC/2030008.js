/* 阿杜比斯
 * 地點: 殘暴炎魔门口 (211042300)
 */
var status = -1;
var select = -1;
var zakumMode = -1;

function start() {
    if (cm.getPlayer().getLevel() >= 50) {
        cm.sendSimple("喔... 好囉. 你們看起來有充份的資格. 要做什麼呢?\r\n#b#L0# 離開去調查廢礦洞窟地. #l\r\n#b#L1# 探查炎魔地下城.#l\r\n#b#L2# 取得要貢獻給炎魔的祭品.#l\r\n#b#L3# 移動到冰原雪域.#l");
    } else {
        cm.sendOk("按照你目前的情況，你還不能滿足進行這項任務的能力，當你變的強大的時候，再來找我吧！");
        cm.dispose();
    }
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status < 1) {
            cm.dispose();
            return;
        } else if (status == 3) {
            if (zakumMode == 1) {
                cm.sendOk("那好吧......不過你得明白, 沒有#b#t4001017##k的話, 是無法見到BOSS的。");
                cm.dispose();
                return;
            }
        }
        status--;
    }

    if (status == 0) {
        if (select == -1)
            select = selection;
        if (select == 0) {
            if (cm.getParty() == null) {
                cm.sendNext("你們沒有組成隊伍. 組成隊伍才能挑戰.");
                cm.safeDispose();
                return;
            } else if (!cm.isLeader()) {
                cm.sendNext("你不是組隊長，請讓你的組隊長和我談話。");
                cm.safeDispose();
                return;
            } else {
                var party = cm.getParty().getMembers();
                mapId = cm.getMapId();
                var next = true;
                for (var i = 0; i < party.size(); i++) {
                    if ((party.get(i).getLevel() < 50) || (party.get(i).getMapid() != mapId)) {
                        next = false;
                    }
                }
                if (next) {
                    var em = cm.getEventManager("ZakumPQ");
                    if (em == null) {
                        cm.sendOk("我不能讓你進入這個未知的世界，因為管理員還沒有準備好開放。");
                    } else {
                        var prop = em.getProperty("state");
                        if (prop.equals("0") || prop == null) {
                            em.startInstance(cm.getParty(), cm.getMap());
                        } else {
                            cm.sendOk("另一個組隊已經開始了調查任務，請稍後再來。");
                        }
                    }
                    cm.dispose();
                } else {
                    cm.sendNext("請确保你所有組隊員都達到50級以上。");
                    cm.dispose();
                }
            }
        } else if (select == 1) {
            cm.sendNext("好! 現在開始你會移動到有許多障礙物的地圖. 祝好運!!");
        } else if (select == 2) {
            cm.sendSimple("需要獻給哪個炎魔的祭品呢?\r\n#b#L0# 簡單炎魔#l\r\n#L1# 一般/混沌 炎魔#l");
        } else if (select == 3) {
            cm.sendNext("那把你送到冰原雪域.");
        }
    } else if (status == 1) {
        if (select == 1) {
            cm.warp(280020000, 0);
            cm.dispose();
        } else if (select == 2) {
            if (zakumMode == -1)
                zakumMode = selection;
            if (zakumMode == 0) {
                if (cm.haveItem(4001796)) {
                    cm.sendOk("已經擁有簡單殘暴炎魔的祭品 #b#t4001796##k了啊.. 全部使用完的話請再說.");
                    cm.dispose();
                } else {
                    cm.sendNext("需要獻給簡單炎魔的祭品..");
                }
            } else if (zakumMode == 1) {
                if (cm.haveItem(4001017)) {
                    cm.sendOk("已經擁有殘暴炎魔的祭品 #b#t4001017##k了啊.. 全部使用完的話請再說.");
                    cm.dispose();
                } else {
                    cm.sendNext("需要奉上給殘暴炎魔的祭品..");
                }
            }
        } else if (select == 3) {
            cm.sendNextPrev("想要再次來到這地方時, 去找冰原雪域的長老.");
        }
    } else if (status == 2) {
        if (select == 2) {
            if (zakumMode == 0) {
                cm.sendNextPrev("但是要呼喚殘暴炎魔的話需要祭品 #b#t4001796##k, 現在我已經有太多了所以就直接給你吧.");
            } else if (zakumMode == 1) {
                cm.sendNextPrev("但是要呼喚殘暴炎魔的話需要祭品 #b#t4001017##k現在我已經有太多了所以就直接給你吧.");
            }
        } else if (select == 3) {
            cm.warp(211000000);
            cm.dispose();
        }
    } else if (status == 3) {
        if (select == 2) {
            if (zakumMode == 0) {
                cm.sendNextPrev("把這個丟在容易炎魔的祭壇就可以.");
            } else if (zakumMode == 1) {
                cm.sendNextPrev("只要在殘暴炎魔的祭壇掉落這個的話就行了.");
            }
        }
    } else if (status == 4) {
        if (select == 2) {
            if (zakumMode == 0) {
                cm.gainItem(4001796, 1);
                cm.dispose();
            } else if (zakumMode == 1) {
                cm.gainItem(4001017, 1);
                cm.dispose();
            }
        }
    }
}