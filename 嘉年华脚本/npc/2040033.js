/*
 Neru - Ludibrium : Ludibrium Pet Walkway (220000006)
 */

        var status = 0;

function start() {
    status = -1;
    if (cm.isQuestActive(200122)) {
        eventJump();
    } else {
        action(1, 0, 0);
    }
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        if (cm.haveItem(4031128)) {
            cm.sendNext("Eh, that's my brother's letter! Probably scolding me for thinking I'm not working and stuff...Eh? Ahhh...you followed my brother's advice and trained your pet and got up here, huh? Nice!! Since you worked hard to get here, I'll boost your intimacy level with your pet.");
        } else {
            cm.sendOk("My brother told me to take care of the pet obstacle course, but ... since I'm so far away from him, I can't help but wanting to goof around ...hehe, since I don't see him in sight, might as well just chill for a few minutes.");
            cm.dispose();
        }
    } else if (status == 1) {
        if (cm.getPlayer().getPets() == null) {
            cm.sendNextPrev("Hmmm ... did you really get here with your pet? These obstacles are for pets. What are you here for without it?? Get outta here!");
            cm.dispose();
        } else {
            cm.gainItem(4031128, -1);
            cm.gainClosenessAll(4);
            cm.sendNextPrev("What do you think? Don't you think you have gotten much closer with your pet? If you have time, train your pet again on this obstacle course...of course, with my brother's permission.");
            cm.dispose();
        }
    }
}


function eventJump() {
    if (cm.getEventCount("玩具跳跳") <= 0) {
        //cm.gainItem(4001126, 100);
        cm.gainItem(4001839, 500);
        cm.gainNX(2, 1500);
        cm.sendOk("恭喜你获得了500个#v4001839##b#t4001839##k以及#r1500#k点卷");
        cm.setEventCount("玩具跳跳");
        cm.forceCompleteQuest(200122);
        cm.dispose();
    } else {
        cm.sendOk("你今天已经领取过奖励了哦~每天只有一次领奖机会，可不要太贪心呢！");
        cm.dispose();
    }
}