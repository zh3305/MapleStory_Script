var mob1 = 8500001;//闹钟
var mob2 = 8840000;//狮子王
var mob3 = 8800100;//进阶扎昆
var mob4 = 8810118;//进阶黑龙
var mob5 = 9300304;//阿卡伊勒
var mob6 = 8820003;//贤者所罗门
var mob7 = 8820004;//贤者莱克斯
var mob8 = 8820005;//火鹰雕像
var mob9 = 8820006;//冰鹰雕像
var mob10 = 8820002;//女神雕像
var mob11 = 8820008;//时间的宠儿－品克缤 神的黄昏 终极挑战！
var mob12 = 8850000;//米哈尔
var mob13 = 8850001;//奥兹
var mob14 = 8850002;//伊莉娜
var mob15 = 8850003;//伊卡尔特
var mob16 = 8850004;//胡克
var mob17 = 8850010;//神兽
var mob18 = 8850012;//希纳斯
var mob19 = 8820008;//时间的宠儿－品克缤 神的黄昏 终极挑战！


var mobs;
var mobs1;
var mobs2;
var mobs3;
var mobs4;
var mobs5;
var mobs6;

var css = 2;


function init() {
    em.setProperty("leader", "true");
    em.setProperty("state", "0");
}

function setup(eim, leaderid) {
    em.setProperty("leader", "true");
    var eim = em.newInstance("AllBoss");
    var map = eim.setInstanceMap(703200400);//副本执行地图

   // eim.setProperty("AllBoss", "0");

    map.resetFully();

    var mob1s = em.getMonster(mob5);//第一个怪物 8500001  8850000
    eim.registerMonster(mob1s);
    map.spawnMonsterOnGroundBelow(mob1s, new java.awt.Point(10, - 42));

    em.setProperty("state", "1");

    eim.startEventTimer(3600000); // 1 hr  时间
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapFactory().getMap(703200400);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    return false;
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 270050000);//下线离开后？
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function changedMap(eim, player, mapid) {
    if (mapid != 703200400) {
        eim.unregisterPlayer(player);

        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
    }
}

function playerDisconnected(eim, player) {
    return 0;
}

