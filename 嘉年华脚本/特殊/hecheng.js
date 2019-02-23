var status = 0;
var typed=0;
var selStr;
var xold;
var xnew;
var itemtype=0;
var onesel=0;

var items1=new Array("1402220","1422158","1342090","1452226","1482189","1322223","1312173","1332247","1382231","1232084","1522113","1442242","1222084","1212089","1372195","1492199","1432187","1472235","1362109","1462213","1412152","1532118","1242090");
var items2=new Array("1072870","1003976","1052669","1082556","1022211","1132247","1122269","1032224","1152160","1012438","1102623");
var items3=new Array("1112663","1113075","1032223","1122267","1132246","1122143","1122144","1122145","1122146","1122147","1012174");
var items4=new Array("1162016");



function start() {
    cm.sendNext("#b#e口袋合成系统\r\n#r合成后\r\n力量：+10~15点     敏捷：+10~15点\r\n智力：+10~15点     运气：+10~15点\r\n物攻：魔攻+10~15点\r\n#r升级所需物品\r\n#b#v4000000##v4000016#    [500]个       #v4021016#      [20]个\r\n#v4005000##v4005001##v4005002##v4005003#[30]个  #v4033356#      [2]个");
}

function action(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
    else {
        if (mode == 0) {
            cm.dispose();
        } else
            status++;
        if (status == 1){
			cm.sendSimple("目前只开放了口袋合成：\r\n#r注意，这个只能合成天然的装备，加过属性(包括加过潜能)的装备不可以合成，合成的话后果自负，所以请注意!!!\r\n#b\r\n#L0#>>>>普通装备合成①星装备#l\r\n#L1#>>>>①星装备合成②星装备#l\r\n#L2#>>>>②星装备合成③星装备#l\r\n#L3#>>>>③星装备合成④星装备#l\r\n#L4#>>>>④星装备合成⑤星装备#l\r\n");
			
		}else if (status == 2){
			if(selection==0){
				xold=".";
				xnew="①";
			}else if(selection==1){
				xold="①";
				xnew="②";
			}else if(selection==2){
				xold="②";
				xnew="③";
			}else if(selection==3){
				xold="③";
				xnew="④";
			}else if(selection==4){
				xold="④";
				xnew="⑤";
			}
			cm.sendSimple("请选择你要合成的类别:\r\n#r注意，这个只能合成天然的装备，加过属性的装备合成的话属性会丢失，所以请注意!!!\r\n#b\r\n#e#L4#手帕合成#l");
		}else if (status == 3){
			selStr = " 请选择你要合成的武器.每合成一次随机加10至15攻击.\r\n";
			itemtype=selection;
			if(selection==1){
				for (var i = 0; i < items1.length; i++) {
					selStr += "\r\n#b#L" + i + "#合成[#d#z" +items1[i]+"##b]"+xnew+" 需要2把 #d#z"+items1[i]+"##b"+xold+"，#r[开始合成]#l";
				}
			}
			if(selection==2){
				for (var i = 0; i < items2.length; i++) {
					selStr += "\r\n#b#L" + i + "#合成[#d#z" +items2[i]+"##b]"+xnew+" 需要2把 #d#z"+items2[i]+"##b"+xold+"，#r[开始合成]#l";
				}
			}
			if(selection==3){
				for (var i = 0; i < items3.length; i++) {
					selStr += "\r\n#b#L" + i + "#合成[#d#z" +items3[i]+"##b]"+xnew+" 需要2把 #d#z"+items3[i]+"##b"+xold+"，#r[开始合成]#l";
				}
			}
			if(selection==4){
				for (var i = 0; i < items4.length; i++) {
					selStr += "\r\n#b#L" + i + "#合成[#d#z" +items4[i]+"##b]"+xnew+" 需要2把 #d#z"+items4[i]+"##b"+xold+"，#r[开始合成]#l";
				}
			}
			cm.sendSimple(selStr);
		}else if (status == 4){
			if(itemtype==1){
				onesel=items1[selection];//选择的物品ID
			}
			if(itemtype==2){
				onesel=items2[selection];//选择的物品ID
			}
			if(itemtype==3){
				onesel=items3[selection];//选择的物品ID
			}
			if(itemtype==4){
				onesel=items4[selection];//选择的物品ID
			}
			var inv = cm.getInventory(1);
			var it;
			var itemids;
			var checkitem=0;
			var itemsrc=0;
			var itemsrc2=0;
			for (var i = 0; i <= 96; i++) {
				it = inv.getItem(i);
				if (it != null) {
					itemids = it.getItemId();
					if(itemids==onesel){//检查是否等于这个物品
						if(xold.equals(".")==true){
							if(it.getOwner().length()>0){
							}else{
								checkitem+=1;
								if(checkitem==1){
									itemsrc=i;
								}
								if(checkitem==2){
									itemsrc2=i;
									break;//跳出FOR
								}
							}
						}else if(it.getOwner().length()>0){//检查是否有加个星的
							if(it.getOwner().substring(0, 1).equals(xold)==true){//检查是否符号加星的条件
								checkitem+=1;
								if(checkitem==1){
									itemsrc=i;
								}
								if(checkitem==2){
									itemsrc2=i;
									break;//跳出FOR
								}
							}
						}
					}
				}
			}
			if(checkitem==2 && cm.haveItem(4000000,500) && cm.haveItem(4000016,500) && cm.haveItem(4021016,20) && cm.haveItem(4005000,30) && cm.haveItem(4005001,30) && cm.haveItem(4005002,30) && cm.haveItem(4005003,30) && cm.haveItem(4033356,2)){//检测到物品，开始合成程序，
				var itemd = cm.getInventory(1).getItem(itemsrc).copy();
				itemd.setOwner(xnew);
				var hwchancess= Math.floor(Math.random()*5+10);
				if(itemd.getMatk()!=1000){
					itemd.setMatk(itemd.getMatk()*1+hwchancess);
					itemd.setWatk(itemd.getWatk()*1+hwchancess);
					itemd.setStr(itemd.getStr()*1+hwchancess);
					itemd.setDex(itemd.getDex()*1+hwchancess);
					itemd.setInt(itemd.getInt()*1+hwchancess);
					itemd.setLuk(itemd.getLuk()*1+hwchancess);
				

				}
				var ii = cm.getItemInfo();
				cm.worldMessage("【"+ cm.getChar().getName() +"】通过市场NPC[手帕合成]合成系统合成成功~大家恭喜它~");
				cm.gainItem(4000000,-500)
				cm.gainItem(4000016,-500)
				cm.gainItem(4021016,-20)
				cm.gainItem(4005000,-30)
				cm.gainItem(4005001,-30)
				cm.gainItem(4005002,-30)
				cm.gainItem(4005003,-30)
				cm.gainItem(4033356,-2)
				cm.removeSlot(1, itemsrc, 1)
				cm.removeSlot(1, itemsrc2, 1)
				cm.addFromDrop(itemd);
				cm.sendOk("恭喜，合成成功.\r\n扣除两个#r"+xold+"#v"+onesel+"##k.在给你一个新的#r"+xnew+"#v"+onesel+"#.");
			}else{
				cm.sendOk("对不起，你没有那么多材料或者没有两个"+xold+"#v"+onesel+"#.所以合成"+xnew+"#v"+onesel+"#失败.");
			}
			cm.dispose();
			return;
		}//end stats
    }
}