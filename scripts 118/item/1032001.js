/* Grendel the Really Old
	Magician Job Advancement
	Victoria Road : Magic Library (101000003)

	Custom Quest 100006, 100008, 100100, 100101
*/




var status = 0;

var jobs = 200;
var newjob;
var job1;
var job2;
var job3;

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

        if (cm.getJob() == 0) {
            if (cm.getPlayerStat("LVL") >= 10 && cm.getJob() == 0) {
                cm.sendNext("#r" + cm.getVipname() + " #b  你决定要成为一名  #r" + cm.getJobNameById(jobs) + "#k ?");
            } else {
                cm.sendOk("#r" + cm.getVipname() + " #b  如果你还是一名 #r新手#k !\r\n#k我可以帮助你成为一名  #r" + cm.getJobNameById(jobs) + ".");
                cm.dispose();
            }
        } else {
            if (cm.getPlayerStat("LVL") >= 30 && cm.getJob() == jobs) { 

                        cm.sendNext("#r" + cm.getVipname() + " #k 恭喜你达到了 #r30级#k。\r\n现在你可以进行  #r第二次转职#k  了.");
                        status = 20;
            } else {
              cm.sendOk("#r" + cm.getVipname() + " #b  你的选择是明智的！");
              cm.dispose();
                  }
                }


    } else if (status == 1) {
        cm.sendYesNo("选择了成为一名  #r" + cm.getJobNameById(jobs) + " #k 后，你将不能再选择其他的职业！请慎重考虑！\r\n#b你是否准备好成为一名 #r" + cm.getJobNameById(jobs) + " #b ？");

    } else if (status == 2) {
        if (cm.getJob() == 0) {
            cm.resetStats(35, 4, 4, 4);
            cm.expandInventory(1, 4);
            cm.expandInventory(4, 4);
            cm.changeJob(jobs);
        }

        cm.sendOk("恭喜你！现在你已经是一名 #r" + cm.getJobNameById(cm.getJob()) + "#k 了，努力修炼吧！终有一天你会很强大！\r\n第二次转职是在 #r30级 #k后！\r\n#r那时你再来找我吧");
        cm.dispose();
    } else if (status == 21) {
         job1 = jobs + 10;
         job2 = jobs + 20;
         job3 = jobs + 30;
         cm.sendSimple("#r" + cm.getVipname() + " #d  请选择你想要转的职业：#b\r\n#L" + job1 +"#" + cm.getJobNameById(job1) + "#l\r\n#L" + job2 +"#" + cm.getJobNameById(job2) + "#l\r\n#L" + job3 +"#" + cm.getJobNameById(job3) + "#l#k");

    } else if (status == 22) {

        jobs = selection;
        cm.sendYesNo("你是否要选择了成为一名  #r" + cm.getJobNameById(jobs) + " #k ？\r\n#r选择后将无法更改，请慎重考虑！");
    } else if (status == 23) {
        cm.changeJob(jobs);
        cm.sendOk("恭喜你！现在你已经是一名 #r" + cm.getJobNameById(cm.getJob()) + "#k 了，努力修炼吧！终有一天你会很强大！\r\n第三次转职是在 #r70级 #k后！\r\n#r那时到冰峰雪域 的 长老公馆 去找到相应的长老吧！");
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
            if (cm.getPlayerStat("LVL") >= 8) {
                cm.sendNext("#r" + cm.getVipname() + " #d你想要成为一名 #r魔法师#k  么?");
            } else {
                cm.sendOk("#r" + cm.getVipname() + " #d 你的智慧将指引你成为一名 #r魔法师#k  ！\r\n当你达到8级以后再来找我吧！.")
                cm.dispose();
            }
        } else {
            if (cm.getPlayerStat("LVL") >= 30 && cm.getJob() == 200) { // MAGICIAN
                cm.sendNext("#r" + cm.getVipname() + " #k 你现在已经达到了 #r30级#k 以上!\r\n#b可以进行第二次转职了！\r\n#d如果你准备好了请继续！");
                status = 20;
               } else {
                    cm.sendOk("#r" + cm.getVipname() + " #k 你现在已经完成了 第二次转职！\r\n#r第三次转职是在 70级 后！\r\n#d加油吧！要是不懂就 进入  #r转职向导#d  服务 ！\r\n#b它会指引你转职！.");
                    cm.dispose();
                }
             
*/

/*
                if (cm.getQuestStatus(100006) >= 1) {
                    cm.completeQuest(100008);
                    if (cm.getQuestStatus(100008) == 2) {
                        status = 20;
                        cm.sendNext("I see you have done well. I will allow you to take the next step on your long road.");
                    } else {
                        if (!cm.haveItem(4031009)) {
                            cm.gainItem(4031009, 1);
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
                    cm.sendOk("Alright, now take this to #bRobeira#k.");
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

*/


/*

       }


    } else if (status == 1) {
        cm.sendYesNo("#r" + cm.getVipname() + " #d 这是一个很重要的决定！\r\n#b当你选择了魔法师这个职业后将无法在选择其他职业！\r\n#r你还要继续么？");
 //   } else if (status == 2) {
 //       cm.sendYesNo("Do you want to become a #rMagician#k?");
    } else if (status == 2) {
        if (cm.getJob() == 0) {
            cm.resetStats(4, 4, 20, 4);
            cm.expandInventory(1, 4);
            cm.expandInventory(4, 4);
            cm.changeJob(200); // MAGICIAN
        }
        cm.gainItem(1372005, 1);
        cm.sendOk("恭喜你现在已经成为了一名 #r魔法师#k ！\r\n#b加油吧！你的路还很长很长！.");
        cm.dispose();
    } else if (status == 11) {
        cm.sendNextPrev("You may be ready to take the next step as a #rFire/Poison Wizard#k, #rIce/Lightning Wizard#k or #rCleric#k.");
    } else if (status == 12) {
        cm.askAcceptDecline("But first I must test your skills. Are you ready?");
    } else if (status == 13) {
        cm.startQuest(100006);
        cm.gainItem(4031009, 1);
        cm.sendOk("Go see the #bJob Instructor#k near Ellinia. He will show you the way.");
        cm.dispose();
    } else if (status == 21) {
        cm.sendSimple("#r" + cm.getVipname() + " #d 你想要选择那一个职业呢？#b\r\n#L0#法师（火，毒）#l\r\n#L1#法师（冰，雷）#l\r\n#L2#牧师#k");
    } else if (status == 22) {
        var jobName;
        if (selection == 0) {
            jobName = "Fire/Poison Wizard";
            job = 210; // FP
        } else if (selection == 1) {
            jobName = "Ice/Lightning Wizard";
            job = 220; // IL
        } else {
            jobName = "Cleric";
            job = 230; // CLERIC
        }
        cm.sendYesNo("你是否要成为一名  #r" + cm.getJobNameById(job) + "#k ?");
    } else if (status == 23) {
        cm.changeJob(job);
      //  cm.gainItem(4031012, -1);
        cm.sendOk("你现在已经是一名  #r" + cm.getJobNameById(job) + "#k了！  #b\r\n加油吧！你的路还很长！");
        cm.dispose();
    }
}






*/