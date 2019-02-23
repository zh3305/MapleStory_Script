var itemId = 4001522;
var maps = Array(954010000, 954020000, 954030000, 954040000, 954050000, 954060000);
var mapNames = Array("����֮��", "����֮��", "��֮��Ѩ", "��ȴ���", "��ʿ��Ҫ��", "ԩ��Ͽ��");
var minLevel = Array(160, 165, 170, 175, 180, 200);
var maxLevel = Array(169, 174, 179, 184, 200, 250);

var minPartySize=1;
var maxPartySize=6;

function start() {
    var selStr = "��������ĸ��ط���\r\n#r��160�����ϵ���ҿ���ʹ�ã�\r\n#b";
    for (var i = 0; i < maps.length; i++) {
        selStr += "#L" + i + "#" + mapNames[i] + "��" + minLevel[i] + "~" + maxLevel[i] + "��#l\r\n";
    }
    cm.sendSimple(selStr);
}

function action(mode, type, selection) {
    if (mode == 1 && selection >= 0 && selection < maps.length) {
        if (cm.getParty() == null || !cm.isLeader() || cm.haveItem(4001522)== 0) {
            cm.sendOk("����Ҫ����ĵ����������Ϸ���򡣿���ͨ��#b�ӳ�#k�볡��\r\n������û��#v4001522##z4001522#.");
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
                cm.sendOk("1.��ȷ������Ա���ڸõ�ͼ,���Ҷ��ڵȼ���Χ��.\r\n2.����2�������ϲ�����ս.\r\n3.��ȷ���������Ķ�Ա��ͬһƵ��!");
            } else {
                var em = cm.getEventManager("MonsterPark");
                if (em == null || em.getInstance("MonsterPark" + maps[selection]) != null) {
                    cm.sendOk("���﹫԰�����Ѿ�������.");
                } else {
				    cm.gainItem(4001522,-1);
                    em.startInstance_Party("" + maps[selection], cm.getPlayer());
                }
            }
        }
    }
    cm.dispose();
}