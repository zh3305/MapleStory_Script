var status;
var eff ="#fUI/UIWindow/Quest/icon6/7#";
var bili = 3000;

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
        if (mode == 1) {
            status++;
        } else {
            if (status == 0) {
                cm.sendNext("如果您需要点卷中介的话，那么请下次来找我！");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {
            cm.sendSimple("#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，这里可以将余额兑换为点券\r\n  兑换比例 1:" + bili + ",请想好了再兑换哦!!!\r\n\r\n  您当前余额为:#r " + cm.getRMB() + " #k元\r\n  您当前点券为:#r " + cm.getNX(1) + "#k点\r\n#b#L0#" + eff + "我要兑换点券#l\r\n");
        } else if (status == 1) {
            cm.sendGetNumber("#e#r请输入您要兑换多少余额：(兑换比例为1:" + bili + ")\r\n\r\n ", 1, 1, 1000);
        } else if (status == 2) {
            if (selection < 1 || selection > 1000) {
                cm.sendOk("所填数字非法，请重新输入");
                status = 0;
            } else if (cm.getRMB() < selection) {
                cm.sendOk("你没有那么多的余额，请重新输入");
                status = 0;
            } else {
                cm.gainRMB(-selection);
                cm.gainNX(1, selection * bili);
                cm.sendOk("#e恭喜你成功将#r " + selection + " 余额 #k兑换成 #r" + (selection * bili) + " 点券#k\r\n\r\n#b祝你游戏愉快！");
                cm.dispose();
            }
            status = -1;
        }
    }
}

function getRMB() {
	var ret = 0;
	var conn = cm.getConnection();
    var UpDateData = conn.prepareStatement("SELECT rmb FROM accounts WHERE id = ?");
    UpDateData.setInt(1, cm.getPlayer().getAccountID());
	var rs = UpDateData.executeQuery();
	if (rs.next())
	{
		ret = rs.getInt("rmb");
	}
	UpDateData.close();
	return ret;
}

function gainRMB(times) {
	var conn = cm.getConnection();
    var UpDateData = conn.prepareStatement("UPDATE accounts SET rmb = rmb + ? WHERE id = ?");
    UpDateData.setInt(1, times);
    UpDateData.setInt(2, cm.getPlayer().getAccountID());
	UpDateData.executeUpdate();
	UpDateData.close();
}