var status = 0;

var jobs = 3500;
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

             texts = "#r ┈━═☆#i" + item0 + "##r   #e" + cm.getJobNameById(jobs) + "之路#n   #i" + item0 + "##r☆═━┈┈\r\n\r\n";


         job1 = jobs + 10;

         job2 = jobs + 11;
         job3 = jobs + 12;


        if (cm.getJob() == 3000) {
            if (cm.getPlayerStat("LVL") >= 10 && cm.getJob() == 3000) {
                cm.sendNext(texts + "#r" + cm.getVipname() + " #b  你决定要成为一名  #r" + cm.getJobNameById(jobs) + "#k ?\r\n#b如果你准备好了请点击下一步！");
            } else {
                cm.sendOk("#r" + cm.getVipname() + " #b  如果你还是一名 #r预备兵#k !\r\n#k我可以帮助你成为一名  #r" + cm.getJobNameById(jobs) + ".");
                cm.dispose();
            }

        } else {

            if (cm.getPlayerStat("LVL") >= 30 && cm.getJob() == jobs) { 

             texts = "#r ┈━═☆#i" + item0 + "##r   #e" + cm.getJobNameById(job1) + "之路#n   #i" + item0 + "##r☆═━┈┈\r\n\r\n";


                        cm.sendNext(texts + "#r" + cm.getVipname() + " #k 恭喜你达到了 #r30级#k。\r\n现在你可以进行  #r第二次转职#k  成为一名   #r" + cm.getJobNameById(job1) + " #k.\r\n#b如果你准备好了请点击下一步！");
                        status = 20;


            } else if (cm.getPlayerStat("LVL") >= 70 && cm.getJob() == job1) { 

             texts = "#r ┈━═☆#i" + item0 + "##r   #e" + cm.getJobNameById(job2) + "之路#n   #i" + item0 + "##r☆═━┈┈\r\n\r\n";

                        cm.sendNext(texts + "#r" + cm.getVipname() + " #k 恭喜你达到了 #r30级#k。\r\n现在你可以进行  #r第二次转职#k  成为一名   #r" + cm.getJobNameById(job2) + " #k.\r\n#b如果你准备好了请点击下一步！");
                        status = 24;


            } else if (cm.getPlayerStat("LVL") >= 120 && cm.getJob() == job2) { 

             texts = "#r ┈━═☆#i" + item0 + "##r   #e" + cm.getJobNameById(job3) + "之路#n   #i" + item0 + "##r☆═━┈┈\r\n\r\n";

                        cm.sendNext(texts + "#r" + cm.getVipname() + " #k 恭喜你达到了 #r30级#k。\r\n现在你可以进行  #r第二次转职#k  成为一名   #r" + cm.getJobNameById(job3) + " #k.\r\n#b如果你准备好了请点击下一步！");
                        status = 30;



            } else {
              cm.sendOk("#r" + cm.getVipname() + " #b  你的选择是明智的！");
              cm.dispose();
                  }
                }


    } else if (status == 1) {
        cm.sendYesNo(texts + "选择了成为一名  #r" + cm.getJobNameById(jobs) + " #k 后，你将不能再选择其他的职业！\r\n#b请慎重考虑！\r\n#b你是否准备好成为一名 #r" + cm.getJobNameById(jobs) + " #b ？");

    } else if (status == 2) {
        if (cm.getJob() == 3000) {

            if (cm.getPlayer().getReborns() == 0) {
            cm.resetStats(4, 4, 35, 4);

             }
            cm.expandInventory(1, 4);
            cm.expandInventory(4, 4);
            

            cm.changeJob(jobs);
        }

        cm.sendOk(texts + "恭喜你！现在你已经是一名 #r" + cm.getJobNameById(cm.getJob()) + "#k 了，努力修炼吧！终有一天你会很强大！\r\n第二次转职是在 #r30级 #k后！\r\n#r那时你再来找我吧");
        cm.dispose();


    } else if (status == 21) {


        cm.changeJob(job1);
        cm.sendOk(texts + "恭喜你！现在你已经是一名 #r" + cm.getJobNameById(cm.getJob()) + "#k 了，努力修炼吧！终有一天你会很强大！\r\n第三次转职是在 #r70级 #k后！\r\n#r那时到你再来找我吧！\r\n#r#e\r\n遥远的记忆是否能唤醒他呢？几十年前的那同伴现在又在何方？");
        cm.dispose();

    



    } else if (status == 25) {

        cm.changeJob(job2);
        cm.sendOk(texts + "恭喜你！现在你已经是一名 #r" + cm.getJobNameById(cm.getJob()) + "#k 了，努力修炼吧！终有一天你会很强大！\r\n第三次转职是在 #r120级 #k后！\r\n#r那时到你再来找我吧！\r\n#r#e\r\n遥远的记忆是否能唤醒他呢？几十年前的那同伴现在又在何方？");
        cm.dispose();

    


    } else if (status == 31) {

        cm.changeJob(job3);
        cm.sendOk(texts + "恭喜你！现在你已经是一名 #r" + cm.getJobNameById(cm.getJob()) + "#k 了，努力修炼吧！终有一天你会很强大！\r\n\r\n#d传说永恒的 #e#r<时间女神>伦娜#n#d 她在时间神殿那里等着你！200级后去找她吧！\r\n#r永恒的 #e枫翼重修#n \r\n#r#e\r\n遥远的记忆是否能唤醒他呢？几十年前的那同伴现在又在何方？");
        cm.dispose();

    }



}


/*
var status = 0;

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
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            cm.sendSimple("什么事情？\r\n\r\n#b#L0#想和你对话。#l");
        } else if (status == 1) {
            cm.sendNext("还好奇我假面里的样子吗？");
            cm.dispose();
        }
    }
}

*/