var status = 0;
var typed=0;
var 难度;
var 血量;
var 小时;
var Level;


function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
       if (cm.getChar().getLevel() < 200) {
	      Level = "xinmo";
	       难度 = "低等难度";
		   血量 = "#r9,000,000,000#k ~ #r99,999,999,999#k";
		   时间 = "#b#e2小时#n#k";
} else if (cm.getChar().getLevel() >= 200 && cm.getChar().getLevel() < 240) {
          Level = "xinmo1";
	       难度 = "中等难度";
		   血量 = "#r100,000,000,000#k ~ #r269,999,999,999#k";
		   时间 = "#b#e1小时30分钟#n#k";
} else if (cm.getChar().getLevel() >= 240) {
          Level = "xinmo2";
	       难度 = "高等难度";
		   血量 = "#r300,000,000,000#k ~ #r699,999,999,999#k";
		   时间 = "#b#e1小时#n#k";
}
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
		var word  = "#fUI/UIWindow2.img/UtilDlgEx/list1#\r\n- #e您目前的等级为：#b" + cm.getChar().getLevel() + "#k 级  心魔难度：#r"+ 难度 +"#k#n\r\n";
		    word += "┏                #e#r"+ 难度 +"#b副本信息#k#n                ┓";
			word += "\r\n    #e- 心魔血量：#n"+ 血量 +"";
			word += "\r\n    #e- 副本时间：#n"+ 时间 +"\r\n";
			word += "┗                                                  ┛";
		cm.sendYesNo(word);		
		} else if (status == 1) {
		if (cm.getEventCount("心魔") > 0) {
cm.sendOk("#e#r该账号今日已经进入过该副本了。"); 
cm.dispose();
}
else if (cm.getParty() == null) {
cm.sendOk("#e#r你好像还没有一个队伍，我是不能送你进去的。"); 
cm.dispose();
}
else if(!cm.isLeader()){
cm.sendOk("#e#r请队长来跟我谈话。");
cm.dispose();
}
 else if (cm.getMap(101000005).getCharactersSize() > 0) { // Not Party Leader
cm.sendOk("有人在挑战此副本，请稍等一会，或者换其它线尝试一下！..");
cm.dispose();
}
else if (cm.getParty().getMembers().size() > 1){
cm.sendOk("对不起，此次挑战必须单人。"); 
cm.dispose();
}else{
var em = cm.getEventManager(Level);
if (em == null) {
cm.sendOk("出错啦,请联系GM.");
cm.dispose();
}else{
em.startInstance(cm.getParty(), cm.getChar().getMap());
}
cm.dispose();

            }
		}
	}
}