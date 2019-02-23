/*伏特加专柜*/
var status = 0;
var eff = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var status = 0;
var z = "#fUI/UIWindow/Quest/icon5/1#";//"+z+"//美化
var kkk ="#fEffect/CharacterEff/1051296/1/0#";
var z = "#fUI/UIWindow/Quest/icon5/1#";//"+z+"
var eff1 = "#fEffect/CharacterEff/1112905/0/1#";//小红心
var icon = "#fUI/Basic.img/BtMin2/normal/0#";
var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var ttt ="#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//美化1
var ttt2 ="#fUI/UIWindow/Quest/icon6/7#";////美化2
var ttt3 ="#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//美化圆
var ttt4 ="#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//美化New
var ttt5 ="#fUI/UIWindow/Quest/icon0#";////美化!
var ttt6 ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";//"+ttt6+"//美化会员
var z = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";//"+z+"//美化
var tt ="#fEffect/ItemEff/1112811/0/0#";//音符

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
        var selStr = "";
        selStr += "";
        selStr += "		#r#r#e亲爱的#r#h ##k您好#b#k\r\n\r\n";
        selStr += "#L1#" + eff + "#d宠物进化#l\r\n";
        selStr += "#L2#" + eff + "#d宠物领取#l";
       // selStr += "#L4#" + eff + "#d点装商城3#l\r\n";
      // selStr += "#L3#" + eff + "#r特效戒指#l ";
    //selStr += "#L11#" + eff + "#r伤害皮肤#l ";
       //selStr += "#L27#" + eff + "#r最新点装#l";



 

        cm.sendSimpleS(selStr, 2);
    } else if (status == 1) {
        switch (selection) {
        case 4:
            cm.dispose();
            cm.openNpc(9010060, "jueban3");
            break;
        case 27:
            //点卷商城
            cm.dispose();
            cm.openNpc(9010060, "zuixindianzhuang");
            break;
        case 26:
        if(cm.getPlayer().getLevel() <= 10){
		cm.gainExp( + 50000);
		cm.worldMessage("恭喜新玩家"+ cm.getChar().getName() +"在拍卖NPC处领取5W经验");
		cm.sendOk("恭喜您领取成功,10级下都能在我这里领取经验");
		}else{
		cm.sendOk("你的等级大于10");
	}
	cm.dispose();
            break;
        case 25:
            //点卷商城
            cm.dispose();
            cm.openNpc(9900003, "jinengxiaoguo");
            break;
        case 24:
            //点卷商城
            cm.dispose();
            cm.openNpc(9900003, 905);
            break;
        case 23:
            //点卷商城
            cm.dispose();
            cm.openNpc(9900003, 904);
            break;
        case 1:
            //点卷商城
            cm.dispose();
            cm.openNpc(1032102);
            break;
        case 2:
            //兔币神器
            cm.dispose();
            cm.openNpc(1032102, "0");
            break;

        case 3:
            //兔币商城
            cm.dispose();
            cm.openNpc(9100000, "jiezhi0");
            break;

        case 11:
            //放大镜商城
            cm.dispose();
            cm.openNpc(1013102, "shanhaipifu");
            break;

        case 12:
            //游戏商店
            cm.dispose();
            cm.openNpc(9070004, "shanhaipifu");
            break;

        case 13:
            //回收
            cm.dispose();
            cm.openNpc(9900002, 14);
            break;

        case 14:
            //回收
            cm.dispose();
            cm.openNpc(9120106, 4);
            break;

        case 15:
            //解锁
            if (cm.itemQuantity(4033647) >=50){
            cm.dispose();
            cm.openNpc(9900002, 155);
cm.worldSpouseMessage(0x15,"[解锁装备] 土豪~！"+ cm.getChar().getName() +"  在赵云处打开了解锁装备NPC，大家快去打劫他(她)！");
			}else{
                cm.sendOk("需要50个 #v4033647# #z4033647# 才能打开解锁装备！");
		cm.dispose();
            }
            break;

        case 16:
            //回收
            cm.dispose();
            cm.openNpc(9070004, 299);
            break;

        case 17:
            //回收
            cm.dispose();
            cm.openNpc(9900002, 156);
            break;

        case 19:
            //回收
            cm.dispose();
            cm.openNpc(9070004, 252);
            break;

        case 20:
            //回收
            cm.dispose();
            cm.openNpc(9900003, 104);
            break;

        case 21:
            //回收
            cm.dispose();
            cm.openNpc(9900003, 7);
            break;

        case 22:
            //回收
            cm.dispose();
            cm.openNpc(9900003, 8);
            break;

        case 18:
            //回收
            cm.dispose();
            cm.openNpc(9070004, 251);
            //cm.sendOk("#b使用#z2430979# #v2430979#可直接提升到#k#r251#k#b级，方便转身使用。\r\n#e转身找市场枫叶募捐箱，我要转身，转身1次能力点+100 以此类推！#n\r\n");
            break;
        }
    }
}
