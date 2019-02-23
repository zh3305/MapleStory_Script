var status = 0;
var typed=0;

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
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple("          #v3991056##v3991057##v3991058##v3991059#\r\n\r\n\r\n-- #e本副本制作者QQ#n：#r12796161.#k\r\n\r\n\r\n#b以下这些物品想要吗?#k\r\n\r\n#L1##v1102450##v1102451##v1102488##v1003268##v1003237##v1003462##v1003687##v1003268##v1000061##v1050256##v1070031##v1001088##v1051312##v1071048##v1003713##v1052550##v1082493##v1003509##v1052449##v1003508##v1052448##v1112100##v1532098##v1522094##v1492179##v1482168##v1472214##v1462193##v1452205##v1442223##v1432167##v1422140##v1412135##v1402196##v1382208##v1372177##v1362090##v1342082##v1332225##v1322203##v1312153##v1302275##v1242061##v1242060##v1232057##v1222058##v1212063##v1702385##v1702386##v1702387##v1702388##v1702389##v1702394##v1702395##v1702397##v1702398##v1702399##v1702400##v1702363##v1702368##v1702375##v1702382##v1702366##v1702342##v1142448##l");					
		} else if (status == 1) {
			if (selection == 1) {
				typed=1;
				cm.sendYesNo("#fUI/UIWindow2.img/UtilDlgEx/list1#\r\n   想要获得刚才那些物品必须挑战#o9300306#.\r\n\r\n- #e进入条件#n：自身进入\r\n- #e推荐等级#n：180级以上\r\n- #e怪物血量#n：#d499.999.999.999#k");		
			}
		} else if (status == 2) {
		if(typed==1){
		 if (cm.getLevel() <= 179) {
cm.sendOk("#fUI/UIWindow2.img/UtilDlgEx/list1#\r\n\r\n你好像还不具备以下条件。我不能送你们进入。\r\n\r\n-\r\n- #e等级需求#n：180级以上");
cm.dispose();
}
else if (cm.getParty() == null) {
cm.sendOk("#e#r你好像还没有一个队伍,我是不能送你进去的."); 
cm.dispose();
}
else if(!cm.isLeader()){
cm.sendOk("#e#r请队长来跟我谈话.");
cm.dispose();
}
 else if (cm.getMap(401100100).getCharactersSize() > 0) { // Not Party Leader
cm.sendOk("有人在挑战此副本，请稍等一会，或者换其它线尝试一下！..");
cm.dispose();
}
else if (cm.getParty().getMembers().size() > 1){
cm.sendOk("对不起，此次挑战必须单人."); 
cm.dispose();
}else{
var em = cm.getEventManager("xinmo");
if (em == null) {
cm.sendOk("出错啦,请联系GM.");
cm.dispose();
}else{
em.startInstance(cm.getParty(), cm.getChar().getMap());
}
cm.getC().getChannelServer().broadcastPacket(Packages.tools.MaplePacketCreator.serverNotice(0x13, cm.getC().getChannel(), "『副本公告』" + " : " + "强大的" + cm.getChar().getName() + ",挑战自己的心魔去了。是否能挑战成功呢?。"));
cm.dispose(); 
                        }
                }
		}
	}
}
