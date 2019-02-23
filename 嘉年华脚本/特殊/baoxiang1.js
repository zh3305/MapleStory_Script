var status = 0;
var eff = "#fEffect/CharacterEff/1112902/0/1#";

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
        var selStr = "#r#e兔币商店贩卖所有装备#n";

	selStr+="\r\n";
        selStr += "#r#L0#" + eff + "双倍经验#l";
        selStr += "#r#L1#" + eff + "各类椅子#l";
        selStr += "#r#L2#" + eff + "绝版点装#l";
        selStr += "#r#L3#" + eff + "兔兔点装#l\r\n";
        selStr += "#r#L4#" + eff + "#d购买商城物品[喇叭,冒险岛转蛋卷,防暴卷]#l\r\n";
        //selStr += "#b#L5#" + eff + "巨匠套装#l";
        //selStr += "#L6#" + eff + "吊坠专卖#l";
        selStr += "#L7#" + eff + "护肩专卖#l";
        selStr += "#L8#" + eff + "徽章专卖#l";
        //selStr += "#b#L9#" + eff + "戒指专卖#l";
        //selStr += "#L10#" + eff + "图腾专卖#l";
        selStr += "#L11#" + eff + "外星套装#l";
        selStr += "#L12#" + eff + "纹章专卖#l\r\n";
        selStr += "#L13#" + eff + "腰带专卖#l";
        selStr += "#L14#" + eff + "全职杂物#l";
        selStr += "#r#L15#" + eff + "弗纳武器#l";
	//selStr += "#b#L16#" + eff + "属性点装#l";
	selStr += "#b#L17#" + eff + "勋章专卖#l\r\n";
	//selStr += "#b#L18#" + eff + "兔兔大杂烩#n#r[限时1分钟!]#l\r\n";
        selStr += "#r#L19#" + eff + "低级神装#l";

        cm.sendSimpleS(selStr, 2);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            //双倍经验
            cm.dispose();
            cm.openNpc(9070004, "jingyan100");
            break;
        case 1:
            //各类椅子
            cm.dispose();
            cm.openNpc(9070004, "jingyan101");
            break;
        case 2:
            //绝版点装
            cm.dispose();
            cm.openNpc(9070004, "jingyan102");
            break;
        case 3:
            //兔兔点装
            cm.dispose();
            cm.openNpc(9070004, "jingyan103");
            break;
        case 4:
            //商城物品
            cm.dispose();
            cm.openNpc(9070004, "jingyan104");
            break;
        case 5:
            //巨匠套装
            cm.dispose();
            cm.openNpc(9070004, "jingyan105");
            break;
        case 6:
            //吊坠专卖
            cm.dispose();
            cm.openNpc(9070004, "jingyan106");
            break;
        case 7:
            //护肩专卖
            cm.dispose();
            cm.openNpc(9070004, "jingyan107");
            break;
        case 8:
            //徽章专卖
            cm.dispose();
            cm.openNpc(9070004, "jingyan108");
            break;
        case 9:
            //戒指专卖
            cm.dispose();
            cm.openNpc(9070004, "jingyan109");
            break;
        case 10:
            //图腾专卖
            cm.dispose();
            cm.openNpc(9070004, "jingyan110");
            break;
        case 11:
            //外星套装
            cm.dispose();
            cm.openNpc(9070004, "jingyan111");
            break;
        case 12:
            //纹章专卖
            cm.dispose();
            cm.openNpc(9070004, "jingyan112");
            break;
        case 13:
            //腰带专卖
            cm.dispose();
            cm.openNpc(9070004, "jingyan113");
            break;
        case 14:
            //全职杂物
            cm.dispose();
            cm.openNpc(9070004, "jingyan114");
            break;
        case 15:
            //150装备
            cm.dispose();
            cm.openNpc(9070004, "jingyan115");
            break;

        case 16:
            //属性点装
            cm.dispose();
            cm.openNpc(9070004, "jingyan116");
            break;
        case 17:
            //勋章特卖
            cm.dispose();
            cm.openNpc(9070004, "jingyan117");
            break;
        case 18:
            //大杂烩<全部免费>
            cm.dispose();
            cm.openNpc(9070004, "jingyan118");
            break;
        case 19:
            //低级神装
            cm.dispose();
            cm.openNpc(9070004, "jingyan119");//cm.sendOk("#r技术员正在拼命添加...");
            break;

        }
    }
}
