/* 洗装备潜能 */

var status = -1;
var potList = Array(
Array(40603, "攻击BOSS时伤害：+40%", 1),
Array(40292, "无视怪物40%的防御率", 1),
Array(42051, "攻击力：+12%", 1),
Array(60001, "总伤害：+12% (不能修改附加潜能)", 1),
Array(60002, "所有属性：+20% (不能修改附加潜能)", 1),
Array(60007, "MaxHP : +10% (不能修改附加潜能)", 1),
Array(60008, "攻击力/魔力：+10% (不能修改附加潜能)", 1),
Array(40055, "爆击率 12%", 1));
var potId = -1; //潜能的ID
var depict = ""; //潜能的描述
var points = 5; //每次的价格
var potline = 1; //修改的潜能是第几条
var oldEquip;
var newEquip;
var count = 1; //定义洗到那个属性的次数
var slot = 1; //定义需要修改的装备在背包的位置
var potline = 1; //定义需要修改的是第几条潜能 [1-3] 为普通 [4-6] 为附加
var Nx = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n\r\n亲爱的#r#h ##k您好！一键潜能可以将装备的第一条属性修改为任意选择的属性，请将装备放置在装备栏第一格后进行该操作。\r\n一键潜能将消耗#r5个元宝#k和#r25万-100万#k之间的点卷，且至少有#r100万#k点卷才可以进行。";
        for (var i = 0; i < potList.length; i++) {
            selStr += "\r\n#L" + i + "##b " + potList[i][1] + "#k#l";
        }
        cm.sendSimple(selStr + " \r\n ");
    } else if (status == 1) {
        oldEquip = cm.getEquipBySlot(slot);
        if (oldEquip == null || oldEquip.getState() != 0x14) { //oldEquip.getState() != 0x14 检测装备普通潜能是否 SS
            cm.sendOk("出现错误: \r\n背包栏第1个位置的装备为空 或者 装备的潜能等级不为 SS");
            cm.dispose();
            return; //出现错误直接返回 不执行下面的操作 这个必须注意
        }
        var pot = potList[selection];
        if (pot != null) {
            potId = pot[0];
            depict = pot[1];
            cm.sendYesNo("您是否要将#b装备栏第一格装备\r\n第一条潜能属性(不会改变其它潜能属性)#k\r\n一键洗潜能属性为 #b" + depict + "#k？");
        } else {
            cm.sendOk("出现错误...");
            cm.dispose();
        }
    } else if (status == 2) {
		if(getMyRmb() < points) {
			cm.sendOk("请确认充值余额是否有5元");
			cm.dispose();
			return;
		}
		if (cm.getCSPoints(1) < 1000000) {
			cm.sendOk("请确保账号上有100万点卷，这样才能进行此操作。");
			cm.dispose();
			return ;
		}
		if (potId <= 0 || depict == "" || points <= 0) {
			cm.sendOk("出现错误...");
			cm.dispose();
			return;
		}
		cm.sendYesNo("是否确定将装备的第一条潜能修改为 #b" + depict + "#k ？\r\n");
    } else if (status == 3) {
        newEquip = cm.getEquipBySlot(slot);
        if (oldEquip == newEquip) { //这个地方还需要检测点卷数量
			if (cm.changePotential(slot, potline, potId, true)) { //[装备位置] [潜能位置] [潜能ID] [是否公告]
				gainRmb(-5);
				var costNX=Math.floor(Math.random()*750000+250000);
				cm.sendOk("恭喜您成功洗出潜能属性,花费了"+costNX+"点卷和5元余额");
				cm.getPlayer().saveToDB(false, false);
				cm.dispose();
				return;
			} else {
				cm.sendOk("出现错误...");
				cm.dispose();
			}
        } else {
            cm.sendOk("出现错误...");
	   		cm.dispose();
        }
    }
}

function getMyRmb() {
	var myRmb;
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
	return myRmb;
}

function gainRmb(num) {
	var myRmb;
	var conn = cm.getConnection();
	var sql = "update accounts set rmb=rmb+? accounts where id = ?;";
	var pstmt = conn.prepareStatement(sql);
	pstmt.setInt(1, num);
	pstmt.setString(2, cm.getPlayer().getAccountID());
	var myRmbSql = pstmt.executeUpdate();
	myRmbSql.close();
	pstmt.close();
	return true;
}