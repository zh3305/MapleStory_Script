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
        var selStr = "购买必成卷请空24个消耗格子出来,否则会出错！:\r\n\r\n#b#L0#购买混沌卷轴包#l\r\n#L1#购买必成卷轴包#l\r\n#L2#购买#v2340000#祝福卷轴*99#l\r\n#L3#购买#v2049703#A级潜能附加卷轴*5#l";
          cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
    cm.gainItem(2049117,99);
    cm.gainItem(2049116,99);
    cm.gainItem(2049119,99);
    cm.gainItem(2049124,99);
     cm.sendOk("购买成功.");
            cm.dispose();
            break;
        case 1:
    cm.gainItem(2040303,99);
    cm.gainItem(2040506,99);
    cm.gainItem(2040709,99);
    cm.gainItem(2040710,99);
    cm.gainItem(2043003,99);
    cm.gainItem(2043103,99);
    cm.gainItem(2043203,99);
    cm.gainItem(2043303,99);
    cm.gainItem(2043703,99);
    cm.gainItem(2043803,99);
 cm.gainItem(2044003,99);
 cm.gainItem(2044019,99);
 cm.gainItem(2044103,99);
 cm.gainItem(2044203,99);
 cm.gainItem(2044303,99);
 cm.gainItem(2044403,99);
 cm.gainItem(2044503,99);
 cm.gainItem(2044603,99);
 cm.gainItem(2044703,99);
 cm.gainItem(2044815,99);
 cm.gainItem(2044908,99);
 cm.gainItem(2045202,99);
 cm.gainItem(2040816,99);
 cm.gainItem(2040807,99);
    cm.sendOk("购买成功.");
            cm.dispose();
            break;
        case 2:
    cm.gainItem(2340000,99);
    cm.sendOk("购买成功.");
            cm.dispose();
            break;
        case 3:
    cm.gainItem(2049703,5);
    cm.sendOk("购买成功.");
            cm.dispose();
            break;
        }
    }
}
