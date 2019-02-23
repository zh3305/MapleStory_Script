/**
 *Mary
 */
var status = 0;
var random = java.lang.Math.floor(Math.random() * 4);
var ca = java.util.Calendar.getInstance();
var day3 = ca.get(java.util.Calendar.DATE);//获取日
var day = ca.get(java.util.Calendar.DATE);//获取日
var day1 = ca.get(java.util.Calendar.YEAR);//获取年
var day2 = ca.get(java.util.Calendar.MONTH)+1;//获取月
//var day2 = ca.get(java.util.Calendar.HOUR_OF_DAY);//获取月
var eff = "#fUI/UIWindowBT.img/WorldMap/BtNext/mouseOver/0#";
var eff1 = "#fEffect/CharacterEff/1112905/0/1#";
var eff4 = "#fUI/Basic/BtHide3/mouseOver/0#";
var bbb = "#fUI/UIWindow.img/Shop/meso#";
var fff ="#fUI/UIWindow.img/Quest/icon6/0#";
var aaa ="#fUI/Login.img/WorldNotice/2/0#";
var ttt ="#fUI/UIWindow.img/Quest/icon7/0#";
var kkk6 ="#fEffect/ItemEff/1004125/effect/default/0#";
var kkk5 ="#fEffect/ItemEff/1102672/effect/swingP1/0#";
var kkk4 ="#fEffect/ItemEff/1102617/effect/shoot2/0#";
var kkk3 ="#fEffect/Tomb/condition1/land/0#";
var kkk99 ="#fEffect/ItemEff/2420004/1/0#";
var kkk2 ="#fEffect/CharacterEff/moveRandomSprayEff/DAShieldChasing/effect/3/0#";
var kkk1 ="#fEffect/CharacterEff/moveRandomSprayEff/chillingStep/effect/0/0#";
var kkk ="#fEffect/CharacterEff/1051296/1/0#";
var zzz ="#fUI/UIWindow.img/Quest/icon5/0#";
var yyy ="#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var rrr ="#fUI/UIWindow2.img/Quest/list/recommendTitle#";
var ccc ="#fUI/UIWindowBT.img/WorldMap/BtHome/normal/0#";
var hhh ="#fUI/UIWindowBT.img/WorldMap/BtQsearch/mouseOver/0#";
var sz1 ="#fEffect/BasicEff/MainNotice/Content/Number/1/0#";
var kkk ="#fEffect/CharacterEff/1051294/2/0#";
var kkk8 ="#fEffect/CharacterEff/farmEnterTuto/mouseClick/3#";
var uiq ="#fEffect/CharacterEff/1082565/2/0#";
var uiq1 ="#fEffect/CharacterEff/1082565/1/0#";
var uiq2 ="#fEffect/CharacterEff/1082565/4/0#";
var uiq3 ="#fEffect/CharacterEff/1082565/0/0#";

var e1 = "#fUI/Basic/BtHide3/mouseOver/0#";
var e2 = "#fUI/UIWindow.img/Shop/meso#";
var e3 ="#fUI/UIWindow.img/Quest/icon6/0#";
var e4 ="#fUI/Login.img/WorldNotice/2/0#";
var e5 ="#fUI/UIWindow.img/Quest/icon7/0#";
var e6 ="#fEffect/ItemEff/1004125/effect/default/0#";
var e7 ="#fEffect/ItemEff/1102672/effect/swingP1/0#";
var e8 ="#fEffect/ItemEff/1102617/effect/shoot2/0#";
var e9 ="#fEffect/Tomb/condition1/land/0#";
var e10 ="#fEffect/CharacterEff/moveRandomSprayEff/DAShieldChasing/effect/3/0#";
var e11 ="#fEffect/CharacterEff/moveRandomSprayEff/chillingStep/effect/0/0#";
//var kkk ="#fEffect/CharacterEff/1051296/1/0#";
var e12 ="#fUI/UIWindow.img/Quest/icon5/0#";
var e13 ="#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var e14 ="#fUI/UIWindow2.img/Quest/list/recommendTitle#";
var e15 ="#fUI/UIWindowBT.img/WorldMap/BtHome/normal/0#";
var e16 ="#fUI/UIWindowBT.img/WorldMap/BtQsearch/mouseOver/0#";
var e17 ="#fEffect/BasicEff/MainNotice/Content/Number/1/0#";
var e18 ="#fEffect/CharacterEff/1051294/2/0#";
var e19 ="#fEffect/CharacterEff/farmEnterTuto/mouseClick/3#";
var e20 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var e21 ="#fEffect/ItemEff/1112823/0/2#";
var e22 ="#fEffect/ItemEff/1004122/effect/default/14#";
var e23 ="#fEffect/ItemEff/1004122/effect/default/13#";

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
        var selStr = "\r\n#e#b打开就会扣除点卷，需要#r50W#b点卷才能满技能！！！\r\n#n#d#e#L0#" + fff + "打开满技能NPC#r(50W点卷)#l";
 cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
           if (cm.getPlayer().getCSPoints(1) >= 500000) {
                    cm.dispose();
		    cm.openNpc(9000154,"mjn");
                    cm.gainNX(1, -500000);
//cm.worldSpouseMessage(0x15,"[土豪]"+ cm.getChar().getName() +"  在市场[工作人员咪咪]打开了任意刷物品NPC，大家快去打劫他(她)！");
			}else{
                cm.sendOk("你没有足够的点卷无法打开！");
		cm.dispose();
            }
            break;
        case 1:
            if (cm.itemQuantity(4000313) >=50){
                    cm.dispose();
		    cm.openNpc(9000154,23);
                    cm.gainItem(4000313, -50);
cm.worldSpouseMessage(0x15,"[刷物品-新]"+ cm.getChar().getName() +"  在市场[工作人员咪咪]打开了任意刷物品NPC，大家快去打劫他(她)！");
			}else{
                cm.sendOk("你没有足够的 #v4000313# #z4000313# 无法打开！");
		cm.dispose();
            }
            break;
        case 2:
            if (cm.itemQuantity(4033589) >=100){
		cm.gainItem(4033589,-100);
		cm.gainItem(1012191,1);//暗影双刀面巾
                cm.sendOk("兑换#v1012191#x1成功.请查看背包");
		cm.dispose();
            } else {
                cm.sendOk("你没有100个#v4033589#");
		cm.dispose();
            }
            break;
        case 3:
            if (cm.itemQuantity(4033589) >=100){
		cm.gainItem(4033589,-100);
		cm.gainItem(1022097,1);//龙眼镜
                cm.sendOk("兑换#v1022097#x1成功.请查看背包");
		cm.dispose();
            } else {
                cm.sendOk("你没有100个#v4033589#");
		cm.dispose();
            }
            break;
        case 4:
            if (cm.itemQuantity(4033589) >=100){
		cm.gainItem(4033589,-100);
		cm.gainItem(1132013,1);//不灭的法老腰带
                cm.sendOk("兑换#v1132013#x1成功.请查看背包");
		cm.dispose();
            } else {
                cm.sendOk("你没有100个#v4033589#");
		cm.dispose();
            }
            break;
        }
    }
}