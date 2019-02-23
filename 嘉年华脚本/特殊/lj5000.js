var Icon ="#fEffect/ItemEff/1112811/0/0#";//黄金音符GuildMark/Mark/Animal/00002006/16#";
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    var revenue = cm.getHyPay(3);
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.sendOk("\r\n\r\n\r\n\t#b当前累计充值：#r" + revenue.formatMoney(0, "") + " #b元 请继续加油！");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            var txt = Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + "\r\n";
            txt += "#r [ #h # ] 累计充值达到 [ 6000 ] 将有丰厚礼品#k\r\n";
            txt += "#b  奖品道具 [ 神器 ] 分别 - 换取神器 另送 #r#z1113077# #k\r\n"
            txt += "#d 　　　　　当前累计充值：#r" + revenue.formatMoney(0, "") + "#d 元#k\r\n\r\n";
            txt += "　　　#i1402180##z1402180# 　#i1382235##z1382235#　　　　　　　　　\r\n\r\n";
            txt += "　　　　#b确认累计达标单击 [ #r是#b ]  否则 [ #r否#b ]#k\r\n\r\n\r\n";
            txt += Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + "\r\n\r\n";
            cm.sendYesNo(txt);
        } else if (status == 1) {
            if (cm.getHyPay(3) >= 6000) {
                if (cm.getEventCount("累计奖品道具神器",1) < 1) {
                    		cm.gainItem(1402180,1);
                    		cm.gainItem(1382235,1);
                    		cm.gainItem(1113077,1);
                    //cm.sendOkS("\r\n\r\n\t#b恭喜 [ #r#h ##b ] 玩家 领到了极品道具\r\n\r\n　 如道具丢失请联系客服并且需交纳 [ #r100 #b] 金额", 2);
                    cm.spouseMessage(0x23, "※累计超值※：恭喜玩家 " + cm.getChar().getName() + " 领到了超值累计 6000 金额的极品武器 土豪阿");
                    cm.spouseMessage(0x23, "※累计超值※：恭喜玩家 " + cm.getChar().getName() + " 领到了超值累计 6000 金额的极品武器 土豪阿");
                    cm.spouseMessage(0x23, "※累计超值※：恭喜玩家 " + cm.getChar().getName() + " 领到了超值累计 6000 金额的极品武器 土豪阿");
                    cm.spouseMessage(0x23, "※累计超值※：恭喜玩家 " + cm.getChar().getName() + " 领到了超值累计 6000 金额的极品武器 土豪阿");
                    cm.playerMessage(1, "　" + cm.getChar().getName() + "\r\n\r\n恭喜领到累计超值道具\r\n\r\n感谢你对兔花花的支持 祝您游戏愉快");
                    cm.setEventCount("累计奖品道具神器", 1);
                    cm.dispose();
                } else {
                    cm.sendOkS("\r\n\r\n#r\t\t尊敬的玩家 - 此项奖品终身只能一回", 3);
                    cm.dispose();
                    return;
                }
            } else {
                var ount = 6000 - cm.getHyPay(3);
                cm.sendOkS("\r\n\r\n#r　　　　　尊敬的玩家 - 当前累计未达标\r\n\r\n　　当前累计：#b" + cm.getHyPay(3) + "#r 元 还需充值：#b" +  ount + "#r 元 即可达标", 3);
                cm.dispose();
                return;
            }
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