/*
 �ű����ܣ��̵�
 */

var a = 0;
var icon = "#fUI/Basic.img/BtMin2/normal/0#";

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
            cm.sendSimple("��������Ҫ��������һ���̵�#b\r\n\r\n#L0# "+icon+" �ӻ��̵�#l #L10# "+icon+ " �����̵� #L1# "+icon+" ����װ��\r\n#L2# "+icon+" ˫��װ�� #L3# "+icon+" �ɱ�ר�� #L4# "+icon+" ����װ�� \r\n#L5# "+icon+" ����װ�� #L6# "+icon+" ʨ������ #L7# "+icon+" �����ҵ�\r\n#L11# "+icon+" ��ͨ���� #L9# "+icon+" �˶��ҵ� #L8# "+icon+" RED���̵�")
        } else if (a == 1) {
            if (selection == 0){
                cm.openShop(1012123);//shop�ֶβ���Ϊ0
                cm.dispose();
            }else if (selection == 1) {//�����̵�
                cm.openShop(1012124);
		cm.dispose();
            } else if (selection == 2) {//�����̵�
                cm.openShop(1012125);
		cm.dispose();
            } else if (selection == 3) {//�����̵�
                cm.openShop(1033003);
		cm.dispose();
            } else if (selection == 4) {//�����̵�
                cm.openShop(9310117);
		cm.dispose();
            } else if (selection == 5) {//�����̵�
                cm.openShop(1033001);
		cm.dispose();
            } else if (selection == 6) {//�����̵�
                cm.openShop(2161010);
		cm.dispose();
            } else if (selection == 7) {//�����̵�
		cm.dispose();
                cm.openNpc(9900003, 21);
            } else if (selection == 8) {//RED
		cm.dispose();
                cm.openShop(20000);
            } else if (selection == 9) {//�˶���
		cm.dispose();
                cm.openShop(22200);
			} else if (selection == 10) {
				cm.dispose();
                cm.openShop(22224);
			} else if (selection == 11) {
				cm.dispose();
				cm.openNpc(9310144,222);
			
            } else {
				cm.sendOk("�ð�~");
                // 1012123 �ӻ��̵� x
                //10 �ͼ�����
                //11 50~60������
                //12 60~70������
                //20 �ͼ�����
                //21 50~60������
                //22 60~70������
                // 3 �������� 
                // 4 �����̵� x 
                // 1012125 �����̵�
                // 6 ��������
                //cm.openShop(selection);
                cm.dispose();
            }
        } else if (a == 2) {
            switch (selection) {
                case 0://�ͼ�����
                    //cm.openShop(10)
                    cm.sendOk("��ʱδ���š�")
                    break;
                case 1://50~60������
                    cm.openShop(11)
                    break;
                case 2://60~70������
                    cm.openShop(12)
                    break;
                case 3://�ͼ�����
                    //cm.openShop(20)
                    cm.sendOk("��ʱδ���š�")
                    break;
                case 4://50~60������
                    cm.openShop(21)
                    break;
                case 5://60~70������
                    cm.openShop(22)
                    break;
            }
            cm.dispose();
        }//a
    }//mode
}//f