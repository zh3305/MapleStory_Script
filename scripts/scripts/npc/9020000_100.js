var a = 0;
var text;
var selects; //��¼��ҵ�ѡ��
var buynum = 0;
var itemlist = Array(
	Array(2432392, 5),
	Array(4310088, 5),
	Array(4310030, 15),
	Array(2049135, 30),
	Array(2049300, 50),
	Array(2614007, 50), //ͻ��ʮ�� 30%
	Array(2049136, 100),
	Array(5062010, 100), //�ռ�ħ��
	Array(2450081, 100),
	Array(2048300, 100), //����Ǳ�ܸ���ӡ��
	Array(2048301, 150), //���
	Array(2048306, 350),  //����Ǳ�ܹž�
	Array(2431739, 200),  //����ȯ1000
	Array(2046913, 500), // �������嵥���������������� 100% // Ϊ�����������ӹ��������ԡ�
	Array(2046914, 500), // �������嵥������ħ������ 100% // Ϊ������������ħ�����������ԡ�
	Array(2046173, 500), // ��������˫���������������� 100% // Ϊ˫���������ӹ��������ԡ�
	Array(2046577, 500), // ������������������� 100% // Ϊ���������������ԡ�
	Array(2046578, 500), // ������������������� 100% // Ϊ���������������ԡ�
	Array(2046579, 500), // ��������������ݾ��� 100% // Ϊ���������������ԡ�
	Array(2046580, 500), // ������������������� 100% // Ϊ���������������ԡ�
	Array(2046763, 500), // ����������Ʒ�������� 100% // Ϊ��Ʒ�����������ԡ�
	Array(2046764, 500), // ����������Ʒ�������� 100% // Ϊ��Ʒ�����������ԡ�
	Array(2046765, 500), // ����������Ʒ���ݾ��� 100% // Ϊ��Ʒ�����������ԡ�
	Array(2046766, 500), // ����������Ʒ�������� 100% // Ϊ��Ʒ�����������ԡ�
		Array(1113070, 500), // ��
		Array(1032216, 500), // ������
			Array(1152155, 800), // ������
				Array(1113055, 800), // ��
					Array(1032200, 800), // ����
						Array(1152154, 1000), // ����
	Array(2613000, 1500), // �ǻ����������������� - Ϊ���������������������������ԡ�
	Array(2613001, 1500), // - �ǻ�������ħ�������� - Ϊ����������������ħ�������ԡ�
	Array(2612010, 1500), // - �ǻ�˫���������������� - Ϊ˫�������������������������ԡ�
	Array(2431993, 2000, "���յ���Ʒ����"),
	Array(2431988, 4000, "150����������#d[��ʱ]#b")
	
);

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
		cm.sendOk("�ðɣ����㿼��������������ҡ�");
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
			text = "#h0#���㵱ǰ�Ļ���Ϊ��#r"+cm.getPlayerPoints()+"#k��\r\n��ѡ������Ҫ�һ�����Ʒ��\r\n\r\n#b";
			for (var i=0; i<itemlist.length; i++) {
				var extraName = "";
				if (itemlist[i][2]!=null) {
					extraName="("+itemlist[i][2]+")";
				}
				text += "#L" + i + "##i" + itemlist[i][0] + ":##t" + itemlist[i][0] + "#"+extraName+" - #r"+itemlist[i][1]+"#b ����  \r\n";
				if (i != 0 && (i+1) % 5 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
			/*
        } else if (a == 1) {
			selects = selection;
            cm.sendGetNumber("������������������Ҫ���������\r\n\r\n#r1����Ҫ" + itemlist[selects][1] + "��#bѩ����#k", 0, 0, 999999);*/
        } else if (a == 1) {
            selects = selection;
			buynum = 1;
            cm.sendYesNo("���빺��" + buynum + "��#r#i" + itemlist[selects][0] + "##k��\r\n�㽫ʹ�õ�" + (buynum * itemlist[selects][1]) + "���֡�");
        } else if (a == 2) {
			var itemid = itemlist[selects][0];
			var itemType = Math.floor(itemid/1000000);
			
			var costPoints = buynum * itemlist[selects][1];
            if (cm.getPlayerPoints()>=costPoints) {
				if (cm.getSpace(itemType)<1) {
					cm.sendOk("�һ�ʧ�ܣ������ռ䲻�㣡");
					cm.dispose();
					return;
				}
                cm.gainPlayerPoints(-costPoints);
				cm.gainItem(itemlist[selects][0], buynum);
				cm.sendOk("����ɹ��ˣ�");
                cm.dispose();
            } else {
                cm.sendOk("�Բ�����û���㹻�Ļ��֡�");
                cm.dispose();
            }
        }
    }//mode
}//f