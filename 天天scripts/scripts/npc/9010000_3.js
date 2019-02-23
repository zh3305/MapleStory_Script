var status;

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
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            cm.askMapSelection("#0#射手村#1#魔法密林#2#勇士部落#3#废弃都市#4#明珠港#5#林中之城#6#诺特勒斯号#7#圣地#8#里恩#9#天空之城#10#冰峰雪域#11#玩具城#12#地球防御总部#13#童话村#14#水下世界#15#神木村#16#武陵#17#百草堂#18#阿里安特#19#玛加提亚#20#埃德尔斯坦");
        } else if (status == 1) {
            switch (selection) {
            case 0:
                cm.warp(100000000, 0);
                break;
            case 1:
                cm.warp(101000000, 0);
                break;
            case 2:
                cm.warp(102000000, 0);
                break;
            case 3:
                cm.warp(103000000, 0);
                break;
            case 4:
                cm.warp(104000000, 0);
                break
            case 5:
                cm.warp(105000000, 0);
                break;
            case 6:
                cm.warp(120000000, 0);
                break;
            case 7:
                cm.warp(130000101, 0);
                break;
            case 8:
                cm.warp(140000000, 0);
                break;
            case 9:
                cm.warp(200000000, 0);
                break;
            case 10:
                cm.warp(211000000, 0);
                break;
            case 11:
                cm.warp(220000000, 0);
                break;
            case 12:
                cm.warp(221000000, 0);
                break;
            case 13:
                cm.warp(222000000, 0);
                break;
            case 14:
                cm.warp(230000000, 0);
                break;
            case 15:
                cm.warp(240000000, 0);
                break;
            case 16:
                cm.warp(250000000, 0);
                break;
            case 17:
                cm.warp(251000000, 0);
                break;
            case 18:
                cm.warp(260000000, 0);
                break;
            case 19:
                cm.warp(261000000, 0);
                break;
            case 20:
                cm.warp(310000000, 0);
                break;
            }
            cm.dispose();
        }
    }
}