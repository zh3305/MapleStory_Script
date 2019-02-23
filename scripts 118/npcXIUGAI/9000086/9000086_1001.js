var status = 0;
var dsa = "";

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

        dsa += "#r ┈┈┈━═☆#i4251202##r   万能商店   #i4251202# #r☆═━┈┈┈ \r\n\r\n#r";

        var selStr = dsa + "#r" + cm.getVipname() + " #r#h # #k您好！\r\n请选择您需要的进入的商店:\r\n#r#L0#枫翼杂货商店#l  #L1#枫翼卷轴商店#l   #L2#枫翼高级商店#l   \r\n#d#L3#双弩精灵商店#l  #L4#怪盗幻影商店#l   #L5#恶魔猎手商店#l\r\n#b#L6#冒险家  商店#l  #L7#能力手册商店#l   #L8#火炮手  商店#l  \r\n#L9#暗影双刀商店#l  #L10#龙的传人商店#l   #L11#龙＆战神商店#l  \r\n\r\n#k  以下是兑换商店入口：#b\r\n#L20#枫  叶  商店#l  #L21#枫叶珠  商店#l   #L22#枫纪念币商店#l  \r\n#L23#正义币  商店#l  #L24#传说币  商店#l   #L25#8 纪念币商店#l  \r\n#L26#狮子币  商店#l  #L27#外星币  商店#l   #L28#征服者币商店#l \r\n "; 
        cm.sendSimple(selStr);

    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
	    cm.openShop(100000);
            break;
        case 1:
            cm.dispose();
	    cm.openShop(100001);
            break;
        case 2:
            cm.dispose();
            cm.openShop(100002);
            break;

        case 3:
            cm.dispose();
            cm.openShop(100003);
            break;
        case 4:
            cm.dispose();
            cm.openShop(100004);
            break;
        case 5:
            cm.dispose();
            cm.openShop(100005);
            break;

        case 6:
            cm.dispose();
            cm.openShop(100006);
            break;
        case 7:
            cm.dispose();
            cm.openShop(100007);
            break;
        case 8:
            cm.dispose();
            cm.openShop(100008);
            break;

        case 9:
            cm.dispose();
            cm.openShop(100009);
            break;
        case 10:
            cm.dispose();
            cm.openShop(100010);
            break;
        case 11:
            cm.dispose();
            cm.openShop(100011);
            break;

        case 20:
            cm.dispose();
            cm.openShop(100020);
            break;
        case 21:
            cm.dispose();
            cm.openShop(100021);
            break;
        case 22:
            cm.dispose();
            cm.openShop(100022);
            break;

        case 23:
            cm.dispose();
            cm.openShop(100023);
            break;
        case 24:
            cm.dispose();
            cm.openShop(100024);
            break;
        case 25:
            cm.dispose();
            cm.openShop(100025);
            break;

        case 26:
            cm.dispose();
            cm.openShop(100026);
            break;
        case 27:
            cm.dispose();
            cm.openShop(100027);
            break;
        case 28:
            cm.dispose();
            cm.openShop(100028);
            break;



        }
    }
}