var status = -1;

function start(mode, type, selection) {
	if (mode != 1 && status == 2)
		status++;
	status++;

    if (status == 0) {
        qm.sendNextS("你好，#h0# … 麥加跟我提過你很多次了。 聽說你對成為弓箭手有興趣。 我是弓箭手轉職教官赫麗娜。 很高興見到你…",1);
	} else if (status == 1) {
	    qm.sendNextS("你對弓箭手了解多少呢？ 弓箭手是利用弓或弩在遠距離攻擊敵人的職業… 雖然移動速度偏慢，但是尖銳的弓箭一向都能準確射中敵人。 每一擊都是深具危險性的！",1);
	} else if (status == 2) {
	    qm.sendYesNo("若是你真的想要成為弓箭手，我會利用轉職官的特權邀請你到 #b弓箭手村的弓箭手教育園#k。 #r不過，若是需要其他職業的話，你也可以拒絕。 我會幫助你轉職為其他職業的#k… 要成為弓箭手嗎？");
	} else if (status == 3) {
		qm.forceStartQuest();
		qm.dispose();
		qm.warp(100000201);
	} else if (status == 4) {
		qm.sendSimple("你選擇了其他職業呢… 雖然很可惜，不過畢竟這是你的決定… 那麼你想要選擇非弓箭手的其他職業嗎？\r\n#b#L1#劍士#l \r\n#b#L2#法師#l \r\n#b#L4#盜賊#l \r\n#b#L5#海盜#l");
	} else if (status == 5) {
		if (selection == 1) {
			qm.sendNextS("劍士… 若是想要加入具有強大力量的他們，就等武術教練聯絡你吧。 只要注視#b左邊的任務說明文#k就可以了。",1);
		} else if (selection == 2) {
			qm.sendNextS("法師… 你想要加入具有驚人魔法力的法師陣營嗎？ 漢斯很快就會與你交談的。 只要注視#b左邊的任務說明文#k就可以了。",1);
		} else if (selection == 4) {
			qm.sendNextS("盜賊… 在黑暗中比任何人都還要更加勇猛的一群人… 若是你想要加入他們的話，達克魯會聯絡你的。 只要注視#b左邊的任務說明文#k就可以了。",1);
		} else if (selection == 5) {
			qm.sendNextS("海盜… 具有截然不同的兩種力量的一群人… 若是你想要加入他們的話，就等卡伊琳聯絡你吧。 我會先和他聯絡的。 只要注視#b左邊的任務說明文#k就可以了。",1);
		}
		if (selection > 0 && selection < 6)
			qm.forceStartQuest(1406, selection);
		qm.dispose();
	}
}

function end(mode, type, selection) {
	status++;
    if (status == 0) {
	    qm.sendYesNo("歡迎你來到弓箭手教育園。 能夠這樣親眼見面交談真的很高興… 那我就讓你成為弓箭手。");
	} else if (status == 1) {
		if (mode == 1) {
			qm.sendNextS("你已經是弓箭手了。 若是想學會弓箭手的新技能，就開啟技能欄位。 我已經給你些許的 #b技能點數#k了，所以可以提升技能了。",1);
			qm.changeJob(300);
			qm.gainItem(1452051,1);//初級弓箭手之弓
			qm.gainItem(2060000,6000);//箭矢
			qm.gainItem(1142107,1);//新手冒險家勳章
			qm.forceCompleteQuest();
		} else {
			qm.sendNextS("已經準備好了嗎？ 既然如此，不要太著急。",1);
			qm.dispose();
		}
	} else if (status == 2) {
		qm.sendNextS("光是靠技能是不夠的吧？ 最好將狀態屬性變更為適合弓箭手。 弓箭手的狀態屬性是以敏捷為主，以 力量為輔助狀態屬性。 若是不知道該如何調整狀態屬性，就試著使用 #b自動配點#k。",1);
	} else if (status == 3) {
		qm.sendNextS("为了纪念你已成为弓箭手, 我还将适当给你增加背包空间。你可以收集更多的武器和防具, 让自己变得更加强大。",1);
	} else if (status == 4) {
		qm.sendNextS("啊… 另外… 我已經送你一個小禮物了。 我已經將你的一些裝備欄位以及消耗欄位增加了。 將好的道具放進道具欄當中。",1);
	} else if (status == 5) {
		qm.sendNextS("還有一件事要注意。 成為弓箭手的你在進行戰鬥時要更加小心謹慎。 若是不幸喪命的話，這段期間累積的經驗值就會減少。 這是不同於初心者的地方… 千萬別忘記。",1);
	} else if (status == 6) {
		qm.sendNextS("我已經沒有可以教導你的了。 我已經給你弓箭手的武器了，你就四處旅行來鍛鍊自己吧。",1);
		qm.dispose();
	}
}