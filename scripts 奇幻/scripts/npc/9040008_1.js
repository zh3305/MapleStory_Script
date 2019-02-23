/*
垛垛
消费排行领取
2015.1.28
*/

function start() {

    status = -1;
    action(1, 0, 0);	
 
}

function getPaiming(){
	var rs = 999;
	var getPM = cm.getConnection().prepareStatement("SELECT id FROM UsedMonth where accname = ?");
					 getPM.setString(1, cm.getC().getAccountName());
					 getPM = getPM.executeQuery();
	if(getPM.next())
	{
		rs = getPM.getInt("id")%15;
		if(rs ==0){rs = 15;}
	}
	return rs;
}

function getLingqu(){
	var rs = 999;
	var getLQ = cm.getConnection().prepareStatement("SELECT lingqu FROM UsedMonth where accname = ?");
					 getLQ.setString(1, cm.getC().getAccountName());
					 getLQ = getLQ.executeQuery();
	if(getLQ.next())
	{
		rs = getLQ.getInt("lingqu");
	}
	return rs;
}

function setLingqu(){
	var getLQ = cm.getConnection().prepareStatement("Update UsedMonth set lingqu = 1 where accname = ?");
					 getLQ.setString(1, cm.getC().getAccountName());
					 getLQ = getLQ.executeUpdate();
}

    var yesno;
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
        cm.dispose();
    }
	
        if (status == 0) {
					var lastmonthpay = cm.getConnection().prepareStatement("SELECT payUsed,lastmonth FROM hypay where accname = ?");
					 lastmonthpay.setString(1, cm.getC().getAccountName());
					 lastmonthpay = lastmonthpay.executeQuery();
					var payUsed = 0;
					var lastmonth = 0;
					while(lastmonthpay.next()){
						payUsed = lastmonthpay.getInt("payUsed");
						lastmonth = lastmonthpay.getInt("lastmonth");
					}
					var a = "#e尊贵的玩家您好，欢迎来到每月赞助排行消费榜，月底统计发放每月赞助榜活动。赞助比拼月底爽翻奖励丰厚#n\r\n";

						a+= "#r#e本月期间已消费校园币：#b[ "+(payUsed-lastmonth)+" ]#r 点#k#n\r\n\r\n";
						//a+= "#L1# #fEffect/CharacterEff/1082565/4/0##e#b 本月赞助消费活动奖励 #fEffect/CharacterEff/1082565/4/0##n#l\r\n";
						a+= "#L2# #fEffect/CharacterEff/1082565/4/0##e#g 本月赞助消费玩家排名 #fEffect/CharacterEff/1082565/4/0##n#k#l\r\n";
						a+= "#L3# #fEffect/CharacterEff/1082565/4/0##r#e上月赞助排行获奖#b[点击领奖]#r#fEffect/CharacterEff/1082565/4/0##n#l\r\n";
					if (cm.getPlayer().getGMLevel() >= 6) {
						a+= "\r\n\r\n#L4# 【管理员 清空缓存积分记录 刷新数据】 #l\r\n";
						}
        	cm.sendNext(a);
		
		}else if(status == 1){
			if(selection == 1){
				var b = "#e#r新春将至#k，现将每月举行赞助排行活动，月底凌晨统计发奖，已消费校园币排行最高的玩家将额外获得下列丰厚大奖；（可拉下查询详情）\r\n\r\n";
					b+="#b消费榜#k#rNo.1#k：\r\n #r388888点卷#k #v2340000#祝福卷轴#b*10#k，#v2022530#迎春花花语#b*3#k，#v2431724#高等装备箱#b*2#k，#v2431990#周年庆100%卷轴箱#b*5#k\r\n\r\n";
					b+="#b消费榜#k#rNo.2#k：\r\n#r188888点卷#k #v2340000#祝福卷轴#b*7#k，#v2022530#迎春花花语#b*2#k，#v2431724#高等装备箱#b*1#k，#v2431990#周年庆100%卷轴箱#b*3#k\r\n\r\n";
					b+="#b消费榜#k#rNo.3#k：\r\n#r58888点卷#k #v2340000#祝福卷轴#b*5#k，#v2022530#迎春花花语#b*1#k，#v2431724#高等装备箱#b*1#k，#v2431990#周年庆100%卷轴箱#b*2#k\r\n\r\n";
					b+="#b消费榜#k#rNo.4#k：\r\n#r38888点卷#k #v2340000#祝福卷轴#b*3#k，#v2431724#高等装备箱#b*1#k，#v2431990#周年庆100%卷轴箱#b*2#k\r\n\r\n";
					b+="#b消费榜#k#rNo.5-No.10#k：\r\n#r18888点卷#k #v2340000#祝福卷轴#b*2#k，#v2430453#传说红宝石#b*2#k，#v2431990#周年庆100%卷轴箱#b*1#k\r\n\r\n";
					b+="#b消费榜#k#rNo.10-No.15#k：\r\n#r8888点卷#k #v2340000#祝福卷轴#b*1#k，#v2430453#传说红宝石#b*1#k，#v2431987#周年庆50%卷轴箱#b*2#k\r\n\r\n";
					b+="#e#v2431724#高等装备箱：开箱子必得#r[#b150级防具#r]#k、#r[#b漩涡系列#r]#k、#r[#b暴君系列#r]#k、#r[#b最高级贝勒德系列#r]#k装备。\r\n";
					b+="#e#v2431990#周年庆箱子：双击即可开出各类#r[#b周年庆100%卷轴#r]#k和#r[#b周年庆50%卷轴#r]#k一张。\r\n";
				    b+="#e#v2430453#传说红宝石：双击即可增加武器的突破上限，突破数值范围是#r[#b5W-20W#r]#k不等。\r\n\r\n";
					b+="#b温馨提示：每月月底凌晨统计清零显示的已消费校园币金额，但不会影响消费总计排行榜，请注意。\r\n\r\n";
					cm.sendOk(b);
					cm.dispose();
			}else if(selection == 2){
				var c = "校园消费排行榜 #b#e15#k#n 名玩家：\r\n";
					c+="#r#e温馨提示：玩家注意密码安全，不要轻易给予他人密码。修改难度较高的密码，防止盗号。#n\r\n\r\n";
					var paimingAcc=new Array();
			var pairs = cm.getConnection().prepareStatement("SELECT accname,(payUsed - lastmonth) as UM FROM hypay order by (payUsed - lastmonth) desc limit 15").executeQuery();
			var i = 0;
			while(pairs.next())
			{
				paimingAcc[i]= pairs.getString(1);
				name = paimingAcc[i].substr(0,4)+"*****";
				if(i == 0){
				c+="#e#r No."+(i+1)+"#n#k\t\t #e#r"+name+"\t\t 共消费"+pairs.getInt("UM")+"#n#k\r\n";
				}else if(i == 1){
				c+="#e#b No."+(i+1)+"#n#k\t\t #e#b"+name+"\t\t 共消费"+pairs.getInt("UM")+"#n#k\r\n";
				}else if(i == 2){
				c+="#e#g No."+(i+1)+"#n#k\t\t #e#g"+name+"\t\t 共消费"+pairs.getInt("UM")+"#n#k\r\n";
				}else if(i >= 3 && i<= 8){
				c+="#e No."+(i+1)+"#n#k\t\t #e"+name+"\t\t 共消费"+pairs.getInt("UM")+"#n#k\r\n";
				}else{
				c+="#e No."+(i+1)+"#n#k\t\t#e"+name+"\t\t 共消费"+pairs.getInt("UM")+"#n#k\r\n";
				}
				i++;
			}

				    
					cm.sendOk(c);
					cm.dispose();					
			}else if(selection == 3){
				var d = "#e上月赞助消费排行活动经已结束，目前颁发#r前15名#k赞助消费获奖的玩家，请点击领取奖励吧！\r\n每月凌晨将统计排名发奖，清除上月已消费校园币金额，若有剩余校园币的玩家请消费掉，以免造成没上榜及让其他玩家捷足先登的损失！#n#k\r\n\r\n";
					d+="#L1##fEffect/CharacterEff/1082565/2/0##b赞助消费排行榜获奖名单（点击领奖）#k#fEffect/CharacterEff/1082565/2/0##l"
					cm.sendOk(d);
			}else if(selection == 4){
			cm.sendYesNoS("确定要清除月消费排行榜吗？",2);
			yesno = 1;
			}

		}else if(status == 2){
		    if(yesno == 1){
			if (cm.getPlayer().getGMLevel() >= 6) {
				var qingkong = cm.getConnection().prepareStatement("TRUNCATE TABLE UsedMonth").executeUpdate();
				var baocun = cm.getConnection().prepareStatement("insert into UsedMonth (accname,usedMonth,lingqu) select accname,(payUsed - lastmonth) as usedMonth,0 as lingqu from hypay order by (payUsed - lastmonth) desc limit 15").executeUpdate();
				var cleanmonth = cm.getConnection().prepareStatement("update hypay set lastmonth = payUsed").executeUpdate();
				var d = "保存前15名到数据库，并成功清除当月消费缓存！\r\n\r\n";
					cm.sendOk(d);
					cm.dispose();
			}else{
			    cm.playerMessage(1,"您不是管理员");
				cm.dispose();
			}
			}
			var paimingAcc=new Array();
			var pairs = cm.getConnection().prepareStatement("SELECT accname FROM UsedMonth limit 15").executeQuery();
			var i = 0;
			while(pairs.next())
			{
				paimingAcc[i]= pairs.getString(1);
				i++;
			}
			if(selection == 1){
				var e = "#e点击对应账号，系统自动发放奖励，#r注意保留空格充足#k，以免造成不必要的损失。已消费的金额经已统计清除，请获奖玩家尽快领取，获得的校园币奖励不计入赞助奖励礼包，请知悉！#n\r\n";
				var pm = getPaiming();
				var lq = getLingqu();
			var paimingAcc=new Array();
			var Accname=new Array();
			var pairs = cm.getConnection().prepareStatement("SELECT accname FROM UsedMonth limit 15").executeQuery();
			var i = 0;
			while(pairs.next())
			{
				
				paimingAcc[i]= pairs.getString(1);
				Accname[i] = paimingAcc[i].substr(0,4)+"*****";
				i++;
			}

					if(pm<=15&&lq==0)
					{
					e+="#e#r恭喜你，你的上个月消费排名是 第"+pm+"名，你还没领取你的奖励，请尽快领取！#n#k\r\n";
					e += "#L1##e#r第一名：#b"+Accname[0]+"#k#r[点击领取]\r\n";
					e += "#L2##r第二名：#b"+Accname[1]+"#k#r[点击领取]\r\n";
					e += "#L3##r第三名：#b"+Accname[2]+"#k#r[点击领取]\r\n";
					e += "#L4##r第四名：#b"+Accname[3]+"#k#r[点击领取]\r\n";
					e += "#L5##r第5-10名：#b"+Accname[4]+","+Accname[5]+","+Accname[6]+","+Accname[7]+","+Accname[8]+","+Accname[9]+","+"#k#r[点击领取]\r\n";
					e += "#L6##r第11-15名：#b"+Accname[10]+","+Accname[11]+","+Accname[12]+","+Accname[13]+","+Accname[14]+","+"#k#r[点击领取]\r\n";
						cm.sendOk(e);
					}else if(pm>15){
						e+="#e#r很遗憾，你这次没有进入前15名，没有任何奖励可以领取，下次再继续努力吧！#n#k";
						cm.sendOk(e);
					cm.dispose();	
					}else{
						e+="#e#r奖励你已经领取过了哦,这个月继续努力吧!#n#k";
						cm.sendOk(e);
					cm.dispose();	
					}
					
			}
		
		
		}else if(status == 3){
			if(selection == 1){ //选择第一名进入这里处理！
				var pm = getPaiming();
				if(pm == 1 && getLingqu() == 0){//得到排名后判断是不是第一名
					//-第 1 名
					// 388888点卷
					// 2340000,10 祝福卷轴
					// 2022530,3 迎春花花语
					// 2431724,2 高等装备箱子
					// 2431990,5 周年庆100%卷轴箱子
					cm.gainNX(388888);
					cm.gainItem(2340000,10);
					cm.gainItem(2022530,3);
					cm.gainItem(2431724,2);
					cm.gainItem(2431990,5);
					setLingqu();//加入领取记录 
					cm.getPlayer().getMap().startMapEffect("[赞助消费排行]:【"+ cm.getChar().getName() +"】领取消费排行榜No.1超级大奖，恭喜恭喜！！", 5121043);
                    cm.worldMessage(1,"[全服公告]:【"+ cm.getChar().getName() +"】领取消费排行榜No.1高额大奖，恭喜恭喜！！");
                    cm.worldMessage(0x19, "[赞助消费排行]" + " : " + "【"+ cm.getChar().getName() +"】领取消费排行榜No.1高额大奖，恭喜恭喜！！");
					cm.worldMessage(0x19, "[赞助消费排行]" + " : " + "【"+ cm.getChar().getName() +"】领取消费排行榜No.1高额大奖，恭喜恭喜！！");
					cm.worldMessage(0x19, "[赞助消费排行]" + " : " + "【"+ cm.getChar().getName() +"】领取消费排行榜No.1高额大奖，恭喜恭喜！！");
                    /*cm.getPlayer().getMap().startMapEffect("[赞助消费排行]:【"+ cm.getChar().getName() +"】领取消费排行榜No.1高额大奖，恭喜恭喜！！", 5121043);
                    cm.worldMessage(1,"[全服公告]:【"+ cm.getChar().getName() +"】领取消费排行榜No.1高额大奖，恭喜恭喜！！");
                    cm.worldMessage("[赞助消费排行]:【"+ cm.getChar().getName() +"】领取消费排行榜No.1高额大奖，恭喜恭喜！！");
                    cm.getPlayer().getMap().startMapEffect("[赞助消费排行]:【"+ cm.getChar().getName() +"】领取消费排行榜No.1高额大奖，恭喜恭喜！！", 5121043);
                    cm.worldMessage(1,"[全服公告]:【"+ cm.getChar().getName() +"】领取消费排行榜No.1高额大奖，恭喜恭喜！！");
                    cm.worldMessage("[赞助消费排行]:【"+ cm.getChar().getName() +"】领取消费排行榜No.1高额大奖，恭喜恭喜！！");
                    cm.getPlayer().getMap().startMapEffect("[赞助消费排行]:【"+ cm.getChar().getName() +"】领取消费排行榜No.1高额大奖，恭喜恭喜！！", 5121043);
                    cm.worldMessage(1,"[全服公告]:【"+ cm.getChar().getName() +"】领取消费排行榜No.1高额大奖，恭喜恭喜！！");
                    cm.worldMessage("[赞助消费排行]:【"+ cm.getChar().getName() +"】领取消费排行榜No.1高额大奖，恭喜恭喜！！");*/
					cm.sendOk("恭喜您成功领取第一名奖励");
					cm.dispose();
				}else{
					cm.sendOk("对不起！您不是该排名获奖人 或 您已领取过了");
					cm.dispose();
				}

			}else if(selection == 2){ //选择第一名进入这里处理！
				var pm = getPaiming();
				if(pm == 2 && getLingqu() == 0){//得到排名后判断是不是第一名
					//奖品预留位置
					// 第 2 名
					// 188888点卷
					// 2340000,7 祝福卷轴
					// 2022530,2 迎春花花语
					// 2431724,1 高等装备箱子
					// 2431990,3 周年庆100%卷轴箱子
					cm.gainNX(188888);
					cm.gainItem(2340000,7);
					cm.gainItem(2022530,2);
					cm.gainItem(2431724,1);
					cm.gainItem(2431990,3);
					setLingqu();//加入领取记录 
                    cm.getPlayer().getMap().startMapEffect("[赞助消费排行]:【"+ cm.getChar().getName() +"】领取消费排行榜No.2高额大奖，祝贺祝贺！！", 5121043);
                    cm.worldMessage(1,"[全服公告]:【"+ cm.getChar().getName() +"】领取消费排行榜No.2高额大奖，祝贺祝贺！！");
                    cm.worldMessage(0x19, "[赞助消费排行]" + " : " + "【"+ cm.getName() +"】领取消费排行榜No.2高额大奖，祝贺祝贺！！");
					cm.worldMessage(0x19, "[赞助消费排行]" + " : " + "【"+ cm.getName() +"】领取消费排行榜No.2高额大奖，祝贺祝贺！！");
					cm.worldMessage(0x19, "[赞助消费排行]" + " : " + "【"+ cm.getName() +"】领取消费排行榜No.2高额大奖，祝贺祝贺！！");
					cm.sendOk("恭喜您成功领取第二名奖励");
					cm.dispose();
				}else{
					cm.sendOk("对不起！您不是该排名获奖人 或 您已领取过了");
					cm.dispose();
				}
					
			}else if(selection == 3){ //选择第一名进入这里处理！
				var pm = getPaiming();
				if(pm == 3 && getLingqu() == 0){//得到排名后判断是不是第一名
					//奖品预留位置
					// -第 3 名
					// 58888点卷
					// 2431724,1 高等装备箱子
					// 2022530,1 迎春花花语
					// 2340000,5 祝福卷轴
					// 2431990,2 周年庆100%卷轴箱子
					cm.gainNX(58888);
					cm.gainItem(2431724,1);
					cm.gainItem(2022530,1);
					cm.gainItem(2340000,5);
					cm.gainItem(2431990,2);
					setLingqu();//加入领取记录 
                    cm.getPlayer().getMap().startMapEffect("[赞助消费排行]:【"+ cm.getChar().getName() +"】领取消费排行榜No.3丰厚大奖，祝贺祝贺！！", 5121043);
                    cm.worldMessage(1,"[全服公告]:【"+ cm.getChar().getName() +"】领取消费排行榜No.3丰厚大奖，祝贺祝贺！！");
                    cm.worldMessage(0x19, "[赞助消费排行]" + " : " + "【"+ cm.getChar().getName() +"】领取消费排行榜No.3丰厚大奖，祝贺祝贺！！");	
					cm.worldMessage(0x19, "[赞助消费排行]" + " : " + "【"+ cm.getChar().getName() +"】领取消费排行榜No.3丰厚大奖，祝贺祝贺！！");	
					cm.worldMessage(0x19, "[赞助消费排行]" + " : " + "【"+ cm.getChar().getName() +"】领取消费排行榜No.3丰厚大奖，祝贺祝贺！！");	
					cm.sendOk("恭喜您成功领取第三名奖励");
					cm.dispose();
				}else{
					cm.sendOk("对不起！您不是该排名获奖人 或 您已领取过了");
					cm.dispose();
				}
					
			}else if(selection == 4){ //选择第一名进入这里处理！
				var pm = getPaiming();
				if(pm == 4 && getLingqu() == 0){//得到排名后判断是不是第一名
					//奖品预留位置
					// -第 4 名
					// 38888点卷
					// 2431724,1 高等装备箱子
					// 2340000,3 祝福卷轴
					// 2431990,2 周年庆100%卷轴箱子
					cm.gainNX(38888);
					cm.gainItem(2431724,1);
					cm.gainItem(2340000,3);
					cm.gainItem(2431990,2);

					setLingqu();//加入领取记录 
                    cm.getPlayer().getMap().startMapEffect("[赞助消费排行]:【"+ cm.getChar().getName() +"】领取消费排行榜No.4丰厚大奖，祝贺祝贺！！", 5121043);
                    cm.worldMessage(1,"[全服公告]:【"+ cm.getChar().getName() +"】领取消费排行榜No.4丰厚大奖，祝贺祝贺！！");
                    cm.worldMessage(0x19, "[赞助消费排行]" + " : " + "【"+ cm.getChar().getName() +"】领取消费排行榜No.4丰厚大奖，祝贺祝贺！！");
					cm.worldMessage(0x19, "[赞助消费排行]" + " : " + "【"+ cm.getChar().getName() +"】领取消费排行榜No.4丰厚大奖，祝贺祝贺！！");
					cm.worldMessage(0x19, "[赞助消费排行]" + " : " + "【"+ cm.getChar().getName() +"】领取消费排行榜No.4丰厚大奖，祝贺祝贺！！");
					cm.sendOk("恭喜您成功领取第四名奖励");
					cm.dispose();
				}else{
					cm.sendOk("对不起！您不是该排名获奖人 或 您已领取过了");
					cm.dispose();
				}
					
			}else if(selection == 5){ //选择第一名进入这里处理！
				var pm = getPaiming();
				if(pm>=5 && pm<=10 && getLingqu() == 0){//得到排名后判断是不是第一名
					//奖品预留位置
					// -第5-10名
					// 18888点卷
					// 2340000,2 祝福卷轴
					// 2430453,2 传说红宝石，突破武器攻击上限道具
					// 2431990,1 周年庆100%卷轴箱子
					cm.gainNX(18888);
					cm.gainItem(2340000,2);
					cm.gainItem(2430453,2);
					cm.gainItem(2431990,1);
					setLingqu();//加入领取记录 
                    cm.getPlayer().getMap().startMapEffect("[赞助消费排行]:【"+ cm.getChar().getName() +"】领取消费排行榜No.5-10娱乐大奖，祝贺祝贺！！", 5121043);
                    cm.worldMessage(1,"[全服公告]:【"+ cm.getChar().getName() +"】领取消费排行榜No.5-10娱乐大奖，祝贺祝贺！！");
                    cm.worldMessage(0x19, "[赞助消费排行]" + " : " + "【"+ cm.getChar().getName() +"】领取消费排行榜No.5-10娱乐大奖，祝贺祝贺！！");
					cm.worldMessage(0x19, "[赞助消费排行]" + " : " + "【"+ cm.getChar().getName() +"】领取消费排行榜No.5-10娱乐大奖，祝贺祝贺！！");
					cm.worldMessage(0x19, "[赞助消费排行]" + " : " + "【"+ cm.getChar().getName() +"】领取消费排行榜No.5-10娱乐大奖，祝贺祝贺！！");
					cm.sendOk("恭喜您成功领取第五至十名奖励");
					cm.dispose();
				}else{
					cm.sendOk("对不起！您不是该排名获奖人 或 您已领取过了");
					cm.dispose();
				}
					
			}else if(selection == 6){ //选择第一名进入这里处理！
				var pm = getPaiming();
				if(pm>=11 && pm<=15 && getLingqu() == 0){//得到排名后判断是不是第一名
					//奖品预留位置
					// -第11-15名
					// 8888点卷
					// 2340000,1 祝福卷轴
					// 2430453,1 传说红宝石，突破武器攻击上限道具
					// 2431987,2 周年庆50%卷轴箱子
					cm.gainNX(8888);
					cm.gainItem(2340000,1);
					cm.gainItem(2430453,1);
					cm.gainItem(2431987,2);
					setLingqu();//加入领取记录 
                    cm.getPlayer().getMap().startMapEffect("[赞助消费排行]:【"+ cm.getChar().getName() +"】领取消费排行榜No.11-15擦边大奖，可喜可贺！！", 5121043);
                    cm.worldMessage(1,"[全服公告]:【"+ cm.getChar().getName() +"】领取消费排行榜No.11-15擦边大奖，可喜可贺！！");
                    cm.worldMessage(0x19, "[赞助消费排行]" + " : " + "【"+ cm.getChar().getName() +"】领取消费排行榜No.11-15擦边大奖，可喜可贺！！");
					cm.worldMessage(0x19, "[赞助消费排行]" + " : " + "【"+ cm.getChar().getName() +"】领取消费排行榜No.11-15擦边大奖，可喜可贺！！");
					cm.worldMessage(0x19, "[赞助消费排行]" + " : " + "【"+ cm.getChar().getName() +"】领取消费排行榜No.11-15擦边大奖，可喜可贺！！");
					cm.sendOk("恭喜您成功领取第十一至十五奖励");
					cm.dispose();
				}else{
					cm.sendOk("对不起！您不是该排名获奖人 或 您已领取过了");
					cm.dispose();
				}
					
			}



}}
