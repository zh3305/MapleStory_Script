/* 点卷商店 */

var status = 0;
var tz = "#fEffect/CharacterEff/1082565/2/0#";  //兔子蓝
var eff = "#fCharacter/Weapon/01702523.img/48/straight/0/effect#"; //彩虹带

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
        var selStr = ""+eff+"#r#e嘉年华合成系统"+eff+"#l\r\n        #L102#"+tz+"口袋合成"+tz+"#l        #L998#"+tz+"戒指合成"+tz+"#l\r\n        #L100#"+tz+"图腾合成"+tz+"#k#l        ;
cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
			case 102:
				cm.dispose();
            cm.openNpc(9400023);
				break;
			case 101:
				cm.dispose();
            cm.openNpc(9310072,"diyong");
				break;
			case 100:
				cm.dispose();
            cm.openNpc(9310072);
				break;
			case 999:
				cm.dispose();
            cm.openNpc(9000041, "maple");
			case 998:
				cm.dispose();
            cm.openNpc(9000041, "redduihuan");
				break;
        case 0://杂货商店
            cm.dispose();
            cm.openShop(61);
            break;
        case 1://RED商店
            cm.dispose();
            cm.openShop(69);
            break;
        case 2://11周年装备
            cm.dispose();
            cm.openShop(9071001);
            break;
        case 3://BOSS币店
            cm.dispose();
            cm.openShop(68);
            break;
        case 4://征服币店
            cm.dispose();
            cm.openShop(66);
            break;
        //case 5://副手装备
            cm.dispose();
            cm.openShop(63);
            break;
        case 6://漩涡装备
            cm.dispose();
            cm.openShop(74);
            break;
        case 7://外星人币
            cm.dispose();
            cm.openShop(322);
            break;
        case 8://低级武器
            cm.dispose();
            cm.openShop(73);
            break;
        case 9://组队点数
            cm.dispose();
            cm.openShop(72);
            break;
        case 10://金币魔方
            cm.dispose();
            cm.openShop(328);
            break;
        case 11://西服婚纱
            cm.dispose();
            cm.openShop(32);
            break;
        case 12://2倍
            cm.dispose();
            cm.openNpc(9001000, "shuangbei");
            break;

        }
    }
}