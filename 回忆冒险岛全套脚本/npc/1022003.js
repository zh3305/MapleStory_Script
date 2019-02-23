/*
 脚本功能：市场管理员
 */

var a = 0;
var icon = "#fUI/Basic.img/BtMin2/normal/0#";
//var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var ttt4 ="#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//美化New
var icon2 = "#fEffect/CharacterEff/1082565/2/0#";
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var iconEvent = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var List = Array(
		Array(iconEvent + " #d装备制作", 24, 1, 1022003),
		Array(iconEvent + " #d品级强化", 2, 1, 1022003),
		Array(iconEvent + " #d时装强化", 25, 1, 1022003),
		//Array(iconEvent + " #b飞升洗髓", 1, 1, 9000174),
		Array(iconEvent + " #d伤害突破", 1000, 1, 1022003),
		Array(iconEvent + " #d蜡笔潜能", 1001, 1, 1022003),
		Array(iconEvent + " #d装备还原", 1111, 1, 1022003),
		Array(iconEvent + " #d装备出售#k", 504, 1, 1022003),
		Array(iconEvent + " #d装备分解#k", 503, 1, 1022003),
		Array(iconEvent + " #d翅膀进阶", 500, 1, 1022003)
		//Array(iconEvent + " #r暖男女神#k", 777, 1, 9310144)
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
            text = head+"你好，我是装备铸造大师#p1022003#，有什么可以帮助你的吗？\r\n";
            for (var i = 0; i < 2; i++) {
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
}