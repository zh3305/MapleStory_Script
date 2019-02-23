function action(mode, type, selection) {
    if (cm.getPlayer().getMapId() == 920011200) { //exit
        for (var i = 4001044; i < 4001064; i++) {
            cm.removeAll(i); //holy
        }
        cm.warp(933030000);
        cm.dispose();
        return;
    }
    var em = cm.getEventManager("OrbisPQ");
    if (em == null) {
        cm.sendOk("请稍后再试.");
        cm.dispose();
        return;
    }
    if (!cm.isLeader()) {
        cm.sendOk("请让队长跟我对话!");
        cm.dispose();
        return;
    }
    if (em.getProperty("pre").equals("0")) {
        for (var i = 4001044; i < 4001064; i++) {
            cm.removeAll(i); //holy
        }
        cm.sendNext("请救救我, 我被精灵爸爸封印在可怕的塔里! 他把所有的女神像都弄错了,现在我们必须把女神像复原.我是这里的帮佣易克. 我是雅典娜女神的皇家仆人。 请帮助我收集#e#r20#n#k云片.");
        cm.dispose();
        return;
    }
    switch (cm.getPlayer().getMapId()) {
        case 920010000:
            cm.warpParty(920010000, 2);
            break;
        case 920010100:
            if (em.getProperty("stage").equals("4")) {
                if (em.getProperty("finished").equals("0")) {
                    cm.warpParty(920010800); //GARDEN.	
                } else {
                    cm.sendOk("谢谢你救了雅典娜女神! 请和她对话!");
                }
            } else {
                cm.sendOk("请救救雅典娜女神!收集4块碎片,并带回来复原女神像.!");
            }
            break;
        case 920010200: //walkway
            if (!cm.haveItem(4001050, 30)) {
                cm.sendOk("在这个阶段需要从怪物身上收集到30快小碎片,然后带回来给我,我将把它们修复好!");
            } else {
                cm.removeAll(4001050);
                cm.gainItem(4001048, 1); //first piece
                cm.givePartyExp(3500);
                clear();
            }
            break;
        case 920010300: //storage
            if (!cm.haveItem(4001051, 15)) {
                cm.sendOk("消灭怪物收集碎片并交给我,我将把它们修复好");
            } else {
                cm.removeAll(4001051);
                cm.gainItem(4001045, 1); //second piece
                cm.givePartyExp(3500);
                clear();
            }
            break;
        case 920010400: //lobby
            if (em.getProperty("stage3").equals("0")) {
                cm.sendOk("请找到今天所属的LP唱片,并放到女神留声机那边播放\r\n#v4001056#星期天\r\n#v4001057#星期一\r\n#v4001058#星期二\r\n#v4001059#星期三\r\n#v4001060#星期四\r\n#v4001061#星期五\r\n#v4001062#星期六\r\n");
            } else if (em.getProperty("stage3").equals("1")) {
                if (cm.canHold(4001046, 1)) {
                    cm.gainItem(4001046, 1); //third piece
                    cm.givePartyExp(3500);
                    clear();
                    em.setProperty("stage3", "2");
                } else {
                    cm.sendOk("请确认你有足够的空间!");
                }
            } else {
                cm.sendOk("非常感谢你!");
            }
            break;
        case 920010500: //sealed
            if (em.getProperty("stage4").equals("0")) {
                var players = Array();
                var total = 0;
                for (var i = 0; i < 3; i++) {
                    var z = cm.getMap().getNumPlayersItemsInArea(i);
                    players.push(z);
                    total += z;
                }
                if (total != 3) {
                    cm.sendOk("这里需要3个玩家或道具放在平台上面....");
                } else {
                    var num_correct = 0;
                    for (var i = 0; i < 3; i++) {
                        if (em.getProperty("stage4_" + i).equals("" + players[i])) {
                            num_correct++;
                        }
                    }
                    if (num_correct == 3) {
                        if (cm.canHold(4001047, 1)) {
                            clear();
                            cm.gainItem(4001049, 1); //fourth
                            cm.givePartyExp(3500);
                            em.setProperty("stage4", "1");
                        } else {
                            cm.sendOk("请确认你有足够的空间!");
                        }
                    } else {
                        cm.showEffect(true, "quest/party/wrong_kor");
                        cm.playSound(true, "Party1/Failed");
                        if (num_correct > 0) {
                            cm.sendOk("有一个是正确的.");
                        } else {
                            cm.sendOk("全部都错了 - -||.");
                        }
                    }
                }
            } else {
                cm.sendOk("传送口已经开启,快点进入下一个阶段把!");
            }
            cm.dispose();
            break;
        case 920010600: //lounge
            if (!cm.haveItem(4001052, 30)) {
                cm.sendOk("收集30块碎片并交给我,我就能把他们合并在一起.");
            } else {
                cm.removeAll(4001052);
                cm.gainItem(4001048, 1); //fifth piece
                cm.givePartyExp(3500);
                clear();
            }
            break;
        case 920010700: //on the way up
            if (em.getProperty("stage6").equals("0")) {
                var react = Array();
                var total = 0;
                for (var i = 0; i < 3; i++) {
                    if (cm.getMap().getReactorByName("" + (i + 1)).getState() > 0) {
                        react.push("1");
                        total += 1;
                    } else {
                        react.push("0");
                    }
                }
                if (total != 2) {
                    cm.sendOk("地图顶部有开关,请开启正确的2个开关.");
                } else {
                    var num_correct = 0;
                    for (var i = 0; i < 3; i++) {
                        if (em.getProperty("stage62_" + i).equals("" + react[i])) {
                            num_correct++;
                        }
                    }
                    if (num_correct == 3) {
                        if (cm.canHold(4001049, 1)) {
                            clear();
                            cm.gainItem(4001049, 1); //sixth
                            cm.givePartyExp(3500);
                            em.setProperty("stage6", "1");
                        } else {
                            cm.sendOk("请确认你有足够的背包空间!");
                        }
                    } else {
                        cm.showEffect(true, "quest/party/wrong_kor");
                        cm.playSound(true, "Party1/Failed");
                        if (num_correct >= 1) { //this should always be true
                            cm.sendOk("其中一个错了.");
                        } else {
                            cm.sendOk("全部都错了....");
                        }
                    }
                }
            } else {
                cm.sendOk("非常感谢你!!");
            }
            break;
        case 920010800:
            cm.sendNext("请找到消灭精灵爸爸的方法! 消灭食人花找到种子,并种下去,一旦你发现黑色的邪恶食人花,打败他,就会召唤出精灵爸爸,打败精灵爸爸来获得拯救雅典娜女神的生命草!!!");
            break;
        case 920010900:
            cm.sendNext("这是塔的监狱。在这里你可以找到一些好吃的东西，但除此之外我不认为这里有任何碎片。");
            break;
        case 920011000:
            cm.sendNext("这是塔楼的隐藏空间。在这里你可以找到一些好吃的东西，但除此之外我不认为这里有任何碎片。");
            break;
    }
    cm.dispose();
}

function clear() {
    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
}
