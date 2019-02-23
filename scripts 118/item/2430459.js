/* 粉紅色花紋游泳圈交换券 */

var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        im.dispose();
    } else {
        if (mode == 0) {
            im.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            if (im.getPlayerStat("LVL") < 0) {
                im.playerMessage("等级小于0级无法使用。");
                im.dispose();
            } else {
                im.sendSimple("你拥有#v2430459#，你想要兑换成#v1312034#么?#b\r\n#L0#我要兑换#l\r\n#L1#结束对话#l");
            }
        } else if (status == 1) {
            switch (selection) {
            case 0:
                im.gainItem(1312034,1);
                im.gainItem(2430459,-1);
                im.dispose(); 
                break;
            case 1:
                im.dispose(); 
                break;
            case 2:
                im.warp(102000000, 0);
                break;
            case 3:
                im.warp(103000000, 0);
                break;
            case 4:
                im.warp(104000000, 0);
                break
            case 5:
                im.warp(105000000, 0);
                break;
            case 6:
                im.warp(120000000, 0);
                break;
            case 7:
                im.warp(130000101, 0);
                break;
            case 8:
                im.warp(140000000, 0);
                break;
            case 9:
                im.warp(200000000, 0);
                break;
            case 10:
                im.warp(211000000, 0);
                break;
            case 11:
                im.warp(220000000, 0);
                break;
            case 12:
                im.warp(221000000, 0);
                break;
            case 13:
                im.warp(222000000, 0);
                break;
            case 14:
                im.warp(230000000, 0);
                break;
            case 15:
                im.warp(240000000, 0);
                break;
            case 16:
                im.warp(250000000, 0);
                break;
            case 17:
                im.warp(251000000, 0);
                break;
            case 18:
                im.warp(260000000, 0);
                break;
            case 19:
                im.warp(261000000, 0);
                break;
            case 20:
                im.warp(310000000, 0);
                break;
            }
            im.dispose();
        }
    }
}