/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  @Author Kent 
 */
﻿var status;
var sel;

function start() {
    status = -1;
    action(1, 0, 0);
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
            cm.sendNext("使用托德之锤的基本条件已经在#e[什么是托德之锤? ]#n中进行了说明, 但是除了这些情况之外, 还存在无法使用托德之锤的情况. ");
            break;
        case 1:
            cm.sendNextPrev("以下装备无法使用托德之锤#r. #k\r\n\r\n#e1.#n拥有#r固定潜在属性#k的装备. \r\n#e2.#n #r有期限#k的装备\r\n#e3.#n #r现金#k装备\r\n#e4.#n #r极真#k装备\r\n#e5.#n 使用了#r惊人装备强化卷轴#k的装备\r\n#e6.#n #r不可以卷轴升级的#k装备\r\n#e7.#n 拥有#r固有技能#k的装备\r\n#e8.#n #r登出时消失的#k装备\r\n#e9.#n #r无法添加潜在属性的#k装备\r\n#e10.#n #r拉比斯/拉兹丽#k");
            break;
        case 2:
            cm.dispose();
            break;
    }
}
