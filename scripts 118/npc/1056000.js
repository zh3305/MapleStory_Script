

var status = 0;

var jobs = 430;
var newjob;
var job1 = 0;
var job2 = 0;
var job3 = 0;
var job4 = 0;
var texts = " ";
var item0 = 4005003;
var lvs;
var newjob;

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

             texts = "#r ┈┈┈━═☆#i" + item0 + "##r  #e" + cm.getJobNameById(jobs) + "之路#n  #i" + item0 + "##r☆═━┈┈┈ \r\n\r\n";
         job1 = jobs + 1;
         job2 = jobs + 2;
         job3 = jobs + 3;
         job4 = jobs + 4;

         lvs = cm.getPlayerStat("LVL");

        if (cm.getJob() == 400) {
            if (cm.getPlayerStat("LVL") >= 20 && cm.getJob() == 400) {
                cm.sendNext(texts + "#r" + cm.getVipname() + " #b  你决定要成为一名  #r" + cm.getJobNameById(jobs) + "#k ?\r\n#b如果你准备好了请点击下一步！");
            } else {
                cm.sendOk("#r" + cm.getVipname() + " #b  如果你还是一名 #r飞侠#k !\r\n#k我可以帮助你成为一名 #r" + cm.getJobNameById(jobs) + "！#r转职成为 " + cm.getJobNameById(jobs) + " \r\n");
                cm.dispose();
            }
        } else {
            if (cm.getPlayerStat("LVL") >= 30 && cm.getJob() == jobs) { 

                        cm.sendNext(texts + "#r" + cm.getVipname() + " #k 恭喜你达到了 #r " + lvs + " 级#k。\r\n现在你可以进行 #r第二次转职#k 了！\r\n\r\n#L" + job1 + "##r转职成为 " + cm.getJobNameById(job1) + "#l \r\n\r\n");
                        status = 20;

           } else if (cm.getPlayerStat("LVL") >= 55 && cm.getJob() == job1) { 

                        cm.sendNext(texts + "#r" + cm.getVipname() + " #k 恭喜你达到了 #r " + lvs + " 级#k。\r\n现在你可以进行 #r第 2+ 次转职#k 了！\r\n\r\n#L" + job2 + "##r转职成为 " + cm.getJobNameById(job2) + "#l \r\n\r\n");
                        status = 22;


           } else if (cm.getPlayerStat("LVL") >= 70 && cm.getJob() == job2) { 

                        cm.sendNext(texts + "#r" + cm.getVipname() + " #k 恭喜你达到了 #r " + lvs + " 级#k。\r\n现在你可以进行 #r第 3 次转职#k 了！\r\n\r\n#L" + job3 + "##r转职成为 " + cm.getJobNameById(job3) + "#l \r\n\r\n");
                        status = 24;

           } else if (cm.getPlayerStat("LVL") >= 120 && cm.getJob() == job3) { 

                        cm.sendNext(texts + "#r" + cm.getVipname() + " #k 恭喜你达到了 #r " + lvs + " 级#k。\r\n现在你可以进行 #r第 4 次转职#k 了！\r\n\r\n#L" + job4 + "##r转职成为 " + cm.getJobNameById(job4) + "#l \r\n\r\n");
                        status = 26;



            } else {

              cm.sendOk("#r" + cm.getVipname() + " #b  你的选择是明智的！");
              cm.dispose();

                  }

                }





    } else if (status == 1) {
        cm.sendYesNo(texts + "选择了成为一名#r" + cm.getJobNameById(jobs) + " #k 后，你将不能再选择其他的职业！\r\n#b请慎重考虑！\r\n#b你是否准备好成为一名 #r" + cm.getJobNameById(jobs) + " #b ？");

    } else if (status == 2) {

        if (cm.getJob() == 400) {
      //      cm.resetStats(4, 4, 4, 35);
            cm.expandInventory(1, 4);
            cm.expandInventory(4, 4);
            cm.changeJob(jobs);
        }

        cm.sendOk(texts + "恭喜你！现在你已经是一名 #r" + cm.getJobNameById(cm.getJob()) + "#k 了，努力修炼吧！终有一天你会很强大！\r\n第二次转职是在 #r30级 #k后！\r\n#r那时你再来找我吧");
        cm.dispose();

    } else if (status == 21) {

/*
      // if (job3 < (jobs + 30)) {
      //   job1 = jobs + 10;
      //   job2 = jobs + 20;
    //     job3 = jobs + 30;
  //      }

         cm.sendSimple(texts + "#r" + cm.getVipname() + " #d  请选择你想要转的职业：#b\r\n#L" + job1 +"#" + cm.getJobNameById(job1) + "#l\r\n");

    } else if (status == 22) {

*/

        newjob = selection;
        cm.sendYesNo(texts + "你是否要选择了成为一名  #r" + cm.getJobNameById(jobs) + "  ？\r\n#r选择后将无法更改，请慎重考虑！");

    } else if (status == 22) {

        cm.changeJob(newjob);

        cm.sendOk(texts + "恭喜你！现在你已经是一名 #r" + cm.getJobNameById(cm.getJob()) + "#k 了，努力修炼吧！终有一天你会很强大！\r\n第 2+ 次转职是在 #r50级 #k后！\r\n#r那时到你在来找我吧！");
        cm.dispose();


    } else if (status == 23) {

        newjob = selection;
        cm.sendYesNo(texts + "你是否要选择了成为一名  #r" + cm.getJobNameById(jobs) + "  ？\r\n#r选择后将无法更改，请慎重考虑！");

    } else if (status == 24) {

        cm.changeJob(newjob);

        cm.sendOk(texts + "恭喜你！现在你已经是一名 #r" + cm.getJobNameById(cm.getJob()) + "#k 了，努力修炼吧！终有一天你会很强大！\r\n第 3 次转职是在 #r70级 #k后！\r\n#r那时到你在来找我吧！");
        cm.dispose();


    } else if (status == 25) {

        newjob = selection;
        cm.sendYesNo(texts + "你是否要选择了成为一名  #r" + cm.getJobNameById(jobs) + "  ？\r\n#r选择后将无法更改，请慎重考虑！");

    } else if (status == 26) {

        cm.changeJob(newjob);

        cm.sendOk(texts + "恭喜你！现在你已经是一名 #r" + cm.getJobNameById(cm.getJob()) + "#k 了，努力修炼吧！终有一天你会很强大！\r\n第 4 次转职是在 #r120级 #k后！\r\n#r那时到你在来找我吧！");
        cm.dispose();

    } else if (status == 27) {

        newjob = selection;
        cm.sendYesNo(texts + "你是否要选择了成为一名  #r" + cm.getJobNameById(jobs) + "  ？\r\n#r选择后将无法更改，请慎重考虑！");

    } else if (status == 28) {

        cm.changeJob(newjob);

        cm.sendOk(texts + "恭喜你！现在你已经是一名 #r" + cm.getJobNameById(cm.getJob()) + "#k 了，努力修炼吧！终有一天你会很强大！\r\n#e#r<时间女神>伦娜 #n 在等着你！！");
        cm.dispose();


     }




}




