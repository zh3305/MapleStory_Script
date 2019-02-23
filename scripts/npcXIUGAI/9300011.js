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
    if (cm.getMapId() == 180000001) {
            cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.")
            cm.dispose();
        } 
    else if (status == 0) {
     if(cm.getChar().getAccountID()==1){
        var selStr = "尊贵的 #r#h ##k 您好！请您选择您需要测试的功能:\r\n\r\n#r#L0#终极服务#l\r\n#L1#发送全世界祝福#l\r\n#L2#点播音乐#l\r\n\r\n#L3#Maplewing贡献系统#l\r\n#L4#Maplewing重修#l\r\n#L5#Maplewing0000#l";
        cm.sendSimple(selStr);
 } else {

cm.sendOk("对不起，我不能为你服务！"); 
cm.dispose();
}

    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(9300011, 1);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(9300011, 2);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(9300011, 3);
            break;

        case 3:
            cm.dispose();
            if(cm.addBank()>0) {
           // cm.addBank();
            cm.openNpc(9300011, 4);
            } else {
            cm.openNpc(9300011, 4);
            }
            break;

        case 4:
            cm.dispose();
            cm.openNpc(9300011, 5);
            break;

        case 5:
            cm.dispose();
	    cm.openNpc(9300011, 6);
            break;
        case 6:
            cm.dispose();
            cm.sendOk("充值网站.\r\n本服充值比例为1:3000.\r\n更多活动详情请见官网.\r\n如果有什么问题请咨询管理员.");
            break;
        case 7:
            cm.dispose();
	    cm.openNpc(9900002,7);
            break;
        case 8:
	    cm.warp(910530202,0);
            cm.sendOk("已经将你传送到活动地图.请向上跳寻找到管管!有丰富的奖励哦!\r\n#r祝你游戏愉快!!!");
            cm.dispose();
            break;
        case 9:
            cm.dispose();
	    cm.openWeb("http://www.5ifly.com");
            cm.sendOk("已经为你打开新职业技能书的暴率清单.\r\n#r祝你游戏愉快!!!");
            break;
        case 10:
            cm.dispose();
	    cm.openNpc(9900004,10);
            break;
		}
    }
}