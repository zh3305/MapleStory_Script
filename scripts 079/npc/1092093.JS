/*疯狂点击NPC*/

importPackage(net.sf.odinms.client); 
importPackage(net.sf.odinms.tools); 
importPackage(net.sf.odinms.server);


var chance1 = Math.floor(Math.random()*200+1);
var chance2 = Math.floor(Math.random()*50);
var chance3 = (Math.floor(Math.random()*20)+1);
var chance4 = Math.floor(Math.random()*2+1);
var itemchance = chance1 + chance2 + chance3 * chance4;
var status = 0;

function start() 
	{
	status = -1;
	action(1, 0, 0);


	}

function action(mode, type, selection)
{
	if (mode == -1)
	{
		cm.dispose();
	}
	else if (mode == 0)
	{
		cm.sendOk("好的如果要出去随时来找我.");
		cm.dispose();
	}else 
	{
		if (mode == 1)
			status++;
		else
			status--;		
	if (status == 0)
	{		
		cm.sendYesNo(""+ cm.getChar().getName() +"你好,当前时间是#b" + cm.getHour() + "时:" + cm.getMin() + "分:" + cm.getSec() + "秒\r\n#k修炼点:#r" + cm.getChar().getRw15() + "#k#b 点. \r\n#k当时间达到#r20:00-20:05#k之间,请拿起你的鼠标疯狂点击吧~\r\n普通玩家每次点击有机会获得#r5-10#k修炼点\r\n5元会员①、②每次点击有机会获得#r10-30#k修炼点\r\n5元会员③、④每次点击有机会获得#r30-50#k修炼点\r\n5元会员⑤、⑥每次点击有机会获得#r50-80#k修炼点\r\n给你5分钟时间,看谁点的快!\r\n\r\n#b[PS]:若需返回市场.请使用 @自由 指令." );	
	}
	else if (status == 1) {
		if (cm.getHour() < 20 ||cm.getHour() > 20) {
cm.sendOk("活动时间还没到.\r\n#r现在服务器时间:" + cm.getHour() + "时:" + cm.getMin() + "分:" + cm.getSec() + "秒");
cm.dispose();
 } else if (cm.getMin() > 5) {
cm.sendOk("已经过了哦.\r\n#r现在服务器时间:" + cm.getHour() + "时:" + cm.getMin() + "分:" + cm.getSec() + "秒");
cm.dispose();

 }else if (cm.getPlayer().getVip() == 0) {
       if ((itemchance >= 30) && (itemchance <= 50)) { 
var zz =5;
cm.gainrw15(zz);
cm.serverNotice("[疯狂挤奶]:[" + cm.getPlayer() + "]疯狂点击获得"+zz+"修炼点.");
cm.dispose();
}else if ((itemchance >= 70) && (itemchance <= 90)) { 
var zz =5;
cm.gainrw15(zz);
cm.serverNotice("[疯狂挤奶]:[" + cm.getPlayer() + "]疯狂点击获得"+zz+"修炼点.");
cm.dispose();
}else if ((itemchance >= 110) && (itemchance <= 140)) { 
var zz =6;
cm.gainrw15(zz);
cm.serverNotice("[疯狂挤奶]:[" + cm.getPlayer() + "]疯狂点击获得"+zz+"修炼点.");
cm.dispose();
}else if ((itemchance >= 170) && (itemchance <= 200)) { 
var zz =10;
cm.gainrw15(zz);
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"[疯狂挤奶]" + " : " + cm.getPlayer().getName() +" 疯狂点击获得"+zz+"修炼点.大家鼓掌.",true).getBytes());
cm.dispose();
}else if ((itemchance >= 210) && (itemchance <= 230)) { 
var zz =8;
cm.gainrw15(zz);
cm.serverNotice("[疯狂挤奶]:[" + cm.getPlayer() + "]疯狂点击获得"+zz+"修炼点.");
cm.dispose();
}else{
var zz =9;
cm.gainrw15(zz);
cm.serverNotice("[疯狂挤奶]:[" + cm.getPlayer() + "]疯狂点击获得"+zz+"修炼点.");
cm.dispose();}

}else if (cm.getPlayer().getVip() == 1 ||cm.getPlayer().getVip() == 2) {
if ((itemchance >= 30) && (itemchance <= 50)) { 
var zz =10;
cm.gainrw15(zz);
cm.serverNotice("[疯狂挤奶]:[" + cm.getPlayer() + "]疯狂点击获得"+zz+"修炼点.");
cm.dispose();
}else if ((itemchance >= 70) && (itemchance <= 90)) { 
var zz =13;
cm.gainrw15(zz);
cm.serverNotice("[疯狂挤奶]:[" + cm.getPlayer() + "]疯狂点击获得"+zz+"修炼点.");
cm.dispose();
}else if ((itemchance >= 110) && (itemchance <= 140)) { 
var zz =13;
cm.gainrw15(zz);
cm.serverNotice("[疯狂挤奶]:[" + cm.getPlayer() + "]疯狂点击获得"+zz+"修炼点.");
cm.dispose();
}else if ((itemchance >= 170) && (itemchance <= 200)) { 
var zz =30;
cm.gainrw15(zz);
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"[疯狂挤奶]" + " : " + cm.getPlayer().getName() +" 疯狂点击获得"+zz+"修炼点.大家鼓掌.",true).getBytes());
cm.dispose();
}else if ((itemchance >= 210) && (itemchance <= 230)) { 
var zz =20;
cm.gainrw15(zz);
cm.serverNotice("[疯狂挤奶]:[" + cm.getPlayer() + "]疯狂点击获得"+zz+"修炼点.");
cm.dispose();
}else{
var zz =10;
cm.gainrw15(zz);
cm.serverNotice("[疯狂挤奶]:[" + cm.getPlayer() + "]疯狂点击获得"+zz+"修炼点.");
cm.dispose();}
 }else if (cm.getPlayer().getVip() == 3 ||cm.getPlayer().getVip() == 4) {
if ((itemchance >= 30) && (itemchance <= 50)) { 
var zz =30;
cm.gainrw15(zz);
cm.serverNotice("[疯狂挤奶]:[" + cm.getPlayer() + "]疯狂点击获得"+zz+"修炼点.");
cm.dispose();
}else if ((itemchance >= 70) && (itemchance <= 90)) { 
var zz =50;
cm.gainrw15(zz);
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"[疯狂挤奶]" + " : " + cm.getPlayer().getName() +" 疯狂点击获得"+zz+"修炼点.大家鼓掌.",true).getBytes());
cm.dispose();
}else if ((itemchance >= 110) && (itemchance <= 140)) { 
var zz =42;
cm.gainrw15(zz);
cm.serverNotice("[疯狂挤奶]:[" + cm.getPlayer() + "]疯狂点击获得"+zz+"修炼点.");
cm.dispose();
}else if ((itemchance >= 170) && (itemchance <= 200)) { 
var zz =40;
cm.gainrw15(zz);
cm.serverNotice("[疯狂挤奶]:[" + cm.getPlayer() + "]疯狂点击获得"+zz+"修炼点.");
cm.dispose();
}else if ((itemchance >= 210) && (itemchance <= 230)) { 
var zz =45;
cm.gainrw15(zz);
cm.serverNotice("[疯狂挤奶]:[" + cm.getPlayer() + "]疯狂点击获得"+zz+"修炼点.");
cm.dispose();
}else{
var zz =35;
cm.gainrw15(zz);
cm.serverNotice("[疯狂挤奶]:[" + cm.getPlayer() + "]疯狂点击获得"+zz+"修炼点.");
cm.dispose();}
}else if (cm.getPlayer().getVip() == 5 ||cm.getPlayer().getVip() == 6) {
if ((itemchance >= 30) && (itemchance <= 50)) { 
var zz =50;
cm.gainrw15(zz);
cm.serverNotice("[疯狂挤奶]:[" + cm.getPlayer() + "]疯狂点击获得"+zz+"修炼点.");
cm.dispose();
}else if ((itemchance >= 70) && (itemchance <= 90)) { 
var zz =80;
cm.gainrw15(zz);
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"[疯狂挤奶]" + " : " + cm.getPlayer().getName() +" 疯狂点击获得"+zz+"修炼点.大家鼓掌.",true).getBytes());
cm.dispose();
}else if ((itemchance >= 110) && (itemchance <= 140)) { 
var zz =55;
cm.gainrw15(zz);
cm.serverNotice("[疯狂挤奶]:[" + cm.getPlayer() + "]疯狂点击获得"+zz+"修炼点.");
cm.dispose();
}else if ((itemchance >= 170) && (itemchance <= 200)) { 
var zz =65;
cm.gainrw15(zz);
cm.serverNotice("[疯狂挤奶]:[" + cm.getPlayer() + "]疯狂点击获得"+zz+"修炼点.");
cm.dispose();
}else if ((itemchance >= 210) && (itemchance <= 230)) { 
var zz =75;
cm.gainrw15(zz);
cm.serverNotice("[疯狂挤奶]:[" + cm.getPlayer() + "]疯狂点击获得"+zz+"修炼点.");
cm.dispose();
}else{
var zz =50;
cm.gainrw15(zz);
cm.serverNotice("[疯狂挤奶]:[" + cm.getPlayer() + "]疯狂点击获得"+zz+"修炼点.");
cm.dispose();}
		 }else {
cm.sendOk("活动时间还没到.\r\n#r现在服务器时间:" + cm.getHour() + "时:" + cm.getMin() + "分:" + cm.getSec() + "秒");
		cm.dispose();	
	}
}
}}
	