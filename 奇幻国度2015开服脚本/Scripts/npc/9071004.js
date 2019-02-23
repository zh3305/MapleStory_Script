/*
 * 怪物公园 初级
 */

var itemId = 4001514;
var maps = Array(952000000, 952020000, 952030000, 953000000, 953010000);
var mapNames = Array("黑暗寺院", "魔女雪原", "寂静之海", "乌山山坡", "哥雷藏身处");
var minLevel = Array(60, 70, 75, 80, 85);
var maxLevel = Array(69, 79, 84, 89, 94);

function start() {
    var selStr = "你想进入哪个地方？\r\n#r(60级以上95级以下的玩家可以使用)\r\n#b";
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