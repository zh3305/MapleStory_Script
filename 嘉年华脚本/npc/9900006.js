/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：交换中心
 *  @Author Kent 
 */

var status = 0;
var eff = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var status = 0;
var z = "#fUI/UIWindow/Quest/icon5/1#";//"+z+"//美化
var kkk = "#fEffect/CharacterEff/1051296/1/0#";
var z = "#fUI/UIWindow/Quest/icon5/1#";//"+z+"
var eff1 = "#fEffect/CharacterEff/1112905/0/1#";//小红心
var icon = "#fUI/Basic.img/BtMin2/normal/0#";
var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var ttt = "#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//美化1
var ttt2 = "#fUI/UIWindow/Quest/icon6/7#";////美化2
var ttt3 = "#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//美化圆
var ttt4 = "#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//美化New
var ttt5 = "#fUI/UIWindow/Quest/icon0#";////美化!
var ttt6 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";//"+ttt6+"//美化会员
var z = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";//"+z+"//美化
var tt = "#fEffect/ItemEff/1112811/0/0#";//音符

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
    if (status == 0) {
        var selStr = "";
        //selStr += "" + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + "";
        selStr += "		     #r#r#e亲爱的#d#h ##k您好~!  \r\n           你想要进行什么操作呢#b#n#k\r\n";
        selStr += "" + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + "\r\n";
        selStr += "#L1#" + eff + "BOSS传送#l\r\n";
        selStr += "#L5#" + eff + "BOSS重置#l\r\n";
        //selStr += "#L2#" + eff + "兑换硬币#l";
        //selStr += "#L3#" + eff + "金币换点#l";
        //selStr += "#L4#" + eff + "枫叶兑换#l";
        //selStr += "#L6#" + eff + "武器破攻#l";
        //selStr += "#L7#" + eff + "喇叭商店#l\r\n\r\n";
        //selStr += "#L8#" + eff + "换放大镜#l\r\n\r\n";
        //selStr += "#L9##d" + iconEvent + "解锁装备#l";
        //selStr += "#L10##d#e" + eff + "转成新手#l";
        //selStr += "#L11##r#e" + eff + "任务赚点#l#k";
        //selStr += "#L12##d" + eff + "兑换坐骑#l";
        //selStr += "#L13##d" + eff + "点装回收#l";
        //selStr += "#L14##d" + eff + "背包清理#l";
        //selStr += "\r\n\r\n";
        //selStr += "#L15##d#e" + iconEvent + "每日寻宝#l";
        //selStr += "#L16##e" + iconEvent + "每日签到#l";
        //selStr += "#L19##e" + iconEvent + "签到礼包#l";
        //selStr += "\r\n";
        //selStr += "#L17##d" + iconEvent + "地图传送#l";
        //selStr += "#L18#" + iconEvent + "BOSS传送#l";
        //selStr += "#L19#" + iconEvent + "BOSS传送1#l";
        //selStr += "\r\n\r\n";
        //selStr += "#L21##b" + kkk + "兑换中心#l";
        //selStr += "\r\n";
        //selStr += "#L20##b#n" + kkk + "游戏中心(#r获得#z4033248#,#z4031156##k)#e#n#l\r\n";
        //selStr += "#L21##b" + eff + "购买251级秘药（#r#z2430979##k）#l\r\n";
        //selStr += "#L22##b" + eff + "趣味问答（8秒限时，速度要快哦）#l\r\n";
        cm.sendSimpleS(selStr, 2);
    } else if (status == 1) {
        switch (selection) {
            case 1:
                cm.dispose();
                cm.openNpc(9900005, "BOSSwarp");
                break;
            case 2:
                cm.dispose();
                cm.openNpc(1540310, "Exchange");
                break;
            case 3:
                cm.dispose();
                cm.openNpc(1540310, "ExchangeNX");
                break;
            case 4://ExchangeMaple
                cm.dispose();
                cm.openNpc(1540310, "ExchangeMaple");
                break;
            case 5:
                cm.dispose();
                cm.openNpc(9310362, "BOSScz");
                break;
            default:
                cm.sendOk("该功能正在紧张进行制作中，请耐心等待。");
                cm.dispose();
                break;
        }
    }
}
