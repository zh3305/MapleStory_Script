var status = 0;
var L 
var H 



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
		var selStr = "#e        欢迎来到众筹中心 \r\n";
		   selStr +="      蓝方:#b"+L+"#k\r\n\r\n";
		   selStr +="      红方:#r"+H+"#k\r\n\r\n\r\n";
		   selStr +="#r#L0#我要捐献#l\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            break;
	case 1:
            cm.dispose();
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
