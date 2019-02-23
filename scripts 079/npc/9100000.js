var status = 0;

var zz ="●●●5元冒险岛"; //这里设置名字

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
if (cm.getPlayer().getClan() == 0) {
var lingqu="#r10万点卷#k";
} else if (cm.getPlayer().getClan() == 1) {
var lingqu="#v1002357#(50属性)";
} else if (cm.getPlayer().getClan() == 2) {
var lingqu="#v1122000#(50属性)";
} else if (cm.getPlayer().getClan() == 3) {
var lingqu="#r永恒装备#k#b兑换卷";
} else if (cm.getPlayer().getClan() == 4) {
var lingqu="#r永恒装备#k#b兑换卷";
} else if (cm.getPlayer().getClan() == 5) {
var lingqu="#v2340000#10 张";
} else if (cm.getPlayer().getClan() == 6) {
var lingqu="#v1142004#(50属性)";
} else if (cm.getPlayer().getClan() == 7) {
var lingqu="#r10元宝#k";
} else if (cm.getPlayer().getClan() == 8) {
var lingqu="#r10元宝#k";
} else if (cm.getPlayer().getClan() == 9) {
var lingqu="#v1002926#(100属性)#n";
} else if (cm.getPlayer().getClan() == 10) {
var lingqu="#v1002927#(200属性)#n";
} else if (cm.getPlayer().getClan() == 11) {
var lingqu="#r10元宝#k";
} else if (cm.getPlayer().getClan() == 12) {
var lingqu="#v1112907#(300属性)#n";
} else if (cm.getPlayer().getClan() == 13) {
var lingqu="#v1112907#(400属性)#n";
} else if (cm.getPlayer().getClan() == 14) {
var lingqu="#v1112907#(500属性)#n";
} else if (cm.getPlayer().getClan() == 15) {
var lingqu="#v1112907#(888属性)#n";
} else{
var lingqu="全部领取完毕";
}
var didi =cm.getPlayer().getClan();
var gege = didi+1;

