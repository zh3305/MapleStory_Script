/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  游戏常用NPC
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
        selStr += "		     #r#r#e亲爱的#d#h ##k您好~!#b#k\r\n\#k#n\r\n";
        //selStr += "" + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + "\r\n";
        selStr += "#L1#" + eff + "宠物进化#l";
        //selStr += "#L2#" + eff + "等级送礼#l";
        //selStr += "#L3#" + eff + "自由市场#l";
        //selStr += "#L4#" + eff + "药水商店#l";
        //selStr += "#L5#" + eff + "群宠技能#l";
        //selStr += "#L6#" + eff + "副手武器#l";
        //selStr += "#L7#" + eff + "抵用券店#l";
        //selStr += "#L8#" + eff + "外星币店#l\r\n\r\n";
       // selStr += "#L9#" + eff + "装备制作#l";
       // selStr += "#L10#" + eff + "在线奖励#l";
       // selStr += "#L11#" + eff + "快速转职#l#k";
       // selStr += "#L12#" + eff + "最强意志#l";;
        //selStr += "#L13##d" + eff + "低级装备#l";
        //selStr += "#L14#" + eff + "背包清理#l";
        //selStr += "#L19##d" + eff + "中介系统#l";
        //selStr += "#L15##d#e" + iconEvent + "每日寻宝#l";
        //selStr += "#L16##d" + iconEvent + "每日签到#l";
        //selStr += "#L19##e" + iconEvent + "签到礼包#l";
        //selStr += "\r\n";
       //selStr += "#L17##d#e" + iconEvent + "地图传送#l";
        //selStr += "#L18#" + iconEvent + "BOSS和组队任务传送#l";
        //selStr += "#L20#" + iconEvent + "官方认证#l";
        //selStr += "\r\n\r\n";
        //selStr += "#L21##b" + kkk + "兑换中心#l";
        //selStr += "\r\n";
        //selStr += "#L20##b#n" + kkk + "官方认证#e#n#l\r\n";
        //selStr += "#L21##b#n" + eff + "群宠技能#e#n#l\r\n";
        //selStr += "#L22##b" + eff + "趣味问答（8秒限时，速度要快哦）#l\r\n";
        cm.sendSimpleS(selStr, 2);
    } else if (status == 1) {
        switch (selection) {
            case 1://宠物进化
                cm.dispose();
                cm.openNpc(9310141, "chongwujinhua");
                break;
            case 2: //等级送礼
                cm.dispose();
                cm.openNpc(9310362, "Levelreward");
                break;
            case 3://自由市场
                if (cm.getPlayer().getMapId() >= 910000000 && cm.getPlayer().getMapId() <= 910000022) {
                    cm.sendOk("你已经在自由市场了。");
                } else {
                    cm.saveReturnLocation("FREE_MARKET");
                    cm.warp(910000000, "st00");
                }
                cm.dispose();
                break;
            case 4://药水商店
                cm.dispose();
                cm.openShop(61);
                break;
            case 5://群宠技能
                cm.dispose();
                cm.openNpc(9010000, "Muiltpet");
                break;
            case 6://副手武器
                cm.dispose();
                cm.openShop(63);
                break;
            case 7://绝版点装
                cm.dispose();
                cm.openNpc(9010047, "16");
                break;
            case 8://外星币店
                cm.dispose();
                cm.openShop(322);
                break;
            case 9://装备制作
                cm.dispose();
                cm.openNpc(9900003, "24");
                break;
            case 10://在线时间
                cm.dispose();
                cm.openNpc(9900003, "zaixianjiangli");
                break;
            case 11://快速转职
                cm.dispose();
                cm.openNpc(9010047, "zhuanzhi");
                break;
            case 12://最强意志
                cm.dispose();
                cm.openNpc(9310060, "zqyz");
                break;
            case 13://低级装备
                cm.dispose();
                cm.openNpc(9010047, "youxishangdian");
                break;
            case 14://背包清理
                cm.dispose();
                cm.openNpc(1012121, "DeletebySlot");
                break;
            case 15://每日寻宝
                cm.dispose();
                cm.openNpc(2420039, "Treasure");
                break;
            case 16://签到
                cm.sendOk("请使用左边的签到功能来进行签到吧！");
                cm.dispose();
                //cm.openNpc(9000231, "Singin");
                break;
            case 17://地图传送
                cm.dispose();
                cm.openNpc(1032005, "worldwarp");
                break;
            case 18://BOSS传送
                cm.dispose();
                cm.openNpc(2023000, "BOSSwarp");
                break;
            case 19://点卷换钱
                cm.dispose();
                cm.openNpc(9010047, "41");
                break;
            case 20://官方认证
                cm.dispose();
                cm.openNpc(1012008, "renzheng");
                break;
            case 21://群宠技能
                cm.dispose();
                cm.openNpc(9010000, "Muiltpet");
                break;
            default:
                cm.sendOk("该功能正在紧张进行制作中，请耐心等待。");
                cm.dispose();
                break;
        }
    }
}
