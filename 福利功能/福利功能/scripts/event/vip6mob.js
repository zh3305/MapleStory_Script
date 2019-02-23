importPackage(org.chinamsaction);
importPackage(org.character);

var exitMap;
var instanceId;
var minPlayers = 1;
var mapId=980000403;
var setupTask;
var item = 
Array(
			//-------耳环-------
			
			Array(1032047,400,1), //可乐耳环
			Array(1032055,300,1), //工作人员C的旧收信机
			Array(1032056,200,1), //工作人员C的旧收信机
			Array(1032057,200,1), //工作人员C的旧收信机
			Array(1032058,200,1), //工作人员C钛质收信机
			//-------------------
			Array(1702303,200,1),
			Array(1702302,150,1),
			Array(1702295,120,1),
			Array(4002000,120,1),
			Array(2340000,120,1),
			Array(1702297,210,1),
			Array(1702296,170,1),
			Array(1702295,233,1),
			Array(1702285,172,1),
			Array(1702284,233,1),
			Array(1702277,172,1),
			Array(1702276,233,1),
			Array(1702275,169,1),
			Array(1702274,233,1),
			Array(1702268,155,1),
			Array(1702256,111,1),
			Array(1702257,112,1),
			Array(1702258,288,1),
			Array(1702259,88,1),
			Array(1702260,233,1),
			Array(1702261,155,1),
			Array(1702262,172,1),
			Array(1702263,112,1),
			Array(1702264,128,1),
			Array(1702266,99,1),
			Array(1702254,111,1),
			Array(1702253,288,1),
			Array(1702252,233,1),
			Array(1702251,172,1),
			Array(1702248,155,1),
			Array(1702239,169,1),
			Array(1702238,111,1),
			Array(1702237,233,1),
			Array(1702235,288,1),
			Array(1702230,155,1),
			Array(1702222,169,1),
			Array(1702219,172,1),
			Array(1702218,111,1),
			Array(1702217,112,1),
			Array(1702216,88,1),
			Array(1702215,20,1),
			Array(1702221,188,1),
			Array(1112426,20,1),
			Array(1112425,172,1),
			Array(1112424,99,1),
			Array(1112423,128,1),
			Array(1112422,288,1),
			Array(1112421,112,1),
			Array(1062114,20,1),
			Array(1062111,172,1),
			Array(1082249,111,1),
			Array(1042127,169,1),
			Array(1042132,88,1),
			Array(1042138,188,1),
			Array(1042140,112,1),
			Array(1042152,169,1),
			Array(1042153,288,1),
			Array(1042154,88,1),
			Array(1042158,300,1),
			Array(1042169,288,1),
			Array(1003043,300,1),
			Array(1003048,300,1),
			Array(1102149,300,1),
			Array(1003033,172,1),
			Array(1003005,300,1),
			Array(1002998,88,1),
			Array(1002957,300,1),
			Array(1002979,288,1),
			Array(1002984,200,1),
			Array(1002953,255,1),
			Array(1002955,172,1),
			Array(1002952,88,1),
			Array(1002799,288,1),
			Array(1002945,88,1),
			Array(1002944,300,1),
			Array(1002808,255,1),
			Array(1002920,300,1),
			Array(1002896,172,1),
			Array(1002798,300,1),
			Array(1002785,200,1),
			Array(1142060,300,1),
			Array(1142000,172,1),
			Array(1142004,300,1),
			Array(1132002,300,1),
			//------------------------------120级装备
			Array(1302081,100,1),Array(1312037,100,1),Array(1322060,100,1),Array(1332073,100,1),Array(1332074,100,1),Array(1372044,100,1),Array(1382057,100,1),Array(1402046,100,1),Array(1412033,100,1),Array(1422037,100,1),Array(1432047,100,1),Array(1442063,100,1),Array(1452057,100,1),Array(1462050,100,1),Array(1472068,100,1),Array(1482023,100,1),Array(1492023,100,1),Array(1342011,100,1),Array(1302086,100,1),Array(1312038,100,1),Array(1322061,100,1),Array(1332075,100,1),Array(1332076,100,1),Array(1372045,100,1),Array(1382059,100,1),Array(1402047,100,1),Array(1412034,100,1),Array(1422038,100,1),Array(1432049,100,1),Array(1442067,100,1),Array(1452059,100,1),Array(1462051,100,1),Array(1472071,100,1),Array(1482024,100,1),Array(1492025,100,1),Array(1342012,100,1),
			//------------------------------130级装备
			Array(1482080,50,1),Array(1402091,50,1),Array(1452107,50,1),Array(1492081,50,1),Array(1472118,50,1),Array(1382102,50,1),Array(1462094,50,1),Array(1332126,50,1),Array(1372080,50,1),Array(1302149,50,1),Array(1442113,50,1),Array(1432084,50,1),
			//------------------------------140级装备
			Array(1482084,20,1),Array(1402095,20,1),Array(1302152,20,1),Array(1442116,20,1),Array(1432086,20,1),Array(1452111,20,1),Array(1462099,20,1),Array(1492085,20,1),Array(1332130,20,1),Array(1382104,20,1),Array(1472122,20,1),
		
			//-----------------------------------------
			Array(2000004,600,20), //特殊药水
			Array(2000005,500,20), //超级药水
			Array(3010013,500,1), //悠长假期
			Array(3010014,400,1), //月亮弯
			Array(3010018,200,1), //椰子树沙滩椅
			Array(3010019,230,1), //寿司椅
			Array(3010021,320,1), //暖暖桌
			Array(3010025,420,1), //枫叶纪念凳
			Array(3010028,420,1), //海盗的俘虏
			Array(3010029,320,1), //蓝环凳
			Array(3010030,320,1), //黑环凳
			Array(3010031,320,1), //红环凳
			Array(3010032,220,1), //黄环凳
			Array(3010033,220,1), //绿环凳
			Array(3010037,520,1), //猪猪凳
			Array(3010044,120,1), //同一红伞下
			Array(3012001,120,1), //篝火
			Array(3012002,120,1), //浴桶
			Array(3012003,120,1), //爱心椅子
			
			
			Array(1302073,300,1), //新加坡国旗（初学者）
			Array(1302074,300,1), //马来西亚国旗（初学者）
			Array(1302075,300,1), //新加坡国旗（单手剑）
			Array(1302076,300,1), //马来西亚国旗（单手剑）
			Array(1312035,300,1), //新加坡国旗（单手斧）
			Array(1312036,300,1), //马来西亚国旗（单手斧）
			Array(1322057,300,1), //新加坡国旗（单手杖）
			Array(1322058,300,1), //马来西亚国旗（单手杖）
			Array(1332060,300,1), //新加坡国旗（短剑）
			Array(1332061,300,1), //马来西亚国旗（短剑）
			Array(1382043,300,1), //新加坡国旗（长杖）
			Array(1382044,300,1), //马来西亚国旗（长杖）
			Array(1402042,300,1), //新加坡国旗（双手剑）
			Array(1412030,300,1), //新加坡国旗（双手斧）
			Array(1412031,300,1), //马来西亚国旗（双手斧）
			Array(1422034,300,1), //新加坡国旗（双手杖）
			Array(1432043,300,1), //新加坡国旗（枪）
			Array(1432044,300,1), //马来西亚国旗（枪）
			Array(1442058,300,1), //新加坡国旗（矛）
			Array(1452049,300,1), //新加坡国旗（弓）
			Array(1452050,300,1), //马来西亚国旗（弓）
			Array(1462044,300,1), //新加坡国旗（弩）
			Array(1462045,300,1), //马来西亚国旗（弩）
			Array(1472059,300,1), //新加坡国旗（指节）
			Array(1472060,300,1), //马来西亚国旗（指节）
			
			Array(1402022,400,1), //霸王剑
			Array(1402023,300,1), //亚历山大之剑
			Array(1402024,300,1), //大刀
			Array(1402025,300,1), //虎剑
			Array(1402026,300,1), //无极剑
			Array(1402027,300,1), //霸王剑
			Array(1402028,300,1), //亚历山大之剑
			Array(1402029,300,1), //鬼刺狼牙棒
			Array(1402030,300,1), //大刀
			Array(1402031,300,1), //虎剑
			Array(1402032,300,1), //无极剑
			Array(1402033,300,1), //霸王剑
			Array(1402034,300,1), //亚历山大之剑
			Array(1402035,300,1), //斩天刀
			Array(1402036,300,1), //飞龙巨剑
			Array(1402037,50,1), //龙背刃
			Array(1402039,300,1), //枫叶枭首剑
			Array(1402040,300,1), //枫叶3年旗
			Array(1402041,300,1), //粉色花边游泳圈
			Array(1402044,300,1), //南瓜灯笼
			Array(1402046,100,1), //永恒玄冥剑
			Array(1402047,100,1), //重生玄冥剑
			Array(1402053,100,1), //圣诞六翼天使武器(双手剑)
			Array(1402013,300,1), //白日剑
			Array(1402014,10,1), //温度计
			
			Array(1382032,300,1), //魔灵之翼
			Array(1382033,300,1), //死灵法杖
			Array(1382034,300,1), //魔灵之魂
			Array(1382035,300,1), //冰肌玲珑杖
			Array(1382036,300,1), //黑精灵王杖
			Array(1382037,300,1), //偃月之杖
			Array(1382039,300,1), //枫叶丹心杖
			Array(1382040,300,1), //枫叶3年旗
			Array(1382041,300,1), //夜行權杖
			Array(1382042,300,1), //粉色花边游泳圈
			Array(1382045,300,1), //火灵珠长杖
			Array(1382046,300,1), //毒灵珠长杖
			Array(1382047,300,1), //冰灵珠长杖
			Array(1382048,300,1), //雷灵珠长杖
			
			Array(1372030,300,1), //天使之翼
			Array(1372031,300,1), //圣贤短杖
			Array(1372032,300,1), //佘太君龙杖
			Array(1372033,300,1), //圣贤短杖
			Array(1372034,300,1), //枫叶仙姬杖
			Array(1372035,300,1), //火灵珠短杖
			Array(1372036,300,1), //毒灵珠短杖
			Array(1372037,300,1), //冰灵珠短杖
			Array(1372038,300,1), //雷灵珠短杖
			Array(1372039,300,1), //爆炎之杖
			Array(1372040,300,1), //剧毒之杖
			Array(1372041,300,1), //寒冰之杖
			Array(1372042,300,1), //狂雷之杖
			Array(1372043,300,1), //初级魔法师的杖
			Array(1372044,100,1), //永恒蝶翼杖
			Array(1372045,100,1), //重生蝶翼杖
			Array(1372013,500,1), //竹杖
			
			Array(1322028,300,1), //钉头锤
			Array(1322029,300,1), //雷神钉
			Array(1322031,300,1), //葵花宝典
			Array(1322032,300,1), //铁头锤
			Array(1322033,300,1), //鬼怪棒
			Array(1322034,300,1), //铁棍
			Array(1322035,300,1), //大战斗锤
			Array(1322036,300,1), //旋风锤
			Array(1322037,300,1), //巨型锤
			Array(1322038,300,1), //暴风锤
			Array(1322051,200,1), //七夕
			Array(1322052,300,1), //狂龙地锤
			Array(1322054,300,1), //枫叶地震锤
			Array(1322055,300,1), //枫叶3年旗
			Array(1322056,300,1), //粉色花边游泳圈
			Array(1322060,100,1), //永恒惊破天
			Array(1322061,100,1), //重生惊破天
			
			Array(1082158,300,1), //红色条纹手套
			Array(1082159,300,1), //蓝色条纹手套
			Array(1082160,300,1), //绿色条纹手套
			Array(1082163,300,1), //红猎人手套
			Array(1082164,300,1), //蓝色元素手套
			Array(1082167,300,1), //黑色格丽纳手套
			Array(1082168,300,1), //青龙手套
			Array(1082175,300,1), //马绍尔手套(赤)
			Array(1082176,300,1), //马绍尔手套(青)
			Array(1082177,300,1), //马绍尔手套(紫
			Array(1082178,300,1), //马绍尔手套(桃)
			Array(1082179,300,1), //马绍尔手套(黄)
			Array(1082234,100,1), //永恒定边手套
			Array(1082235,100,1), //永恒逍遥手套
			Array(1082236,100,1), //永恒白云手套
			Array(1082237,100,1), //永恒探云手套
			Array(1082238,100,1), //永恒抚浪手套
			Array(1082239,100,1), //重生定边手套
			Array(1082240,100,1), //重生逍遥手套
			Array(1082241,100,1), //重生白云手套
			Array(1082242,100,1), //重生探云手套
			Array(1082243,100,1), //重生抚浪手套
			
			Array(1002695,100,1), //幽灵帽
			Array(1002699,100,1), //南瓜帽子
			Array(1002707,100,1), //假面绅士帽子
			Array(1002711,100,1), //白乖乖猫耳
			Array(1002712,100,1), //黑乖乖猫耳
			Array(1002723,100,1), //月饼帽
			Array(1002760,100,1), //地球帽
			Array(1002761,100,1), //枫叶面具
			Array(1002773,100,1), //金龙头盔
			Array(1002776,100,1), //永恒冠军盔
			Array(1002777,100,1), //永恒玄妙帽
			Array(1002778,100,1), //永恒霓翎帽
			Array(1002779,100,1), //永恒迷踪帽
			Array(1002780,100,1), //永恒海王星
			Array(1002790,100,1), //重生冠军盔
			Array(1002791,100,1), //重生玄妙帽
			Array(1002792,100,1), //重生霓翎帽
			Array(1002793,100,1), //重生迷踪帽
			Array(1002794,100,1), //重生海王星
			
			Array(1462037,300,1), //黑暗弩弓
			Array(1462039,300,1), //黄金飞龙弩
			Array(1462040,300,1), //枫叶击星弩
			Array(1462041,300,1), //枫叶3年旗
			Array(1462043,300,1), //粉色花边游泳圈
			Array(1462050,100,1), //永恒冥雷弩
			Array(1462051,100,1), //重生冥雷弩
			Array(1462056,100,1), //圣诞六翼天使武器(弩)
			Array(1472051,300,1), //寒木升龙拳
			Array(1472052,300,1), //碧水落龙拳
			Array(1472053,300,1), //逆龙咆哮拳		
			//卷
			Array(2040000,200,1), 
			Array(2040001,200,1), 
			Array(2040002,200,1), 
			Array(2040003,200,1), 
			Array(2040004,200,1), 
			Array(2040005,200,1), 
			Array(2040006,200,1), 
			Array(2040007,200,1), 
			Array(2040008,200,1), 
			Array(2040009,200,1), 
			Array(2040010,200,1), 
			Array(2040011,200,1), 
			Array(2040012,200,1), 
			Array(2040013,200,1), 
			Array(2040014,200,1), 
			Array(2040015,200,1), 
			Array(2040016,200,1), 
			Array(2040017,200,1), 
			Array(2040018,200,1), 
			Array(2040019,200,1), 
			Array(2040020,200,1), 
			Array(2040021,200,1), 
			Array(2040022,200,1), 
			Array(2040023,200,1), 
			Array(2040024,200,1), 
			Array(2040025,200,1), 
			Array(2040026,200,1), 
			Array(2040027,200,1), 
			Array(2040028,200,1), 
			Array(2040029,200,1), 
			Array(2040030,200,1), 
			Array(2040031,200,1), 
			Array(2040100,200,1), 
			Array(2040101,200,1), 
			Array(2040103,200,1), 
			Array(2040104,200,1), 
			Array(2040105,200,1), 
			Array(2040106,200,1), 
			Array(2040109,200,1), 
			Array(2040108,200,1), 
			Array(2040200,200,1), 
			Array(2040201,200,1), 
			Array(2040203,200,1), 
			Array(2040204,200,1), 
			Array(2040205,200,1), 
			Array(2040206,200,1), 
			Array(2040208,200,1), 
			Array(2040209,200,1), 
			Array(2040300,200,1), 
			Array(2040301,200,1), 
			Array(2040302,200,1), 
			Array(2040303,50,1),
			Array(2040304,200,1),
			Array(2040305,200,1),
			Array(2040306,200,1),
			Array(2040307,200,1),
			Array(2040308,200,1),
			Array(2040309,200,1),
			Array(2040310,200,1),
			Array(2040311,200,1),
			Array(2040312,200,1),
			Array(2040314,200,1),
			Array(2040315,200,1),
			Array(2040317,200,1),
			Array(2040318,200,1),
			Array(2040320,200,1),
			Array(2040321,200,1),
			Array(2040322,200,1),
			Array(2040324,200,1),
			Array(2040325,200,1),
			Array(2040326,200,1),
			Array(2040404,200,1),
			Array(2040403,200,1),
			Array(2040406,200,1),
			Array(2040407,200,1),
			Array(2040408,200,1),
			Array(2040410,200,1),
			Array(2040411,200,1),
			Array(2040412,200,1),
			Array(2040418,200,1),
			Array(2040419,200,1),
			Array(2040501,200,1),
			Array(2040502,200,1),
			Array(2040506,100,1),
			Array(2040507,200,1),
			Array(2040509,200,1),
			Array(2040513,200,1),
			Array(2040519,200,1),
			Array(2040533,200,1),
			Array(2040611,200,1),
			Array(2040709,200,1),
			Array(2040711,200,1),
			Array(2040714,200,1),
			Array(2040727,200,1),
			Array(2040801,200,1),
			Array(2040804,200,1),
			Array(2040806,100,1),
			Array(2040807,100,1),
			Array(2040809,200,1),
			Array(2040811,200,1),
			Array(2040818,200,1),
			Array(2040817,200,1),
			Array(2040821,200,1),
			Array(2040903,200,1),
			Array(2040907,200,1),
			Array(2040914,200,1),
			Array(2040920,200,1),
			Array(2041013,200,1),
			Array(2041024,200,1),
			Array(2041025,200,1),
			Array(2041200,200,1),
			Array(2041203,200,1),
			Array(2041205,200,1),
			Array(2041212,200,1),
			Array(2041301,200,1),
			Array(2041304,200,1),
			Array(2041307,200,1),
			Array(2041310,200,1),
			Array(2043001,200,1),
			Array(2043003,50,1),
			Array(2043103,100,1),
			Array(2043203,120,1),
			Array(2043303,50,1),
			Array(2043703,50,1),
			Array(2043803,50,1),
			Array(2044003,50,1),
			Array(2044019,100,1),
			Array(2044103,100,1),
			Array(2044203,100,1),
			Array(2044303,50,1),
			Array(2044403,80,1),
			Array(2044503,60,1),
			Array(2044603,60,1),
			Array(2044703,60,1),
			Array(2044815,60,1),
			Array(2044811,360,1),
			Array(2044908,60,1),
			Array(2040012,260,1),
			Array(2040013,160,1),
			Array(2040014,150,1),
			Array(2340000,50,1),
			
				
			Array(3012003,169,1) 
			

);

