var status = -1;

function start(mode, type, selection) {
	if (mode != 1 && status == 2)
		status++;
	status++;

    if (status == 0) {
        qm.sendNextS("原來你就是麥加推薦的那個人。 聽說你想要成為劍士…是嗎？ 我就是劍士轉職官武術教練。 我會協助想要成為劍士進行冒險的各位。",1);
	} else if (status == 1) {
	    qm.sendNextS("你對劍士有何種程度的認知呢？ 劍士是一種以強大的力量與體力為根基，揮動近距離武器擊倒敵人的職業。 是最靠近敵人戰鬥且毫無畏懼的一群人。 相當深具魅力吧？",1);
	} else if (status == 2) {
	    qm.sendYesNo("你看起來相當具有天份。 若是你這種人才願意成為劍士的話，那真是歡迎！ 要成為劍士嗎？ 若是你同意的話，我會使用轉職官的特權邀請你到 #b勇士之村，勇士聖殿 #k。 #r不過，就算拒絕也是有其他選擇的。 若是拒絕的話，那我就帶領你去選擇其他職業。#k。");
	} else if (status == 3) {
		qm.forceStartQuest();
		qm.dispose();
		qm.warp(102000003);
	} else if (status == 4) {
		qm.sendSimple("你不想要成為劍士嗎？ 總不能強迫他人做不想做的事情吧。 既然如此，那你就選擇其他職業吧。 除了劍士以外，我還準備了其他四個選擇。 \r\n#b#L2#法師#l \r\n#b#L3#弓箭手#l \r\n#b#L4#盜賊#l \r\n#b#L5#海盜#l");
	} else if (status == 5) {
		if (selection == 2) {
			qm.sendNextS("你想要成為法師嗎？ 真是遺憾，不過既然這是你的決定，那我就尊重你的選擇。 #b漢斯#k會聯絡你的。 #b瀏覽左邊的任務說明文#k吧。",1);
		} else if (selection == 3) {
			qm.sendNextS("你想要成為弓箭手嗎？ 真是遺憾，既然這是你的選擇，我也無法多說些什麼。 #b赫麗娜#k會負責引導你的。 #b瀏覽左邊的任務說明文#k吧。",1);
		} else if (selection == 4) {
			qm.sendNextS("你選擇盜賊嗎？ 真是遺憾，不過這也是沒辦法的。 #b就等達克魯#k聯絡你吧。 #b瀏覽左邊的任務說明文#k吧。",1);
		} else if (selection == 5) {
			qm.sendNextS("你選擇海盜嗎？ 真是遺憾，不過這也是沒辦法的。 就等#b卡伊琳#k跟你聯絡吧。 #b瀏覽左邊的任務說明文#k吧。",1);
		}
		if (selection > 0 && selection < 6)
			qm.forceStartQuest(1406, selection);
		qm.dispose();
	}
}

function end(mode, type, selection) {
	status++;
    if (status == 0) {
	    qm.sendYesNo("竟然能在這裡見面，真是太慶幸了… 那我就讓你成為劍士吧。 你應該已經做好心理準備了吧？ 會退縮的人並非劍士。");
	} else if (status == 1) {
		if (mode == 1) {
			qm.sendNextS("成為劍士的你看起來更強大了呢. 有了許多新的技能,快試試看新的力量如何.",1);
			qm.changeJob(100);
			qm.gainItem(1302077,1);//新手劍士之劍
			qm.gainItem(1142107,1);//新手冒險家勳章
			qm.forceCompleteQuest();
		} else {
			qm.sendNextS("什麼… 看來你比想像中還要膽小呢。你該不會已經失去成為劍士的信心了吧？",1);
			qm.dispose();
		}
	} else if (status == 2) {
		qm.sendNextS("還有,你的能力值為了要符合劍士而改變.劍士的話當然是以力量為中心, 敏捷為輔助.不清楚的話使用#b自動分配#k也是不錯的.",1);
	} else if (status == 3) {
		qm.sendNextS("為了紀念你成為劍士,幫你增加道具欄位.我這裡找到了許多武器與防具,希望能幫助你,讓你的力量更強大.",1);
	} else if (status == 4) {
		qm.sendNextS("對了，還有一個注意事項。 雖然新手時無所謂，但成為劍士的那一瞬間開始，就要小心千萬別死… 若是不幸喪命的話，很可能會導致這段期間累積的經驗值減少的…",1);
	} else if (status == 5) {
		qm.sendNextS("我已經沒有可以傳授你的了… 我已經給了你一把劍，現在你就自行鍛鍊自己吧。",1);
		qm.dispose();
	}
}