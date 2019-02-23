var status = 0;
var typed=0;
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var day = ca.get(java.util.Calendar.DATE);//获取日
var Hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE);//获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
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
			cm.sendYesNo("=======================#r劳动节#b专场#k=====================\r\n经过不断寻找，我终于发现了「大懒虫雪人」的爪牙，它就是小雪人！你能够帮助我打败它吗？它从我身上抢走的#b大量珍贵宝物#k都给你噢！\r\n#r#e出没时间#k#n：13：00-23：00\r\n#r#e怪物属性#k#n：第一形态：#b小雪人 #r4500#k Hp \r\n　　　　　第二形态：#b愤怒的雪人 #r7500#k Hp \r\n　　　　　第三形态：#b巨大的雪人 #r12000#k Hp \r\n#r#e组队说明#k#n：基友们可以抱团参与哦！\r\n#r#e副本提示#n#k：在击杀雪人的过程中，雪人是#e不受任何技能所给予的伤害的#n，并且每次普通攻击都只会下降雪人10点血量。");					
		} else if (status == 1) {
		if (cm.checkPartyEventCount("圣诞雪人",2)){
		if (Hour <13 | Hour > 23 ){
cm.sendOk("时间没到,劳动节副本还没还没打开。\r\n#r开放时间为：13：00-23：00 #k"); 
cm.dispose();
}
else if (cm.getEventCount("圣诞雪人") > 2) {
cm.sendOk("#e#r每日只能进2次圣诞副本"); 
cm.dispose();
}
else if (cm.getParty() == null) {
cm.sendOk("#e#r你好像还没有一个队伍,我是不能送你进去的."); 
cm.dispose();
}
else if(!cm.isLeader()){
cm.sendOk("#e#r请队长来跟我谈话.");
cm.dispose();
}
 else if (cm.getMap(209000015).getCharactersSize() > 0) { // Not Party Leader
cm.sendOk("有人在挑战此副本，请稍等一会，或者换其它线尝试一下！..");
cm.dispose();
}
else if (cm.getParty().getMembers().size() < 1){
cm.sendOk("至少有 #r1#k 名队员"); 
cm.dispose();
}else{
var em = cm.getEventManager("sdj");
if (em == null) {
cm.sendOk("出错啦,请联系GM.");
cm.dispose();
}else{
var party = cm.getParty().getMembers();//获取整个队伍角色信息
var mapId = cm.getPlayer().getMapId();
var next = true;
em.startInstance(cm.getParty(),cm.getChar().getMap());
cm.worldMessage(0x20,"『圣诞副本』" + " : " + "玩家 " + cm.getChar().getName() + " 和他的队友进入了劳动节副本！");

}
cm.worldMessage(0x20,"『圣诞副本』" + " : " + "玩家 " + cm.getChar().getName() + " 和他的队友进入了劳动节副本！");
cm.setPartyEventCount("圣诞雪人");
cm.dispose(); 
            }
		  }else{
		  cm.sendOk("队伍中已经有完成任务的队员了。");
		  cm.dispose();
		  }
		}
	}
}
