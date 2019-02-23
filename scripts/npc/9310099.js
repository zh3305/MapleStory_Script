



var status = 0;
var item = 
Array(
//-------耳环-------
			

			Array(1032082,300,1), //末代不速之客耳环			
			Array(1032083,300,1), //末代不速之客耳环
			Array(1032084,300,1), //至尊不速之客耳环
			Array(1132038,300,1), //末代不速之客腰带
			Array(1132039,300,1), //末代不速之客腰带
			Array(1132040,300,1), //至尊不速之客腰带
			Array(1122083,300,1), //末代不速之客项链
			Array(1122084,300,1), //末代不速之客项链
			Array(1122085,300,1), //至尊不速之客项链			
			Array(1302146,100,1), //单手剑
			Array(1302147,300,1), //枫叶帽



			Array(1322089,300,1), //枫叶旗
			Array(1322090,300,1), //枫叶旗
			Array(1332119,300,1), //末代不速之客短剑-运
			Array(1332120,300,1), //至尊不速之客短剑-运
			Array(1332124,300,1), //末代不速之客短剑-力
			Array(1332125,300,1), //至尊不速之客短剑-力
			Array(1372077,300,1), //末代不速之客短杖
			Array(1372078,300,1), //至尊不速之客短杖
			Array(1382098,300,1), //末代不速之客长杖
			Array(1382099,300,1), //至尊不速之客长杖
			Array(1402089,300,1), //末代不速之客双手剑
			Array(1402090,300,1), //至尊不速之客双手剑
			Array(1422062,300,1), //末代不速之客双手钝器
			Array(1422063,300,1), //至尊不速之客双手钝器
			Array(1432080,300,1), //末代不速之客枪
			Array(1432081,300,1), //至尊不速之客枪
			Array(1442110,300,1), //末代矛
			Array(1442111,300,1), //至尊矛
			
			
			Array(1452105,300,1), //末代不速之客弓
			Array(1452106,300,1), //至尊不速之客弓
			Array(1462090,300,1), //末代不速之客弩
			Array(1462091,300,1), //至尊不速之客弩
			
			

			Array(1092082,300,1), //永恒断首刃
			Array(1092083,300,1), //重生狂鲨锯
			Array(1092084,300,1), //重生断首刃
		
			Array(1092079,300,1), //永恒狂鲨锯
			Array(1092078,300,1), //领路灯
			Array(1092100,100,1), //领路灯
	//-----自创武器
			Array(1302106,100,1), //永恒蝶翼杖
			Array(1302069,100,1), //重生蝶翼杖
			Array(1002926,100,1), //暴力熊
			
		
			Array(1002743,150,1), //海洋帽
			Array(1002744,150,1), //海洋帽
			

			Array(1002745,130,1), //海洋帽
			Array(1002746,130,1), //海洋帽
			Array(1002742,100,1), //海洋帽
			
			Array(1402071,200,1), //永恒冰轮杖
			Array(1402153,200,1), //重生冰轮杖
			Array(1432151,250,1), //圣诞六翼天使武器(长杖)
			
			Array(1432153,100,1), //白日剑
			Array(1432150,100,1), //白日剑
			Array(1432152,100,1), //白日剑
			
	
			Array(1452043,50,1), //龙背刃

			Array(1452060,120,1), //枫叶3年旗

			Array(1402082,120,1), //南瓜灯笼
			Array(1402060,120,1), //永恒玄冥剑
			Array(1452037,120,1), //重生玄冥剑
			Array(1402052,80,1), //圣诞六翼天使武器(双手剑)
			

			//------药水------
	
			Array(1402045,218,1), //粉色海狗靠垫
			Array(1432063,128,1), //蓝色海狗靠垫
			Array(1402049,115,1), //榻榻凳
			Array(1432062,118,1), //白玉海豹靠垫
			Array(3010016,118,1), //黑色海狗靠垫
			Array(1452047,118,1), //金色海狗靠垫
			Array(1402065,100,1), //玩具粉熊椅
			Array(1402066,100,1), //悠长假期(红色)
			Array(1402067,100,1), // 悠长假期(蓝色)
			Array(1402051,3,1), //浪漫秋千
			Array(1402070,125,1), //蝙蝠椅
			Array(1402150,105,1), //魔女的飞扫把
			Array(1452053,105,1), //寒冰椅子
			Array(1402152,105,1), //红龙椅
			Array(1452150,105,1), //蓝龙椅 
			Array(1402038,15,1), //圣诞树椅子
			Array(1382038,25,1), //雪房子
			Array(1402061,25,1), //公主椅子
			Array(3010124,50,1), //沙漠兔子1靠垫
			Array(3010125,50,1), //沙漠兔子2靠垫
			Array(3010126,20,1), //血色玫瑰
			Array(3010058,10,1), //世界末日
			Array(3010127,25,1), //露水椅子
			Array(3010129,1,1), //巨无霸品克缤
			Array(3012002,15,1), //浴桶
			Array(3010073,15,1), //PB克缤
			Array(3012003,15,1), //爱心椅子

			Array(1402085,15,1), //亲亲嘴凳
			Array(1402085,15,1), //亲亲嘴凳
			Array(1432075,15,1), //同一红伞下
			Array(1442104,15,1), //篝火
			Array(1452100,15,1), //浴桶
			Array(1472111,15,1), //PB克缤
			Array(1482073,15,1) //爱心椅子
);



