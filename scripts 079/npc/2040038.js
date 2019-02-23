importPackage(java.util);
importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server);

var status = 0;
var ttt ="#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//美化1
var ttt2 ="#fUI/UIWindow/Quest/icon6/7#";//"+ttt2+"//美化2
var ttt3 ="#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//美化圆
var ttt4 ="#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//美化New
var ttt5 ="#fUI/UIWindow/Quest/icon0#";//"+ttt5+"//美化!
var ttt6 ="#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//美化会员

//////////////////////////////////////////////////////////
function start() {
status = -1;
action(1, 0, 0);
}

function action(mode, type, selection) {
if (mode == -1) {
cm.dispose();
} else {
if (status >= 0 && mode == 0) {
cm.dispose();
return;
}
if (mode == 1)
status++;
else
status--;
if (status == 0) {
if(cm.getChar().getVip() <= 0){
var vipstr = "普通玩家";					
}else if(cm.getChar().getVip() == 1){
var vipstr = ""+ttt6+" "+cm.mxdmz()+"会员①";					
}else if(cm.getChar().getVip() == 2){
var vipstr = ""+ttt6+" "+cm.mxdmz()+"会员②";					
}else if(cm.getChar().getVip() == 3){
var vipstr = ""+ttt6+" "+cm.mxdmz()+"会员③";
}else if(cm.getChar().getVip() == 4){
var vipstr = ""+ttt6+" "+cm.mxdmz()+"会员④";	
}else if(cm.getChar().getVip() == 5){
var vipstr = ""+ttt6+" "+cm.mxdmz()+"会员⑤";					
}else{
var vipstr = ""+ttt6+" "+cm.mxdmz()+"会员⑥";					
}
var textz = "#r"+cm.mxdmz()+"冒险岛#k,兑换系统.#b  会员等级:#r"+vipstr+"  #b\r\n剩余元宝:#r" + cm.getChar().getzb() + "#k#b 块  #b修炼:#r" + cm.getChar().getRw15() + "#k#b 点\r\n";
//textz += "#r修练点兑换#r"+ttt6+"#b#l\r\n";

textz += "#L1#"+ttt3+"修 炼 点 >>>> [圣杯邮票]#r["+ttt4+"]#b#l\r\n";

textz += "#L2#"+ttt3+"修 炼 点 >>>> [商场点卷]#r["+ttt4+"]#b#l\r\n";

textz += "#L3#"+ttt3+"修 炼 点 >>>> [超级勋章]#r["+ttt4+"]#b#l\r\n";

textz += "#L4#"+ttt3+"修 炼 点 >>>> [强化装备]#r["+ttt4+"]#b#l\r\n";

//textz += "#r能力值兑换#r"+ttt6+"#b#l\r\n";

textz += "#L5#"+ttt3+"能 力 值 >>>> [时尚帽子]#r["+ttt4+"]#b#l\r\n";

//textz += "#r掉落物品兑换#r"+ttt6+"#b#l\r\n";

textz += "#L6#"+ttt3+"枫    叶 >>>> [商城点卷]#l\r\n";

textz += "#L7#"+ttt3+"枫    叶 >>>> [圣杯邮票]#l\r\n";

//textz += "#L888#"+ttt2+"双倍经验 >>>> [免费领取]#r#l\r\n";

textz += "#L49#"+ttt2+"Boss掉落 >>>> [元宝修炼]#r#l\r\n";


cm.sendSimple (textz);    
				
}else if (status == 1) {

var viplevel = cm.getChar().getVip();

if (selection == 1) {
cm.sendSimple("#r"+cm.mxdmz()+"冒险岛#k,想换取冒险币或飞升物品吗？#r\r\n["+ttt4+"]#k一个木妖邮票=15E冒险币\r\n可与自由市场的仓库管理员交换.\r\n#L10##b·我要兑换1张木妖邮票[#r需要800修炼点#b]·#l\r\n#L11##b·我要兑换5张木妖邮票[#r需要4000修炼点#b]#l\r\n#L12##b·我要兑换1个飞升圣杯[#r需要100修炼点#b]·#l\r\n#L13##b·我要兑换5个飞升圣杯[#r需要500修炼点#b]·#l");

}else if (selection == 3) {
cm.sendSimple("#r"+cm.mxdmz()+"冒险岛#k,下面是使用修炼点兑换物品,自由挂机可获得修炼点，购买会员也有赠送哦.\r\n#r["+ttt4+"]#k以下的勋章包括攻击属性.攻击属性=属性÷10\r\n#L18##b·我要超人气王勋章[#r需要1000修炼点#b]·[全属+1000]#l\r\n#L19##b·我要暗黑龙王勋章[#r需要2400修炼点#b]·[全属+2000]#l\r\n#L20##b·我要品客宾勋章[#r需要6000修炼点#b]·[全属+4000]#l\r\n#L21##b·我要射手村爱心勋章[#r需要10000修炼点#b]·[全属+8000]#l\r\n#L22##b·我要荣誉乘务员勋章[#r需要10000修炼点#b]·[全属+8000]#l\r\n#L23##b·我要天才勋章[#r需要20000修炼点#b]·[全属+10000]#l\r\n#L24##b·我要百战百胜勋章[#r需要50000修炼点#b]·[全属+15000]#l\r\n#L25##b·我要热血勋章[#r需要100000修炼点#b]·[全属+20000]#l");

}else if (selection == 49) {
cm.sendSimple("#r"+cm.mxdmz()+"冒险岛#k,下面是使用Boss掉落物品兑换物品,击败Boss所获得的#v4031549##v4031344#可以来交换#r修炼点#k或#r元宝#k~\r\n#r[Hot]#k本NPC专为普通玩家打造！\r\n#L500#使用8个#v4031549#交换1元宝\r\n#L510#使用8个#v4031344#交换980修炼点\r\n#L520#使用15个#v4031549#交换2元宝\r\n#L530#使用15个#v4031344#交换2000修炼点\r\n#L540#使用28个#v4031549#交换3元宝\r\n#L550#使用28个#v4031344#交换4000修炼点");

}else if (selection == 4) {
cm.sendSimple("#r"+cm.mxdmz()+"冒险岛#k,请注意提示，切记切记！\r\n    #r提示:以下操作为装备栏第一格装备 请确认后操作\r\n    所有属性上限为32000请勿超过,否则强化不会成功\r\n    而且元宝会自动扣除\r\n#L26##b·使装备增加1次升级次数[#r需要1600修炼点#b]·#l\r\n#L27##b·使装备增加5次升级次数[#r需要7200修炼点#b]·#l\r\n#L28##b·使装备增加100点攻击[#r需要30000修炼点#b]·#l\r\n#L29##b·使装备增加1000点攻击[#r需要292000修炼点#b]·#r["+ttt4+"]#k#l\r\n#L51##b·使装备增加100点属性[#r需要900修炼点#b]·#r["+ttt4+"]#k#l\r\n#L50##b·使装备增加500点属性[#r需要4200修炼点#b]·#r["+ttt4+"]#k#l\r\n#L49##b·使装备增加1000点属性[#r需要8000修炼点#b]·#r["+ttt4+"]#k#l\r\n#L45##b·使装备增加2000点属性[#r需要15700修炼点#b]·#r["+ttt4+"]#k#l\r\n#L46##b·使装备增加5000点属性[#r需要44200修炼点#b]·#r["+ttt4+"]#k#l\r\n#L47##b·使装备增加10000点属性[#r需要85600修炼点#b]·#r["+ttt4+"]#k#l\r\n#L48##b·使装备增加30000点属性[#r需要262000修炼点#b]·#r["+ttt4+"]#k#l");


}else if (selection == 5) {
cm.sendSimple("#r"+cm.mxdmz()+"冒险岛#k,下面是使用能力值时尚帽子,因有些会员玩家属性满了,因此出此兑换功能.\r\n#L30##b·[#r3000能力值#b]兑换#v1002894#粉色编织发带·#l\r\n#L31##b·[#r3000能力值#b]兑换#v1002895#红色编织发带·#l\r\n#L32##b·[#r3000能力值#b]兑换#v1002896#紫色编织发带·#l\r\n#L33##b·[#r3000能力值#b]兑换#v1002897#橙色编织发带·#l\r\n#L34##b·[#r3000能力值#b]兑换#v1002898#绿色编织发带·#l\r\n#L35##b·[#r3000能力值#b]兑换#v1002899#黄色编织发带·#l\r\n#L36##b·[#r3000能力值#b]兑换#v1002900#蓝色编织发带·#l\r\n#L37##b·[#r3000能力值#b]兑换#v1002901#银色编织发带·#l\r\n#L38##b·[#r3000能力值#b]兑换#v1002902#黑色编织发带·#l");

}else if (selection == 6) {
cm.sendSimple("#r"+cm.mxdmz()+"冒险岛#k,下面是使用枫叶兑换点卷的功能,枫叶主要获得途径,任何怪物都有爆.\r\n#L39##b·我要使用200个枫叶兑换 [#r400点卷#b]·#l\r\n#L40##b·我要使用500个枫叶兑换 [#r1000点卷#b]#l\r\n#L41##b·我要使用1000个枫叶兑换[#r2000点卷#b]·#l\r\n#L42##b·我要使用5000个枫叶兑换[#r10000点卷#b]·#l");


}else if (selection == 7) {
cm.sendSimple("#r"+cm.mxdmz()+"冒险岛#k,下面是使用枫叶兑换圣杯邮票功能,枫叶主要获得途径,任何怪物都有爆.\r\n#L43##b·我要使用1000个枫叶兑换[#r飞升道具#b]·#l\r\n#L44##b·我要使用2000个枫叶兑换[#r木妖邮票#b]#l");

}else if (selection == 2) {
cm.sendSimple("#r"+cm.mxdmz()+"冒险岛#k,下面是使用修炼点兑换物品的点卷,修炼点主要获得方式为挂机,时间越久,获得越多,购买会员也有赠送哦.\r\n#L14##b·我要兑换20000点商城点卷[#r需要200修炼点#b]·#l\r\n#L15##b·我要兑换100000点商城点卷[#r需要800修炼点#b]#l\r\n#L16##b·我要兑换200000点商城点卷[#r需要1500修炼点#b]·#l\r\n#L17##b·我要兑换500000点商城点卷[#r需要3000修炼点#b]·#l");
}

}else if (selection == 10) {
if (cm.getChar().getRw15() >= 800) {
cm.gainItem(4002002,1);
cm.gainrw13(-800);
cm.sendOk("#b成功了");
cm.dispose();
} else {
cm.sendOk("#b抱歉，你没足够的修炼点！.");
cm.dispose();
}

}else if (selection == 888) {
if (cm.getLevel() > 30 ) {  
cm.gainItem(5360014,1);
cm.sendOk("#b领取成功了");
cm.dispose();
} else {
cm.sendOk("#b抱歉，你未到30级无法领取.");
cm.dispose();
}


}else if (selection == 11) {
if (cm.getChar().getRw15() >= 4000) {
cm.gainItem(4002002,5);
cm.gainrw15(-4000);
cm.sendOk("#b成功了");
cm.dispose();
} else {
cm.sendOk("#b抱歉，你没足够的修炼点！.");
cm.dispose();
}

}else if (selection == 12) {
if (cm.getChar().getRw15() >= 100) {
cm.gainItem(4031454,1);
cm.gainrw15(-100);
cm.sendOk("#b成功了");
cm.dispose();
} else {
cm.sendOk("#b抱歉，你没足够的修炼点！.");
cm.dispose();
}

}else if (selection == 13) {
if (cm.getChar().getRw15() >= 500) {
cm.gainItem(4031454,5);
cm.gainrw15(-500);
cm.sendOk("#b成功了");
cm.dispose();
} else {
cm.sendOk("#b抱歉，你没足够的修炼点！.");
cm.dispose();
}

}else if (selection == 14) {
if (cm.getChar().getRw15() >= 200) {
cm.gainNX(10000);
cm.gainrw15(-200);
cm.sendOk("#b成功了");
cm.dispose();
} else {
cm.sendOk("#b抱歉，你没足够的修炼点！.");
cm.dispose();
}

}else if (selection == 15) {
if (cm.getChar().getRw15() >= 800) {
cm.gainNX(10000);
cm.gainrw15(-800);
cm.sendOk("#b成功了");
cm.dispose();
} else {
cm.sendOk("#b抱歉，你没足够的修炼点！.");
cm.dispose();
}

}else if (selection == 16) {
if (cm.getChar().getRw15() >= 1500) {
cm.gainNX(200000);
cm.gainrw15(-1500);
cm.sendOk("#b成功了");
cm.dispose();
} else {
cm.sendOk("#b抱歉，你没足够的修炼点！.");
cm.dispose();
}

}else if (selection == 17) {
if (cm.getChar().getRw15() >= 3000) {
cm.gainNX(500000);
cm.gainrw15(-3000);
cm.sendOk("#b成功了");
cm.dispose();
} else {
cm.sendOk("#b抱歉，你没足够的修炼点！.");
cm.dispose();
}

}else if (selection == 18) {
if (cm.getChar().getRw15() >= 1000) {
var item = 1142003
var statup = new java.util.ArrayList();
item.setStr(item.getStr() + 1000);
item.setDex(item.getDex() + 1000);
item.setInt(item.getInt() + 1000);
item.setLuk(item.getLuk() + 1000);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);

cm.gainrw15(-1000);
cm.sendOk("#b成功了");
cm.dispose();
} else {
cm.sendOk("#b抱歉，你没足够的修炼点！.");
cm.dispose();
}

}else if (selection == 19) {
if (cm.getChar().getRw15() >= 2400) {
cm.gainItem(1142007,1);
cm.gainrw15(-2400);
cm.sendOk("#b成功了");
cm.dispose();
} else {
cm.sendOk("#b抱歉，你没足够的修炼点！.");
cm.dispose();
}

}else if (selection == 20) {
if (cm.getChar().getRw15() >= 6000) {
cm.gainItem(1142008,1);
cm.gainrw15(-6000);
cm.sendOk("#b成功了");
cm.dispose();
} else {
cm.sendOk("#b抱歉，你没足够的修炼点！.");
cm.dispose();
}

}else if (selection == 21) {
if (cm.getChar().getRw15() >= 10000) {
cm.gainItem(1142014,1);
cm.gainrw15(-10000);
cm.sendOk("#b成功了");
cm.dispose();
} else {
cm.sendOk("#b抱歉，你没足够的修炼点！.");
cm.dispose();
}

}else if (selection == 22) {
if (cm.getChar().getRw15() >= 10000) {
cm.gainItem(1142141,1);
cm.gainrw15(-10000);
cm.sendOk("#b成功了");
cm.dispose();
} else {
cm.sendOk("#b抱歉，你没足够的修炼点！.");
cm.dispose();
}

}else if (selection == 23) {
if (cm.getChar().getRw15() >= 20000) {
cm.gainItem(1142078,1);
cm.gainrw15(-20000);
cm.sendOk("#b成功了");
cm.dispose();
} else {
cm.sendOk("#b抱歉，你没足够的修炼点！.");
cm.dispose();
}

}else if (selection == 24) {
if (cm.getChar().getRw15() >= 50000) {
cm.gainItem(1142077,1);
cm.gainrw15(-50000);
cm.sendOk("#b成功了");
cm.dispose();
} else {
cm.sendOk("#b抱歉，你没足够的修炼点！.");
cm.dispose();
}

}else if (selection == 25) {
if (cm.getChar().getRw15() >= 100000) {
cm.gainItem(1142080,1);
cm.gainrw15(-100000);
cm.sendOk("#b成功了");
cm.dispose();
} else {
cm.sendOk("#b抱歉，你没足够的修炼点！.");
cm.dispose();
}






}else if (selection == 26) {
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1)==null){
cm.sendOk("你的装备栏第一格没有装备，不能进行此操作!..");
cm.dispose();
return;
}
if (cm.getChar().getRw15() >= 1600) {
cm.gainrw15(-1600);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setUpgradeSlots((item.getUpgradeSlots() + 1));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
cm.sendOk("#b恭喜你成功拉!快快看你的包裹吧!");
cm.dispose();
}else{
cm.sendOk("#b抱歉，你没足够的修炼点！.");
cm.dispose();
}

}else if (selection == 27) {
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1)==null){
cm.sendOk("你的装备栏第一格没有装备，不能进行此操作!..");
cm.dispose();
return;
}
if (cm.getChar().getRw15() >= 7200) {
cm.gainrw15(-7200);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setUpgradeSlots((item.getUpgradeSlots() + 5));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
cm.sendOk("#b恭喜你成功拉!快快看你的包裹吧!");
cm.dispose();
}else{
cm.sendOk("#b抱歉，你没足够的修炼点！.");
cm.dispose();
}

}else if (selection == 28) {
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1)==null){
cm.sendOk("你的装备栏第一格没有装备，不能进行此操作!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getUpgradeSlots()<= 0){
cm.sendOk("你的装备升级次数不足，不能进行此操作!..");
cm.dispose();
return;
}
if (cm.getChar().getRw15() >= 30000) {
cm.gainrw15(-30000);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setWatk(item.getWatk() + 100);
item.setUpgradeSlots((item.getUpgradeSlots() - 1));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
cm.sendOk("#b恭喜你成功拉!快快看你的包裹吧!");
cm.dispose();
}else{
cm.sendOk("#b抱歉，你没足够的修炼点！.");
cm.dispose();
}

}else if (selection == 29) {
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1)==null){
cm.sendOk("你的装备栏第一格没有装备，不能进行此操作!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getUpgradeSlots()<= 0){
cm.sendOk("你的装备升级次数不足，不能进行此操作!..");
cm.dispose();
return;
}
if (cm.getChar().getRw15() >= 292000) {
cm.gainrw15(-292000);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setWatk(item.getWatk() + 1000);
item.setUpgradeSlots((item.getUpgradeSlots() - 1));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
cm.sendOk("#b恭喜你成功拉!快快看你的包裹吧!");
cm.dispose();
}else{
cm.sendOk("#b抱歉，你没足够的修炼点！.");
cm.dispose();
}




}else if (selection == 30) { 
if (cm.getChar().getRemainingAp() < 3000) { 
cm.sendOk("#b你没有足够的属性点."); 
cm.dispose(); 
} else { 
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - 3000); 
cm.gainItem(1002894,1); 
var statup = new java.util.ArrayList(); 
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp()))); 
cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup)); 
cm.sendOk("#b恭喜你成功拉!快快看你的包裹吧!");
cm.dispose(); 
} 

}else if (selection == 31) { 
if (cm.getChar().getRemainingAp() < 3000) { 
cm.sendOk("#b你没有足够的属性点."); 
cm.dispose(); 
} else { 
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - 3000); 
cm.gainItem(1002895,1); 
var statup = new java.util.ArrayList(); 
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp()))); 
cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup)); 
cm.sendOk("#b恭喜你成功拉!快快看你的包裹吧!");
cm.dispose(); 
} 

}else if (selection == 32) { 
if (cm.getChar().getRemainingAp() < 3000) { 
cm.sendOk("#b你没有足够的属性点."); 
cm.dispose(); 
} else { 
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - 3000); 
cm.gainItem(1002896,1); 
var statup = new java.util.ArrayList(); 
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp()))); 
cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup)); 
cm.sendOk("#b恭喜你成功拉!快快看你的包裹吧!");
cm.dispose(); 
}

}else if (selection == 33) { 
if (cm.getChar().getRemainingAp() < 3000) { 
cm.sendOk("#b你没有足够的属性点."); 
cm.dispose(); 
} else { 
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - 3000); 
cm.gainItem(1002897,1); 
var statup = new java.util.ArrayList(); 
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp()))); 
cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup)); 
cm.sendOk("#b恭喜你成功拉!快快看你的包裹吧!");
cm.dispose(); 
}

}else if (selection == 34) { 
if (cm.getChar().getRemainingAp() < 3000) { 
cm.sendOk("#b你没有足够的属性点."); 
cm.dispose(); 
} else { 
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - 3000); 
cm.gainItem(1002898,1); 
var statup = new java.util.ArrayList(); 
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp()))); 
cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup)); 
cm.sendOk("#b恭喜你成功拉!快快看你的包裹吧!");
cm.dispose(); 
}

}else if (selection == 35) { 
if (cm.getChar().getRemainingAp() < 3000) { 
cm.sendOk("#b你没有足够的属性点."); 
cm.dispose(); 
} else { 
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - 3000); 
cm.gainItem(1002899,1); 
var statup = new java.util.ArrayList(); 
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp()))); 
cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup)); 
cm.sendOk("#b恭喜你成功拉!快快看你的包裹吧!");
cm.dispose(); 
}

}else if (selection == 36) { 
if (cm.getChar().getRemainingAp() < 3000) { 
cm.sendOk("#b你没有足够的属性点."); 
cm.dispose(); 
} else { 
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - 3000); 
cm.gainItem(1002900,1); 
var statup = new java.util.ArrayList(); 
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp()))); 
cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup)); 
cm.sendOk("#b恭喜你成功拉!快快看你的包裹吧!");
cm.dispose(); 
}

}else if (selection == 37) { 
if (cm.getChar().getRemainingAp() < 3000) { 
cm.sendOk("#b你没有足够的属性点."); 
cm.dispose(); 
} else { 
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - 3000); 
cm.gainItem(1002901,1); 
var statup = new java.util.ArrayList(); 
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp()))); 
cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup)); 
cm.sendOk("#b恭喜你成功拉!快快看你的包裹吧!");
cm.dispose(); 
}

}else if (selection == 38) { 
if (cm.getChar().getRemainingAp() < 3000) { 
cm.sendOk("#b你没有足够的属性点."); 
cm.dispose(); 
} else { 
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - 3000); 
cm.gainItem(1002902,1); 
var statup = new java.util.ArrayList(); 
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp()))); 
cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup)); 
cm.sendOk("#b恭喜你成功拉!快快看你的包裹吧!");
cm.dispose();
}


}else if(selection == 39){
if(cm.haveItem(4001126, 200)) {
cm.sendOk("#b兑换成功！")
cm.gainItem(4001126,-200);
cm.gainNX(500);
cm.modifyNX(500, 0);
cm.dispose();
} else {
cm.sendOk("#b对不起,你没有200个#v4001126#！")
cm.dispose();    
}

}else if(selection == 40){
if(cm.haveItem(4001126, 500)) {
cm.sendOk("#b兑换成功！")
cm.gainItem(4001126,-500);
cm.gainNX(1000);
cm.modifyNX(1000, 0);
cm.dispose();
} else {
cm.sendOk("#b对不起,你没有500个#v4001126#！")
cm.dispose();    
}

}else if(selection == 41){
if(cm.haveItem(4001126, 1000)) {
cm.sendOk("#b兑换成功！")
cm.gainItem(4001126,-1000);
cm.gainNX(2000);
cm.modifyNX(2000, 0);
cm.dispose();
} else {
cm.sendOk("#b对不起,你没有1000个#v4001126#！")
cm.dispose();    
}


}else if(selection == 45){
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1)==null){
cm.sendOk("你的装备栏第一格没有装备，不能进行此操作!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getUpgradeSlots()<= 0){
cm.sendOk("你的装备升级次数不足，不能进行此操作!..");
cm.dispose();
return;
}
if (cm.getChar().getRw15() >= 8000) {
cm.gainrw15(-8000);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setStr(item.getStr() + 2000);
item.setDex(item.getDex() + 2000);
item.setInt(item.getInt() + 2000);
item.setLuk(item.getLuk() + 2000);
item.setUpgradeSlots((item.getUpgradeSlots() - 1));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
cm.sendOk("#b恭喜你成功拉!快快看你的包裹吧!");
cm.dispose();
} else {
cm.sendOk("#b对不起,你没有足够的修炼点~")
cm.dispose();    
}


}else if(selection == 46){
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1)==null){
cm.sendOk("你的装备栏第一格没有装备，不能进行此操作!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getUpgradeSlots()<= 0){
cm.sendOk("你的装备升级次数不足，不能进行此操作!..");
cm.dispose();
return;
}
if (cm.getChar().getRw15() >= 30000) {
cm.gainrw15(-30000);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setStr(item.getStr() + 5000);
item.setDex(item.getDex() + 5000);
item.setInt(item.getInt() + 5000);
item.setLuk(item.getLuk() + 5000);
item.setUpgradeSlots((item.getUpgradeSlots() - 1));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
cm.sendOk("#b恭喜你成功拉!快快看你的包裹吧!");
cm.dispose();
} else {
cm.sendOk("#b对不起,你没有足够的修炼点~")
cm.dispose();   
}


}else if(selection == 47){
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1)==null){
cm.sendOk("你的装备栏第一格没有装备，不能进行此操作!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getUpgradeSlots()<= 0){
cm.sendOk("你的装备升级次数不足，不能进行此操作!..");
cm.dispose();
return;
}
if (cm.getChar().getRw15() >= 60000) {
cm.gainrw15(-60000);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setStr(item.getStr() + 10000);
item.setDex(item.getDex() + 10000);
item.setInt(item.getInt() + 10000);
item.setLuk(item.getLuk() + 10000);
item.setUpgradeSlots((item.getUpgradeSlots() - 1));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
cm.sendOk("#b恭喜你成功拉!快快看你的包裹吧!");
cm.dispose();
} else {
cm.sendOk("#b对不起,你没有足够的修炼点~")
cm.dispose();     
}


}else if(selection == 48){
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1)==null){
cm.sendOk("你的装备栏第一格没有装备，不能进行此操作!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getUpgradeSlots()<= 0){
cm.sendOk("你的装备升级次数不足，不能进行此操作!..");
cm.dispose();
return;
}
if (cm.getChar().getRw15() >= 170000) {
cm.gainrw15(-170000);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setStr(item.getStr() + 30000);
item.setDex(item.getDex() + 30000);
item.setInt(item.getInt() + 30000);
item.setLuk(item.getLuk() + 30000);
item.setUpgradeSlots((item.getUpgradeSlots() - 1));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
cm.sendOk("#b恭喜你成功拉!快快看你的包裹吧!");
cm.dispose();
} else {
cm.sendOk("#b对不起,你没有足够的修炼点~")
cm.dispose();    
}

}else if(selection == 49){
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1)==null){
cm.sendOk("你的装备栏第一格没有装备，不能进行此操作!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getUpgradeSlots()<= 0){
cm.sendOk("你的装备升级次数不足，不能进行此操作!..");
cm.dispose();
return;
}
if (cm.getChar().getRw15() >= 8000) {
cm.gainrw15(-8000);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setStr(item.getStr() + 1000);
item.setDex(item.getDex() + 1000);
item.setInt(item.getInt() + 1000);
item.setLuk(item.getLuk() + 1000);
item.setUpgradeSlots((item.getUpgradeSlots() - 1));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
cm.sendOk("#b恭喜你成功拉!快快看你的包裹吧!");
cm.dispose();
} else {
cm.sendOk("#b对不起,你没有足够的修炼点~")
cm.dispose();    
}

}else if(selection == 50){
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1)==null){
cm.sendOk("你的装备栏第一格没有装备，不能进行此操作!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getUpgradeSlots()<= 0){
cm.sendOk("你的装备升级次数不足，不能进行此操作!..");
cm.dispose();
return;
}
if (cm.getChar().getRw15() >= 4200) {
cm.gainrw15(-4200);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setStr(item.getStr() + 500);
item.setDex(item.getDex() + 500);
item.setInt(item.getInt() + 500);
item.setLuk(item.getLuk() + 500);
item.setUpgradeSlots((item.getUpgradeSlots() - 1));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
cm.sendOk("#b恭喜你成功拉!快快看你的包裹吧!");
cm.dispose();
} else {
cm.sendOk("#b对不起,你没有足够的修炼点~")
cm.dispose();    
}

}else if(selection == 51){
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1)==null){
cm.sendOk("你的装备栏第一格没有装备，不能进行此操作!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getUpgradeSlots()<= 0){
cm.sendOk("你的装备升级次数不足，不能进行此操作!..");
cm.dispose();
return;
}
if (cm.getChar().getRw15() >= 900) {
cm.gainrw15(-900);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setStr(item.getStr() + 100);
item.setDex(item.getDex() + 100);
item.setInt(item.getInt() + 100);
item.setLuk(item.getLuk() + 100);
item.setUpgradeSlots((item.getUpgradeSlots() - 1));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
cm.sendOk("#b恭喜你成功拉!快快看你的包裹吧!");
cm.dispose();
} else {
cm.sendOk("#b对不起,你没有足够的修炼点~")
cm.dispose();    
}




}else if(selection == 42){
if(cm.haveItem(4001126, 5000)) {
cm.sendOk("#b兑换成功！")
cm.gainItem(4001126,-5000);
cm.gainNX(10000);
cm.modifyNX(10000, 0);
cm.dispose();
} else {
cm.sendOk("#b对不起,你没有5000个#v4001126#！")
cm.dispose();    
}

}else if(selection == 43){
if(cm.haveItem(4001126, 1000)) {
cm.sendOk("#b兑换成功！")
cm.gainItem(4001126,-1000);
cm.gainItem(4031454, 1); 
cm.dispose();
} else {
cm.sendOk("#b对不起,你没有1000个#v4001126#！")
cm.dispose();    
}

}else if(selection == 44){
if(cm.haveItem(4001126, 2000)) {
cm.sendOk("#b兑换成功！")
cm.gainItem(4001126,-2000);
cm.gainItem(4002002, 1); 
cm.dispose();
} else {
cm.sendOk("#b对不起,你没有2000个#v4001126#！")
cm.dispose();    
}

}else if(selection == 500){
if(cm.haveItem(4031549, 8)) {
cm.sendOk("#b兑换成功！\r\n#b剩余元宝:#r" + cm.getChar().getzb() + "#k#b 块")
cm.gainItem(4031549,-8);
cm.setzb(1); 
cm.dispose();
} else {
cm.sendOk("#b对不起,你没有8个#v4031549#！")
cm.dispose();    
}

}else if(selection == 510){
if(cm.haveItem(4031344, 8)) {
cm.sendOk("#b兑换成功！#b修炼:#r" + cm.getChar().getRw15() + "#k#b 点")
cm.gainItem(4031344,-8);
cm.gainrw15(980); 
cm.dispose();
} else {
cm.sendOk("#b对不起,你没有8个#v4031344#！")
cm.dispose();    
}

}else if(selection == 520){
if(cm.haveItem(4031549, 15)) {
cm.sendOk("#b兑换成功！\r\n#b剩余元宝:#r" + cm.getChar().getzb() + "#k#b 块")
cm.gainItem(4031549,-15);
cm.setzb(2); 
cm.dispose();
} else {
cm.sendOk("#b对不起,你没有15个#v4031549#！")
cm.dispose();    
}

}else if(selection == 530){
if(cm.haveItem(4031344, 15)) {
cm.sendOk("#b兑换成功！#b修炼:#r" + cm.getChar().getRw15() + "#k#b 点")
cm.gainItem(4031344,-15);
cm.gainrw15(2000); 
cm.dispose();
} else {
cm.sendOk("#b对不起,你没有15个#v4031344#！")
cm.dispose();    
}

}else if(selection == 540){
if(cm.haveItem(4031549, 28)) {
cm.sendOk("#b兑换成功！\r\n#b剩余元宝:#r" + cm.getChar().getzb() + "#k#b 块")
cm.gainItem(4031549,-28);
cm.setzb(3); 
cm.dispose();
} else {
cm.sendOk("#b对不起,你没有28个#v4031549#！")
cm.dispose();    
}

}else if(selection == 550){
if(cm.haveItem(4031344, 28)) {
cm.sendOk("#b兑换成功！#b修炼:#r" + cm.getChar().getRw15() + "#k#b 点")
cm.gainItem(4031344,-28);
cm.gainrw15(4000); 
cm.dispose();
} else {
cm.sendOk("#b对不起,你没有28个#v4031344#！")
cm.dispose();    
}

















}
}
}