importPackage(java.util); 
importPackage(net.sf.odinms.client); 
importPackage(net.sf.odinms.server); 
var chance = Math.floor(Math.random()*4+1); 
var luk =0 ; 
var status = 0; 
var display; 
var beilv = 0.3; //副装备属性相加后相乘的倍率 
var needap = 1000; //需要的属性点 
var aver = needap*0.1 ; 
var needmon = 200000000 ; //需要的金钱 
function start() { 
status = -1; 
action(1, 0, 0); 
} 

function action(mode, type, selection) { 
if (mode == -1) { 
cm.dispose(); 
} else { 
if (mode == 0) { 
cm.dispose(); 
return; 
} 
if (mode == 1) 
status++; 
if (status == 0) { 
cm.sendNext("#d"+cm.mxdmz()+"冒险岛,装备融合强化#k \r\n#b本次强化将需要#k#r三件相同装备! #k\r\n#k===================#k#d强化说明#k#k===================#k\r\n#r每次强化需要#b [金钱 2E] [属性点 "+needap+"点]#k\r\n装备栏第一格：辅助强化装备B#r(强化后自动消失)#k\r\n装备栏第二格：辅助强化装备C#r(强化后自动消失)#k \r\n装备栏第三格：需要强化的装备A \r\n#r注：装备栏的前三格不得为空，必须是3件相同的装备!#k \r\n#r警告:位置放错导致武器销毁后果自负!#k\r\n#k===================#k#d强化算法#k===================#k\r\nA属性 = A属性 + ( B属性 + C属性 ) * "+beilv*100+"% \r\n#k===================#k#d强化几率#k===================#k \r\n强化次数小于15,成功率：#r90%#k\r\n强化次数小于25,成功率：#r50%#k\r\n强化次数小于15,成功率：#r30%#k "); 
} else if (status == 1) { 
if (cm.getMeso() <= needmon) { 

cm.sendOk("#b武器强化需要#r"+needmon+"#k#b,您的余额不足!#k"); 
cm.dispose(); 

} 
else { 

if ( cm.getChar().getRemainingAp() <= needap) 
{ 
cm.sendOk("#b#b武器强化需要#r"+needap+"点属性值#k#b,您剩余的属性值不足!#k"); 

cm.dispose(); 
} else { 
var item1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy(); 
var item2 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(2).copy(); 
var item3 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(3).copy(); 
var itemId3 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(3).getItemId(); 
var newstr = (item1.getStr()+item2.getStr())* beilv; 


var newdex = (item1.getDex()+item2.getDex())* beilv; 
var newint = (item1.getInt()+item2.getInt())* beilv; 
var newluk = (item1.getLuk()+item2.getLuk())* beilv; 
var newspeed = (item1.getSpeed()+item2.getSpeed())* beilv; 
var newwatk = (item1.getWatk()+item2.getWatk())* beilv; 
var newmatk = (item1.getMatk()+item2.getMatk())* beilv; 
var newwdef = (item1.getWdef()+item2.getWdef())* beilv; 
var newmdef = (item1.getMdef()+item2.getMdef())* beilv; 
var newacc = (item1.getAcc()+item2.getAcc())* beilv; 
var newavoid = (item1.getAvoid()+item2.getAvoid())* beilv; 
var sumstr = item3.getStr() + newstr ; 
var sumdex = item3.getDex() + newdex ; 
var sumint = item3.getInt() + newint ; 
var sumluk = item3.getLuk() + newluk ; 
var sumspeed = item3.getSpeed() + newspeed ; 
var sumwatk = item3.getWatk() + newwatk ; 
var summatk = item3.getMatk() + newmatk ; 
var sumwdef = item3.getWdef() + newwdef ; 
var summdef = item3.getMdef() + newmdef ; 
var sumacc = item3.getAcc() + newacc ; 
var sumavoid = item3.getAvoid() + newavoid ; 


cm.sendNext("#b您当前装备#v"+itemId3+"#的强化次数为：#k#r("+item3.getUpgradeSlots()+"次)#k\r\n#b当前武器强化成功率为：#k#r60%#k\r\n#b当前武器强化失败次数为：#k#r"+cm.getExt('wqqhfail')+" 次#k\r\n#d===================#b属性对比#k#d===================#k\r\n#r 类 型 目前属性 增加属性 强化后属性#k\r\n#d力 量 "+item3.getStr()+" "+newstr+" "+sumstr+"\r\n敏 捷 "+item3.getDex()+" "+newdex+" "+sumdex+"\r\n智 力 "+item3.getInt()+" "+newint+" "+sumint+"\r\n运 气 "+item3.getLuk()+" "+newluk+" "+sumluk+"\r\n速 度 "+item3.getSpeed()+" "+newspeed+" "+sumspeed+"\r\n命 中 率 "+item3.getAcc()+" "+newacc+" "+sumacc+"\r\n躲 避 率 "+item3.getAvoid()+" "+newavoid+" "+sumavoid+"\r\n物理攻击 "+item3.getWatk()+" "+newwatk+" "+sumwatk+"\r\n魔法攻击 "+item3.getMatk()+" "+newmatk+" "+summatk+"\r\n物理防御 "+item3.getWdef()+" "+newwdef+" "+sumwdef+"\r\n摩法防御 "+item3.getMdef()+" "+newmdef+" "+summdef+""); 
} 
} 
} else if (status == 2) { 



var itemId1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId(); 
var itemId2 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(2).getItemId(); 
var itemId3 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(3).getItemId(); 
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(3).copy(); 

if ((itemId1 == itemId2)&&(itemId1 == itemId3)) { 

if (item.getUpgradeSlots() <= 15) { 
if (chance <= 1) { 

MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true); 
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 2,1, true); 

cm.sendOk("#b强化失败，祝您下次好运!#k"); 
cm.setBossLog('wqqhfail'); 
var statup = new java.util.ArrayList(); 
cm.gainMeso(-needmon); 
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap); 
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp()))); 
cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup)); 
cm.dispose(); 
} 
else if (chance >= 2) { 

cm.sendNext("#r确定要开始强化武器?"); 

luk = 1 ; 
} 

} 
else if ((item.getUpgradeSlots() >= 16)&&(item.getUpgradeSlots() <= 25)) 
{ 
if (chance <= 1) { 

MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true); 
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 2,1, true); 
var statup = new java.util.ArrayList(); 
cm.gainMeso(-needmon); 
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap); 
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp()))); 
cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup)); 
cm.sendOk("#b强化失败，祝您下次好运!#k"); 
cm.setBossLog('wqqhfail'); 
cm.dispose(); 
} 
else if (chance == 2) { 

MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true); 
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 2,1, true); 
var statup = new java.util.ArrayList(); 
cm.gainMeso(-needmon); 
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap); 
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp()))); 
cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup)); 
cm.setBossLog('wqqhfail'); 
cm.sendOk("#b强化失败，祝您下次好运!#k"); 
cm.dispose(); 
} 
else if (chance >= 3) { 

cm.sendNext("#r确定要开始强化武器?"); 
luk = 1 ; 
} 

} 
else if (item.getUpgradeSlots() > 25){ 
if (chance <= 1) { 

MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true); 
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 2,1, true); 
var statup = new java.util.ArrayList(); 
cm.gainMeso(-needmon); 
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap); 
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp()))); 
cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup)); 
cm.sendOk("#b强化失败，祝您下次好运!#k"); 
cm.setBossLog('wqqhfail'); 
cm.dispose(); 
} 
else if (chance == 2) { 

MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true); 
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 2,1, true); 
var statup = new java.util.ArrayList(); 
cm.gainMeso(-needmon); 
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap); 
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp()))); 
cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup)); 
cm.sendOk("#b强化失败，祝您下次好运!#k"); 
cm.setBossLog('wqqhfail'); 
cm.dispose(); 
} 
else if (chance == 3) { 

MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true); 
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 2,1, true); 
var statup = new java.util.ArrayList(); 
cm.gainMeso(-needmon); 
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap); 
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp()))); 
cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup)); 
cm.setBossLog('wqqhfail'); 
cm.sendOk("#b强化失败，祝您下次好运!#k"); 
cm.dispose(); 
} 
else if (chance >= 4) { 

cm.sendNext("#r确定要开始强化武器?"); 
luk = 1 ; 
} 
} 

} 
else{ 

cm.sendOk("#r抱歉,你没有收集三把相同的武器，或者武器位置错误!"); 
cm.dispose(); 

} 
}else if ((status == 3)||(luk == 1)) { 
var itemId1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId(); 
var itemId2 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(2).getItemId(); 
var itemId3 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(3).getItemId(); 
var item1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy(); 
var item2 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(2).copy(); 
var item3 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(3).copy(); 
var itemId3 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(3).getItemId(); 
var newstr = (item1.getStr()+item2.getStr())* beilv; 


var newdex = (item1.getDex()+item2.getDex())* beilv; 
var newint = (item1.getInt()+item2.getInt())* beilv; 
var newluk = (item1.getLuk()+item2.getLuk())* beilv; 
var newspeed = (item1.getSpeed()+item2.getSpeed())* beilv; 
var newwatk = (item1.getWatk()+item2.getWatk())* beilv; 
var newmatk = (item1.getMatk()+item2.getMatk())* beilv; 
var newwdef = (item1.getWdef()+item2.getWdef())* beilv; 
var newmdef = (item1.getMdef()+item2.getMdef())* beilv; 
var newacc = (item1.getAcc()+item2.getAcc())* beilv; 
var newavoid = (item1.getAvoid()+item2.getAvoid())* beilv; 
var sumstr = item3.getStr() + newstr ; 
var sumdex = item3.getDex() + newdex ; 
var sumint = item3.getInt() + newint ; 
var sumluk = item3.getLuk() + newluk ; 
var sumspeed = item3.getSpeed() + newspeed ; 
var sumwatk = item3.getWatk() + newwatk ; 
var summatk = item3.getMatk() + newmatk ; 
var sumwdef = item3.getWdef() + newwdef ; 
var summdef = item3.getMdef() + newmdef ; 
var sumacc = item3.getAcc() + newacc ; 
var sumavoid = item3.getAvoid() + newavoid ; 


//if ((itemId1 == itemId2)&&(itemId1 == itemId3)) { 
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(3).copy(); 
item.setStr(sumstr); // STR 
item.setDex(sumdex); // DEX 
item.setInt(sumint); // INT 
item.setLuk(sumluk); // INT 
item.setWatk(sumwatk); //WATK 
item.setMatk(summatk); //MATK 
item.setWdef(sumwdef); //WDEF 
item.setMdef(summdef); //MDEF 
item.setAcc(sumacc); // ACC 
item.setAvoid(sumavoid); // AVOID 
item.setSpeed(item.getSpeed() + 5); // SPEED 
item.setUpgradeSlots((item.getUpgradeSlots() + 1)); 
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true); 
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 2,1, true); 
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 3,1, true); 
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin"); 

cm.sendOk("#r恭喜您，武器强化成功\r\n强化次数+1，各属性值上升!#k"); 
var statup = new java.util.ArrayList(); 
cm.gainMeso(-needmon); 
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap); 
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp()))); 
cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup)); 

cm.dispose(); 




//} 


} 

} 
} 