var status = 0;
var t=new Array("存钱","取钱","查看","开户");
var money=new Array("100","300W","500W","1000W"); 
var money1=new Array("100","3000000","5000000","10000000"); 
var status = 0;
var a = 11;

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
        cm.sendSimple("尊贵的 #r#h ##k 您好！请您选择您需要测试的功能:\r\n\r\n#b#L0#测试重修加点属性函数----1#l\r\n#b#L1#测试重修加点属性函数----2#l\r\n\r\n您目前身上有#r " + cm.getVip() + " #k");
 } else {

cm.sendOk("对不起，我不能为你服务！"); 
cm.dispose();
}

    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            //cm.gainChongxiu(1);
            cm.getPlayer().resetChongxiusx2(a,40,40,40, 40, 300, 300, 300, 300);
            //cm.Chongxiusx1(a,40,400,400, 400);
            //cm.getPlayer().resetAPSP();
              //cm.setLevel(10);
            cm.sendOk("成功.")
            break;
        case 1:
            cm.dispose();
            //cm.Chongxiusx(400,400,400, 400);
            //cm.getPlayer().resetAPSP();
              //cm.gainItem(5660000,1);
            cm.sendOk("成功.")
            break;
        case 2:
            cm.dispose();
            cm.ZreHyfame();
            break;

        case 3:
            cm.dispose();
            cm.openNpc(9300011, 4);
            break;

        case 4:
            cm.dispose();
            cm.openNpc(9300011, 5);
            break;

        case 5:
            cm.dispose();
	    cm.openNpc(9030000);
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