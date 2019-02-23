importPackage(net.sf.odinms.client);
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

         
         if (mode == -1) {//ExitChat
        cm.dispose();
    
    }else if (mode == 0){//No
        cm.sendOk("Ok, talk to me when you're sure you want to be #bReborn#k.");
        cm.dispose();

    }else{            //Regular Talk
        if (mode == 1)
            status++;
        else
            status--;
        
            if (status == 0) {
            cm.sendYesNo("#r"+cm.mxdmz()+"冒险岛#k,家族任务，每周将统计家族GP，最高的家族全员将获得管理员送出的奖励.\r\n#b任务奖励：#r家族荣誉点200点#k\r\n任务需要道具各3个 #v4002002# #v4031549# #v4001035# #v4031344#\r\n任务需要道主要通过任务副本,与各大城市BOSS获得.");
            }
            else if (status == 1) {
	    if (cm.getChar().getGuildId() == 0) {
	    cm.sendOk("#b对不起,你没有家族!");
	    cm.dispose();
	    }
            else if ((cm.haveItem(4002002, 3)) && (cm.haveItem(4031549, 3)) && (cm.haveItem(4001035, 3)) && (cm.haveItem(4031344, 3)))  {
            cm.sendYesNo("#b恭喜你已经成功完成任务,那么下面我们该领取奖品咯.");
            }
            else if (!cm.haveItem(4002002, 3)) {
	    cm.sendOk("#b对不起,您的道具不足.");
            cm.dispose();
            }
            else if (!cm.haveItem(4031549, 3)) {
	    cm.sendOk("#b对不起,您的道具不足.");
            cm.dispose();
            }
            else if (!cm.haveItem(4001035, 3)) {
	    cm.sendOk("#b对不起,您的道具不足.");
            cm.dispose();
            }
            else if (!cm.haveItem(4031344, 3)) {
	    cm.sendOk("#b对不起,您的道具不足.");
            cm.dispose();  
            }
            }
            else if (status == 2) {
            cm.gainItem(4002002, -3);
            cm.gainItem(4031549, -3); 
            cm.gainItem(4001035, -3);
            cm.gainItem(4031344, -3); 
	    cm.gainGP(200);
            cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : " + "恭喜 [" + cm.getPlayer().getName() + "] 不畏艰辛万苦终于完成任务，为家族获得200点荣誉.",true).getBytes());
            cm.dispose();
            
}
}
}
