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
var textz = "#r"+cm.mxdmz()+"冒险岛#k,飞升系统.\r\n   #b当前转生次数:#r" + cm.getChar().getReborns() + "#k#b 次\r\n";

textz += "#b#L1#"+ttt3+"  飞升 >>>> #r[180级即可]             "+ttt3+"#l\r\n";

textz += "#b#L100#"+ttt3+"  转职 >>>> #r[10 级即可]             "+ttt3+"#l\r\n";

textz += "#b#L2#"+ttt3+"  领取 >>>> 飞升奖励"+ttt4+"              "+ttt3+"#l\r\n";

textz += "#b#L99#"+ttt3+"  查看 >>>> 飞升奖励"+ttt4+"              "+ttt3+"#l\r\n";

textz += "#L3##b"+ttt3+"  重加 >>>> 属性点数                "+ttt3+"#l\r\n";

textz += "#L4##b"+ttt3+"  转回 >>>> 新手[重选职业]          "+ttt3+"#l\r\n";

cm.sendSimple (textz);    
				
}else if (status == 1) {

var viplevel = cm.getChar().getVip();


if(selection == 1){
cm.openNpc(1002006);

}else if(selection == 2){
cm.openNpc(9100000);

//cm.sendSimple("欢迎来到●●●5元冒险岛,也许你已经达到要求了,如果是的那么下面是你的奖励,飞升越搞,奖励越激情.#k\r\n   #b当前转生次数:#r" + cm.getChar().getReborns() + "#k#b 次\r\n#L30#"+ttt+"#b我已经到达[#r10转#b],我要领取[#r10万点卷#b]#l\r\n#L31#"+ttt+"#b我已经到达[#r20转#b],我要领取[#r+50扎昆头盔#b]#l\r\n#L32#"+ttt+"#b我已经到达[#r30转#b],我要领取[#r+50黑龙项链#b]#l\r\n#L33#"+ttt+"#b我已经到达[#r40转#b],我要领取[#r永恒兑换卷#b]#l\r\n#L34#"+ttt+"#b我已经到达[#r50转#b],我要领取[#r祝福卷轴10张#b]#l\r\n#L35#"+ttt+"#b我已经到达[#r60转#b],我要领取[#r+50勋章一枚#b]#l\r\n#L36#"+ttt+"#b我已经到达[#r70转#b],我要领取[#r10个元宝#b]#l\r\n#L37#"+ttt+"#b我已经到达[#r80转#b],我要领取[#r10个元宝#b]#l\r\n#L38#"+ttt+"#b我已经到达[#r100转#b],我要领取[#r+100暴力熊帽#b]#l\r\n#L39#"+ttt+"#b我已经到达[#r200转#b],我要领取[#r+200心疤狮帽#b]#l\r\n#L40#"+ttt+"#b我已经到达[#r300转#b],我要领取[#r100%必成10张#b]#l\r\n#L41#"+ttt+"#b我已经到达[#r500转#b],我要领取[#r+300武器一把#b]#l\r\n#L42#"+ttt+"#b我已经到达[#r600转#b],我要领取[#r+400武器一把#b]#l\r\n#L43#"+ttt+"#b我已经到达[#r700转#b],我要领取[#r+500武器一把#b]#l\r\n#L44#"+ttt+"#b我已经到达[#r888转#b],我要领取[#r+888武器一把#b]#l");

}else if(selection == 99){
cm.openNpc(9310073);

}else if(selection == 100){
cm.openNpc(9310057);


}else if(selection == 3){
var c ="你愿意重置你的属性吗?\r\n#L19#"+ttt+" 重置#r力量#k#l\r\n#L20#"+ttt+" 重置#r敏捷#k#l\r\n#L21#"+ttt+" 重置#r智力#k#l\r\n#L22#"+ttt+" 重置#r运气#k#l\r\n#L23##k"+ttt+" 添加所有能力点到#r力量#k#l\r\n#L24#"+ttt+" 添加所有能力点到#r敏捷#k#l\r\n#L25#"+ttt+" 添加所有能力点到#r智力#k#l\r\n#L26#"+ttt+" 添加所有能力点到#r运气";
cm.sendSimple(c);

}else if(selection == 4){
cm.sendSimple("5元冒险岛,重新转职.#k.\r\n   #b当前转生次数:#r" + cm.getChar().getReborns() + "#k#b 次\r\n#L5#"+ttt+"转职成#b新手#l#L6#"+ttt+" 初心者#l#L7#"+ttt+" 战童[10级以下]#l");
}

}else if (selection == 5) {
if(cm.getChar().getLevel() > 10){ 
cm.sendOk("#b10级以下玩家才能使用.."); 
cm.dispose(); 
}else {
cm.changeJob(net.sf.odinms.client.MapleJob.BEGINNER);//新手
cm.dispose(); 
}

}else if (selection == 6) {
if(cm.getChar().getLevel() > 10){ 
cm.sendOk("#b10级以下玩家才能使用.."); 
cm.dispose(); 
}else {
cm.changeJob(net.sf.odinms.client.MapleJob.KNIGHT);//初心者
cm.dispose(); 
}

}else if (selection == 7) {
if(cm.getChar().getLevel() > 10){ 
cm.sendOk("#b10级以下玩家才能使用.."); 
cm.dispose(); 
}else {
cm.changeJob(net.sf.odinms.client.MapleJob.Ares);//战童 
cm.dispose(); 
}

//洗点

}else if (selection == 19) {
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
var totAp = p.getRemainingAp() + p.getStr();
if (totAp < 30004) {
p.setStr(4);
p.setRemainingAp (totAp - 4);
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(4)));
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("好的.你的能力已经被重置!");
cm.dispose();
} else if (totAp  >= 30004) {
cm.sendOk("#b对不起，你能剩余AP超过30004不能重置.");
cm.dispose();
}


}else if (selection == 20) {
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
var totAp = p.getRemainingAp() + p.getDex();
if (totAp < 30004) {
p.setDex(4);
p.setRemainingAp (totAp - 4);
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(4)));
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("#b好的.你的能力已经被重置!");
cm.dispose();
} else if (totAp  >= 30004) {
cm.sendOk ("#b对不起，你能剩余AP超过30004不能重置.");
cm.dispose();
}


}else if (selection == 21) {
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
var totAp = p.getRemainingAp() + p.getInt();
if (totAp < 30004) {
p.setInt(4);
p.setRemainingAp (totAp - 4);
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(4)));
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("#b好的，你的能力已经重置!");
cm.dispose();
} else if (totAp  >= 30004) {
cm.sendOk ("#b对不起，你能剩余AP超过30004不能重置.");
cm.dispose();
}


}else if (selection == 22) {
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
var totAp = p.getRemainingAp() + p.getLuk();
if (totAp < 30004) {
p.setLuk(4);
p.setRemainingAp (totAp - 4);
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(4)));
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("#b好的，你的能力已经重置!");
cm.dispose();
} else if (totAp  >= 30004) {
cm.sendOk ("#b对不起，你能剩余AP超过30004不能重置.");
cm.dispose();
}


}else if (selection == 23) {
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
var newStr = p.getRemainingAp() + p.getStr();
if (newStr < 30000) {
p.setStr(newStr);
p.setRemainingAp (0);
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(p.getStr())));
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(0)));
p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("#b好的，你的能力已经重置!");
cm.dispose();
} else if (newStr >= 30000) {
p.setStr(29999);
p.setRemainingAp (newStr - 29999);
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(p.getStr())));
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("#b好的，你的能力已经重置!");
cm.dispose();
}


}else if (selection == 24) {
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
var newDex = p.getRemainingAp() + p.getDex();
if (newDex < 30000) {
p.setDex(newDex);
p.setRemainingAp (0);
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(p.getDex())));
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(0)));
p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("#b好的，你的能力已经重置!");
cm.dispose();
} else if (newDex >= 30000) {
p.setDex(29999);
p.setRemainingAp (newDex - 29999);
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(p.getDex())));
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("#b好的，你的能力已经重置!");
cm.dispose();
}


}else if (selection == 25) {
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
var newInt = p.getRemainingAp() + p.getInt();
if (newInt < 30000) {
p.setInt(newInt);
p.setRemainingAp (0);
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(p.getInt())));
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(0)));
p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("#b好的，你的能力已经重置!");
cm.dispose();
} else if (newInt >= 30000) {
p.setInt(29999);
p.setRemainingAp (newInt - 29999);
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(p.getInt())));
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("#b好的，你的能力已经重置!");
cm.dispose();
}


}else if (selection == 26) {
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
var newLuk = p.getRemainingAp() + p.getLuk();
if (newLuk < 30000) {
p.setLuk(newLuk);
p.setRemainingAp (0);
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(p.getLuk())));
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(0)));
p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("#b好的，你的能力已经重置!");
cm.dispose();
} else if (newLuk >= 30000) {
p.setLuk(29999);
p.setRemainingAp (newLuk - 29999);
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(p.getLuk())));
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("#b好的，你的能力已经重置!");
cm.dispose();
}





















}
}
}

