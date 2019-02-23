var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        qm.sendNext("你好，我們是很久以前曾經支配楓之谷的雙胞胎艾尼瑪和艾尼穆斯");
    } else if (status == 1) {
        qm.sendNextPrevS("煩人的打招呼禮節就先拋開吧!!!勇士阿，你想要更強大的力量嗎?", 4, 9330355);
    } else if (status == 2) {
        qm.sendNextPrev("放棄吧,艾尼穆斯.光是一兩個勇士是無法抵抗黑暗惡勢力的...");
    } else if (status == 3) {
        qm.sendNextPrev("#i3800647#\r\n艾尼穆斯想要透過自己的方塊創造少數強大的菁英勇士...");
    } else if (status == 4) {
        qm.sendNextPrevS("#i3800646#\r\n但相反的艾尼瑪想犧牲自己的力量，提供方塊給楓之谷的所有勇士... ", 4, 9330355);
    } else if (status == 5) {
        qm.sendNextPrevS("#i3800648#艾尼瑪...你這樣犧牲自己的力量,千萬不要哪天倒下了...", 4, 9330355);
    } else if (status == 6) {
        qm.sendNextPrev("雖然我們想要對抗黑暗惡勢力的心都是一樣的,但方法有一點不同...\r\n勇士啊...請你等著...我會再來找你的.");
    } else if (status == 7) {
        qm.forceCompleteQuest();
        qm.dispose();
    }
}