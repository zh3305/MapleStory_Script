var aaa ="#fUI/UIWindow/AriantMatch/characterIcon/5#";
var yun ="#fUI/UIWindow/Megaphone/2#";////红沙漏
var yun2 ="#fUI/UIWindow/Quest/icon8/0#";////蓝指标
var yun8 ="#fUI/UIWindow/MonsterBook/arrowLeft/normal/0#";////金左指标
var yun9 ="#fUI/UIWindow/MonsterBook/arrowRight/normal/0#";////金右指标
var yun4 ="#fUI/UIWindow/Quest/reward#";////奖励
var ttt ="#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//美化1
var ttt2 ="#fUI/UIWindow/Quest/icon6/7#";////美化2
var ttt3 ="#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//美化圆
var ttt4 ="#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//美化New
var ttt5 ="#fUI/UIWindow/Quest/icon0#";////美化!
var ttt7 ="#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//美化会员
var ttt6 ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var epp = "#fEffect/CharacterEff/1082312/0/0#";  //彩光
var eff = "#fCharacter/Weapon/01702523.img/48/straight/0/effect#"; //彩虹带
var eef = "#fEffect/CharacterEff/1112905/0/1#"; //
var epp = "#fEffect/CharacterEff/1082312/0/0#";  //彩光
var epp1 = "#fEffect/CharacterEff/1082312/2/0#"; //彩光1
var axx = "#fEffect/CharacterEff/1051294/0/0#";  //爱心
var xxx = "#fEffect/CharacterEff/1082565/2/0#"; //星系
var pp1 = "#fEffect/CharacterEff/1112907/4/0#"; //泡炮 
var pp2 = "#fEffect/CharacterEff/1112908/0/1#";  //彩光3
var pp3 = "#fEffect/CharacterEff/1062114/1/0#";  //爱心
var zs = "#fEffect/CharacterEff/1112946/2/0#";  //砖石粉
var zs1 = "#fEffect/CharacterEff/1112946/1/1#";  //砖石蓝
var dxxx = "#fEffect/CharacterEff/1102232/2/0#"; //星系
var tz = "#fEffect/CharacterEff/1082565/2/0#";  //兔子蓝
var tz1 = "#fEffect/CharacterEff/1082565/4/0#";  //兔子粉
var tz7 = "#fEffect/CharacterEff/1112900/3/1#";  //音符红
var tz8 = "#fEffect/CharacterEff/1112900/4/1#";  //音符绿
var tz88 = "#fEffect/CharacterEff/1112900/5/1#";  //音符绿!
var yun1 ="#fUI/UIWindow/Quest/icon7/10#";////红色圆
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
var tz21 = "#fUI/Basic.img/BtCoin/normal/0#";// 
var Crown = "#fUI/UIWindow4/PQRank/rank/gold#";
var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";

