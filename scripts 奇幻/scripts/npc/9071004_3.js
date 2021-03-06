var itemId = 4001522;
var maps = Array(954010000, 954020000, 954030000, 954040000, 954050000, 954060000);
var mapNames = Array("死亡之林", "监视之塔", "龙之巢穴", "忘却神殿", "骑士团要塞", "冤魂峡谷");
var minLevel = Array(160, 165, 170, 175, 180, 200);
var maxLevel = Array(169, 174, 179, 184, 200, 250);

var minPartySize=1;
var maxPartySize=6;

function start() {
    var selStr = "你想进入哪个地方？\r\n#r（160级以上的玩家可以使用）\r\n#b";
    for (var i = 0; i < maps.length; i++) {
        selStr += "#L" + i + "#" + mapNames[i] + "（" + minLevel[i] + "~" + maxLevel[i] + "）#l\r\n";
    }
    cm.sendSimple(selStr);
}

function action(mode, type, selection) {
    if (mode == 1 && selection >= 0 && selection < maps.length) {
        if (cm.getParty() == null || !cm.isLeader() || cm.haveItem(4001522)== 0) {
            cm.sendOk("你想要进入的地区是组队游戏区域。可以通过#b队长#k入场。\r\n或者你没带#v4001522##z4001522#.");
        } else {
            var party = cm.getParty().getMembers().iterator();
            var next = true;
            while (party.hasNext()) {
                var cPlayer = party.next();
		var ccPlayer = cm.getMap().getCharacterById(cPlayer.getId()); 
                if (cPlayer.getLevel() < minLevel[selection] || cPlayer.getLevel() > maxLevel[selection] || cPlayer.getMapid() != cm.getMapId() || cPlayer.getChannel() != cm.getPlayer().getClient().getChannel() || cm.getParty().getMembers().size() < minPartySize || cm.getParty().getMembers().size() > maxPartySize || ccPlayer == null) {
                    next = false;
                }
            }
            if (!next) {
                cm.sendOk("1.请确定你组员都在该地图,并且都在等级范围内.\r\n2.必须2个人以上才能挑战.\r\n3.请确定您和您的队员在同一频道!");
            } else {
                var em = cm.getEventManager("MonsterPark");
                if (em == null || em.getInstance("MonsterPark" + maps[selection]) != null) {
                    cm.sendOk("怪物公园里面已经有人了.");
                } else {
				    cm.gainItem(4001522,-1);
                    em.startInstance_Party("" + maps[selection], cm.getPlayer());
                }
            }
        }
    }
    cm.dispose();
}