function init() {
	scheduleNew();
	instanceId = 1;
}

function monsterValue(eim, mobId) {
	return 1;
}

function setup() {
	exitMap = em.getChannelServer().getMapFactory().getMap(910000000); // <exit>
	var instanceName = "vip6mob" + instanceId;
	var eim = em.newInstance(instanceName);
	var mf = eim.getMapFactory();
	instanceId++;
	var eventTime = 10 * (1000 * 60);
	//em.schedule("timeOut", eventTime);
	em.schedule("monsterstart", 1000);
	//eim.schedule("zbstart", 1000);
	em.setProperty("entryPossible", "1");
	//eim.startEventTimer(eventTime);
	
	return eim;
}

function scheduleNew() {
	setupTask = em.schedule("zbstart", 1000);
}

function playerEntry(eim, player) {
	var map = eim.getMapInstance(mapId);
	player.changeMap(map, map.getPortal(0));
	player.message("[挑战公告] 此地图每秒扣除200点券.请迅速杀光所有怪物.");
}

function zbstart() {//每秒扣除元宝
	//em.schedule("zbstart", 1000);
	scheduleNew();
	var iter = em.getInstances().iterator();
	while (iter.hasNext()) {
		var eim = iter.next();
		var pIter = eim.getPlayers().iterator();
			while (pIter.hasNext()) {
				var chr=pIter.next();
				if(chr.getNX()>=200){
					chr.gainNX(-200);
					chr.dropMessage("你当前的点券余额:"+chr.getNX());
				}else{
					playerExit(eim, chr);
				}
			}
	}
}

