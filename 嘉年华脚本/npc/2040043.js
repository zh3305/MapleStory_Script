/*
 Blue Balloon - LudiPQ 8th stage NPC
 */

var status;
var partyLdr;
var chatState;
var party;
var preamble;

var stage8question = Array(
        "300+180+45+53 = ?",
        "90+42+15+11 = ?",
        "120+410+57-20 = ?",
        "342+256-144+35 = ?"
        );
var stage8answer = Array(
        Array(0, 0, 0, 0, 1, 0, 1, 1, 0),
        Array(1, 0, 0, 0, 1, 0, 0, 1, 0),
        Array(0, 0, 0, 0, 1, 1, 1, 0, 0),
        Array(0, 0, 0, 1, 0, 0, 0, 1, 1)
        );

function start() {
    status = -1;
    preamble = null;
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
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        boxStage(cm);
    }
}

function clear(stage, eim, cm) {
    eim.setProperty("8stageclear", "true");

    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate");
    cm.givePartyExp(5040, eim.getPlayers());
    // stage 9 does not have a door, might be cause of DC error
}

function failstage(eim, cm) {
    cm.showEffect(true, "quest/party/wrong_kor");
    cm.playSound(true, "Party1/Failed");
}

function boxStage(cm) {
    var debug = false;
    var eim = cm.getEventInstance();
    var nthtext = "eighth";
    var nthobj = "boxes";
    var nthverb = "stand";
    var nthpos = "stand too close to the edges";
    var curcombo = stage8answer;
    var currect = cm.getMap().getAreas();
    var objset = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    if (cm.isLeader()) { // leader
        if (status == 0) {
            party = eim.getPlayers();
            preamble = eim.getProperty("leader" + nthtext + "preamble");
            if (preamble == null) {
                cm.sendNext("欢迎来到5阶段，在旁边，有9个箱子。需要回答我的问题,并3个队友站在箱子上组成正确答案，再由队长来点击我，看是否正确。");
                eim.setProperty("leader" + nthtext + "preamble", "done");
                var as = Math.floor(Math.random() * stage8answer.length);
                eim.setProperty("stage" + nthtext + "combo", as);
                cm.getMap().startMapEffect(stage8question[as], 5120018);
                cm.dispose();
            } else { // otherwise, check for stage completed
                var complete = eim.getProperty("8stageclear");
                if (complete != null) {
                    var mapClear = "8stageclear";
                    eim.setProperty(mapClear, "true"); // Just to be sure
                    cm.sendNext("恭喜你们找到了正确的答案。");
                } else {
                    var totplayers = 0;
                    for (i = 0; i < objset.length; i++) {
                        var present = cm.getMap().getNumPlayersItemsInArea(i);
                        if (present != 0) {
                            objset[i] = objset[i] + 1;
                            totplayers = totplayers + 1;
                        }
                    }
                    if (totplayers == 3 || debug) {
                        var combo = curcombo[parseInt(eim.getProperty("stage" + nthtext + "combo"))];
                        var testcombo = true;
                        for (i = 0; i < objset.length; i++) {
                            if (combo[i] != objset[i]) {
                                testcombo = false;
                            }
                        }
                        if (testcombo || debug) {
                            clear(8, eim, cm);
                            if (cm.getEventInstance().getProperty("s8start") != null) {
                                var starts4Time = cm.getEventInstance().getProperty("s8start");
                                var nowTime = new Date().getTime();
                                if ((nowTime - starts4Time) < 90000)
                                    cm.getEventInstance().setProperty("s8achievement", "true"); // give via portal script.
                            }
                            cm.dispose();
                        } else {
                            failstage(eim, cm);
                            cm.getMap().startMapEffect(stage8question[parseInt(eim.getProperty("stage" + nthtext + "combo"))], 5120018);
                            cm.dispose();
                        }
                    } else {
                        if (debug) {
                            var outstring = "Objects contain:";
                            for (i = 0; i < objset.length; i++) {
                                outstring += "\r\n" + (i + 1).toString() + ". " + objset[i].toString();
                            }
                            cm.sendNext(outstring);
                            var combo = curcombo[parseInt(eim.getProperty("stage" + nthtext + "combo"))];
                        } else {
                            cm.sendNext("需要3名队员站在箱子上组成答案。只允许3名队员站在箱子上, 你们的问题是:" + stage8question[parseInt(eim.getProperty("stage" + nthtext + "combo"))]);
                            cm.dispose();
                        }
                    }
                }
            }
        } else {
            cm.dispose();
        }
    } else { // not leader
        if (status == 0) {
            var complete = eim.getProperty("8stageclear");
            if (complete != null) {
                cm.sendNext("恭喜你们顺利通关。");
                cm.dispose();
            } else {
                cm.sendNext("请你们的队长和我说话。");
                cm.dispose();
            }
        } else {
            var complete = eim.getProperty("8stageclear");
            if (complete != null) {
                cm.sendNext("恭喜你们顺利通关。");
                cm.dispose();
            }
            cm.dispose();
        }
    }
}
