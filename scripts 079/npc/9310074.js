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
var textz = "#r"+cm.mxdmz()+"冒险岛#k,会员坐骑兑换专区.\r\n\r\n#b  会员等级:#r"+vipstr+"  #b剩余元宝:#r" + cm.getChar().getzb() + "#k#b 块  #b转生:#r" + cm.getChar().getReborns() + "#k#b 次\r\n";

textz += "#L1#"+ttt+""+ttt2+""+ttt+""+ttt2+" #v4031250#兑换#r超炫椅子#b #l\r\n";

textz += "#L3#"+ttt+""+ttt2+""+ttt+""+ttt2+" #v4031250#兑换#r靓丽骑宠#b #l\r\n";

textz += "#L6#"+ttt+""+ttt2+""+ttt+""+ttt2+" #v4031579# 兑换#r永恒装备#b #l\r\n"; 



cm.sendSimple (textz);    
				
}else if (status == 1) {

var viplevel = cm.getChar().getVip();

if (selection == 1) {
cm.openNpc( 9310043);

}else if  (selection == 3) { 
cm.openNpc( 9120106);


}else if (selection == 6) {
cm.openNpc( 9000021);

}else if (selection == 76) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902028,1);
cm.gainItem(1912021,1);
cm.sendOk("#b恭喜购买成功.");
cm.dispose();
    } else {
cm.sendOk("#b你没有#v4031250#.") 
cm.dispose();   
}

}else if  (selection == 77) { 
if(cm.haveItem(4031250, 1)) {
cm.gainItem(4031250,-1);
cm.gainItem(1902061,1); 
cm.gainItem(1912054,1); 
cm.sendOk("#b恭喜购买成功.")
cm.dispose(); 
} else { 
cm.sendOk("#b你没有#v4031250#.")
cm.dispose();   
}

}else if  (selection == 78) { 
if (cm.haveItem(4031250,1)) {
cm.gainItem(4031250,-1);
cm.gainItem(1902059,1); 
cm.gainItem(1912052,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有#v4031250#.");  
cm.dispose();   
}

}else if  (selection == 79) { 
if (cm.haveItem(4031250,1)) {
cm.gainItem(4031250,-1);
cm.gainItem(1902060,1); 
cm.gainItem(1912053,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有#v4031250#.");  
cm.dispose();   
}


}else if  (selection == 80) { 
if (cm.haveItem(4031250,1)) {
cm.gainItem(4031250,-1);
cm.gainItem(1902056,1); 
cm.gainItem(1912049,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有#v4031250#.");  
cm.dispose();   
}

}else if  (selection == 81) { 
if (cm.haveItem(4031250,1)) {
cm.gainItem(4031250,-1);
cm.gainItem(1902044,1); 
cm.gainItem(1912037,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有#v4031250#.");  
cm.dispose();   
}

}else if  (selection == 82) { 
if (cm.haveItem(4031250,1)) {
cm.gainItem(4031250,-1);
cm.gainItem(1902043,1); 
cm.gainItem(1912036,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有#v4031250#.");  
cm.dispose();   
}

}else if  (selection == 83) { 
if (cm.haveItem(4031250,1)) {
cm.gainItem(4031250,-1);
cm.gainItem(1902047,1); //直升飞机
cm.gainItem(1912040,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有#v4031250#.");  
cm.dispose();   
}


}else if  (selection == 84) { 
if (cm.haveItem(4031250,1)) {
cm.gainItem(4031250,-1);
cm.gainItem(1902034,1); //机器人
cm.gainItem(1912027,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有#v4031250#.");  
cm.dispose();   
}


}else if  (selection == 85) { 
if (cm.haveItem(4031250,1)) {
cm.gainItem(4031250,-1);
cm.gainItem(1902037,1); //超级飞船
cm.gainItem(1912030,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有#v4031250#.");  
cm.dispose();   
}

}else if  (selection == 86) { 
if (cm.haveItem(4031250,1)) {
cm.gainItem(4031250,-1);
cm.gainItem(1902055,1); //蝙蝠船
cm.gainItem(1912048,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有#v4031250#.");  
cm.dispose();   
}

}else if  (selection == 87) { 
if (cm.haveItem(4031250,1)) {
cm.gainItem(4031250,-1);
cm.gainItem(1902040,1); //机械师
cm.gainItem(1912033,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有#v4031250#.");  
cm.dispose();   
}

}else if  (selection == 88) { 
if (cm.haveItem(4031250,1)) {
cm.gainItem(4031250,-1);
cm.gainItem(1902041,1); //幼龙
cm.gainItem(1912034,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有#v4031250#.");  
cm.dispose();   
}

}else if  (selection == 89) { 
if (cm.haveItem(4031250,1)) {
cm.gainItem(4031250,-1);
cm.gainItem(1902042,1); //神龙
cm.gainItem(1912035,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有#v4031250#.");  
cm.dispose();   
}

}else if  (selection == 90) { 
if (cm.haveItem(4031250,1)) { 
cm.gainItem(4031250,-1);
cm.gainItem(1902057,1); //莱格斯的豺犬
cm.gainItem(1912050,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有#v4031250#.");  
cm.dispose();   
}

}else if  (selection == 91) { 
if (cm.haveItem(4031250,1)) { 
cm.gainItem(4031250,-1);
cm.gainItem(1902049,1); //小牛
cm.gainItem(1912042,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有#v4031250#.");  
cm.dispose();   
}

}else if  (selection == 92) { 
if (cm.haveItem(4031250,1)) { 
cm.gainItem(4031250,-1);
cm.gainItem(1902050,1); //摩托
cm.gainItem(1912043,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有#v4031250#.");  
cm.dispose();   
}

}else if  (selection == 93) { 
if (cm.haveItem(4031250,1)) { 
cm.gainItem(4031250,-1);
cm.gainItem(1902051,1); //飞船
cm.gainItem(1912044,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有#v4031250#.");  
cm.dispose();   
}


}else if  (selection == 94) { 
if (cm.haveItem(4031250,1)) { 
cm.gainItem(4031250,-1);
cm.gainItem(1902052,1); //天马
cm.gainItem(1912045,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有#v4031250#."); 
cm.dispose();   
}

}else if  (selection == 163) { 
if (cm.haveItem(4031250,1)) { 
cm.gainItem(4031250,-1);
cm.gainItem(1902053,1); //黑龙
cm.gainItem(1912046,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有#v4031250#.");  
cm.dispose();   
}

}else if  (selection == 164) { 
if (cm.haveItem(4031250,1)) { 
cm.gainItem(4031250,-1);
cm.gainItem(1902054,1); //海盗船
cm.gainItem(1912047,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有#v4031250#.");  
cm.dispose();   
}



}else if (selection == 11) {
if(cm.getChar().getVip() >= 4){
cm.warp(910000019);
cm.dispose();
}else{
cm.sendOk("#b您不是●5元会员④,无法进入此地图");
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

}else if (selection == 8) {
if(cm.getChar().getVip() >= 4){
cm.openShop (5000);
cm.dispose();
}else{
cm.sendOk("#b你不是●5元会员④，所以什么都看不到...");
cm.dispose();
} 


}else if (selection == 9) {
if(cm.getChar().getVip() >= 4){
cm.openShop (5005);
cm.dispose();
}else{
cm.sendOk("#b你不是●5元会员④，所以什么都看不到...");
cm.dispose();
} 


}else if (selection == 10) {
if (cm.getLevel() < 120) {
cm.sendOk("#b使用该功能需要使等级达到#rLv.120.");
cm.dispose(); 
} else if (cm.getBossLog('VIPZZ') >= 5) {
cm.sendOk("#b对不起,此功能你每天只可以使用5次.");
cm.dispose(); 
} else if(cm.getChar().getVip() >= 4){
text = "请选择你要转的职 #b[每天限量5次.]#k:\r\n";
text += "\r\n";
text += "#L17#英雄[112]#l\r\n#L18#圣骑士[122]#l\r\n#L19#黑骑士[132]#l  \r\n";
text += "\r\n";
text += "#L20#魔导师 火毒[212]#l\r\n#L21#魔导师 冰雷[222]#l\r\n#L22#主教[232]#l  \r\n";
text += "\r\n";
text += "#L23#神射手[312]#l\r\n#L24#箭神[322]#l  \r\n";
text += "\r\n";
text += "#L25#隐士[412]#l\r\n#L26#侠盗[422]#l  \r\n";
text += "\r\n";
text += "#L27#冲锋队长[512]#l\r\n#L28#船长[522]#l  \r\n";
text += "\r\n";
text += "#L29#魂骑士[1111]#l\r\n#L30#炎术士[1211]#l\r\n#L31#风灵使者[1311]#l\r\n#L32#夜行者[1411]#l\r\n#L33#奇袭者[1511]#l\r\n";
text += "\r\n";
text += "#L34#战神[2112]#l\r\n";
text += "\r\n";
cm.sendSimple(text); 
} else {
cm.sendOk("#b你不是●5元会员④，所以什么都看不到...");
cm.dispose();
}

}else if (selection == 4) {
if(cm.getChar().getVip() >= 2){
cm.sendSimple ("\r\n		#L6#"+ttt+"#d购买法师装备#l\r\n		#d#L7#"+ttt+"购买战士装备#l\r\n		#L8#"+ttt+"购买弓手装备#l\r\n		#L9#"+ttt+"购买飞侠装备#l");
}else{
cm.sendOk("#b你不是●5元会员②，所以什么都看不到...");
cm.dispose();
}


}else if (selection == 7) {
if(cm.getChar().getVip() >= 3){
cm.sendSimple ("\r\n		#L10#"+ttt+"#d购买武器商店#l\r\n		#d#L11#"+ttt+"购买首饰商店#l\r\n		#L12#"+ttt+"购买圣杯喇叭#l\r\n		#L13#"+ttt+"购买椅子商店#l");
}else{
cm.sendOk("#b你不是●5元会员③，所以什么都看不到...");
cm.dispose();
}


}else if (selection == 3) {
if(cm.getChar().getVip()){
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

} else if (selection == 10) {
cm.openShop (10003);
cm.dispose();

} else if (selection == 11) {
cm.openShop (10000);
cm.dispose();

} else if (selection == 12) {
cm.openShop (10002);
cm.dispose();

} else if (selection == 13) {
cm.openShop (10001);
cm.dispose();



} else if (selection == 17) {
cm.changeJob(MapleJob.HERO);
cm.setBossLog('VIPZZ');
cm.serverNotice("[转职系统]: 至尊VIP [" + cm.getPlayer() + "] 使用特权,自由转职成功");
cm.teachSkill(1111002,0,0);  //消除 斗气+变身炸线BUG
cm.teachSkill(5111005,0,0);
cm.teachSkill(5121003,0,0);
cm.dispose();


} else if (selection == 18) {
cm.changeJob(MapleJob.PALADIN);
cm.setBossLog('VIPZZ');
cm.serverNotice("[转职系统]: 至尊VIP [" + cm.getPlayer() + "] 使用特权,自由转职成功");
cm.teachSkill(1111002,0,0);  //消除 斗气+变身炸线BUG
cm.teachSkill(5111005,0,0);
cm.teachSkill(5121003,0,0);
cm.dispose();


} else if (selection == 19) {
cm.changeJob(MapleJob.DARKKNIGHT);
cm.setBossLog('VIPZZ');
cm.serverNotice("[转职系统]: 至尊VIP [" + cm.getPlayer() + "] 使用特权,自由转职成功");
cm.teachSkill(1111002,0,0);  //消除 斗气+变身炸线BUG
cm.teachSkill(5111005,0,0);
cm.teachSkill(5121003,0,0);
cm.dispose();


} else if (selection == 20) {
cm.changeJob(MapleJob.FP_ARCHMAGE);
cm.setBossLog('VIPZZ');
cm.serverNotice("[转职系统]: 至尊VIP [" + cm.getPlayer() + "] 使用特权,自由转职成功");
cm.teachSkill(1111002,0,0);  //消除 斗气+变身炸线BUG
cm.teachSkill(5111005,0,0);
cm.teachSkill(5121003,0,0);
cm.dispose();


} else if (selection == 21) {
cm.changeJob(MapleJob.IL_ARCHMAGE);
cm.setBossLog('VIPZZ');
cm.serverNotice("[转职系统]: 至尊VIP [" + cm.getPlayer() + "] 使用特权,自由转职成功");
cm.teachSkill(1111002,0,0);  //消除 斗气+变身炸线BUG
cm.teachSkill(5111005,0,0);
cm.teachSkill(5121003,0,0);
cm.dispose();


} else if (selection == 22) {
cm.changeJob(MapleJob.BISHOP);
cm.setBossLog('VIPZZ');
cm.serverNotice("[转职系统]: 至尊VIP [" + cm.getPlayer() + "] 使用特权,自由转职成功");
cm.teachSkill(1111002,0,0);  //消除 斗气+变身炸线BUG
cm.teachSkill(5111005,0,0);
cm.teachSkill(5121003,0,0);
cm.dispose();


} else if (selection == 23) {
cm.changeJob(MapleJob.BOWMASTER);
cm.setBossLog('VIPZZ');
cm.serverNotice("[转职系统]: 至尊VIP [" + cm.getPlayer() + "] 使用特权,自由转职成功");
cm.teachSkill(1111002,0,0);  //消除 斗气+变身炸线BUG
cm.teachSkill(5111005,0,0);
cm.teachSkill(5121003,0,0);
cm.dispose();


} else if (selection == 24) {
cm.changeJob(MapleJob.CROSSBOWMASTER);
cm.setBossLog('VIPZZ');
cm.serverNotice("[转职系统]: 至尊VIP [" + cm.getPlayer() + "] 使用特权,自由转职成功");
cm.teachSkill(1111002,0,0);  //消除 斗气+变身炸线BUG
cm.teachSkill(5111005,0,0);
cm.teachSkill(5121003,0,0);
cm.dispose();


} else if (selection == 25) {
cm.changeJob(MapleJob.NIGHTLORD);
cm.setBossLog('VIPZZ');
cm.serverNotice("[转职系统]: 至尊VIP [" + cm.getPlayer() + "] 使用特权,自由转职成功");
cm.teachSkill(1111002,0,0);  //消除 斗气+变身炸线BUG
cm.teachSkill(5111005,0,0);
cm.teachSkill(5121003,0,0);
cm.dispose();


} else if (selection == 26) {
cm.changeJob(MapleJob.SHADOWER);
cm.setBossLog('VIPZZ');
cm.serverNotice("[转职系统]: 至尊VIP [" + cm.getPlayer() + "] 使用特权,自由转职成功");
cm.teachSkill(1111002,0,0);  //消除 斗气+变身炸线BUG
cm.teachSkill(5111005,0,0);
cm.teachSkill(5121003,0,0);
cm.dispose();

} else if (selection == 27) {
cm.changeJob(MapleJob.BUCCANEER);
cm.setBossLog('VIPZZ');
cm.serverNotice("[转职系统]: 至尊VIP [" + cm.getPlayer() + "] 使用特权,自由转职成功");
cm.teachSkill(1111002,0,0);  //消除 斗气+变身炸线BUG
cm.teachSkill(5111005,0,0);
cm.teachSkill(5121003,0,0);
cm.dispose();


} else if (selection == 28) {
cm.changeJob(MapleJob.CORSAIR);
cm.setBossLog('VIPZZ');
cm.serverNotice("[转职系统]: 至尊VIP [" + cm.getPlayer() + "] 使用特权,自由转职成功");
cm.teachSkill(1111002,0,0);  //消除 斗气+变身炸线BUG
cm.teachSkill(5111005,0,0);
cm.teachSkill(5121003,0,0);
cm.dispose();


} else if (selection == 29) {
cm.changeJob(MapleJob.GHOST_KNIGHT_3);
cm.setBossLog('VIPZZ');
cm.serverNotice("[转职系统]: 至尊VIP [" + cm.getPlayer() + "] 使用特权,自由转职成功");
cm.teachSkill(1111002,0,0);  //消除 斗气+变身炸线BUG
cm.teachSkill(5111005,0,0);
cm.teachSkill(5121003,0,0);
cm.dispose();


} else if (selection == 30) {
cm.changeJob(MapleJob.FIRE_KNIGHT_3);
cm.setBossLog('VIPZZ');
cm.serverNotice("[转职系统]: 至尊VIP [" + cm.getPlayer() + "] 使用特权,自由转职成功");
cm.teachSkill(1111002,0,0);  //消除 斗气+变身炸线BUG
cm.teachSkill(5111005,0,0);
cm.teachSkill(5121003,0,0);
cm.dispose();


} else if (selection == 31) {
cm.changeJob(MapleJob.WIND_KNIGHT_3);
cm.setBossLog('VIPZZ');
cm.serverNotice("[转职系统]: 至尊VIP [" + cm.getPlayer() + "] 使用特权,自由转职成功");
cm.teachSkill(1111002,0,0);  //消除 斗气+变身炸线BUG
cm.teachSkill(5111005,0,0);
cm.teachSkill(5121003,0,0);
cm.dispose();


} else if (selection == 32) {
cm.changeJob(MapleJob.NIGHT_KNIGHT_3);
cm.setBossLog('VIPZZ');
cm.serverNotice("[转职系统]: 至尊VIP [" + cm.getPlayer() + "] 使用特权,自由转职成功");
cm.teachSkill(1111002,0,0);  //消除 斗气+变身炸线BUG
cm.teachSkill(5111005,0,0);
cm.teachSkill(5121003,0,0);
cm.dispose();


} else if (selection == 33) {
cm.changeJob(MapleJob.THIEF_KNIGHT_3);
cm.setBossLog('VIPZZ');
cm.serverNotice("[转职系统]: 至尊VIP [" + cm.getPlayer() + "] 使用特权,自由转职成功");
cm.teachSkill(1111002,0,0);  //消除 斗气+变身炸线BUG
cm.teachSkill(5111005,0,0);
cm.teachSkill(5121003,0,0);
cm.dispose();


} else if (selection == 34) {
cm.changeJob(MapleJob.Ares_4);
cm.setBossLog('VIPZZ');
cm.serverNotice("[转职系统]: 至尊VIP [" + cm.getPlayer() + "] 使用特权,自由转职成功");
cm.teachSkill(1111002,0,0);  //消除 斗气+变身炸线BUG
cm.teachSkill(5111005,0,0);
cm.teachSkill(5121003,0,0);
cm.dispose();





}
}
}