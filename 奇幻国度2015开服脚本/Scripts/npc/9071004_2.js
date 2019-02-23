/*
 * 怪物公园 最高级
 */

var itemId = 4001522;
var maps = Array(954010000, 954020000, 954030000, 954040000, 954050000, 954060000);
var mapNames = Array("死亡之林", "监视之塔", "龙之巢穴", "忘却神殿", "骑士团要塞", "冤魂峡谷");
var minLevel = Array(160, 165, 170, 175, 180, 200);
var maxLevel = Array(169, 174, 179, 184, 200, 250);

function start() {
    var selStr = "你想进入哪个地方？\r\n#r(160级以上的玩家可以使用)\r\n#b";
    for (var i = 0; i < maps.length; i++) {
        selStr += "#L" + i + "#" + mapNames[i] + "(Lv." + minLevel[i] + "~" + maxLevel[i] + ")#l\r\n";
    }
    cm.sendSimple(selStr);
}

function action(mode, type, selection) {
    if (mode == 1 && selection >= 0 && selection < maps.length) {
        if (cm.getParty() == null || !cm.isLeader()) {
            cm.sendOk("你想要进入的地区是组队游戏区域。可以通过#b队长#k入场。");
        } else {
            if (checkLevelsAndMap(minLevel[selection], maxLevel[selection], itemId) == 1) {
                cm.sendOk("请确定你组员都在该地图，并且都在等级范围内。\r\n只有#r" + minLevel[selection] + "级以上" + maxLevel[selection] + "级以下#k的角色可以入场。");
            } else if (checkLevelsAndMap(minLevel[selection], maxLevel[selection], itemId) == 2) {
                cm.sendOk("要想使用怪物公园内的设施，所有队员必须有入场券。");
            } else {
                var em = cm.getEventManager("MonsterPark");
                if (em == null || em.getInstance("MonsterPark" + maps[selection]) != null) {
                    cm.sendOk("怪物公园里面已经有人了.");
                } else {
                    cm.givePartyItems(itemId, -1);
                    em.startInstance_Party("" + maps[selection], cm.getPlayer());
                }
            }
        }
    }
    cm.dispose();
}

function checkLevelsAndMap(minLevel, maxLevel, itemId) {
    var party = cm.getParty().getMembers();
    var mapId = cm.getMapId();
    var valid = 0;
    var it = party.iterator();
    while (it.hasNext()) {
        var cPlayer = it.next();
        var ccPlayer = cm.getMap().getCharacterById(cPlayer.getId());
        if (ccPlayer == null) {
            valid = 1;
        } else {
            if (ccPlayer.getLevel() < minLevel || ccPlayer.getLevel() > maxLevel) {
                valid = 1;
            } else if (ccPlayer.getMapId() != mapId) {
                valid = 1;
            } else if (!ccPlayer.haveItem(itemId)) {
                valid = 2;
            }
        }
    }
    return valid;
}