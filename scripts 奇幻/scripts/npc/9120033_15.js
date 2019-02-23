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
        var selStr = "你好，请选择你需要#e#b回炉重造的150级装备#k#n：\r\n#r[回炉需要两件同样的装备才可执行]#k\r\n";
            selStr +="#e#d帽子系列：#k#n#L0##v1003797##l#L1##v1003798##l#L2##v1003799##l#L3##v1003800##l#L4##v1003801##l\r\n";
			selStr +="#e#d衣服系列：#k#n#L5##v1042254##l #L6##v1042255##l #L7##v1042256##l#L8##v1042257##l #L9##v1042258##l\r\n";
			selStr +="#e#d裤子系列：#k#n#L10##v1062165##l #L11##v1062166##l #L12##v1062167##l #L13##v1062168##l #L14##v1062169##l\r\n\r\n";
			selStr +="#e#r（注：回炉需要支付手续费 #b5W#r 点卷，请谨慎考虑。）#k#n";
		cm.sendSimple(selStr);
    } else if (status == 1) {
	        if (cm.getEventCount("150装备回炉") == 0){
	        if (cm.getSpace(2) > 1){
            if (selection == 0) {
            if (cm.itemQuantity(1003797) >=2 && cm.getPlayer().getCSPoints(1) >= 50000 ){
			    cm.gainNX(- 50000);
		        cm.gainItem(1003797,-2);
				cm.gainItem(2431988,1);
				cm.setEventCount("150装备回炉");
				cm.playerMessage(1,"回炉成功\r\n你获得‘150装备箱子’1个。");
				cm.dispose();
            } else {
                cm.playerMessage(1,"你没有这个装备或者点卷不够5W。");
		        cm.dispose();
                }
     } else if (selection == 1) {
            if (cm.itemQuantity(1003798) >=2 && cm.getPlayer().getCSPoints(1) >= 50000 ){
			    cm.gainNX(- 50000);
		        cm.gainItem(1003798,-2);
				cm.gainItem(2431988,1);
				cm.setEventCount("150装备回炉");
				cm.playerMessage(1,"回炉成功\r\n你获得‘150装备箱子’1个。");
				cm.dispose();
            } else {
                cm.playerMessage(1,"你没有这个装备或者点卷不够5W。");
		        cm.dispose();
                }
     } else if (selection == 2) {
            if (cm.itemQuantity(1003799) >=2 && cm.getPlayer().getCSPoints(1) >= 50000 ){
			    cm.gainNX(- 50000);
		        cm.gainItem(1003799,-2);
				cm.gainItem(2431988,1);
				cm.setEventCount("150装备回炉");
				cm.playerMessage(1,"回炉成功\r\n你获得‘150装备箱子’1个。");
				cm.dispose();
            } else {
                cm.playerMessage(1,"你没有这个装备或者点卷不够5W。");
		        cm.dispose();
                }
     } else if (selection == 3) {
		    if (cm.itemQuantity(1003800) >=2 && cm.getPlayer().getCSPoints(1) >= 50000 ){
			    cm.gainNX(- 50000);
		        cm.gainItem(1003800,-2);
				cm.gainItem(2431988,1);
				cm.setEventCount("150装备回炉");
				cm.playerMessage(1,"回炉成功\r\n你获得‘150装备箱子’1个。");
				cm.dispose();
            } else {
                cm.playerMessage(1,"你没有这个装备或者点卷不够5W。");
		        cm.dispose();
                }
     } else if (selection == 4) {
            if (cm.itemQuantity(1003801) >=2 && cm.getPlayer().getCSPoints(1) >= 50000 ){
			    cm.gainNX(- 50000);
		        cm.gainItem(1003801,-2);
				cm.gainItem(2431988,1);
				cm.setEventCount("150装备回炉");
				cm.playerMessage(1,"回炉成功\r\n你获得‘150装备箱子’1个。");
				cm.dispose();
            } else {
                cm.playerMessage(1,"你没有这个装备或者点卷不够5W。");
		        cm.dispose();
                }
     } else if (selection == 5) {
            if (cm.itemQuantity(1042254) >=2 && cm.getPlayer().getCSPoints(1) >= 50000 ){
			    cm.gainNX(- 50000);
		        cm.gainItem(1042254,-2);
				cm.gainItem(2431988,1);
				cm.setEventCount("150装备回炉");
				cm.playerMessage(1,"回炉成功\r\n你获得‘150装备箱子’1个。");
				cm.dispose();
            } else {
                cm.playerMessage(1,"你没有这个装备或者点卷不够5W。");
		        cm.dispose();
                }
     } else if (selection == 6) {
            if (cm.itemQuantity(1042255) >=2 && cm.getPlayer().getCSPoints(1) >= 50000 ){
			    cm.gainNX(- 50000);
		        cm.gainItem(1042255,-2);
				cm.gainItem(2431988,1);
				cm.setEventCount("150装备回炉");
				cm.playerMessage(1,"回炉成功\r\n你获得‘150装备箱子’1个。");
				cm.dispose();
            } else {
                cm.playerMessage(1,"你没有这个装备或者点卷不够5W。");
		        cm.dispose();
                }
     } else if (selection == 7) {
            if (cm.itemQuantity(1042256) >=2 && cm.getPlayer().getCSPoints(1) >= 50000 ){
			    cm.gainNX(- 50000);
		        cm.gainItem(1042256,-2);
				cm.gainItem(2431988,1);
				cm.setEventCount("150装备回炉");
				cm.playerMessage(1,"回炉成功\r\n你获得‘150装备箱子’1个。");
				cm.dispose();
            } else {
                cm.playerMessage(1,"你没有这个装备或者点卷不够5W。");
		        cm.dispose();
                }
     } else if (selection == 8) {
            if (cm.itemQuantity(1042257) >=2 && cm.getPlayer().getCSPoints(1) >= 50000 ){
			    cm.gainNX(- 50000);
		        cm.gainItem(1042257,-2);
				cm.gainItem(2431988,1);
				cm.setEventCount("150装备回炉");
				cm.playerMessage(1,"回炉成功\r\n你获得‘150装备箱子’1个。");
				cm.dispose();
            } else {
                cm.playerMessage(1,"你没有这个装备或者点卷不够5W。");
		        cm.dispose();
                }
     } else if (selection == 9) {
            if (cm.itemQuantity(1042258) >=2 && cm.getPlayer().getCSPoints(1) >= 50000 ){
			    cm.gainNX(- 50000);
		        cm.gainItem(1042258,-2);
				cm.gainItem(2431988,1);
				cm.setEventCount("150装备回炉");
				cm.playerMessage(1,"回炉成功\r\n你获得‘150装备箱子’1个。");
				cm.dispose();
            } else {
                cm.playerMessage(1,"你没有这个装备或者点卷不够5W。");
		        cm.dispose();
                }
     } else if (selection == 10) {
            if (cm.itemQuantity(1062165) >=2 && cm.getPlayer().getCSPoints(1) >= 50000 ){
			    cm.gainNX(- 50000);
		        cm.gainItem(1062165,-2);
				cm.gainItem(2431988,1);
				cm.setEventCount("150装备回炉");
				cm.playerMessage(1,"回炉成功\r\n你获得‘150装备箱子’1个。");
				cm.dispose();
            } else {
                cm.playerMessage(1,"你没有这个装备或者点卷不够5W。");
		        cm.dispose();
                }
     } else if (selection == 11) {
            if (cm.itemQuantity(1062166) >=2 && cm.getPlayer().getCSPoints(1) >= 50000 ){
			    cm.gainNX(- 50000);
		        cm.gainItem(1062166,-2);
				cm.gainItem(2431988,1);
				cm.setEventCount("150装备回炉");
				cm.playerMessage(1,"回炉成功\r\n你获得‘150装备箱子’1个。");
				cm.dispose();
            } else {
                cm.playerMessage(1,"你没有这个装备或者点卷不够5W。");
		        cm.dispose();
                }
     } else if (selection == 12) {
            if (cm.itemQuantity(1062167) >=2 && cm.getPlayer().getCSPoints(1) >= 50000 ){
			    cm.gainNX(- 50000);
		        cm.gainItem(1062167,-2);
				cm.gainItem(2431988,1);
				cm.setEventCount("150装备回炉");
				cm.playerMessage(1,"回炉成功\r\n你获得‘150装备箱子’1个。");
				cm.dispose();
            } else {
                cm.playerMessage(1,"你没有这个装备或者点卷不够5W。");
		        cm.dispose();
                }
     } else if (selection == 13) {
            if (cm.itemQuantity(1062168) >=2 && cm.getPlayer().getCSPoints(1) >= 50000 ){
			    cm.gainNX(- 50000);
		        cm.gainItem(1062168,-2);
				cm.gainItem(2431988,1);
				cm.setEventCount("150装备回炉");
				cm.playerMessage(1,"回炉成功\r\n你获得‘150装备箱子’1个。");
				cm.dispose();
            } else {
                cm.playerMessage(1,"你没有这个装备或者点卷不够5W。");
		        cm.dispose();
                }
     } else if (selection == 14) {
            if (cm.itemQuantity(1062169) >=2 && cm.getPlayer().getCSPoints(1) >= 50000 ){
			    cm.gainNX(- 50000);
		        cm.gainItem(1062169,-2);
				cm.gainItem(2431988,1);
				cm.setEventCount("150装备回炉");
				cm.playerMessage(1,"回炉成功\r\n你获得‘150装备箱子’1个。");
				cm.dispose();
            } else {
                cm.playerMessage(1,"你没有这个装备或者点卷不够5W。");
		        cm.dispose();
                }
			}
			}else{
		        cm.playerMessage(1,"消耗栏空格不足 1 格。");
		        cm.dispose();
                }
			}else{
		        cm.playerMessage(1,"每天只能回炉 1 次。");
		        cm.dispose();
                }
        }
    }