var status = 0;
var icon1 = "#fEffect/CharacterEff/1042176/0/0#";
var icon3 = "#fEffect/CharacterEff/1082565/4/0#";
var icon2 = "#fEffect/CharacterEff/1082565/2/0#";
var gardenData = null;
var gardenFlowerPot = null;
var typed=-1;
var operationId = 0;
var buyFlower = null;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
	if (typed==5 && mode == 0) {
		status = 2;
		typed=0;
	}
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
		/* 花园信息 */
		gardenData=getGardenInfo();
		var text = icon1+" #d您的花园等级：#r["+gardenData['level']+"]#d 级\r\n";
		text+=icon1+" 您的活力：#r["+cm.getPlayerEnergy()+"]#d 点\r\n";
		text+=icon1+" 花园经验值：#r["+gardenData['exp']+"/"+calcLevelUp(gardenData['level'])+"]#k\r\n\r\n";
		text+="#b#L0#"+icon2+" 照顾花朵#l";
		text+="#b#L1#"+icon2+" 扩建花园#l";
		text+="#b#L2#"+icon2+" 购买种子#l";
		cm.sendSimple(text);
	} else if (status == 1) {
		if (selection == -1 && mode == 0)
			selection = typed;
		if (selection == -1 && mode != 0)
			selection = 0;
		switch(selection) {
			case 0:
				typed=0;
				gardenFlowerPot = getFlowerPot();
				var currentTimestamp = java.lang.System.currentTimeMillis();
				var text="\t\t\t\t\t#d#e★ 我的花园 ★#n#k\r\n";
				for(var key in gardenFlowerPot) {
					var seedid = gardenFlowerPot[key]['seedid'];
					var flowerpotid = gardenFlowerPot[key]['id'];
					var expiration = gardenFlowerPot[key]['expiration'];
					if (seedid!=0) {
						var tips = "";
						var seconds = (expiration-currentTimestamp)/1000;
						if (seconds<=0)
							tips = "#g作物已经成熟#k";
						else
						{
							var DHM = toDHM(seconds);
							tips = "#b剩余 "+DHM[0]+"天"+DHM[1]+"小时"+DHM[2]+"分";
						}
						text+="#L"+flowerpotid+"#"+icon1+" #r[#t"+seedid+"#]#k "+tips+"#l\r\n";
					} else {
						text+="#L"+flowerpotid+"#"+icon1+" #b[这是一个空的花盆，点击栽种]\r\n";
					}
				}
				cm.sendOkS(text, 2);
			break;
			case 1:
				typed=1;
				cm.sendYesNo("扩建花园需要#r2000W#k，扩建之后将会多出一个花盆，是否扩建？");
			break;
			case 2:
				typed=2;
				var text="#d#e以下是您的等级可以购买的种子：#n#k\r\n";
				var flowers = getFlowers();
				for(var key in flowers) {
					var tips = flowers[key][1]+"#n#b级";
					if (flowers[key][1]>gardenData['level'])
						tips = "(需要"+flowers[key][1]+"级)#n#b";
					text+="#b#L"+key+"##v"+flowers[key][0]+"# #t"+flowers[key][0]+"#种子 #r#e"+tips+" (产量："+flowers[key][4]+"~"+flowers[key][5]+")#l\r\n";
				}
				cm.sendOkS(text, 2);
			break;
		}
	} else if (status == 2) {
		if (typed==0) {
			var currentTimestamp = java.lang.System.currentTimeMillis();
			var flowerpotid = selection;
			operationId = flowerpotid;
			var seedid = gardenFlowerPot[flowerpotid]['seedid'];
			var expiration = gardenFlowerPot[flowerpotid]['expiration'];
			var text="\t\t\t\t\t#d#e★ 我的花园 ★#n#k\r\n";
			if (seedid!=0 && seedid!=-1) {
				var seconds = (expiration-currentTimestamp)/1000;
				var flag=false;
				var tips = '';
				if (seconds<=0) {
					flag=true;
					var tips="#g作物已经成熟，可以采摘#k";
				} else {
					var DHM = toDHM(seconds);
					tips = "#b剩余 "+DHM[0]+"天"+DHM[1]+"小时"+DHM[2]+"分#k";
				}
				text+="#r#t"+seedid+"##k\r\n";
				text+=tips+"\r\n";
				if (!flag)
					text+="#b#L0#"+icon2+"浇水#l\t#L1#"+icon2+"施肥#l\t#L2#"+icon2+"挖除#l";
				else	
					text+="#b#L4#"+icon2+"采摘果实#l\t#L2#"+icon2+"挖除#l";
				cm.sendOkS(text,2);
			} else {
				text+="#r这是一个空的花盆，您可以进行栽种。\r\n";
				text+="#b#L5#"+icon2+"栽种#l";
				cm.sendOkS(text, 2);
			}
		} else if (typed==1) {
			status-=2;
			if (cm.getMeso() >= 20000000) {
				if (addFlowerPot()) {
					cm.gainMeso(-20000000);
					cm.sendOkS("扩建成功！\r\n#L0##b"+icon2+"点我返回#l",2);
				} else {
					cm.sendOkS("扩建失败！您的等级不足或花盆数量已达到最大值，无法继续扩建，请先提升花园等级。\r\n#L0##b"+icon2+"点我返回#l",2);
				}
			} else {
				cm.sendOkS("您没有那么多游戏币！\r\n#L0##b"+icon2+"点我返回#l",2);
			}
		} else if (typed==2) {
			var flower = getFlowers();
			flower=flower[selection];
			buyFlower=flower;
			var ripeningTime = flower[3]*3600;
			var DHM = toDHM(ripeningTime);
			var text="\t\t\t\t\t#d#e★ 种子信息 ★#n#k\r\n";
			text+=icon3+"#r品种：#b#v"+flower[0]+"##t"+flower[0]+"#种子\r\n";
			text+=icon3+"#r产量：#b"+flower[4]+"~"+flower[5]+"\r\n";
			text+=icon3+"#r单价：#b"+flower[2]+" 游戏币\r\n";
			text+=icon3+"#r成熟时间：#b"+DHM[0]+"天"+DHM[1]+"小时"+DHM[2]+"分#k\r\n\r\n";
			text+=icon3+"#d#e请输入你要购买的数量：#n#k\r\n";
			cm.sendGetNumber(text, 0, 1, 100);
			//cm.sendYesNo("您是否要花费#r"+flower[2]+"#b游戏币#k购买#b#t"+flower[0]+"#种子#k");
		}
	} else if (status == 3) {
		if (typed==2) {
			status-=3;
			var quantity = selection;
			var cost = buyFlower[2]*quantity;
			if (gardenData['level']<buyFlower[1]) {
				cm.sendOkS("您的花园等级不足，无法购买该种子。\r\n#L0##b"+icon2+"点我返回#l", 2);
			} else 
			if (cm.getMeso() >= cost) {
				cm.gainMeso(-cost);
				gainSeed(buyFlower[0], quantity);
				cm.sendOkS("购买成功！\r\n#L0##b"+icon2+"点我返回#l", 2);
			} else {
				cm.sendOkS("游戏币不足，购买失败！\r\n#L0##b"+icon2+"点我返回#l", 2);
			}
		} else {
			switch(selection) {
				//浇水操作
				case 0:
					status-=3;
					if (cm.getBossLog("花园浇水"+operationId)>0) {
						cm.sendOkS("啊，好像浇过水了，不能拔苗助长！\r\n#L0##b"+icon2+"点我返回#l", 2);
					} else {
						if (cm.getPlayerEnergy()>10) {
							cm.setBossLog("花园浇水"+operationId);
							cm.gainPlayerEnergy(-10);
							Operations(operationId, 0);
							cm.getPlayer().dropMessage(6,"消耗了10点活力，缩短了1小时成长时间。");
							cm.sendOkS("好开心，花儿又长大了一点！\r\n#L0##b"+icon2+"点我返回#l",2);
						} else {
							cm.sendOkS("糟糕了，没有活力了！\r\n#L0##b"+icon2+"点我返回#l",2);
						}
					}
				break;
				//施肥操作
				case 1:
					status-=3;
					if (cm.getBossLog("花园施肥"+operationId)>0) {
						cm.sendOkS("啊，好像施过肥了，不能拔苗助长！\r\n#L0##b"+icon2+"点我返回#l", 2);
					} else {
						if (cm.getPlayerEnergy()>20) {
							cm.setBossLog("花园施肥"+operationId);
							cm.gainPlayerEnergy(-20);
							Operations(operationId, 1);
							cm.getPlayer().dropMessage(6,"消耗了20点活力，缩短了2小时成长时间。");
							cm.sendOkS("好开心，花儿又长大了一点！\r\n#L0##b"+icon2+"点我返回#l",2);
						} else {
							cm.sendOkS("糟糕了，没有活力了！\r\n#L0##b"+icon2+"点我返回#l",2);
						}
					}
				break;
				//挖除操作
				case 2:
					status-=3;
					clearFlowerPot(operationId);
					cm.sendOkS("噢，挖好了，让我来种上新的种子吧！\r\n#L0##b"+icon2+"点我返回#l",2);
				break;
				//采摘果实
				case 4:
					status-=3;
					var currentTimestamp = java.lang.System.currentTimeMillis();
					var seedid = gardenFlowerPot[operationId]['seedid'];
					if (cm.getSpace(Math.floor(seedid/1000000))<2) {
						cm.sendOk("你的包裹空间好像不够呢，整理一下再来采摘吧！");
						cm.dispose();
						return;
					}
					var expiration = gardenFlowerPot[operationId]['expiration'];
					var seconds = (expiration-currentTimestamp)/1000;
					var flower = getFlower(seedid);
					var catchNum = Math.floor(Math.random()*(flower[5]-flower[4]+1)+flower[4]);
					var flowerLevel = flower[1];
					var cash = flowerLevel*20;
					if (seconds<=0) {
						cm.gainItem(seedid, catchNum);
						//清空花盆
						clearFlowerPot(operationId);
						//得到经验
						var getExp = gainPlantExp(seedid);
						var levelStr="";
						if (getExp==-1) {
							levelStr="花园等级提升了#r1#k级！";
						} else {
							levelStr = "得到了#r"+getExp+"#k点花园经验值";
						}
						cm.gainNX(cash);
						cm.sendOkS("好开心，终于到了收获果实的季节！\r\n得到了#b"+catchNum+"#k个#v"+seedid+"##b#t"+seedid+"##k\r\n得到了#r"+cash+"#k点卷\r\n"+levelStr+"\r\n#L0##b"+icon2+"点我返回#l", 2);
					} else {
						cm.sendOk("骚年，你真的要强行采摘吗？");
						cm.dispose();
					}
				break;
				case 5:
					var seeds = getSeeds();
					var text="#d#e选择想要种下的种子：#n#k\r\n"
					if (seeds!='' && seeds != null && seeds != Array()) {
						for(var key in seeds) {
							text+="#b#L"+seeds[key][0]+"#[#v"+seeds[key][0]+"##t"+seeds[key][0]+"#种子] 数量：["+seeds[key][1]+"]个#l\r\n";
						}
						typed=5;
						cm.sendOkS(text, 2);
					} else {
						status-=3;
						text="啊哦，好像没有种子了。得去买一些！\r\n#L0##b"+icon2+"点我返回#l";
						cm.sendOkS(text, 2);
					}
				break;
			}
		}
	} else if (status == 4) {
		status-=4;
		plantFlower(selection, operationId);
		text="种好咯！快快长大吧！\r\n#L0##b"+icon2+"点我返回#l";
		cm.sendOkS(text, 2);
	}
}
/*
*	自定义函数群
*/
/*
	得到种子
*/
function gainSeed(seedid, quantity) {
	if (quantity == null)
		quantity = 1;
	var charid = cm.getPlayer().getId();
	var sql = "SELECT * FROM memory_seedpackage WHERE charid = ? and seedid = ?";
	var conn = cm.getConnection();
	var pstmt = conn.prepareStatement(sql);
	pstmt.setInt(1, charid);
	pstmt.setInt(2, seedid);
	var data = pstmt.executeQuery();
	if (data.next()) {
		data.close();
		pstmt.close();
		sql = "UPDATE memory_seedpackage SET quantity=quantity+? WHERE charid=? AND seedid=?";
		pstmt = conn.prepareStatement(sql);
		pstmt.setInt(1, quantity);
		pstmt.setInt(2, charid);
		pstmt.setInt(3, seedid);
		pstmt.executeUpdate();
		pstmt.close(); 
	} else {
		sql = "INSERT INTO memory_seedpackage(charid, seedid, quantity) VALUES(?,?,?)";
		pstmt = conn.prepareStatement(sql);
		pstmt.setInt(1, charid);
		pstmt.setInt(2, seedid);
		pstmt.setInt(3, quantity);
		pstmt.executeUpdate();
		pstmt.close();
	}
	return true;
}
/*
	获取背包种子
*/

