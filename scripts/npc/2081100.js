
/*  NPC : Harmonia
	Warrior 4th job advancement
	Forest of the priest (240010501)
*/


var status = -1;

var newjob;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
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
       
       newjob = cm.getJob() + 1;


        if (! (cm.getJob() == 111 || cm.getJob() == 121 || cm.getJob() == 131 || cm.getJob() == 2111)) {

            cm.sendOk("#r" + cm.getVipname() + " #b你已经完成了第四次转职！\r\n#k你来找我是有什么疑问么？\r\n#rMaplewing  永恒的羽翼！");
            cm.dispose();
            return;

        } else if (cm.getPlayerStat("LVL") < 120) {

            cm.sendOk("#r" + cm.getVipname() + " #b你还未达到120级，无法进行第四次转职！\r\n#d请达到120级以后再来找我！");
            cm.dispose();
            return;

        } else {


           cm.sendSimple("#r" + cm.getVipname() + " #k你想要再进一步提升么?\r\n#b#L0#我要成为一名#r " + cm.getJobNameById(newjob) + ".#l\r\n#b#L1#让我再考虑一下.#l");

        }


    } else if (status == 1) {
        if (selection == 1) {
            cm.sendOk("#r" + cm.getVipname() + " #k如果你准备好了,我会让你进行第四次转职！.");
            cm.dispose();
            return;
        }
        if (cm.getPlayerStat("RSP") > cm.getPlayerStat("LVL") * 3) { //玩家还有太多的SP
            if (cm.getPlayer().getAllSkillLevels() > ((cm.getPlayerStat("LVL") - 9) * 3)) { //玩家还有太多的Sp
                cm.sendOk("#r" + cm.getVipname() + "  #k你还有未使用完的 SP ，请使用完后再来找我！.#n");
                cm.getPlayer().resetSP((cm.getPlayerStat("LVL") - 120) * 3);
            } else {
                cm.sendOk("#r" + cm.getVipname() + "  #k嗯……你还有#b SP #k未使用！请使用完后再来找我.");
            }
            cm.dispose();
            return;
        } else {
          cm.changeJob(newjob);
          cm.sendOk("#r" + cm.getVipname() + "  #k 恭喜你已经完成了  #d第四次转职 #k ！\r\n你现在已经是一名 " + cm.getJobNameById(newjob) + "\r\n#b加油吧！ #r<时间女神>伦娜#b  在等待着你！\r\n\r\n#e#d永恒的羽翼------枫翼重修"); 
          cm.dispose();

}

}

}























/*  NPC : Harmonia
	Warrior 4th job advancement
	Forest of the priest (240010501)
*/




