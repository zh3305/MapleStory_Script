var a = 0;
var text;
var selects; //��¼��ҵ�ѡ��
var buynum = 0;
var itemlist = Array(
Array(3010832,500), // ̫������ // �ȣ��ȣ��ȣ���������������ȼ�յ���������������\nÿ10���ӻָ�HP,MP��60��
Array(3010788,450), // ���ް���ҹ�� // ���й���ҡ�С������ơ�ũ����Ϧ���ڱ�������Χ����һ�𣬹�ͬ�Ǿ�ӭ��һ��������ζ�ľ��ް���Բ��������ʱ��ÿ��ָ�HP��MP��500��
Array(3010658,450), // �������ϱ����� // ���й����"������"��Ƶģ������������������ӣ�һɨ�������ȡ�����ÿ10��ظ�HP��MP��100��
Array(3010621,450), // ��������� // �����˾޴���������ˣ���������ÿ10��ָ�HP��MP��50.

Array(3010842,260), // èè���η��� // ���й�ð�յ���ҡ�С������Ƶ�èè���η������ӡ�ÿ10�룬HP�ָ�500��MP�ָ�500��
Array(3010843,260), // ���ý��η��� // ���й�ð�յ���ҡ�С������Ƶ����ý��η������ӡ�ÿ10�룬HP�ָ�500��MP�ָ�500��
Array(3010876,260), // ð�յ��������� // Ϊ����ð�յ�10���꣬�ر�������ð�յ��������ӡ�ÿ10���лָ�HP��MP��500��
Array(3010936,260), // ������¥�� // ���й���ҡ�С������ƵĿ�ͬʱ�������˵�������¥�����ӡ�����ʱ��ÿ10���У��ɻָ�HP��MP��500��
Array(3012025,260), // С�����ɴ����� // ���й���ҡ�С������Ƶ��������ӣ�С�����ɴ����ӣ�����������һ��ʱ����Ư���ı���Ч��������ʱ��ÿ10���У��ɻָ�HP��MP��500��
Array(3010696,230), // ���Ѽ // ������ƤѼ����Ʒ���������棬ÿ10��ָ�HP��MP��1000��
Array(3010718,200), // �����ƶ��ɳ�� // ��������Ķ�ֻ�����㣬�������ǵİ���������������ƶ����������£��������������й���ҡ�С������ơ��������棬ÿ10��ָ�HP��MP��200��
Array(3010519,200), // �޴��ѩ������ // �����һ������Ľ�ġ��������������ĸо��ɡ�ÿ10��HP�ָ�50�㣬MP�ָ�50�㡣 
Array(3010520,200), // �޴���������� // �����ʲô�ĺ�����ѱ����Ϊ˧�������ر�׼�������ӡ�ÿ10��HP�ָ�50�㣬MP�ָ�50�㡣 
Array(3010070,200),

Array(3012011,100), // �Ұ��ɿ������ // ����������һ�𽫳��־޴���ɿ������,һ��������˽��ɿ�����Ũ������ɡ�\nÿ10���ӻָ�HP,MP��50��
Array(3012019,100), // ���ٺ����� // ���й���ҡ�С������Ƶ�˫�����ӡ��������İ��麣����ϲ������һ������ʥ�������У������Ҹ������ۡ����˿��������»���ְ��ٺ�ʥ�����õ�������Ч������ʱ��ÿ10��ָ�HP��MP500��
Array(3012010,100), // �ɿ����������� // ��ʿ�ɿ����������ʵĲ�ݮ,����������һ��ƴ�������İ��ġ�\nÿ10���ӻָ�HP,MP��50��
Array(3012001,100), // ���� // ��˵��, �����˱���һ���������ڵ�������, ���˼佫����ů��������Ч����ÿ10���ӻָ�HP 20,MP 20.
Array(3012025,100), // С�����ɴ����� // ���й���ҡ�С������Ƶ��������ӣ�С�����ɴ����ӣ�����������һ��ʱ����Ư���ı���Ч��������ʱ��ÿ10���У��ɻָ�HP��MP��500��
Array(3010736,100), // ������Ӥҡ�� // ���й���ҡ�С������ơ����˿���ʱ����������Ч������ʱ��ÿ10��ָ�HP��MP500��
Array(3012024,100), // ɳ̲�������� // ���й���ҡ�С������Ƶ�ɳ̲�������ӡ������˿���ʱ�������Ч��#cÿ10���лָ�HP��MP��500��#
Array(3012020,100), // ���ٻ������� // ���й�ð�յ���ҡ�С������Ƶ��������ӣ���������һ��ʱ����Ư���ı���Ч����ÿ5��ָ�HP/MP 500
Array(3010528,100), // �ܲ������� // ÿ10��ظ�70HP��70MP
Array(3010877,100), // ����ɺ���� // ���й���ҡ�С������Ƶ�����ɺ�������ӡ�������ʱ���ܱ�����㡣#cÿ10���лָ�HP��MP��500��#
Array(3010813,100), // ����ˮ����Ļ��� // ���й���ҡ�С������Ƶ����ӡ�װ���������Ҹ����ۻ���İ���ˮ��������ʱ��ÿ10��ָ�HP��MP500��
Array(3010660,100), // �λù����Ǳ����� // ��������й���ҡ�С��������ƣ�����������Ĺ������ڵĹ������ÿ10��ظ�HP��MP��100��
Array(3010661,100), // ����������� // ���й���ҡ�С��������������������Ļ���������ӡ����º�ᶯ����ÿ10��ظ�HP��MP��100��
Array(3010715,100), // �Ҹ�9���군�������� // �����ǳ����Ҹ���ϲ�õ�������������ɡ�9���������ƴ���������Ʒ�����й���ҡ�С������ơ��������棬ÿ10��ָ�HP��MP��200��
Array(3010716,100), // ����Ģ������ // ��׻����������ǰ�е�·�ϲ���Ҫ����ս���������ʱ���㶮�ģ�9���������ƴ���������Ʒ�����й���ҡ������塱��ơ��������棬ÿ10��ָ�HP��MP��200��
Array(3010717,100),// Marry me // �������������ر�����ֽ���޸��Ұɣ�9���������ƴ���������Ʒ�����й���ҡ�����������ơ��������棬ÿ10��ָ�HP��MP��200��
Array(3010527,100) // ����� // ����������������㣬ӵ�г�������ָܻ��ٶȡ����¿�ÿ10��ָ�HP1000��MP1000
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
			text = "#h0#,������������һ�#e#bϡ������#n#k,��ѡ������Ҫ�������Ʒ\r\n#r#L0#���ҽ��뵽����ģʽ#l\r\n\r\n#b";
			for (var i=1; i<=itemlist.length; i++) {
				text += "#L" + (i) + "##i" + itemlist[i-1] + ":##t" + itemlist[i-1] + "# - #r"+itemlist[i-1][1]+"#bѩ����  \r\n";
				if (i != 0 && (i+1) % 5 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
        } else if (a == 1) {
			if (selection == 0) {
				cm.dispose();
				cm.openNpc(9000069, 202);

				return;
			}  else {
			selects = (selection-1);
            
			}
            buynum = 1;
            cm.sendYesNo("���빺��" + buynum + "��#r#i" + itemlist[selects][0] + "##k��\r\n�㽫ʹ�õ�" + (buynum * itemlist[selects][1]) + "ѩ���ҡ�");
        } else if (a == 2) {
            if (cm.haveItem(4310014,buynum * itemlist[selects][1])) {
                cm.gainItem(4310014, -buynum * itemlist[selects][1]);
                cm.gainItem(itemlist[selects][0], buynum);
                cm.sendOk("����ɹ��ˣ�");
                cm.dispose();
            } else {
                cm.sendOk("�Բ�����û���㹻��ѩ���ҡ�");
                cm.dispose();
            }
        }
    }//mode
}//f