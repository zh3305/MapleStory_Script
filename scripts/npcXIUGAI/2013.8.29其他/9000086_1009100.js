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
        var selStr = "#r ┈┈┈━═☆#i4005000##r  福利中心  #i4005000# #r☆═━┈┈┈ \r\n#r" + cm.getVipname() + " #r 您好！#d欢迎您进入福利中心！\r\n我们MapleWing精心为您准备了十分丰厚的福利 ！#b请选择您要需要的福利：\r\n#r#L1009100# #i4021005##r  在线福利  #i4021005##r #l #L1009101# #i4021005##r  每日福利  #i4021005# #l\r\n        #L1009102# #i4021001##r  特殊福利  #i4021001##r #l\r\n        #L1009103# #i4021007##r  VIP 福利  #i4021007##r #l\r\n\r\n#L100##e#r福利发放说明 (新人必看！)！#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {

        case 100:

         cm.sendOk("#r ┈┈━═☆#i4005000##r  福利发放说明  #i4005000# #r☆═━┈┈ \r\n\r\n#r福利是MapleWing 世界精心准备的高级待遇！以下是福利发放的具体说明：\r\b #i4021005##r  在线福利  #i4021005##r ：\r\n 每位玩家可以凭借在线积累的活跃点进行领取！\r\n其中包括：1000抵用卷、50W金币、1贡献点、1个#i5062000:#  \r\n #i4021005##r  每日福利  #i4021005# ：\r\n每位玩家一天只能领一次！\r\n其中包括 1W抵用卷、500W金币、10贡献点、1个#i4032398:#  \r\n ");
         cm.dispose();
         break;

        case 1009100:
            cm.dispose();
            cm.openNpc(9000086, 1009100);
            break;

        case 1009101:
            cm.dispose();
            cm.openNpc(9000086, 1009101);
            break;

        case 1009102:
            cm.dispose();
            cm.openNpc(9000086, 1009102);
            break;

        case 1009103:
            cm.dispose();
            cm.openNpc(9000086, 1009103);
            break;


        }
        cm.dispose();
    }
}