/*
 脚本功能：英语村相关
 */

var letters0 = Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
var answers0 = Array("APPLE", "BEAR", "CHEESE", "DOUGHNUT", "EARTH", "FLY", "GOLD", "HALLOWEEN", "ICE", "JEWELRY", "KING", "LOVE", "MOUNTAIN", "NOTE", "ORANGE", "POLICE", "QUIZ", "ROSE", "SNAKE", "TEA", "UFO", "VIP", "WOOD", "XMAS", "YOUNG", "ZZZ");

var letters1 = Array("苹果", "肉", "鸡蛋", "橙子", "柠檬", "蜂蜜", "青苹果", "沙拉", "炸鸡", "蛋糕", "披萨", "汉堡", "大?狗", "鱿鱼干", "香肠", "橙汁", "葡萄汁", "酥干酪", "驯鹿奶", "清晨之露", "黄昏之露", "奶酪蛋糕");
var answers1 = Array("APPLE", "MEAT", "EGG", "ORANGE", "LEMON", "HONEY", "GREENAPPLE", "SALAD", "FRIEDCHICKEN", "CAKE", "PIZZA", "HAMBURGER", "HOTDOG", "DRIEDSQUID", "FATSAUSAGE", "ORANGEJUICE", "GRAPEJUICE", "MELTINGCHEESE", "REINDEERMILK", "SUNRISEDEW", "SUNSETDEW", "CHEESECAKE");

var letters2 = Array("草莓的英语单词是什么？", "恢复MP值100的药水是什么颜色？", "汽油需要加什么才跑得动？？ ", "2月14日是什么日子呢？", "生病了要去哪里？", "什么把地球正好分成一半？", "我们游戏的活动管理员是谁？（提示：BiXX）", "新手成为一个魔法师，需要的最低等级是多少？", "冒险岛的英语名字是什么？", "挑战扎昆最低级是多少级呢?");
var answers2 = Array("STRAWBERRY", "BLUE", "GAS", "VALENTINE", "HOSPITAL","EQUATOR","BIXIN","EIGHT","MAPLESTORY","FIFTY");


function init() {
}

function monsterValue(eim, mobId) {
    return 1;
}

function setup(mapid) {

    var eim = em.newInstance("English" + mapid);
    eim.setInstanceMap(702090101 + (parseInt(mapid) * 100)).resetFully();
    eim.setInstanceMap(702090102 + (parseInt(mapid) * 100)).resetFully();
    eim.setInstanceMap(702090103 + (parseInt(mapid) * 100)).resetFully();
    
	eim.setProperty("mode", mapid);
	if (eim.getProperty("mode").equals("0")) {
		var ee = java.lang.Math.floor(java.lang.Math.random() * letters0.length);
		eim.setProperty("question", letters0[ee]);
		eim.setProperty("answer", answers0[ee]);
	} else if (eim.getProperty("mode").equals("1")) {
		var ee = java.lang.Math.floor(java.lang.Math.random() * letters1.length);
		eim.setProperty("question", letters1[ee]);
		eim.setProperty("answer", answers1[ee]);
	} else if (eim.getProperty("mode").equals("2")) {
		var ee = java.lang.Math.floor(java.lang.Math.random() * letters2.length);
		eim.setProperty("question", letters2[ee]);
		eim.setProperty("answer", answers2[ee]);
	}
    eim.startEventTimer(300000); //5 mins lol

    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
	if (eim.getProperty("mode").equals("0")) {
		player.getMap().startMapEffect("请问这个字母 [" + eim.getProperty("question") + "] 像什么呢？",5120008);
	} else if (eim.getProperty("mode").equals("1")) {
		player.getMap().startMapEffect("请收集下面问题的字母：  " + eim.getProperty("question") + "。",5120034);
	} else if (eim.getProperty("mode").equals("2")) {
		player.getMap().startMapEffect(eim.getProperty("question"),5120034);
	}
}

function playerDead(eim, player) {
}

function changedMap(eim, player, mapid) {
    switch (mapid) {
	case 702090101: // 1st Stage
	case 702090102: // 2nd Stage
	case 702090103: // 3rd Stage
	case 702090201:
	case 702090202:
	case 702090203:
	case 702090301:
	case 702090302:
		case 702090303:
	    return; // Everything is fine
    }
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(2, 702090400)) {
    }
}

function playerRevive(eim, player) {
}

function playerDisconnected(eim, player) {
    return -2;
}

function leftParty(eim, player) {			
    // If only 2 players are left, uncompletable
    if (!eim.disposeIfPlayerBelow(2, 702090400)) {
	playerExit(eim, player);
    }
}

function disbandParty(eim) {
    // Boot whole party and end
    eim.disposeIfPlayerBelow(100, 702090400);
}


function scheduledTimeout(eim) {
    clearPQ(eim);
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);

    var exit = eim.getMapFactory().getMap(702090400);
    player.changeMap(exit, exit.getPortal(0));
    if (eim.disposeIfPlayerBelow(2, 702090400)) {
    }
}

function clearPQ(eim) {
    // KPQ does nothing special with winners
    eim.disposeIfPlayerBelow(100, 702090400);
}

function allMonstersDead(eim) {
}

function cancelSchedule() {
}