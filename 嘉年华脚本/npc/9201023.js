/*
	NPC Name: 		Hera
	Map(s): 		Towns
	Description: 		Wedding Village Entrance
*/

var status = -1;

function start() {
    //cm.sendSimple("啊~今天真是个好日子！这世界太美好了~！你不觉得这世界充满了爱吗？满溢婚礼村的爱意都流淌到这里来了~！\n\r #b#L0# 到婚礼村去（豪华、甜美、简谱婚礼券）#l \n\r #L1# I am married and I want my Chair of Love!!! #l");
    cm.sendSimple("啊~今天真是个好日子！这世界太美好了~！你不觉得这世界充满了爱吗？满溢婚礼村的爱意都流淌到这里来了~！\n\r #b#L0# 到婚礼村去（豪华、甜美、简谱婚礼券）#l");
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (status == 0 && mode == 0) {
        cm.sendNext("你居然要放弃这么好的机会？那里真的很美~。你不会是还没遇到心爱的人吧？没错，如果你有心爱的人，怎么会对这么浪漫的消息听而不闻呢！！");
        cm.dispose();
        return;
    } else {
        cm.dispose();
        return;
    }

    if (status == 0) {
        switch (selection) {
            case 0:
				cm.sendYesNo("你去过婚礼村没有？那里是专门为举行简单可爱的婚礼而新建的地方~。据说在那里还能和心爱的人结婚呢。你不觉得这样太浪漫了吗？如果你想去那里，我可以送你过去。怎么样，要去一趟吗？");
                break;
            case 1:
				var marr = cm.getQuestRecord(160001);
				var data = marr.getCustomData();
				if (data == null) {
				marr.setCustomData("0");
				data = "0";
				}
				if (cm.getPlayer().getMarriageId() <= 0 || !data.equals("3")) {
							cm.sendOk("I am truly sorry my dear.  This Chair of Love is a special gift designed only for the married ones.  You might want to get married first.");
				} else if (cm.canHold(cm.isGMS() ? 3012015 : 3012000,1) && !cm.haveItem(cm.isGMS() ? 3012015 : 3012000,1)) {
					cm.gainItem(cm.isGMS() ? 3012015 : 3012000,1);
				} else {
					cm.sendOk("Please make space or you already have this chair.");
				}
				cm.dispose();
				break;
        }
    } else if (status == 1) {
        cm.sendNext("你做了很正确的决定。你就去婚礼村好好享受爱的气息吧~。回来的时候还会回到这里，你就放心的去吧~");
    } else if (status == 2) {
        cm.saveLocation("AMORIA");
        cm.warp(680000000);
        cm.dispose();
    }
}
