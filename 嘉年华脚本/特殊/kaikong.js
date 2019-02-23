var status = 0;
var typed=0;
var hcditem=new Array("3060000","3060010","3060020","3060030","3060042","3060052","3060061","3060071","3060100","3060110","3060121","3060131");
var hcc1item=new Array("3061140","3061150","3061160","3061170","3061180","3061190","3061200","3061210","3061220","3061230","3061240","3061250");
var hccitem=new Array("3061140","3061150","3061160","3061170","3061180","3061190","3061200","3061210","3061220","3061230","3061240","3061250","3061260","3061270");
var hcbitem=new Array("3062140","3062150","3062160","3062170","3062180","3062190","3062200","3062210","3062220","3062230","3062240","3062250","3062260","3062270");
var hcaitem=new Array
("3063140","3063150","3063160","3063170","3063180","3063190","3063200","3063210","3063220","3063230","3063240","3063250","3063260","3063270");
var hcsitem=new Array
("3064140","3064150","3064160","3064170","3064180","3064190","3064200","3064210","3064220","3064230","3064240","3064250","3064260","3064290");
var tpitem=new Array("3061140","3061150","3061160","3061170","3061180","3061190","3061200","3061210","3061220","3061230","3061240","3061250","3061260","3061270");
var ypitem=new Array("3062140","3062150","3062160","3062170","3062180","3062190","3062200","3062210","3062220","3062230","3062240","3062250","3062260","3062270");
var jpitem=new Array
("3063140","3063150","3063160","3063170","3063180","3063190","3063200","3063210","3063220","3063230","3063240","3063250","3063260","3063270");
var itemsl=new Array("2","2","2","2","1","1","1","1","2","2","1","1","2","3");

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple("#r<击退海盗><VIP每日打工><正义之章>#k可以获得#b蘑菇奖牌#k\r\n#i4031996##i4031995##i4031994#\r\n可以我这里兑换不同等级的#b星岩石#k,#b星岩石#k可以镶嵌到有孔的装备上,增加武器的属性.\r\n有孔装备出处#r<副本：击退海盗,怪物公园><消费商店>#k\r\n#L1##d[兑换]#k#z4031996#换取#dC等级#k星岩石#l\r\n#L2##d[兑换]#k#z4031995#换取#bB等级#k星岩石#l\r\n#L3##d[兑换]#k#z4031994#换取#rA等级#k星岩石#l\r\n#L4##d[合成]#kD等级星岩石合成#dC等级#k星岩石#l\r\n#L5##d[合成]#k#dC等级#k星岩石合成#bB等级#k星岩石#l\r\n#L6##d[合成]#k#bB等级#k星岩石合成#rA等级#k星岩石#l\r\n#L7##d[合成]#k#rA等级#k星岩石合成#gS等级#k星岩石#l");					
		} else if (status == 1) {
			if (selection == 1) {
				typed=1;
				var selStr="\r\n";
				for (var i = 0; i < tpitem.length; i++) {//铜牌
						selStr += "#b#L" + i + "##z" +tpitem[i]+"# #d需要 #r" + itemsl[i] + "#d#z4031996##l\r\n";
					}
				cm.sendSimpleS(selStr,2);
			} else if (selection == 2) {
				typed=2;
				var selStr="\r\n";
				for (var i = 0; i < ypitem.length; i++) {//银牌
						selStr += "#b#L" + i + "##z" +ypitem[i]+"# #d需要 #r" + itemsl[i] + "#d#z4031995##l\r\n";
					}
				cm.sendSimpleS(selStr,2);
			} else if (selection == 3) {
				typed=3;
				var selStr="\r\n";
				for (var i = 0; i < jpitem.length; i++) {//金牌
						selStr += "#b#L" + i + "##z" +jpitem[i]+"# #d需要 #r" + itemsl[i] + "#d#z4031994##l\r\n";
					}
				cm.sendSimpleS(selStr,2);
			} else if (selection == 4) {
				typed=4;
				var selStr="合成星岩石成功率为50%,合成失败后会返回1个当前等级星岩石,所以要做好心里准备哟\r\n";
				for (var i = 0; i < hcditem.length; i++) {//D合成C
						selStr += "#b#L" + i + "##d#z" + hcc1item[i] + "##k需要2个#z" + hcditem[i] + "#\r\n";
					}
				cm.sendSimpleS(selStr,2);
			} else if (selection == 5) {
				typed=5;
				var selStr="合成星岩石成功率为50%,合成失败后会返回1个当前等级星岩石,所以要做好心里准备哟\r\n";
				for (var i = 0; i < hccitem.length; i++) {//C合成B
						selStr += "#b#L" + i + "##b#z" + hcbitem[i] + "##k需要2个#d#z" + hccitem[i] + "#\r\n";
					}
				cm.sendSimpleS(selStr,2);	
			} else if (selection == 6) {
				typed=6;
				var selStr="合成B级星岩石到A级,需要付2000兔币\r\n合成星岩石成功率为50%,合成失败后会返回1个星岩石,所以要做好心里准备哟\r\n";
				for (var i = 0; i < hccitem.length; i++) {//B合成A需要多加2000兔币
						selStr += "#b#L" + i + "##r#z" + hcaitem[i] + "##k需要2个#b#z" + hcbitem[i] + "#\r\n";
					}
				cm.sendSimpleS(selStr,2);
			} else if (selection == 7) {
				typed=7;
				var selStr="合成A级星岩石到S级,需要付10000兔币,合成成功率100%\r\n";
				for (var i = 0; i < hccitem.length; i++) {//A合成S需要多加10000兔币
						selStr += "#b#L" + i + "##g#z" + hcsitem[i] + "##k需要2个#r#z" + hcaitem[i] + "#\r\n";
					}
				cm.sendSimpleS(selStr,2);
			} else if (selection == 8) {
				cm.dispose();
			}
		} else if (status == 2) {
			var ii = Packages.server.MapleItemInformationProvider.getInstance();
			if(typed==1){//铜牌兑换
				if(cm.haveItem(4031996,itemsl[selection])==false){
						cm.sendOk("真遗憾，你的#z4031996#不足");
						cm.dispose();
						return;
				}
				cm.gainItem(tpitem[selection],1);
				cm.gainItem(4031996,-itemsl[selection]);
				cm.sendOk("恭喜，换取成功");
				cm.dispose();
				return;
			}
			if(typed==2){//银牌兑换
				if(cm.haveItem(4031995,itemsl[selection])==false){
						cm.sendOk("真遗憾，你的#z4031995#不足");
						cm.dispose();
						return;
				}
				cm.gainItem(ypitem[selection],1);
				cm.gainItem(4031995,-itemsl[selection]);
				cm.sendOk("恭喜，换取成功");
				cm.dispose();
				return;
			}
			if(typed==3){//金牌兑换
				if(cm.haveItem(4031994,itemsl[selection])==false){
						cm.sendOk("真遗憾，你的#z4031994#不足");
						cm.dispose();
						return;
				}
				cm.gainItem(ypitem[selection],1);
				cm.gainItem(4031994,-itemsl[selection]);
				cm.sendOk("恭喜，换取成功");
				cm.dispose();
				return;
			}
			if(typed==4){//D合成C
				if(cm.haveItem(hcditem[selection],2)==false){
					cm.sendOk("真遗憾，你的#z" + hcditem[selection] + "#不足2个");
					cm.dispose();
					return;
				}
				var chance = Math.floor(Math.random()*2);
				var ii = Packages.server.MapleItemInformationProvider.getInstance();
				if(chance==1){
				       cm.gainItem(hcditem[selection],-2);
				       cm.gainItem(hcc1item[selection],1);
				       cm.sendOk("恭喜，合成成功，你获得了1个#d#z" + hcc1item[selection] + "##k");
				       cm.worldMessage("[宝石系统]：恭喜[" + cm.getChar().getName() + "],合出了一颗"+ii.getName(hcc1item[selection])+"");
				}else{
				       cm.gainItem(hcditem[selection],-1);
				       cm.sendOk("真遗憾，合成失败，你获得了1个#z" + hcditem[selection] + "#");
				}
				cm.dispose();
				return;
			}
			if(typed==5){//C合成B
				if(cm.haveItem(hccitem[selection],2)==false){
					cm.sendOk("真遗憾，你的#z" + hccitem[selection] + "#不足2个");
					cm.dispose();
					return;
				}
				var chance = Math.floor(Math.random()*2);
				var ii = Packages.server.MapleItemInformationProvider.getInstance();
				if(chance==1){
				       cm.gainItem(hccitem[selection],-2);
				       cm.gainItem(hcb1item[selection],1);
				       cm.sendOk("恭喜，合成成功，你获得了1个#d#z" + hcbitem[selection] + "##k");
				       cm.worldMessage("[宝石系统]：恭喜[" + cm.getChar().getName() + "],合出了一颗"+ii.getName(hcbitem[selection])+"");
				}else{
				       cm.gainItem(hccitem[selection],-1);
				       cm.sendOk("真遗憾，合成失败，你获得了1个#z" + hccitem[selection] + "#");
				}
				cm.dispose();
				return;
			}
			if(typed==6){//B合成A
				if(cm.haveItem(hcbitem[selection],2)==false || cm.getHyPay(1) >= 2000){
					cm.sendOk("真遗憾，你的#z" + hcbitem[selection] + "#不足2个\r\n或者你没有2000兔币，请检查");
					cm.dispose();
					return;
				}
				var chance = Math.floor(Math.random()*2);
				var ii = Packages.server.MapleItemInformationProvider.getInstance();
				if(chance==1){
				       cm.gainItem(hcbitem[selection],-2);
				       cm.gainItem(hca1item[selection],1);
				       cm.sendOk("恭喜，合成成功，你获得了1个#d#z" + hcaitem[selection] + "##k");
				       cm.worldMessage("[宝石系统]：恭喜[" + cm.getChar().getName() + "],合出了一颗"+ii.getName(hcaitem[selection])+"");
				}else{
				       cm.gainItem(hcbitem[selection],-1);              
				       cm.sendOk("真遗憾，合成失败，你获得了1个#z" + hcbitem[selection] + "#");
				}
				cm.dispose();
				return;
			}
			if(typed==7){//A合成S
				if(cm.haveItem(hcaitem[selection],2)==false || cm.getHyPay(1) >= 10000){
					cm.sendOk("真遗憾，你的#z" + hcaitem[selection] + "#不足2个\r\n或者你没有10000兔币，请检查");
					cm.dispose();
					return;
				}
				var ii = Packages.server.MapleItemInformationProvider.getInstance();
				       cm.gainItem(hcaitem[selection],-2);
				       cm.gainItem(hcs1item[selection],1);
				       cm.sendOk("恭喜，合成成功，你获得了1个#d#z" + hcsitem[selection] + "##k");
				       cm.worldMessage("[宝石系统]：恭喜[" + cm.getChar().getName() + "],合出了一颗"+ii.getName(hcsitem[selection])+"");
				cm.dispose();
				return;
			}
		} else if (status == 3) {
			if(typed==40){
				if(cm.haveItem(4310020,60)==false){
					cm.sendOk("真遗憾，你的纪念币还不足60个，抽奖失败！");
					cm.dispose();
					return;
				}
				cm.gainItem(4310020,-60);
				var ii = Packages.server.MapleItemInformationProvider.getInstance();		              
               	                var type = Packages.constants.GameConstants.getInventoryType(xpdmitem[selection]); //获得装备的类形
                	        var toDrop = ii.randomizeStats(ii.getEquipById(xpdmitem[selection])).copy(); // 生成一个Equip类
                	        toDrop.setStr(15);
                	        toDrop.setDex(15);
                	        toDrop.setInt(15);
                	        toDrop.setLuk(15);
                	        cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
                	        cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //刷新背包
				cm.sendOk("恭喜，购买成功！");
				cm.dispose();
				return;
			}
			if(typed==50){
				if(cm.getChar().gettz()<30){
					cm.sendOk("真遗憾，你的<成功>挑战次数不足30次！");
					cm.dispose();
					return;
				}
				cm.getChar().settz(-30);
				cm.gainTimeItem(xpdmitem[selection],30*24*60*60*1000,1,100,100,100,100,30,30);
				cm.sendOk("恭喜，换取成功，扣除30次<成功>挑战次数，继续努力，做收集达人！");
				cm.dispose();
				return;
			}
			if(typed==60){
				if(selection>2){
					if(cm.haveItem(4310020,488)==false){
						cm.sendOk("真遗憾，你的纪念币还不足488个，抽奖失败！");
						cm.dispose();
						return;
					}
					cm.gainItem(4310020,-488);
					cm.sendOk("恭喜，换取成功，扣除488个纪念币，继续努力，做收集达人！");
				}else{
					if(cm.haveItem(4310020,108)==false){
						cm.sendOk("真遗憾，你的纪念币还不足108个，抽奖失败！");
						cm.dispose();
						return;
					}
					cm.gainItem(4310020,-188);
					cm.sendOk("恭喜，换取成功，扣除108个纪念币，继续努力，做收集达人！");
				}
				var ii = Packages.server.MapleItemInformationProvider.getInstance();		              
               	                var type = Packages.constants.GameConstants.getInventoryType(csitem[selection]); //获得装备的类形
                	        var toDrop = ii.randomizeStats(ii.getEquipById(csitem[selection])).copy(); // 生成一个Equip类
                	        toDrop.setStr(188);
                	        toDrop.setDex(188);
                	        toDrop.setInt(188);
                	        toDrop.setLuk(188);
				toDrop.setMatk(188);
				toDrop.setWatk(188);
                	        cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
                	        cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //刷新背包
				cm.dispose();
				return;
			}
			cm.dispose();
		}
	}
}
