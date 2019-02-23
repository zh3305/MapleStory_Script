var maps = Array(953000000, 953010000, 953020000, 953030000, 953040000, 953050000);
var mapNames = Array("乌山山坡", "哥雷藏身处", "自动警备区域", "苔藓树丛", "通天林修炼场", "时间停止之间");
var minLevel = Array(70, 75, 85, 95, 100, 110);
var maxLevel = Array(80, 85, 95, 105, 110, 119);

function start() {
    var selStr = "你想进入哪个地方？\r\n#r（70级以上120级以下的玩家可以使用）\r\n#b";
    for (var i = 0; i < maps.length; i++) {
        selStr += "#L" + i + "#" + mapNames[i] + "（" + minLevel[i] + "~" + maxLevel[i] + "）#l\r\n";
    }
    cm.sendSimple(selStr);
}

function action(mode, type, selection) {
    if (mode == 1 && selection >= 0 && selection < maps.length) {
        if (cm.getParty() == null || !cm.isLeader()) {
            cm.sendOk("你想要进入的地区是组队游戏区域。可以通过#b队长#k入场。");
        } else {
            var party = cm.getParty().getMembers().iterator();
            var next = true;
            while (party.hasNext()) {
                var cPlayer = party.next();
                if (cPlayer.getLevel() < minLevel[selection] || cPlayer.getLevel() > maxLevel[selection] || cPlayer.getMapid() != cm.getMapId()) {
                    next = false;
                }
            }
            if (!next) {
                cm.sendOk("请确定你组员都在该地图,并且都在等级范围内.");
            } else {
                var em = cm.getEventManager("MonsterPark");
                if (em == null || em.getInstance("MonsterPark" + maps[selection]) != null) {
                    cm.sendOk("怪物公园里面已经有人了.");
                } else {
                    em.startInstance_Party("" + maps[selection], cm.getPlayer());
                }
            }
        }
    }
    cm.dispose();
}