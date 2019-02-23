/*
 脚本功能：拍卖脚本V2版
 */

var aaa = "#fUI/UIWindow/AriantMatch/characterIcon/5#";
var yun = "#fUI/UIWindow/Megaphone/2#";////红沙漏
var yun2 = "#fUI/UIWindow/Quest/icon8/0#";////蓝指标
var yun8 = "#fUI/UIWindow/MonsterBook/arrowLeft/normal/0#";////金左指标
var yun9 = "#fUI/UIWindow/MonsterBook/arrowRight/normal/0#";////金右指标
var yun4 = "#fUI/UIWindow/Quest/reward#";////奖励
var ttt = "#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//美化1
var ttt2 = "#fUI/UIWindow/Quest/icon6/7#";////美化2
var ttt3 = "#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//美化圆
var ttt4 = "#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//美化New
var ttt5 = "#fUI/UIWindow/Quest/icon0#";////美化!
var ttt7 = "#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//美化会员
var ttt6 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var epp = "#fEffect/CharacterEff/1082312/0/0#";  //彩光
var eff = "#fCharacter/Weapon/01702523.img/48/straight/0/effect#"; //彩虹带
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
var tz = "#fEffect/CharacterEff/1082565/2/0#";  //兔子蓝
var tz1 = "#fEffect/CharacterEff/1082565/4/0#";  //兔子粉
var tz7 = "#fEffect/CharacterEff/1112900/3/1#";  //音符红
var tz8 = "#fEffect/CharacterEff/1112900/4/1#";  //音符绿
var tz88 = "#fEffect/CharacterEff/1112900/5/1#";  //音符绿!
var yun1 = "#fUI/UIWindow/Quest/icon7/10#";////红色圆
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
var a = 0;
var time = new Date();
var day = time.getDay();
switch (day) {
    case 0:
        var d = "星期日";
        break;
    case 1:
        var d = "星期一";
        break;
    case 2:
        var d = "星期二";
        break;
    case 3:
        var d = "星期三";
        break;
    case 4:
        var d = "星期四";
        break;
    case 5:
        var d = "星期五";
        break;
    case 6:
        var d = "星期六";
        break;
    default:
}
var year = time.getFullYear();
var month = time.getMonth();
var date = time.getDate();
var hour = time.getHours();
var min = time.getMinutes();
var sec = time.getSeconds();
if (hour > 12) {
    hour -= 12;
    var apm = "下午";
} else {
    var apm = "上午";
}
if (hour < 10) {
    hour = "0" + hour;
}
if (min < 10) {
    min = "0" + min;
}
if (sec < 10) {
    sec = "0" + sec;
}
//时间控制部分结束
var icon = "#fUI/Basic.img/icon/arrow#";
var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var iconMeso = "#fUI/Basic.img/BtCoin/normal/0#";
var sz0 = "#fUI/Basic.img/LevelNo/0#";
var sz1 = "#fUI/Basic.img/LevelNo/1#";
var sz2 = "#fUI/Basic.img/LevelNo/2#";
var sz3 = "#fUI/Basic.img/LevelNo/3#";
var sz4 = "#fUI/Basic.img/LevelNo/4#";
var sz5 = "#fUI/Basic.img/LevelNo/5#";
var sz6 = "#fUI/Basic.img/LevelNo/6#";
var sz7 = "#fUI/Basic.img/LevelNo/7#";
var sz8 = "#fUI/Basic.img/LevelNo/8#";
var sz9 = "#fUI/Basic.img/LevelNo/9#";
var haha="#fUI/Basic.img/BlackHeaven/0#";
var Cheng = "#fEffect/ItemEff.img/1042356/effect/walk1/1#";
var cool = "#fEffect/BasicEff.img/CoolHit/cool#";
var List = Array(
        //Array(tz7 + " #r积分道具", 9310362, "huoli"),//名称、NPC代码、模式
       // Array(tz7 + " #r百宝抽奖", 9310362, ""),
       // Array(tz7 + " #r学购技能\r\n\r\n", 9310362, "xuegoujineng"),
       // Array(tz7 + " #r点劵商店", 9310362, "dianjuanshangcheng110"),
       // Array(tz7 + " #r管理中心", 9310362, "guanlizhongxin"),
       // Array(tz7 + " #r删除道具\r\n\r\n", 9310362, "Delete"),
       // Array(tz7 + " #r美容美发", 9310362, ""),
		//Array(tz7 + " #b办理会员#k", 9310362, "VIP"),
		//Array(tz7 + " #r补新手礼包\r\n\r\n"),
		//Array(tz7 + " #r面板提升",9310074,null),
		//Array(tz7 + " #r金融中心",9310074,"41"),
	//	Array(tz7 + " #b充值福利\r\n\r\n#k",9000030,"chongzhijiangli"),
	//	Array(tz7 + " #r抵用商城#k",9000030,"diyong"),
	//	Array(tz7 + " #r宠物进化#k",9000030,"chongwushengji"),
	//	Array(tz7 + " #r材料兑换道具\r\n\r\n#k",2012012,"cailiaoduihuan")
		//Array(tz7 + " #r关闭,开启自动领取在线\r\n\r\n#k",9000030,"chongwushengji")
       // Array(sz9 + " 内测无限点劵", 9310362, "zuduirenwu"),
       // Array(sz9 + " 内测无限余额", 9310362, "Allshop"),
		//Array(sz9 + " 内测无限金币", 9310362, "Allshop")
        )
