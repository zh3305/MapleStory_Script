//Ů��֮Ѫ��
var status = 0;
var itemPosition=0;
//�������ĵĸ���
var expendNum = 3;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        im.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
		if (!im.haveItem(2432014, expendNum))
		{
			im.sendOk("����Ҫ"+expendNum+"��#bŮ��֮Ѫ��#k�ſ��Խ����񻰶�������");
			im.dispose();
			return;
		}
		var itemList = im.getInventory(1).list().iterator();
		var text = "��ѡ����Ҫ�����Ķ�����\r\n";
		var indexof = 0;
		while(itemList.hasNext()) {
			var item = itemList.next();
			var flag = false;
			switch(item.getItemId()) {
				case 1032205: // �񻰶��� - (������)
				case 1032206: // �񻰶�����ԭ��1�׶� - (������)
				case 1032207: // �񻰶�����ԭ��2�׶� - (������)
				case 1032208: // �񻰶�����ԭ��3�׶� - (������)
				case 1032209: // �񻰶�����ԭ��4�׶� - (������)
					flag = true;
					break;
				//1032219 // ����֮�񻰶��� - (������)
			}
			if (!flag)
				continue;
			if (indexof > 1 && indexof % 5 == 0) {
				text += "\r\n";
			}
			indexof++;
			text += "#L"+item.getPosition()+"##v"+item.getItemId()+"##l";
		}
		text+="\r\n\r\n#d�����ɹ���#r100%#k";
		if (indexof==0)
			text = "û�п��Խ����������񻰶���";
		im.sendSimple(text);
	} else if (status == 1) {
		itemPosition = selection;
		itemId = im.getInventory(1).getItem(itemPosition).getItemId();
		var upgradeItemId = (itemId == 1032209) ? parseInt(itemId)+10 : parseInt(itemId)+1;
		im.removeSlot(1, itemPosition, 1);
		im.gainItem(upgradeItemId, 1);
		if (upgradeItemId == 1032219)
			im.worldSpouseMessage(0x15, "[�񻰶���] : ��ϲ " + im.getChar().getName() + " �ɹ��� �񻰶�����ԭ��4�׶� ����Ϊ ����֮�񻰶�����");
		im.sendOk("��ϲ�㣬�õ���#v"+upgradeItemId+"#");
		im.gainItem(2432014, -expendNum);
		im.safeDispose();
	}
}