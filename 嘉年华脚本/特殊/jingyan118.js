var status = 0;
var eff = "#fEffect/CharacterEff/1112905/0/1#";

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
        var selStr = "您好，欢迎来到欢乐大杂烩,我是各种商城物品贩卖商\r\n您目前的兔兔币余额:#r" + cm.getHyPay(1) + " \r\n";
	selStr+="#r#k\r\n";
        selStr += "#r#L0#" + eff + "#d宠物预览#l\r\n";
        selStr += "#L9#" + eff + "时尚宠装#l";
        selStr += "#L17#" + eff + "时尚宠食#l";
        selStr += "#L18#" + eff + "时尚补品#l";
        selStr += "#L19#" + eff + "时尚美食#l\r\n";
        selStr += "#b#L1#" + eff + "时尚帽子#l";
        selStr += "#b#L111#" + eff + "时尚帽子1#l";
        selStr += "#b#L110#" + eff + "时尚帽子2#l";
        selStr += "#L2#" + eff + "时尚披风#l";
        selStr += "#L3#" + eff + "时尚上衣#l";
        selStr += "#L4#" + eff + "时尚配件#l";
        selStr += "#b#L5#" + eff + "时尚机械#l";
        selStr += "#L6#" + eff + "时尚手套#l";
        selStr += "#L7#" + eff + "时尚套服#l";
        selStr += "#L71#" + eff + "时尚套服1#l";
        selStr += "#L8#" + eff + "时尚裤子#l\r\n";
        selStr += "#L10#" + eff + "时尚指环#l";
        selStr += "#L11#" + eff + "时尚盾牌#l";
        selStr += "#L12#" + eff + "時尚鞋子#l";
        selStr += "#L13#" + eff + "时尚坐骑#l";
        selStr += "#L14#" + eff + "時尚武器#l";
        selStr += "#L141#" + eff + "時尚武器1#l";
        selStr += "#L15#" + eff + "时尚????#l";
        selStr += "#L16#" + eff + "时尚称号#l";
        selStr += "#L20#" + eff + "时尚召唤#l";
        selStr += "#L21#" + eff + "双头杖,灵魂手铳#l";
        selStr += "#L22#" + eff + "单手剑,斧#l\r\n";
        selStr += "#L221#" + eff + "单手剑,斧1#l";
        selStr += "#L23#" + eff + "单手钝器,短刀#l";
        selStr += "#L231#" + eff + "单手钝器,短刀1#l\r\n";
        selStr += "#L24#" + eff + "刀,手杖#l";
        selStr += "#L25#" + eff + "副手#l";
        selStr += "#L26#" + eff + "短杖,长杖#l";
        selStr += "#L27#" + eff + "双手剑,斧#l\r\n";
        selStr += "#L28#" + eff + "双手钝器,枪#l";
        selStr += "#L29#" + eff + "矛,弓#l";
        selStr += "#L30#" + eff + "弩,拳套#l";
        selStr += "#L301#" + eff + "弩,拳套1#l\r\n";
        selStr += "#L31#" + eff + "指节,短枪#l";
        selStr += "#L32#" + eff + "双弩枪,手持火炮#l";
        selStr += "#L33#" + eff + "帽子1#l";
        selStr += "#L34#" + eff + "帽子2#l";
        selStr += "#L341#" + eff + "帽子3#l";
        selStr += "#L351#" + eff + "帽子4#l";
        selStr += "#L35#" + eff + "披风#l";
        selStr += "#L36#" + eff + "上衣#l";
        selStr += "#L361#" + eff + "上衣1#l\r\n";
        selStr += "#L37#" + eff + "龙,机械,盾#l";
        selStr += "#L38#" + eff + "手套#l";
        selStr += "#L381#" + eff + "手套1#l";
        selStr += "#L39#" + eff + "套服#l";
        selStr += "#L391#" + eff + "套服1#l";
        selStr += "#L40#" + eff + "裤子#l";
        selStr += "#L401#" + eff + "裤子1#l";
        selStr += "#L41#" + eff + "戒指#l";
        selStr += "#L42#" + eff + "鞋#l";
        selStr += "#L421#" + eff + "鞋1#l\r\n";
        selStr += "#L43#" + eff + "图腾#l";
        selStr += "#L44#" + eff + "配件1#l";
        selStr += "#L45#" + eff + "配件2#l";
        selStr += "#L46#" + eff + "配件3#l";
        selStr += "#L431#" + eff + "配件4#l\r\n";
        selStr += "#L451#" + eff + "配件5#l";
        selStr += "#L461#" + eff + "配件6#l";
        cm.sendSimpleS(selStr, 2);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            //宠物
            cm.dispose();
            cm.openNpc(9310072, "dzahui20");
            break;
            case 1:
            //时尚帽子
            cm.dispose();
            cm.openNpc(9310072, "dzahui21");
            break;
            case 110:
            //时尚帽子
            cm.dispose();
            cm.openNpc(9310072, "dzahui211");
            break;
            case 111:
            //时尚帽子
            cm.dispose();
            cm.openNpc(9310072, "dzahui212");
            break;
            case 2:
            //时尚披风
            cm.dispose();
            cm.openNpc(9310072, "dzahui22");
            break;
            case 3:
            //时尚上衣
            cm.dispose();
            cm.openNpc(9310072, "dzahui23");
            break;
            case 4:
            //时尚配件
            cm.dispose();
            cm.openNpc(9310072, "dzahui24");
            break;
            case 5:
            //时尚机械
            cm.dispose();
            cm.openNpc(9310072, "dzahui25");
            break;
            case 6:
            //时尚手套
            cm.dispose();
            cm.openNpc(9310072, "dzahui26");
            break;
            case 7:
            //时尚套服
            cm.dispose();
            cm.openNpc(9310072, "dzahui27");
            break;
            case 71:
            //时尚套服
            cm.dispose();
            cm.openNpc(9310072, "dzahui271");
            break;
            case 8:
            //时尚裤子
            cm.dispose();
            cm.openNpc(9310072, "dzahui28");
            break;
            case 9:
            //时尚宠装
            cm.dispose();
            cm.openNpc(9310072, "dzahui29");
            break;
            case 10:
            //时尚指环
            cm.dispose();
            cm.openNpc(9310072, "dzahui30");
            break;
            case 11:
            //时尚盾牌
            cm.dispose();
            cm.openNpc(9310072, "dzahui31");
            break;
            case 12:
            //時尚鞋子
            cm.dispose();
            cm.openNpc(9310072, "dzahui32");
            break;
            case 13:
            //时尚坐骑
            cm.dispose();
            cm.openNpc(9310072, "dzahui33");
            break;
            case 14:
            //時尚武器
            cm.dispose();
            cm.openNpc(9310072, "dzahui34");
            break;
            case 141:
            //時尚武器
            cm.dispose();
            cm.openNpc(9310072, "dzahui341");
            break;
            case 15:
            //时尚
            cm.dispose();
            cm.sendOk("#r管理员正在拼命添加...");
            break;
            case 16:
            //时尚称号
            cm.dispose();
            cm.openNpc(9310072, "dzahui35");
            break;
            case 17:
            //时尚宠食
            cm.dispose();
            cm.openNpc(9310072, "dzahui36");
            break;
            case 18:
            //时尚补品
            cm.dispose();
            cm.openNpc(9310072, "dzahui37");
            break;
            case 19:
            //时尚补品
            cm.dispose();
            cm.openNpc(9310072, "dzahui38");
            break;
            case 20:
            //时尚召唤
            cm.dispose();
            cm.openNpc(9310072, "dzahui39");
            break;
            case 21:
            //双头杖,灵魂手铳
            cm.dispose();
            cm.openNpc(9310072, "dzahui40");
            break;
            case 22:
            //单手剑,斧
            cm.dispose();
            cm.openNpc(9310072, "dzahui41");
            break;
            case 221:
            //单手剑,斧
            cm.dispose();
            cm.openNpc(9310072, "dzahui411");
            break;
            case 23:
            //单手钝器,短刀
            cm.dispose();
            cm.openNpc(9310072, "dzahui42");
            break;
            case 231:
            //单手钝器,短刀
            cm.dispose();
            cm.openNpc(9310072, "dzahui421");
            break;
            case 24:
            //刀,魔法箭矢,卡片,宝盒,宝珠,龙之精髓,灵魂手镯，麦林,手杖
            cm.dispose();
            cm.openNpc(9310072, "dzahui43");
            break;
            case 25:
            //副手
            cm.dispose();
            cm.openNpc(9310072, "dzahui44");
            break;
            case 26:
            //短杖,长杖
            cm.dispose();
            cm.openNpc(9310072, "dzahui45");
            break;
            case 27:
            //双手剑,斧
            cm.dispose();
            cm.openNpc(9310072, "dzahui46");
            break;
            case 28:
            //双手钝器,枪
            cm.dispose();
            cm.openNpc(9310072, "dzahui47");
            break;
            case 29:
            //矛,弓
            cm.dispose();
            cm.openNpc(9310072, "dzahui48");
            break;
            case 30:
            //弩
            cm.dispose();
            cm.openNpc(9310072, "dzahui49");
            break;
            case 301:
            //拳套
            cm.dispose();
            cm.openNpc(9310072, "dzahui491");
            break;
            case 31:
            //指节,短枪
            cm.dispose();
            cm.openNpc(9310072, "dzahui50");
            break;
            case 32:
            //双弩枪,手持火炮
            cm.dispose();
            cm.openNpc(9310072, "dzahui51");
            break;
            case 33:
            //帽子1
            cm.dispose();
            cm.openNpc(9310072, "dzahui52");
            break;
            case 34:
            //帽子2
            cm.dispose();
            cm.openNpc(9310072, "dzahui53");
            break;
            case 341:
            //帽子3
            cm.dispose();
            cm.openNpc(9310072, "dzahui521");
            break;
            case 351:
            //帽子3
            cm.dispose();
            cm.openNpc(9310072, "dzahui531");
            break;
            case 35:
            //披风
            cm.dispose();
            cm.openNpc(9310072, "dzahui54");
            break;
            case 36:
            //上衣
            cm.dispose();
            cm.openNpc(9310072, "dzahui55");
            break;
            case 361:
            //上衣
            cm.dispose();
            cm.openNpc(9310072, "dzahui551");
            break;
            case 37:
            //龙,机械,盾
            cm.dispose();
            cm.openNpc(9310072, "dzahui56");
            break;
            case 38:
            //手套
            cm.dispose();
            cm.openNpc(9310072, "dzahui57");
            break;
            case 381:
            //手套
            cm.dispose();
            cm.openNpc(9310072, "dzahui571");
            break;
            case 391:
            //手套
            cm.dispose();
            cm.openNpc(9310072, "dzahui581");
            break;
            case 39:
            //套服
            cm.dispose();
            cm.openNpc(9310072, "dzahui58");
            break;
            case 40:
            //裤子
            cm.dispose();
            cm.openNpc(9310072, "dzahui59");
            break;
            case 401:
            //裤子
            cm.dispose();
            cm.openNpc(9310072, "dzahui591");
            break;
            case 41:
            //戒指
            cm.dispose();
            cm.openNpc(9310072, "dzahui60");
            break;
            case 42:
            //鞋
            cm.dispose();
            cm.openNpc(9310072, "dzahui61");
            break;
            case 421:
            //鞋
            cm.dispose();
            cm.openNpc(9310072, "dzahui611");
            break;
            case 43:
            //图腾
            cm.dispose();
            cm.openNpc(9310072, "dzahui62");
            break;
            case 44:
            //配件1
            cm.dispose();
            cm.openNpc(9310072, "dzahui63");
            break;
            case 441:
            //配件1
            cm.dispose();
            cm.openNpc(9310072, "dzahui631");
            break;
            case 451:
            //配件1
            cm.dispose();
            cm.openNpc(9310072, "dzahui641");
            break;
            case 45:
            //配件2
            cm.dispose();
            cm.openNpc(9310072, "dzahui64");
            break;
            case 461:
            //配件2
            cm.dispose();
            cm.openNpc(9310072, "dzahui651");
            break;
            case 46:
            //配件3
            cm.dispose();
            cm.openNpc(9310072, "dzahui65");
            break;
        }
    }
}
