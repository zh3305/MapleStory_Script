//积分活动

var status = 0;
var typed = 0;
var myRmbPoints;
//积分档次
var pointTypes = Array(10,50,100,200,500,1000);
//礼包内容
var pointGifts = Array(
	//10积分礼包
	Array(1, 1112918, 1, 3),  //回归戒指
	//50积分礼包
	Array(2, 2430639, 1),
	//100积分礼包
	Array(3, 2430640, 1),  //明日礼物箱子
	//200积分礼包
	Array(4, 2431995, 1,null, "10攻惊人武器卷轴箱子"),  //贝勒德箱子
	//500积分礼包
	Array(5, 2431725, 1,null, "蜡笔随机箱子"),  //惊人武器卷轴箱子
	Array(5, 2049323, 10),
	//1000积分礼包
	Array(6, 2431996,1,null, "暴君装备箱子"),
	Array(6, 2049323, 30)
);
var lastGifts = Array();

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
			var text ="\t请选择您要兑换的积分礼包，兑换完成后将扣除相应的积分，点击可查看礼包的详细内容。\r\n\r\n"
			text+="#k您当前的充值积分为：#r"+myRmbPoints+"#k点\r\n\r\n#b";
			for(var i=0; i<pointTypes.length; i++) {
				text+="#L"+i+"#兑换"+pointTypes[i]+"积分礼包#l\r\n";
			}
			cm.sendSimple(text);
			//cm.dispose();
		} else if (status == 1) {
			var text="礼包内容：\r\n";
			
			typed = selection;
			for(var i=0; i<pointGifts.length; i++) {
				if ((typed+1)!=pointGifts[i][0])
					continue;
				var itemName = "#z"+pointGifts[i][1]+"#";
				if (pointGifts[i][4]!=null)
					itemName = pointGifts[i][4];
				if (pointGifts[i][3]!=null) {
					text+="#v"+pointGifts[i][1]+"##b"+itemName+" - "+pointGifts[i][3]+"天权 x#r"+pointGifts[i][2]+"#k个 #k\r\n";
				}
				else
				{
					text+="#v"+pointGifts[i][1]+"##b"+itemName+"#k x#r"+pointGifts[i][2]+"#k个\r\n";
				}
			}
			//text+=pointGiftContent[selection];
			text+="\r\n您确定要兑换该礼包吗？兑换成功后将扣除您#r"+pointTypes[selection]+"#k点积分";
			cm.sendYesNo(text);
			//cm.dispose();
		} else if (status == 2) {
			//获取积分数
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
			
			//检查积分是否足够
			if (myRmbPoints<pointTypes[typed]) {
				cm.sendOk("兑换失败，您没有这么多积分");
				cm.dispose();
				return;
			}
			//检查包裹是否有空
			if (cm.getSpace(1)<2 || cm.getSpace(2)<2 || cm.getSpace(3)<2 || cm.getSpace(4)<2 || cm.getSpace(5)<2) {
				cm.sendOk("兑换失败，请确认您的背包每个栏位至少有两个格子。");
				cm.dispose();
				return;
			}
			//减少积分
			pstmt = conn.prepareStatement("update accounts set rmbpoints=rmbpoints-"+pointTypes[typed]+" where id = "+cm.getPlayer().getAccountID()+";");
			var isSuccess = pstmt.executeUpdate();
			//判断减少积分是否成功
			if (isSuccess >= 1) {
				//成功给予奖励
				for(var i=0; i<pointGifts.length; i++) {
					if ((typed+1)!=pointGifts[i][0])
						continue;
					if (pointGifts[i][3]!=null) {
						cm.gainItem(pointGifts[i][1],pointGifts[i][2],pointGifts[i][3]);
					}
					else
					{
						cm.gainItem(pointGifts[i][1],pointGifts[i][2]);
					}
				}
				cm.sendOk("恭喜您，兑换成功");
				cm.worldSpouseMessage(0x20,"[积分礼包]：玩家 "+ cm.getChar().getName() +" 兑换了"+pointTypes[typed]+"积分充值礼包，真是豪气！");
				cm.dispose();
			} else {
				cm.sendOk("未知原因，兑换失败，请联系管理员。");
				cm.dispose();
			}
			pstmt.close();
			//conn.close();
		}
   }
}