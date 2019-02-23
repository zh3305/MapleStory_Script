/*
	金利奇  不能利用的NPC 执行脚本不能超过2次
*/


var mds = "";
var mda = "";
var mdd = "";
var mde = "";

var name;
var lvs;

var gp1;
var gp2;
var gp3;

var namegp1 = "";
var namegp2 = "";
var namegp3 = "";

var rategp1 = 1;
var rategp2 = 1;
var rategp3 = 1;

var pgp1;
var pgp2;
var pgp3;

var lpgp1;
var lpgp2;
var lpgp3;



var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {




        name = cm.getVipname();
        namegp1 = cm.getMaplewinggpname(1);
       // namegp2 = cm.getMaplewinggpname(2);
        //namegp3 = cm.getMaplewinggpname(3);

        rategp1 = cm.getMaplewinggp("rate", 1);

        pgp1 = cm.getMaplewinggp("point", 1);

        lpgp1 = cm.getMaplewinggp("lastpoint", 1);
           
        mds += "#r ┈┈┈━═☆#i4251202##r   金融中心   #i4251202# #r☆═━┈┈┈ \r\n\r\n#r";

        //for (var )

        mda += "\r\n\r\n#b股票1 ：\r\n#e#r" + namegp1 + " #d#n 倍率 #e#r" + rategp1 + " #n#b 当前点数 #e#r" + pgp1 + " #n#d \r\n上次点数 #e#r" + lpgp1 + " #n\r\n" ;





/*
        if(cm.getChar().getAccountID()==1){

        var selStr = "尊贵的 #r#h ##k 您好！请您选择您需要测试的功能:\r\n\r\n#r#L0#终极服务#l\r\n#L1#发送全世界祝福#l\r\n#L2#点播音乐#l\r\n\r\n#L3#Maplewing贡献系统#l\r\n#L4#Maplewing重修#l\r\n#L5#测试新加的maplewing 数据表#l";

        selStr += "\r\n\r\n#b有什么事吗？getMaplewingjr " + cm.getMaplewingjr("gpid1") +  " \r\n#b#L100#你是谁？#l\r\n#L101#我想和你交易。#l\r\n#L102#测试SetMapleGP。#l\r\n#L103#测试SetMapleWing。#l";

        cm.sendSimple(selStr);

        } else {

        cm.sendSimple("有什么事吗？\r\n\r\n#b#L0#你是谁？#l\r\n#L1#我想和你交易。#l");
        }

*/
        cm.sendSimple("有什么事吗？\r\n\r\n#b#L100#你是谁？#l\r\n#L101#我想和你交易。#l" + mda);

    } else if (status == 1) {
        switch (selection) {


        case 0:
            cm.dispose();
            cm.openNpc(2084001, 1);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(2084001, 2);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(2084001, 3);
            break;

        case 3:
            cm.dispose();
            if(cm.addBank() > 0) {
            cm.addBank();
            cm.openNpc(2084001, 4);
            } else {
            cm.openNpc(2084001, 4);
            }
            break;

        case 4:
            cm.dispose();
            cm.openNpc(2084001, 5);
            break;

        case 5:
            cm.dispose();
            if(cm.getMaplewing(10, 0) < 100000) {
	    cm.openNpc(2084001, 6);
            } else {
	    cm.openNpc(2084001, 6);
           // cm.sendOk("........");
            }
            break;
        case 6:
            cm.dispose();
            break;
        case 7:
            cm.dispose();
	    cm.openNpc(2084001,7);
            break;
        case 8:
	    cm.warp(910530202,0);
            cm.sendOk("已经将你传送到活动地图.请向上跳寻找到管管!有丰富的奖励哦!\r\n#r祝你游戏愉快!!!");
            cm.dispose();
            break;
        case 9:
            cm.dispose();
	   // cm.openWeb("http://www.5ifly.com");
            cm.sendOk("已经为你打开新职业技能书的暴率清单.\r\n#r祝你游戏愉快!!!");
            break;
        case 10:
            cm.dispose();
	    cm.openNpc(9900004,10);
            break;


        case 100:
            cm.sendNext("不认识我吗？我是世界第一富翁金利奇。");
            break;
        case 101:
            cm.sendNextPrev("我通过贸易赚了很多钱。如果你有什么值钱的东西，可以随时来找我。");
            break;
        case 102:
           if (cm.setMaplewinggp("lastpoint", 5000, 1) == null) {
            cm.sendOk("成功！！！！");
          } else {
            cm.sendOk("失败！！！");
          }
            break;
        case 103:
           if (cm.setMaplewing("wmose", 500) == -1) {
            cm.sendOk("成功！！！！");
          } else {
            cm.sendOk("失败！！！");
          }
            break;






        }
        cm.dispose();
    }
}