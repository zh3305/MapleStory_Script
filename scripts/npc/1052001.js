/* Dark Lord
	Thief Job Advancement
	Victoria Road : Thieves' Hideout (103000003)

	Custom Quest 100009, 100011
*/



var status = 0;

var jobs = 400;
var job1 = 0;
var job2 = 0;
var job3 = 0;
var texts = " ";
var item0 = 4005003;

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
            cm.resetStats(4, 4, 4, 35);
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
        cm.sendOk("下定决心后,再来找我...");
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
                    cm.sendNext("#r"+ cm.getVipname() + " #b你现在已经达到了30级！#k\r\n可以进行 #r第二次转职#k 了! 你准备好没？");
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
        cm.sendNextPrev("这是一个很重要的选择。选择了成为一名 #r飞侠#k 后，你将不能再选择其他的职业！请慎重考虑！");
    } else if (status == 2) {
        cm.sendYesNo("你想要成为一名 #r飞侠#k 么?");
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
        cm.sendOk("恭喜你！现在你已经是一名 #r" + cm.getJobNameById(cm.getJob()) + "#k 了，努力修炼吧！终有一天你会很强大！");
        cm.dispose();
    } else if (status == 21) {
        cm.sendNextPrev("你已经准备好成为 #r枪战士#k 或 #r准骑士#k 了么？")
    } else if (status == 22) {
        cm.askAcceptDecline("但是首先我必须测试您的技能。你准备好了?");
    } else if (status == 23) {
      //  cm.gainItem(4031008, 1);
       // cm.startQuest(100003);
        cm.sendOk("去找到 #bJob Instructor#k 在 Perion. 他将给你带路.");
        cm.dispose();
    } else if (status == 11) {
        cm.sendSimple("你想要转职为什么职业?#b\r\n#L0#刺客#l\r\n#L1#侠客#l#k");
    } else if (status == 12) {
        var jobName;
        if (selection == 0) {
            jobName = "刺客";
            job = 410; // 刺客
        } else {
            jobName = "侠客";
            job = 420; // 侠客
        }
        cm.sendYesNo("你想要成为一名 #r" + jobName + "#k?");
    } else if (status == 13) {
        cm.changeJob(job);
        //cm.gainItem(4031012, -1);
        cm.sendOk("恭喜你！现在你已经是一名 #r" + cm.getJobNameById(cm.getJob()) + "#k 了，努力修炼吧！终有一天你会很强大！");
        cm.dispose();
    }
}






*/