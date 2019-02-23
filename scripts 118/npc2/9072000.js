/* 教官奥斌 - 飞机租凭NPC*/

var status = 0;
var sel;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.sendSimple("乘坐飞机在天空中飞行吧。这会让你的心情变得畅快！我虽然年纪大了，但是我可以告诉你在天上飞的方法。#b\r\n\r\n#L0#我想租赁飞机。#l\r\n#L1#请为我说明一下飞机。#l\r\n#L2#飞机有哪些种类呢？#l");
    } else if (status == 1) {
        if (selection == 0) {
            cm.sendSimple("你想租赁什么飞机呢？\r\n#b\r\n#L0# #fSkill/8000.img/skill/80001027/iconMouseOver#木飞机（1天）#r10000金币#b#l\r\n#L1# #fSkill/8000.img/skill/80001027/iconMouseOver#木飞机（7天）#r50000金币#b#l\r\n#L2# #fSkill/8000.img/skill/80001028/iconMouseOver#红飞机（1天）#r30000金币#b#l\r\n#L3# #fSkill/8000.img/skill/80001028/iconMouseOver#红飞机（7天）#r150000金币#b#l");
        } else if (selection == 1) {
            status = 4;
            cm.sendNext("飞机是什么？飞机是冒险岛世界的最新交通工具。和其他骑宠一样，可以乘坐飞机来往于各地之间。但是飞机可以在不同大陆间飞行。");
        } else if (selection == 2) {
            cm.sendOk("可以租赁的飞机有性能普通、价格便宜的#b木飞机#k，以及价格略贵但可以使大陆间移动时间缩短2分钟的#b红飞机#k。你可以选择自己想要的种类。");
            cm.dispose();
        }
    } else if (status == 2) {
        cm.sendOk("暂不支持飞机的租赁");
        cm.dispose();
    } else if (status == 3) {
        cm.dispose();
    } else if (status == 4) {
        cm.sendNext("飞机是什么？飞机是冒险岛世界的最新交通工具。和其他骑宠一样，可以乘坐飞机来往于各地之间。但是飞机可以在不同大陆间飞行。");
    } else if (status == 5) {
        cm.sendNextPrev("不是所有大陆都可以飞行。只能从#b天空之城#k飞往#b金银岛、圣地、埃德尔斯坦、玩具城、阿里安特、武陵、神木村#k。当然也可以反方向飞行。此外在#b金银岛#k和#b埃德尔斯坦#k之间也可以飞行。其他的地方都太危险，无法飞行。希望你能记住。");
    } else if (status == 6) {
        cm.sendNextPrev("想乘坐飞机到其他大陆去的话，只要和升降场上的#b售票员#k对话就行。");
    } else if (status == 7) {
        cm.sendPrev("就是这些，有问题吗？");
        cm.dispose();
    }
}