/*




var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
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
        if (! (cm.getJob() == 111 || cm.getJob() == 121 || cm.getJob() == 131 || cm.getJob() == 2111)) {
            cm.sendOk("#r" + cm.getVipname() + " #b你已经完成了第四次转职！\r\n#k你来找我是有什么疑问么？\r\n#rMaplewing  永恒的羽翼！");
            cm.dispose();
            return;
        } else if (cm.getPlayerStat("LVL") < 120) {
            cm.sendOk("#r" + cm.getVipname() + " #b你还未达到120级，无法进行第四次转职！\r\n#d请达到120级以后再来找我！");
            cm.dispose();
            return;
        } else {
           // if (cm.getQuestStatus(6904) == 2 || cm.getJob() == 2111) {
                if (cm.getJob() == 111) {
                    cm.sendSimple("#r" + cm.getVipname() + " #k你是想要成为一名更强大的战士么？ \r\n你想要再进一步提升么?\r\n#b#L0#我要成为一名 英雄.#l\r\n#b#L1#让我再考虑一下.#l");
               } else if (cm.getJob() == 121) {
                    cm.sendSimple("#r" + cm.getVipname() + " #k你是想要成为一名更强大的战士么？ \r\n你想要再进一步提升么?\r\n#b#L0#我要成为一名  光之圣骑士.#l\r\n#b#L1#让我再考虑一下.#l");
                } else if (cm.getJob() == 131) {
                     cm.sendSimple("#r" + cm.getVipname() + " #k你是想要成为一名更强大的战士么？ \r\n你想要再进一步提升么?\r\n#b#L0#我要成为一名 黑骑士.#l\r\n#b#L1#让我再考虑一下.#l");
               } else {
                    if (cm.haveItem(4031348)) {
                        cm.sendSimple("#r" + cm.getVipname() + " #k你是想要成为一名更强大的战士么？ \r\n你想要再进一步提升么?\r\n#b#L0#我要成为一名 更强大的 战神.#l\r\n#b#L1#让我再考虑一下.#l");
                    } else {
                        cm.sendNext("你需要带来一张1000万金币的 #i4031348:##t4031348# ！.");
                        cm.dispose();
                        return;
                    }
                }
              }


            } else {
                cm.sendOk("#r" + cm.getVipname() + " #k你还有未分配的SP！\r\n#r不能进行第四次转职！.SP1111111");
                cm.dispose();
                return;
            }
      //  }



    } else if (status == 1) {
        if (selection == 1) {
            cm.sendOk("#r" + cm.getVipname() + " #k如果你准备好了,我会让你进行第四次转职！.");
            cm.dispose();
            return;
        }
        if (cm.getPlayerStat("RSP") > cm.getPlayerStat("LVL") * 3) { //玩家还有太多的SP
            if (cm.getPlayer().getAllSkillLevels() > ((cm.getPlayerStat("LVL") - 9) * 3)) { //玩家还有太多的Sp
                cm.sendOk("#r" + cm.getVipname() + "  #k你还有未使用完的 SP ，请使用完后再来找我！.#n");
                cm.getPlayer().resetSP((cm.getPlayerStat("LVL") - 120) * 3);
            } else {
                cm.sendOk("#r" + cm.getVipname() + "  #k嗯……你还有#b SP #k未使用！请使用完后再来找我.");
            }
            cm.dispose();
            return;
        } else {
            if (cm.getJob() == 111) {
                cm.changeJob(112);
                cm.sendNext("#r" + cm.getVipname() + "  #k 恭喜你已经完成了  第四次转职  ！\r\n你现在已经是一名 #b英雄#k.\r\n你将学会 #b突进#k  #b稳如泰山#k 和 #b阿基里斯#k这3个技能！");
            } else if (cm.getJob() == 121) {
                cm.changeJob(122);
                cm.sendNext("#r" + cm.getVipname() + "  #k 恭喜你已经完成了  第四次转职  ！\r\n你现在已经是一名 #b骑士#k.\r\n你将学会 #b突进#k  #b稳如泰山#k 和 #b阿基里斯#k这3个技能！");
            } else if (cm.getJob() == 131) {
                cm.changeJob(132);
                cm.sendNext("#r" + cm.getVipname() + "  #k 恭喜你已经完成了  第四次转职  ！\r\n你现在已经是一名 #b黑骑士#k.\r\n你将学会 #b突进#k  #b稳如泰山#k 和 #b阿基里斯#k  这3个技能！.");
            } else {
                cm.gainItem(4031348, -1);
                cm.changeJob(2112);
                if (cm.canHold(1142132, 1)) {
                    cm.forceCompleteQuest(29927);
                    cm.gainItem(1142132, 1); //temp fix
                }
                cm.sendNext("#r" + cm.getVipname() + "  #k 恭喜你已经完成了  第四次转职  ！\r\n你现在已经是一名 #b战神#k.\r\n你将学会 #b突进#k  #b稳如泰山#k 和 #b阿基里斯#k  这3个技能！");
            }
        }
    } else if (status == 2) {
        cm.sendNextPrev("#r" + cm.getVipname() + "  #k 别忘了,这今后的一切都取决于你！.");
        cm.dispose();
    }
}










*/