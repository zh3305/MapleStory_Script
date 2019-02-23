importPackage(net.sf.odinms.client);
var status = 0;

var zz ="冒险岛"; //这里设置名字

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

if (cm.getPlayer().getDojoPoints() == 0) {//
cm.sendNext("#d#r"+cm.mxdmz()+"冒险岛#k,#d新人大礼包.\r\n\r\n#b------------------#d[玩家独立才是王道]#b------------------\r\n\r\n#b[装  备]#b >>>> #v1002140#(全属+2000),#v1372077#,#v1432080#,\r\n#r[三刀流]#b >>>> #v1302070#,#v1012135#,#v1092048#.#b\r\n[点  装]#b >>>> #v1702305#,#v1702289#,#v1042096#，#v1042081#,#v1062105#,#v1003049#\r\n[其  他]#b >>>> #v4002002# x 1,#v2000005# x 100,#v4031454# x 30,\r\n              点卷 x 50,000.");

} else if (cm.getPlayer().getReborns() == 15) {//
} else{
cm.sendOk("#b您已经领取过奖励了或已经不是新手了.");
cm.dispose();
} 

} else if (status == 1) {
//点装
cm.gainItem(1702305,1);
cm.gainItem(1702298,1);
cm.gainItem(1702289,1);
cm.gainItem(1042096,1);
cm.gainItem(1042081,1);
cm.gainItem(1003049,1);
cm.gainItem(1062105,1);
//装备
cm.gainItem(1012135,1);
//邮票
cm.gainItem(4002002,2);
//消耗
cm.gainItem(2000005,100);
cm.gainItem(4031454,30);//圣杯
//点卷
cm.gainNX(50000);
//勋章
var xunzhang = 1142000;//勋章
var shuxing = 50; //设置
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(xunzhang); //获得装备的类形
var toDrop = ii.randomizeStats(ii.getEquipById(xunzhang)).copy(); // 生成一个Equip类
//var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 60000 * 60 * 24 * 365); //时间
//toDrop.setExpiration(temptime); //给装备时间
toDrop.setStr(shuxing);
toDrop.setDex(shuxing);
toDrop.setInt(shuxing);
toDrop.setLuk(shuxing);
toDrop.setSpeed(20);
toDrop.setJump(20);					
cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //刷新背包		
cm.getChar().saveToDB(true);

var xnzhang = 1002140;//七彩GM帽子
var shxing = 2000; //设置
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(xnzhang); //获得装备的类形
var toDrop = ii.randomizeStats(ii.getEquipById(xnzhang)).copy(); // 生成一个Equip类
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 60000 * 60 * 24 * 365); //时间
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


var xzhang = 1302070;//三刀-武器
var sxing = 100; //设置
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(xzhang); //获得装备的类形
var toDrop = ii.randomizeStats(ii.getEquipById(xzhang)).copy(); // 生成一个Equip类
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 60000 * 60 * 24 * 365); //时间
toDrop.setExpiration(temptime); //给装备时间
toDrop.setStr(sxing);
toDrop.setDex(sxing);
toDrop.setInt(sxing);
toDrop.setLuk(sxing);
toDrop.setSpeed(20);
toDrop.setJump(20);					
cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //刷新背包		
cm.getChar().saveToDB(true);



var xhang = 1092048;//
var sing = 50; //设置
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(xhang); //获得装备的类形
var toDrop = ii.randomizeStats(ii.getEquipById(xhang)).copy(); // 生成一个Equip类
//var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 60000 * 60 * 24 * 365); //时间
//toDrop.setExpiration(temptime); //给装备时间
toDrop.setStr(sing);
toDrop.setDex(sing);
toDrop.setInt(sing);
toDrop.setLuk(sing);
toDrop.setSpeed(20);
toDrop.setJump(20);					
cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //刷新背包		
cm.getChar().saveToDB(true);


cm.getPlayer().setDojoPoints(cm.getPlayer().getDojoPoints() + 1);
cm.getChar().setLevel(10);
cm.sendOk("#r[新手礼包]#n已送至背包中.\r\n#k开始你的冒险之旅把.从右边的传送门可以出去,出去不能再进来.祝你一路顺风.");
cm.dispose();	
}				
}
}