function allMonstersDead(eim) {
    var iter = em.getInstances().iterator();
	while (iter.hasNext()) {
		var eim = iter.next();
		var mob = net.sf.odinms.server.life.MapleLifeFactory.getMonster(9600067);
        var overrideStats = new net.sf.odinms.server.life.MapleMonsterStats(); 
        var map = eim.getMapFactory().getMap(mapId); 
        var xRand = 330-Math.floor(Math.random() * 650);
        var hprand = Math.floor(Math.random() * 400000)+300000;
        overrideStats.setHp(hprand); 
        overrideStats.setExp(50000); 
        overrideStats.setMp(50000); 
        mob.setOverrideStats(overrideStats); 
        mob.setHp(hprand);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroudBelow(mob, new java.awt.Point(xRand, 162));
        var chance = Math.floor(Math.random()*610);
        var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();
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
			var quantity = finalitem[finalchance][2];
			if(ii.getInventoryType(itemId).getType() == 1){
				var toDrop = ii.randomizeStats(ii.getEquipById(itemId));
			}else{
				var toDrop = new net.sf.odinms.client.Item(itemId, 0, quantity);
			}
			var winner = eim.getPlayers().get(0);
			map.spawnItemDropdir(winner,winner,toDrop, winner.getPosition(), true, false);
		}
	}
}

