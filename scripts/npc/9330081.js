importPackage(net.sf.odinms.client);
var status = 0;
var ttt ="#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//美化1
var ttt2 ="#fUI/UIWindow/Quest/icon6/7#";//"+ttt2+"//美化2
var ttt3 ="#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//美化圆
var ttt4 ="#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//美化New
var ttt5 ="#fUI/UIWindow/Quest/icon0#";//"+ttt5+"//美化!
var ttt6 ="#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//美化会员
var ttt7 ="#fUI/UIWindow/Quest/basic#";//"+ttt7+"//美化免费会员

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
var textz = ""+cm.mxdmz()+"冒险岛,会员介绍.会员权利可叠加.#v4002001#可换10E冒险币，#v4032226#抽奖，#v4031579#换取永恒装备，#v4031250#换取坐骑椅子，#v4001003#换取必成卷.\r\n"+ttt+""+ttt+"#r5元会员①#k "+ttt7+"\r\n购买可获得10W点卷，1张#v4002001#，1000修炼点，vip勋章(全属+500)，精灵吊坠(全属+100)，100属性点，5个#v4032226#，1个#v4031579#，vip①专属升级地图，免费换089发型.\r\n"+ttt+""+ttt+"#r5元会员②#b >>>> #r30元宝#k\r\n购买可获得100W点卷，3张#v4002001#，5000修炼点，vip勋章(全属+1000)，精灵吊坠(全属+300)，1000属性点，10张#v4001003#，5个#v4032226#，2张#v4031250#，2个#v4031579#，vip②专属升级地图，vip特权商店，PK2倍伤害.\r\n\r\n"+ttt+""+ttt+"#r5元会员③#b >>>> #r70元宝#k\r\n购买可获得300W点卷，5张#v4002001#，10000修炼点，vip勋章(全属+1500)，精灵吊坠(全属+600)，3000属性点，15张#v4001003#，10个#v4032226#，3张#v4031250#，3个#v4031579#，vip③专属升级地图，vip特权商店，PK2倍伤害.\r\n"+ttt+""+ttt+"#r5元会员④#b >>>> #r120元宝#k\r\n购买可获得400W点卷，8张#v4002001#，20000修炼点，vip勋章(全属+2000)，精灵吊坠(全属+1000)，4000属性点，20张#v4001003#，15个#v4032226#，5张#v4031250#，4个#v4031579#，vip④专属升级地图，vip特权商店，PK3倍伤害.\r\n"+ttt+""+ttt+"#r5元会员⑤#b >>>> #r180元宝#k\r\n购买可获得500W点卷，12张#v4002001#，30000修炼点，vip勋章(全属+2500)，精灵吊坠(全属+1200)，5000属性点，25张#v4001003#，20个#v4032226#，6张#v4031250#，5个#v4031579#，vip⑤专属升级地图，vip特权商店，PK3倍伤害.\r\n"+ttt+""+ttt+"#r5元会员⑥#b >>>> #r240元宝#k\r\n购买可获得600W点卷，15张#v4002001#，40000修炼点，vip勋章(全属+3000)，精灵吊坠(全属+1500)，6000属性点，30张#v4001003#，30个#v4032226#，7张#v4031250#，6个#v4031579#，vip⑥专属升级地图，vip特权商店，PK4倍伤害.\r\n"+ttt+""+ttt+"#b5元会员工资 \r\n5元会员①  1E冒险币  2000点卷\r\n5元会员②  3E冒险币  5000点卷  1元宝\r\n5元会员③  5E冒险币  8000点卷  2元宝\r\n5元会员④  8E冒险币  10000点卷  3元宝\r\n5元会员⑤  12E冒险币 15000点卷  4元宝\r\n5元会员⑥  15E冒险币 20000点卷  5元宝"

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
if(cm.getChar().getVip() >= 2){
cm.warp(910000017);
cm.dispose();
}else{
cm.sendOk("#b您不是●5元会员②,无法进入此地图");
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
cm.openShop( 904);
cm.dispose();

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
cm.openShop (2001);
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