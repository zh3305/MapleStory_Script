/* 
 * @Author Lerk
 * 
 * Gatekeeper, Sharenian: Door to the Sharenian Castle (990000300)
 * 
 * Guild Quest - stage 1
 */


var status = -1;
var stage;
var gainGP = 600;//本关获得的GP

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    var eim = cm.getEventInstance();
    if (eim == null) {
        cm.warp(990001100);
    } else {

        if (eim.getProperty("leader").equals(cm.getName())) {
            if (cm.getMap().getReactorByName("statuegate").getState() > 0) {
                cm.sendOk("任务出错。");
                cm.safeDispose();
            } else {
                if (status == 0) {
                    if (eim.getProperty("stage1status") == null || eim.getProperty("stage1status").equals("waiting")) {
                        if (eim.getProperty("stage1phase") == null) {
                            stage = 1;
                            eim.setProperty("stage1phase", stage);
                        } else {
                            stage = parseInt(eim.getProperty("stage1phase"));
                        }
                        if (stage == 1) {
                            cm.sendOk("欢迎来到第一关！\r\n在这里我将会好好考验你们的观察力！看到在我身边的石像了吗？我会移动这些石像，当我发起命令的时候，请重复刚才石像移动的轨迹。");
                        } else {
                            cm.sendOk("希望接下来你也能通过我的挑战，祝你好运！")
                        }
                    } else if (eim.getProperty("stage1status").equals("active")) {
                        stage = parseInt(eim.getProperty("stage1phase"));
                        if (eim.getProperty("stage1combo").equals(eim.getProperty("stage1guess"))) {
                            if (stage == 3) {
                                //cm.getMap().getReactorByName("statuegate").hitReactor(cm.getClient());
                                //cm.getMap().getReactorByName("statuegate").delayedHitReactor(cm.getClient(), 1000);
                                cm.getMap().getReactorByName("statuegate").forceHitReactor(1);
                                cm.sendOk("干得漂亮！请进入下一个地图迎接挑战吧！");
                                cm.showEffect(true, "quest/party/clear");
                                cm.playSound(true, "Party1/Clear");
                                var prev = eim.setProperty("stage1clear", "true", true);
                                if (prev == null) {
                                    cm.gainGP(gainGP);
                                }
                            } else {
                                cm.sendOk("非常好！但是你还得完成接下来的阶段。 \r\n如果你准备好的话，请再跟我谈话。");
                                eim.setProperty("stage1phase", stage + 1);
                                cm.mapMessage("你已经通过门神的第 " + stage + "阶考验。");
                            }
                        } else {
                            cm.sendOk("错误的答案！请重新和我对话继续接受我的测试。");
                            cm.mapMessage("没有通过门神的考验。");
                            eim.setProperty("stage1phase", "1")
                        }
                        eim.setProperty("stage1status", "waiting");
                        cm.safeDispose();
                    } else {
                        cm.sendOk("石像正在移动中，请仔细查看。");
                        cm.safeDispose();
                    }
                } else if (status == 1) {
                    var reactors = getReactors();
                    var combo = makeCombo(reactors);
                    var reactorString = "Debug: Reactors in map: ";
                    for (var i = 0; i < reactors.length; i++) {
                        reactorString += reactors[i] + " ";
                    }
                    //cm.sendOk(reactorString);
                    //cm.sendOk("石像开始移动了，请看好。")
                    reactorString = "Debug: Reactors in combo: ";
                    for (var i = 0; i < combo.length; i++) {
                        reactorString += combo[i] + " ";
                    }
                    //cm.sendOk(reactorString);
                    cm.mapMessage("石像移动中，请准备好。");
                    var delay = 5000;
                    for (var i = 0; i < combo.length; i++) {
                        cm.getMap().getReactorByOid(combo[i]).delayedHitReactor(cm.getClient(), delay + 3500 * i);
                    }
                    eim.setProperty("stage1status", "display");
                    eim.setProperty("stage1combo", "");
                    cm.dispose();
                }
            }
        } else {
            cm.sendOk("请让你的队长跟我讲话。");
            cm.safeDispose();
        }
    }
}

function getReactors() {
    var reactors = new Array();
    var iter = cm.getPlayer().getMap().getAllReactorsThreadsafe().iterator();
    while (iter.hasNext()) {
        var mo = iter.next();
        if (!mo.getName().equals("statuegate")) {
            reactors.push(mo.getObjectId());
        }
    }
    return reactors;
}

function makeCombo(reactors) {
    var combo = new Array();
    while (combo.length < (stage + 3)) {
        var chosenReactor = reactors[Math.floor(Math.random() * reactors.length)];
        //cm.log("Debug: Chosen Reactor " + chosenReactor)
        var repeat = false;
        if (combo.length > 0) {
            for (var i = 0; i < combo.length; i++) {
                if (combo[i] == chosenReactor) {
                    repeat = true;
                    //cm.log("Debug: repeat reactor: " + chosenReactor);
                    break;
                }
            }
        }
        if (!repeat) {
            //cm.log("Debug: unique reactor: " + chosenReactor);
            combo.push(chosenReactor);
        }
    }
    return combo;
}