var a = 0;
var icon = "#fUI/Basic.img/BtMin2/normal/0#";

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
            cm.sendSimple("\r\n                     #e#r小布丁商城#k#n#l\r\n"+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+"      #l#L1#公园币商店#L2#BOSS币商店#L3#满月币商店#l\r\n#L4#副手装备#L5#真棒图腾#L6#外星人币商店#L7#低级武器店#l\r\n      #L9#组队点数店#L8#喇叭专卖#L10#结婚礼服#n#k#l\r\n\r\n#L36##r"+tz21+"【公告】#k点卷赞助 1 元 = 3000 点卷 首充双倍"+tz21+"#l\r\n\r\n#r#L888#"+yun1+"点卷商店"+yun1+"#l\r\n#d#L14##g土豪商城  #L22#皮肤伤害 #L21#极品机器人#l\r\n#L23##r稀有椅子 #L32#玩具商店#l #L25#喇叭出售#l #L30#稀有点装#l\r\n#L31##b双倍道具 \r\n#L999##r"+yun1+"抵用商店"+yun1+"#l\r\n#L19##d职业副手#l #L26#抵用点装 #L28#巨人药水 #L20#抵用商城#l\r\n#L38#巨匠武器#l\r\n#L27##r"+yun1+"中介商店"+yun1+"#l\r\n#L12##b极品卷轴 #L29#时装礼包  #L13#上乘装备#l\r\n\r\n\r\n"+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+""+eef+"\r\n")
        } else if (a == 1) {
            if (selection == 0){
                cm.dispose();
            cm.openShop(61);
            }else if (selection == 1) {//防具商店
                cm.dispose();
            cm.openShop(9071001);
            } else if (selection == 2) {//武器商店
                cm.dispose();
            cm.openShop(68);
            } else if (selection == 3) {//武器商店
                cm.dispose();
            cm.openShop(66);
            } else if (selection == 4) {//武器商店
                cm.dispose();
            cm.openShop(63);
            } else if (selection == 5) {//武器商店
                cm.dispose();
            cm.openShop(74);
            } else if (selection == 6) {//武器商店
                 cm.dispose();
            cm.openShop(322);
            } else if (selection == 7) {//武器商店
		cm.dispose();
            cm.openShop(73);
            } else if (selection == 8) {//RED
		 cm.dispose();
            cm.openShop(328);
            } else if (selection == 10) {//
		cm.dispose();
            cm.openShop(32);
            } else if (selection == 11) {//
		 cm.dispose();
            cm.openNpc(9000069, "taozhuang");
            } else if (selection == 12) {//
		cm.dispose();
                cm.openNpc(9000069, "wuqijuan");
            } else if (selection == 13) {//
		cm.dispose();
                cm.openNpc(9000069, "shangchengzhuangbei");
            } else if (selection == 14) {//
		cm.dispose();
                cm.openNpc(9310144, 12);
            } else if (selection == 15) {//
		cm.dispose();
                cm.openNpc(9310169);
            } else if (selection == 16) {//
		cm.dispose();
                cm.openNpc(1540200, 0);
            } else if (selection == 17) {//
		cm.dispose();
                cm.openNpc(9900003, 15);
            } else if (selection == 18) {//
		cm.dispose();
                cm.openNpc(1061006, 0);
            } else if (selection == 19) {//
		cm.dispose();
            cm.openShop(63);
            } else if (selection == 20) {//
		cm.dispose();
                cm.openNpc(9900003, 16);
            } else if (selection == 21) {//
		cm.dispose();
                cm.openNpc(1530400);
            } else if (selection == 22) {//
		cm.dispose();
                cm.openNpc(1540660, "shpf");
            } else if (selection == 23) {//
		cm.dispose();
                cm.openNpc(9310377);
            } else if (selection == 24) {//
		cm.dispose();
                cm.openNpc(9900002, "mofangdaoju");
            } else if (selection == 25) {//
		cm.dispose();
                cm.openNpc(9900002, "laba");
            } else if (selection == 26) {//
		cm.dispose();
                cm.openNpc(9000188, "diyong");
            } else if (selection == 27) {//
		cm.dispose();
                cm.openNpc(9310144, "41");
            } else if (selection == 28) {//
		cm.dispose();
                cm.openNpc(9000188, "jurenyaoshui");
            } else if (selection == 29) {//
		cm.dispose();
                cm.openNpc(9000345, "dianzhuang12");
            } else if (selection == 30) {//
		cm.dispose();
                cm.openNpc(1540658);
            } else if (selection == 31) {//
		cm.dispose();
                cm.openNpc(9900002, "shuangbei");
            } else if (selection == 32) {//
		cm.dispose();
                cm.openNpc(9900002, "wanjudaoju");
            } else if (selection == 33) {//
		cm.dispose();
                cm.openShop(128252);
            } else if (selection == 34) {//
		cm.dispose();
                cm.openShop(128250);
            } else if (selection == 35) {//
		cm.dispose();
                cm.openShop(128251);
            } else if (selection == 36) {//
		cm.dispose();
            cm.openWeb("http://www.libaopay.com/buy/?wid=81474");
	    cm.sendOk("首充双倍请联系充值管理:2513068463");
		cm.dispose();
            } else if (selection == 37) {//
		cm.dispose();
                cm.openNpc(1061006, 0);
	        } else if (selection == 888) {//
		cm.dispose();
                cm.openNpc(9310072);
		    } else if (selection == 999) {//
		cm.dispose();
                cm.openNpc(9310072,"diyong");
            } else if (selection == 38) {//
		cm.dispose();
                cm.openNpc(9000345, 2);
            } else if (selection == 9) {//运动币
		cm.dispose();
            cm.openShop(72);
            } else if (selection == 123) {//运动币
		cm.dispose();
                cm.openShop(128252);
            } else {
                // 1012123 杂货商店 x
                //10 低级防具
                //11 50~60级防具
                //12 60~70级防具
                //20 低级武器
                //21 50~60级武器
                //22 60~70级武器
                // 3 其他道具 
                // 4 卷轴商店 x 
                // 1012125 宠物商店
                // 6 辅助武器
                cm.openShop(selection);
                cm.dispose();
            }
        } else if (a == 2) {
            switch (selection) {
                case 0://低级防具
                    //cm.openShop(10)
                    cm.sendOk("暂时未开放。")
                    break;
                case 1://50~60级防具
                    cm.openShop(11)
                    break;
                case 2://60~70级防具
                    cm.openShop(12)
                    break;
                case 3://低级武器
                    //cm.openShop(20)
                    cm.sendOk("暂时未开放。")
                    break;
                case 4://50~60级武器
                    cm.openShop(21)
                    break;
                case 123:
            cm.dispose();
                    cm.openShop(128252);
                    break;
                case 5://60~70级武器
                    cm.openShop(22)
                    break;
            }
            cm.dispose();
        }//a
    }//mode
}//f
