//玩具城组队挑战任务
var status = 0;
var minLevel = 160;
var maxLevel = 255;
var minPartySize = 3;
var maxPartySize = 999;
var GetMeny = 500; //消耗点劵数量
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        else status--;
        if (status == 0) {
            if (cm.getMap().getId() == 922010100) {
                cm.sendOk("欢迎信息，在这里填写。");
                cm.dispose();
            } else {
                var text = "#e<组队任务：玩具城组队挑战任务>#n\r\n";
                text += "进入玩具城挑战副本需要" + GetMeny + "点劵一次.\r\n";
                text += "一个账号每天只能进入6次,前三次免费。\r\n";
                text += "\r\n\r\n#L0#进入玩具城副本#l";
                cm.sendSimple(text);
            }
        } else if (status == 1) {
            if (selection == 0) {
                // if (cm.getParty() == null) { // 没有组队
                //     cm.sendOk("请组队后和我谈话。");
                //     cm.dispose();
                // } else if (!cm.isLeader()) { // 不是队长
                //     cm.sendOk("请叫队长和我谈话。");
                //     cm.dispose();
                // } else 
                if (cm.getBossLog("玩具城") > 6) {
                    cm.sendOk("对不起，一天只能进入6次。")
                    cm.dispose();
                } else if (cm.getBossLog("玩具城") >= 3 && cm.getChar().getCSPoints(1) < GetMeny) {
                    cm.sendOk("对不起只有前三次免费,后三次需要" + GetMeny + "点券一次!")
                    cm.dispose();
                } else {
                    cm.sendSimple("- #e#d玩具城组队挑战任务#k#n:\r\n\r\n#b进入任务需要" + GetMeny + "点劵一次,前三次免费,请问是否继续?。\r\n\r\n#L0#[执行]挑战任务#l\r\n")
                }
            } //selection
        } else if (status == 2) {
            // var party = cm.getParty().getMembers();
            // var mapId = cm.getPlayer().getMapId();
            var next = true;
            // var levelValid = 0;
            // var inMap = 0;
            // var it = party.iterator();
            // var message="";
            // while (it.hasNext()) {
            //     var cPlayer = it.next();
            //     if ((cPlayer.getLevel() >= minLevel) && (cPlayer.getLevel() <= maxLevel)) {
            //         levelValid += 1;                    
            //     } else {
            //         message="队员中有不符等级要求的队员!";
            //         next = false;
            //     }
            //     if (cPlayer.getMapid() == mapId) {
            //         inMap += 1;
            //}
            // if (cPlayer.getBossLog("玩具城") >= 3 && cPlayer.getChar().getCSPoints(1) < GetMeny) { //检查点劵
            //     next = false;
            // } else if (cPlayer.getBossLog("玩具城") >= 6) {
            //      next = false;
            //     }
            // }
            // if (party.size() < minPartySize || party.size() > maxPartySize || inMap < minPartySize) {
            //     next = false;
            //     message="请组更多的队员在来!";
            // }
            if ((cm.getLevel() < minLevel) || (cm.getLevel() > maxLevel)) {
                message = "你的等级不符合要求!";
                next = false;
            }
            if (next) {
                var em = cm.getEventManager("LudiPQ");
                cm.worldMessage("[组队任务] " + cm.getChar().getName() + " 带领他的队伍进入了玩具城组队挑战任务。大家一起祝福他们吧！");
                if (em == null) {
                    cm.sendOk("此任务正在建设当中。");
                } else {
                    var prop = em.getProperty("state");
                    if (prop == "0" || prop == null) {
                        // -----------每个队员单独扣点劵
                        // it = party.iterator();
                        // while (it.hasNext()) {
                        // var cPlayer = it.next();
                        if (cm.getBossLog("玩具城") > 3) {
                            cm.getChar().modifyCSPoints(1, -GetMeny);
                        }
                        // }
                        //em.startInstance(cm.getParty(), cm.getMap());
                        //cm.removeAll(4001022);
                        //cm.removeAll(4001023);
                        cm.warp(922010000, 0);
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("请等待其他队伍出来.或可以换频道进入！");
                    }
                }
                cm.dispose();
            } else {
                cm.sendOk(message);
                //cm.sendOk("请确认你的组队员：\r\n\r\n#b1、组队员必须要" + minPartySize + "人以上，" + maxPartySize + "人以下。\r\n2、组队员等级必须要在" + minLevel + "级以上。\r\n3、一个账号每天只能进入6次,每次消耗" + GetMeny + "点劵,前三次免费。\r\n（#r如果仍然错误, 重新下线,再登陆 或者请重新组队。#k#b）");
                cm.dispose();
            }
        } //status
    } //mode
    //f
}
