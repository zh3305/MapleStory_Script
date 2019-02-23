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
var textz = "#r"+cm.mxdmz()+"冒险岛#k,抽奖与赌博系统.\r\n\r\n#b#e>>>>>>>>>>>>#n强大的娱乐系统，刺激，好玩#e<<<<<<<<<<<<#n\r\n　[ 抽奖物品，赌博比率，真实，有效，综合中奖率= #r60%#b ]\r\n";

textz += "#L1#"+ttt+"抽奖方式⒈[#r使用物品抽奖#b][80% 抽到极品玩具]--[#d快#b]#l\r\n";

textz += "#L2#"+ttt+"抽奖方式⒉[#r使用点卷抽奖#b][60% 抽到新型点装]--[#d行#b]#l\r\n";

textz += "#L6#"+ttt+"抽奖方式⒊[#r使用元宝抽奖#b][40% 抽到自创武器]--[#d动#b]#l\r\n\r\n";

textz += "#L77#"+ttt+"赌博方式⒈[#r使用金币赌博#b][比率公平公正公开]--[#d快#b]#l\r\n";

textz += "#L88#"+ttt+"赌博方式⒉[#r使用点卷赌博#b][比率公平公正公开]--[#d行#b]#l\r\n";

textz += "#L99#"+ttt+"赌博方式⒊[#r使用元宝赌博#b][比率公平公正公开]--[#d动#b]#l\r\n";

textz += "#L100#"+ttt+"赌博方式⒋[#r使用修炼赌博#b][比率公平公正公开]--[#d吧#b]#l\r\n";


cm.sendSimple (textz);    
				
}else if (status == 1) {

var viplevel = cm.getChar().getVip();

if (selection == 1) {
cm.openNpc( 9310096);

}else if (selection == 2) {
cm.openNpc( 9310098);

}else if (selection == 77) {
cm.openNpc( 9330067);

}else if (selection == 88) {
cm.openNpc( 9330065);

}else if (selection == 99) {
cm.openNpc( 9330084);

}else if (selection == 100) {
cm.openNpc( 9330083);

}else if (selection == 16) {
if(cm.getChar().getVip() >= 6){
cm.openShop (5007);
cm.dispose();
}else{
cm.sendOk("#b您不是●5元会员⑥,无法进入此地图");
cm.dispose();
} 

}else if (selection == 6) {
cm.openNpc( 9310099);

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


}else if (selection == 11) {
if(cm.getChar().getVip() >= 5){
cm.openShop (5002);
cm.dispose();
}else{
cm.sendOk("#b你不是●5元会员⑤，所以什么都看不到...");
cm.dispose();
} 


}else if (selection == 12) {
if(cm.getChar().getVip() >= 5){
cm.openShop (5008);
cm.dispose();
}else{
cm.sendOk("#b你不是●5元会员⑤，所以什么都看不到...");
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