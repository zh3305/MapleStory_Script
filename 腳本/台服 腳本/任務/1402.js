var status = -1;

function start(mode, type, selection) {
	if (mode != 1 && status == 2)
		status++;
	status++;

    if (status == 0) {
        qm.sendNextS("噢，原來你就是麥加說的那個人。 你好？ 聽說你對成為法師有興趣。 既然如此，身為法師轉職教官的漢斯就來幫助你。",1);
	} else if (status == 1) {
	    qm.sendNextS("你應該已經對法師有某種程度的了解。 法師是一項以高智慧為基礎且熟練魔法的職業。 雖然遠距離與近距離都很優秀，但是體力差卻是美中不足的地方… 但是，法師們創造了很多可以克服這一點的魔法，所以不需要擔心。",1);
	} else if (status == 2) {
	    qm.sendYesNo("你看起來充分擁有成為法師的天份… 你要成為法師嗎？ 若是同意的話，我會利用轉職官的特權，邀請你到 #b魔法森林，魔法圖書館#k 。 我會親自替你轉職的。 #r不過，就算拒絕也是有其他選擇的。 若是拒絕的話，我會介紹你除了法師以外的職業。#k");
	} else if (status == 3) {
		qm.forceStartQuest();
		qm.dispose();
		qm.warp(101000003);
	} else if (status == 4) {
		qm.sendSimple("成為法師無法滿足你嗎？ 真是可惜。 不過我尊重你的選擇。 那麼要走哪一條路呢？  \r\n#b#L1#劍士#l \r\n#b#L3#弓箭手#l \r\n#b#L4#盜賊#l \r\n#b#L5#海盜#l");
	} else if (status == 5) {
		if (selection == 1) {
			qm.sendNextS("要選擇劍士嗎？ 真是遺憾，不過這也是沒辦法的。 武術教練會聯絡你的。 試著點擊#b左邊的任務說明文#k。",1);
		} else if (selection == 3) {
			qm.sendNextS("要選擇弓箭手嗎？ 真是遺憾，不過這也是沒辦法的。 赫麗娜會聯絡你的。 試著點擊#b左邊的任務說明文#k。",1);
		} else if (selection == 4) {
			qm.sendNextS("你選擇盜賊嗎？ 真是遺憾，不過這也是沒辦法的。 達克魯會聯絡你的。 試著點擊#b左邊的任務說明文#k。",1);
		} else if (selection == 5) {
			qm.sendNextS("你選擇海盜嗎？ 真是遺憾，不過這也是沒辦法的。 卡伊琳會聯絡你的。 試著點擊#b左邊的任務說明文#k。",1);
		}
		if (selection > 0 && selection < 6)
			qm.forceStartQuest(1406, selection);
		qm.dispose();
	}
}

function end(mode, type, selection) {
	status++;
    if (status == 0) {
	    qm.sendYesNo("噢，你來的正好。 能夠親自見面更是令人高興呢。 你一定可以成為一名好的法師。 那我就讓你成為法師。");
	} else if (status == 1) {
		if (mode == 1) {
			qm.sendNextS("這樣你就有很多魔法技能可以使用了.給你一點#bSP#k然後打開#bSkill#k學習想要的技能.可以的話就學一些#b攻擊魔法#k吧.",1);
			qm.changeJob(200);
			qm.gainItem(1372043,1);//新手法師之杖
			qm.gainItem(1142107,1);//新手冒險家勳章
			qm.forceCompleteQuest();
		} else {
			qm.sendNextS("你害怕嗎？ 不要害怕… 這是為了你準備的一條路。",1);
			qm.dispose();
		}
	} else if (status == 2) {
		qm.sendNextS("光只有技能不夠吧.你的能力適合魔法師嗎?魔法師是以智力為主要能力,幸運為輔助能力.如果不知道該怎麼提升能力的話,就使用#b自動分配#k.",1);
	} else if (status == 3) {
		qm.sendNextS("啊!對了,因為你剛成為魔法師,給你一點狩獵的忠告.在成為魔法師的那一瞬間開始,體力可是相當虛弱的,萬一死掉的話,會失去在那期間所累積的經驗值.",1);
	} else if (status == 4) {
		qm.sendNextS("我可以教你的就只有這些了.為了進行修練給你一把短杖,要好好使用.希望能在你的冒險中帶來好運.",1);
		qm.dispose();
	}
}