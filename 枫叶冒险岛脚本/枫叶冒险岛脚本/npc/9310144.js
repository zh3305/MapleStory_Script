/*
 脚本功能：市场管理员
 */

var a = 0;
var icon = "#fUI/Basic.img/BtMin2/normal/0#";
var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var ttt4 ="#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//美化New
var icon2 = "#fEffect/CharacterEff/1082565/2/0#";

var List = Array(
		//福利项目

		Array(iconEvent + " #r充值奖励#k", 8, 1, 9310144),
		Array(iconEvent + " #r活动奖励#k", 1, 1, 9310144),
		Array(iconEvent + " #r解锁密码#k", 111, 1),
		
		Array(iconEvent + " #b游戏商店", 1, 1),
		Array(iconEvent + " #b抵用商城", 16, 1), //TODO
		Array(iconEvent + " #b游戏宝库", 10, 1), //TODO
		
		Array(iconEvent + " #b点卷商店", 15, 1),
		Array(iconEvent + " #b雪花商店#k", 0, 1, 9310143),
		Array(iconEvent + " #b购买会员#k", 17, 1, 9310144),
		
		Array(iconEvent + " #d爆率查询#k", 5, 1),
		Array(iconEvent + " #d物品查询", 100, 1, 9310144),
		Array(iconEvent + " #d银行管理", 14, 1),
		
		Array(iconEvent + " #d装备制作", 24, 1),
		Array(iconEvent + " #d装备还原", 1111, 1, 9000069),
		Array(iconEvent + " #d装备回购#k", 503, 1)
		
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
            for (var i = 0; i < 2; i++) {
                ListFor(i);
            }
			text += "\r\n#e#g\t\t  "+icon2+" 枫叶冒险岛祝您游戏愉快 "+ icon2 +"#n#k\r\n";
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
            text += "#e#d├───────── 服务中心 ────────┤#n#k\r\n";
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
    text += "#e";
}
