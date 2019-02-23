/*
 夕阳制作★China冒险岛
 完成时间：2015年4月28日 16:34:19
 脚本功能：购物系统
 */

var status = 0;
var eff ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var zzz ="#fEffect/CharacterEff/1082565/0/0#";
var qqq ="#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";

//function start() {
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
        var selStr = "   #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##k 点卷:#r "+ MoneyFormat("" + cm.getPlayer().getCSPoints(1) + "") +"    #k#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0# 抵用卷: #r"+ MoneyFormat("" + cm.getNX(2) + "") +"#k\r\n#L0##b"+eff +" 购买商城宠物#l#L1#"+eff+"#b 抵用购物"+ "#l#b#L2#" + eff + " 金币购物#r#l\r\n#b#L7#" + eff + " 点卷购物#l#L8#" +eff+" 雪花购物#l#L1##b"+eff+" 特效戒指#l\r\n#L5##r" +eff +" 各类椅子#l#L17##b" +eff+ " 神奇骑宠#l#L10#" + eff + "#b 商场喇叭#l\r\n#L11#" + eff + " 极品卷轴#l\r\n#L13#" + eff + "#b 极品武器#l#L15##d" + eff + "购买极品饰品#r[强悍]#l\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(3000021, 1); //商城道具
            break;
	    case 1:
            cm.dispose();
            cm.openNpc(3000021, 2); //戒指
            break;
        case 4:
            cm.dispose();
            cm.openNpc(3000021, 3); //绝版点装
            break;
        case 5:
            cm.dispose();
            cm.openNpc(9900002, 4); //各种椅子
            break;
        case 6:
            cm.dispose();
            cm.openNpc(9900002, 9); //各种喇叭
            break;
        case 7:
            cm.dispose();
            cm.openNpc(9900002, 10); //洗点卷轴
            break;
        case 8:
            cm.dispose();
            cm.openNpc(9900002, 24); //玩具商店
            break;
        case 9:
            cm.dispose();
            cm.openNpc(9900002, 25); //骑宠商店
            break;
	case 10:
            cm.dispose();
            cm.openNpc(9900002, 9); //喇叭
            break;
	case 11:
            cm.dispose();
            cm.openNpc(9900002, 1301); //一键潜能
            break;
	case 12:
            cm.dispose();
            cm.openNpc(9900002, 28); //140级装备
            break;
	case 13:
            cm.dispose();
            cm.openNpc(9900002, 29); //150级装备
            break;
	case 14:
            cm.dispose();
            cm.openNpc(9900002, 31); //暴君装备
            break;
	case 15:
            cm.dispose();
            cm.openNpc(9900002, 32); //高级饰品
            break;			
	case 16:
            cm.dispose();
            cm.openNpc(9900002, 34); //特效戒指
            break;
	case 18:
            cm.dispose();
            cm.openNpc(9000111); //理财
            break;	
	case 17:
            cm.dispose();
            cm.openNpc(9900002, 35); //骑宠商店
            break;
    case 19:
            cm.dispose();
            cm.openNpc(9900002, 36); //抵用商店
            break;		
    case 20:
            cm.dispose();
            cm.openNpc(9900002, 88); //校园币
            break;				
			}
    }
}


function MoneyFormat(s){
	s=s.replace(/^(\d*)$/,"$1.");
	s=(s).replace(/(\d*\.\d\d)\d*/,"$1");
	s=s.replace(".",",");
	var re=/(\d)(\d{3},)/;
	while(re.test(s)){
		s=s.replace(re,"$1,$2");
	}
	s=s.replace(/,(\d\d)$/,".$1");
	s=s.replace(/^\./,"0.");
	s=s.substr(0,s.length-1);
	return s;
}
