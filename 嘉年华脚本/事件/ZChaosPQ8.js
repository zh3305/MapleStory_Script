/* 
 * 大运动会 枫之校园高手 [困难模式]
 */
var Mapid;
function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(level, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("ZChaosPQ8");
    var map = eim.setInstanceMap(744000008);
    map.resetFully();

    var map1 = eim.setInstanceMap(744000014);
    map1.resetFully();
    var mob = em.getMonster(9410183);
    mob.getStats().setChange(true);
    mob.changeLevel(200);
    mob.getChangedStats().setOHp(200000000);
    mob.setHp(200000000);
    eim.registerMonster(mob);
    map1.spawnMonsterOnGroundBelow(mob, new java.awt.Point(50, 240));


    var map2 = eim.setInstanceMap(744000013);
    map2.resetFully();
    var mob = em.getMonster(9410182);
    mob.getStats().setChange(true);
    mob.changeLevel(200);
    mob.getChangedStats().setOHp(200000000);
    mob.setHp(200000000);
    eim.registerMonster(mob);
    map2.spawnMonsterOnGroundBelow(mob, new java.awt.Point(50, 240));

    var map3 = eim.setInstanceMap(744000015);
    map3.resetFully();
    var mob = em.getMonster(9410184);
    mob.getStats().setChange(true);
    mob.changeLevel(200);
    mob.getChangedStats().setOHp(200000000);
    mob.setHp(200000000);
    eim.registerMonster(mob);
    map3.spawnMonsterOnGroundBelow(mob, new java.awt.Point(50, 240));

    var map4 = eim.setInstanceMap(744000003);
    map4.resetFully();
    var mob = em.getMonster(9410178);
    mob.getStats().setChange(true);
    mob.changeLevel(200);
    mob.getChangedStats().setOHp(200000000);
    mob.setHp(200000000);
    eim.registerMonster(mob);
    map4.spawnMonsterOnGroundBelow(mob, new java.awt.Point(50, 240));

    var map5 = eim.setInstanceMap(744000002);
    map5.resetFully();
    var mob = em.getMonster(9410179);
    mob.getStats().setChange(true);
    mob.changeLevel(200);
    mob.getChangedStats().setOHp(200000000);
    mob.setHp(200000000);
    eim.registerMonster(mob);
    map5.spawnMonsterOnGroundBelow(mob, new java.awt.Point(70, 240));

    var map6 = eim.setInstanceMap(744000006);
    map6.resetFully();
    for(var i = 9410147; i <= 9410151; i++){
    var mob = em.getMonster(i);
    mob.getStats().setChange(true);
    mob.changeLevel(200);
    mob.getChangedStats().setOHp(200000000);
    mob.setHp(200000000);
    eim.registerMonster(mob);
    map6.spawnMonsterOnGroundBelow(mob, new java.awt.Point(50, 240));
    }

    var map7 = eim.setInstanceMap(744000007);
    map7.resetFully();
    var mob = em.getMonster(9410171);
    mob.getStats().setChange(true);
    mob.changeLevel(200);
    mob.getChangedStats().setOHp(200000000);
    mob.setHp(200000000);
    eim.registerMonster(mob);
    map7.spawnMonsterOnGroundBelow(mob, new java.awt.Point(70, 240));

    var map8 = eim.setInstanceMap(744000010);
    map8.resetFully();
    var mob = em.getMonster(9410173);
    var mob1 = em.getMonster(9410174);
    var mob2 = em.getMonster(9410175);
    var mob3 = em.getMonster(9410176);
    mob.changeLevel(200);
    mob1.changeLevel(200);
    mob2.changeLevel(200);
    mob3.changeLevel(200);
    mob.setHp(5000000);
    mob1.setHp(200000000);
    mob2.setHp(200000000);
    mob3.setHp(200000000);
    eim.registerMonster(mob);
    eim.registerMonster(mob1);
    eim.registerMonster(mob2);
    eim.registerMonster(mob3);
    map8.spawnMonsterOnGroundBelow(mob, new java.awt.Point(80, 240));
    map8.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(150, 240));
    map8.spawnMonsterOnGroundBelow(mob2, new java.awt.Point(220, 240));
    map8.spawnMonsterOnGroundBelow(mob3, new java.awt.Point(290, 240));
    for(var i = 0; i < 10 ; i++){
    var mob = em.getMonster(9410190);
    mob.changeLevel(200);
    mob.getChangedStats().setOHp(10000000);
    mob.setHp(10000000);
    eim.registerMonster(mob);
    map8.spawnMonsterOnGroundBelow(mob, new java.awt.Point(50, 240));
    }

    var map9 = eim.setInstanceMap(744000009);
    map9.resetFully();
    for(var i = 9410187; i <= 9410189; i++){
    var mob = em.getMonster(i);
    mob.changeLevel(200);
    mob.getChangedStats().setOHp(10000000);
    mob.setHp(10000000);
    eim.registerMonster(mob);
    map9.spawnMonsterOnGroundBelow(mob, new java.awt.Point(50, 240));
    }

    var map10 = eim.setInstanceMap(744000011);
    map10.resetFully();
    var mob = em.getMonster(9410180);
    mob.getStats().setChange(true);
    mob.changeLevel(200);
    mob.getChangedStats().setOHp(200000000);
    mob.setHp(200000000);
    eim.registerMonster(mob);
    map10.spawnMonsterOnGroundBelow(mob, new java.awt.Point(50, 240));

    var map11 = eim.setInstanceMap(744000012);
    map11.resetFully();
    var mob = em.getMonster(9410181);
    mob.getStats().setChange(true);
    mob.changeLevel(200);
    mob.getChangedStats().setOHp(200000000);
    mob.setHp(200000000);
    eim.registerMonster(mob);
    map11.spawnMonsterOnGroundBelow(mob, new java.awt.Point(50, 240));

    var map12 = eim.setInstanceMap(744000001);
    map12.resetFully();
    eim.getMapFactoryMap(744000001).killAllMonsters(false);
    for(var i = 9410165; i <= 9410168; i++){
    var mob = em.getMonster(i);
    mob.getStats().setChange(true);
    mob.changeLevel(200);
    mob.getChangedStats().setOHp(200000000);
    mob.setHp(200000000);
    eim.registerMonster(mob);
    map12.spawnMonsterOnGroundBelow(mob, new java.awt.Point(50, 240));
    }
    map12.spawnNpc(9330192, new java.awt.Point(-160, 240));

    var map13 = eim.setInstanceMap(744000004);
    map13.resetFully();
    var mob = em.getMonster(9410177);
    mob.getStats().setChange(true);
    mob.changeLevel(200);
    mob.getChangedStats().setOHp(200000000);
    mob.setHp(200000000);
    eim.registerMonster(mob);
    map13.spawnMonsterOnGroundBelow(mob, new java.awt.Point(50, 240));

    eim.startEventTimer(1000 * 60 * 5); //5 min
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
    map.startMapEffect("考试如果没有拿到优秀奖章的话，就无法离开考场。" ,5120067);
}

