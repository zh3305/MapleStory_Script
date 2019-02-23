/* Author: Xterminator
	NPC Name: 		瑞恩
	Map(s): 		Maple Road : Amherst (1010000)
	Description: 		Talks about Amherst
*/
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.sendNext("这里是位于彩虹岛东北部的叫#b#m1010000##k的村落...你已经知道彩虹岛是新手练习的地方吧？这里只出现比较弱的怪兽，所以你放心吧。");
    } else if (status == 1) {
        cm.sendNextPrev("如果你希望变得更强大，就去#b#m60000##k，在那里乘船去#b金银岛#k。那个岛的规模很大，这里可是比不上得。");
    } else if (status == 2) {
        cm.sendPrev("听说在金银岛可以学到专门的职业技能。好象是叫#b#m102000000##k来着...？ 有人说那里还有非常荒凉的高原村庄，在那里有很多战士。是高原...到底是怎么样的地方呢？");
    } else if (status == 3) {
        cm.dispose();
    }
}