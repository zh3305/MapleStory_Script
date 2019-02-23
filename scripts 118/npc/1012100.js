/* Athena Pierce
	Bowman Job Advancement
	Victoria Road : Bowman Instructional School (100000201)

	Custom Quest 100000, 100002
*/



var status = 0;

var jobs = 300;
var newjob;
var job1 = 0;
var job2 = 0;
var job3 = 0;
var texts = " ";
var item0 = 4005002;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 2) {
        cm.sendOk("#r" + cm.getVipname() + " #b下定决心,再来找我!");
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {

             texts = "#r ┈┈┈━═☆#i" + item0 + "##r   #e" + cm.getJobNameById(jobs) + "之路#n   #i" + item0 + "##r☆═━┈┈┈ \r\n\r\n";
         job1 = jobs + 10;
         job2 = jobs + 20;
         job3 = jobs + 30;

        if (cm.getJob() == 0) {
            if (cm.getPlayerStat("LVL") >= 10 && cm.getJob() == 0) {
                cm.sendNext(texts + "#r" + cm.getVipname() + " #b  你决定要成为一名  #r" + cm.getJobNameById(jobs) + "#k ?\r\n#b如果你准备好了请点击下一步！");
            } else {
                cm.sendOk("#r" + cm.getVipname() + " #b  如果你还是一名 #r新手#k !\r\n#k我可以帮助你成为一名  #r" + cm.getJobNameById(jobs) + ".");
                cm.dispose();
            }
        } else {
            if (cm.getPlayerStat("LVL") >= 30 && cm.getJob() == jobs) { 

                        cm.sendNext(texts + "#r" + cm.getVipname() + " #k 恭喜你达到了 #r30级#k。\r\n现在你可以进行  #r第二次转职#k  了.\r\n#b如果你准备好了请点击下一步！");
                        status = 20;
            } else {
              cm.sendOk("#r" + cm.getVipname() + " #b  你的选择是明智的！");
              cm.dispose();
                  }
                }


    } else if (status == 1) {
        cm.sendYesNo(texts + "选择了成为一名  #r" + cm.getJobNameById(jobs) + " #k 后，你将不能再选择其他的职业！\r\n#b请慎重考虑！\r\n#b你是否准备好成为一名 #r" + cm.getJobNameById(jobs) + " #b ？");

    } else if (status == 2) {
        if (cm.getJob() == 0) {
            if (cm.getPlayer().getReborns() == 0) {
            cm.resetStats(4, 35, 4, 4);
            }
            cm.expandInventory(1, 4);
            cm.expandInventory(4, 4);
            cm.changeJob(jobs);
        }

        cm.sendOk(texts + "恭喜你！现在你已经是一名 #r" + cm.getJobNameById(cm.getJob()) + "#k 了，努力修炼吧！终有一天你会很强大！\r\n第二次转职是在 #r30级 #k后！\r\n#r那时你再来找我吧");
        cm.dispose();
    } else if (status == 21) {
      // if (job3 < (jobs + 30)) {
      //   job1 = jobs + 10;
      //   job2 = jobs + 20;
    //     job3 = jobs + 30;
  //      }
         cm.sendSimple(texts + "#r" + cm.getVipname() + " #d  请选择你想要转的职业：#b\r\n#L" + job1 +"#" + cm.getJobNameById(job1) + "#l\r\n#L" + job2 +"#" + cm.getJobNameById(job2) + "#l#k");

    } else if (status == 22) {

        jobs = selection;
        cm.sendYesNo(texts + "你是否要选择了成为一名  #r" + cm.getJobNameById(jobs) + "  ？\r\n#r选择后将无法更改，请慎重考虑！");
    } else if (status == 23) {
        cm.changeJob(jobs);
        cm.sendOk(texts + "恭喜你！现在你已经是一名 #r" + cm.getJobNameById(cm.getJob()) + "#k 了，努力修炼吧！终有一天你会很强大！\r\n第三次转职是在 #r70级 #k后！\r\n#r那时到冰峰雪域 的 长老公馆 去找到相应的长老吧！");
        cm.dispose();


    }

}







/*

var status = 0;
var job;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 2) {
        cm.sendOk("Make up your mind and visit me again.");
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        if (cm.getJob() == 0) {
            if (cm.getPlayerStat("LVL") >= 10 && cm.getJob() == 0) {
                cm.sendNext("So you decided to become a #rBowman#k?");
            } else {
                cm.sendOk("Train a bit more and I can show you the way of the #rBowman#k.")
                cm.dispose();
            }
        } else {
            if (cm.getPlayerStat("LVL") >= 30 && cm.getJob() == 300) { // BOWMAN
                if (cm.getQuestStatus(100000) >= 1) {
                    cm.completeQuest(100002);
                    if (cm.getQuestStatus(100002) == 2) {
                        status = 20;
                        cm.sendNext("I see you have done well. I will allow you to take the next step on your long road.");
                    } else {
                        if (!cm.haveItem(4031010)) {
                            cm.gainItem(4031010, 1);
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
                    cm.sendOk("Alright, now take this to #bRene#k.");
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
        cm.sendYesNo("Do you want to become a #rBowman#k?");
    } else if (status == 3) {
        if (cm.getJob() == 0) {
            cm.resetStats(4, 25, 4, 4);
            cm.expandInventory(1, 4);
            cm.expandInventory(4, 4);
            cm.changeJob(300); // BOWMAN
        }
        cm.gainItem(1452002, 1);
        cm.gainItem(2060000, 1000);
        cm.sendOk("So be it! Now go, and go with pride.");
        cm.dispose();
    } else if (status == 11) {
        cm.sendNextPrev("You may be ready to take the next step as a #rHunter#k or #rCrossbowman#k.")
    } else if (status == 12) {
        cm.askAcceptDecline("But first I must test your skills. Are you ready?");
    } else if (status == 13) {
        cm.startQuest(100000);
        cm.gainItem(4031010, 1);
        cm.sendOk("Go see the #bJob Instructor#k near Henesys. He will show you the way.");
        cm.dispose();
    } else if (status == 21) {
        cm.sendSimple("What do you want to become?#b\r\n#L0#Hunter#l\r\n#L1#Crossbowman#l#k");
    } else if (status == 22) {
        var jobName;
        if (selection == 0) {
            jobName = "Hunter";
            job = 310; // HUNTER
        } else {
            jobName = "Crossbowman";
            job = 320; // CROSSBOWMAN
        }
        cm.sendYesNo("Do you want to become a #r" + jobName + "#k?");
    } else if (status == 23) {
        cm.changeJob(job);
        cm.gainItem(4031012, -1);
        cm.sendOk("So be it! Now go, and go with pride.");
    }
}





*/