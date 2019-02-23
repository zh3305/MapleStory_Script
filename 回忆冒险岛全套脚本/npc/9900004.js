/*
 脚本功能：拍卖脚本V2版
 */

var a = 0;
var iconQ = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var icon = "#fUI/Basic.img/BtMin2/normal/0#";
var iconX = "#fEffect/CharacterEff/1112905/0/1#";
var iconStar = "#fEffect/CharacterEff/1112904/2/1#";
var icon1 = iconQ;//"#fEffect/CharacterEff/1042176/0/0#";
var iconHR = "#fEffect/CharacterEff/1082565/0/0#"
var icon2 = "#fEffect/CharacterEff/1082565/2/0#";
var icon3 = "#fEffect/CharacterEff/1082565/4/0#";
var icon4 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var List = Array(
		
		//奇乐助手

        
		
		//Array(icon1+"#r游戏排行#k", 200, 1, 9900004),
		
		
		Array(icon1+" 万能传送#k", 2, 1),
		
		Array(icon1+" 元宝兑换#k", 101, 1, 9310144),
		Array(icon1+" 职业转职#k", 4, 1),
		
        //Array(icon1+"#r每日任务#k", 12, 2), //TODO
       
		//Array(icon3+"#b在线奖励#k",608, 2, 9900003),
		
		Array(icon1+" 学习技能#k", 22, 2),
		Array(icon1+" 活跃礼包#k", 23, 2),
		Array(icon1+" #b返回市场#k", 99, 2),
		
		
		
		//Array("#b惊喜副本#k", 108, 3),
		//Array("#b挑战首领", 13, 3),
		//Array("#b组队任务", 6, 3, 9310144),
		//Array(icon1+" 竞技积分", 501, 3),//TODO
		
		Array(icon1+" 点卷中介", 5, 3, 9900004),
		Array(icon1+" 欢乐游戏", 0, 3, 9000232),//TODO
		//Array("#r游戏宝库#k", 10, 3),
		//Array("#r抵用商城", 16, 3), //TODO
		//Array("#r点卷商店", 15, 3),
		//Array(icon1+" 银行管理#k", 14, 3),
		Array(icon1+" 商店大全#k", 0, 3,9310143),
		Array(icon1+" 爆率查询#k", 5, 3),
		Array(icon1+" 物品回收", 500, 3),
		Array(icon1+" #e#r更多福利#n#k", 0, 3, 9310144)
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
			if (cm.getBossLog("新手驾到")>=0) {
				cm.dispose();
				cm.openNpc(2008, 1);
				return;
			}
			var myRmb = getMyRmb();
			text = "  "+icon3+"尊敬的玩家#b#h ##k，欢迎来到#b#e回忆冒险岛#n#k\r\n";
			text+="  "+iconQ+" 在线：#r"+cm.getPlayer().getTodayOnlineTime()+"#k 分钟\t活跃度：#r"+ cm.getActivity()+"#k\t活力值：#r"+cm.getPlayerEnergy()+"#k\r\n";
            text += "  "+iconQ+" 点卷：#r"+cm.getPlayer().getCSPoints(1)+"#k\t抵用券：#r"+cm.getPlayer().getCSPoints(2)+"#k\r\n";
			text += "  "+iconQ+" 元宝：#r"+myRmb+"#k\t累计充值：#r"+cm.getRMB()+"#k\r\n";
			
			text+="    \t#r#L10005#"+icon3+"#e#b#r超值福袋#k#n"+icon3+"#l\t#r#L10007#"+icon3+"#e#b#r推广奖励#k#n"+icon3+"#l\r\n";
			text+=" #e#d#L10001#"+icon2+"盖楼活动#n#k"+icon2+"#l #e#b#L10002#"+icon2+"等级礼包#n#k"+icon2+"#l #e#d#L10003#"+icon2+"免费10级#n#k"+icon2+"#l\r\n";
            text+="     #r#L10004#"+icon2+"#e#r今日在线奖励#n#k"+icon2+"#l #r#L10006#"+icon2+"#e#r新人七日福利#n#k"+icon2+"#l\r\n\r\n";
			ListFor(1);
			ListFor(2);
			text+="\r\n";
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
					cm.openNpc(9300011);
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
					cm.openNpc(9900003, 608);
				break;
				case 10005:
					cm.dispose();
					cm.openNpc(9201116);
				break;
				case 10006:
					cm.dispose();
					cm.openNpc(9900002, 1);
				break;
				case 10007:
					cm.dispose();
					cm.openNpc(9900002, 200);
				break;
				default: 
					var mode_ = List[selection][1];
					var npcid = 9900003;
					if (List[selection][3] != null)
						npcid = List[selection][3];
					cm.dispose();
					if (npcid == 1) {
						cm.openWeb("http://www.huiyimxd.com");
					} else {
						cm.openNpc(npcid, mode_);
					}
			}
            
		}//a
    }//mode
}//f


function ListFor(type) {
    var x = 0;
	var space = "    ";
    for (var i = 0; i < List.length; i++) {
        if (List[i][2] == type) {
            if (x == 2) {
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
