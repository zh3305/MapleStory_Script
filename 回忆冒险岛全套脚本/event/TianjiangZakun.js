var setupTask;
var mobid = 9600217;
var mapList = Array(500000000,
        702000000,
        700000000,
        600000000,
        540000000,
        800000000,
        701000000,
        702100000,
        550000000
        );
function init() {
    scheduleNew();
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 0);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
	
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 60 * 60;
    }
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function setup() {
    
	//return eim;
}

function start() {
	var cal = java.util.Calendar.getInstance();
	var hour = cal.get(java.util.Calendar.HOUR_OF_DAY);
	var min = cal.get(java.util.Calendar.MINUTE);
	var sec = cal.get(java.util.Calendar.SECOND);
	scheduleNew();
	 if (hour >= 16 && hour <= 23) {
		for(var j=0; j<mapList.length; j++) {
			var mapid = mapList[j];
			var map = em.getMapFactory().getMap(mapid);
			map.resetFully();
			map.respawn(false);
    		map.killAllMonsters(false);
		}
		//java.lang.System.out.println("======================");
		for (var i = 0; i<3; i++) {
			makeMonster(em);
		}
		em.broadcastServerMsg(5120116, "小扎昆随机出现在<旅游地图>上，到底在哪呢？快去找它吧！",true);
		em.broadcastServerMsg("[小扎昆来啦！] 每整点的时候，神秘小扎昆会随机出现在<万能传送 - 旅游地图>中的任意一个地图，每一条线有且仅有3只小扎昆，勇士们，快去找到它赢取丰厚奖励吧！");
	}
    
}

function makeMonster(em) {
	var mapid = mapList[Math.floor(Math.random() * mapList.length)];
	var map = em.getMapFactory().getMap(mapid);
    var mob = em.getMonster(mobid);
    var modified = em.newMonsterStats();
    modified.setOHp(2);
    modified.setOMp(mob.getMobMaxMp());
    mob.setOverrideStats(modified);
	var x = (Math.floor(Math.random()*200+80))*-1;
	var mapPortals = map.getPortals();
	var mpit = mapPortals.iterator();
	var mp = Math.floor(Math.random()*mapPortals.size());
	var i = 0;
	while(mpit.hasNext()) {
		var portal = mpit.next();
		if (mp == i)
			break;
		i++;
	}
	var point = portal.getPosition();
    try {
		map.spawnMonsterOnGroundBelow(mob, point);
		//java.lang.System.out.println("["+em.getChannel()+"]小扎昆刷新成功！地图："+mapid+":"+mp);
	} catch(e) {
		makeMonster(em);
	}
}