function playerRevive(eim, player) {
    return false;
}

function changedMap(eim, player, mapid , mobId) {
    if (mapid < 744000001 || mapid > 744000015) {
        eim.unregisterPlayer(player);
        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
    }
    if(mapid == 744000014){
		Mapid = mapid;
    eim.schedule("end", 1000 * 0);
    }
    if(mapid == 744000013){
		Mapid = mapid;
    eim.schedule("end1", 1000 * 0);
    }
    if(mapid == 744000015){
		Mapid = mapid;
    eim.schedule("end2", 1000 * 0);
    }
    if(mapid == 744000003){
		Mapid = mapid;
    eim.schedule("end3", 1000 * 0);
    }
    if(mapid == 744000002){
		Mapid = mapid;
    eim.schedule("end4", 1000 * 0);
    }
    if(mapid == 744000006){
		Mapid = mapid;
    eim.schedule("end5", 1000 * 0);
    }
    if(mapid == 744000007){
		Mapid = mapid;
    eim.schedule("end6", 1000 * 0);
    }
    if(mapid == 744000004){
		Mapid = mapid;
    eim.schedule("end7", 1000 * 0);
    }
    if(mapid == 744000010){
		Mapid = mapid;
    eim.schedule("end8", 1000 * 0);
    }
    if(mapid == 744000009){
		Mapid = mapid;
    eim.schedule("end9", 1000 * 0);
    }
    if(mapid == 744000011){
		Mapid = mapid;
    eim.schedule("end10", 1000 * 0);
    }
    if(mapid == 744000012){
		Mapid = mapid;
    eim.schedule("end11", 1000 * 0);
    }
    if(mapid == 744000001){
		Mapid = mapid;
    eim.schedule("end12", 1000 * 0);
    }
}