function getSeeds() {
	var charid = cm.getPlayer().getId();
	var sql = "SELECT * FROM memory_seedpackage WHERE charid = ? and quantity>0 order by seedid desc";
	var conn = cm.getConnection();
	var pstmt = conn.prepareStatement(sql);
	pstmt.setInt(1, charid);
	var data = pstmt.executeQuery();
	var seeds = Array();
	while(data.next()) {
		seeds.push(Array(data.getString('seedid'),data.getString('quantity')));
	}
	return seeds;
}
/*
	是否允许扩建
*/
function isAllowUpgrade() {
	var charid = cm.getPlayer().getId();
	var sql = "SELECT COUNT(id) as pn FROM memory_flowerpot WHERE charid = ?";
	var conn = cm.getConnection();
	var pstmt = conn.prepareStatement(sql);
	pstmt.setInt(1, charid);
	var rs=pstmt.executeQuery();
	var flag=true;
	if (rs.next())
	{
		var pn = rs.getInt('pn');
		if (pn<gardenData['level'] && pn<10) {
			flag=true;
		} else {
			flag=false;
		}
	}
	rs.close();
	pstmt.close();
	return flag;
}
/* 新增加花盆 */
function addFlowerPot() {
	var charid = cm.getPlayer().getId();
	var conn = cm.getConnection();
	var pstmt = null
	if (isAllowUpgrade()) {
		var sql = "INSERT INTO memory_flowerpot(charid, seedid, expiration) VALUES(?,NULL,-1)";
		pstmt = conn.prepareStatement(sql);
		pstmt.setInt(1, charid);
		pstmt.executeUpdate();
		pstmt.close();
		return true;
	} else {
		return false;
	}
}
/*
	种花
*/
function plantFlower(flowerid, flowerpotid) {
	var charid = cm.getPlayer().getId();
	var flower = getFlower(flowerid);
	var currentTimestamp = java.lang.System.currentTimeMillis();
	var expiration = flower[3]*3600*1000+currentTimestamp;
	var sql = "UPDATE memory_flowerpot p, memory_seedpackage s SET p.expiration=?, p.seedid=?, s.quantity=s.quantity-1 WHERE s.seedid=? and p.charid=s.charid and p.id=? and p.charid=?";
	var conn = cm.getConnection();
	var pstmt = conn.prepareStatement(sql);
	pstmt.setLong(1, expiration);
	pstmt.setInt(2, flowerid);
	pstmt.setInt(3, flowerid);
	pstmt.setInt(4, flowerpotid);
	pstmt.setInt(5, charid);
	pstmt.executeUpdate();
	pstmt.close();
}

