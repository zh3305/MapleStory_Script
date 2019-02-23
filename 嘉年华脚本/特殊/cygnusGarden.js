/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：BOSS 希纳斯 
 *  @Author Kent 
 */

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        if (status == 0) {
            var text = "";
            text = "#e#n#b#h0# #k前方就是#b希纳斯#k的庭院了,那么你想干嘛???\r\n\r\n";//\r\n2、参加远征队必须有#b#t4032923##k才可以进行。\r\n";
            text += "#L1##b前往#b希纳斯庭院#k#l\r\n";
            //text += "#L2##b购买#v4032923##z4032923# (每日2次/3000W金币) #k#l\r\n";
            cm.sendSimple(text);
        } else if (selection == 1) {
            //if (cm.haveItem(4032923, 1)) {
            // cm.gainItem(4032923, -1);
            cm.warp(271040000, 0);
            //} else {
            //cm.sendOk("你没有#b#t4032923##k,无法前往#b希纳斯#k殿堂入口。");
            //}
            cm.dispose();
        } else if (selection == 2) {
            if (cm.getMeso() < 30000000) {
                cm.sendOk("购买失败,你没有足够的金币。\r\n\r\n购买该项目需要支付3000W金币。\r\n\r\n账户金币:" + cm.getMeso() + "");
            } else if (cm.getSpace(3) < 1) {
                cm.sendOk("购买失败。\r\n\r\n背包其他栏空间2个以上才可以购买。");
            } else if (!cm.canHold(4032923, 1)) {
                cm.sendOk("你已经有了#v4032923##z4032923#,请不要重复购买。");
            } else if (cm.getPQLog("梦之钥匙") < 2) {
                cm.setPQLog("梦之钥匙");
                cm.gainMeso(-30000000);
                cm.gainItem(4032923, 1, 1);
                cm.sendOk("恭喜您购买成功!!!");
            } else {
                cm.sendOk("购买失败。\r\n\r\n你今天已经购买过了,每日只能金币购买2次。");
            }
            cm.dispose();
        }
    }
}
