/* Dark Lord
	Thief Job Advancement
	Victoria Road : Thieves' Hideout (103000003)

	Custom Quest 100009, 100011
*/

var status = 0;
var job;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 2) {
        cm.sendOk("You know there is no other choice...");
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        if (cm.getJob() >= 400 && cm.getJob() <= 434 && cm.getQuestStatus(2351) == 1) {
            cm.forceCompleteQuest(2351);
            cm.gainItem(1032076, 1); //owl earring
        }
        if (cm.getJob() == 0) {
            if (cm.getPlayerStat("LVL") >= 10 && cm.getJob() == 0) {
                cm.sendNext("你想当飞侠吗？但要符合条件…不是谁都能参加我们的组织。应该是#b等级10以上#k的人。看一下吧。");
            } else {
                cm.sendOk("嗯？你还是小孩子吧？你还太小，不能跟我们一起欣赏这世界的乐趣。再去锻炼锻炼吧。")
                cm.dispose();
            }
        } else {
            if (cm.getPlayerStat("LVL") >= 30 && cm.getJob() == 400 && cm.getPlayer().getSubcategory() == 0) {
                if (cm.getQuestStatus(100009) >= 1) {
                    cm.completeQuest(100011);
                    if (cm.getQuestStatus(100011) == 2) {
                        status = 20;
                        cm.sendNext("I see you have done well. I will allow you to take the next step on your long road.");
                    } else {
                        if (!cm.haveItem(4031011)) {
                            cm.gainItem(4031011, 1);
                        }
                        cm.sendOk("Go and see the #rJob Instructor#k.")
                        cm.dispose();
                    }
                } else {
                    status = 10;
                    cm.sendNext("The progress you have made is astonishing.");
                }
            } else if (cm.getQuestStatus(100100) == 1) {
                cm.completeQuest(100101);
                if (cm.getQuestStatus(100101) == 2) {
                    cm.sendOk("Alright, now take this to #bArec#k.");
                } else {
                    cm.sendOk("Hey, #b#h0##k! I need a #bBlack Charm#k. Go and find the Door of Dimension.");
                    cm.startQuest(100101);
                }
                cm.dispose();
            } else {
                cm.sendOk("You have chosen wisely.");
                cm.dispose();
            }
        }
    } else if (status == 1) {
        cm.sendNextPrev("It is an important and final choice. You will not be able to turn back.");
    } else if (status == 2) {
        cm.sendYesNo("Do you want to become a #rThief#k?");
    } else if (status == 3) {
        if (cm.getJob() == 0) {
            cm.resetStats(4, 25, 4, 4);
            cm.expandInventory(1, 4);
            cm.expandInventory(4, 4);
            cm.changeJob(400); // THIEF
            if (cm.getQuestStatus(2351) == 1) {
                cm.forceCompleteQuest(2351);
                cm.gainItem(1032076, 1); //owl earring
            }
        }
        cm.gainItem(1332063, 1);
        cm.gainItem(1472000, 1);
        cm.gainItem(2070015, 500);
        cm.sendOk("So be it! Now go, and go with pride.");
        cm.dispose();
    } else if (status == 11) {
        cm.sendNextPrev("You may be ready to take the next step as a #rAssassin#k or #rBandit#k.");
    } else if (status == 12) {
        cm.askAcceptDecline("But first I must test your skills. Are you ready?");
    } else if (status == 13) {
        cm.startQuest(100009);
        cm.gainItem(4031011, 1);
        cm.sendOk("Go see the #bJob Instructor#k somewhere in the city. He will show you the way.");
        cm.dispose();
    } else if (status == 21) {
        cm.sendSimple("What do you want to become?#b\r\n#L0#Assassin#l\r\n#L1#Bandit#l#k");
    } else if (status == 22) {
        var jobName;
        if (selection == 0) {
            jobName = "Assassin";
            job = 410; // ASSASIN
        } else {
            jobName = "Bandit";
            job = 420; // BANDIT
        }
        cm.sendYesNo("Do you want to become a #r" + jobName + "#k?");
    } else if (status == 23) {
        cm.changeJob(job);
        cm.gainItem(4031012, -1);
        cm.sendOk("So be it! Now go, my servant.");
        cm.dispose();
    }
}