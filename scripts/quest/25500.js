/*
 * �����еĺڰ����ڰ��еĹ���
 */

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 19) {
            qm.sendOk("Ҫ�������������������ǽ���ʵ������");
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendNext("�𾴵�ҹ�ⷨʦ�������Ǹü�Ԧ��֮������ڰ����������仯Ϊ������������ʹ�õ�ʱ���ˡ�");
    } else if (status == 1) {
        qm.sendNextPrevS("#b����μ�Ԧ��", 2);
    } else if (status == 2) {
        qm.sendNextPrev("�ҽ�����������Ϊ�˸���˵˵������뿴�������Ϸ�����������ͼ\r\n#v3800300#\r\nһ���Ķ����˰ɣ����������ʾҹ�ⷨʦӵ�еĹ�֮������ڰ�����������");
    } else if (status == 3) {
        qm.sendNextPrevS("#b��������ʲô��", 2);
    } else if (status == 4) {
        qm.sendNextPrev("������ʾҹ�ⷨʦ���Ի��۵ĵ���������Ի��۹���/�ڰ������������ҹ�ⷨʦ��¼�󣬳��λ��ӵ��һ������/�ڰ�������ʹ�úͺڰ��йصļ���ʱ��������һ��ڰ���������������Ϊ#b���鱻�ڰ����ֵ���ʴ״̬#k���뿴��ͼ��\r\n#v3800301#");
    } else if (status == 5) {
        qm.sendNextPrev("��������ʹ�ð�֮ħ�����ͻ�����ͼ��ʾ���ڰ�������������\r\n#v3800302#");
    } else if (status == 6) {
        qm.sendNextPrev("#r�ۻ��ĺڰ�������������#b����/�ڰ�״̬�л�#k���ܡ���Ϊ��ʴ״̬��#kʹ��ħ��ʱ��#b������50%��ħ��ʩչ���ܡ�ÿ��ʩչ����ʱ����ָ�1%��������ʹ�ð�֮ħ�������Ը��������50%�Ķ����˺������ˣ���¼��ֻҪʹ��һ�κ͹����йصļ��ܣ�#k�Ϳ����������еĺڰ�������ת��Ϊ̫������״̬��");
    } else if (status == 7) {
        qm.sendNextPrevS("#b���鱻�ڰ����֣��������������˲������", 2);
    } else if (status == 8) {
        qm.sendNextPrev("���������㲻�õ��ġ��ڰ�����������ûʲô���ã�������Ҫ�������ʹ����������#b#eҹ�ⷨʦ#n#k�����������Ѻڰ��������������ϵġ����ĳ�ˡ�����һ����");
    } else if (status == 9) {
        qm.sendNextPrevS("#b���ˣ���˵����������滹��ʲô���ݣ�", 2);
    } else if (status == 10) {
        qm.sendNextPrev("#b����ʴ״̬�£���/��֮ħ�����־���ʹ�ã�����Ҳ������ۻ���\r\n#v3800303#");
    } else if (status == 11) {
        qm.sendNextPrev("ֻҪ�㲻ʹ�õ�������һֱ������ʴ״̬����ʴ����ͼ��#v3800310#��ʾ�ڻ������Ϸ���#bҹ�ⷨʦ������ͱ���ᷢ�����±任��#k�����׾��ܿ�����\r\n#v3800321#");
    } else if (status == 12) {
        qm.sendNextPrev("�����鱻�ڰ�����ʱ����Ȼ����ʹ�ð�֮ħ��������������������#rʹ�ù���/�ڰ�״̬�л����ܣ���ʼ���Ĺ���������#k�ڰ�������ȥ��#b�����������������#k��");
    } else if (status == 13) {
        qm.sendNextPrev("ͬ������#r�������������#k������ʾ�����������⣬��ʾ���Ϊ̫������״̬��\r\n#v3800304#");
    } else if (status == 14) {
        qm.sendNextPrev("#r��������������ʱ��#k�������Ϸ�Ҳ����ʾ̫����������ͼ��#v3800309#������ͼ��ʾ��#bҹ�ⷨʦ������ͱ����ָ�ԭ��#k��\r\n#v3800320#");
    } else if (status == 15) {
        qm.sendNextPrev("��Ϊ̫������״̬��#b����ʴһ����ÿ��ʹ�ù�֮ħ��ʱ����ָ�1%��������ֻ����50%��ħ�������������ʹ�ù�֮ħ��ʱ���50%�����˺���̫����������#k����̫������״̬�£�����ʴ״̬ʱһ��������/�ڰ�����������ۻ���\r\n�ڸ�״̬��ʹ�úڰ������������±�Ϊ��ʴ״̬��");
    } else if (status == 16) {
        qm.sendNextPrevS("#b���Լ򵥸�������������ʹ�ù�֮ħ��ʱ�����ĺڰ���������ʩչ��֮ħ����ʹ�ð�֮ħ��ʱ�����Ĺ����������ܸ�Ϊ��֮ħ�����԰ɣ�", 2);
    } else if (status == 17) {
        qm.sendNextPrev("û������������������㲻֪�����ڸ�ʹ��ʲôħ�������Կ����������·���ʾ��ǿ���ļ��ܡ�\r\n<��֮ħ��>              <��֮ħ��>\r\n#v3800312#  #v3800315#\r\n�㶼����������");
    } else if (status == 18) {
        qm.sendNextPrevS("#b�ţ����Ƶ���һ�Բ�����ȫ���⡣", 2);
    } else if (status == 19) {
        qm.askAcceptDecline("��������ʵ������֪������ʹ��һ���������׵ġ���ô��ȥ���Թ��#b�ֱ�ת��һ��̫���������ʴ״̬#k��ô����");
    } else if (status == 20) {
        qm.forceStartQuest();
        qm.sendNextNoESC("���ˣ�������������/�ڰ�������һ�κ������ұ��档");
        qm.dispose();
    }
}