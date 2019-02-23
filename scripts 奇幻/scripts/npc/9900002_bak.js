/*
 脚本功能：拍卖脚本V2版
 */

var a = 0;
var icon = "#fUI/Basic.img/BtMin2/normal/0#";
var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var List = Array(
		//福利项目
		Array(iconEvent + " #r每日签到#k", 7, 1),
        Array(iconEvent + " #r每日任务#k", 12, 1), //TODO
        Array(iconEvent + " #r连续签到#k", 502, 1),
		Array(iconEvent + " #r在线奖励#k",608, 1, 9900003),
		Array(iconEvent + " #r充值奖励#k", 8, 1, 9310144),
		Array(iconEvent + " #r我要答题#k", 604, 1),
		Array(iconEvent + " #r活动奖励#k", 1, 1, 9310144),
		Array(iconEvent + " #r解锁密码#k", 111, 1),
		
		//校园助手
        Array(icon + " 职业转职", 4, 2),
		Array(icon + " 万能传送", 2, 2),
		Array(icon + " 元宝兑换", 101, 2, 9310144),      
        Array(icon + " 银行管理", 14, 2),
        Array(icon + " 爆率查询", 5, 2),
		Array(icon + " 物品爆率", 100, 2, 9310144),
		Array(icon + " 美容美发", 9, 2),
		Array(icon + " 重置副本", 3, 2, 9900004),
		Array(icon + " 物品回收", 500, 2),
        Array(icon + " #r学习技能#k", 22, 2),
        Array(icon + " #r活跃查询#k", 23, 2),
		Array(icon + " #r返回市场#k", 99, 2),
        
		//挑战副本
		Array(icon + " #r惊喜副本#k", 108, 3),
		Array(icon + " 挑战首领", 13, 3),
		Array(icon + " 组队任务", 6, 3, 9310144),
		
		//游戏商店
		Array(icon + " #r雪花商店#k", 0, 4, 9310143),
        Array(icon + " 游戏商店", 1, 4),
		Array(icon + " 抵用商城", 16, 4), //TODO
		Array(icon + " 游戏宝库", 10, 4), //TODO
		Array(icon + " 竞技积分", 501, 4),//TODO
		Array(icon + " 点卷商店", 15, 4),
		Array(icon + " #r购买会员#k", 17, 4, 9310144),
        
		//我要变强
		Array(icon + " 武器制作", 24, 5),
        Array(icon + " 武器破功", 1000, 5),
		Array(icon + " 蜡笔潜能", 1001, 5),
		Array(icon + " 时装觉醒", 0, 5, 9000069)
)
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
            text = "";
            for (var i = 0; i < 6; i++) {
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
        case 1://便民服务
            text += "#e#d├───────── 日常福利 ────────┤#n#k\r\n"
            break;
        case 2://游戏乐园
            text += "#e#d├───────── 校园助手 ────────┤#n#k\r\n"
            break;
		case 3:
			text+=  "#e#d├───────── 挑战副本 ────────┤#n#k\r\n"
			break;
		case 4:
			text+=  "#e#d├───────── 校园商城 ────────┤#n#k\r\n"
			break;
		case 5:
			text+=  "#e#d├───────── 如虎添翼 ────────┤#n#k\r\n"
			break;
    }
    var x = 0;
    for (var i = 0; i < List.length; i++) {
        if (List[i][2] == type) {
            if (x == 2) {
                text += "  #L" + i + "#" + List[i][0] + "#l\r\n";
                x = 0;
            } else {
                text += "  #L" + i + "#" + List[i][0] + "#l";
                x++;
            }
        }
    }
    text += "#e\r\n\r\n";
}
