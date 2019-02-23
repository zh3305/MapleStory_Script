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
var vipstr = ""+ttt6+" 5元会员①";					
}else if(cm.getChar().getVip() == 2){
var vipstr = ""+ttt6+" 5元会员②";					
}else if(cm.getChar().getVip() == 3){
var vipstr = ""+ttt6+" 5元会员③";
}else if(cm.getChar().getVip() == 4){
var vipstr = ""+ttt6+" 5元会员④";	
}else if(cm.getChar().getVip() == 5){
var vipstr = ""+ttt6+" 5元会员⑤";					
}else{
var vipstr = ""+ttt6+" 5元会员⑥";					
}
var textz = "#r"+cm.mxdmz()+"冒险岛#k,公告系统.#b  \r\n";
//textz += "#r修练点兑换#r"+ttt6+"#b#l\r\n";

textz += "#L1#"+ttt3+"查看#e >>>> #n个 人 信 息#r["+ttt4+"]#b#l\r\n";

textz += "#L2#"+ttt3+"查看#e >>>> #n破 攻 介 绍#r["+ttt4+"]#b#l\r\n";

textz += "#L3#"+ttt3+"查看#e >>>> #n活 动 介 绍#r["+ttt4+"]#b#l\r\n";

textz += "#L4#"+ttt3+"查看#e >>>> #n特 色 介 绍#r["+ttt4+"]#b#l\r\n";

textz += "#L5#"+ttt3+"查看#e >>>> #n装 备 出 处#r["+ttt4+"]#b#l\r\n";

textz += "#L6#"+ttt3+"秘籍#e >>>> #n新 手 攻 略#r[hot]#l\r\n";

//textz += "#L7#"+ttt3+"使用枫叶换圣杯邮票#l\r\n";

//textz += "#L49#"+ttt2+"使用Boss掉落物品#r[火热][可交换修炼点或元宝]#l\r\n";


