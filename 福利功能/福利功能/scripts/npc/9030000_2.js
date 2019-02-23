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
        var selStr = "欢迎光临！:\r\n\r\n#b#L0#购买#v1012174#恐怖鬼娃的伤口#l\r\n#L1#购买 #v1112586#黑天使的祝福#l\r\n#L2#购买#v4032246#梦幻主题公园魂魄#l\r\n#L3#购买#v2022720#超级药水*99#l\r\n#L4#购买#v5062001#混沌神奇魔方*99#l";
          cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
    cm.gainItem(1012174,1);
     cm.sendOk("购买成功.");
            cm.dispose();
            break;
        case 1:
    cm.gainItem(1112586,1);
     cm.sendOk("购买成功.");
            cm.dispose();
            break;
        case 2:
    cm.gainItem(4032246,1);
     cm.sendOk("购买成功.");
            cm.dispose();
            break;
        case 3:
    cm.gainItem(2022720,99);
     cm.sendOk("购买成功.");
            cm.dispose();
            break;
        case 4:
    cm.gainItem(5062001,99);
     cm.sendOk("购买成功.");
            cm.dispose();
            break;
        }
    }
}
