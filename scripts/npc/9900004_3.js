var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
            var selStr = "�װ���#r" + cm.getChar().getName() + "#k��ã���Ҫ���������#b\r\n#L0#����\r\n#L1#����\r\n#L2#��������\r\n#L3#���׺���\r\n#L4#ʨ���������װ�\r\n#L5#�������Ʒ����\r\n#L6#��ʿ�š�ϣ��˹Ů��\r\n#L7#����Ʒ����BOSS��ս����(����/����/Ʒ����)";
 	    cm.sendSimple(selStr);
    } else if (status == 1) {
      switch (selection) {
        case 0:
           if (cm.getPlayer().getCSPoints(1)>=21000 && cm.getBossLog("��ͨ����") > 1) {
		    cm.gainNX(-21000);
                    cm.resetBossLog("��ͨ����");
                    cm.sendOk("��ܰ��ʾ��#b\r\n�������óɹ�����ʿ�ж������ɣ�");
		    cm.dispose();
                } else {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ����ʣ�಻��(2W1)���㻹ʣ�����.");
                    cm.dispose();
                }
            	    break;
        case 1:
           if (cm.getPlayer().getCSPoints(1)>=21000 && cm.getBossLog("��ͨ����") > 1) {
		    cm.gainNX(-21000);
                    cm.resetBossLog("��ͨ����");
                    cm.sendOk("��ܰ��ʾ��#b\r\n�������óɹ�����ʿ�ж������ɣ�");
		    cm.dispose();
                } else {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ����ʣ�಻��(2W1)���㻹ʣ�����.");
                    cm.dispose();
                }
            	    break;
        case 2:
           if (cm.getPlayer().getCSPoints(1)>=30000 && cm.getBossLog("��������") > 1) {
		    cm.gainNX(-30000);
                    cm.resetBossLog("��������");
                    cm.sendOk("��ܰ��ʾ��#b\r\n�������óɹ�����ʿ�ж������ɣ�");
		    cm.dispose();
                } else {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ����ʣ�಻��(3W)���㻹ʣ�����.");
                    cm.dispose();
                }
            	    break;
        case 3:
           if (cm.getPlayer().getCSPoints(1)>=30000 && cm.getBossLog("���׺���") > 1) {
		    cm.gainNX(-30000);
                    cm.resetBossLog("���׺���");
                    cm.sendOk("��ܰ��ʾ��#b\r\n�������óɹ�����ʿ�ж������ɣ�");
		    cm.dispose();
                } else {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ����ʣ�಻��(3W)���㻹ʣ�����.");
                    cm.dispose();
                }
            	    break;
        case 4:
           if (cm.getPlayer().getCSPoints(1)>=21000 && cm.getBossLog("ʨ����") > 1) {
		    cm.gainNX(-21000);
                    cm.resetBossLog("ʨ����");
                    cm.sendOk("��ܰ��ʾ��#b\r\n�������óɹ�����ʿ�ж������ɣ�");
		    cm.dispose();
                } else {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ����ʣ�಻��(2W1)���㻹ʣ�����.");
                    cm.dispose();
                }
            	    break;
        case 5:
           if (cm.getPlayer().getCSPoints(1)>=30000 && cm.getBossLog("Ʒ����") > 1) {
		    cm.gainNX(-30000);
                    cm.resetBossLog("Ʒ����");
                    cm.sendOk("��ܰ��ʾ��#b\r\n�������óɹ�����ʿ�ж������ɣ�");
		    cm.dispose();
                } else {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ����ʣ�಻��(3W)���㻹ʣ�����.");
                    cm.dispose();
                }
            	    break;
        case 6:
           if (cm.getPlayer().getCSPoints(1)>=30000 && cm.getBossLog("ϣ��˹") >= 1) {
		    cm.gainNX(-30000);
                    cm.resetBossLog("ϣ��˹");
                    cm.sendOk("��ܰ��ʾ��#b\r\n�������óɹ�����ʿ�ж������ɣ�");
		    cm.dispose();
                } else {
                    cm.sendOk("��ܰ��ʾ��#b\r\n��������ʧ�ܣ����ʣ�಻��(3W)���㻹ʣ�����.");
                    cm.dispose();
                }
            	    break;
        case 7:
	if( cm.haveItem(4000243,1) && cm.haveItem(4000235,1) && (cm.getBossLog("��ͨ����") > 1 || cm.getBossLog("��ͨ����") > 1 || cm.getBossLog("Ʒ����") > 1)){
                    cm.resetBossLog("��ͨ����");
                    cm.resetBossLog("��ͨ����");
                    cm.resetBossLog("Ʒ����");
		    cm.gainItem(4000235,-1);
		    cm.gainItem(4000243,-1);
	    cm.sendOk("���óɹ�.ף����Ϸ���!");
	    cm.dispose();
} else {
	    cm.sendOk("��û�д�������Ҷ��-��ӥ�Ľ����������β��\r\n�������ս������û��ʹ����Ŷ");
	    cm.dispose();
}
            break;
        }
    }
}