function playerDisconnected(eim, player) {
    eim.disposeIfPlayerBelow(100, 744000000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
    return 0;
}

function monsterValue(eim, mobId) {
	return 1;
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}
function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 744000000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    scheduledTimeout(eim);
}

function allMonstersDead(eim) {
	var map = eim.getMapInstance(0);
    if (eim.getMapInstance(0).getAllMonstersThreadsafe().size() == 0) {
    eim.broadcastPlayerMsg(6, "嘿~，不要再打了~回到教室吧！！！领取你应得的奖励吧。");
    }
}


function end(eim){
	var map = eim.getMapFactoryMap(Mapid);
    map.startMapEffect("进入柔道部…一点都不用害怕。就是入社考试。" ,5120075);
    eim.startEventTimer(1000 * 60 * 5); //5 min
}

function end1(eim){
	var map = eim.getMapFactoryMap(Mapid);
    map.startMapEffect("我是来募集新生的…今天要把你抓走！呼呼呼~" ,5120072);
    eim.startEventTimer(1000 * 60 * 5); //5 min
}

function end2(eim){
	var map = eim.getMapFactoryMap(Mapid);
    map.startMapEffect("我想到了不得了的乐曲… …我再弹给你听~呵呵呵" ,5120074);
    eim.startEventTimer(1000 * 60 * 5); //5 min
}

function end3(eim){
	var map = eim.getMapFactoryMap(Mapid);
    map.startMapEffect("很感谢你的心意… …但是可以训练多少… …" ,5120069);
    eim.startEventTimer(1000 * 60 * 5); //5 min
}

function end4(eim){
	var map = eim.getMapFactoryMap(Mapid);
    map.startMapEffect(5120073, "想在仓库拿东西，先通过我吧… …" ,5120073);
    eim.startEventTimer(1000 * 60 * 5); //5 min
}

function end5(eim){
	var map = eim.getMapFactoryMap(Mapid);
    map.startMapEffect("请帮帮我!僵尸竟然这么多…" ,5120076);
    eim.startEventTimer(1000 * 60 * 5); //5 min
}

function end6(eim){
	var map = eim.getMapFactoryMap(Mapid);
    map.startMapEffect( "身为导师绝对布原谅打架这件事！！！只能用力量来阻止你！！！" ,5120067);
    eim.startEventTimer(1000 * 60 * 5); //5 min
}

function end7(eim){
	var map = eim.getMapFactoryMap(Mapid);
    map.startMapEffect("刚刚那个像是一直在等谁的小孩就是你吗？我的妈啊~" ,5120067);
    eim.startEventTimer(1000 * 60 * 5); //5 min
}

function end8(eim){
	var map = eim.getMapFactoryMap(Mapid);
    map.startMapEffect( "这次大家要一起合作。4大天王中任一位被击倒的话，就算失败啰！" ,5120064);
    eim.startEventTimer(1000 * 60 * 5); //5 min
}

function end9(eim){
	var map = eim.getMapFactoryMap(Mapid);
    map.startMapEffect( "快…快…快…我的人参萝卜汤啊~抓住他们！！！" ,5120067);
    eim.startEventTimer(1000 * 60 * 5); //5 min
}

function end10(eim){
	var map = eim.getMapFactoryMap(Mapid);
    map.startMapEffect( "我可是搞科学的…你行吗…同学？" ,5120071);
    eim.startEventTimer(1000 * 60 * 5); //5 min
}

function end11(eim){
	var map = eim.getMapFactoryMap(Mapid);
    map.startMapEffect( "嘘~嘘~嘘^… …给我安静点… …这里静止喧哗！！！" ,5120070);
    eim.startEventTimer(1000 * 60 * 5); //5 min
}

function end12(eim){
	var map = eim.getMapFactoryMap(Mapid);
    map.startMapEffect( "虽然很讨厌你们...但是这样对决是无法避免的。" ,5120063);
    eim.startEventTimer(1000 * 60 * 5); //5 min
}

function leftParty(eim, player) {}
function disbandParty(eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}