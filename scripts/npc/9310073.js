importPackage(net.sf.odinms.client);
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
var vipstr = "●5元会员①";					
}else if(cm.getChar().getVip() == 2){
var vipstr = "●5元会员②";					
}else if(cm.getChar().getVip() == 3){
var vipstr = "●5元会员③";
}else if(cm.getChar().getVip() == 4){
var vipstr = "●5元会员④";	
}else if(cm.getChar().getVip() == 5){
var vipstr = "●5元会员⑤";					
}else{
var vipstr = "●5元会员⑥";					
}
var textz = ""+cm.mxdmz()+"冒险岛,查看飞升奖励.\r\n#r注#k：80转和70转时可领取10元宝，再去打几个Boss去换元宝，就可以买到#r5元会员②！#k\r\n#r注#k：此Npc无法领取飞升奖励，只能查看.奖励可累计.\r\n   #b当前转生次数:#r" + cm.getChar().getReborns() + "#k#b 次\r\n"+ttt+"#b飞升[#r1 0转#b] >>>> 可领取[#r10万点卷#b]#l\r\n"+ttt+"#b飞升[#r2 0转#b] >>>> 可领取[#r+50扎昆头盔#b]#l\r\n"+ttt+"#b飞升[#r3 0转#b] >>>> 可领取[#r+5 0黑龙项链#b]#l\r\n"+ttt+"#b飞升[#r4 0转#b] >>>> 可领取[#r永恒兑换卷#b]#l\r\n"+ttt+"#b飞升[#r5 0转#b] >>>> 可领取[#r祝福卷轴10张#b]#l\r\n"+ttt+"#b飞升[#r6 0转#b] >>>> 可领取[#r+50勋章一枚#b]#l\r\n"+ttt+"#b飞升[#r7 0转#b] >>>> 可领取[#r10个元宝#b]#l\r\n"+ttt+"#b飞升[#r8 0转#b] >>>> 可领取[#r10个元宝#b]#l\r\n"+ttt+"#b飞升[#r100转#b] >>>> 可领取[#r+100暴力熊帽#b]#l\r\n"+ttt+"#b飞升[#r200转#b] >>>> 可领取[#r+200心疤狮帽#b]#l\r\n"+ttt+"#b飞升[#r300转#b] >>>> 可领取[#r100%必成10张#b]#l\r\n"+ttt+"#b飞升[#r500转#b] >>>> 可领取[#r+300戒指一个#b]#l\r\n"+ttt+"#b飞升[#r600转#b] >>>> 可领取[#r+400戒指一个#b]#l\r\n"+ttt+"#b飞升[#r700转#b] >>>> 可领取[#r+500戒指一个#b]#l\r\n"+ttt+"#b飞升[#r888转#b] >>>> 可领取[#r+888戒指一个#b]#l\r\n#L6#前去领取飞升奖励#l"

