var a = 0;
var text;
var selects; //��¼��ҵ�ѡ��
var buynum = 0;
var itemlist = Array(
Array(4001017, 800), //����
Array(4031179, 400), //DƬ
Array(4032246, 400), //����
Array(2460004, 1), //�Ŵ�
Array(3010001, 40), //��ɫľ��
Array(4006000, 10), //ħ��ʯ
Array(4006001, 10), //�ٻ�ʯ
Array(2120000, 1), //����ʳƷ
Array(2050004, 2), //��������ҩ
Array(2000005, 6), //����ҩˮ
Array(2000004, 2), //����ҩˮ
Array(2030004, 1), //���ִ�سǾ�
Array(2030000, 1) //�سǾ�
);

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
			text = "�װ��� #r#h ##k ���ã�����ͼƬ������Ʒ��\r\n#bע�⣺���Լ������ո�\r\n";
			for (var i=0; i<itemlist.length; i++) {
				text += "#L" + i + "##i" + itemlist[i] + ":# ";
				if (i != 0 && (i+1) % 5 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
        } else if (a == 1) {
			selects = selection;
            cm.sendGetNumber("������������������Ҫ���������\r\n\r\n#r1����Ҫ" + (itemlist[selects][1]*500) + "��#b��Ϸ��#k", 1, 0, 999999);
        } else if (a == 2) {
            buynum = selection;
            cm.sendNext("���빺��" + buynum + "��#r#i" + itemlist[selects][0] + "##k��\r\n�㽫ʹ�õ�" + (buynum * itemlist[selects][1]*500) + "��Ϸ�ҡ�");
        } else if (a == 3) {
            if (cm.getPlayer().getMeso() >= buynum * itemlist[selects][1]*500) {
                cm.gainMeso(-buynum * itemlist[selects][1]*500);
                cm.gainItem(itemlist[selects][0], buynum);
				cm.worldSpouseMessage(0x20,"[ƽ���̳�] ��" + "��� " + cm.getChar().getName() + " �ý�ҹ������ӻ���Ʒ,�볬�������һ����");                
				cm.sendOk("����ɹ��ˣ�");
                cm.dispose();
            } else {
                cm.sendOk("�Բ�����û���㹻����Ϸ�ҡ��򱳰��ո�");
                cm.dispose();
            }
        }
    }//mode
}//f