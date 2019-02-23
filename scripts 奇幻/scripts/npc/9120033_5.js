var status = 0;
var bl =Math.floor(Math.random() * 100);
var jb =Math.floor(Math.random() * 8) + 2;

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
        var selStr = "你好，请选择你需要分解的#r140级系列武器#k：\r\n";
            selStr +="#L0##v1212014##L1##v1222014##L2##v1232014##L3##v1242014##L4##v1302152#\r\n";
			selStr +="#L5##v1312065##L6##v1322096##L7##v1332130##L8##v1342036##L9##v1362019#\r\n";
			selStr +="#L10##v1372084##L11##v1382104##L12##v1402095##L13##v1412065##L14##v1422066#\r\n";
			selStr +="#L15##v1432086##L16##v1442116##L17##v1452111##L18##v1462099##L19##v1472122#\r\n";
			selStr +="#L20##v1482084##L21##v1492085##L22##v1522018##L23##v1532018##L24##v1252014#\r\n";
		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.itemQuantity(1212014) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 98){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1212014,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else if (bl >= 99 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4031988,1);
				cm.gainItem(4001191,jb);
		        cm.gainItem(1212014,-1);
				cm.sendOk("分解结果 >> #d#e完美#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个和#v4031988# #b1#k 个。\r\n\r\n #b#z4031988##k 可以在制作符号栏的装备时使成功率增倍哟！~");
			    cm.worldMessage(0x18, "[分解系统] : 恭喜 " + cm.getChar().getName() + " 完美地分解了他（她）的装备。");
				cm.dispose();
			}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
            break;
        case 1:
            if (cm.itemQuantity(1222014) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 98){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1222014,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else if (bl >= 99 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4031988,1);
				cm.gainItem(4001191,jb);
		        cm.gainItem(1222014,-1);
				cm.sendOk("分解结果 >> #d#e完美#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个和#v4031988# #b1#k 个。\r\n\r\n #b#z4031988##k 可以在制作符号栏的装备时使成功率增倍哟！~");
			    cm.worldMessage(0x18, "[分解系统] : 恭喜 " + cm.getChar().getName() + " 完美地分解了他（她）的装备。");
			    cm.dispose();
		    }
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
            break;
        case 2:
            if (cm.itemQuantity(1232014) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 98){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1232014,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else if (bl >= 99 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4031988,1);
				cm.gainItem(4001191,jb);
		        cm.gainItem(1232014,-1);
				cm.sendOk("分解结果 >> #d#e完美#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个和#v4031988# #b1#k 个。\r\n\r\n #b#z4031988##k 可以在制作符号栏的装备时使成功率增倍哟！~");
			    cm.worldMessage(0x18, "[分解系统] : 恭喜 " + cm.getChar().getName() + " 完美地分解了他（她）的装备。");
				cm.dispose();
			}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
            break;
        case 3:
		    if (cm.itemQuantity(1242014) >=1 && cm.getMeso() >=3888888){ 
			if (bl >= 0 && bl <= 98){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1242014,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else if (bl >= 99 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4031988,1);
				cm.gainItem(4001191,jb);
		        cm.gainItem(1242014,-1);
				cm.sendOk("分解结果 >> #d#e完美#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个和#v4031988# #b1#k 个。\r\n\r\n #b#z4031988##k 可以在制作符号栏的装备时使成功率增倍哟！~");
			    cm.worldMessage(0x18, "[分解系统] : 恭喜 " + cm.getChar().getName() + " 完美地分解了他（她）的装备。");
				cm.dispose();
				}
     } else if (cm.itemQuantity(1242042) >=1 && cm.getMeso() >=3888888){
			if (bl >= 0 && bl <= 98){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1242042,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else if (bl >= 99 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4031988,1);
				cm.gainItem(4001191,jb);
		        cm.gainItem(1242042,-1);
				cm.sendOk("分解结果 >> #d#e完美#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个和#v4031988# #b1#k 个。\r\n\r\n #b#z4031988##k 可以在制作符号栏的装备时使成功率增倍哟！~");
			    cm.worldMessage(0x18, "[分解系统] : 恭喜 " + cm.getChar().getName() + " 完美地分解了他（她）的装备。");
				cm.dispose();
				}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
            break;
        case 4:
            if (cm.itemQuantity(1302152) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 98){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1302152,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else if (bl >= 99 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4031988,1);
				cm.gainItem(4001191,jb);
		        cm.gainItem(1302152,-1);
				cm.sendOk("分解结果 >> #d#e完美#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个和#v4031988# #b1#k 个。\r\n\r\n #b#z4031988##k 可以在制作符号栏的装备时使成功率增倍哟！~");
			    cm.worldMessage(0x18, "[分解系统] : 恭喜 " + cm.getChar().getName() + " 完美地分解了他（她）的装备。");
				cm.dispose();
			}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
            break;
        case 5:
            if (cm.itemQuantity(1312065) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 98){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1312065,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else if (bl >= 99 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4031988,1);
				cm.gainItem(4001191,jb);
		        cm.gainItem(1312065,-1);
				cm.sendOk("分解结果 >> #d#e完美#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个和#v4031988# #b1#k 个。\r\n\r\n #b#z4031988##k 可以在制作符号栏的装备时使成功率增倍哟！~");
			    cm.worldMessage(0x18, "[分解系统] : 恭喜 " + cm.getChar().getName() + " 完美地分解了他（她）的装备。");
				cm.dispose();
			}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
            break;
        case 6:
            if (cm.itemQuantity(1322096) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 98){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1322096,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else if (bl >= 99 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4031988,1);
				cm.gainItem(4001191,jb);
		        cm.gainItem(1322096,-1);
				cm.sendOk("分解结果 >> #d#e完美#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个和#v4031988# #b1#k 个。\r\n\r\n #b#z4031988##k 可以在制作符号栏的装备时使成功率增倍哟！~");
			    cm.worldMessage(0x18, "[分解系统] : 恭喜 " + cm.getChar().getName() + " 完美地分解了他（她）的装备。");
				cm.dispose();
			}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
            break;
        case 7:
            if (cm.itemQuantity(1332130) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 98){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1332130,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else if (bl >= 99 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4031988,1);
				cm.gainItem(4001191,jb);
		        cm.gainItem(1332130,-1);
				cm.sendOk("分解结果 >> #d#e完美#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个和#v4031988# #b1#k 个。\r\n\r\n #b#z4031988##k 可以在制作符号栏的装备时使成功率增倍哟！~");
			    cm.worldMessage(0x18, "[分解系统] : 恭喜 " + cm.getChar().getName() + " 完美地分解了他（她）的装备。");
				cm.dispose();
			}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
            break;
        case 8:
            if (cm.itemQuantity(1342036) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 98){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1342036,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else if (bl >= 99 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4031988,1);
				cm.gainItem(4001191,jb);
		        cm.gainItem(1342036,-1);
				cm.sendOk("分解结果 >> #d#e完美#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个和#v4031988# #b1#k 个。\r\n\r\n #b#z4031988##k 可以在制作符号栏的装备时使成功率增倍哟！~");
                cm.worldMessage(0x18, "[分解系统] : 恭喜 " + cm.getChar().getName() + " 完美地分解了他（她）的装备。");
			    cm.dispose();
			}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
            break;
        case 9:
            if (cm.itemQuantity(1362019) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 98){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1362019,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else if (bl >= 99 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4031988,1);
				cm.gainItem(4001191,jb);
		        cm.gainItem(1362019,-1);
				cm.sendOk("分解结果 >> #d#e完美#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个和#v4031988# #b1#k 个。\r\n\r\n #b#z4031988##k 可以在制作符号栏的装备时使成功率增倍哟！~");
		        cm.worldMessage(0x18, "[分解系统] : 恭喜 " + cm.getChar().getName() + " 完美地分解了他（她）的装备。");
				cm.dispose();
			}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
            break;
        case 10:
            if (cm.itemQuantity(1372084) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 98){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1372084,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else if (bl >= 99 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4031988,1);
				cm.gainItem(4001191,jb);
		        cm.gainItem(1372084,-1);
				cm.sendOk("分解结果 >> #d#e完美#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个和#v4031988# #b1#k 个。\r\n\r\n #b#z4031988##k 可以在制作符号栏的装备时使成功率增倍哟！~");
		        cm.worldMessage(0x18, "[分解系统] : 恭喜 " + cm.getChar().getName() + " 完美地分解了他（她）的装备。");
				cm.dispose();
			}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
            break;
        case 11:
            if (cm.itemQuantity(1382104) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 98){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1382104,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else if (bl >= 99 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4031988,1);
				cm.gainItem(4001191,jb);
		        cm.gainItem(1382104,-1);
				cm.sendOk("分解结果 >> #d#e完美#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个和#v4031988# #b1#k 个。\r\n\r\n #b#z4031988##k 可以在制作符号栏的装备时使成功率增倍哟！~");
		        cm.worldMessage(0x18, "[分解系统] : 恭喜 " + cm.getChar().getName() + " 完美地分解了他（她）的装备。");
				cm.dispose();
			}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
            break;
        case 12:
            if (cm.itemQuantity(1402095) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 98){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1402095,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else if (bl >= 99 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4031988,1);
				cm.gainItem(4001191,jb);
		        cm.gainItem(1402095,-1);
				cm.sendOk("分解结果 >> #d#e完美#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个和#v4031988# #b1#k 个。\r\n\r\n #b#z4031988##k 可以在制作符号栏的装备时使成功率增倍哟！~");
		        cm.worldMessage(0x18, "[分解系统] : 恭喜 " + cm.getChar().getName() + " 完美地分解了他（她）的装备。");
				cm.dispose();
			}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
            break;
        case 13:
            if (cm.itemQuantity(1412065) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 98){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1412065,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else if (bl >= 99 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4031988,1);
				cm.gainItem(4001191,jb);
		        cm.gainItem(1412065,-1);
				cm.sendOk("分解结果 >> #d#e完美#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个和#v4031988# #b1#k 个。\r\n\r\n #b#z4031988##k 可以在制作符号栏的装备时使成功率增倍哟！~");
		        cm.worldMessage(0x18, "[分解系统] : 恭喜 " + cm.getChar().getName() + " 完美地分解了他（她）的装备。");
				cm.dispose();
			}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
            break;
        case 14:
            if (cm.itemQuantity(1422066) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 98){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1422066,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else if (bl >= 99 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4031988,1);
				cm.gainItem(4001191,jb);
		        cm.gainItem(1422066,-1);
				cm.sendOk("分解结果 >> #d#e完美#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个和#v4031988# #b1#k 个。\r\n\r\n #b#z4031988##k 可以在制作符号栏的装备时使成功率增倍哟！~");
		        cm.worldMessage(0x18, "[分解系统] : 恭喜 " + cm.getChar().getName() + " 完美地分解了他（她）的装备。");
				cm.dispose();
			}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
            break;
        case 15:
            if (cm.itemQuantity(1432086) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 98){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1432086,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else if (bl >= 99 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4031988,1);
				cm.gainItem(4001191,jb);
		        cm.gainItem(1432086,-1);
				cm.sendOk("分解结果 >> #d#e完美#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个和#v4031988# #b1#k 个。\r\n\r\n #b#z4031988##k 可以在制作符号栏的装备时使成功率增倍哟！~");
		        cm.worldMessage(0x18, "[分解系统] : 恭喜 " + cm.getChar().getName() + " 完美地分解了他（她）的装备。");
				cm.dispose();
			}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
            break;
        case 16:
            if (cm.itemQuantity(1442116) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 98){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1442116,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else if (bl >= 99 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4031988,1);
				cm.gainItem(4001191,jb);
		        cm.gainItem(1442116,-1);
				cm.sendOk("分解结果 >> #d#e完美#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个和#v4031988# #b1#k 个。\r\n\r\n #b#z4031988##k 可以在制作符号栏的装备时使成功率增倍哟！~");
		        cm.worldMessage(0x18, "[分解系统] : 恭喜 " + cm.getChar().getName() + " 完美地分解了他（她）的装备。");
				cm.dispose();
			}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
            break;
        case 17:
            if (cm.itemQuantity(1452111) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 98){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1452111,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else if (bl >= 99 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4031988,1);
				cm.gainItem(4001191,jb);
		        cm.gainItem(1452111,-1);
				cm.sendOk("分解结果 >> #d#e完美#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个和#v4031988# #b1#k 个。\r\n\r\n #b#z4031988##k 可以在制作符号栏的装备时使成功率增倍哟！~");
		        cm.worldMessage(0x18, "[分解系统] : 恭喜 " + cm.getChar().getName() + " 完美地分解了他（她）的装备。");
				cm.dispose();
			}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
            break;
        case 18:
            if (cm.itemQuantity(1462099) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 98){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1462099,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else if (bl >= 99 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4031988,1);
				cm.gainItem(4001191,jb);
		        cm.gainItem(1462099,-1);
				cm.sendOk("分解结果 >> #d#e完美#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个和#v4031988# #b1#k 个。\r\n\r\n #b#z4031988##k 可以在制作符号栏的装备时使成功率增倍哟！~");
		        cm.worldMessage(0x18, "[分解系统] : 恭喜 " + cm.getChar().getName() + " 完美地分解了他（她）的装备。");
				cm.dispose();
			}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
            break;
		case 19:
            if (cm.itemQuantity(1472122) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 98){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1472122,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else if (bl >= 99 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4031988,1);
				cm.gainItem(4001191,jb);
		        cm.gainItem(1472122,-1);
				cm.sendOk("分解结果 >> #d#e完美#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个和#v4031988# #b1#k 个。\r\n\r\n #b#z4031988##k 可以在制作符号栏的装备时使成功率增倍哟！~");
		        cm.worldMessage(0x18, "[分解系统] : 恭喜 " + cm.getChar().getName() + " 完美地分解了他（她）的装备。");
				cm.dispose();
			}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
            break;
		case 20:
            if (cm.itemQuantity(1482084) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 98){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1482084,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else if (bl >= 99 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4031988,1);
				cm.gainItem(4001191,jb);
		        cm.gainItem(1482084,-1);
				cm.sendOk("分解结果 >> #d#e完美#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个和#v4031988# #b1#k 个。\r\n\r\n #b#z4031988##k 可以在制作符号栏的装备时使成功率增倍哟！~");
		        cm.worldMessage(0x18, "[分解系统] : 恭喜 " + cm.getChar().getName() + " 完美地分解了他（她）的装备。");
				cm.dispose();
			}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
            break;
		case 21:
            if (cm.itemQuantity(1492085) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 98){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1492085,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else if (bl >= 99 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4031988,1);
				cm.gainItem(4001191,jb);
		        cm.gainItem(1492085,-1);
				cm.sendOk("分解结果 >> #d#e完美#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个和#v4031988# #b1#k 个。\r\n\r\n #b#z4031988##k 可以在制作符号栏的装备时使成功率增倍哟！~");
		        cm.worldMessage(0x18, "[分解系统] : 恭喜 " + cm.getChar().getName() + " 完美地分解了他（她）的装备。");
				cm.dispose();
			}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
            break;
		case 22:
            if (cm.itemQuantity(1522018) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 98){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1522018,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else if (bl >= 99 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4031988,1);
				cm.gainItem(4001191,jb);
		        cm.gainItem(1522018,-1);
				cm.sendOk("分解结果 >> #d#e完美#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个和#v4031988# #b1#k 个。\r\n\r\n #b#z4031988##k 可以在制作符号栏的装备时使成功率增倍哟！~");
		        cm.worldMessage(0x18, "[分解系统] : 恭喜 " + cm.getChar().getName() + " 完美地分解了他（她）的装备。");
				cm.dispose();
			}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
            break;
		case 23:
            if (cm.itemQuantity(1532018) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 98){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1532018,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else if (bl >= 99 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4031988,1);
				cm.gainItem(4001191,jb);
		        cm.gainItem(1532018,-1);
				cm.sendOk("分解结果 >> #d#e完美#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个和#v4031988# #b1#k 个。\r\n\r\n #b#z4031988##k 可以在制作符号栏的装备时使成功率增倍哟！~");
		        cm.worldMessage(0x18, "[分解系统] : 恭喜 " + cm.getChar().getName() + " 完美地分解了他（她）的装备。");
				cm.dispose();
			}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
            break;
		case 24:
            if (cm.itemQuantity(1252014) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 98){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1252014,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else if (bl >= 99 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4031988,1);
				cm.gainItem(4001191,jb);
		        cm.gainItem(1252014,-1);
				cm.sendOk("分解结果 >> #d#e完美#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个和#v4031988# #b1#k 个。\r\n\r\n #b#z4031988##k 可以在制作符号栏的装备时使成功率增倍哟！~");
		        cm.worldMessage(0x18, "[分解系统] : 恭喜 " + cm.getChar().getName() + " 完美地分解了他（她）的装备。");
				cm.dispose();
			}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
            break;
        }
    }
}