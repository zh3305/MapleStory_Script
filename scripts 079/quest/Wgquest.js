                                            
importPackage(net.sf.odinms.world); 
var exitMap; 
var instanceId; 
var minPlayers = 1; 
function init() { 
instanceId = 1; 
} 
function monsterValue(eim, mobId) { 
return 1; 
} 
function setup() { 
exitMap = em.getChannelServer().getMapFactory().getMap(qtmapId); // <exit> 
var instanceName = "wgquest" + instanceId;//任务名 
var eim = em.newInstance(instanceName); 
  
var mf = eim.getMapFactory(); 
  
instanceId++; 
  
var map = mf.getMap(mapId); 
map.shuffleReactors(); 
var firstPortal = eim.getMapInstance(mapId).getPortal("next00"); 
em.schedule("timeOut", 10 * 60000);//10分钟 
  
return eim; 
} 
function playerEntry(eim, player) { 
var map = eim.getMapInstance(mapId); 
player.changeMap(map, map.getPortal(0)); 
  
//TODO: hold time across map changes 
player.getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.getClock(600));//600为时间限制10分钟。 
player.getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.serverNotice(5, "[注意]你已进入任务地图，小心,你的任务就是打败蜈蚣,获得金袋子.")); 
startInstance(eim); 
} 
function playerDead(eim, player) { 
} 
function playerRevive(eim, player) { 
if (eim.isLeader(player)) { //check for party leader 
  //boot whole party and end 
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
function startInstance(eim) { 
if (eim.getPlayerCount() > 0) { 
  var map = eim.getMapFactory().getMap(mapId, false, false); 
   for (var x = 0; x < 1; x++) { 
    var mob = net.sf.odinms.server.life.MapleLifeFactory.getMonster(9600010); 
    var overrideStats = new net.sf.odinms.server.life.MapleMonsterStats(); 
    overrideStats.setHp(mob.getHp() * 1500); 
    overrideStats.setExp(mob.getExp()); 
    overrideStats.setMp(mob.getMaxMp()); 
    mob.setOverrideStats(overrideStats); 
    mob.setHp(mob.getHp() * 1500); 
    eim.registerMonster(mob); 
    map.spawnMonsterOnGroudBelow(mob, new java.awt.Point(-569, 33)); 
   } 
} 
} 
function allMonstersDead(eim) { 
        var map = eim.getMapFactory().getMap(mapId, false, false); 
        var winner = eim.getPlayers().get(0); 
        var price; 
        var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance(); 
        price = ii.getEquipById(5200002);//为物品ID 
        map.spawnItemDrop(winner, winner, price, winner.getPosition(), true, false); 
}
