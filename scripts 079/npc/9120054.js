importPackage(net.sf.odinms.client);
var status = 0;
var ttt ="#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//美化1
var ttt2 ="#fUI/UIWindow/Quest/icon6/7#";//"+ttt2+"//美化2
var ttt3 ="#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//美化圆
var ttt4 ="#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//美化New
var ttt5 ="#fUI/UIWindow/Quest/icon0#";//"+ttt5+"//美化!
var ttt6 ="#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//美化会员
function start() {
	if (cm.getChar().getMapId() == 803001200 && cm.haveItem(4001126) >= 1){
	    if(cm.countMonster()>10){
		 cm.sendSimple ("您正在挑战的BOSS数目过多,请先把它消灭了再来召唤.如果您想放弃挑战,我可以把你送回市场! \r\n \r\n    #L8##r回到市场#l");
	    }else{
   		 cm.sendSimple ("#b\r\n"+cm.mxdmz()+"冒险岛，绯红副本.\r\n#b每召唤一个BOSS#r[需要80个枫叶]#b 绯红BOSS爆以下物品：#d\r\n#z1382060# #z1442068# #z1452060# #z1432056# #z1102207# \r\n#z1102206# #z4031861# #z4031549# #z4001035##b\r\n\r\n#L0#挑战猎魔人#l  #L1#挑战血焰将军#l  #L2#挑战地狱船长#l\r\n#L6#挑战海之魔女#l#L7#挑战暗影杀手#l\r\n\r\n#L3#兑换通行证#l  #L4#去通关领奖#l    #L5##r查看副本介绍#l      #L8##r回到市场#l");
	    }
	} else {
	    cm.sendOk("没有足够的枫叶发动魔法!")
	}
}
function action(mode, type, selection) {
cm.dispose();
if (selection == 0) {
       if(cm.haveItem(4001126) >= 1) {
        cm.gainItem(4001126,-80);
        cm.summonMob(9400592, 800000000, 100000, 1);//猎魔人     
cm.serverNotice("『绯红骑士团公告』：【"+ cm.getChar().getName() +"】带领他的队友开始挑战绯红骑士团终极BOSS【猎魔人】！"); 
        }else{
        cm.sendOk("抱歉你没有80个枫叶。我不能为您召唤"); 
	cm.dispose();}
} else if (selection == 1) {
       if(cm.haveItem(4001126) >= 1) {
        cm.gainItem(4001126,-80);
cm.serverNotice("『绯红骑士团公告』：【"+ cm.getChar().getName() +"】带领他的队友开始挑战绯红骑士团终极BOSS【血焰将军 】！");  
        cm.summonMob(9400591, 800000000, 100000, 1);//血焰将军     
        }else{
        cm.sendOk("抱歉你没有80个枫叶。我不能为您召唤"); 
	cm.dispose();}
} else if (selection == 2) {
       if(cm.haveItem(4001126) >= 1) {
        cm.gainItem(4001126,-80);
cm.serverNotice("『会员公告』：【"+ cm.getChar().getName() +"】带领他的队友开始挑战绯红骑士团终极BOSS【地狱船长  】！"); 
        cm.summonMob(9400589, 800000000, 100000, 1);//地狱船长     
        }else{
        cm.sendOk("抱歉你没有80个枫叶。我不能为您召唤"); 
	cm.dispose();}
} else if (selection == 3) { 
        if (!cm.haveItem(4001009,1)) {
        cm.sendOk("抱歉，你没有1张#v4001009#无法为你开启");
        } else if (!cm.haveItem(4001010,1)) {
        cm.sendOk("抱歉，你没有1张#v4001010#无法为你开启"); 
        } else if (!cm.haveItem(4001011,1)) {
        cm.sendOk("抱歉，你没有1张#v4001011#无法为你开启"); 
        } else if (!cm.haveItem(4001012,1)) {
        cm.sendOk("抱歉，你没有1张#v4001012#无法为你开启"); 
        } else if (!cm.haveItem(4001013,1)) {
        cm.sendOk("抱歉，你没有1张#v4001013#无法为你开启"); 
        }else{
	cm.gainItem(4001009,-1);
	cm.gainItem(4001010,-1);
	cm.gainItem(4001011,-1);
	cm.gainItem(4001012,-1);
	cm.gainItem(4001013,-1);
	cm.gainItem(4021010,1);
	cm.dispose();
}
} else if (selection == 4) {
        if (!cm.haveItem(4021010,1)) {
        cm.sendOk("抱歉，你没有#v4021010#无法为你开启");
cm.dispose();
    } else {
cm.warp(803001400, 0);
cm.dispose();
}
}else if (selection == 8) {
    cm.warp(910000000, 0);
    cm.dispose();
}else if (selection == 5) {
cm.sendOk("在这里必须击败所有的BOSS，而每一个BOSS都会爆出一种凭证#r（凭证暴率90%）#k。收集5个凭证后，您可以找我兑换通关证明。然后在点我，我将把你们传送到领奖地图。\r\n#d[猎 魔 人]：#r血量:#d■■■■■■■■■■ [8E]\r\n#r            攻击:#d■■■■■\r\n[血焰将军]：#r血量:#d■■■■■■■■■■ \r\n#r            攻击:#d■■■■■\r\n[地狱船长]：#r血量:#d■■■■■■■■■■ \r\n#r            攻击:#d■■■■■\r\n[海之魔女]：#r血量:#d■■■■■■■■■■ \r\n#r            攻击:#d■■■■■\r\n[暗影杀死]：#r血量:#d■■■■■■■■■■ \r\n#r            攻击:#d■■■■■");      
cm.dispose();
} else if (selection == 6) {
       if(cm.haveItem(4001126) >= 1) {
        cm.gainItem(4001126,-80);
cm.serverNotice("『会员公告』：【"+ cm.getChar().getName() +"】带领他的队友开始挑战绯红骑士团终极BOSS【海之魔女  】！"); 
        cm.summonMob(9400590, 800000000, 100000, 1);//地狱船长     
        }else{
        cm.sendOk("抱歉你没有80个枫叶。我不能为您召唤"); 
	cm.dispose();}
} else if (selection == 7) {
       if(cm.haveItem(4001126) >= 1) {
        cm.gainItem(4001126,-80);
cm.serverNotice("『会员公告』：【"+ cm.getChar().getName() +"】带领他的队友开始挑战绯红骑士团终极BOSS【暗影杀手  】！"); 
        cm.summonMob(9400593, 800000000, 100000, 1);//地狱船长     
        }else{
        cm.sendOk("抱歉你没有80个枫叶。我不能为您召唤"); 
	cm.dispose();}
} else if (selection == 8) {
	if(cm.getMeso() <= 50000000) {
        cm.sendOk("抱歉你没有5000万。我不能为您召唤"); 
        }else{ 
        cm.gainMeso(-50000000);
        cm.summonMob(9400300, 100000000, 175000000, 1);//恶僧
	cm.dispose(); } 
} else if (selection == 9) {
	if(cm.getMeso() <= 50000000) {
        cm.sendOk("抱歉你没有5000万。我不能为您召唤"); 
        }else{ 
        cm.gainMeso(-50000000);
        cm.summonMob(9400549, 1, 200300000, 1);//火马
	cm.dispose(); } 
} 
}