cm.sendNext(""+cm.mxdmz()+"冒险岛,飞升奖励领取.#k\r\n\r\n   #b当前转生次数:#r" + cm.getChar().getReborns() + "#k#b 次\r\n\r\n您当前的飞升次数可领取第#r"+gege+"#k#b阶段礼物:"+lingqu+"\r\n");



} else if (status == 1) {
if (cm.getPlayer().getClan() == 0 &&cm.getPlayer().getReborns() >= 10) {
cm.gainNX(100000);
cm.sendOk("#b恭喜您已经成功领取到#r10万点卷#k.");
cm.setClan(1);
cm.dispose();




} else if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(1)).isFull()){
cm.sendOk("请保证装备栏位有空格接受礼包.");
cm.dispose();  
} else if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(2)).isFull()){
cm.sendOk("请保证装备栏位有空格接受礼包.");
cm.dispose(); 
} else if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(3)).isFull()){
cm.sendOk("请保证装备栏位有空格接受礼包.");
cm.dispose(); 
} else if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(4)).isFull()){
cm.sendOk("请保证装备栏位有空格接受礼包.");
cm.dispose(); 




} else if (cm.getPlayer().getClan() == 1&&cm.getPlayer().getReborns() >= 15) {
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();	
var type = ii.getInventoryType(1002357);	
var toDrop = ii.randomizeStats(ii.getEquipById(1002357)).copy();
toDrop.setStr(50);
toDrop.setDex(50);
toDrop.setInt(50);
toDrop.setLuk(50);
toDrop.setLocked(1);	
cm.getPlayer().getInventory(type).addItem(toDrop);
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop));
cm.setClan(2);
cm.sendOk("#b恭喜您已经成功领取到#v1002357#(50属性).");
cm.dispose();




} else if (cm.getPlayer().getClan() == 2&&cm.getPlayer().getReborns() >= 20) {
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();	
var type = ii.getInventoryType(1122000);	
var toDrop = ii.randomizeStats(ii.getEquipById(1122000)).copy();
toDrop.setStr(50);
toDrop.setDex(50);
toDrop.setInt(50);
toDrop.setLuk(50);
toDrop.setLocked(1);	
cm.getPlayer().getInventory(type).addItem(toDrop);
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop));
cm.setClan(3);
cm.sendOk("#b恭喜您已经成功领取到#v1122000#(50属性).");
cm.dispose();





} else if (cm.getPlayer().getClan() == 3&&cm.getPlayer().getReborns() >= 30) {
cm.gainItem(4031579,1);
cm.sendOk("#b恭喜您已经成功领取到#r永恒装备兑换卷#k.");
cm.setClan(4);
cm.dispose();



} else if (cm.getPlayer().getClan() == 4&&cm.getPlayer().getReborns() >= 40) {
cm.gainItem(4031579,1);
cm.sendOk("#b恭喜您已经成功领取到#r永恒装备兑换卷#k.");
cm.setClan(5);
cm.dispose();



} else if (cm.getPlayer().getClan() == 5&&cm.getPlayer().getReborns() >= 50) {
cm.gainItem(2340000,10);
cm.sendOk("#b恭喜您已经成功领取到#v2340000#10张.");
cm.setClan(6);
cm.dispose();



} else if (cm.getPlayer().getClan() == 6&&cm.getPlayer().getReborns() >= 60) {
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();	
var type = ii.getInventoryType(1142004);	
var toDrop = ii.randomizeStats(ii.getEquipById(1142004)).copy();
toDrop.setStr(50);
toDrop.setDex(50);
toDrop.setInt(50);
toDrop.setLuk(50);
toDrop.setLocked(1);	
cm.getPlayer().getInventory(type).addItem(toDrop);
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop));
cm.setClan(7);
cm.sendOk("#b恭喜您已经成功领取到#v1142004#(50属性).");
cm.dispose();






} else if (cm.getPlayer().getClan() == 9&&cm.getPlayer().getReborns() >= 100) {
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();	
var type = ii.getInventoryType(1002926);	
var toDrop = ii.randomizeStats(ii.getEquipById(1002926)).copy();
toDrop.setLuk(100);
toDrop.setInt(100);
toDrop.setDex(100);
toDrop.setStr(100);
toDrop.setHp(100);
toDrop.setMp(100);
toDrop.setAcc(100);
toDrop.setAvoid(100);
toDrop.setSpeed(100);
toDrop.setJump(100);
toDrop.setLocked(1);	
cm.getPlayer().getInventory(type).addItem(toDrop);
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop));
cm.setClan(10);
cm.sendOk("#b恭喜您已经成功领取到#v1002926#(100属性).");
cm.dispose();



} else if (cm.getPlayer().getClan() == 10&&cm.getPlayer().getReborns() >= 200) {
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();	
var type = ii.getInventoryType(1002927);	
var toDrop = ii.randomizeStats(ii.getEquipById(1002927)).copy();
toDrop.setLuk(200);
toDrop.setInt(200);
toDrop.setDex(200);
toDrop.setStr(200);
toDrop.setHp(200);
toDrop.setMp(200);
toDrop.setAcc(200);
toDrop.setAvoid(200);
toDrop.setSpeed(200);
toDrop.setJump(200);
toDrop.setLocked(1);	
cm.getPlayer().getInventory(type).addItem(toDrop);
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop));
cm.setClan(11);
cm.sendOk("#b恭喜您已经成功领取到#v1002927#(200属性).");
cm.dispose();




} else if (cm.getPlayer().getClan() == 11&&cm.getPlayer().getReborns() >= 300) {
cm.gainzb(10);
cm.setClan(12);
cm.sendOk("#b恭喜您已经成功领取到#v2040506#10张.");
cm.dispose();



} else if (cm.getPlayer().getClan() == 12&&cm.getPlayer().getReborns() >= 500) {
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();	
var type = ii.getInventoryType(1112907);	
var toDrop = ii.randomizeStats(ii.getEquipById(1112907)).copy();
toDrop.setLuk(300);
toDrop.setInt(300);
toDrop.setDex(300);
toDrop.setStr(300);
toDrop.setHp(300);
toDrop.setMp(300);
toDrop.setAcc(300);
toDrop.setAvoid(300);
toDrop.setSpeed(300);
toDrop.setJump(300);
toDrop.setLocked(1);	
cm.getPlayer().getInventory(type).addItem(toDrop);
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop));
cm.setClan(13);
cm.sendOk("#b恭喜您已经成功领取到#v1112907#(300属性).");
cm.dispose();





} else if (cm.getPlayer().getClan() == 13&&cm.getPlayer().getReborns() >= 600) {
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();	
var type = ii.getInventoryType(1112907);	
var toDrop = ii.randomizeStats(ii.getEquipById(1112907)).copy();
toDrop.setLuk(400);
toDrop.setInt(400);
toDrop.setDex(400);
toDrop.setStr(400);
toDrop.setHp(400);
toDrop.setMp(400);
toDrop.setAcc(400);
toDrop.setAvoid(400);
toDrop.setSpeed(400);
toDrop.setJump(400);
toDrop.setLocked(1);	
cm.getPlayer().getInventory(type).addItem(toDrop);
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop));
cm.setClan(14);
cm.sendOk("#b恭喜您已经成功领取到#v1112907#(400属性).");
cm.dispose();




} else if (cm.getPlayer().getClan() == 14&&cm.getPlayer().getReborns() >= 700) {
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();	
var type = ii.getInventoryType(1112907);	
var toDrop = ii.randomizeStats(ii.getEquipById(1112907)).copy();
toDrop.setLuk(500);
toDrop.setInt(500);
toDrop.setDex(500);
toDrop.setStr(500);
toDrop.setHp(500);
toDrop.setMp(500);
toDrop.setAcc(500);
toDrop.setAvoid(500);
toDrop.setSpeed(500);
toDrop.setJump(500);
toDrop.setLocked(1);	
cm.getPlayer().getInventory(type).addItem(toDrop);
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop));
cm.setClan(15);
cm.sendOk("#b恭喜您已经成功领取到#v1112907#(400属性).");
cm.dispose();




} else if (cm.getPlayer().getClan() == 15&&cm.getPlayer().getReborns() >= 888) {
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();	
var type = ii.getInventoryType(1112907);	
var toDrop = ii.randomizeStats(ii.getEquipById(1112907)).copy();
toDrop.setLuk(888);
toDrop.setInt(888);
toDrop.setDex(888);
toDrop.setStr(888);
toDrop.setHp(888);
toDrop.setMp(888);
toDrop.setAcc(888);
toDrop.setAvoid(888);
toDrop.setSpeed(888);
toDrop.setJump(888);
toDrop.setLocked(1);	
cm.getPlayer().getInventory(type).addItem(toDrop);
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop));
cm.setClan(16);
cm.sendOk("#b恭喜您已经成功领取到#v1112907#(888属性).");
cm.dispose();




} else if (cm.getPlayer().getClan() == 7&&cm.getPlayer().getReborns() >= 70) {
cm.setzb(+10);
cm.sendOk("#b恭喜您已经成功领取到#r10元宝#k.");
cm.setClan(8);
cm.dispose();



} else if (cm.getPlayer().getClan() == 8&&cm.getPlayer().getReborns() >= 88) {
cm.setzb(+10); 
cm.sendOk("#b恭喜您已经成功领取到#r10元宝#k.");
cm.setClan(9);
cm.dispose();


} else{
cm.sendOk("#b条件不足,不能领取.");
cm.dispose();




}
}
}
}