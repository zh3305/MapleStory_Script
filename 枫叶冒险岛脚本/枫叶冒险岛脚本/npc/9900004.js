/*
 脚本功能：拍卖脚本V2版
 */

var a = 0;
var icon = "#fUI/Basic.img/BtMin2/normal/0#";
var iconX = "#fEffect/CharacterEff/1112905/0/1#";
var iconStar = "#fEffect/CharacterEff/1112904/2/1#";
var icon1 = "#fEffect/CharacterEff/1042176/0/0#";
var iconHR = "#fEffect/CharacterEff/1082565/0/0#"
var icon2 = "#fEffect/CharacterEff/1082565/2/0#";
var icon3 = "#fEffect/CharacterEff/1082565/4/0#";
var icon4 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var List = Array(
		
		//奇乐助手
        
		Array(icon1+"#r万能传送#k", 2, 1),
		Array(icon1+"#r游戏排行#k", 200, 1, 9900004),
		Array(icon1+"#r回市场#k", 99, 1),
		Array(icon1+"#r充值兑换#k", 101, 1, 9310144),
		
		
		
		//Array(icon3+"#b每日签到#k", 7, 2),
        Array(icon1+"#r每日任务#k", 12, 2), //TODO
        //Array(icon3+"#b连续签到#k", 502, 2),
		//Array(icon3+"#b在线奖励#k",608, 2, 9900003),
		Array(icon1+"#r职业转职#k", 4, 2),
		Array(icon1+"#r学技能#k", 22, 2),
		Array(icon1+"#r活跃查询#k", 23, 2),
		
		
		
		Array("#b惊喜副本#k", 108, 3),
		Array("#b挑战首领", 13, 3),
		Array("#b组队任务", 6, 3, 9310144),
		Array("#b竞技积分", 501, 3),//TODO
		
		Array("#r游戏充值", 1000, 3, 1),
		Array("#r购买会员#k", 17, 3, 9310144),
		Array("#r抵用商城", 16, 3), //TODO
		Array("#r点卷商店", 15, 3),
		
		Array("#d爆率查询#k", 5, 3),
		Array("#d重置副本", 3, 3, 9900004),
		Array("#d物品回收", 500, 3),
		Array("#e#g更多#r服务#n#k", 0, 3, 9310144)
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
			text = "  "+iconHR+"尊敬的玩家#b#h ##k，欢迎来到#b#e枫叶冒险岛#n#k\r\n";
			text+="  "+icon2+"今天在线：#r"+cm.getPlayer().getTodayOnlineTime()+"#k分钟 "+icon2+"在线积分：#r"+cm.getBossLog('在线积分')+"#k "+icon2+"活力值：#r"+cm.getPlayerEnergy()+"#k\r\n";
            text += "  "+icon2+"余额：#r"+myRmb+"#k "+icon2+"累计充值：#r"+cm.getRMB()+"#k\r\n";
			ListFor(1);
			ListFor(2);
			text+=" #e#d#L10001#"+iconHR+"盖楼活动#n#k"+iconHR+"#l #e#g#L10002#"+iconHR+"我要变强#n#k"+iconHR+"#l #e#d#L10003#"+iconHR+"免费10级#n#k"+iconHR+"#l\r\n";
            text+="\t\t\t   #r#L10004#"+iconHR+"积分-在线-活力"+iconHR+"#l\r\n";
			ListFor(3);
			cm.sendSimple(text)
        } else if (a == 1) {
			switch(selection) {
				//盖楼
				case 10001:
					cm.dispose();
					cm.openNpc(9900000);
				break;
				//我要变强
				case 10002:
					cm.dispose();
					cm.openNpc(9900004, 1);
				break;
				//免费10级:
				case 10003:
					if (cm.getLevel() < 10) {
						for(var i=0; i<10; i++) {
							if (cm.getLevel()>=10) 
								break;
							cm.gainExp(2000000000);
						}
					} else {
						cm.sendOk("您已经达到10级，无法再使用该功能。");
					}
					cm.dispose();
				break;
				//在线活力积分
				case 10004:
					cm.dispose();
					cm.openNpc(9900003, 6008);
				break;
				default: 
					var mode_ = List[selection][1];
					var npcid = 9900003;
					if (List[selection][3] != null)
						npcid = List[selection][3];
					cm.dispose();
					cm.openNpc(npcid, mode_);
			}
            
		}//a
    }//mode
}//f


function ListFor(type) {
    var x = 0;
	var space = "";
	if (type>=3)
		space="  ";
    for (var i = 0; i < List.length; i++) {
        if (List[i][2] == type) {
            if (x == 3) {
                text += "#L" + i + "#" + List[i][0] + "#l\r\n";
                x = 0;
            } else {
                text += "#L" + i + "#" + List[i][0] + "#l"+space;
                x++;
            }
        }
    }
	//text+="\r\n";
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