function monsterstart() {
    var iter = em.getInstances().iterator();
	while (iter.hasNext()) {
		var eim = iter.next();
		var mob = net.sf.odinms.server.life.MapleLifeFactory.getMonster(9600067);
        var overrideStats = new net.sf.odinms.server.life.MapleMonsterStats(); 
        var map = eim.getMapFactory().getMap(mapId); 
        var xRand = 330-Math.floor(Math.random() * 650);
        var hprand = Math.floor(Math.random() * 100000)+200000;
        overrideStats.setHp(hprand); 
        overrideStats.setExp(50000); 
        overrideStats.setMp(50000); 
        mob.setOverrideStats(overrideStats); 
        mob.setHp(hprand);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroudBelow(mob, new java.awt.Point(xRand, 162));
	}
}

function playerDead(eim, player) {
}

function playerRevive(eim, player) {
	if (eim.isLeader(player)) { 
		var party = eim.getPlayers();
		for (var i = 0; i < party.size(); i++) {
			playerExit(eim, party.get(i));
		}
		eim.dispose();
	}
	else { //boot dead player
		// If only 2 players are left, uncompletable:
		var party = eim.getPlayers();
		if (party.size() <= minPlayers) {
			for (var i = 0; i < party.size(); i++) {
				playerExit(eim,party.get(i));
			}
			eim.dispose();
		}
		else
			playerExit(eim, player);
	}
}