cm.sendSimple (textz);    
				
}else if (status == 1) {

var viplevel = cm.getChar().getVip();

if (selection == 1) {
if(cm.getChar().getVip() >= 1){
cm.warp(910000016);
cm.dispose();
}else{
cm.sendOk("#b您不是●5元会员①,无法进入此地图");
cm.dispose();
} 

}else if (selection == 2) {
if(cm.getChar().getVip() >= 1){
cm.warp(910000016);
cm.dispose();
}else{
cm.sendOk("#b您不是●5元会员①,无法进入此地图");
cm.dispose();
} 


}else if (selection == 5) {
if(cm.getChar().getVip() >= 2){
cm.openShop (5003);
cm.dispose();
}else{
cm.sendOk("#b你不是●5元会员②，所以什么都看不到...");
cm.dispose();
} 


}else if (selection == 4) {
if(cm.getChar().getVip() >= 2){
cm.sendSimple ("\r\n		#L6#"+ttt+"#d购买法师装备#l\r\n		#d#L7#"+ttt+"购买战士装备#l\r\n		#L8#"+ttt+"购买弓手装备#l\r\n		#L9#"+ttt+"购买飞侠装备#l");
}else{
cm.sendOk("#b你不是●5元会员②，所以什么都看不到...");
cm.dispose();
}

}else if (selection == 3) {
if(cm.getChar().getVip() >= 1){
cm.openNpc( 2002000);
}else{
cm.sendOk("#b你不是●5元会员①，所以什么都看不到...");
cm.dispose();
}



























}else if(selection == 2){
cm.openShop( 201);
cm.dispose();

}else if(selection == 3){
cm.openShop( 10008);
cm.dispose();

}else if(selection == 4){
cm.openShop( 10009);
cm.dispose();

}else if(selection == 5){
cm.openShop( 223);
cm.dispose();

}else if(selection == 6){
cm.openNpc (9100000);


}else if(selection == 7){
cm.openShop( 904);
cm.dispose();

}else if (selection == 8) {
if (cm.getMeso() >= 500000000) {
cm.gainMeso(-500000000);                
cm.gainItem(4031454, 1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose();
} else {
cm.sendOk("#b钱不够呐,童鞋."); 
cm.dispose();
}

}else if (selection == 9) {
if(cm.getzb() >= 5){
if(cm.haveItem(4001129,1,true,false)){
cm.sendOk("#b你已经有一张PK双倍伤害卡了！");
cm.dispose();
}else{
cm.setzb(-5);          
cm.gainItem(4001129, 1); 
cm.sendOk("#b恭喜你成功使用5元宝购买一张PK双倍伤害卡."); 
cm.dispose();
}
} else {
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();
}

}else if (selection == 10) {
if(cm.getzb() >= 10){
if(cm.haveItem(4001129,1,true,false)){
cm.sendOk("#b你已经有一张PK四倍伤害卡了！");
cm.dispose();
}else{
cm.setzb(-10);          
cm.gainItem(4001129, 1); 
cm.sendOk("#b恭喜你成功使用10元宝购买一张PK四倍伤害卡."); 
cm.dispose();
}
} else {
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();
}

}else if (selection == 11) {
if(cm.getzb() >= 10){
cm.setzb(-10);          
cm.gainItem(4001129, 5); 
cm.sendOk("#b恭喜你成功使用10元宝购买五张木妖邮票."); 
cm.dispose();
} else {
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();
}

}else if (selection == 12) {
if(cm.getzb() >= 10){
cm.setzb(-10);          
cm.gainItem(4031454, 10); 
cm.sendOk("#b恭喜你成功使用10元宝购买十个圣杯."); 
cm.dispose();
} else {
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();
}

} else if (selection == 14) { 
if (cm.getzb() >= 50) {
if(cm.haveItem(1122017,1,true,false)){
cm.sendOk("#b你已经有一个精灵吊坠了！");
cm.dispose();
}else{
cm.setzb(-50);
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1122017); //获得装备的类形
var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // 生成一个Equip类
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 30 *3 *60); //时间
toDrop.setExpiration(temptime); //给装备时间
toDrop.setStr(200);
toDrop.setDex(200);
toDrop.setInt(200);
toDrop.setLuk(200);
cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //刷新背包		
cm.getChar().saveToDB(true);
cm.sendOk("#b成功花了50元宝购买到 60天,属性+200权精灵吊坠！");
cm.dispose();
}
} else {  
cm.sendOk("#b你的元宝不足50个 无法购买 60天,属性+200权精灵吊坠!");
cm.dispose();
}


}else if  (selection == 13) { 
cm.sendSimple("#b\r\n#L16#"+ttt+" 购买手套攻击卷轴 #l  #L17#"+ttt+" 购买拳套攻击卷轴 #l\r\n#L18#"+ttt+" 购买战枪攻击卷轴 #l  #L19#"+ttt+" 购买双手剑攻卷轴 #l\r\n#L20#"+ttt+" 购买单手剑攻卷轴 #l  #L21#"+ttt+" 购买矛器攻击卷轴 #l\r\n#L22#"+ttt+" 购买短杖魔力卷轴 #l  #L23#"+ttt+" 购买长杖魔力卷轴 #l\r\n#L24#"+ttt+" 购买耳环智力卷轴 #l  #L25#"+ttt+" 购买鞋子跳跃卷轴 #l\r\n#L26#"+ttt+" 购买短剑攻击卷轴 #l  #L27#"+ttt+" 购买弓箭攻击卷轴 #l");
}
}else if  (selection == 16) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2040807,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 17) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2044703,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 18) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2044303,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 19) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2044003,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 20) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2043003,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 21) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2044403,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 22) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2043703,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}



}else if  (selection == 23) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2043803,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 24) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2040303,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 25) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2040710,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 26) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2043303,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 27) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2044503,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

} else if (selection == 6) {
cm.openNpc (9100000);
cm.dispose();

} else if (selection == 7) {
cm.openShop (2000);
cm.dispose();

} else if (selection == 8) {
cm.openShop (2002);
cm.dispose();

} else if (selection == 9) {
cm.openShop (2003);
cm.dispose();










}
}
}