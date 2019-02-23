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
var textz = "#r"+cm.mxdmz()+"冒险岛#k.以下是你的现状：\r\n#b会员等级:#r"+vipstr+"  #b剩余元宝:#r" + cm.getChar().getzb() + "#k#b 块  \r\n#b转生:#r" + cm.getChar().getReborns() + "#k#b 次  #b修炼:#r" + cm.getChar().getRw15() + "#k#b 点 等级：#r" + cm.getChar().getLevel() + "#b级\r\n ";

textz += "#L1#"+ttt+" 药水杂货商店 >>>> [冲级必备] #l\r\n ";

textz += "#L2#"+ttt+" 新人武器商店 >>>> [新人必须] #l\r\n ";

textz += "#L3#"+ttt+" 装备卷轴商店 >>>> [强者店铺] #l\r\n ";

//textz += "#L4#"+ttt+" 卷轴10% 商店 #l\r\n";

textz += "#L5#"+ttt+" 冲级武器商店 >>>> [冲级必备]#l\r\n ";

textz += "#L6#"+ttt+" 全新骑宠商店 >>>> [娱乐必备]#l\r\n\r\n ";

//textz += "#L7#"+ttt+" 宠物食品商店 #l ";

//textz += "#L8#"+ttt2+" 副本任务系统 #l\r\n\r\n";

//textz += "#b#L33#"+ttt3+"使用 <<喇叭喊话>> [VIP①以上权利]#l\r\n ";

textz += "#b#L12#"+ttt3+"购买一个飞升道具 #r[需要2,000点卷]#b"+ttt4+"#l\r\n ";

//textz += "#b#L13#"+ttt3+"3小时双倍经验卡#r[需要5,000点卷]#b"+ttt4+"#l\r\n ";

textz += "#b#L44#"+ttt3+"进入点卷商场系统#r [全新 092 点装]"+ttt4+"#l";


cm.sendSimple (textz);    
				
}else if (status == 1) {

var viplevel = cm.getChar().getVip();
if(selection == 1){
cm.openShop( 603);
cm.dispose();

}else if(selection == 2){
cm.openShop( 201);
cm.dispose();

}else if(selection == 3){
cm.openNpc( 2112013);

}else if(selection == 4){
cm.openShop( 10009);
cm.dispose();

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
cm.openNpc(9330092);




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

}else if  (selection == 33) { 
cm.openNpc(2040040);


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

