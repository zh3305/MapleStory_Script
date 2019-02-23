/*
 综合NPC
 */
var a = 0;
var icon = "#fUI/Basic.img/BtMin2/normal/0#";
var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var ttt4 ="#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//美化New
var icon2 = "#fEffect/CharacterEff/1082565/2/0#";
var List = Array(
		//福利项目
		Array(iconEvent + " #r赞助理财#k", 17,  1, 9310144),
		//Array(iconEvent + " #r游戏充值#k", 1000,1,1),
		Array(iconEvent + " #r充值奖励#k", 8,   1, 9310144),
		Array(iconEvent + " #r元宝兑换", 101, 1, 9310144),
		Array(iconEvent + " #r点卷中介#k", 11, 1, 9900004),
		//Array(iconEvent + " #r春节币店#k", 1, 1, 9310144),
		Array(iconEvent + " #r解锁密码#k", 111, 1),
        //Array(iconEvent + " #b点卷商店", 15, 2),
		Array(iconEvent + " #r我的花园#k", 0, 1, 9330065),
		Array(iconEvent + " #r尖兵导弹#k", 333, 1, 9310144),
		Array(iconEvent + " #r宠物复活#k", 0, 1, 1032102),
		//Array(iconEvent + " #b游戏商店", 1, 2),
        //Array(iconEvent + " #b游戏宝库", 10, 2), //TODO
		Array(iconEvent + " #b抵用商城", 16, 2), 
		Array(iconEvent + " #b副本重置", 3, 2, 9900004), 
		Array(iconEvent + " #b爆率查询#k", 5, 3),
		Array(iconEvent + " #b物品查询", 100, 3, 9310144),
		Array(iconEvent + " #b银行存款", 14, 3),
		Array(iconEvent + " #b装备制作", 24, 3),
		Array(iconEvent + " #b装备还原", 1111, 3, 9000069),
		Array(iconEvent + " #b装备回购#k", 503, 3),
        Array(iconEvent + " #d激情抢楼#k", 0, 3, 9201116),
	    Array(iconEvent + " #d智力答题#k", 0, 3, 9070000),	
	    Array(iconEvent + " #d高级转蛋#k", 0, 3, 9310472),
		Array(iconEvent + " #d每周挤奶#k", 0, 3, 1092090),
	    Array(iconEvent + " #d游戏排行#k", 200, 3, 9900004),
		Array(iconEvent + " #d点卷洗血#k", 333, 3, 9900004),
	    Array(iconEvent + " #d饲养礼包#k", 0, 3, 9073025),
	    //Array(iconEvent + " #d超级点装#k", 6, 3, 9900002),
		Array(iconEvent + " #d神宠进化#k", 0, 3, 2040030),
		Array(iconEvent + " #d快速仓库#k", 0, 3, 9030100),
		Array(iconEvent + " #d祖母宝箱#k", 0, 3, 2084001),
		Array(iconEvent + " #d克劳德怪#k", 0, 3, 9220059),
		Array(iconEvent + " #d平民商店#k", 0, 3, 1011101),
		Array(iconEvent + " #d点卷商店#k", 0, 3, 3000021),
	    Array(iconEvent + " #d竞技积分#k", 501, 3, 9900003),
		Array(iconEvent + " #d活跃兑换#k", 23, 3, 9900003),
		//Array(iconEvent + " #d我要变强#k", 1, 3, 9900004),
	    Array(iconEvent + " #d连续签到#k", 502, 3, 9900003),
		Array(iconEvent + " #d群宠技能#k", 22, 3, 9900003),
		Array(iconEvent + " #d自动转职#k", 4, 3, 9900003),
		Array(iconEvent + " #d每日组队#k", 6, 3, 9310144),
		Array(iconEvent + " #d每日任务#k", 12, 3, 9900003),
		//Array(iconEvent + " #d怪物公园#k", 0, 3, 9071003),
		Array(iconEvent + " #d装备租借#k", 0, 3, 9310070),
		Array(iconEvent + " #d20环任务#k", 0, 3, 9390013),
		Array(iconEvent + " #d清理包裹#k", 500, 3, 9900003),
		Array(iconEvent + " #d快乐收集#k", 8, 3, 9000178),
		Array(iconEvent + " #d节日副本#k", 0, 3, 9209101)
		
		//Array(icon2+"#b时装觉醒"+icon2, 0, 2, 9000069),
		//Array(icon2+"#d飞升洗髓"+icon2, 1, 2, 9000174),
		 //Array(icon2+"#b武器破功"+icon2, 1000, 2),
		//Array(icon2+"#b蜡笔潜能"+icon2, 1001, 2)
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
            text = "";
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
        case 1://便民服务
            text += "#e#d\t\t\t  "+icon2+" 万能NPC服务中心 "+ icon2 +"#n#k\r\n";
            break;
		default: 
			text+="\r\n";
    }
    var x = 0;
    for (var i = 0; i < List.length; i++) {
        if (List[i][2] == type) {
            if (x == 2) {
				if (List[i+1]!=null && List[i+1][2]!=type)
               		text += "  #L" + i + "#" + List[i][0] + "#l";
				else
					text += "  #L" + i + "#" + List[i][0] + "#l\r\n";
                x = 0;
            } else {
                text += "  #L" + i + "#" + List[i][0] + "#l";
                x++;
            }
        }
    }
}