function monsterValue(eim, mobId) {
    var map = eim.getMapFactory().getMap(703200400);


    if (mobId == mob1 && css == 0) {
        css++;
        mobs = em.getMonster(mob2);
        eim.registerMonster(mobs);
        map.spawnMonsterOnGroundBelow(mobs, new java.awt.Point(10, - 42));
      

    } else if (mobId == mob2 && css == 1) {
        css++;
        mobs = em.getMonster(mob5);
        eim.registerMonster(mobs);
        map.spawnMonsterOnGroundBelow(mobs, new java.awt.Point(5, - 46));

    } else if (mobId == mob5 && css == 2) {
        css++;
        mobs = em.getMonster(mob6);
        eim.registerMonster(mobs);
        map.spawnMonsterOnGroundBelow(mobs, new java.awt.Point(5, - 46));

    } else if (mobId == mob6 && css == 3) {
        css++;
        mobs = em.getMonster(mob7);
        eim.registerMonster(mobs);
        map.spawnMonsterOnGroundBelow(mobs, new java.awt.Point(5, - 46));

    } else if (mobId == mob7 && css == 4) {
        css++;
        mobs = em.getMonster(mob8);
        eim.registerMonster(mobs);
        map.spawnMonsterOnGroundBelow(mobs, new java.awt.Point(5, - 46));

    } else if (mobId == mob8 && css == 5) {
        css++;
        mobs = em.getMonster(mob9);
        eim.registerMonster(mobs);
        map.spawnMonsterOnGroundBelow(mobs, new java.awt.Point(5, - 46));

    } else if (mobId == mob9 && css == 6) {
        css++;
        mobs = em.getMonster(mob10);
        eim.registerMonster(mobs);
        map.spawnMonsterOnGroundBelow(mobs, new java.awt.Point(5, - 46));

    } else if (mobId == mob10 && css == 7) {
        css++;
        mobs = em.getMonster(mob12);
        eim.registerMonster(mobs);
        map.spawnMonsterOnGroundBelow(mobs, new java.awt.Point(5, - 46));

    } else if (mobId == mob12 && css == 8) {
        css++;
        mobs = em.getMonster(mob13);
        eim.registerMonster(mobs);
        map.spawnMonsterOnGroundBelow(mobs, new java.awt.Point(10, - 42));

    } else if (mobId == mob13 && css == 9) {
        css++;
        mobs = em.getMonster(mob14);
        eim.registerMonster(mobs);
        map.spawnMonsterOnGroundBelow(mobs, new java.awt.Point(5, - 450));

    } else if (mobId == mob14 && css == 10) {
        css++;
        mobs = em.getMonster(mob15);
        eim.registerMonster(mobs);
        map.spawnMonsterOnGroundBelow(mobs, new java.awt.Point(10, - 42));

    } else if (mobId == mob15 && css == 11) {
        css++;
        mobs = em.getMonster(mob16);
        eim.registerMonster(mobs);
        map.spawnMonsterOnGroundBelow(mobs, new java.awt.Point(10, - 42));

    } else if (mobId == mob16 && css == 12) {
        css++;
        mobs = em.getMonster(mob17);
        eim.registerMonster(mobs);
        map.spawnMonsterOnGroundBelow(mobs, new java.awt.Point(10, - 42));

    } else if (mobId == mob17 && css == 13) {
        css++;
        mobs = em.getMonster(mob18);
        eim.registerMonster(mobs);
        map.spawnMonsterOnGroundBelow(mobs, new java.awt.Point(5, - 46));

  //  } else if (mobId == mob18) {
        mobs = em.getMonster(mob11);
        eim.registerMonster(mobs);
        map.spawnMonsterOnGroundBelow(mobs, new java.awt.Point(10, - 42));

        eim.Maplewingx("<时间女神>伦娜：终极挑战最后一关开启！！", 5121009);
        eim.broadcastPlayerMsg(-11, "<时间女神>伦娜：冒险家们请一定要坚持住！！");


  //  } else {

//    eim.Maplewingx("<时间女神>伦娜：勇敢的冒险家们！欢呼吧！时间因你们而永恒！", 5121009);


    }






/*
    //希纳斯骑士团长
    if (mobId == 8850000 || mobId == 8850001 || mobId == 8850002 || mobId == 8850003) {
        var mob55 = em.getMonster(mobId + 1);
        eim.registerMonster(mob55);
        map.spawnMonsterOnGroundBelow(mob55, new java.awt.Point( - 363, 100));
    } else if (mobId == 8850004) {
        var mob55 = em.getMonster(8850012);//希纳斯
        eim.registerMonster(mob55);
        map.spawnMonsterOnGroundBelow(mob55, new java.awt.Point( - 363, 100));
    }
*/

    return 1;
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function end(eim) {
    if (eim.disposeIfPlayerBelow(100, 270050000)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {

     if (eim.getProperty("AllBoss").equals("0")) {
        eim.setProperty("AllBoss", "1");
        var mobd = em.getMonster(mob19);
        eim.registerMonster(mobd);
        eim.Maplewingx("<时间女神>伦娜：终极挑战最后一关开启！！", 5121009);
        eim.broadcastPlayerMsg(-11, "<时间女神>伦娜：冒险家们请一定要坚持住！！");
        eim.getMapInstance(0).spawnMonsterOnGroundBelow(mobd, new java.awt.Point(5, - 46));
    } else {

        eim.Maplewingx("<时间女神>伦娜：勇敢的冒险家们！欢呼吧！时间因你们而永恒！", 5121009);

    }

}

function leftParty(eim, player) {}
function disbandParty(eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}