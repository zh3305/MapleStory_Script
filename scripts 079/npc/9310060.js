importPackage(net.sf.odinms.client);
var status = 0;
var ttt ="#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//美化1
var ttt2 ="#fUI/UIWindow/Quest/icon6/7#";//"+ttt2+"//美化2
var ttt3 ="#fUI/UIWindow/Quest/icon3/6#";//"+ttt+"//美化圆
var ttt4 ="#fUI/UIWindow/Quest/icon5/1#";//"+ttt2+"//美化New
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
var textz = "#r"+cm.mxdmz()+"冒险岛#k.点卷商场[出售各种新点装，在商城中是买不到的]";

textz += "#b#L1#"+ttt3+"点卷商场系统[#r衣服·裤子类]"+ttt4+"#l\r\n";

textz += "#b#L2#"+ttt3+"点卷商场系统[#r披风·帽子类]"+ttt4+"#l\r\n";

textz += "#b#L3#"+ttt3+"点卷商场系统[#r手套·脸饰类]"+ttt4+"#l\r\n";

textz += "#b#L4#"+ttt3+"点卷商场系统[#r武器·盾牌类]"+ttt4+"#l";


cm.sendSimple (textz);    
				
}else if (status == 1) {

var viplevel = cm.getChar().getVip();
if(selection == 1){
cm.openNpc( 1202004);


}else if(selection == 2){
cm.openNpc( 1202005);


}else if(selection == 3){
cm.openNpc( 1202007);


}else if(selection == 4){
cm.openNpc( 1202001);


}else if(selection == 44){
cm.openNpc( 9310060);


}else if(selection == 5){
cm.openShop( 223);
cm.dispose();

}else if(selection == 6){
cm.openShop( 5004);
cm.dispose();

}else if(selection == 7){
cm.openShop( 904);
cm.dispose();

}else if (selection == 8) {
cm.openNpc(9040008);




}else if (selection == 11) {
cm.sendSimple("#b\r\n#L28#"+ttt+" 购买110级战士装备[#r10万点卷#b]#l  \r\n#L29#"+ttt+" 购买110级飞侠装备[#r10万点卷#b]#l  \r\n#L30#"+ttt+" 购买110级弓手装备[#r10万点卷#b]#l  \r\n#L31#"+ttt+" 购买110级法师装备[#r10万点卷#b]#l");

}else if (selection == 12) {
if (cm.getPlayer().getNX() >= 2000) {
cm.gainNX(-2000);         
cm.gainItem(4031454, 1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose();
} else {
cm.sendOk("#b你没有足够的点卷，请联系客服充值."); 
cm.dispose();
}


} else if (selection == 13) {
if (cm.getPlayer().getNX() >= 5000 ) {
if(cm.haveItem(5211047,1,true,false)){
cm.sendOk("#b等你的双倍卡到期在来买吧！");
cm.dispose();
}else{
cm.gainNX(-5000);     
cm.gainItem(5211047, 1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose();
}
} else {
cm.sendOk("#b你没有足够的点卷，请联系客服充值."); 
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
toDrop.setStr(5000);
toDrop.setDex(5000);
toDrop.setInt(5000);
toDrop.setLuk(5000);
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
if (cm.getPlayer().getNX() >= 10000 ) {
cm.gainNX(-10000);
cm.gainItem(2040807,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的点卷，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 17) { 
if (cm.getPlayer().getNX() >= 10000 ) { 
cm.gainNX(-10000); 
cm.gainItem(2044703,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的点卷，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 18) { 
if (cm.getPlayer().getNX() >= 10000 ) { 
cm.gainNX(-10000); 
cm.gainItem(2044303,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的点卷，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 19) { 
if (cm.getPlayer().getNX() >= 10000 ) { 
cm.gainNX(-10000); 
cm.gainItem(2044003,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的点卷，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 20) { 
if (cm.getPlayer().getNX() >= 10000 ) { 
cm.gainNX(-10000); 
cm.gainItem(2043003,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的点卷，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 21) { 
if (cm.getPlayer().getNX() >= 10000 ) { 
cm.gainNX(-10000); 
cm.gainItem(2044403,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的点卷，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 22) { 
if (cm.getPlayer().getNX() >= 10000 ) { 
cm.gainNX(-10000); 
cm.gainItem(2043703,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的点卷，请联系客服充值."); 
cm.dispose();   
}



}else if  (selection == 23) { 
if (cm.getPlayer().getNX() >= 10000 ) { 
cm.gainNX(-10000); 
cm.gainItem(2043803,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的点卷，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 24) { 
if (cm.getPlayer().getNX() >= 10000 ) { 
cm.gainNX(-10000); 
cm.gainItem(2040303,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的点卷，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 25) { 
if (cm.getPlayer().getNX() >= 10000 ) { 
cm.gainNX(-10000); 
cm.gainItem(2040710,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的点卷，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 26) { 
if (cm.getPlayer().getNX() >= 10000 ) { 
cm.gainNX(-10000); 
cm.gainItem(2043303,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的点卷，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 27) { 
if (cm.getPlayer().getNX() >= 10000 ) { 
cm.gainNX(-10000); 
cm.gainItem(2044503,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的点卷，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 28) { 
if (cm.getPlayer().getNX() >= 100000 ) { 
cm.gainNX(-100000); 
cm.gainItem(1002551,1); 
cm.gainItem(1052075,1);
cm.gainItem(1072273,1);
cm.gainItem(1082168,1);
cm.gainItem(1402036,1);
cm.gainItem(1432038,1);
cm.gainItem(1032030,1);
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的点卷，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 29) { 
if (cm.getPlayer().getNX() >= 100000 ) { 
cm.gainNX(-100000); 
cm.gainItem(1002550,1); 
cm.gainItem(1052072,1);
cm.gainItem(1072272,1);
cm.gainItem(1082167,1);
cm.gainItem(1092049,1);
cm.gainItem(1332050,1);
cm.gainItem(1472052,1);
cm.gainItem(1032030,1);
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的点卷，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 30) { 
if (cm.getPlayer().getNX() >= 100000 ) { 
cm.gainNX(-100000); 
cm.gainItem(1002547,1); 
cm.gainItem(1052071,1);
cm.gainItem(1072269,1);
cm.gainItem(1082163,1);
cm.gainItem(1452044,1);
cm.gainItem(1462039,1);
cm.gainItem(1032030,1);
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的点卷，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 31) { 
if (cm.getPlayer().getNX() >= 100000 ) { 
cm.gainNX(-100000); 
cm.gainItem(1002773,1); 
cm.gainItem(1052076,1);
cm.gainItem(1082164,1);
cm.gainItem(1072268,1);
cm.gainItem(1382037,1);
cm.gainItem(1032030,1);
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的点卷，请联系客服充值."); 
cm.dispose();   
}









					
}
}
}

