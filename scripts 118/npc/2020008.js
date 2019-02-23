/** 
	Tylus: Warrior 3rd job advancement
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

        if (! (cm.getJob() == 110 || cm.getJob() == 120 || cm.getJob() == 130 || cm.getJob() == 2110)) {

            cm.sendOk("#r" + cm.getVipname() + " #b你已经完成了 第三次转职 ！");
            cm.dispose();
            return;
        }


        if ((cm.getJob() == 110 || cm.getJob() == 120 || cm.getJob() == 130 || cm.getJob() == 2110) && cm.getPlayerStat("LVL") >= 70) {

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




var status = 0;
var job;

function start() {
    status = -1;
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
        if (! (cm.getJob() == 110 || cm.getJob() == 120 || cm.getJob() == 130 || cm.getJob() == 2110)) {
            if (cm.getQuestStatus(6192) == 1) {
                if (cm.getParty() != null) {
                    var ddz = cm.getEventManager("ProtectTylus");
                    if (ddz == null) {
                        cm.sendOk("Unknown error occured");
                    } else {
                        var prop = ddz.getProperty("state");
                        if (prop == null || prop.equals("0")) {
                            ddz.startInstance(cm.getParty(), cm.getMap());
                        } else {
                            cm.sendOk("已经有人在执行  保护泰勒斯  这个任务了！.");
                        }
                    }
                } else {
                    cm.sendOk("请组建好队伍 才来执行   保护泰勒斯  这个任务!");
                }
            } else if (cm.getQuestStatus(6192) == 2) {
                cm.sendOk("谢谢你保护了我！我等下会教会你一些技能！.");
                if (cm.getJob() == 112) {
                    if (cm.getPlayer().getMasterLevel(1121002) <= 0) {
                        cm.teachSkill(1121002, 0, 10);
                    }
                } else if (cm.getJob() == 122) {
                    if (cm.getPlayer().getMasterLevel(1221002) <= 0) {
                        cm.teachSkill(1221002, 0, 10);
                    }
                } else if (cm.getJob() == 132) {
                    if (cm.getPlayer().getMasterLevel(1321002) <= 0) {
                        cm.teachSkill(1321002, 0, 10);
                    }
                }
            } else {
                cm.sendOk("#r" + cm.getVipname() + " #d你已经完成了第三次转职！\r\n#b第四次转职是在 120级后\r\n#r感谢您对 MapleWing 的支持!");
            }
            cm.dispose();
            return;
        }
        if ((cm.getJob() == 110 || cm.getJob() == 120 || cm.getJob() == 130 || cm.getJob() == 2110) && cm.getPlayerStat("LVL") >= 70) {
            if (cm.getPlayerStat("RSP") > (cm.getPlayerStat("LVL") - 70) * 3) {
                if (cm.getPlayer().getAllSkillLevels() > cm.getPlayerStat("LVL") * 3) { //玩家使用了太多的SP意味着他们已经分配给他们的技能. .冲突
                    cm.sendOk("你还有未使用完的 SP ，请使用完后再来找我！");
                    cm.getPlayer().resetSP((cm.getPlayerStat("LVL") - 70) * 3);
                } else {
                    cm.sendOk("嗯……你还有#b SP #k未使用！请使用完后再来找我.");
                }
                cm.safeDispose();
            } else {
                cm.sendNext("#r" + cm.getVipname() + "  #b恭喜你达到了70级以上！\r\n#d你现在已经可以进行第三次转职了！\r\n#r如果你已经准备好请点击下一步！");
            }
        } else {
            cm.sendOk("#r" + cm.getVipname() + " #k你的等级还未达到70级以上！\r\n#r不能进行第三次转职！");
            cm.safeDispose();
        }
    } else if (status == 1) {
        if (cm.getPlayerStat("LVL") >= 70 && cm.getPlayerStat("RSP") <= (cm.getPlayerStat("LVL") - 70) * 3) {
            if (cm.getJob() == 110) { // 剑客
                cm.changeJob(111); // 勇士
                cm.sendOk("恭喜你转职成为 #b勇士#k.");
                cm.dispose();
            } else if (cm.getJob() == 120) { // 准骑士
                cm.changeJob(121); // 骑士
                cm.sendOk("恭喜你转职成为 #b骑士#k.");
                cm.dispose();
            } else if (cm.getJob() == 130) { // 枪战士
                cm.changeJob(131); // 龙骑士
                cm.sendOk("恭喜你转职成为 #b龙骑士#k");
                cm.dispose();
            } else if (cm.getJob() == 2110) { // 战神2转
                cm.changeJob(2111); // 战神
                if (cm.canHold(1142131, 1)) {
                    cm.forceCompleteQuest(29926);
                    cm.gainItem(1142131, 1); //temp fix
                }
                cm.sendOk("恭喜你转职成为 #b战神(3转)#k.");
                cm.dispose();
            }
        } else {
            cm.sendOk("当你达到70级 和 使用完 SP 后 再来找我！.");
            cm.dispose();
        }
    }
}







*/