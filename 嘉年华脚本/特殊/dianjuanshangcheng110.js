var status = 0;
var L 
var H 
var axx = "#fEffect/CharacterEff/1051294/0/0#";  //爱心


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
		var selStr = "#e            "+axx+"点劵商店"+axx+" \r\n\r\n";
		   selStr +="#r#L0#"+axx+"点装商城 1号店（既卖点装又包含道具卷轴、椅子）#l\r\n";
		   selStr +="#r#L1#"+axx+"点装商城 2号店（纯卖点装）#l\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
		cm.openNpc(9310072);
            break;
	case 1:
            cm.dispose();
	cm.openNpc(1540658);
            break;
	case 2:
            cm.dispose();
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
