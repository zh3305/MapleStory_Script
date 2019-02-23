/* Dances with Balrog
	Warrior Job Advancement
	Victoria Road : Warriors' Sanctuary (102000003)

	Custom Quest 100003, 100005
*/


var status = 0;

var jobs = 100;
var newjob;
var job1 = 0;
var job2 = 0;
var job3 = 0;
var texts = " ";
var item0 = 4005000;

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
            cm.resetStats(35, 4, 4, 4);
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
         cm.sendSimple(texts + "#r" + cm.getVipname() + " #d  请选择你想要转的职业：#b\r\n#L" + job1 +"#" + cm.getJobNameById(job1) + "#l\r\n#L" + job2 +"#" + cm.getJobNameById(job2) + "#l\r\n#L" + job3 +"#" + cm.getJobNameById(job3) + "#l#k");

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
        cm.sendOk("下定决心后,再来找我.");
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
                cm.sendNext("你决定要成为一名 #r战士#k ?");
            } else {
                cm.sendOk("如果你还是一名新手,我可以帮助你成为一名 #r战士#k.");
                cm.dispose();
            }
        } else {
            if (cm.getPlayerStat("LVL") >= 30 && cm.getJob() == 100) { // WARROPR
                if (cm.getQuestStatus(100003) >= 1) {
                    cm.completeQuest(100005);
                    if (cm.getQuestStatus(100005) == 2) {
                        status = 20;
                        cm.sendNext("现在你已经达到了30级。\r\n你可以进行#r第二次转职#k了.");
                    } else {
                        if (!cm.haveItem(4031008)) {
                            cm.gainItem(4031008, 1);
                        }
	    cm.completeQuest(100004);
	    cm.startQuest(100005);
                       // status = 20;
                        cm.sendOk("去找到 #rJob Instructor#k.")
                        cm.dispose();
                    }
                } else {
                    status = 10;
                    cm.sendNext("#r"+ cm.getVipname() + " #b你现在已经达到了30级！#k\r\n可以进行 #r第二次转职#k 了! 你准备好没？");
                }
            } else if (cm.getQuestStatus(100100) == 1) {
                cm.completeQuest(100101);
                if (cm.getQuestStatus(100101) == 2) {
                    cm.sendOk("好了,现在用这个来 #bTylus#k.");
                } else {
                    cm.sendOk("Hey, #b#h0##k! I need a #bBlack Charm#k. 去找门的尺寸.");
                    cm.startQuest(100101);
                }
                cm.dispose();
            } else {
                cm.sendOk("你的选择很正确.");
                cm.dispose();
            }
        }
    } else if (status == 1) {
        cm.sendNextPrev("这是一个很重要的选择。选择了成为一名 #r战士#k 后，你将不能再选择其他的职业！请慎重考虑！");
    } else if (status == 2) {
        cm.sendYesNo("你想要成为一名 #r战士#k 么?");
    } else if (status == 3) {
        if (cm.getJob() == 0) {
            cm.resetStats(35, 4, 4, 4);
            cm.expandInventory(1, 4);
            cm.expandInventory(4, 4);
            cm.changeJob(100); // WARRIOR
        }
        cm.gainItem(1402001, 1);
        cm.sendOk("恭喜你！现在你已经是一名 #r" + cm.getJobNameById(cm.getJob()) + "#k 了，努力修炼吧！终有一天你会很强大！");
        cm.dispose();
    } else if (status == 21) {
        cm.sendNextPrev("你已经准备好成为 #r枪战士#k, #r剑客#k 或 #r准骑士#k 了么？")
    } else if (status == 22) {
        cm.askAcceptDecline("但是首先我必须测试您的技能。你准备好了?");
    } else if (status == 23) {
      //  cm.gainItem(4031008, 1);
       // cm.startQuest(100003);
        cm.sendOk("去找到 #bJob Instructor#k 在 Perion. 他将给你带路.");
        cm.dispose();
    } else if (status == 11) {
        cm.sendSimple("你想要转职为什么职业?#b\r\n#L0#剑客#l\r\n#L1#准骑士#l\r\n#L2#枪战士#l#k");
    } else if (status == 12) {
        var jobName;
        if (selection == 0) {
            jobName = "剑客";
            job = 110; // FIGHTER
        } else if (selection == 1) {
            jobName = "准骑士";
            job = 120; // PAGE
        } else {
            jobName = "枪战士";
            job = 130; // SPEARMAN
        }
        cm.sendYesNo("你想要成为一名 #r" + jobName + "#k?");
    } else if (status == 13) {
        cm.changeJob(job);
       // cm.gainItem(4031012, -1);
        cm.sendOk("恭喜你！现在你已经是一名 #r" + cm.getJobNameById(cm.getJob()) + "#k 了，努力修炼吧！终有一天你会很强大！");
        cm.dispose();
    }
}








*/