var text;

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
			text = "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + ""+tz18+"#b欢迎来到【小布丁冒险岛】"+tz18+"#k" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "\r\n\r\n";
		
			var x = 0;
            for (var i = 0; i < List.length; i++) {
                if (x == 2) {
                    text += " #L" + i + "#" + List[i][0] + "#l\r\n";
                    x = 0;
                } else {
                    text += " #L" + i + "#" + List[i][0] + "#l ";
                    x++;
                }
            }
			if (cm.getPlayer()){
				//text +="#L10086##r给在线市场玩家福利#l\r\n";
				text +="#L301#GM满技能#l\r\n";
				//text +="#L300#测试#l";
			}
			//text +="\r\n";
			text +="  \r\n#L999#领取无限余额#l";
            cm.sendSimple(text);
        } else if (a == 1) {
            if (selection == 1) {
                cm.warp(749050400);
                cm.dispose();
            }
            else if (selection == 6) {
               cm.warp(100000104);
                cm.dispose();
			} else if (selection == 15) {
				if (cm.getPQLog("自动领取")>=1){
					cm.setPQLog("自动领取",0);
					cm.sendOk("#r关闭#k成功,每7天都要来一次哦!");
				}else{
					cm.setPQLog("自动领取",1);
					cm.sendOk("#g开启#k成功,每7天都要来一次哦!");
				}
				
				cm.dispose();
			} else if (selection == 8) {
				cm.warp(110000,0);
                cm.dispose();
			} else if (selection == 301) {
				cm.dispose();
				cm.openNpc(9000030, "MAXskill");
            } else if (selection == 300) {
				//cm.gainPlayerPoints(5000);
				//cm.gainNX(1,99999999);
				//cm.sendOk("领取成功");
				//var equip = cm. getNewEquip(1232057);
				//equip.setWatk(999);
				//equip.setAllStat(111);
				//equip.setPotential1(40603);
				//equip.setTotalDamage(222);
				//equip.setReqLevel(10);
				//equip.setEnhance(30);
				//equip.setUpgradeSlots(33);
				//equip.setMdef(321);
				//equip.setLevel(55);
				//cm.addFromDrop(equip);
				//cm.getMap().startMapEffect("魔王将在5秒后抵达战场", 5120054);
                cm.dispose();//这是结束脚本，请按照实际情况使用
				cm.openNpc(9310006,"ShowerOpen");
           // cm.enterCS();
            } else if (selection == 999) {
				cm.addHyPay(-99999);
				cm.sendOk("领取成功");
                cm.dispose();
			} else if (selection == 10086) {
				var allPlayers = cm.getMap(910000005).getCharacters();//取得当前地图上面的所有玩家
				//var allPlayers = cm.getMap(910000000).getCharacters();//取得当前地图上面的所有玩家
					 allPlayers = allPlayers.iterator();
				while (allPlayers.hasNext()) {//循环每一个玩家
					var player = allPlayers.next();
					player.openNpc(9000030, "GMjiangli");
					//player.openNpc(9000030, "zaixianzidong1");
					//player.openNpc(9000030, "zaixianzidong2");
				}
				
					cm.dispose();
            } else {
                var mode_ = List[selection][2];
                var npcid = List[selection][1];
                cm.dispose();
                cm.openNpc(npcid, mode_);
            }
        }//a
    }//mode
}//f




