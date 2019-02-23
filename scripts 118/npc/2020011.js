/* Arec
	Thief 3rd job advancement
	El Nath: Chief's Residence (211000001)

	Custom Quest 100100, 100102
*/



var status = -1;
var job;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 1) {
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

        if (! (cm.getJob() == 410 || cm.getJob() == 420 || cm.getJob() == 432)) {

            cm.sendOk("#r" + cm.getVipname() + " #b你已经完成了 第三次转职 ！");
            cm.dispose();
            return;
        }


        if ((cm.getJob() == 410 || cm.getJob() == 420 || cm.getJob() == 432) && cm.getPlayerStat("LVL") >= 70) {

               if (cm.getPlayerStat("RSP") > (cm.getPlayerStat("LVL") - 70) * 3) {
                if (cm.getPlayer().getAllSkillLevels() > cm.getPlayerStat("LVL") * 3) { //玩家使用了太多的SP意味着他们已经分配给他们的技能. .冲突
                    cm.sendOk("你还有未使用完的 SP ，请使用完后再来找我！");
                    cm.getPlayer().resetSP((cm.getPlayerStat("LVL") - 70) * 3);
                } else {
                    cm.sendOk("嗯……你还有#b SP #k未使用！请使用完后再来找我.");
                }
            }


                cm.sendNext("#r" + cm.getVipname() + "  #b恭喜你达到了70级以上！\r\n#d你现在已经可以进行第三次转职了！\r\n#r如果你已经准备好请点击下一步！");
                status = 0;
            
        } else {
            cm.sendOk("#r" + cm.getVipname() + " #k你的等级还未达到70级以上！\r\n#r不能进行第三次转职！");
            cm.safeDispose();
        }

    } else if (status == 1) {
       var newjob = cm.getJob() + 1;
       cm.changeJob(newjob);
       cm.sendOk("恭喜你转职成为 #r" + cm.getJobNameById(newjob) + "#k !\r\n#b第四次转职是在 120级！加油吧！");
       cm.dispose();
}
      


}














/*

var status = -1;
var job;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 1) {
            cm.sendOk("Make up your mind and visit me again.");
            cm.safeDispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        if (! (cm.getJob() == 410 || cm.getJob() == 420 || cm.getJob() == 432)) {
            cm.sendOk("May the Gods be with you!");
            cm.safeDispose();
            return;
        }
        if ((cm.getJob() == 410 || cm.getJob() == 420 || cm.getJob() == 432) && cm.getPlayerStat("LVL") >= 70) {
            if (cm.getJob() != 432 && cm.getPlayerStat("RSP") > (cm.getPlayerStat("LVL") - 70) * 3) {
                if (cm.getPlayer().getAllSkillLevels() > cm.getPlayerStat("LVL") * 3) { //player used too much SP means they have assigned to their skills.. conflict
                    cm.sendOk("It appears that you have a great number of SP yet you have used enough SP on your skills already. Your SP has been reset. #ePlease talk to me again to make the job advancement.#n");
                    cm.getPlayer().resetSP((cm.getPlayerStat("LVL") - 70) * 3);
                } else {
                    cm.sendOk("Hmm...You have too many #bSP#k. You can't make the job advancement with too many SP left.");
                }
                cm.safeDispose();
            } else {
                cm.sendNext("You are indeed a strong one.");
            }
        } else {
            cm.sendOk("Please make sure that you are eligible for the job advancement. (level 70+)");
            cm.safeDispose();
        }
    } else if (status == 1) {
        if (cm.getPlayerStat("LVL") >= 70 && (cm.getJob() == 432 || cm.getPlayerStat("RSP") <= (cm.getPlayerStat("LVL") - 70) * 3)) {
            if (cm.getJob() == 410) { // ASSASIN
                cm.changeJob(411); // HERMIT
                cm.sendOk("You are now a #bHermit#k.");
                cm.safeDispose();
            } else if (cm.getJob() == 420) { // BANDIT
                cm.changeJob(421); // CDIT
                cm.sendOk("You are now a #bChief Bandit#.");
                cm.safeDispose();
            } else if (cm.getJob() == 432) { // 
                cm.changeJob(433); // 
                cm.sendOk("You are now a #bBlade Lord#k.");
                cm.safeDispose();
            }
        } else {
            cm.sendOk("Come back when you are level 70 and used all your SP accordingly.");
            cm.dispose();
        }
    }
}








*/