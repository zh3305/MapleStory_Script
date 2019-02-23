
var status = 0;

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
	var v = getVIP(cm);
	var selStr = "尊敬的" + ((v==0)?"":"#rVIP"+v+"#k") + "玩家#r#h ##k您好,请选择您所需要的功能\r\n圣杯：#r" + cm.itemQuantity(4031454) + " #k枫叶：#r" + cm.itemQuantity(4001126); 
	cm.sendSimple(selStr);
    } else if(status == 1) {
	switch (selection){
	case 11:
		break;
	default:
		cm.sendOk("default");
		cm.dispose();
		break;
	}

    }
}

//获得VIP等级
function getVIP(cm){
	var v_p = 4031331;
	for (var i = 7;i >= 1;i--){
		if (cm.itemQuantity(v_p + i)!=0) return i;
	}
	return 0;
}



