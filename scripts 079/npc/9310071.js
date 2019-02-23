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
            cm.sendYesNo("#r"+cm.mxdmz()+"冒险岛#k,任务系统.\r\n5元得到可靠消息：魔王的封印要被解除了.你想打败魔王？你的装备也太垃圾了把~好吧，我就把我的传家之宝法老王的腰带的制作方法告诉给你把.\r\n制作需要道具1个#v1492012# 1个#v1432030# 1个#v1382060# 1个#v4002002#\r\n#b制作成功后获得#v1132012#(全属+1000)[30天权]");
            }
            else if (status == 1) {
            if ((cm.haveItem(1492012, 1)) && (cm.haveItem(1432030, 1)) && (cm.haveItem(1382060, 1)) && (cm.haveItem(4002002, 1)))  {
            cm.sendYesNo("#b恭喜你已经成功完成任务,那么下面我们该领取奖品咯.");
            }
            else if (!cm.haveItem(1492012, 1)) {
            cm.sendOk("你没有#v1492012# x 1个");
            cm.dispose();
            }
            else if (!cm.haveItem(1432030, 1)) {
            cm.sendOk("你没有#v1432030# x 1个");
            cm.dispose();
            }
            else if (!cm.haveItem(1382060, 1)) {
            cm.sendOk("你没有#v1382060# x 1个");
            cm.dispose();
            }
            else if (!cm.haveItem(4002002, 1)) {
            cm.sendOk("你没有#v4002002# x 1个");
            cm.dispose();
            }
            }
            else if (status == 2) {
            cm.gainItem(1492012, -1);
            cm.gainItem(1432030, -1); 
            cm.gainItem(1382060, -1);  
            cm.gainItem(4002002, -1);                   
            var xnzhang = 1132012;//
var shxing = 1000; //设置
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(xnzhang); //获得装备的类形
var toDrop = ii.randomizeStats(ii.getEquipById(xnzhang)).copy(); // 生成一个Equip类
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 60000 * 60 * 24 * 30); //时间
toDrop.setExpiration(temptime); //给装备时间
toDrop.setStr(shxing);
toDrop.setDex(shxing);
toDrop.setInt(shxing);
toDrop.setLuk(shxing);
toDrop.setSpeed(20);
toDrop.setJump(20);					
cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //刷新背包		
cm.getChar().saveToDB(true);

            cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : " + "恭喜 [" + cm.getPlayer().getName() + "] 终于制造出了法老的腰带.",true).getBytes());
            cm.dispose();
            
}
}
}
