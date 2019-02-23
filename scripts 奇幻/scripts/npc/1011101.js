/* 点卷商店 */

var status = 0;
var eff ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
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
        var selStr = "    #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##k 金币:#r "+ MoneyFormat("" + cm.getMeso() +"") +"#k   #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0# 抵用卷: #r"+ MoneyFormat("" + cm.getNX(2) + "") +"#k\r\n #r#e#L2#"+eff+" 出售物品#l #L1#"+eff+" 银行存款#l #L6#"+eff+" 开店取货#l\r\n #r#e#L3#"+eff+" 杂货商店#l #L5#"+eff+" 新手武器#l #L4#"+eff+" 副手装备#l#b\r\n #L7#"+eff+" 白色兑换#l #L8#"+eff+" 紫金兑换#l #L9#"+eff+" 专属兑换#l\r\n #L10#"+eff+" 风暴兑换#l #L11#"+eff+" 外星兑换#l #L12#"+eff+" 革命兑换#l\r\n #L13#"+eff+" 贝勒兑换#l #L14#"+eff+" 暴君兑换#l #L15#"+eff+" 春节兑换#l\r\n #L16#"+eff+" 变身药水#l #L17#"+eff+" 运动兑换#l #L18#"+eff+" 金币卷轴#l\r\n #L19#"+eff+" 抵用兑换#l #L20#"+eff+" 征服兑换#l #L21#"+eff+" 技能手册#l    \r\n ";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
            cm.dispose();
            cm.openNpc(9310144, 17); //赞助理财
            break;
	        case 1:
            cm.dispose();
            cm.openNpc(9900003, 14); //银行存款
            break;
			case 2:
            cm.dispose();
            cm.openShop(1033003); //出售物品
            break;
			case 3:
            cm.dispose();
            cm.openNpc(1011101, 1); //金币杂货
            break;
			case 4:
            cm.dispose();
            cm.openNpc(1011101, 2); //金币副手
            break;
			case 5:
            cm.dispose();
            cm.openNpc(1011101, 3); //新手武器
            break;
			case 6:
            cm.dispose();
            cm.openNpc(9030000, 0); //开店取货
            break;
			case 7:
            cm.dispose();
            cm.openNpc(1011101, 4); //白色武器
            break;
			case 8:
            cm.dispose();
            cm.openNpc(1011101, 8); //紫金武器
            break;
			case 9:
            cm.dispose();
            cm.openNpc(1011101, 9); //周年商店
            break;
			case 10:
            cm.dispose();
            cm.openNpc(1011101, 10); //风暴商店
            break;
			case 11:
            cm.dispose();
            cm.openNpc(1011101, 11); //外星商店
            break;
			case 12:
            cm.dispose();
            cm.openNpc(1011101, 12); //革命商店
            break;
			case 13:
            cm.dispose();
            cm.openNpc(1011101, 13); //贝勒商店
            break;
			case 14:
            cm.dispose();
            cm.openNpc(1011101, 14); //暴君商店
            break;
			case 15:
            cm.dispose();
            cm.openNpc(9310144, 1); //春节商店
            break;
			case 16:
            cm.dispose();
            cm.openNpc(9010030, 0); //变身药水
            break;
			case 17:
            cm.dispose();
            cm.openNpc(1011101, 17); //运动兑换
            break;
			case 18:
            cm.dispose();
            cm.openNpc(1011101, 18); //金币卷轴
            break;
			case 19:
            cm.dispose();
            cm.openNpc(9900003, 16); //抵用商城
            break;
			case 20:
            cm.dispose();
            cm.openNpc(1011101, 20); //征服兑换
            break;
			case 21:
            cm.dispose();
            cm.openNpc(1011101, 21); //技能手册
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
