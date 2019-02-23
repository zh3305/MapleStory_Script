function init() {
    scheduleNew();
}

function scheduleNew() {
    em.setProperty("docked", "true");
    em.setProperty("entry", "true");
    em.setProperty("haveBalrog", "false");
    em.schedule("stopentry", 600000); //The time to close the gate [1 min]
    em.schedule("takeoff", 300000); // The time to begin the ride [2 min]

    em.getMapFactory().getMap(200090000).killAllMonsters(false);
    em.getMapFactory().getMap(200090010).killAllMonsters(false);
}

function stopentry() {
    em.setProperty("entry", "false");
    em.getMapFactory().getMap(200090011).resetReactors();
    em.getMapFactory().getMap(200090001).resetReactors();
}

function takeoff() {
    em.warpAllPlayer(200000112, 200090000);
    em.warpAllPlayer(104020110, 200090010);//出错的地方。。不知原因  25行
    em.broadcastShip(200000111, 3);//出错的地方。。不知原因  26行
    em.broadcastShip(104020110, 3);
    em.setProperty("docked", "false");
    em.schedule("invasion", 600000); // Time to spawn Balrog [1 min]
    em.schedule("arrived", 600000); // The time that require move to destination [7 min]
}

function arrived() {
    em.warpAllPlayer(200090010, 200000100);
    em.warpAllPlayer(200090011, 200000100);
    em.warpAllPlayer(200090000, 104020110);
    em.warpAllPlayer(200090001, 104020110);
    em.broadcastShip(200000111, 1);
    em.broadcastShip(104020110, 1);
    em.getMapFactory().getMap(200090010).killAllMonsters(false);
    em.getMapFactory().getMap(200090000).killAllMonsters(false);
    em.setProperty("haveBalrog", "false");
    scheduleNew();
}

function invasion() {
    //if (Math.floor(Math.random() * 10) < 10) {
        var map1 = em.getMapFactory().getMap(200090000);
        var pos1 = new java.awt.Point( - 538, 143);
        map1.spawnMonsterOnGroundBelow(em.getMonster(8150000), pos1);
        map1.spawnMonsterOnGroundBelow(em.getMonster(8150000), pos1);

        var map2 = em.getMapFactory().getMap(200090010);
        var pos2 = new java.awt.Point(339, 148);
        map2.spawnMonsterOnGroundBelow(em.getMonster(8150000), pos2);
        map2.spawnMonsterOnGroundBelow(em.getMonster(8150000), pos2);

        em.setProperty("haveBalrog", "true");
        em.broadcastShip(200090000, 1034);
        em.broadcastShip(200090010, 1034);
   // }
}

function cancelSchedule() {}