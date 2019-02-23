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
        var selStr = "#r ┈┈┈━═☆#i4251202##r  BOSS地图传送  #i4251202# #r☆═━┈┈┈ \r\n#r" + cm.getVipname() + " #r#h # #k您好！\r\n请选择您需要去挑战BOSS的地方  (#r手续费20W金币一次#k) :\r\n\r\n#b#L0#艰苦洞穴                -扎昆-#l\r\n#L1#生命之穴入口            -暗黑龙王-#l\r\n#L2#时间之塔隐蔽场所        -闹钟王-#l\r\n#L3#王城接见室              -狮子王-#l\r\n#L4#忘却的黄昏              -时间的宠儿品克缤-#l\r\n#L5#禁忌祭坛                -蝙蝠怪-#l\r\n#L6#希纳斯的殿堂            -黑暗希纳斯-#l\r\n#L7#黑暗祭坛                -阿卡伊勒-";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(211042200);
                cm.sendOk("1线和2线挑战普通扎昆\r\n3线挑战进阶扎昆.请您注意!\r\n祝您游戏愉快!");
            } else {
                cm.sendOk("您没有20W金币,我不能传送您过去");
            }
            break;
        case 1:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(240040600);
                cm.sendOk("您已经到达目的地.(挑战暗黑龙王需要到商场购买入场卷哦!)\r\n祝您游戏愉快!");
            } else {
                cm.sendOk("您没有20W金币,我不能传送您过去");
            }
            break;
        case 2:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(220080000);
                cm.sendOk("您已经到达目的地.(挑战闹钟需要到杂货商店购买D片哦!)\r\n祝您游戏愉快!");
            } else {
                cm.sendOk("您没有20W金币,我不能传送您过去");
            }
            break;
        case 3:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(211070000);
                cm.sendOk("您已经到达目的地.(狮子王爆高级装备哦!)\r\n祝您游戏愉快!");
            } else {
                cm.sendOk("您没有20W金币,我不能传送你过去");
            }
            break;
        case 4:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(270050000);
                cm.sendOk("您已经到达目的地.(品克缤爆永恒装备和30勇士哦!)\r\n祝您游戏愉快!");
            } else {
                cm.sendOk("您没有20W金币,我不能传送您过去");
            }
            break;
        case 5:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(105100100);
                cm.sendOk("您已经到达目的地.\r\n祝您游戏愉快!");
            } else {
                cm.sendOk("您没有20W金币,我不能传送您过去");
            }
            break;
        case 6:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(271040000);
                cm.sendOk("您已经到达目的地.\r\n祝您游戏愉快!");
            } else {
                cm.sendOk("您没有20W金币,我不能传送您过去");
            }
            break;

        case 7:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(272020110);
                cm.sendOk("您已经到达目的地.\r\n祝您游戏愉快!");
            } else {
                cm.sendOk("您没有20W金币,我不能传送您过去");
            }
            break;

        }
        cm.dispose();
    }
}