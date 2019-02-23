//*  番茄市场脚本 *//
//* 作者：50009219*//

var status = 0;
var random = java.lang.Math.floor(Math.random() * 4);
var a = "#fEffect/CharacterEff/1114000/1/0#"; //红色六芒星
var b = "#fEffect/CharacterEff/1003271/0/0#";
var c = "#fEffect/CharacterEff/1112905/0/0#"; //篮心
var d = "#fEffect/CharacterEff/1002667/0/0#"; //黄星
var e = "#fEffect/CharacterEff/1003252/1/0#"; //音乐
var g = "#fEffect/CharacterEff/1082565/0/0#"; //饼干兔子
var h = "#fUI/Basic/BtHide3/mouseOver/0#";
var f = "#fEffect/CharacterEff/1112904/2/1#";//彩色五角星

var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var day = ca.get(java.util.Calendar.DATE);//获取日
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE);//获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK); //获得星期
var time = new Date();
var sjr = time.getDay();
var pdtp = 0;
switch (sjr) {
    case 0:
        var xq = "星期日";
        break;
    case 1:
        var xq = "星期一";
        break;
    case 2:
        var xq = "星期二";
        break;
    case 3:
        var xq = "星期三";
        break;
    case 4:
        var xq = "星期四";
        break;
    case 5:
        var xq = "星期五";
        break;
    case 6:
        var xq = "星期六";
        break;
    default:
}
if (hour > 12) {
    hour -= 12;
    var apm = "下午好";
} else {
    var apm = "上午好";
}
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (cm.getEventCount("快乐圣诞") == 0) {
        var sdsj = "0";
        var sdsj1 = "1";
    } else {
        var sdsj = "1";
        var sdsj1 = "0";
    }

    if (cm.getEventCount("圣诞点卷", 1) > 0) {
        var sddj = cm.getEventCount("圣诞点卷", 1);
    } else {
        var sddj = "0";
    }

    if (status == 0 && mode == 0) {
        //cm.sendOk("#e#r　本商铺欢迎您的再次光临!我们竭诚为你服务!!");
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getMapId() == 180000001) {
        cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.")
        cm.dispose();
    } else if (status == 0) {
        var txt = "\r\n#d┏━━━━━━━━━━━快乐圣诞━━━━━━━━━━┓#k\r\n";
        txt += "\t\t\t　#d#e※　活动要求请仔细阅读#k#n　#d※#k#n\r\n\r\n";
        txt += "　#b※ 当前已完成 [ #r" + sdsj + "#b ] 　　　　 　今天可参与 [ #r" + sdsj1 + "#b ] ※#k  \r\n";
        txt += "　#b※ 收集圣诞道具 [ #z4001231# ] [ #z4001395# ] ※#k#n\r\n";
        txt += "　#b※ 并且保证两者数量 [ #r1000#b ] 个 #r所有怪都有爆率#b　※#k#n\r\n　#b※ #r万能传送 - 快速练级 - 大蘑菇 （#g蓝蜗牛 可爆#b）#b ※\r\n\r\n";
        txt += "　#b※ 当前拥有#z4001231#数量：\t\t\t　#r" + cm.itemQuantity(4001231) + " / 1000 个#b\r\n";
        txt += "　#b※ 当前拥有#z4001395#数量：\t\t#r" + cm.itemQuantity(4001395) + " / 1000 个#b\r\n\r\n";
        txt += "　#d　　　 当前已累计获得点卷数量：#r" + sddj + "#d 点卷#k\r\n";
        txt += "#d┗━━━━━━━━━━━━━━━━━━━━━━━━━┛#k\r\n\r\n";
        cm.sendYesNoS(txt, 2);
    } else if (status == 1) {
        var txt = "\r\n#d┏━━━━━━━━━━━圣诞查询━━━━━━━━━━┓#k\r\n\r\n";
        txt += "　#b※ 请确认玩家圣诞道具是否收集齐全　否侧导致失败　※#k#n\r\n\r\n";
        txt += "　#b※ 如确认请单击 [ #r是#b ]　　　　否则请单击 [ #r否#b ]　※#k#n\r\n\r\n";
        txt += "　#b※ 如玩家提供的数量正确　将领到  #r5000#b　 点卷　　※#k#n\r\n\r\n";
        txt += "#d┗━━━━━━━━━━━━━━━━━━━━━━━━━┛#k\r\n\r\n";
        cm.sendYesNoS(txt, 2);
    } else if (status == 2) {
        if (cm.getEventCount("快乐圣诞") == 1) {
            cm.playerMessage(1, "　" + cm.getChar().getName() + "\r\n\r\n　尊敬的玩家抱歉\r\n\r\n今天您已参与过此活动请明再来");
            cm.dispose();
            return;
        }
        if (cm.haveItem(4001231, 1000) && cm.haveItem(4001395, 1000)) {
            cm.gainItem(4001231, -1000);
            cm.gainItem(4001395, -1000);
            //---------------------------//
            cm.gainNX(1, 5000);
            cm.setEventCount("快乐圣诞");
            cm.setEventCount("圣诞点卷", 1, 5000);
            cm.playerMessage(1, "　" + cm.getChar().getName() + "\r\n\r\n　尊敬的玩家恭喜你\r\n\r\n已完成快乐圣诞 - 领点卷 [ 5000 ]");
			cm.worldSpouseMessage(0x01, "※ 快乐圣诞 ※ : 恭喜玩家[ " + cm.getPlayer().getName() + " ]完成 快乐圣诞 并获得 5000 点卷 ●ω●");
		        cm.worldSpouseMessage(0x01, "※ 快乐圣诞 ※ : 恭喜玩家[ " + cm.getPlayer().getName() + " ]完成 快乐圣诞 并获得 5000 点卷 ●ω●");
			cm.worldSpouseMessage(0x01, "※ 快乐圣诞 ※ : 恭喜玩家[ " + cm.getPlayer().getName() + " ]完成 快乐圣诞 并获得 5000 点卷 ●ω●");
            cm.dispose();
        } else {
            cm.playerMessage(1, "　" + cm.getChar().getName() + "\r\n\r\n　尊敬的玩家非常抱歉\r\n\r\n你的道具不齐全 请检查道具数量");
            cm.dispose();
        }
    }
}