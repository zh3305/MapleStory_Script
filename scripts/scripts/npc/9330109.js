var status = 0;
var mh ="#fEffect/CharacterEff/1112908/0/1#";
var pass;
var choice;
var fish;
//鱼卵孵化
var fishid = Array("4031627","4031628","4031630","4031631","4031633","4031634","4031635","4031636","4031637","4031638","4031639","4031640","4031641","4031642","4031643","4031644","4031645","4031646","4031647");
var fishcl = Array("2","2","2","2","2","2","2","2","2","2","2","2","2","4","4","4","6","6","6","7");
//勋章兑换
var xunzhangid = Array("1142610","1142146","1142513","1112907");
var weizhiyusl = Array("70","30","50","99");
//韩国字母套兑换椅子
var yiziid  = Array("3010956","3010957","3010958","3010959","3010960","3010961","3010962","2432637");
var taozusl = Array("1","1","1","1","1","1","1","2");
var quest1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (cm.getBossLog("钓鱼任务1") == 0) {
	quest1 = "#L1##r【#e任务一#n】#k#b收集小小鱼~#k#v4001200#           #b【#k#e未完成#n#b】#k#l";
	} else {
	quest1 = " #r【#e任务一#n】#k#b收集小小鱼~#k#v4001200#           #b【#k#g#e已完成#n#k#b】#k";
	}
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
        var selStr = "#b#h ##k#k你好，我是#r钓鱼场厨师#k，你可以选择以下功能：\r\n\r\n";
            selStr +="#e#d#L0#"+ mh +" 在线时间领鱼竿#n#k#l#v1432039# ";		
			selStr +="#e#r#L1#"+ mh +" 每日钓鱼任务#n#k#l#v4001200#\r\n\r\n";
			selStr +="#e#b#L4#"+ mh +" 孵化鱼卵#n#k#l#v2431055#     ";
			selStr +="#e#g#L2#"+ mh +" 兑换钓鱼勋章#n#k#l#v2431004#\r\n\r\n";
			selStr +="#e#b#L3#"+ mh +" 兑换稀有甜点椅子#n#k#l#v3994641##v3994642##v3994643##v3994644##v3994645#\r\n";
		cm.sendSimple(selStr);
        } else if (status == 1) { 
       if (selection == 0) {
	   if (cm.getEventCount("每日鱼竿") > 0) {
	        cm.sendOk("#r#e领取条件：#n#k今日在线小时 #e#b10#k#n 小时\r\n\r\n#b#e获得奖励：#n#k #v1432039#（1天权） x #e#d1#k#n       #e#r【未领取】#k#n");
	        cm.dispose();
		} else {
            cm.sendSimple("#r#e领取条件：#n#k今日在线小时 #e#b10#k#n 小时\r\n\r\n#b#e获得奖励：#n#k #v1432039#（1天权） x #e#d1#k#n       #e#b【未领取】#k#n");
			pass = 0;
		}
} else if (selection == 1) { 
        var peper  ="您好，这里是#b#e钓鱼任务发布中心#k#n，您可以在这查看任务：\r\n\r\n";
		    peper +=""+ quest1 +"";
            cm.sendSimple(peper);
			pass = 1;
} else if (selection == 2) { 
            choices  ="您好，这里是#b#e神秘鱼贩卖市场#k#n，您可以选择孵化的鱼类：\r\n\r\n";
		for (var i = 0; i < xunzhangid.length; i++) {
		    choices +="#L" + i + "##v" + xunzhangid[i] + "##z" + xunzhangid[i] + "#　#d所需 #v2431004# x #r" + weizhiyusl[i] + "#k#l\r\n";
		}
            cm.sendSimple(choices);
			pass = 2;
} else if (selection == 3) { 
            choices  ="您好，这里是#b#e甜点椅子交易中心#k#n，您可以选择所需的道具：\r\n\r\n";
			choices +="             #v3994641##v3994642##v3994643##v3994644##v3994645#\r\n";
		for (var i = 0; i < yiziid.length; i++) {
		    choices +="#L" + i + "##v" + yiziid[i] + "##z" + yiziid[i] + "#　#d所需 #b#e韩果字母套组#n#d x #r" + taozusl[i] + "#k#l\r\n";
		}
            cm.sendSimple(choices);
			pass = 3;
} else if (selection == 4) { 
            choices  ="您好，这里是#b#e鱼卵人工孵化基地#k#n，您可以选择孵化的鱼类：\r\n\r\n";
		for (var i = 0; i < fishid.length; i++) {
		    choices +="#L" + i + "##v" + fishid[i] + "##z" + fishid[i] + "#　#d需要 #v2431055# x #r" + fishcl[i] + "#k#l\r\n";
		}
            cm.sendSimple(choices);
			pass = 4;
		}
        } else if (status == 2) {
	   if (pass == 0) {
	   var sj = 600 - cm.getGamePoints();
	   if (cm.getGamePoints() >= 600 ){
	        cm.gainItem(1432039,1,1);
			cm.setEventCount("每日鱼竿");
	        cm.playerMessage(1,"领取成功");
			cm.dispose();
		} else {
		    cm.playerMessage(1,"在线时间不足，还差 "+ sj +" 分钟");
			cm.dispose();
		}
} else if (pass == 1) {
       if (selection == 1) {
	   cm.sendSimple("#r#e任务目的：#n#k钓获 #v4001200#  x #e#b30#k#n 条\r\n\r\n#b#e任务奖励：#n#k #v2340000# x #e#d1#k#n 张 #v5062010# x #e#d3#k#n 个 人气 x #e#d8#k#n 点");
	   fish = 1;
	   }
} else if (pass == 2) {
       cm.sendYesNo("你选择换购的物品：#v" + xunzhangid[selection] + "#，需要的 #v2431004# 为：" + weizhiyusl[selection] + " 个\r\n确定要兑换吗？");
	   choice = selection;
	   pass = 12;
} else if (pass == 3) {
       cm.sendYesNo("你选择的物品为：#v" + yiziid[selection] + "#，需要的 #b#e韩果字母套组#n#k 为：" + taozusl[selection] + " 套\r\n确定要兑换吗？");
	   choice = selection;
	   pass = 13;
} else if (pass == 4) {
       cm.sendGetText("你选择要孵化的鱼种为：#v" + fishid[selection] + "#，需要的 #v2431055# 为：" + fishcl[selection] + " 个\r\n请输入你想孵化的数量：");
	   choice = selection;
	   pass = 14;
       }
       } else if (status == 3) {
	   if (fish == 1) {
	   if (cm.haveItem(4001200,30)){
	        cm.gainItem(4001200,-30);
	        cm.gainItem(2340000,1);
			cm.gainItem(5062010,3);
			cm.gainFame(8,true);//人气
			cm.getChar().updateFame();
			cm.setBossLog("钓鱼任务1");
			cm.playerMessage(1,"任务完成");
			cm.dispose();
	   } else {
	        cm.playerMessage(1,"小鱼数量不足");
			cm.dispose();
	   }
} else if (pass == 12) {
       if (cm.haveItem(2431004,weizhiyusl[choice])){
	        cm.gainItem(2431004,- weizhiyusl[choice]);
	        cm.gainItem(xunzhangid[choice], 1);
			cm.playerMessage(1,"换购成功");
			cm.dispose();
	   } else {
	        cm.playerMessage(1,"未知鱼数量不足");
			cm.dispose();
	   }
} else if (pass == 13) {
       if (cm.haveItem(3994641,taozusl[choice]) && cm.haveItem(3994642,taozusl[choice]) && cm.haveItem(3994643,taozusl[choice]) && cm.haveItem(3994644,taozusl[choice]) && cm.haveItem(3994645,taozusl[choice])){
	        cm.gainItem(3994641,- taozusl[choice]);
			cm.gainItem(3994642,- taozusl[choice]);
			cm.gainItem(3994643,- taozusl[choice]);
			cm.gainItem(3994644,- taozusl[choice]);
			cm.gainItem(3994645,- taozusl[choice]);
	        cm.gainItem(yiziid[choice], 1);
			cm.playerMessage(1,"兑换成功");
			cm.dispose();
	   } else {
	        cm.playerMessage(1,"韩果字母套组数量不足");
			cm.dispose();
	   }
} else if (pass == 14) {
       fee = cm.getText();
	   money = fee * fishcl[choice];
	   if (fee > 0 && fee != null) {
	   if (cm.haveItem(2431055,money)){
	        cm.gainItem(2431055,- money);
	        cm.gainItem(fishid[choice], fee);
			cm.playerMessage(1,"孵化成功");
			cm.dispose();
	   } else {
	        cm.playerMessage(1,"鱼卵数量不足");
			cm.dispose();
	   }
	   } else {
	        cm.playerMessage(1,"输入非法");
			cm.dispose();
	   }
	}
  }
}