/*
	获取花信息
*/
function getFlowers() {
	return Array(
	//物品ID，等级，价格，成熟时间(小时),产量最小值，产量最大值
		//恢复类
		Array(2001532, 1, 150000, 10, 50,60), // 苹果 - 红色苹果。\n恢复HP约30。
		Array(2001534, 1, 150000, 10, 50,60), // 橙子 - 酸酸回忆的橙子。\n恢复MP约50。
		Array(2001535, 1, 150000, 10, 50,60), // 柠檬 - 非常酸的水果。\n恢复MP约150。
		Array(2432392, 1, 1000000, 15, 3, 5), //经验
		Array(4310088, 1, 1000000, 15, 15, 20), // - RED币 - 刻有“RED”字样的红色钱币。#c可在RED特别商店中用于购买物品。#
		Array(5050000, 2, 5000000, 18, 5, 8), //洗点
		Array(4310030, 2, 2000000, 18, 10, 15), // - 运动会币 - 可以在村庄中的NPC彪鲁那里交换运动会装备、专用卷轴等的运动会币。
		//喇叭类
		Array(5121003, 3, 3000000, 22, 1, 2), // 参鸡汤 - 15分钟内地图上所有角色的物理攻击力+30，魔法攻击力+30。请输入想要发送的信息。
		Array(5121004, 3, 3000000, 22, 1, 2), // 松糕 - 15分钟内地图上所有角色的物理攻击力+30，魔法攻击力+30。请输入想要发送的信息。
		Array(5121005, 3, 3000000, 22, 1, 2), // 韩果 - 15分钟内地图上所有角色的物理攻击力+30，魔法攻击力+30。请输入想要发送的信息。
		Array(2432353, 4, 4000000, 24, 6, 10), //开心！转盘箱子
		Array(5110000, 5, 3000000, 26, 1, 1), // 红心巧克力
		Array(2450020, 6, 6000000, 30, 1, 3), //
		Array(2614004, 6, 3000000, 33, 5,10), //突破十万之石头
		//装备制作材料
		Array(4033356, 7, 3000000, 138, 1,1),
		Array(4000082, 7, 3000000, 58, 2, 5),
		Array(2431739, 8, 5000000, 38, 1, 2),
		Array(2450081, 9, 5000000, 52, 1, 2),
		//魔方碎片
		Array(2430112, 11, 1000000,52, 5, 10),
		Array(2430481, 12, 1500000, 52, 5, 10),
		Array(2430915, 15, 1800000, 52, 5, 10),
		Array(2431893, 20, 3000000, 52, 5, 10)
	);
}

