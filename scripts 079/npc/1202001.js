
var status = 0;  	
var itemS =  	
Array(
			Array(1702303,60000,"6W点卷"), //圣诞六翼天使武器(长杖)
			
			Array(1702302,60000,"6W点卷"), //白日剑


			
	
			Array(1702301,60000,"6W点卷"), //龙背刃

			Array(1702300,60000,"6W点卷"), //枫叶3年旗

			Array(1702299,60000,"6W点卷"), //南瓜灯笼
			Array(1702298,60000,"6W点卷"), //永恒玄冥剑
			Array(1702297,60000,"6W点卷"), //重生玄冥剑
			Array(1702296,60000,"6W点卷"), //圣诞六翼天使武器(双手剑)
			
	
			Array(1702295,60000,"6W点卷"), //炼狱魔龙斧
			Array(1702288,60000,"6W点卷"), //枫叶乾坤轮
			Array(1702287,60000,"6W点卷"), //枫叶3年旗
			Array(1702285,60000,"6W点卷"), //粉色花边游泳圈
			Array(1702284,60000,"6W点卷"), //永恒碎鼋斧
			Array(1702283,60000,"6W点卷"), //重生碎鼋斧
			Array(1702289,60000,"6W点卷"), //圣诞六翼天使武器(双手斧)
			
		
			Array(1702282,60000,"6W点卷"), //金龙轰天锤
			Array(1702281,60000,"6W点卷"), //枫叶轰天镗
			Array(1702280,60000,"6W点卷"), //粉红海豹抱枕
			Array(1702279,60000,"6W点卷"), //蓝色海豹抱枕
			Array(1702278,60000,"6W点卷"), //枫叶3年旗
			Array(1702277,60000,"6W点卷"), //粉色花边游泳圈
			Array(1702276,60000,"6W点卷"), //玩具匠人的锤子
			Array(1702275,60000,"6W点卷"), //永恒威震天
			Array(1702274,60000,"6W点卷"), //重生威震天
			Array(1702273,60000,"6W点卷"), //圣诞六翼天使武器(双手钝器)
			

			Array(1702272,60000,"6W点卷"), //圣诞树手杖
			Array(1702271,60000,"6W点卷"), //永恒显圣枪
			Array(1702270,60000,"6W点卷"), //重生显圣枪
			Array(1702269,60000,"6W点卷"), //圣诞六翼天使武器(枪)
		
			Array(1702268,60000,"6W点卷"), //冻冻鱼
		
			Array(1702266,60000,"6W点卷"), //黄拖把
			Array(1702264,60000,"6W点卷"), //白拖把
			Array(1702263,60000,"6W点卷"), //黑拖把
			Array(1702261,60000,"6W点卷"), //黄拖把
			Array(1702260,60000,"6W点卷"), //白拖把
			Array(1702252,60000,"6W点卷"), //黑拖把
			Array(1702262,60000,"6W点卷"), //爱心椅子
			Array(1092051,60000,"6W点卷"), //爱心椅子
			Array(1092040,60000,"6W点卷"), //爱心椅子
			Array(1092054,60000,"6W点卷"), //爱心椅子
			Array(1092053,60000,"6W点卷"), //爱心椅子
						Array(1122029,350000,"冒险之心(战士)#r30#k攻"),					
						Array(1122030,350000,"冒险之心(法师)#r30#k魔"),						
						Array(1122031,350000,"冒险之心(弓手)#r30#k攻"),						
						Array(1122032,350000,"冒险之心(飞侠)#r30#k攻"),
						Array(1122033,350000,"冒险之心(海盗)#r25#k攻"),
						Array(1122034,500000,"冒险之心(战士)#r50#k攻"),
						Array(1122035,500000,"冒险之心(法师)#r50#k魔"),
						Array(1122036,500000,"冒险之心(弓手)#r50#k攻"),
						Array(1122037,500000,"冒险之心(飞侠)#r50#k攻"),
						Array(1122038,500000,"冒险之心(海盗)#r45#k攻")
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
				  cm.sendNext("5元冒险岛，点卷商场[武器·盾牌店][装备会慢慢添加，请玩家细心等待]");   
		}else if (status == 1) {
				StringS = "您好!您当前的点卷为#r " + cm.getPlayer().getCSPoints(0) + " #k选择你的物品.";
				for (var i = 0; i < itemS.length; i++){
					StringS += "\r\n#L" + i + "#" + itemS[i][2] + "#v" + itemS[i][0] + "#(需要#r" + itemS[i][1] + "#k点卷)#l"
				}
				cm.sendSimple(StringS);			 								     
		}else if (status == 2){
			if (cm.getPlayer().getCSPoints(0) >= itemS[selection][1]){
				if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(1)).isFull()){
						cm.sendOk("您至少应该让装备栏空出两格");
						cm.dospose();
				}
				//cm.getPlayer().modifyCSPoints(0,cm.getPlayer().getCSPoints(0) - itemS[selection][1]);
				cm.getChar().modifyCSPoints(0,-itemS[selection][1]);
				cm.gainItem(itemS[selection][0],1);
				cm.sendOk("购买成功！请查看背包！")
				cm.dispose();
			}else{
				cm.sendOk("穷鬼，你没有足够的点卷用来购买！");
				cm.dispose();
			}
		}
	}
}