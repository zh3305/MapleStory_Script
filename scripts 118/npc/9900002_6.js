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
    if (status == 0) {
        var selStr = "您好，欢迎来到MapleWing:\r\n\r\n#b#L0#购买华尔兹丝带贝雷帽#v1002846#   114000点卷#l\r\n#L1#购买水兵服(男) #v1050152#   99000点卷#l\r\n#L2#购买水兵服(女) #v1051180#   99000点卷#l\r\n#L3#购买小绿叶T恤#v1042104#   114000点卷#l\r\n#L4#购买小红叶T恤#v1042105#   114000点卷#l\r\n#L5#购买粉红兔耳帽#v1002845#   114000点卷#l\r\n#L6#购买草莓baby装#v1052224#   99000点卷#l\r\n#L7#购买可可香蕉#v1702228#   114000点卷#l\r\n#L8#购买狸毛护耳#v1002721#   114000点卷#l\r\n#L9#购买手工编织发夹#v1002568#   158400点卷#l\r\n#L10#购买绚丽彩虹#v1702155#   99000点卷#l\r\n#L11#购买彩虹条背心#v1042142#   99000点卷#l\r\n#L12#购买嫩绿休闲短裤#v1062093#   99000点卷#l\r\n#L13#购买彩虹星环绕戒指#v1112904#   99000点卷#l\r\n#L14#购买巨星蛋糕吊带#v1041142#   99000点卷#l\r\n#L15#购买巨星粉色短裙#v1061148#   99000点卷#l\r\n#L16#购买洛丽波板糖#v1702182#   99000点卷#l\r\n#L17#购买丝带发箍(红色) #v1002888#   114000点卷#l\r\n#L18#购买丝带发箍(蓝色)#v1002890#   114000点卷#l\r\n#L19#购买罗丽粉色娃娃套服#v1052200#   99000点卷#l\r\n#L20#购买搞怪鳄鱼#v1702208#   99000点卷#l\r\n#L21#购买小熊熊可爱帽#v1002863#   99000点卷#l\r\n#L22#购买巴西足球服No.9#v1052061#   66500点卷#l\r\n#L23#购买法国足球服No.14#v1052059#   66500点卷#l\r\n#L24#购买胡萝卜兔爆炸头#v1003207#   79200点卷#l\r\n#L25#购买蓝色蝴蝶结手提包#v1702285#   74000点卷#l\r\n#L26#购买好白的牙#v1012131#   74000点卷#l\r\n#L27#购买杯具#v1702302#   158400点卷#l\r\n#L28#购买喜洋洋拖鞋#v1072337#   99000点卷#l\r\n#L29#购买水墨花聊天戒指#v1112238#   99000点卷#l\r\n#L52#水墨花名片戒指#v1112135#   114000点卷#l\r\n#L30#购买樱花棒#v1702261#   99000点卷#l\r\n#L31#购买网球拍#v1702091#   79200点卷#l\r\n#L32#购买闪亮圣诞树#v1702168#   99000点卷#l\r\n#L33#购买小狐狸#v1003051#   79200点卷#l\r\n#L34#购买圣诞装饰帽#v1003048#   79200点卷#l\r\n #L53#购买皇家海军帽#v1002995#   100000点卷#l\r\n #L35#购买嫦娥发式#v1003012#   79200点卷#l\r\n#L36#购买圣诞红发夹#v1002876#   99000点卷#l\r\n#L37#购买南瓜棒球帽#v1002839#   79200点卷#l\r\n#L38#购买鬼娃娃帽#v1001048#   79200点卷#l\r\n#L39#购买嫦娥披风#v1102225#   99000点卷#l\r\n#L40#购买九尾披风#v1102217#   79200点卷#l\r\n#L41#购买傀儡枷锁#v1102157#   79200点卷#l\r\n#L42#购买圣诞女孩子服#v1051131#   99000点卷#l\r\n#L43#购买寂寞单身戒指#v1112916#   114000点卷#l\r\n#L44#购买鹿鼻子#v1012179#   79200点卷#l\r\n#L45#购买玫瑰红晚宴裙1#v1051152#   114000点卷#l\r\n#L46#购买可乐名片戒指#v1112118#   114000点卷#l\r\n#L47#购买可乐(Red) 名片戒指#v1112119#   114000点卷#l\r\n#L48#购买可乐(White) 名片戒指#v1112120#   114000点卷#l\r\n#L49#购买可乐聊天戒指#v1112228#   114000点卷#l\r\n#L50#购买可乐(Red)聊天戒指#v1112229#   114000点卷#l\r\n#L51#购买可乐(White)聊天戒指#v1112230#   114000点卷#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.getPlayer().getCSPoints(1)>=114000) { 
	    cm.gainNX(-114000);
	    cm.gainItem(1002846,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足114000.");
		cm.dispose();
            }
            break;
        case 1:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1050152,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足99000.");
		cm.dispose();
            }
            break;
        case 2:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1051180,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足99000.");
		cm.dispose();
            }
            break;
        case 3:
            if (cm.getPlayer().getCSPoints(1)>=114000) { 
	    cm.gainNX(-114000);
	    cm.gainItem(1042104,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足114000.");
		cm.dispose();
            }
            break;
        case 4:
            if (cm.getPlayer().getCSPoints(1)>=114000) { 
	    cm.gainNX(-114000);
	    cm.gainItem(1042105,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足114000.");
		cm.dispose();
            }
            break;
        case 5:
            if (cm.getPlayer().getCSPoints(1)>=114000) { 
	    cm.gainNX(-114000);
	    cm.gainItem(1002845,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足114000.");
		cm.dispose();
            }
            break;
        case 6:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1052224,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足99000.");
		cm.dispose();
            }
            break;
        case 7:
            if (cm.getPlayer().getCSPoints(1)>=114000) { 
	    cm.gainNX(-114000);
	    cm.gainItem(1702228,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足114000.");
		cm.dispose();
            }
            break;
        case 8:
            if (cm.getPlayer().getCSPoints(1)>=114000) { 
	    cm.gainNX(-114000);
	    cm.gainItem(1002721,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足114000.");
		cm.dispose();
            }
            break;
        case 9:
            if (cm.getPlayer().getCSPoints(1)>=158400) { 
	    cm.gainNX(-158400);
	    cm.gainItem(1002568,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足158400.");
		cm.dispose();
            }
            break;
        case 10:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1702155,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足99000.");
		cm.dispose();
            }
            break;
        case 11:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1042142,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足99000.");
		cm.dispose();
            }
            break;
        case 12:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1062093,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足99000.");
		cm.dispose();
            }
            break;
        case 13:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1112904,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足99000.");
		cm.dispose();
            }
            break;
        case 14:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1041142,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足99000.");
		cm.dispose();
            }
            break;
        case 15:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1061148,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足99000.");
		cm.dispose();
            }
            break;
        case 16:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1702182,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足99000.");
		cm.dispose();
            }
            break;
        case 17:
            if (cm.getPlayer().getCSPoints(1)>=114000) { 
	    cm.gainNX(-114000);
	    cm.gainItem(1002888,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足114000.");
		cm.dispose();
            }
            break;
        case 18:
            if (cm.getPlayer().getCSPoints(1)>=114000) { 
	    cm.gainNX(-114000);
	    cm.gainItem(1002890,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足114000.");
		cm.dispose();
            }
            break;
        case 19:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1052200,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足99000.");
		cm.dispose();
            }
            break;
        case 20:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1702208,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足99000.");
		cm.dispose();
            }
            break;
        case 21:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1002863,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足99000.");
		cm.dispose();
            }
            break;
        case 22:
            if (cm.getPlayer().getCSPoints(1)>=66500) { 
	    cm.gainNX(-66500);
	    cm.gainItem(1052061,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足66500.");
		cm.dispose();
            }
            break;
        case 23:
            if (cm.getPlayer().getCSPoints(1)>=66500) { 
	    cm.gainNX(-66500);
	    cm.gainItem(1052059,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足66500.");
		cm.dispose();
            }
            break;
        case 24:
            if (cm.getPlayer().getCSPoints(1)>=79200) { 
	    cm.gainNX(-79200);
	    cm.gainItem(1003207,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足79200.");
		cm.dispose();
            }
            break;
        case 25:
            if (cm.getPlayer().getCSPoints(1)>=74000) { 
	    cm.gainNX(-74000);
	    cm.gainItem(1702285,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足74000.");
		cm.dispose();
            }
            break;
        case 26:
            if (cm.getPlayer().getCSPoints(1)>=74000) { 
	    cm.gainNX(-74000);
	    cm.gainItem(1012131,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足74000.");
		cm.dispose();
            }
            break;
        case 27:
            if (cm.getPlayer().getCSPoints(1)>=158400) { 
	    cm.gainNX(-158400);
	    cm.gainItem(1702302,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足158400.");
		cm.dispose();
            }
            break;
        case 28:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1072337,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足99000.");
		cm.dispose();
            }
            break;
        case 29:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1112238,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足99000.");
		cm.dispose();
            }
            break;
        case 30:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1702261,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足99000.");
		cm.dispose();
            }
            break;
        case 31:
            if (cm.getPlayer().getCSPoints(1)>=79200) { 
	    cm.gainNX(-79200);
	    cm.gainItem(1702091,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足79200.");
		cm.dispose();
            }
            break;
        case 32:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1702168,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足99000.");
		cm.dispose();
            }
            break;
        case 33:
            if (cm.getPlayer().getCSPoints(1)>=79200) { 
	    cm.gainNX(-79200);
	    cm.gainItem(1003051,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足79200.");
		cm.dispose();
            }
            break;
        case 34:
            if (cm.getPlayer().getCSPoints(1)>=79200) { 
	    cm.gainNX(-79200);
	    cm.gainItem(1003048,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足79200.");
		cm.dispose();
            }
            break;
        case 35:
            if (cm.getPlayer().getCSPoints(1)>=79200) { 
	    cm.gainNX(-79200);
	    cm.gainItem(1003012,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足79200.");
		cm.dispose();
            }
            break;
        case 36:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1002876,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足99000.");
		cm.dispose();
            }
            break;
        case 37:
            if (cm.getPlayer().getCSPoints(1)>=79200) { 
	    cm.gainNX(-79200);
	    cm.gainItem(1002839,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足79200.");
		cm.dispose();
            }
            break;
        case 38:
            if (cm.getPlayer().getCSPoints(1)>=79200) { 
	    cm.gainNX(-79200);
	    cm.gainItem(1001048,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足79200.");
		cm.dispose();
            }
            break;
        case 39:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1102225,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足99000.");
		cm.dispose();
            }
            break;
        case 40:
            if (cm.getPlayer().getCSPoints(1)>=79200) { 
	    cm.gainNX(-79200);
	    cm.gainItem(1102217,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足79200.");
		cm.dispose();
            }
            break;
        case 41:
            if (cm.getPlayer().getCSPoints(1)>=79200) { 
	    cm.gainNX(-79200);
	    cm.gainItem(1102157,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足79200.");
		cm.dispose();
            }
            break;
        case 42:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1051131,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足99000.");
		cm.dispose();
            }
            break;
        case 43:
            if (cm.getPlayer().getCSPoints(1)>=114000) { 
	    cm.gainNX(-114000);
	    cm.gainItem(1112916,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足114000.");
		cm.dispose();
            }
            break;
        case 44:
            if (cm.getPlayer().getCSPoints(1)>=79200) { 
	    cm.gainNX(-79200);
	    cm.gainItem(1012179,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足79200.");
		cm.dispose();
            }
            break;
        case 45:
            if (cm.getPlayer().getCSPoints(1)>=114000) { 
	    cm.gainNX(-114000);
	    cm.gainItem(1051152,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足114000.");
		cm.dispose();
            }
            break;
        case 46:
            if (cm.getPlayer().getCSPoints(1)>=114000) { 
	    cm.gainNX(-114000);
	    cm.gainItem(1112118,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足114000.");
		cm.dispose();
            }
            break;
        case 47:
            if (cm.getPlayer().getCSPoints(1)>=114000) { 
	    cm.gainNX(-114000);
	    cm.gainItem(1112119,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足114000.");
		cm.dispose();
            }
            break;
        case 48:
            if (cm.getPlayer().getCSPoints(1)>=114000) { 
	    cm.gainNX(-114000);
	    cm.gainItem(1112120,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足114000.");
		cm.dispose();
            }
            break;
        case 49:
            if (cm.getPlayer().getCSPoints(1)>=114000) { 
	    cm.gainNX(-114000);
	    cm.gainItem(1112228,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足114000.");
		cm.dispose();
            }
            break;
        case 50:
            if (cm.getPlayer().getCSPoints(1)>=114000) { 
	    cm.gainNX(-114000);
	    cm.gainItem(1112229,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足114000.");
		cm.dispose();
            }
            break;
        case 51:
            if (cm.getPlayer().getCSPoints(1)>=114000) { 
	    cm.gainNX(-114000);
	    cm.gainItem(1112230,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足114000.");
		cm.dispose();
            }
            break;
        case 52:
            if (cm.getPlayer().getCSPoints(1)>=99000) { 
	    cm.gainNX(-99000);
	    cm.gainItem(1112135,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足99000.");
		cm.dispose();
            }
            break;
        case 53:
            if (cm.getPlayer().getCSPoints(1)>=100000) { 
	    cm.gainNX(-100000);
	    cm.gainItem(1002995,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足100000.");
		cm.dispose();
            }
            break;
        }
    }
}