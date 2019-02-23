var status = 0;


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

        name = cm.getVipname();
        namegp1 = cm.getMaplewinggpname(1);
       // namegp2 = cm.getMaplewinggpname(2);
        //namegp3 = cm.getMaplewinggpname(3);

        rategp1 = cm.getMaplewinggp("rate", 1);

        pgp1 = cm.getMaplewinggp("point", 1);

        lpgp1 = cm.getMaplewinggp("lastpoint", 1);


     if(cm.getChar().getAccountID()==1){
        var selStr = "尊贵的 #r#h ##k 您好！请您选择您需要测试的功能:\r\n\r\n#r#L0#终极服务#l\r\n#L1#发送全世界祝福#l\r\n#L2#点播音乐#l\r\n\r\n#L3#Maplewing贡献系统#l\r\n#L4#Maplewing重修#l\r\n#L5#测试新加的maplewing 数据表#l\r\n#L6#测试新加的 1Drops #l \r\n#L99#测试新加的 赏金猎人 #l  \r\n#L98#测试新加的 玩具城组队任务 #l";
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

        case 99:
            cm.dispose();
            cm.openNpc(9000086, 5353);
            break;

        case 98:
            cm.dispose();
            cm.openNpc(9000086, 5352);
            break;

        case 3:
            cm.dispose();
            if(cm.addBank() > 0) {
            cm.addBank();
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
            if(cm.getMaplewing(10, 0) < 100000) {
	    cm.openNpc(9300011, 6);
            } else {
	    cm.openNpc(9300011, 6);
           // cm.sendOk("........");
            }
            break;
        case 6:

          if (cm.getParty() == null) {
          cm.sendOk("#e#r你好像还没有一个队伍,我是不能送你进去的."); 
          cm.dispose();

          }else if(cm.getParty().getMembers().size() > 1){
          cm.sendOk("#e#r你只能单独前往，队里只能你一个人."); 
          cm.dispose(); 

          }else if (!cm.isLeader()) {
          cm.sendOk("#e#r请队长来跟我谈话."); 
          cm.dispose(); 

          }else{

          var em = cm.getEventManager("1Drops");

          if (em == null) {
          cm.sendOk("出错啦,请联系GM.");
          cm.dispose();

          } else {
          em.startInstance(cm.getParty(), cm.getChar().getMap());

          }

          }

            cm.dispose();
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