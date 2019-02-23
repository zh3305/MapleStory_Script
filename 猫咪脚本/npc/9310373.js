//积分活动
var status = 0;
var cal = java.util.Calendar.getInstance();
var month = cal.get(java.util.Calendar.MONTH) + 1; //获得月份

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
			var myRmbPoints = 0;
			var conn = cm.getConnection();
			var sql = "select rmbpoints from accounts where id = ?;";
			var pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, cm.getPlayer().getAccountID());
			var myRPSql = pstmt.executeQuery();
			if (myRPSql.next()) {
				myRmbPoints = myRPSql.getString("rmbpoints");
			} else {
				myRmbPoints = 0;
			}
			myRPSql.close();
			pstmt.close();
			//conn.close();
			//var text ="\t11月8日零点至11月18日零点每充值#r1元#k或可获得#r1积分#k，积分用来兑换以下礼包。\r\n\t11月18日前将进行统计充值排名#r前10名#k的玩家，将额外获得同等充值金额的百分比进行点卷返利。#b1-3名按充值金额#e#r30%#k#n进行点卷返利，第一名可额外获赠#r一套蜡笔#b，第二名额外获赠#r3支蜡笔#k，第三名额外获赠#r1支蜡笔#k，4-7名按充值金额的#e#r15%#k#n进行点卷返利，其余名额按充值金额的#e#r5%#k#n进行点卷返利。\r\n\r\n"
			var text=""
			text+="\r\n#k#d您当前的充值积分为：#r"+myRmbPoints+"#k点#k\r\n\r\n#b";
			text+="              #d #L4#月充值排行说明#l";
			text+="\r\n       #b       #e#L1#查看本月充值排行#l";
			text+="\r\n           #L3##r领取#d#e"+((month-1==0) ? 12 : (month-1))+"月#n#r充值排行奖励#b#l";
			//text+="\r\n#L2##r充值活动积分兑换#b#l";
			cm.sendSimple(text);
			//cm.dispose();
		} else if (status == 1) {
			if (selection==1) {
				cm.dispose();
				cm.openNpc(9310373, 1);
			} else if (selection == 2) {
				//cm.sendOk("现在不是积分兑换的时间。");
				cm.dispose();
				cm.openNpc(9310373, 2);
			} else if (selection == 3) {
				cm.dispose();
				cm.openNpc(9310373, 3);
			} else if (selection == 4) {
				var text="\t为能够给服务器提长期稳定的运行的资金，我们不强制玩家赞助，但对于有帮助游戏正常运作的玩家，我们将会进行奖励发放，对此特开放此充值排行。\r\n";
				text+="\t#b充值排行将统计本月充值金额前10名的玩家，每月最后一天结束统计，并且于次月可以在我这里领取上月的充值排行奖励。#k\r\n";
				text+="\r\n#d#e月充值排行奖励如下：#n#k\r\n";
				text+="#r#e第一名#n#k 可获得#b全属性80，HP+10000#k#v1142499#专属勋章（为期一个月），蜡笔箱子一个，神奇、高级、大师魔方x50\r\n";
				text+="#g======================================================\r\n";
				text+="#r#e第二名#n#k 可获得#b全属性50，HP+8000#k#v1142498#专属勋章（为期一个月），神奇、高级、大师魔方x50\r\n";
				text+="#g======================================================\r\n";
				text+="#r#e第三名#n#k 可获得#b全属性30，HP+3000#k#v1142497#专属勋章（为期一个月），神奇、高级、大师魔方x30\r\n";
				text+="#g======================================================\r\n";
				text+="#b#r1-3#b名返还该月充值总金额的6%点券，以及上述相应奖励。\r\n#r4-6#b名返还该月充值总金额的4%点券，以及10个魔方。\r\n#r7-10#b名返还该月充值总金额的2%点券，以及5个魔方。";
				cm.sendOk(text);
				cm.dispose();
			}
		}
   }
}