function getFlowerLevel(flowerid) {
	var flowers = getFlowers();
	for(var key in flowers) {
		if (flowers[key][0] == flowerid)
			return flowers[key][1];
	}
}

function getFlower(flowerid) {
	var flowers = getFlowers();
	for(var key in flowers) {
		if (flowers[key][0] == flowerid)
			return flowers[key];
	}
}

/*
	升级经验计算
*/
function calcLevelUp(level) {
	var base = 10+level*level;
	return base;
}
/*
	得到经验
*/
function gainPlantExp(flowerid) {
	var expNum=getFlowerLevel(flowerid)*10;
	var conn = cm.getConnection();
	var charid = cm.getPlayer().getId();
	var pstmt = null;
	if ((gardenData['exp']*1+expNum)>=calcLevelUp(gardenData['level'])) {
		var lastExp = (gardenData['exp']*1+expNum)-calcLevelUp(gardenData['level']);
		var sql = "UPDATE memory_garden SET exp=?, level=level+1 WHERE charid=?";
		pstmt = conn.prepareStatement(sql);
		pstmt.setLong(1, lastExp);
		pstmt.setInt(2, charid);
		pstmt.executeUpdate();
		pstmt.close();
		return -1;
	} else {
		var sql = "UPDATE memory_garden SET exp=exp+? WHERE charid=?";
		pstmt = conn.prepareStatement(sql);
		pstmt.setLong(1, expNum);
		pstmt.setInt(2, charid);
		pstmt.executeUpdate();
		pstmt.close();
		return expNum;
	}
	return 0;
}

