var status = 0;
var i = java.lang.Math.floor(Math.random() * 80);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple("#b<看你敢不敢赌 - 我这里有大把中介币与正义火种>\r\n\r\n#k#L1#一千万冒险岛币赌上中介币#l\r\n#L2#五百万冒险岛币赌上正义火种");
        } else if (status == 1) {
            if (selection == 1) {
                if (cm.getMeso() >= 10000000) {
                    if (i >= 0 && i <= 4) {
                        cm.gainItem(4000463, 1);
                        cm.dispose();
                        cm.sendOk("你赢了，获得了1个中介币...我不服，在来！！！");
                        cm.worldMessage("" + cm.getChar().getName() + "在新年聚赌 一千万筹码中获得了大量的中介币，大家恭喜他(她)。");
                    } else if (i >= 5 && i <= 9) {
                        cm.gainItem(4000463, 2);
                        cm.dispose();
                        cm.sendOk("你赢了，获得了2个中介币...我不服，在来！！！");
                        cm.worldMessage("" + cm.getChar().getName() + "在新年聚赌 一千万筹码中获得了一定的中介币，大家恭喜他(她)。");
                    } else {
                        cm.dispose();
                        cm.gainMeso(-10000000);
                        cm.sendOk("你输了，还敢来吗？怕什么。我等你！！！");
                    }
                } else {
                    cm.dispose();
                    cm.sendOk("你的金币不够两百万");
                }
            }
            if (selection == 2) {
                if (cm.getMeso() >= 5000000) {
                    if (i >= 0 && i <= 4) {
                        cm.gainItem(4033356, 1);
                        cm.dispose();
                        cm.sendOk("你赢了，获得了1个正义火种...我不服，在来！！！");
                        cm.worldMessage("" + cm.getChar().getName() + "在新年聚赌 五百万筹码中获得了大量的正义火种，大家恭喜他(她)。");
                    } else if (i >= 5 && i <= 9) {
                        cm.gainItem(4033356, 2);
                        cm.dispose();
                        cm.sendOk("你赢了，获得了2个正义火种...我不服，在来！！！");
                        cm.worldMessage("" + cm.getChar().getName() + "在新年聚赌 五百万筹码中获得了一定的正义火种，大家恭喜他(她)。");
                    } else {
                        cm.dispose();
                        cm.gainMeso(-5000000);
                        cm.sendOk("你输了，还敢来吗？怕什么。我等你！！！");
                    }
                } else {
                    cm.dispose();
                    cm.sendOk("你的金币不够500万");
                }
            }
        }
    }
}