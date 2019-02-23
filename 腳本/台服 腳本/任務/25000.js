/* global qm */

var status = -1;

function start(mode, type, selection) {
    if (mode === 1) {
	status++;
    } else {
	status--;
    }

    var i = -1;
    if (status <= i++) {
        qm.dispose();
    } else if (status === i++) {
	qm.sendNext("已經準備好了嗎，主人？我#m150000000#已經站在#m130000000#的騎士之殿頂端了。當然，底下的人絲毫沒有察覺到。");
    } else if (status === i++) {
	qm.sendNextPrev("不過，現在#m130000000#的警備相當森嚴。和平常不太一樣，果然…騎士之殿有許多警備騎士正在待命中。");
    } else if (status === i++) {
	qm.sendNextPrev("只要躲過警備騎士的話，之後就會比較容易的。依照主人的計劃進行的話，只要配合幻影魔法的時機就可以了。");
    } else if (status === i++) {
        if (mode !== 1) {
	    qm.sendNext("This is an important decision to make.");
	    qm.safeDispose();
	    return;
        }
	qm.sendNextPrev("在主人完成所有事情回來之前，水晶庭園會一直待機等待的。引擎不會關閉的，所以不需要擔心會被追擊。");
    } else if (status === i++) {
	qm.sendYesNo("一切都準備就緒了。只剩下主人的決定了…怎麼樣呢？要立刻展開#m130000000#潛入作戰嗎？");
    } else if (status === i++) {
	qm.sendOk("祝你好運，主人。");
	qm.forceStartQuest();
	qm.dispose();
    } else {
        qm.dispose();
    }
}