/*
	挖除操作
*/
function clearFlowerPot(flowerpotid) {
	var charid = cm.getPlayer().getId();
	var sql = "UPDATE memory_flowerpot SET expiration=-1, seedid=NULL WHERE id=? and charid=?";
	cm.resetBossLog("花园施肥"+flowerpotid);
	cm.resetBossLog("花园浇水"+flowerpotid);
	var conn = cm.getConnection();
	var pstmt = conn.prepareStatement(sql);
	pstmt.setInt(1, flowerpotid);
	pstmt.setInt(2, charid);
	pstmt.executeUpdate();
	pstmt.close();
}
/*
	浇水施肥操作
*/
function Operations(flowerpotid, type) {
	var growUp = (type+1)*60*60*1000;
	var charid = cm.getPlayer().getId();
	var sql = "UPDATE memory_flowerpot SET expiration=expiration-? WHERE id=? and charid=?";
	var conn = cm.getConnection();
	var pstmt = conn.prepareStatement(sql);
	pstmt.setLong(1, growUp);
	pstmt.setInt(2, flowerpotid);
	pstmt.setInt(3, charid);
	pstmt.executeUpdate();
	pstmt.close();
}

/*
	得到花园数据
*/
function getGardenInfo() {
	var charid = cm.getPlayer().getId();
	var sql = "SELECT * FROM memory_garden WHERE charid = ? limit 1";
	var conn = cm.getConnection();
	var pstmt = conn.prepareStatement(sql);
	pstmt.setInt(1, charid);
	var data = pstmt.executeQuery();
	if (data.next()) {
		var info = Array();
		info['level']=data.getInt('level');
		info['exp']=data.getInt('exp');
		data.close();
		pstmt.close();
		return info;
	} else {
		sql = "INSERT INTO memory_garden(charid, level, exp) VALUES(?,1,0)";
		pstmt = conn.prepareStatement(sql);
		pstmt.setInt(1, charid);
		pstmt.executeUpdate();
		data.close();
		pstmt.close();
		return getGardenInfo();
	}
}

/*
	得到花盆数据
*/
function getFlowerPot() {
	var charid = cm.getPlayer().getId();
	var sql = "SELECT * FROM memory_flowerpot WHERE charid = ?";
	var conn = cm.getConnection();
	var pstmt = conn.prepareStatement(sql);
	pstmt.setInt(1, charid);
	var data = pstmt.executeQuery();
	var result = Array();
	while (data.next()) {
		var info = Array();
		info['id']=data.getInt('id');
		info['seedid']=data.getInt('seedid');
		info['expiration']=data.getLong('expiration');
		result[info['id']]=info;
	}
	data.close();
	pstmt.close();
	if (result=="") {
		sql = "INSERT INTO memory_flowerpot(charid, seedid, expiration) VALUES(?,NULL,-1)";
		pstmt = conn.prepareStatement(sql);
		pstmt.setInt(1, charid);
		pstmt.executeUpdate();
		pstmt.close();
		return getFlowerPot();
	}
	return result;
}

/*
	时间转换
*/
function toDHM(seconds) {
	var days = Math.floor(seconds/86400);
	var hour = Math.floor(seconds%86400/3600);
	var minute = Math.floor(seconds%86400%3600/60);
	return Array(days,hour,minute);
}