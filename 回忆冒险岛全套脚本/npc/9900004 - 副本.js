/*
 脚本功能：拍卖脚本V2版
 */

var a = 0;
var icon = "#fUI/Basic.img/BtMin2/normal/0#";
var iconX = "#fEffect/CharacterEff/1112905/0/1#";
var iconStar = "#fEffect/CharacterEff/1112904/2/1#";
var List = Array(
		
		//回忆助手
        Array("#d职业转职", 4, 1),
		Array("#d万能传送", 2, 1),
        Array("#d银行管理", 14, 1),
        Array("#d爆率查询", 5, 1),
		Array("#d物品爆率", 100, 1, 9310144),
		Array("#d美容美发", 9, 1),
		//Array("#b重置副本", 3, 1, 9900004),
		Array("#d物品回收", 500, 1),
		Array("#d装备还原", 1111, 1, 9000069),
		Array("#r#e元宝兑换#n", 101, 1, 9310144),
		Array("#r游戏排行#k", 200, 1, 9900004),
		Array("#r装备出售#k", 503, 1),
        Array("#r学习技能#k", 22, 1),
        Array("#r活跃查询#k", 23, 1),
		Array("#r返回市场\r\n#k", 99, 1),
        
		//挑战副本
		Array("#r惊喜副本#k", 108, 2),
		Array("#b挑战首领", 13, 2),
		Array("#b组队任务", 6, 2, 9310144),
		
		//游戏商店
        Array("#b游戏商店", 1, 3),
		Array("#b抵用商城", 16, 3), //TODO
		Array("#b游戏宝库", 10, 3), //TODO
		Array("#b点卷商店", 15, 3),
		Array("#b竞技积分", 501, 3),//TODO
		Array("#r雪花商店#k", 0, 3, 9310143),
		Array("#r购买会员#k", 17, 3, 9310144),
        
		//我要变强
		//Array("武器合成", 100, 4, 9900002),
		Array("#r装备品级#k", 0, 4, 1022003),
		Array("#b飞升洗髓", 1, 4, 9000174),
		Array("#b装备制作", 24, 4),
        Array("#b武器破功", 1000, 4),
		Array("#b蜡笔潜能", 1001, 4),
		Array("#b时装觉醒", 0, 4, 9000069)
);

var text;
//是否活动，名字，模式，类别

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
			var myRmb = getMyRmb();
			text = "\r\n";
            text += "\t#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0# 您的元宝：#r#e"+myRmb+"#n#k个 #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0# 今天在线：#r#e"+cm.getPlayer().getTodayOnlineTime()+"#n#k分钟";
			for (var i = 0; i < 5; i++) {
                ListFor(i);
            }
            cm.sendSimple(text)
        } else if (a == 1) {
            var mode_ = List[selection][1];
            cm.dispose();
			var npcid = 9900003;
			if (List[selection][3] != null)
				npcid = List[selection][3];
            cm.openNpc(npcid, mode_);
        }//a
    }//mode
}//f


function ListFor(type) {
    switch (type) {
        case 1://游戏乐园
            text += "#e#d├───────── 回忆助手 ────────┤#n#k\r\n"
            break;
		case 2:
			text+=  "#e#d├───────── 挑战副本 ────────┤#n#k\r\n"
			break;
		case 3:
			text+=  "#e#d├───────── 回忆商城 ────────┤#n#k\r\n"
			break;
		case 4:
			text+=  "#e#d├───────── 如虎添翼 ────────┤#n#k\r\n"
			break;
    }
    var x = 0;
    for (var i = 0; i < List.length; i++) {
        if (List[i][2] == type) {
            if (x == 3) {
                text += "#L" + i + "#" + List[i][0] + "#l\r\n";
                x = 0;
            } else {
                text += "#L" + i + "#" + List[i][0] + "#l";
                x++;
            }
        }
    }
	if (type==1)
		text+="#e\r\n";
	else
    	text += "#e\r\n\r\n";
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