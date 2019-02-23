/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  @Author Kent 
 */
﻿var status;
var sel;

function start() {
    status = -1;
    cm.sendSimple("你有什么想要知道的吗? \r\n\r\n#b#L0#什么是托德之锤? #l\r\n#b#L1#各能力的提取/传授详细说明#l\r\n#b#L2#无法使用托德之锤的装备#l\r\n#b#L3#帮助结束#l");
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

    switch (status) {
        case 0:
            switch (selection) {
                case 0:
                    cm.sendNext("#b托德之锤#k是一种会对强化的#b低级装备的能力进行提取#k后#b传授给高级装备#k的神秘魔法锤. ");
                    break;
                case 1:
                    cm.dispose();
                    cm.openNpc(9220050, "ToadHammerHelp_Detail");
                    break;
                case 2:
                    cm.dispose();
                    cm.openNpc(9220050, "ToadHammerHelp_Unuse");
                    break;
                case 3:
                    cm.dispose();
                    break;
            }
            break;
        case 1:
            cm.sendNextPrev("但是并不是所有装备都可以使用#b托德之锤#k。\r\n只有满足#b三个#k条件的装备才可以传递能力。\r\n\r\n#e1. #n进行提取的装备的#r星之力强化#k必须进行到#r1星以上#k。\r\n#e2.#n提取/传授的道具需要有#r+1~+10#k级的差异。#k\r\n(只不过，#r99级以下#k的装备可以传授给#r+1~+20#k级)\r\n\r\n#e3.#n提取/传授只能对#r相同部位#k的装备进行。\r\n(不过，#r一套衣服和上下装#k可以相互提取/传授能力。)\r\n");
            break;
        case 2:
            cm.sendNextPrev("#b满足#k所有条件后, 就可以按照下面的顺序提取/传授装备的能力了. \r\n\r\n#e1.#n选择要#r提取能力的装备#k. \r\n\r\n#e2.#n选择要#r传授能力的装备#k. \r\n\r\n#e3.#n当接受传授的装备#r还存在可升级次数时#k, 将剩余的次数#r全部耗尽#k, 选择要强化装备的#r卷轴. #k\r\n#r(只可以选择100%卷轴, 不消耗咒语痕迹. )#k\r\n\r\n#e4.#n形成传授能力的#r装备#k/破坏提取能力的#r装备#k\r\n");
            break;
        case 3:
            cm.sendNextPrev("使用过一次托德之锤, 对装备的能力进行了#r提取/传授#k后, #r就无法再次逆转. #k\r\n\r\n一定要将#r鼠标悬停在上方的大图标#k上, 仔细确认过#r变化的能力值#k之后再做决定. \r\n\r\n如果你还想知道有关托德之锤更详细的内容, 也可以查看其它帮助, 我会亲切为你指引的. ");
            cm.dispose();
            break;
    }
}
