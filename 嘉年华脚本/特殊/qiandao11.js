var status = 0;
var icon1 = "#fEffect/CharacterEff/1082565/4/0#";
var icon2 = "#fEffect/CharacterEff/1082565/2/0#";
var npcid = 9070002;
var sl = 20;//兑换数量
var jf = 20;//兑换数量

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
		var text = "\r\n#b你好，我是兔花花秘书,在这里可以每天领取一次。#k#e\r\n活力值余额：#r"+cm.getPlayerEnergy()+"#k 积分余额：#r#r"+cm.getPlayerPoints()+"#k 点券余额：#r#e" + cm.getPlayer().getCSPoints(1) + "\r\n#e#r要求：#b需要达到120级才能领取！\r\n#e#r每日获得：#d活力值+#r20 #d积分+#r20#k#d  获得经验+#r100W \r\n#v4310057#暴风币+#r2#d #v2340000#祝福卷轴+#r2#n#d #v5062002#高级神奇魔方+#r2#n#d \r\n";
		//text+= "#b#L0#"+ icon2 +" 了解什么是花园？#v2433018#宠物箱+#r1#n#d#l\r\n";
		text+= "#e#r#L2#"+ icon2 +" 领取每日签到#l\r\n";
		//text+= "#r#L1#"+ icon1 +" 领取今日免费积分#l\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		switch(selection) {
			case 0:
				var text="\t每个角色初生花园技术等级为1级。可以拥有1个花盆，提升等级之后可以扩建花园增加花盆，花园技术等级决定你能种植的花种。每当收获时可以获得种植经验和花的产物。任何的花只要超过一天没有采摘就会枯萎。\r\n";
				text+="\t每天可以为种植的花进行一次浇水、施肥，浇水消耗10点活力，可以减少1小时的作物成长时间，施肥消耗20点活力，可以减少2小时的作物成长时间。";
				status-=2;
				cm.sendNext(text);
			break;
			case 1:
                                if (cm.getPQLog("花园积分")==0) {
					cm.setPQLog("花园积分");
					cm.addHyPay(5);
					cm.sendOk("成功领取了5点积分。");
					cm.dispose();
				} else {
					cm.sendOk("您今天已经领取过了活力值！");
					cm.dispose();
				}
			case 2:
				//if (cm.getPQLog("每日活力值",0) < 1 && cm.getPlayer().getLevel() == 100 && cm.getSpace(5)>2){
                                if(cm.getPQLog("每日活力值",0) < 1 && (cm.getPlayer().getLevel() > 120 && cm.getPlayer().getLevel() < 255) && (cm.getSpace(5)>1 && cm.getSpace(1)>2)){
			              cm.gainPlayerEnergy(20);
                                      //cm.addHyPay(-sl * 1);
                                      cm.gainExp( + 1000000);
                                      cm.gainPlayerPoints(jf * 1);
                                      //cm.gainNX(3000);
                                      cm.gainItem(4310057, 2);
                                     // cm.gainItem(2433018, 1);
                                      cm.gainItem(5062002, 2);
                                      //cm.gainItem(4310014, 2);
                                      cm.gainItem(2340000, 2);
			              cm.setPQLog("每日活力值");
                                      cm.setPQLog("每日活力值", 1);
              cm.worldSpouseMessage(0x20,"玩家[" + cm.getPlayer().getName() + "]在拍卖上领取了每日福利20活力值,20积分,高级神奇魔方及祝福卷轴等作为奖励~!");
					cm.sendOk("#d成功领取了#r20#d点活力值 #r#d积分+#r20#k\r\n#d  获得经验+#r100W #v4310057#暴风币+#r2 #v2340000#祝福卷轴+#r2#k #v5062002#高级神奇魔方+#r2#n#d，更多活力值请通过完成组队任务#b<抢占海盗船>、<拯救罗和朱>、<扫荡秦皇陵>、<天天爱历练>#k获取。");
					cm.dispose();
				} else {
					cm.sendOk("#b#e今天已经领取了或等级没达到120级!#r\r\n");
					cm.dispose();
				}
				
		}
	}
}