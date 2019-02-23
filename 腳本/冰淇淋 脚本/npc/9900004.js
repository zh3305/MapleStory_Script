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
var List = Array(
        //1 便民服务  2 游戏乐园
        //Array(icon + " 返回市场", 99, 1),
        Array(icon + " 万能传送", 2, 1),
        Array(icon + " 快速转职", 4, 3),
        Array(icon + " 每日活跃", 23, 3),
        Array(icon + " 每日福利", 41, 2),
        Array(icon + " 结婚入口", 800, 1,9900003),
        Array(icon + " 特色副本", 108, 3),
        Array(icon + " 组队副本", 6, 3, 9310144),
        Array(icon + " 所有副本", 13, 1),
        //Array(icon + " 中介兑换", 0, 1, 9310071), //? testing
        Array(icon + " 抵用兑换", 42, 1), //todo
        //Array(icon + " 王者之路", 1, 1, 9900004),
        Array(icon + " 清理背包", 500, 3),
        Array(icon + " 学习技能", 22, 3),
		Array(icon + " 所有商店", 1, 1),
		
		Array(icon + " 点卷服务", 2, 1,9900002),
		Array(icon + " 在线奖励", 608, 1,9900003),
		//Array(icon + " 银行存款", 14, 1,9900003),
		
		Array(icon + " 充值奖励", 8, 1,9310144),
		Array(icon + " 等级送礼", 12, 1,9900002),
		Array(icon + " 武陵副本", 0, 1,2091011),
		
		Array(icon + " 超聚划算", 17, 1,9310144),
		Array(icon + " 更多服务", 6, 1,9900003),
		Array(icon + " 兑换魔方", 0, 1,9010014),
		
		Array(icon + " 物品回收", 500, 1,9900003)
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
            text = "" + xxx + "在线：" + cm.getPlayer().getTodayOnlineTime() + "分\t\t  " + xxx + "累计充值：" + cm.getTotalRMB() + "\r\n" + xxx + "点券:" + cm.getNX(1) + "\t\t" + xxx + "抵用券:" + cm.getNX(2) + "\r\n" + xxx + "当前服务器时间：" + hour + "时" + min + "分" + sec + "秒\r\n";
            //text += "#e------------------------------------------#n\r\n"
            text += "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "\r\n"
            var x = 0;
            for (var i = 0; i < List.length; i++) {
                if (x == 2) {
                    text += "  #L" + i + "#" + List[i][0] + "#l\r\n";
                    x = 0;
                } else {
                    text += "  #L" + i + "#" + List[i][0] + "#l";
                    x++;
                }
            }
            //text += "#e\r\n------------------------------------------#n\r\n"
            text += "\r\n" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + ""
            text += " #d#e#L1002#" + iconMeso + "进入商城" + iconMeso + "#l#L1000#" + iconMeso + "充值网站" + iconMeso + "#l#L1001#" + iconMeso + "官方网站" + iconMeso + "#l"
            text += " \r\n#L2000##e#r【#b公告#r】#k 庆祝((迷途))冒险岛火热开服~！！！\r\n"
            cm.sendSimple(text);
        } else if (a == 1) {
            if (selection == 2000) {
                cm.sendOk("庆祝((迷途))冒险岛火热开服~！！！！");
                a = -1;
            }
            else if (selection == 1002) {
                cm.dispose();
                cm.EnterCS();
                cm.dispose();
            } else if (selection == 1000) {
                cm.dispose();
                cm.openWeb("http://www.baidu.com");
            } else if (selection == 1001) {
                cm.dispose();
                cm.openWeb("http://www.baidu.com");
            } else {
                var mode_ = List[selection][1];
                var npcid = 9900003;
                if (List[selection][3] != null)
                {
                    npcid = List[selection][3];
                }
                cm.dispose();
                cm.openNpc(npcid, mode_);
            }
        }//a
    }//mode
}//f


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

