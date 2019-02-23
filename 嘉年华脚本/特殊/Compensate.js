/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：补偿领取
 *  @Author Kent 
 */


var status = -1;


function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {

        if (cm.checkCreated("2015-09-25")) {
            if (cm.getEventCount("补偿", 1) < 1) {
                if (cm.canHold()) {
                    cm.gainItemPeriod(5210000, 1, 24 * 3600000);
                    cm.setEventCount("补偿", 1);
                    cm.sendOk("已领取完毕");
                    cm.dispose();
                } else {
                    cm.sendOk("请清理背包,以获得补偿!!");
                    cm.dispose();
                }
            } else {
                cm.sendOk("你已经领取了,一个帐号只有一次机会!");
                cm.dispose();
            }
        } else {
            cm.sendOk("你不满足要求!");
            cm.dispose();
        }
    } else {
        cm.dispose();
    }
}

