var status = 0;
var L 
var H 
var axx = "#fEffect/CharacterEff/1051294/0/0#";  //爱心
var eff = "#fCharacter/Weapon/01702523.img/48/straight/0/effect#"; //彩虹带
var xxx = "#fEffect/CharacterEff/1082565/2/0#"; //星系
var pp1 = "#fEffect/CharacterEff/1112907/4/0#"; //泡炮 
var pp2 = "#fEffect/CharacterEff/1112908/0/1#";  //彩光3
//----------------------------------------------------变量切割
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
            cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.");
            cm.dispose();
        } 
    else if (status == 0) {
		var selStr = "#e			"+axx+"在线奖励领取处"+axx+" \r\n\r\n";
		   selStr +="#r#L0#"+xxx+"在线 物品奖励#l\r\n";
		   selStr +="#r#L1#"+xxx+"在线 点卷奖励#l\r\n"
		   selStr +="#r#L2#"+xxx+"在线 每日福利#l\r\n";

        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
		cm.openNpc(2012012,"zaixianshijian5");
            break;
	case 1:
            cm.dispose();
	cm.openNpc(2012012,"zaixianshijian6");
            break;
	case 2:
            cm.dispose();
	cm.openNpc(2012012,"mrfl");
            break;
        case 3:
	       cm.dispose();
            break;
        case 4:
            break;
			case 5:

			cm.dispose();
            break;
		}
    }
}
