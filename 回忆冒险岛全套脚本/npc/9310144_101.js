var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var status = 0;
var typed = 0;
var myRmb;
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
			var sql = "select rmb from accounts where id = ?;";
			var pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, cm.getPlayer().getAccountID());
			var myRmbSql = pstmt.executeQuery();
			if (myRmbSql.next()) {
				myRmb = myRmbSql.getString("rmb");
			} else {
				myRmb = 0;
			}
			myRmbSql.close();
			pstmt.close();
			//conn.close();
			var text =head+"您可以在我这里使用元宝兑换国庆币或者点卷。\r\n\r\n";
			text+="\t- 您当前的元宝为：#r"+myRmb+"#k个\r\n\r\n";
			text+="#r#L0#"+icon+" 查看充值奖励\r\n";
			text+="#b#L1#"+icon+" 元宝兑换国庆币\t\t    #r比例 1:1#b#l\r\n"
			text+="#L2#"+icon+" 元宝兑换点卷\t\t\t#r比例 1:1000#b#l\r\n"
			text+="#L3#"+icon+" 国庆币兑换元宝\t\t    #r比例 1:1#b#l\r\n"
			//text+="#L4#"+icon+" 雪花币兑换交易币#l\r\n"
			//text+="#L5#"+icon+" 交易币兑换雪花币#l";
			cm.sendSimple(text);
			//cm.dispose();
		} else if (status == 1) {
			if (selection == 0) {
				cm.dispose();
				cm.openNpc(9310144, 8);
				return;
			} else if (selection == 1) {
				cm.sendGetText("#b【元宝兑换国庆币】 1:1#k\r\n\r\n您当前有#r"+myRmb+"#k个元宝，请输入想要兑换的元宝数量：");
				typed = 1;
			} else if (selection == 2) {
				cm.sendGetText("#b【元宝兑换点卷】 1:1000#k\r\n\r\n您当前有#r"+myRmb+"#k个元宝，请输入想要兑换的元宝数量：");
				typed = 2;
			} else if (selection == 3){
				cm.sendGetText("#b【国庆币兑换元宝】 1:1#k\r\n\r\n您当前有#r"+cm.getItemQuantity(4000463)+"#k个#v4000463#国庆币，请输入想要兑换的数量：");
				typed = 3;
			} else if (selection == 4) {
				cm.sendGetText("#b【雪花币兑换交易币】 1:1#k\r\n\r\n您当前有#r"+cm.getItemQuantity(4310014)+"#k个#v4310014#雪花币，请输入想要兑换的数量：");
				typed = 4;
			} else if (selection == 5) {
				cm.sendGetText("#b【交易币兑换雪花币】 1:1#k\r\n\r\n您当前有#r"+cm.getItemQuantity(4000463)+"#k个#v4000463#交易币，请输入想要兑换的数量：");
				typed = 5;
			} 
			//cm.dispose();
		} else if (status == 2) {
			var ybNum = Math.floor(cm.getText()*1);
			if (isNaN(ybNum)){
				cm.sendOk("很抱歉，数量只能为#r数字#k，请重新确认后查询！");
				cm.dispose();
				return;
			}
			if (ybNum<=0) {
				cm.sendOk("请输入大于0的数字！");
				cm.dispose();
				return;
			}
			if (ybNum>10000) {
				cm.sendOk("每次最多输入10000，请返回重新输入");
				cm.dispose();
				return;
			}
			if (typed == 1) {
				var conn = cm.getConnection();
				var sql = "select rmb from accounts where id = ?;";
				var pstmt = conn.prepareStatement(sql);
				pstmt.setString(1, cm.getPlayer().getAccountID());
				var myRmbSql = pstmt.executeQuery();
				if (myRmbSql.next()) {
					myRmb = myRmbSql.getString("rmb");
				} else {
					myRmb = 0;
				}
				myRmbSql.close();
				
				if (ybNum<=myRmb) {
					if (cm.getSpace(4) < 3) {
						cm.sendOk("您的包裹满了，请保证其他栏至少有3格位置");
						cm.dispose();
						return;
					}
					cm.gainItem(4000463, ybNum);
					myRmb-=ybNum;
					pstmt = conn.prepareStatement("update accounts set rmb = rmb-"+ybNum+" where id = "+cm.getPlayer().getAccountID()+";");
					pstmt.executeUpdate();
					cm.sendOk("恭喜您成功兑换了#r"+ybNum+"#k个国庆币。");
					cm.worldSpouseMessage(0x20, "[系统公告] : 恭喜 " + cm.getChar().getName() + " 使用元宝成功兑换了"+ybNum+"个国庆币.");
					cm.finishActivity(120112);
					cm.dispose();
				} else {
					cm.sendOk("您的元宝看起来好像没有那么多呢？");
					cm.dispose();
				}
				pstmt.close();
				//conn.close();
			} else if (typed == 2) {
				var conn = cm.getConnection();
				var sql = "select rmb from accounts where id = ?;";
				var pstmt = conn.prepareStatement(sql);
				pstmt.setString(1, cm.getPlayer().getAccountID());
				var myRmbSql = pstmt.executeQuery();
				if (myRmbSql.next()) {
					myRmb = myRmbSql.getString("rmb");
				} else {
					myRmb = 0;
				}
				myRmbSql.close();
				if (ybNum<=myRmb) {
					cm.gainNX(1, ybNum*1000);
					myRmb-=ybNum;
					pstmt = conn.prepareStatement("update accounts set rmb = rmb-"+ybNum+" where id = "+cm.getPlayer().getAccountID()+";");
					pstmt.executeUpdate();
					cm.sendOk("恭喜您成功兑换了#r"+(ybNum*1000)+"#k点卷。");
					cm.worldSpouseMessage(0x20, "[系统公告] : 恭喜 " + cm.getChar().getName() + " 使用元宝成功兑换了"+(ybNum*1000)+"点卷.");
					cm.finishActivity(120113);
					cm.dispose();
				} else {
					cm.sendOk("您的元宝看起来好像没有那么多呢？");
					cm.dispose();
				}
				pstmt.close();
				//conn.close();
			} else if (typed==3) {
				var conn = cm.getConnection();
				var sql = "select rmb from accounts where id = ?;";
				var pstmt = conn.prepareStatement(sql);
				pstmt.setString(1, cm.getPlayer().getAccountID());
				var myRmbSql = pstmt.executeQuery();
				if (myRmbSql.next()) {
					myRmb = myRmbSql.getString("rmb");
				} else {
					myRmb = 0;
				}
				myRmbSql.close();
				if (cm.haveItem(4000463, ybNum)) {
					pstmt = conn.prepareStatement("update accounts set rmb = rmb+"+ybNum+" where id = "+cm.getPlayer().getAccountID()+";");
					pstmt.executeUpdate();
					//cm.getConnection().prepareStatement().executeUpdate();
					myRmb+=ybNum;
					cm.gainItem(4000463, -ybNum);
					cm.sendOk("恭喜您成功兑换了#r"+ybNum+"#k个元宝。");
					//cm.worldSpouseMessage(0x20, "[系统公告] : 恭喜 " + cm.getChar().getName() + " 使用元宝成功兑换了"+(ybNum*500)+"点卷.");
					cm.dispose();
				} else {
					cm.sendOk("您的国庆币看起来好像没有那么多呢？");
					cm.dispose();
				}
				pstmt.close();
				//conn.close();
			} else if (typed==4) {
				if (cm.haveItem(4310014, ybNum)) {
					if (cm.getSpace(4) < 3) {
						cm.sendOk("您的包裹满了，请保证其他栏至少有3格位置");
						cm.dispose();
						return;
					}
					cm.gainItem(4310014, -ybNum);
					cm.gainItem(4000463, ybNum);
					cm.sendOk("恭喜您成功兑换了#r"+ybNum+"#k个#v4000463#交易币。");
					//cm.worldSpouseMessage(0x20, "[系统公告] : 恭喜 " + cm.getChar().getName() + " 使用元宝成功兑换了"+(ybNum*500)+"点卷.");
					cm.dispose();
				} else {
					cm.sendOk("您的雪花币看起来好像没有那么多呢？");
					cm.dispose();
				}
			} else if (typed==5) {
				if (cm.haveItem(4000463, ybNum)) {
					if (cm.getSpace(4) < 3) {
						cm.sendOk("您的包裹满了，请保证其他栏至少有3格位置");
						cm.dispose();
						return;
					}
					cm.gainItem(4000463, -ybNum);
					cm.gainItem(4310014, ybNum);
					cm.sendOk("恭喜您成功兑换了#r"+ybNum+"#k个#v4310014#雪花币。");
					//cm.worldSpouseMessage(0x20, "[系统公告] : 恭喜 " + cm.getChar().getName() + " 使用元宝成功兑换了"+(ybNum*500)+"点卷.");
					cm.dispose();
				} else {
					cm.sendOk("您的交易币看起来好像没有那么多呢？");
					cm.dispose();
				}
			}
		}
   }
}