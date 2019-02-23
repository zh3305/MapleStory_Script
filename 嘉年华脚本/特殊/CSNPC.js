/*
 * 商城NPC
 */
/*﻿var status;

function start() {
    status = -1;
    cm.sendSimpleS("请选择需要的功能：\r\n#L1##b进入#b商城#k#l\r\n#L2##b打开#b拍卖NPC#k#l\r\n", 2);
}

function action(mode, type, selection) {

    if (mode == 0) {
        cm.dispose();
        return;
    } else if (mode == 1) {
        status++;
    } else {
        status--;
    }

    switch (selection) {
        case 1: //
            cm.dispose();//这是结束脚本，请按照实际情况使用
            cm.enterCS();
            break;
        case 2:
            cm.dispose();//这是结束脚本，请按照实际情况使用
            cm.openNpc(9310362);
            break;
        case 3:
            cm.dispose();
            break;
    }
}
*/


var status = 0;
var ttt ="#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//美化1
var ttt2 ="#fUI/UIWindow/Quest/icon6/7#";////美化2
var ttt3 ="#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//美化圆
var ttt4 ="#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//美化New
var ttt5 ="#fUI/UIWindow/Quest/icon0#";////美化!
var ttt7 ="#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//美化会员
var ttt6 ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
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
        } 
    else if (status == 0) {
		var revenue = cm.getHyPay(3);
		//var selStr = "小提示:你可以将游戏窗口调整到1024×768分辨及以上的的其他分辨率,然后就可以在频道选项框的左上角看到拍卖小按钮啦,这样就可以直接呼出万能NPC哟!\r\n";
		var selStr = "#d您今天在线时长为： #r"+cm.getOnlineTime()+"#k #d分钟  累计充值金额： #r" + revenue.formatMoney(0, "") + "#b 元#k\r\n";
		//selStr += "#b可用余额为： #r"+ cm.getHyPay(1) +"#b 元  #b目前点卷： #r" + cm.getPlayer().getCSPoints(1) + "#k #b点\r\n";
		//selStr += "#b目前抵用卷： #r" + cm.getPlayer().getCSPoints(2) + "#k #b点  当前积分：#r"+cm.getPlayerPoints()+"#k #b点\r\n\r\n";
		selStr += "#b         #L0#"+ttt4+" 打开冒险岛游戏拍卖#l\r\n";
		//selStr += "#b#L4#"+ttt6+" 职业转职#l #b#L1#"+ttt6+" 常用功能#l #b#L20#"+ttt6+" 超值理财#l\r\n";
		//selStr += "\r\n"
		//selStr += "#r#L19#"+ttt6+" 购物广场#l #r#L16#"+ttt6+" 我要变强#l #r#L2#"+ttt6+" 游戏商店#l\r\n";
		//selStr += "#r#L21#"+ttt6+" 元宝兑换#l #r#L18#"+ttt6+" 充值购物#l #r#L17#"+ttt6+" 物品删除#l\r\n\r\n";
		selStr += "          #L15#"+ttt4+" #e#r进入冒险岛游戏商城#l\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 15:
            cm.dispose();
            cm.enterCS();
            break;
		case 0:
			cm.dispose();
			cm.openNpc(9310362);
			break;










}
    }
}

Number.prototype.formatMoney = function (places, symbol, thousand, decimal) {
    places = !isNaN(places = Math.abs(places)) ? places : 2;
    symbol = symbol !== undefined ? symbol : "　";
    thousand = thousand || ",";
    decimal = decimal || ".";
    var number = this,
        negative = number < 0 ? "-" : "",
        i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
};