/*
 脚本功能：拍卖脚本V2版
 */

var a = 0;
var icon = "#fUI/Basic.img/BtMin2/normal/0#";
var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var List = Array(
        //1 便民服务  2 游戏乐园
        Array(icon + " 游戏商店", 1, 1),
		//Array(icon + " 极品装备", 1008, 1),
        Array(icon + " 万能传送", 2, 1),
        Array(icon + " 抵用商城", 16, 1), //TODO
        Array(icon + " 职业转职", 4, 1),
		Array(icon + " 雪花兑换", 101, 1, 9310144),
        //Array("爆率查询", 5, 1),
        //Array("仓库管理", 14, 1),
        //Array("美容美发", 8, 1),
        //Array(icon + " 充值奖励", 13, 1), //TODO
        Array(icon + " 挑战首领", 13, 1),
        Array(icon + " #b更多服务#k", 6, 1),
        Array(iconEvent + " #r每日签到#k", 7, 2),
        Array(iconEvent + " #r每日任务#k", 12, 2), //TODO
        Array(iconEvent + " #r游戏副本#k", 108, 2),
		Array(iconEvent + " #r连续签到#k", 502, 2),
        Array(icon + " #r返回市场#k", 99, 1),
        Array(icon + " #r学习技能#k", 22, 1),
        Array(icon + " #r活跃查询#k", 23, 1),
		//Array(icon+ " 飞升洗髓", 1, 1, 9000174 ),
        Array(icon + " 游戏宝库", 10, 2), //TODO
        Array(icon + " 点卷商店", 15, 2),
		//Array(icon + " 时装觉醒", 1009, 2),
        Array(icon + " 物品回收", 500, 2),
        Array(icon + " 竞技积分", 501, 2)//TODO
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
            for (var i = 0; i < 3; i++) {
                ListFor(i);
            }
            cm.sendSimple(text)
        } else if (a == 1) {
            var mode_ = List[selection][1];
			var npcid = 9900003;
			if (List[selection][3]!=null)
			{
				npcid = List[selection][3];
			}
            cm.dispose();
            cm.openNpc(npcid, mode_);
        }//a
    }//mode
}//f


function ListFor(type) {
    switch (type) {
        case 1://便民服务
            text += "#e├─────── 匆匆冒险岛服务 ───────┤#n\r\n"
            break;
        case 2://游戏乐园
            text += "#e├─────── 匆匆冒险岛活动 ───────┤#n\r\n"
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