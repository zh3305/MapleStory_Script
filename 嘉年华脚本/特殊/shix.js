/*
 脚本功能：市场管理员
 */

var a = 0;
var icon = "#fUI/Basic.img/BtMin2/normal/0#";
var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var ttt4 ="#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//美化New
var icon2 = "#fEffect/CharacterEff/1082565/2/0#";
var Star = "#fEffect/CharacterEff/1112904/2/1#";
var yun1 ="#fUI/UIWindow/Quest/icon7/10#";////红色圆
var yun2 ="#fUI/UIWindow/Quest/icon8/0#";////蓝指标
var yun4 ="#fUI/UIWindow/Quest/reward#";////奖励
var ppp = "#fEffect/CharacterEff/1112907/4/0#"; //泡炮
var zs = "#fEffect/CharacterEff/1112946/2/0#";  //砖石粉
var zs1 = "#fEffect/CharacterEff/1112946/1/1#";  //砖石蓝
var a = "#fEffect/CharacterEff/1082565/0/0#";  //饼干兔子
var b = "#fEffect/CharacterEff/1112904/0/0#"; //彩色星星
var c = "#fEffect/CharacterEff/1003271/0/0#";  //红色心心
var d = "#fEffect/CharacterEff/1112946/4/1#";  //钻石
var e = "#fEffect/CharacterEff/1082229/0/0#";  //红心
var eff = "#fEffect/CharacterEff/1112905/0/1#"; //
var epp = "#fEffect/CharacterEff/1082312/0/0#";  //彩光
var epp1 = "#fEffect/CharacterEff/1082312/2/0#"; //彩光1
var axx = "#fEffect/CharacterEff/1051294/0/0#";  //爱心
var xxx = "#fEffect/CharacterEff/1082565/2/0#"; //星系
var ppp = "#fEffect/CharacterEff/1112907/4/0#"; //泡炮 
var epp3 = "#fEffect/CharacterEff/1112908/0/1#";  //彩光3
var axx1 = "#fEffect/CharacterEff/1062114/1/0#";  //爱心
var zs = "#fEffect/CharacterEff/1112946/2/0#";  //砖石粉
var zs1 = "#fEffect/CharacterEff/1112946/1/1#";  //砖石蓝
var dxxx = "#fEffect/CharacterEff/1102232/2/0#"; //星系
var tz1 = "#fEffect/CharacterEff/1082565/2/0#";  //兔子蓝
var tz = "#fEffect/CharacterEff/1082565/4/0#";  //兔子粉
var tz5 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var ttt2 ="#fUI/UIWindow/Quest/icon6/7#";////美化2
var tz2 = "#fEffect/CharacterEff/1082565/0/0#";  //兔子灰色
var tz3 = "#fEffect/CharacterEff/1082588/0/0#";  //红点
var tz4 = "#fEffect/CharacterEff/1082588/3/0#";  //蓝点
var tz51 = "#fEffect/CharacterEff/1082588/1/0#";  //绿点
var tz6 = "#fEffect/CharacterEff/1112900/2/1#";  //音符蓝
var tz7 = "#fEffect/CharacterEff/1112900/3/1#";  //音符红
var tz8 = "#fEffect/CharacterEff/1112900/4/1#";  //音符绿
var tz88 = "#fEffect/CharacterEff/1112900/5/1#";  //音符绿!
var tz9 = "#fEffect/CharacterEff/1112902/0/0#";  //蓝心
var tz10 = "#fEffect/CharacterEff/1112903/0/0#";  //红心
var tz11 = "#fEffect/CharacterEff/1112904/0/0#";  //彩心
var tz12 = "#fEffect/CharacterEff/1112924/0/0#";  //黄星
var tz13 = "#fEffect/CharacterEff/1112925/0/0#";  //蓝星
var tz14 = "#fEffect/CharacterEff/1112926/0/0#";  //红星
var tz15 = "#fEffect/CharacterEff/1112949/0/0#";  //花样音符
var tz16 = "#fEffect/CharacterEff/1112949/1/0#";  //花样音符
var tz17 = "#fEffect/CharacterEff/1112949/2/0#";  //花样音符
var tz18 = "#fEffect/CharacterEff/1112949/3/0#";  //花样音符
var tz19 = "#fEffect/CharacterEff/1112949/4/0#";  //花样音符
var tz20 = "#fEffect/CharacterEff/1114000/1/0#";  //红星花
var yun ="#fUI/UIWindow/PartySearch2/BtNext/mouseOver/0#";////红沙漏
var wn1 = "#fUI/Basic.img/BtClaim/normal/0#";  //警灯
var wn2 = "#fUI/UIWindowTW.img/TimeCapsule/BtClose/disabled/0#";  //叉叉
var wn3 = "#fUI/Basic.img/ComboBox/disabled/1#";  //白条
var wn4 = "#fUI/Basic.img/ComboBox3/mouseOver/1#";  //黄条
var wn5 = "#fUI/Basic.img/Cursor/17/16#";  //黄色圈
var wn6 = "#fUI/Basic.img/Cursor/34/0#";  //圈
var wn7 = "#fUI/Basic.img/Cursor/43/3#";  //蓝圈
var wn8 = "#fUI/CashShop.img/CSBargainSale/BtLeft/normal/0#";  //黄色左
var wn9 = "#fUI/CashShop.img/CSBargainSale/BtRight/normal/0#";  //黄色右
var wn10 = "#fUI/CashShop.img/CSBeauty/tip/hair#";  //发型提示
var wn11= "#fUI/CashShop.img/CSBeauty/hairColor/Enable/0#";  //黑
var wn12 = "#fUI/CashShop.img/CSBeauty/hairColor/Enable/1#";  //红
var wn13 = "#fUI/CashShop.img/CSBeauty/hairColor/Enable/2#";  //橙
var wn14 = "#fUI/CashShop.img/CSBeauty/hairColor/Enable/3#";  //黄
var wn15 = "#fUI/CashShop.img/CSBeauty/hairColor/Enable/4#";  //绿
var wn16 = "#fUI/CashShop.img/CSBeauty/hairColor/Enable/5#";  //亲
var wn17 = "#fUI/CashShop.img/CSBeauty/hairColor/Enable/6#";  //紫
var wn18 = "#fUI/CashShop.img/CSBeauty/hairColor/Enable/7#";  //褐
var wn19 = "#fUI/CashShop.img/CSEffect/event/0#";  //活动图标
var wn20 = "#fUI/CashShop.img/CSEffect/hot/0#";  //人气图标
var wn21 = "#fUI/CashShop.img/CSEffect/mileage/0#";  //积分图标
var wn22 = "#fUI/CashShop.img/CSEffect/new/0#";  //新品图标
var wn23 = "#fUI/CashShop.img/CSEffect/sale/0#";  //折扣图标
var wn24 = "#fUI/CashShop.img/CSEffect/time/0#";  //限量图标
var wp110 = "#fUI/CashShop.img/CSEffect/number/0#";  //数字 后面改数字0-9
var wp111 = "#fUI/CashShop.img/CSEffect/number/1#";  //数字 后面改数字0-9
var wp112 = "#fUI/CashShop.img/CSEffect/number/2#";  //数字 后面改数字0-9
var wp113 = "#fUI/CashShop.img/CSEffect/number/3#";  //数字 后面改数字0-9
var wp114 = "#fUI/CashShop.img/CSEffect/number/4#";  //数字 后面改数字0-9
var wp115 = "#fUI/CashShop.img/CSEffect/number/5#";  //数字 后面改数字0-9
var wp116 = "#fUI/CashShop.img/CSEffect/number/6#";  //数字 后面改数字0-9
var wp117 = "#fUI/CashShop.img/CSEffect/number/7#";  //数字 后面改数字0-9
var wp118 = "#fUI/CashShop.img/CSEffect/number/8#";  //数字 后面改数字0-9
var wp119 = "#fUI/CashShop.img/CSEffect/number/9#";  //数字 后面改数字0-9
var wp2 = "#fUI/CashShop.img/CSIcon/0#";  //男图标 0男-1女
var wp3 = "#fUI/CashShop.img/CSStatus/BtCharge/mouseOver/0#";  //充值图标
var wp4 = "#fUI/CashShop.img/CSSubTabBar/Tab/4/Disable/0#";  //武器开头
var wp5 = "#fUI/CashShop.img/CSSubTabBar/Tab/4/Disable/1#";  //帽子
var wp6 = "#fUI/CashShop.img/CSSubTabBar/Tab/4/Disable/2#";  //披风
var wp7 = "#fUI/CashShop.img/CSSubTabBar/Tab/4/Disable/3#";  //长袍
var wp8 = "#fUI/CashShop.img/CSSubTabBar/Tab/4/Disable/4#";  //上衣
var wp9 = "#fUI/CashShop.img/CSSubTabBar/Tab/4/Disable/5#";  //裤子
var wp10 = "#fUI/CashShop.img/CSSubTabBar/Tab/4/Disable/6#";  //鞋子
var wp11 = "#fUI/CashShop.img/CSSubTabBar/Tab/4/Disable/7#";  //手套
var wp12 = "#fUI/CashShop.img/CSSubTabBar/Tab/4/Disable/8#";  //饰品
var wp13 = "#fUI/CashShop.img/CSSubTabBar/Tab/4/Disable/9#";  //眼饰
var wp14 = "#fUI/CashShop.img/CSSubTabBar/Tab/4/Disable/10#";  //效果结尾
var wp15 = "#fUI/mapleBingo.img/mapleBingo/lineAni/0/0#";  //斜线美化
var wp16 = "#fUI/mapleBingo.img/mapleBingo/lineAni/0/1#";  //斜线美化
var wp17 = "#fUI/mapleBingo.img/mapleBingo/lineAni/0/2#";  //斜线美化
var wp18 = "#fUI/mapleBingo.img/mapleBingo/lineAni/0/3#";  //斜线美化
var wp19 = "#fUI/mapleBingo.img/mapleBingo/lineAni/0/4#";  //斜线美化
var wp20 = "#fUI/mapleBingo.img/mapleBingo/lineAni/0/5#";  //斜线美化
var wi1 = "#fUI/SoulUI.img/DungeonMap/icon/dungeonItem/0#";  //星星图标
var wi2 = "#fUI/SoulUI.img/DungeonMap/icon/soulFragment/0#";  //菱形图标
var wi3 = "#fUI/SoulUI.img/DungeonMap/icon/soulTrap/0#";  //骷髅图标
var wi4 = "#fUI/SoulUI.img/DungeonMap/icon/warpGate/0#";  //圆点图标
var wi5 = "#fUI/SoulUI.img/DungeonParty/backgrnd2#";  //毛莫
var wi6 = "#fUI/StarCityUI.img/Board_Friend/list/0/5/selected#";  //剪刀石头布
var wi7 = "#fUI/StarCityUI.img/Board_GameRank/tab/enabled/0#";  //游戏排行
var wi8 = "#fUI/StarCityUI.img/Board_GameRank/user/myrank#";  //黄色条
var wi9 = "#fUI/StarCityUI.img/Board_GameRank/user/shining#";  //紫色条
var wi11 = "#fUI/UIPVP.img/ChampionMark/4#";  //徽章黄色
var wi12 = "#fUI/UIPVP.img/DmgEffect/DmgRed/excellentCritical#";  //特别危险蓝//"+wp110+""+wp111+""+wp112+""+wp113+""+wp114+""+wp115+""+wp116+""+wp117+""+wp118+""+wp119+"
var wi13 = "#fUI/UIPVP.img/DmgEffect/DmgBlue/excellentCritical#";  //特别危险绿
var wi14 = "#fUI/UIPVP.img/MiniMapIcon/star#";  //黄星星
var wi15 = "#fUI/UIToolTip.img/Item/Equip/Star/Star1#";  //蓝星星
var wn60 = "#fMob/0100101.img/die1/1#";  //蜗牛