function playerDisconnected(eim, player) {
	if (eim.isLeader(player)) { //check for party leader
		//boot whole party and end
		var party = eim.getPlayers();
		for (var i = 0; i < party.size(); i++) {
			if (party.get(i).equals(player)) {
				removePlayer(eim, player);
			}			
			else {
				playerExit(eim, party.get(i));
			}
		}
		eim.dispose();
	}
	else { //boot d/ced player
		// If only 2 players are left, uncompletable:
		var party = eim.getPlayers();
		if (party.size() < minPlayers) {
			for (var i = 0; i < party.size(); i++) {
				playerExit(eim,party.get(i));
			}
			eim.dispose();
		}
		else
			playerExit(eim, player);
	}
}

function leftParty(eim, player) {			
	// If only 2 players are left, uncompletable:
	var party = eim.getPlayers();
	if (party.size() <= minPlayers) {
		for (var i = 0; i < party.size(); i++) {
			playerExit(eim,party.get(i));
		}
		eim.dispose();
	}
	else
		playerExit(eim, player);
}

function disbandParty(eim) {
	//boot whole party and end
	var party = eim.getPlayers();
	for (var i = 0; i < party.size(); i++) {
		playerExit(eim, party.get(i));
	}
	eim.dispose();
}

function playerExit(eim, player) {
	eim.unregisterPlayer(player);
	em.setProperty("entryPossible", "0");
	player.changeMap(exitMap, exitMap.getPortal(0));
}

//for offline players
function removePlayer(eim, player) {
	eim.unregisterPlayer(player);
	player.getMap().removePlayer(player);
	player.setMap(exitMap);
}

function clearPQ(eim) {
	//KPQ does nothing special with winners
	var party = eim.getPlayers();
	for (var i = 0; i < party.size(); i++) {
		playerExit(eim, party.get(i));
	}
	eim.dispose();
}

function cancelSchedule() {
}

function timeOut() {
	var iter = em.getInstances().iterator();
	while (iter.hasNext()) {
		var eim = iter.next();
		if (eim.getPlayerCount() > 0) {
			var pIter = eim.getPlayers().iterator();
			while (pIter.hasNext()) {
				playerExit(eim, pIter.next());
			}
		}
		eim.dispose();
	}
}
