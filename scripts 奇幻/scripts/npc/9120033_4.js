var status = 0;
var bl =Math.floor(Math.random() * 100);
var jb =Math.floor(Math.random() * 4) + 1;

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
        var selStr = "你好，请选择你需要分解的#b布莱克缤武器#k：\r\n";
            selStr +="#L0##v1212072##L1##v1222067##L2##v1232064##L3##v1242069##L4##v1252062#\r\n";
			selStr +="#L5##v1302070##L6##v1312142##L7##v1322100##L8##v1332214##L9##v1342079#\r\n";
			selStr +="#L10##v1362081##L11##v1372168##L12##v1382199##L13##v1402185##L14##v1412126#\r\n";
			selStr +="#L15##v1422129##L16##v1432158##L17##v1442209##L18##v1452196##L19##v1462184#\r\n";
			selStr +="#L20##v1472205##L21##v1482159##L22##v1492170##L23##v1522085##L24##v1532089#\r\n";
		cm.sendSimple(selStr);
    } else if (status == 1) {
            if (selection == 0) {
            if (cm.itemQuantity(1212072) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1212072,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
				cm.dispose();
			} else {
			    cm.gainMeso(mxb);
				cm.gainItem(1212072,-1);
                cm.sendOk("分解结果 >> #e失败#n\r\n\r\n你获得了一些冒险币。");
		        cm.dispose();
				}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
     } else if (selection == 1) {
            if (cm.itemQuantity(1222067) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1222067,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else {
			    cm.gainMeso(mxb);
				cm.gainItem(1222067,-1);
                cm.sendOk("分解结果 >> #e失败#n\r\n\r\n你获得了一些冒险币。");
		        cm.dispose();
				}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
     } else if (selection == 2) {
            if (cm.itemQuantity(1232064) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1232064,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else {
			    cm.gainMeso(mxb);
				cm.gainItem(1232064,-1);
                cm.sendOk("分解结果 >> #e失败#n\r\n\r\n你获得了一些冒险币。");
		        cm.dispose();
				}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
     } else if (selection == 3) {
		    if (cm.itemQuantity(1242069) >=1 && cm.getMeso() >=3888888){ 
			if (bl >= 0 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1242069,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else {
			    cm.gainMeso(mxb);
				cm.gainItem(1242069,-1);
                cm.sendOk("分解结果 >> #e失败#n\r\n\r\n你获得了一些冒险币。");
		        cm.dispose();
				}
     } else if (cm.itemQuantity(1242070) >=1 && cm.getMeso() >=3888888){
			if (bl >= 0 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1242070,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else {
			    cm.gainMeso(mxb);
				cm.gainItem(1242070,-1);
                cm.sendOk("分解结果 >> #e失败#n\r\n\r\n你获得了一些冒险币。");
		        cm.dispose();
				}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
     } else if (selection == 4) {
            if (cm.itemQuantity(1252062) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1252062,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else {
			    cm.gainMeso(mxb);
				cm.gainItem(1252062,-1);
                cm.sendOk("分解结果 >> #e失败#n\r\n\r\n你获得了一些冒险币。");
		        cm.dispose();
				}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
     } else if (selection == 5) {
            if (cm.itemQuantity(1302070) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1302070,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else {
			    cm.gainMeso(mxb);
				cm.gainItem(1302070,-1);
                cm.sendOk("分解结果 >> #e失败#n\r\n\r\n你获得了一些冒险币。");
		        cm.dispose();
				}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
     } else if (selection == 6) {
            if (cm.itemQuantity(1312142) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1312142,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else {
			    cm.gainMeso(mxb);
				cm.gainItem(1312142,-1);
                cm.sendOk("分解结果 >> #e失败#n\r\n\r\n你获得了一些冒险币。");
		        cm.dispose();
				}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
     } else if (selection == 7) {
            if (cm.itemQuantity(1322100) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1322100,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else {
			    cm.gainMeso(mxb);
				cm.gainItem(1322100,-1);
                cm.sendOk("分解结果 >> #e失败#n\r\n\r\n你获得了一些冒险币。");
		        cm.dispose();
				}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
     } else if (selection == 8) {
            if (cm.itemQuantity(1332214) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1332214,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else {
			    cm.gainMeso(mxb);
				cm.gainItem(1332214,-1);
                cm.sendOk("分解结果 >> #e失败#n\r\n\r\n你获得了一些冒险币。");
		        cm.dispose();
				}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
     } else if (selection == 9) {
            if (cm.itemQuantity(1342079) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1342079,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else {
			    cm.gainMeso(mxb);
				cm.gainItem(1342079,-1);
                cm.sendOk("分解结果 >> #e失败#n\r\n\r\n你获得了一些冒险币。");
		        cm.dispose();
				}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
     } else if (selection == 10) {
            if (cm.itemQuantity(1362081) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1362081,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else {
			    cm.gainMeso(mxb);
				cm.gainItem(1362081,-1);
                cm.sendOk("分解结果 >> #e失败#n\r\n\r\n你获得了一些冒险币。");
		        cm.dispose();
				}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
     } else if (selection == 11) {
            if (cm.itemQuantity(1372168) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1372168,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else {
			    cm.gainMeso(mxb);
				cm.gainItem(1372168,-1);
                cm.sendOk("分解结果 >> #e失败#n\r\n\r\n你获得了一些冒险币。");
		        cm.dispose();
				}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
     } else if (selection == 12) {
            if (cm.itemQuantity(1382199) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1382199,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else {
			    cm.gainMeso(mxb);
				cm.gainItem(1382199,-1);
                cm.sendOk("分解结果 >> #e失败#n\r\n\r\n你获得了一些冒险币。");
		        cm.dispose();
				}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
     } else if (selection == 13) {
            if (cm.itemQuantity(1402185) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1402185,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else {
			    cm.gainMeso(mxb);
				cm.gainItem(1402185,-1);
                cm.sendOk("分解结果 >> #e失败#n\r\n\r\n你获得了一些冒险币。");
		        cm.dispose();
				}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
     } else if (selection == 14) {
            if (cm.itemQuantity(1412126) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1412126,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else {
			    cm.gainMeso(mxb);
				cm.gainItem(1412126,-1);
                cm.sendOk("分解结果 >> #e失败#n\r\n\r\n你获得了一些冒险币。");
		        cm.dispose();
				}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
     } else if (selection == 15) {
            if (cm.itemQuantity(1422129) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1422129,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else {
			    cm.gainMeso(mxb);
				cm.gainItem(1422129,-1);
                cm.sendOk("分解结果 >> #e失败#n\r\n\r\n你获得了一些冒险币。");
		        cm.dispose();
				}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
     } else if (selection == 16) {
            if (cm.itemQuantity(1432158) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1432158,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else {
			    cm.gainMeso(mxb);
				cm.gainItem(1432158,-1);
                cm.sendOk("分解结果 >> #e失败#n\r\n\r\n你获得了一些冒险币。");
		        cm.dispose();
				}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
     } else if (selection == 17) {
            if (cm.itemQuantity(1442209) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1442209,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else {
			    cm.gainMeso(mxb);
				cm.gainItem(1442209,-1);
                cm.sendOk("分解结果 >> #e失败#n\r\n\r\n你获得了一些冒险币。");
		        cm.dispose();
				}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
     } else if (selection == 18) {
            if (cm.itemQuantity(1452196) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1452196,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else {
			    cm.gainMeso(mxb);
				cm.gainItem(1452196,-1);
                cm.sendOk("分解结果 >> #e失败#n\r\n\r\n你获得了一些冒险币。");
		        cm.dispose();
				}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
     } else if (selection == 19) {
            if (cm.itemQuantity(1462184) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1462184,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else {
			    cm.gainMeso(mxb);
				cm.gainItem(1462184,-1);
                cm.sendOk("分解结果 >> #e失败#n\r\n\r\n你获得了一些冒险币。");
		        cm.dispose();
				}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
     } else if (selection == 20) {
            if (cm.itemQuantity(1472205) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1472205,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else {
			    cm.gainMeso(mxb);
				cm.gainItem(1472205,-1);
                cm.sendOk("分解结果 >> #e失败#n\r\n\r\n你获得了一些冒险币。");
		        cm.dispose();
				}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
     } else if (selection == 21) {
            if (cm.itemQuantity(1482159) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1482159,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else {
			    cm.gainMeso(mxb);
				cm.gainItem(1482159,-1);
                cm.sendOk("分解结果 >> #e失败#n\r\n\r\n你获得了一些冒险币。");
		        cm.dispose();
				}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
     } else if (selection == 22) {
            if (cm.itemQuantity(1492170) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1492170,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else {
			    cm.gainMeso(mxb);
				cm.gainItem(1492170,-1);
                cm.sendOk("分解结果 >> #e失败#n\r\n\r\n你获得了一些冒险币。");
		        cm.dispose();
				}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
     } else if (selection == 23) {
            if (cm.itemQuantity(1522085) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1522085,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else {
			    cm.gainMeso(mxb);
				cm.gainItem(1522085,-1);
                cm.sendOk("分解结果 >> #e失败#n\r\n\r\n你获得了一些冒险币。");
		        cm.dispose();
				}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
     } else if (selection == 24) {
            if (cm.itemQuantity(1532089) >=1 && cm.getMeso() >=3888888 ){
			if (bl >= 0 && bl <= 100){
			    cm.gainMeso( - 3888888);
			    cm.gainItem(4001191,jb);
		        cm.gainItem(1532089,-1);
				cm.sendOk("分解结果 >> #r#e成功#n#k\r\n收取你手续费388W，你意外获得了#v4001191# #b"+ jb +"#k 个。\r\n\r\n #b#z4001191##k 可以用来制作符号栏的装备哟！~");
		        cm.dispose();
			} else {
			    cm.gainMeso(mxb);
				cm.gainItem(1532089,-1);
                cm.sendOk("分解结果 >> #e失败#n\r\n\r\n你获得了一些冒险币。");
		        cm.dispose();
				}
            } else {
                cm.sendOk("#r分解提示#k：抱歉，你没有这个装备或者没有388W冒险币。");
		        cm.dispose();
                }
        }
    }
}