var List = Array(
		//福利项目


		Array(wn12 + " #r点卷商场#k", "dianjuanshangcheng2", 1, 9310144),
		Array(wn12 + " #r游戏宝库#k", "youxibaoku", 1, 1012102),
		Array(wn12 + " #r装备商店", "shangdian1", 1, 9900003),
		

		Array(wn12 + " #r抵用券店#k", "16", 1),
		Array(wn12 + " #r时装商铺#k", "haohuasp", 1),
		Array(wn12 + " #r特殊币店\r\n#k", "qitashangdian", 1),



 		Array(wn14 + " #b官方认证", "renzheng", 2,9900003),        
		Array(wn14 + " #b物品赚点", "huandian", 2),
		Array(wn14 + " #b装备制作", "24", 2), //TODO

		Array(wn14 + " #b银行管理", "yinhang", 3),
		//Array(iconEvent + " #b宠物进化", "chongwu", 3),
		//Array(iconEvent + " #b尖兵导弹", "jbbd", 3, 9310144),

		//Array(iconEvent + " #b赌拿中介", "hanqingdu", 4),
		Array(wn14 + " #b余额抽奖", "yuecj", 3),
		Array(wn15 + " #b伤害突破", "tupo", 3),

		//Array(iconEvent + " #k双刀面巾", "sdmj", 4),
		Array(wn14 + " #b特殊技能", "xxjn", 4),
		Array(wn18 + " #k删除道具", "Delete", 4),
		Array(wn18 + " #k删除角色\r\n", "Deletechr", 4),
		//Array(iconEvent + " #r一键满技", "qljn", 4)

		Array(wn16 + " #d射手跳跳", "sheshou", 4),
		Array(wn16 + " #d玩具跳跳", "wanju", 4),
		Array(wn16 + " #d快乐圣诞", "kuaileshengdan", 4)

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
            text += "#e#d\t\t"+axx+" 棉花冒险岛服务中心 "+ axx +"#n#k\r\n";
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