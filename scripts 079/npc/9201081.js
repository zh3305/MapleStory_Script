//自创武器商店
//5元制作 QQ601143764
var status = 0;  	
var itemS =  	
Array(
			
			Array(1302134,30,"#r20#k元宝"), //海盗头巾(绿)
			Array(1302156,30,"#r20#k元宝"), //海盗头巾(红)
			Array(1302157,30,"#r20#k元宝"), //海盗头巾(粉)
			Array(1402051,30,"#r30#k元宝"), //海盗头巾(灰)

			
			Array(1402153,30,"#r30#k元宝"), //废报纸头盔
			Array(1402080,30,"#r30#k元宝"), //枫叶帽

			Array(1432151,20,"#r30#k元宝"), //月饼帽
			Array(1432150,20,"#r30#k元宝"), //地球帽
			Array(1432153,30,"#r30#k元宝"), //枫叶面具
			Array(1432152,20,"#r30#k元宝"), //金龙头盔
			Array(1402048,30,"#r30#k元宝"), //永恒冠军盔
			Array(1402082,30,"#r30#k元宝"), //永恒玄妙帽
			Array(1452037,30,"#r30#k元宝"), //永恒霓翎帽
			Array(1402060,30,"#r30#k元宝"), //永恒迷踪帽
			Array(1452037,30,"#r30#k元宝"), //永恒海王星
			Array(1402052,30,"#r30#k元宝"), //重生冠军盔
			Array(1402045,30,"#r30#k元宝"), //重生玄妙帽
			Array(1432063,30,"#r30#k元宝"), //重生霓翎帽
			Array(1402049,30,"#r30#k元宝"), //重生迷踪帽
			Array(1432062,30,"#r30#k元宝"), //重生海王星
			//------披风------
		
			
			Array(1452047,30,"#r30#k元宝"), //永恒定边手套
			Array(1402065,30,"#r30#k元宝"), //永恒逍遥手套
			Array(1402066,30,"#r30#k元宝"), //永恒白云手套
			Array(1402067,30,"#r30#k元宝"), //永恒探云手套
			Array(1402070,30,"#r30#k元宝"), //永恒抚浪手套
			Array(1402150,30,"#r30#k元宝"), //重生定边手套
			Array(1452053,30,"#r30#k元宝"), //重生逍遥手套
			Array(1402152,30,"#r30#k元宝"), //重生白云手套
			Array(1452150,30,"#r30#k元宝"), //重生探云手套
			Array(1302106,30,"#r30#k元宝"), //重生抚浪手套
			Array(1302069,30,"#r30#k元宝"), //烈焰之剑
			Array(1302149,30,"#r30#k元宝"), //重生逍遥手套
			Array(1332113,30,"#r30#k元宝"), //重生逍遥手套
			Array(1432084,30,"#r30#k元宝"), //重生探云手套
			Array(1442113,30,"#r30#k元宝"), //重生抚浪手套
			Array(1462093,30,"#r30#k元宝"), //烈焰之剑
			Array(1492080,30,"#r30#k元宝"), //重生逍遥手套
			Array(1402099,30,"#r30#k元宝"), //重生逍遥手套

			Array(1302158,30,"#r30#k元宝"), //海盗头巾(紫)
			Array(1092100,30,"#r40#k元宝")
);                                              
var StringS;                                    
function start() {                              
	status = -1;                            
	action(1, 0, 0);                        
}                                               
                                                
function action(mode, type, selection) {        
	if (mode == -1) {                       
		cm.dispose();                   
	} else {                                
		if (status >= 0 && mode == 0) { 
			cm.dispose();           
			return;                 
		}                               
		if (mode == 1)                  
			status++;
		else
			status--;
		if (status == 0) {
				  cm.sendNext(""+cm.mxdmz()+"冒险岛，自创武器商场\r\n#d[装备会慢慢添加，请玩家细心等待]");   
		}else if (status == 1) {
				StringS = "您好!您当前剩余元宝:#r" + cm.getChar().getzb() + "#k块#b 选择你的物品.";
				for (var i = 0; i < itemS.length; i++){
					StringS += "\r\n#L" + i + "#" + itemS[i][2] + "#v" + itemS[i][0] + "##d >>>> 王者必备#l"
				}
				cm.sendSimple(StringS);			 								     
		}else if (status == 2){
			if (cm.getzb() >= itemS[selection][1]){
				if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(1)).isFull()){
						cm.sendOk("您至少应该让装备栏空出两格");
						cm.dospose();
				}
				//cm.getPlayer().modifyCSPoints(0,cm.getPlayer().getCSPoints(0) - itemS[selection][1]);
				cm.setzb(-itemS[selection][1]);
				cm.gainItem(itemS[selection][0],1);
				cm.sendOk("购买成功！请查看背包！")
				cm.dispose();
			}else{
				cm.sendOk("对不起，你的元宝余额不足");
				cm.dispose();
			}
		}
	}
}