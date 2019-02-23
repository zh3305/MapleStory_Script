/*
 *
 *  此脚本由冒险岛制作完成
 * 
 *
 */

importPackage(net.sf.odinms.server.maps); 
importPackage(net.sf.odinms.net.channel); 
importPackage(net.sf.odinms.tools);
importPackage(net.sf.odinms.server.life);
importPackage(java.awt);

var status = 0;

function start() 
	{
	status = -1;
	action(1, 0, 0);
	}

function action(mode, type, selection)
{
	var nextmap = cm.getC().getChannelServer().getMapFactory().getMap(702060000);
	if (mode == -1)
	{
		cm.dispose();
	}
	else if (mode == 0)
	{
		cm.sendOk("好的如果要挑战#b妖僧#k随时来找我.");
		cm.dispose();
	} 
	else 
	{
	if (mode == 1)
	status++;
	else
	status--;
		
	if (status == 0)
	{	if (cm.getC().getChannel() != 2){
			cm.sendOk("   少林妖僧的挑战只能在#r2#k频道进行!");
			cm.dispose();
			}else{
			cm.sendYesNo("你是否要挑战#b妖僧#k呢?");
		}
	}
	else if (status == 1) 
	{ 	
		var party = cm.getPlayer().getParty();		
		if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendOk("你不是队长。请你们队长来说话吧！");
                    cm.dispose();
                }else if(cm.getBossLog("shaoling") >= 3) {
	            cm.sendOk("您好,系统限定每天只能挑战三次,如果强行进入,会被系统弹回来的!");
                    cm.dispose();
		}else if(party.getMembers().size() < 1) {
	            cm.sendOk("需要 2 人以上的组队才能进入！!");
                    cm.dispose();
		}else{			
			nextmap.resetReactors();			
			cm.warpParty(702060000);
			cm.dispose();
		}
	}
}
}