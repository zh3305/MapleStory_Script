var status = 0;

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
            var text = "#e你好,您需要替换伤害效果吗!\r\n";
            text += "#b#L1##i2431966##r数码示伤害皮肤#l\r\n";
            text += "#b#L2##i2431967##r克里蒂亚斯伤害皮肤#l\r\n";
            text += "#b#L3##i2432131##r组队任务伤害皮肤#l\r\n";
            text += "#b#L4##i2432153##r冲击式伤害皮肤#l\r\n";
            text += "#b#L5##i2432154##r甜美传统韩果伤害皮肤#l\r\n";
            text += "#b#L6##i2432207##r射手村俱乐部伤害皮肤#l\r\n";
            text += "#b#L7##i2432354##r圣诞快乐伤害皮肤#l\r\n";
            text += "#b#L8##i2432355##r雪花伤害皮肤#l\r\n";
            text += "#b#L9##i2432465##r阿丽莎的伤害皮肤#l\r\n";
            text += "#b#L10##i2432479##r桃乐丝的伤害皮肤#l\r\n";
            text += "#b#L11##i2432639##r键盘战士伤害皮肤#l\r\n";
            text += "#b#L12##i2432532##r轻柔春风伤害皮肤#l\r\n";
            text += "#b#L13##i2432748##r血色伤害皮肤#l\r\n";
            text += "#b#L14##i2432640##r回忆伤害皮肤#l\r\n";
            text += "#b#L15##i2432710##r花蘑菇伤害皮肤#l\r\n";
            text += "#b#L16##i2432836##r王冠伤害皮肤#l\r\n";
            text += "#b#L17##i2432973##r灰白伤害皮肤#l\r\n";
            text += "#b#L18##i2433063##rStar Planet伤害皮肤#l\r\n";


            cm.sendSimple(text);

        } else if (status == 1) {
            switch (selection) {
                case 1:
                    if (cm.getPlayer().getCSPoints(1) >= 99000) {
                        cm.gainNX(-1000);

                        cm.getPlayer().updateInfoQuest1(7291, "1");
                        cm.sendOk("恭喜,成功购买了,数码示伤害皮肤");
                        // cm.dispose();
                    } else {
                        cm.sendOk("您的点卷不足99000.");
                        // cm.dispose();
                    }
                    break;
                case 2:
                    cm.getPlayer().updateInfoQuest1(7291, "2");
                    cm.sendOk("恭喜,成功购买了,克里蒂亚斯伤害皮肤");
                    break;
                case 3:
                    cm.getPlayer().updateInfoQuest1(7291, "3");
                    cm.sendOk("恭喜,成功购买了,组队任务伤害皮肤");
                    break;
                case 4:
                    cm.getPlayer().updateInfoQuest1(7291, "4");
                    cm.sendOk("恭喜,成功购买了,冲击式伤害皮肤");
                    break;
                case 5:
                    cm.getPlayer().updateInfoQuest1(7291, "5");
                    cm.sendOk("恭喜,成功购买了,甜美传统韩果伤害皮肤");
                    break;
                case 6:
                    cm.getPlayer().updateInfoQuest1(7291, "6");
                    cm.sendOk("恭喜,成功购买了,射手村俱乐部伤害皮肤");
                    break;
                case 7:
                    cm.getPlayer().updateInfoQuest1(7291, "7");
                    cm.sendOk("恭喜,成功购买了,圣诞快乐伤害皮肤");
                    break;
                case 8:
                    cm.getPlayer().updateInfoQuest1(7291, "8");
                    cm.sendOk("恭喜,成功购买了,雪花伤害皮肤");
                    break;
                case 9:
                    cm.getPlayer().updateInfoQuest1(7291, "9");
                    cm.sendOk("恭喜,成功购买了,阿丽莎的伤害皮肤");
                    break;
                case 10:
                    cm.getPlayer().updateInfoQuest1(7291, "10");
                    cm.sendOk("恭喜,成功购买了,桃乐丝的伤害皮肤");
                    break;
                case 11:
                    cm.getPlayer().updateInfoQuest1(7291, "11");
                    cm.sendOk("恭喜,成功购买了,键盘战士伤害皮肤");
                    break;
                case 12:
                    cm.getPlayer().updateInfoQuest1(7291, "12");
                    cm.sendOk("恭喜,成功购买了,轻柔春风伤害皮肤");
                    break;
                case 13:
                    cm.getPlayer().updateInfoQuest1(7291, "13");
                    cm.sendOk("恭喜,成功购买了,血色伤害皮肤");
                    break;
                case 14:
                    cm.getPlayer().updateInfoQuest1(7291, "14");
                    cm.sendOk("恭喜,成功购买了,回忆伤害皮肤");
                    break;
                case 15:
                    cm.getPlayer().updateInfoQuest1(7291, "15");
                    cm.sendOk("恭喜,成功购买了,花蘑菇伤害皮肤");
                    break;
                case 16:
                    cm.getPlayer().updateInfoQuest1(7291, "16");
                    cm.sendOk("恭喜,成功购买了,王冠伤害皮肤");
                    break;
                case 17:
                    cm.getPlayer().updateInfoQuest1(7291, "17");
                    cm.sendOk("恭喜,成功购买了,灰白伤害皮肤");
                    break;
                case 18:
                    cm.getPlayer().updateInfoQuest1(7291, "18");
                    cm.sendOk("恭喜,成功购买了,Star Planet伤害皮肤");
                    break;
            }
            cm.dispose();
        }
    }
}
