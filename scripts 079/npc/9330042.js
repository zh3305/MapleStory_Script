importPackage(net.sf.odinms.client);
var status = 0;

var name = "卡卡西冒险岛";//这里填上F的名字

var web = "官方网站";//这里填上网页

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

         
         if (mode == -1) {//ExitChat
        cm.dispose();
    
    }else if (mode == 0){//No
        cm.sendOk("好的，等你想要来换的时候再来吧.");
        cm.dispose();

    }else{            //Regular Talk
        if (mode == 1)
            status++;
        else
            status--;
        
            if (status == 0) {
            cm.sendYesNo("#r"+cm.mxdmz()+"冒险岛#k,任务系统.\r\n纳尼？你连巨无霸品克缤都没有？我这还有一个，你要么？.\r\n#b任务奖励#v3010070#[24小时权]\r\n任务需要道具10个#v4032226# 1000个#v4001126# 10个#v4001035#");
            }
            else if (status == 1) {
            if ((cm.haveItem(4032226, 10)) && (cm.haveItem(4001126, 1000)) && (cm.haveItem(4001035, 10)))  {
            cm.sendYesNo("#b恭喜你已经成功完成任务,那么下面我们该领取奖品咯.");
            }
            else if (!cm.haveItem(4032226, 10)) {
            cm.sendOk("你没有#v4032226# x 10个");
            cm.dispose();
            }
            else if (!cm.haveItem(4001126, 1000)) {
            cm.sendOk("你没有#v4001126# x 1000个");
            cm.dispose();
            }
            else if (!cm.haveItem(4001035, 10)) {
            cm.sendOk("你没有#v4001035# x 10个");
            cm.dispose();
            }
            }
            else if (status == 2) {
            cm.gainItem(4032226, -10);
            cm.gainItem(4001126, -1000); 
            cm.gainItem(4001035, -10);  
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(3010070); //获得装备的类形
var toDrop = ii.randomizeStats(ii.getEquipById(3010070)).copy(); // 生成一个Equip类
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 60000 * 60 * 24 ); //时间
toDrop.setExpiration(temptime); //给装备时间					
cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //刷新背包		
cm.getChar().saveToDB(true);                  
            cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"5元冒险岛" + " : " + "恭喜 [" + cm.getPlayer().getName() + "] 不畏艰辛万苦终于完成任务，获得巨无霸PB椅子奖励.",true).getBytes());
            cm.dispose();
            
}
}
}
