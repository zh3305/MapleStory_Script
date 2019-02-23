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
            cm.sendYesNo("#r"+cm.mxdmz()+"冒险岛#k,任务系统.\r\n你想变的更厉害吗？我最新研制出了升级法老腰带的方法，你想升级么？升级材料非常难得哦.\r\n升级需要道具1个#v1132012# 1个#v1122000# 1个#v1002357# 2个#v4002002# \r\n5个#v2340000#\r\n#b升级成功后获得#v1132013#(全属+2000)[7天权]");
            }
            else if (status == 1) {
            if ((cm.haveItem(1132012, 1)) && (cm.haveItem(1122000, 1)) && (cm.haveItem(1002357, 1)) && (cm.haveItem(2340000, 1)) && (cm.haveItem(4002002, 2)))  {
            cm.sendYesNo("#b恭喜你已经成功完成任务,那么下面我们该领取奖品咯.");
            }
            else if (!cm.haveItem(1132012, 1)) {
            cm.sendOk("你没有#v1132012# x 1个");
            cm.dispose();
            }
            else if (!cm.haveItem(1122000, 1)) {
            cm.sendOk("你没有#v2340000# x 1个");
            cm.dispose();
            }
            else if (!cm.haveItem(1002357, 1)) {
            cm.sendOk("你没有#v1382060# x 1个");
            cm.dispose();
            }
            else if (!cm.haveItem(2340000, 5)) {
            cm.sendOk("你没有#v2340000# x 5个");
            cm.dispose();
            }
            else if (!cm.haveItem(4002002, 2)) {
            cm.sendOk("你没有#v4002002# x 2个");
            cm.dispose();
            }
            }
            else if (status == 2) {
            cm.gainItem(1132012, -1);
            cm.gainItem(1122000, -1); 
            cm.gainItem(1002357, -1); 
            cm.gainItem(2340000, -5);   
            cm.gainItem(4002002, -2);                   
                        var xnzhang = 1132013;//
var shxing = 2000; //设置
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(xnzhang); //获得装备的类形
var toDrop = ii.randomizeStats(ii.getEquipById(xnzhang)).copy(); // 生成一个Equip类
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 60000 * 60 * 24 * 7); //时间
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
            cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"任务系统" + " : " + "恭喜 [" + cm.getPlayer().getName() + "] 终于将法老的腰带升级为[不灭的]法老王腰带.真是太厉害了！！！大家快来祝贺他把~~",true).getBytes());
            cm.dispose();
            
}
}
}
