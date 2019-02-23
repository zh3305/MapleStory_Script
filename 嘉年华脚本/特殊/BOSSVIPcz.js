var status = 0;
var eff ="#fUI/UIWindow/Quest/icon6/7#";
var ef = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var List = Array(
				Array("简单扎昆",0,0,2,0,5000),//事件名次、所需点卷、所需金币、能重置的次数、余额、抵用券
				Array("普通扎昆",5000,0,1,0,1000),
				Array("进阶扎昆",15000,0,2,0,0),
				Array("暗黑龙王",9000,0,2,0,0),
				Array("进阶暗黑龙王",11000,0,1,0,0),
				Array("麦格纳斯[简单]",17777,0,1,0,0),
				Array("麦格纳斯[普通]",30000,0,1,0,0),
				Array("麦格纳斯[困难]",30000,0,1,5,0),
				Array("巨大蝙蝠[简单]",0,0,2,0,5000),
				Array("巨大蝙蝠[困难]",0,0,1,0,10000),
				Array("希拉",18000,0,1,0,1000),
				Array("希拉[困难]",20000,0,1,0,2000),
				Array("狮子王:班·雷昂[简单]",0,0,1,0,7000),
				Array("狮子王:班·雷昂[普通]",19000,0,1,0,0),
				Array("钻机",5000,0,1,0,0),
				Array("强化钻机",11000,0,2,0,0),
				Array("皮埃尔",15000,0,1,0,0),
				Array("进阶皮埃尔",0,0,1,10,0),
				Array("腥血女王",15000,0,1,0,0),
				Array("进阶腥血女王",0,0,1,10,0),
				Array("贝伦",15000,0,1,0,0),
				Array("进阶贝伦",0,0,1,10,0),
				Array("半半",15000,0,1,0,0),
				Array("进阶半半",0,0,1,10,0),
				Array("品克缤",10000,0,2,0,0),
				Array("混沌品克缤",10000,0,1,0,0),
				Array("帕普拉图斯",0,0,2,0,3000),
				Array("妖精女王",9000,0,2,0,2000),
				Array("黄金寺院",9000,0,1,0,1000),
				Array("阿卡伊勒[普通]",10000,0,1,0,0),
				Array("女皇：希纳斯",19000,0,1,0,5000),
				Array("森兰丸",18000,0,2,0,0),
				Array("桃乐丝",30000,0,2,0,0),
				Array("贝勒·德",28000,0,1,0,0),
				Array("斯乌",0,0,3,20,0)
);
var round = Array();
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
        var txt = ef+"亲爱的#r#h ##k您好，请选择要重置的BOSS副本\r\n\r\n";
		for (var i = 0;i<List.length ;i++ ){
			var a = " [#r"+List[i][1]+"#k]#b点劵#k/";
			var b = " [#r"+(List[i][2]/10000)+"W#k]金币/";
			var d = " [#r"+List[i][5]+"#k]抵用券/";
			var c = " [#r"+List[i][4]+"#k]#g余额#k ";
			if (List[i][1]==0){
				a = "";
			}
			if(List[i][2]==0){
				b = "";
			}
			if(List[i][4]==0){
				c = "";
			}
			if(List[i][5]==0){
				d = "";
			}
			round[i] = (List[i][3] - cm.getPQLog(List[i][0]+""+cm.getName()));
			if (round[i] == 0){
				continue;
			}else{
			txt += "#L"+i+"##d"+List[i][0]+"#k"+a+""+b+""+d+""+c+"  剩余次数[#r"+round[i]+"#k]次\r\n";
			}
		}
 	    cm.sendSimple(txt);
    } else if (status == 1) {
		if (List[selection][0]=="贝勒·德"){
			cm.resetPQLog("贝勒德入场卷");
		}
		if(cm.getPlayer().getCSPoints(1)<List[selection][1]){
			cm.sendOk("对不起，你的点卷不够");
			cm.dispose();
		}else if(cm.getMeso()<List[selection][2]){
			cm.sendOk("对不起，你的金币不够");
			cm.dispose();
		}else if(round[selection]<=0){
			cm.sendOk("对不起，你今天的重置次数用完了");
			cm.dispose();
		}else if(cm.getHyPay(1)<List[selection][4]){
			cm.sendOk("对不起，你的余额不够，请充值");
			cm.dispose();
		}else{
			cm.gainNX(1,-List[selection][1]);
			cm.gainNX(2,-List[selection][5]);
			cm.gainMeso(-List[selection][2]);
			cm.addHyPay(List[selection][4]);
            cm.resetPQLog(List[selection][0]);
			cm.setPQLog(List[selection][0]+""+cm.getName());
            cm.sendOk("温馨提示：#b\r\n副本重置成功，勇士行动起来吧！");
			cm.worldSpouseMessage(0x20, "[系统公告] : 恭喜 " + cm.getChar().getName() + " 成功在拍卖处重置 "+List[selection][0]+" BOSS次数.");
		    cm.dispose();
		}
    }
}