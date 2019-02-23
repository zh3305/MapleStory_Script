/* 点卷商店 */

var status = 0;
var eff ="#fUI/Basic/BtHide3/mouseOver/0#";
var zzz ="#fEffect/CharacterEff/1082565/0/0#";

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
        var selStr = "你好，欢迎来到China冒险岛,我是各种商城物品贩卖商\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##k点卷:#r "+ MoneyFormat("" + cm.getPlayer().getCSPoints(1) + "") +" #k#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#抵用卷: #r"+ MoneyFormat("" + cm.getNX(2) + "") +"#k\r\n        #L18##r#e购买超值理财！#n#k\r\n\r\n#L4##b" + eff + "推荐☆购买稀有#r[点装,随时更新]#l #L1#1 #L2#1 #L3#1 #L4#1 #L5#1 #L6#1 #L7#1 #L8#1 #L9#1 #L10#1 #L11#1 #L12#1 #L13#1 #L14#1  #L15#1  #L16#1  #L17#1  #L18#1  #L19#1  #L20#1\r\n ";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(9900002, 11); //双倍道具
            break;
	    case 1:
            cm.dispose();
            cm.openNpc(9900002, 42); //戒指
            break;
        case 4:
            cm.dispose();
            cm.openNpc(9900002, 6); //绝版点装
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
            cm.openNpc(9900002, 1301); //卷轴商店
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
	//case 16:
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