cm.sendSimple (textz);    
				
}else if (status == 1) {

var viplevel = cm.getChar().getVip();

if (selection == 1) {
cm.sendOk("#d====================================================\r\n                      #b个 人 信 息\r\n#d====================================================\r\n ID：" + cm.getChar().getId() +"\r\n 等级：" + cm.getChar().getLevel() + "级\r\n 转身次数：" + cm.getChar().getReborns() + "\r\n VIP等级：" + viplevel + "\r\n 修炼点：" + cm.getChar().getRw15() + "\r\n 金钱数量：" + cm.getMeso() + "金币\r\n 元宝数量：" + cm.getzb() + "个\r\n 点券数量：" + cm.getChar().getCSPoints(0) + "点\r\n 抵用券数量：" + cm.getChar().getCSPoints(1) + "点\r\n====================================================\r\n 力量：" + cm.getChar().getStr() + "  敏捷：" + cm.getChar().getDex() + "  智力：" + cm.getChar().getInt() + "  运气：" + cm.getChar().getLuk() + "\r\n 人气度：" + cm.getChar().getFame() + "点\r\n 最大血量：" +  cm.getChar().getMaxHp() + "     最大蓝量：" + cm.getChar().getMaxMp() + "\r\n 当前血量：" + cm.getChar().getHp() + "     当前蓝量：" + cm.getChar().getMp() + "\r\n====================服务器倍率信息==================\r\n 服务器名称："+cm.mxdmz()+"冒险岛\r\n 金钱暴率：100 倍\r\n 经验倍率：50000倍\r\n 物品暴率：50 倍\r\n BOSS暴率：30 倍\r\n 宠物经验倍率：20 倍\r\n  " );
cm.dispose();

}else if (selection == 2) {
cm.sendOk("#r"+cm.mxdmz()+"冒险岛#k,可无限破攻,破攻的计算是按照你的装备属性，VIP等级，转身次数，个人等级来判断.破攻绝对无上限，即使是普通玩家只要有好装备，转身次数多照样是牛人！\r\n\r\n#b转身才是王道,装备才是近道~");
cm.dispose();

}else if (selection == 49) {
cm.sendSimple("#r"+cm.mxdmz()+"冒险岛#k,下面是使用Boss掉落物品兑换物品,击败Boss所获得的#v4031549##v4031344#可以来交换#r修炼点#k或#r元宝#k~\r\n#r[Hot]#k本NPC专为普通玩家打造！\r\n#L500#使用8个#v4031549#交换1元宝\r\n#L510#使用8个#v4031344#交换980修炼点\r\n#L520#使用15个#v4031549#交换2元宝\r\n#L530#使用15个#v4031344#交换2000修炼点\r\n#L540#使用28个#v4031549#交换3元宝\r\n#L550#使用28个#v4031344#交换4000修炼点");

}else if (selection == 4) {
cm.sendOk("#r"+cm.mxdmz()+"冒险岛#k,特色介绍.\r\n#d[特色一]#k转身到达一定次数可领取奖励\r\n#d[特色二]#k本服完美破攻，破攻不是定值，无上限\r\n#d[特色三]#k完美修复结婚，真实结婚，够浪漫\r\n#d[特色四]#k装备强化系统,方法丰富，武器更强大\r\n#d[特色五]#k增加各类自创武器，官方新物品，绝对不比其他服差\r\n#d[特色六]#k大量副本满足玩家，激情，刺激\r\n#d[特色七]#k挑战各大BOSS爆#r#z4031549##k和#r#z4031344##k可到自由市场兑换元宝或修炼点\r\n#d[特色八]#k新人礼包超丰富,七彩GM帽(全属+2000)，炫酷三刀流  以及各类新点装\r\n#d[特色九]#k新发型武器坐骑本服会及时更新，定期举行活动\r\n#b以上九大特色，难以抗拒，快加入我们把~~#k");
cm.dispose();

}else if (selection == 5) {
cm.sendOk("#r"+cm.mxdmz()+"冒险岛#k,装备出处.\r\n#d地狱装备#k：1-70转的玩家挑战地狱大公副本可获得大量金币以及地狱武器,适合初阶玩家挑战\r\n#d绯红装备#k：挑战绯红Boss有几率爆出绯红装备,适合中阶玩家挑战\r\n#d永恒装备#k：购买VIP可换取永恒防具,收集地狱武器可合成永恒武器,挑战绯红Boss收集证明可兑换宝箱,找废都的达叔开启宝箱有几率获得,参加抽奖也可获得永恒装备,挑战PB可获得永恒,适合高阶玩家挑战\r\n#d元宝修炼#k：#b<<元宝>>#k可通过充值获得,可通过挑战Boss,获得掉落物品来交换元宝,可通过赌博获得元宝\r\n#b<<修炼>>#k点可通过用元宝购买获得,在线挂机可获得,可通过挑战Boss,获得掉落物品来交换修炼点,目前尚不支持修炼点赌博,请玩家细心等待");
cm.dispose();


}else if (selection == 6) {
cm.sendOk("欢迎来到#r"+cm.mxdmz()+"冒险岛,新手攻略.\r\n#k1.转身是一个很好的选择,转身的奖励非常丰富,而且转身次数到达 #r70#k 和 #r80#k 次时都可获得 #r20#k 元宝,再去打几个Boss拿红包来换取元宝凑足 #r30#k 元宝就可以升级为强大的 #dVIP2#k 玩家.\r\n\r\n2.记得每天晚上8点来参加 #r疯狂挤奶活动#k ,轻轻松松就可以获得修炼点.修炼的用处可以和元宝匹配哦.\r\n\r\n3.想获得高级物品装备的玩家可以通过 #r任务#k , #r击败Boss#k , #r回答问题#k 等等,  #r抽奖赌博#k 也是新手玩家的捷径之路.当然每晚GM也会登陆游戏,幸运的玩家也会获得极品道具,甚至是未上架的 #r神器 #k .");
cm.dispose();


}else if (selection == 7) {
cm.sendSimple("#r5元冒险岛#k,下面是使用枫叶兑换圣杯邮票功能,枫叶主要获得途径,任何怪物都有爆.\r\n#L43##b·我要使用1000个枫叶兑换[#r飞升道具#b]·#l\r\n#L44##b·我要使用2000个枫叶兑换[#r木妖邮票#b]#l");

}else if (selection == 3) {
cm.sendOk("#r5元冒险岛#k,活动介绍.\r\n#d早上7点-12点整#k，玩家可参加跳跳活动.\r\n#d下午1点-7 点整#k，玩家可挑战各大BOSS或副本.\r\n#d晚上8点-10点整#k，管理员会随机选取时间上线举办特色活动，奖励绝对是你想不到的");
cm.dispose();
}

}else if (selection == 10) {
if (cm.getChar().getRw15() >= 800) {
cm.gainItem(4002002,1);
cm.gainrw15(-800);
cm.sendOk("#b成功了");
cm.dispose();
} else {
cm.sendOk("#b抱歉，你没足够的修炼点！.");
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
cm.gainItem(1142003,1);
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