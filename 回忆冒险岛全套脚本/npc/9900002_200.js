var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var status = -1;
var mySpoints = -1;
var typed = 0;
var I = null;
var selects = 0;
var buynum=0;
var itemlist = Array(
	Array(4310014, 200), 
	Array(5062009, 100), 
	Array(5062002, 60), 
	Array(5062500, 80), 
	Array(5064000, 70)
);
function start() {
	I = new Invitation();
	if (mySpoints < 0) mySpoints = I.getPoints();
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		var text = head + "我是推广中心管理员，有什么需要帮助的吗？\r\n\r\n";
		text += "#e#d您当前的推广积分：#n#k" + mySpoints + "\r\n";
		if (I.getInvitation() == null) text += "#r#L0#邀请者账号补填[截止3月31日]#l\r\n\r\n";
		text += "#b#L2#查看推广系统说明#l\r\n";
		text += "#b#L1#推广积分兑换#l\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		typed = selection;
		if (selection == 0) {
			cm.sendGetText("请输入邀请者的账号：");
		} else if (selection == 1) {
			var text = head + "请选择您要兑换的物品：\r\n#b";
			for (var i = 0; i < itemlist.length; i++) {
				text += "#L" + (i) + "##i" + itemlist[i] + ":##t" + itemlist[i] + "# - #r" + itemlist[i][1] + "#b积分  \r\n";
				if (i != 0 && (i + 1) % 5 == 0) {
					text += "\r\n";
				}
			}
			cm.sendSimple(text);
		} else if (selection == 2) {
			var text = head + "#e#d<推广系统介绍>#n#k\r\n";
			text += "\t作为#e#r被邀请者#k#n，您可以设置一个邀请者的账号（只能设置一次，设置完成后无法更改），设置之后您可以领取10000点抵用券以及一枚勋章，当#r你（被邀请者）#k完成活跃度礼包、领取在线时间奖励或者充值的时候，会使你的#b邀请者#k获得相应的推广积分。\r\n";
			text += "\t作为#e#r邀请者#k#n，被邀请者每充值#r1元#k您就可以获得#r1点#k积分，每完成一个活跃阶段礼包和领取在线奖励时也可以获得相应积分。您可以使用推广积分兑换相应的物品。推广的有效人数越多，你的积分一定会蒸蒸日上。";
			cm.sendSimple(text);
			status = -1;
		}
	} else if (status == 2) {
		if (typed == 0) {
			var invitation = cm.getText();
			var myAccount = cm.getC().getAccountName();
			//推广账号不能为自己
			if (invitation == myAccount) {
				status = -1;
				cm.sendSimple("无法使用自己的账号。");
				return;
			}
			var isExists = I.checkAccountVaild(invitation);
			if (isExists) {
				var isSuccess = I.setInvitation(invitation);
				if (isSuccess) {
					cm.gainNX(2, 10000);
					cm.gainItem(1142073, 1);
					cm.sendSimple("设置成功！由于您是首次填写，我们赠送您#r10000#k抵用券以及#b#t1142073##k一个。");
					status = -1;
				} else {
					cm.sendSimple("您已经设置过邀请者的账号，无法重复设置。");
					status = -1
				}
			} else {
				cm.sendSimple("#r该账号不存在，无法设置。#k");
				status -= 2;
			}
		} else if (typed == 1) {
			selects = selection;
			cm.sendGetNumber("请输入你请你输入想要兑换的数量\r\n\r\n#r1个需要" + itemlist[selects][1] + "个#b推广积分#k", 1, 1, 100);
		}
	} else if (status == 3) {
		buynum = selection;
		cm.sendNext("你想兑换" + buynum + "个#r#i" + itemlist[selects][0] + "##k？\r\n你将使用掉" + (buynum * itemlist[selects][1]) + "点推广积分");
	} else if (status == 4) {
		var itemid = itemlist[selects][0];
		if (cm.getSpace(Math.floor(itemid / 1000000)) < 1) {
			cm.sendOk("您的背包空间不足，请整理后再购买。");
			cm.dispose();
			return;
		}
		var price = buynum * itemlist[selects][1];
		if (mySpoints >= price) {
			I.gainPoints(-price);
			mySpoints+=-price;
			cm.gainItem(itemlist[selects][0], buynum);
			cm.sendSimple("兑换成功了！");
			status = -1;
		} else {
			cm.sendSimple("推广积分不足，兑换失败！");
			status = -1;
		}
	}
}

var Invitation = function() {

	this.invitation = null;
	this.db = cm.getConnection();
	this.setInvitation = function(name) {
		var sql = "UPDATE accounts SET invitation = ? WHERE id = ? and (invitation is NULL or invitation = '')";
		var id = cm.getPlayer().getAccountID();
		var pstmt = this.db.prepareStatement(sql);
		pstmt.setString(1, name);
		pstmt.setInt(2, id);
		var isSuccess = (pstmt.executeUpdate() > 0) ? true: false;
		pstmt.close();
		return isSuccess;
	}

	//读取我的邀请者
	this.getInvitation = function() {
		if (this.invitation != null) return this.invitation;
		var sql = "SELECT invitation FROM accounts WHERE name = ?";
		var pstmt = this.db.prepareStatement(sql);
		var name = cm.getC().getAccountName();
		pstmt.setString(1, name);
		var rs = pstmt.executeQuery();
		if (rs.next()) this.invitation = rs.getString("invitation");
		rs.close();
		pstmt.close();
		return this.invitation;
	}

	//检测账号合法性
	this.checkAccountVaild = function(name) {
		var sql = "SELECT count(id) as num FROM accounts WHERE name = ?";
		var pstmt = this.db.prepareStatement(sql);
		pstmt.setString(1, name);
		var count = 0;
		var rs = pstmt.executeQuery();
		if (rs.next()) count = rs.getInt("num");
		rs.close();
		pstmt.close();
		return (count > 0) ? true: false;
	}

	//读取积分
	this.getPoints = function() {
		var sql = "SELECT spoints FROM accounts WHERE name = ?";
		var pstmt = this.db.prepareStatement(sql);
		var name = cm.getC().getAccountName();
		pstmt.setString(1, name);
		var count = 0;
		var rs = pstmt.executeQuery();
		if (rs.next()) count = rs.getInt("spoints");
		rs.close();
		pstmt.close();
		return count;
	}

	//积分给予
	this.gainPoints = function(quantity) {
		var sql = "UPDATE accounts SET spoints = spoints + ? WHERE id = ?";
		var id = cm.getPlayer().getAccountID();
		var pstmt = this.db.prepareStatement(sql);
		pstmt.setString(1, quantity);
		pstmt.setInt(2, id);
		var isSuccess = (pstmt.executeUpdate() > 0) ? true: false;
		pstmt.close();
		return isSuccess;
	}
}