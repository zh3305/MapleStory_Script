/*  NPC : Hellin
	Thief 4th job advancement
	Forest of the priest (240010501)
 */

var status = -1;
var sel_act = -1;

function action(mode, type, selection) {
    if (mode == 1) {
		status++;
    } else {
		status--;
    }

    if (status == 0) {
		if ((cm.getJob() == 412 || cm.getJob() == 422 || cm.getJob() == 434)) {
			cm.sendSimple("你找我有什么事情么? \r\n#b#L11# 关于自由转职#l");
		} else if (!(cm.getJob() == 411 || cm.getJob() == 421 || cm.getJob() == 431)) {
			cm.sendOk("你为什么想见我？我没有你想知道的事。");
			cm.safeDispose();
			return;
		} else if (cm.getQuestStatus(1457) == 1) {
			sel_act = 1;
			cm.sendSimple("我可以将你传送到天鹰或火焰龙所在地, 那么你想去 \r\n#b#L0# 火焰龙森林#l\r\n#b#L1# 天鹰森林#l");
		} else if (cm.getQuestStatus(6934) == 2 || cm.getJob() == 433) {
			sel_act = 2;
			if (cm.getJob() == 411)
				cm.sendSimple("You're qualified to be a true thief. \r\nDo you want job advancement?\r\n#b#L0# I want to advance to Night Lord.#l\r\n#b#L1#  Let me think for a while.#l");
			else if (cm.getJob() == 421)
				cm.sendSimple("You're qualified to be a true thief. \r\nDo you want job advancement?\r\n#b#L0# I want to advance to Shadower.#l\r\n#b#L1#  Let me think for a while.#l");
			else {
				if (cm.haveItem(4031348) || cm.getQuestStatus(6934) == 2) {
					cm.sendSimple("You're qualified to be a true thief. \r\nDo you want job advancement?\r\n#b#L0# I want to advance to Dual Master.#l\r\n#b#L1#  Let me think for a while.#l");
				} else {
					cm.sendNext("You need the Secret Scroll for 10 million meso.");
					cm.dispose();
					return;
				}
				
			}
		} else {
			cm.sendOk("你还不够强大走飞侠顶尖的道路。等你变得更强壮再来找我吧。");
			cm.dispose();
			return;
		}
    } else if (status == 1 && sel_act == 1) {
		if (selection == 0) {
			if (cm.haveItem(4031343, 1)) {
				cm.sendOk("你已经有#b#t4031343##k了");
			} else {
				cm.resetMap(924000200);
				cm.warp(924000200);
			}
		} else {
			if (cm.haveItem(4031344, 1)) {
				cm.sendOk("你已经有#b#t4031344##k了");
			} else {
				cm.resetMap(924000201);
				cm.warp(924000201);
			}
		}
		cm.dispose();
    } else if (status == 1 && sel_act == 2) {
		if (selection == 1) {
			cm.sendOk("You don't have to hesitate.... Whenever you decide, talk to me. If you're ready, I'll let you make the 4th job advancement.");
			cm.safeDispose();
			return;
		}
		if (cm.getPlayerStat("RSP") > (cm.getPlayerStat("LVL") - 120) * 3) { //player have too much SP means they havent assigned to their skills
			if (cm.getPlayer().getAllSkillLevels() > cm.getPlayerStat("LVL") * 3) { //player used too much SP means they have assigned to their skills.. conflict
			cm.sendOk("It appears that you have a great number of SP yet you have used enough SP on your skills already. Your SP has been reset. #ePlease talk to me again to make the job advancement.#n");
			cm.getPlayer().resetSP((cm.getPlayerStat("LVL") - 120) * 3);
			} else {
				cm.sendOk("Hmm...You have too many #bSP#k. You can't make the 4th job advancement with too many SP left.");
			}
			cm.dispose();
			return;
		} else {
			if (cm.getJob() == 411) {
				cm.changeJob(412);
				cm.sendNext("You became the best thief #bNight Lord#k.");
			} else if (cm.getJob() == 421) {
				cm.changeJob(422);
				cm.sendNext("You became the best thief #bShadower#k.");
			} else if (cm.getJob() == 433) {
				if (cm.getQuestStatus(6934) != 2) {
					cm.gainItem(4031348, -1);
				}
				cm.changeJob(434);
				cm.sendNext("You became the best thief #bDual Master#k.");
			}
		}
    } else if (status == 1 && selection == 11){
		cm.dispose();
		cm.openNpc(2081400, "FreeTransfer");
		return;
    } else if (status == 2) {
		cm.sendNextPrev("Don't forget that it all depends on how much you train.");
    } else if (status == 3) {
		cm.dispose();
    }
}
