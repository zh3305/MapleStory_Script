/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  @Author Kent 
 */
﻿var status;

function start() {
    status = -1;
    cm.sendSimple("你有什么想知道的吗? \r\n\r\n#b#L0#额外属性提取/传授方式#l\r\n#b#L1#卷轴升级提取/传授方式#l\r\n#b#L2#潜在(附加)属性提取/传授方式#l\r\n#b#L3#星之力强化提取/传授方式#l\r\n#b#L4#灵魂提取/传授方式#l\r\n#b#L5#其它事项#l")
}

function action(mode, type, selection) {

    if (mode == 0) {
        cm.dispose();
        return;
    } else if (mode == 1) {
        status++;
    } else {
        status--;
    }

    switch (selection) {
        case 0:
            cm.sendOk("#e[额外属性]#n\r\n\r\n-不#r提取#k/#b传授#k. #k\r\n-直接保留#b接受传授的装备#k的额外属性#b#k. \r\n");
            break;
        case 1: 
            cm.sendOk("#e[卷轴升级]#n\r\n\r\n-不#r提取#k. \r\n\r\n-与#r进行提取的装备#k使用了哪种卷轴无关, 只要#b接受传授的装备#k还存在可升级次数,  就会全部消耗#r100%卷轴#k对道具进行强化. \r\n\r\n-不想要100%卷轴强化时, 在完成#b接受传授的装备#k的卷轴升级后使用托德之锤. \r\n");
            break;
        case 2:
            cm.sendOk("#e[潜在属性(附加)]\r\n\r\n-#n到#bA级#k之前原样#r提取#k/#b传授#k. \r\n\r\n-#r进行提取的装备#k的潜在属性在#rS级以上#k时, 等级降到#rA级#k. #k\r\n\r\n-就算等级下降, 属性的种类也保持为#b相同种类#k. \r\n\r\n-只不过, 当A级#b没有相应种类的属性#k, 又或者#b相应部位无法进行添加#k时, 会在相应属性范围内#r随机重新设置#k. ");
            break;
        case 3:
            cm.sendOk("#e[星之力强化等级]#n\r\n\r\n-按照比#r进行提取的装备的星之力强化等级#k低一个等级的数值进行#r提取#k和#b传授#k. \r\n\r\n-当#b接受传授的装备#k进行了星之力强化时, 用提取来#b替换. #k\r\n");
            break;
        case 4:
            cm.sendOk("#e[灵魂]#n\r\n\r\n-按照原样#r提取#k/#b传授#k. \r\n\r\n-与#b接受传授的装备#k的灵魂或者是否使用灵魂附魔石\r\n");
            break;
        case 5:
            cm.sendOk("#e[可交换状态]、[剪刀使用次数]等#n\r\n\r\n-不传授#r进行提取的装备#k的固有状态. \r\n\r\n-#b接受传授的装备#k的内容#b保持原样. #k\r\n");
            break;
    }
    cm.dispose();
}
