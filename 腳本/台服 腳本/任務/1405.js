var status = -1;

function start(mode, type, selection) {
	if (mode != 1 && status == 5)
		status++;
	status++;

    if (status == 0) {
        qm.sendNextS("#h0#…？ 嗯。 果然就如同麥加所說的一樣具有天份， 很高興認識你， 我叫做卡伊琳。。 我是海盜船鯨魚號的艦長，同時也是海盜們的轉職教官。 聽說你對海盜有興趣，是嗎？",1);
	} else if (status == 1) {
	    qm.sendNextS("既然如此，我們得稍微談談私人的事情。 我為了調查從很久以前就對楓之谷世界造成威脅的黑魔法師，於是便組成了海盜團。 鯨魚號的海盜們目前也在楓之谷世界各地調查黑魔法師的蹤跡。",1);
	} else if (status == 2) {
	    qm.sendNextS("所以你若是也成為海盜的話，大概也得幫忙調查黑魔法師。 當然，這並非義務。 只是提議而已。 我雖然是海盜的轉職教官，但卻不是海盜的主人。 這並非命令，而是提議。",1);
	} else if (status == 3) {
	    qm.sendNextS("不過，我相信只要是楓之谷世界的冒險者，為了楓之谷世界做這點事是理所當然的。 不要只是一昧想著要獎勵，而是要出自善意… 呵呵，序論說得太長了點。 我只是要讓你知道這一點，真正重要的是接下來的內容。",1);
	} else if (status == 4) {
	    qm.sendNextS("海盜大致上分為使用槍和體術的人，兩邊的技能不一樣。 若是要說這兩者共通點，大概就是華麗的連續技吧？ 雖然難以控制，但只要熟練的話，就可以成為最強者。",1);
	} else if (status == 5) {
	    qm.sendYesNo("我似乎說太久了… 那麼，快決定吧！ 要成為海盜呢？還是要選擇其他職業呢？ 若是你要成為海盜的話，我就會用轉職官的特權邀請你到鯨魚號。 #r若是拒絕的話？ 我會建議你其他職業，所以不需要擔心。#k。");
	} else if (status == 6) {
		qm.forceStartQuest();
		qm.dispose();
		qm.warp(120000101);
	} else if (status == 7) {
		qm.sendSimple("你要選擇其他職業嗎？ 這也並非是壞事。 那你想要選哪一種職業呢？  \r\n#b#L1#劍士#l \r\n#b#L2#法師#l \r\n#b#L3#弓箭手#l \r\n#b#L4#盜賊#l");
	} else if (status == 8) {
		if (selection == 1) {
			qm.sendNextS("要選擇劍士嗎？ 真是遺憾，不過這也是沒辦法的。 武術教練會聯絡你的。 仔細看清楚#b左邊的任務說明文#k。",1);
		} else if (selection == 2) {
			qm.sendNextS("要選擇法師嗎？ 真是遺憾，不過這也是沒辦法的。 漢斯會和你聯絡的。 仔細看清楚#b左邊的任務說明文#k。",1);
		} else if (selection == 3) {
			qm.sendNextS("要選擇弓箭手嗎？ 真是遺憾，不過這也是沒辦法的。 弓箭手也是不錯的職業。 弓箭手村的赫麗娜會負責引導你的。 仔細看清楚#b左邊的任務說明文#k。",1);
		} else if (selection == 4) {
			qm.sendNextS("你選擇盜賊嗎？ 真是遺憾，不過這也是沒辦法的。 達克魯會聯絡你的。 仔細看清楚#b左邊的任務說明文#k。",1);
		}
		if (selection > 0 && selection < 6)
			qm.forceStartQuest(1406, selection);
		qm.dispose();
	}
}

function end(mode, type, selection) {
	status++;
    if (status == 0) {
	    qm.sendYesNo("見到你真高興… 為何擺出一副驚訝的表情呢？ 因為我看起來太年輕嗎？ 不過我的年紀可不小，所以可別因為我的外表而輕視我。 好了，那我就讓你轉職為海盜吧。");
	} else if (status == 1) {
		if (mode == 1) {
			qm.sendNextS("好,你現在也是海盜的一員了.你會學會很多海盜的技能,打開技能視窗看看.也會給你一些SP,用來提升技能.等級越高的話可使用更多技能,對修練戰鬥也會有所幫助.",1);
			qm.changeJob(500);
			qm.gainItem(1482014,1);//初級海盜指虎
			qm.gainItem(1492014,1);//初級海盜火槍
			qm.gainItem(2330006, 600);//新手海盜的子彈
			qm.gainItem(2330006, 600);//新手海盜的子彈
			qm.gainItem(2330006, 600);//新手海盜的子彈
			qm.gainItem(1142107,1);//新手冒險家勳章
			qm.forceCompleteQuest();
		} else {
			qm.sendNextS("你還沒做好心理準備嗎？",1);
			qm.dispose();
		}
	} else if (status == 2) {
		qm.sendNextS("不能完全光靠技能啊.打開能力視窗配置適合海盜能力的屬性.以打手為夢想的話重點放在力量.想成為槍手的話重點就放在敏捷就對了.不清楚的話,使用#b自動分配#k會比較方便.",1);
	} else if (status == 3) {
		qm.sendNextS("還有一個獎勵.我會幫你增加裝備,消費,裝飾,其它的道具欄位保管箱.有需要的物品都可以放進去.",1);
	} else if (status == 4) {
		qm.sendNextS("啊,還有一件事別忘了.成為海盜的新手,在戰鬥時要多注意體力管理.死掉的話那期間所累積的經驗值會減少.辛苦得到的經驗值被扣掉的話,不是很委屈嗎?",1);
	} else if (status == 5) {
		qm.sendNextS("我可以教你的就這些了.也給了幾個你的程度可以使用的武器,在旅程當中好好鍛煉自已吧.如果遇到黑魔法師的爪牙一定要消滅他!知道了嗎?",1);
		qm.dispose();
	}
}