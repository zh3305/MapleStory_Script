var status = -1;

function start(mode, type, selection) {
	if (mode != 1 && status == 3)
		status++;
	status++;

    if (status == 0) {
        qm.sendNextS("你就是麥加所說的那個人嗎？ #h0#… 嗯。 果然就像她所說的一樣，是個看起來具有天份的小鬼… 喂，你想要成為盜賊嗎？ 你對盜賊了解嗎？",1);
	} else if (status == 1) {
	    qm.sendNextS("提到盜賊，或許有人會認為是那種搶奪他人物品的惡徒，但是其實並不一樣。 楓之谷世界的盜賊是在黑暗中利用銳利的短刀與飛鏢戰鬥的一群人。 或許有些部分是無法光明正大的。 但這卻也是盜賊的本質。 不需要因此而否定。",1);
	} else if (status == 2) {
	    qm.sendNextS("盜賊是以矯健的身手與強力的技能攻擊敵人的一群人。 雖然體力偏弱，但由於身手敏捷的關係，要避開怪物並不困難。 而且還可靠好運來給予會心的一擊。",1);
	} else if (status == 3) {
	    qm.sendYesNo("怎麼樣？ 你要成為盜賊嗎？ 若是你決定要成為盜賊的話，我會利用轉職官的特權邀請你到#b墮落城市，墮落城市酒吧#k。 那裡是個相當隱密的地方，所以你要感到榮幸。 #r不過，若是你更喜歡其他職業的話？ 如果是這樣的話，那就拒絕吧。 我會推薦你其他職業的。#k。");
	} else if (status == 4) {
		qm.forceStartQuest();
		qm.dispose();
		qm.warp(103000003);
	} else if (status == 5) {
		qm.sendSimple("你不想成為盜賊嗎？ 我是不會強迫他人的。 那你想要哪一種職業呢？  \r\n#b#L1#劍士#l \r\n#b#L2#法師#l \r\n#b#L3#弓箭手#l \r\n#b#L5#海盜#l");
	} else if (status == 6) {
		if (selection == 1) {
			qm.sendNextS("是劍士嗎？ 什麼… 那項職業也不錯。 武術教練很快就會和你聯絡的。 觀看#b左邊的任務說明文#k吧。",1);
		} else if (selection == 2) {
			qm.sendNextS("是法師嗎？ 什麼… 那項職業也不錯。 漢斯會和你聯絡的。 觀看#b左邊的任務說明文#k吧。",1);
		} else if (selection == 3) {
			qm.sendNextS("要選擇弓箭手嗎？ 什麼… 那項職業也不錯。 赫麗娜會和你聯絡的。 觀看#b左邊的任務說明文#k吧。",1);
		} else if (selection == 5) {
			qm.sendNextS("你選擇海盜嗎？ 什麼… 那項職業也不錯。 卡伊琳會和你聯絡的。 觀看#b左邊的任務說明文#k吧。",1);
		}
		if (selection > 0 && selection < 6)
			qm.forceStartQuest(1406, selection);
		qm.dispose();
	}
}

function end(mode, type, selection) {
	status++;
    if (status == 0) {
	    qm.sendYesNo("歡迎來到墮落城市酒吧。 若是不透過這種方式，連要找到這裡的入口都很困難。 呵呵，出去時可要記清楚門。 好了，已經做好成為盜賊的準備了嗎？");
	} else if (status == 1) {
		if (mode == 1) {
			qm.sendNextS("現在你已經是盜賊了！ 可以使用盜賊的技能了，快打開技能欄位吧！ 提升等級的話，就可以學會更多的技能。",1);
			qm.changeJob(400);
			qm.gainItem(1472061,1);//新手盜賊護腕
			qm.gainItem(1332063,1);//新手盜賊的短劍
			qm.gainItem(2070015, 1000);//新手盜賊的飛鏢
			qm.gainItem(2070015, 1000);//新手盜賊的飛鏢
			qm.gainItem(2070015, 1000);//新手盜賊的飛鏢
			qm.gainItem(1142107,1);//新手冒險家勳章
			qm.forceCompleteQuest();
		} else {
			qm.sendNextS("你還沒做好心理準備嗎？ 真是個膽小鬼…",1);
			qm.dispose();
		}
	} else if (status == 2) {
		qm.sendNextS("光是靠技能應該不夠吧？ 狀態屬性也要變更為適合盜賊，這樣才能成為真正的盜賊。 盜賊的狀態屬性是以幸運為主，將 敏捷當作輔助狀態屬性。 若是不知道提升狀態屬性的方法，只要使用 #b自動配點#k即可。",1);
	} else if (status == 3) {
		qm.sendNextS("還有一個禮物。 我已經增加你的裝備、其他欄位數量增加了。  道具欄位越多，整個世界就會變得更美好的。 呵呵…",1);
	} else if (status == 4) {
		qm.sendNextS("啊，我再告訴你一件該注意的事情。 雖然初心者不會有影響，不過若是非初心者的人喪命的話，這段期間累積的經驗值很可能會減少， 千萬要小心， 努力累積的經驗值若是減少就太冤枉了，不是嗎？",1);
	} else if (status == 5) {
		qm.sendNextS("好！ 我已經沒有其他知識可以傳授給你了。 我給了幾個適合你的武器，旅行途中就好好鍛鍊自己吧。 ",1);
		qm.dispose();
	}
}