/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：双倍活动
 *  @Author Kent 
 */

/*
 * 玩具城船来 1
 * 离开  520
 * 魔法密林 船来 3
 * 船离开 
 */

﻿function init() {
    scheduleNew();
}

function scheduleNew() {
    em.setProperty("docked", "true");
    em.setProperty("entry", "true");
    em.setProperty("haveBalrog", "false");
    em.schedule("stopentry", 180000); // [3 min]
    em.schedule("takeoff", 240000); //  [4 min]
    em.getMapFactoryMap(200090000).killAllMonsters(false);
    em.getMapFactoryMap(200090010).killAllMonsters(false);
}

function stopentry() {
    em.setProperty("entry", "false");
    em.getMapFactoryMap(200090011).resetReactors();
    em.getMapFactoryMap(200090001).resetReactors();
}

function takeoff() {
    em.warpAllPlayer(200000112, 200090000);//天空 - 金银岛
    em.warpAllPlayer(104020111, 200090010);//金银岛 -天空
    em.broadcastShip(200000111, 3);
    em.broadcastShip(104020110, 3);
    em.setProperty("docked", "false");
    em.schedule("invasion", 60000); // 召唤蝙蝠魔 [1 min]
    em.schedule("arrived", 300000); // 飞行时间 [5 min]
}

function arrived() {
    em.warpAllPlayer(200090010, 200000100);
    em.warpAllPlayer(200090011, 200000100);
    em.warpAllPlayer(200090000, 104020110);
    em.warpAllPlayer(200090001, 104020110);
    em.broadcastShip(200000111, 1);
    em.broadcastShip(104020110, 1);
    em.getMapFactoryMap(200090010).killAllMonsters(false);
    em.getMapFactoryMap(200090000).killAllMonsters(false);
    em.setProperty("haveBalrog", "false");
    scheduleNew();
}

function invasion() {
    if (Math.floor(Math.random() * 10) < 10) {
        var map1 = em.getMapFactoryMap(200090000);
        var pos1 = new java.awt.Point(-538, 143);
        var mob11 = em.getMonster(8150000);
        mob11.getStats().setChange(true);
        mob11.changeLevelmod(170, 100);
        var mob12 = em.getMonster(8150000);
        mob12.getStats().setChange(true);
        mob12.changeLevelmod(170, 100);
        map1.spawnMonsterOnGroundBelow(mob11, pos1);
        map1.spawnMonsterOnGroundBelow(mob12, pos1);

        var map2 = em.getMapFactoryMap(200090010);
        var pos2 = new java.awt.Point(339, 148);

        var mob21 = em.getMonster(8150000);
        mob21.getStats().setChange(true);
        mob21.changeLevelmod(170, 100);
        var mob22 = em.getMonster(8150000);
        mob22.getStats().setChange(true);
        mob22.changeLevelmod(170, 100);
        map2.spawnMonsterOnGroundBelow(mob21, pos2);
        map2.spawnMonsterOnGroundBelow(mob22, pos2);

        em.setProperty("haveBalrog", "true");
        em.sendBatShipEffect(200090000, 1034);
        em.sendBatShipEffect(200090010, 1034);
    }
}

function cancelSchedule() {
}