var maps = Array(954000000, 954010000, 954020000, 954030000, 954040000, 954050000);
var mapNames = Array("变成废墟的城市", "死亡之林", "监视之塔", "龙之巢穴", "忘却神殿", "骑士团要塞");
var minLevel = Array(120, 125, 130, 140, 150, 165);
var maxLevel = Array(130, 135, 140, 150, 165, 200);
var minPartySize=2;
var maxPartySize=6;

function start() {
    var selStr = "你想进入哪个地方？\r\n#r（120级以上的玩家可以使用）\r\n#b";
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
                    em.startInstance_Party("" + maps[selection], cm.getPlayer());
                }
            }
        }
    }
    cm.dispose();
}