/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  
 *  NPC名称:  佩森	
 *  功能： 传送
 *  @Author Kent 
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status <= 1) {
            cm.sendNext("看来你在这里有些事还没有办完嘛？身心疲惫的时候到这黄金海滩休息放松一下也不错。");
            cm.safeDispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        cm.sendSimple("你听说过的海滩，一个壮观的海洋称为黄金海滩，位于附近的明珠港？我可以带你过去.但是你必须得支付#b1500 金币#k或者你有贵宾卡我可以免费带你过去, 怎么样？\r\n\r\n#L0##b支付金币前往黄金沙滩#l\r\n#L1#使用贵宾卡#l\r\n#L2#如何获得贵宾卡#l");
    } else if (status == 1) {
        if (selection == 0) {
            cm.sendYesNo("确定支付#r1500金币#k前往黄金沙滩吗？");
        } else if (selection == 1) {
            status = 2;
            cm.sendYesNo("确定使用#r贵宾卡#k前往黄金沙滩吗？");
        } else if (selection == 2) {
            status = 4;
            cm.sendNext("你一定很好奇 #b贵宾卡吧？#k. 哈哈，这是可以理解的。贵宾卡是前往黄金海滩一个项目，只要有你在，你可以你对弗洛里纳海滩免费。这是一个罕见的项目，即使我们买了这些，但不幸的是我失去了我几个星期前在我珍贵的暑假。");
        }
    } else if (status == 2) {
        if (cm.getMeso() < 1500) {
            cm.sendNext("什么~ 没钱还想去? 你真个奇怪的家伙!...");
            cm.safeDispose();
        } else {
            cm.gainMeso(-1500);
            cm.saveLocation("FLORINA");
            cm.warp(120030000, 0);
            cm.dispose();
        }
    } else if (status == 3) {
        if (cm.haveItem(4031134)) {
            cm.saveLocation("FLORINA");
            cm.warp(120030000, 0);
            cm.dispose();
        } else {
            cm.sendNext("什么~你没有贵宾卡？那我就不能帮你了！");
            cm.safeDispose();
        }
    } else if (status == 4) {
        cm.sendNext("你一定很好奇 #b贵宾卡吧？#k. 哈哈，这是可以理解的。贵宾卡是前往黄金海滩一个项目，只要有你在，你可以你对弗洛里纳海滩免费。这是一个罕见的项目，即使我们买了这些，但不幸的是我失去了我几个星期前在我珍贵的暑假。");
    } else if (status == 5) {
        cm.sendNextPrev("我回来了，没有它，它只是感觉不拥有它。希望有人把它捡起来，把它放在一个安全的地方。无论如何，这是我的故事，谁知道，你可以把它捡起来，把它很好的利用。如果你有什么问题，尽管问我！");
    } else if (status == 6) {
        cm.dispose();
    }
}
