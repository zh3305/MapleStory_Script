var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        cm.sendNextS("除了因為任務外出的軍團長以外都會來嗎?..那麼就開會吧。", 5, 2159310);
    } else if (status == 1) {
        cm.sendNextPrevS("偉大的祂，在黑魔法師的事情結束前我們要做好我們分內的事，不能因為祂不看就偷懶啊。這樣看來 #h0#...聽說有帶來有趣的情報啊?", 5, 2159308);
    } else if (status == 2) {
        cm.sendNextPrevS("…我拿到了反抗軍們正在集合的情報。", 3, 2159308);
    } else if (status == 3) {
        cm.sendNextPrevS("反抗軍啊... 把烏合之眾的敗兵們全部集合起來要做什麼. 哈哈哈... 所有人都稱他們為 #r英雄#k是吧?真有夠好笑。", 5, 2159308);
    } else if (status == 4) {
        cm.sendNextPrevS("我還挺期待的? 這應該就是最後的掙扎吧]?真好奇他們要如何來反抗。占領耶雷弗前夕真沒力氣~清除皇帝那傢伙真是易如反掌有夠無趣。", 5, 2159339);
    } else if (status == 5) {
        cm.sendNextPrevS("戰鬥會如此的輕鬆還不都是託黑魔法師的權能應該與妳無關吧,  #p2159339#? ? 好好收斂妳那狂妄的語氣。", 5, 2159308);
    } else if (status == 6) {
        cm.sendNextPrevS("額... 但我無事可做啊!", 5, 2159339);
    } else if (status == 7) {
        cm.sendNextPrevS("史烏他看起來好像很忙。 殺人鯨待在這裡沒關係嗎?", 3, 2159339);
    } else if (status == 8) {
        cm.sendNextPrevS("史烏總是埋頭苦幹! ? 我現在正要去找史烏! 哼! 總之軍團長們都像木頭人一樣. 真沒意思。", 5, 2159339);
    } else if (status == 9) {
        cm.sendNextPrevS("…會議呢?", 5, 2159310);
    } else if (status == 10) {
        cm.sendNextPrevS("真是. 都是因為 #p2159339#一直在說話所以會議都沒什麼進度。切... 是在說英雄們的事情嗎?英雄啊...  他們都是高尚的 #h0#會好好看著辦吧。", 5, 2159308);
    } else if (status == 11) {
        cm.sendNextPrevS("連時間女神都制伏的人，那樣的英雄也會是對手嗎?對吧?哈哈哈哈…", 5, 2159308);
    } else if (status == 12) {
        cm.sendNextPrevS("…狀況看似不簡單. 那些拼了命的傢伙要發揮超越自己能力的力量。 然後我只是無法閃掉時間女神的行動... 最終停止幽禁的會是偉大的那位吧。", 3, 2159308);
    } else if (status == 13) {
        cm.sendNextPrevS("哎呀，怎麼這麼謙虛啊。 反正以那個功勞應該可以得到祂的認可吧?比起他我先去神殿散播許多的小動作實在太微小了，不會害羞嗎", 5, 2159308);
    } else if (status == 14) {
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg0/10", [2000, 0, -100, 0, 0]);
        cm.getDirectionEffect(1, "", [1500]);
    } else if (status == 15) {
        cm.sendNextS("…你們兩夠了吧.", 5, 2159310);
    } else if (status == 16) {
        cm.sendNextPrevS("幹嘛? 很有趣啊? 繼續說來聽聽. #p2159309#.", 5, 2159339);
    } else if (status == 17) {
        cm.sendNextPrevS("我不過只是被稱讚為我們軍團最佳的有功之人#h0#而已.ㄎㄎㄎ...", 5, 2159308);
    } else if (status == 18) {
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg0/10", [2000, 0, -100, 0, 0]);
        cm.getDirectionEffect(1, "", [1500]);
    } else if (status == 19) {
        cm.sendNextS("#p2159309#.  只要占領完神殿一切都結束了... 那個意義去綁架時間女神的功勞 是絕對的.", 5, 2159310);
    } else if (status == 20) {
        cm.sendNextPrevS("然後你蒙蔽女神的雙眼不是已經得到獎賞了嗎? 你還想要什麼, #p2159309#?", 5, 2159310);
    } else if (status == 21) {
        cm.sendNextPrevS("我還能奢望什麼啊... 哀. 好吧, 那這些事情就說到這裡為止繼續開會吧. 不要再說那些英雄們的事情了, 其他抵抗勢力的問題進展如何?", 5, 2159308);
    } else if (status == 22) {
        cm.sendNextPrevS("…就如命令,已確認都破壞了.", 5, 2159310);
    } else if (status == 23) {
        cm.sendNextPrevS("嗯嗯,這樣啊.", 5, 2159308);
    } else if (status == 24) {
        cm.sendNextPrevS("可是啊~ 黑魔法師為什麼突然改變計劃呢?本來不是占領到神殿就可以了嗎?雖沒太大的關係,都破壞的話不就沒東西好玩了嗎?", 5, 2159339);
    } else if (status == 25) {
        cm.sendNextPrevS("…破壞? 那個... 請問是什麼命令?我之前都沒聽說過.", 3, 2159339);
    } else if (status == 26) {
        cm.sendNextPrevS("阿哈, 那樣看來是因為你與女神之間的戰爭太辛勞了所以沒將命令傳達給你的樣子. 你問是什麼命令嗎?很簡單的.", 5, 2159308);
    } else if (status == 27) {
        cm.sendNextPrevS("偉大的祂希望可以終結所有的戰爭. 接到了完全去除停滯不前的抵抗的勢力的命令除了你以外的軍團長們都會站出來吧.", 5, 2159308);
    } else if (status == 28) {
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg1/18", [2000, 0, -100, 0, 0]);
        cm.getDirectionEffect(1, "", [1500]);
    } else if (status == 29) {
        cm.sendNextS("…連神木村的一草一木都不剩全都消滅掉了...", 5, 2159310);
    } else if (status == 30) {
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg1/3", [2000, 0, -100, 0, 0]);
        cm.getDirectionEffect(1, "", [1500]);
    } else if (status == 31) {
        cm.sendNextS("(家人在神木村的南部地域耶...!)", 3, 2159310);
    } else if (status == 32) {
        cm.sendNextPrevS("黑魔法師所希望的是將這個事情當成一個榜樣給反抗軍... 看來處理得很完美. 也是件好事吧?", 5, 2159308);
    } else if (status == 33) {
        cm.sendNextPrevS("好啊.稱為得列功的僕人也剩下沒幾個了.", 5, 2159310);
    } else if (status == 34) {
        cm.sendNextPrevS("…等一下. 不是說好不動南部地域嗎?南部地域破壞到什麼程度了?!請跟我說詳細的地方...!", 3, 2159310);
    } else if (status == 35) {
        cm.sendNextPrevS("到什麼程度啊 嗯... 當然要好好照祂指是的去做阿。接取到破壞全部的名義話當然要清除的一乾二淨啊。哈哈哈哈哈…你的反應怎這麼敏感?有什麼掛心的事情嗎?", 5, 2159308);
    } else if (status == 36) {
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg0/11", [2000, 0, -100, 0, 0]);
        cm.getDirectionEffect(1, "", [1500]);
    } else if (status == 37) {
        cm.sendNextS("我有要去確認的事情我就先離席了…", 3, 2159308);
    } else if (status == 38) {
        cm.sendNextPrevS("你受到黑魔法師的寵愛並不代表你可以隨便行事。我沒說要做我們的事情嗎?現在離開的話就是不服從命令.", 5, 2159308);
    } else if (status == 39) {
        cm.getDirectionEffect(3, "", [2]);
    } else if (status == 40) {
        cm.sendNextS("(戴維安，母親…希望你們沒事…)", 3, 2159308);
    } else if (status == 41) {
        cm.sendNextPrevS("也不假裝有聽到.切…但你說家人都在這吧?哈哈哈…祈求好運吧.", 5, 2159308);
    } else {
        cm.getDirectionStatus(true);
        cm.dispose();
        cm.warp(924020010, 0);
    }
}