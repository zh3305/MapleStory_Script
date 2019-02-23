/**  4031344  4001035 4032226 1 4031549
 *Question...
 *author Jvlaple
 */
var status = 0;
var otherChar;
var Char;

importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server);
 
function start(character3) {
	status = -1;
	action(1, 0, 0);
	otherChar = character3;
}

function action(mode, type, selection) {
	if (mode == -1) {
		otherChar.getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.serverNotice(1, "你的伴侣拒绝您的请求."));
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			otherChar.getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.serverNotice(1, "你的伴侣拒绝您的请求."));
			cm.dispose();
			return;
		}
		if (mode == 1) {
			status++;
		} else {
			status--;
		}
		if (status == 0) {
			cm.sendNext("有人想给你一条消息.");
		} else if (status == 1) {
			var t = otherChar.getName();
			cm.sendYesNo("你愿意和 " + t + "吗?") ;
		} else if (status == 2) {
			otherChar.getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.serverNotice(1, "你的伴侣已经接受了你的请求."));
			otherChar.setMarriageQuestLevel(50);
			cm.getPlayer().setMarriageQuestLevel(50);
			cm.createEngagement(cm.getPlayer().getId(), otherChar.getId());
			if (otherChar.countItem(2240000) > 0) {
				MapleInventoryManipulator.removeById(otherChar.getClient(), MapleInventoryType.USE, 2240000, 1, false, false);
				MapleInventoryManipulator.addById(otherChar.getClient(), 4031358, 1, "shit!");
				MapleInventoryManipulator.addById(cm.getPlayer().getClient(), 4031358, 1, "shit!");
				MapleInventoryManipulator.addById(otherChar.getClient(), 4031357, 1, "shit!");
			} else if (otherChar.countItem(2240001) > 0) {
				MapleInventoryManipulator.removeById(otherChar.getClient(), MapleInventoryType.USE, 2240001, 1, false, false);
				MapleInventoryManipulator.addById(otherChar.getClient(), 4031360, 1, "shit!");
				MapleInventoryManipulator.addById(cm.getPlayer().getClient(), 4031360, 1, "shit!");
				MapleInventoryManipulator.addById(otherChar.getClient(), 4031359, 1, "shit!");			
			} else if (otherChar.countItem(2240002) > 0) {
				MapleInventoryManipulator.removeById(otherChar.getClient(), MapleInventoryType.USE, 2240002, 1, false, false);
				MapleInventoryManipulator.addById(otherChar.getClient(), 4031362, 1, "shit!");
				MapleInventoryManipulator.addById(cm.getPlayer(), 4031362, 1, "shit!");
				MapleInventoryManipulator.addById(otherChar.getClient(), 4031361, 1, "shit!");
			} else if (otherChar.countItem(2240003) > 0) {
				MapleInventoryManipulator.removeById(otherChar.getClient(), MapleInventoryType.USE, 2240003, 1, false, false);
				MapleInventoryManipulator.addById(otherChar.getClient(), 4031364, 1, "shit!");
				MapleInventoryManipulator.addById(cm.getPlayer(), 4031364, 1, "shit!");
				MapleInventoryManipulator.addById(otherChar.getClient(), 4031363, 1, "shit!");			
			}
			cm.dispose();
		}
	}
}