var mhair = Array(30900, 30910);
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if (cm.getzb() >= 3) {
var str1 = "";	
           for (var i = 0; i < item.length; i++){
                   str1 += "#v"+item[i][0]+"#";
            }
				cm.sendYesNo("#b#r"+cm.mxdmz()+"冒险岛#b,元宝抽奖猪[每抽1次花费3元宝]\r\n#d[自创武器是指除了盛大武器外的武器]#b.\r\n所有奖品如下#r[真实,无欺骗,40%中奖]:" + str1);
			} else {
var str1 = "\r\n";	
           for (var i = 0; i < item.length; i++){
                   str1 += "#v"+item[i][0]+"#";
            }
				cm.sendOk("#b#r"+cm.mxdmz()+"冒险岛#b,元宝抽奖猪[每抽1次花费3元宝].\r\n所有奖品如下#r[真实,无欺骗,20%抽得自创武器]" + str1);
				cm.dispose();
			}
		} else if (status == 1){	
			var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();
			for(var i = 1;i<=5;i++){
			if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(i)).isFull()){
			cm.sendOk("您至少应该让所有包裹都空出一格");
			cm.dispose();
			return;
			}
			}
			var chance = Math.floor(Math.random()*450);
			var finalitem = Array();
			for(var i = 0 ;i<item.length;i++){
			if(item[i][1] >= chance){
			finalitem.push(item[i]);
			}
			}
			if(finalitem.length != 0){
			var random = new java.util.Random();
			var finalchance = random.nextInt(finalitem.length);
			var itemId = finalitem[finalchance][0];
			var Laba = finalitem[finalchance][2];
			if(ii.getInventoryType(itemId).getType() == 1){
			var toDrop = ii.randomizeStats(ii.getEquipById(itemId)).copy();
			} else {
			var toDrop = new net.sf.odinms.client.Equip(itemId,0).copy();
			}
			net.sf.odinms.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop,-1);
			if(Laba == 1){
			cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.getItemMega(cm.getC().getChannel(),cm.getPlayer().getName() + " : " + "从飞天猪获得！大家一起恭喜他/她吧！！！",toDrop, true).getBytes());
				
			cm.setzb(-3);
			cm.getPlayer().saveToDB(true);
			cm.sendOk("非常感谢参加本次系统活动。多多努力。获取更多的礼物吧！");
			cm.dispose();}
			} else {							
			cm.setzb(-3);
			cm.getPlayer().saveToDB(true);
			cm.sendOk("欢迎参加本次系统活动。抱歉你这次没有中奖呢!");
			cm.dispose();
			}
		}
	}
}
