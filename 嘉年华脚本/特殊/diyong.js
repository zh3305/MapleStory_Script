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
		var selStr = "#e            "+axx+"抵用商城"+axx+" \r\n\r\n";
		   selStr +="#r#L0#"+axx+"抵用商城 1号店#l\r\n";
		   selStr +="#r#L1#"+axx+"抵用商城 2号店#l\r\n";
		   selStr +="#r#L2#"+axx+"副手商城 3号店#l\r\n";
           selStr +="#r#L3#"+axx+"巨匠商城 4号店#l\r\n";
		   selStr +="#r#L4#"+axx+"机器商城 4号店#l\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
		cm.openNpc(9310362,"diyongjuan");
            break;
	case 1:
            cm.dispose();
	cm.openNpc(9310362,"diyongjuan1");
            break;
	case 2:
            cm.dispose();
	cm.openNpc(9310362,"diyongjuan2");
            break;
        case 3:
	       cm.dispose();
	cm.openNpc(9310362,"jujang");
            break;
        case 4:           
		cm.dispose();
	cm.openNpc(9310362,"jqr");
            break;
			case 5:

			cm.dispose();
            break;
		}
    }
}
