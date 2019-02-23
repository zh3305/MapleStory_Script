var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        cm.sendNextS("這… 真的有翅膀呢。", 5, 2159314);
    } else if (status == 1) {
        cm.sendNextPrevS("你是什麼人呢？ 該不會是黑色翅膀的間諜吧？ 從目前的情況看來，似乎並非如此…", 5, 2159312);
    } else if (status == 2) {
        cm.sendNextPrevS("不要掉以輕心。 目前還無法斷言。", 5, 2159313);
    } else if (status == 3) {
        cm.sendNextPrevS("你是誰呢？ 和黑色翅膀是什麼關係呢？", 5, 2159315);
    } else if (status == 4) {
        cm.sendNextPrevS("我對那些叫做黑色翅膀的人不太清楚。 老實說我是第一次聽到這個名字。 你想知道些關於我的什麼事情呢？ 該從哪開始說起呢… 我也不是很清楚。", 3);
    } else if (status == 5) {
        cm.sendNextPrevS("就先從你的名字、隸屬、經歷開始說吧。  …若是你不介意的話，希望你也能說說關於那對翅膀的事情。", 5, 2159344);
    } else if (status == 6) {
        cm.sendNextPrevS("我叫做#h0#。 目前應該說是不屬於任何地方。 雖然不久前我還是黑魔法師的軍團長… 我本來想要對抗黑魔法師的，結果卻落敗且失去意識，醒來後就是戴帽子的男子看見的那個情況。 由於我父親是魔族的關係，所以我從出生時就有這雙翅膀了。", 3);
    } else if (status == 7) {
        cm.sendNextPrevS("黑魔法師？ 軍團長？ 我聽不懂你在說些什麼。 因為你說的那些事情和目前的情況根本就毫無關聯性。 你知道嗎？ 據我所知，黑魔法師早在數百年前就已經被英雄們封印起來了！", 5, 2159315);
    } else if (status == 8) {
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg1/3", [2000, 0, -100, 0, 0]);
        cm.getDirectionEffect(1, "", [600]);
    } else if (status == 9) {
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg0/10", [1500, -90, -150, 1, 1, 0, 0, 0]);
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg0/10", [1500, 210, -150, 1, 1, 0, 0, 0]);
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg0/10", [1500, 100, -150, 1, 1, 0, 0, 0]);
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg0/10", [1500, -180, -150, 1, 1, 0, 0, 0]);
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg0/10", [1500, -260, -150, 1, 1, 0, 0, 0]);
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg0/10", [1500, 270, -150, 1, 1, 0, 0, 0]);
        cm.getDirectionEffect(1, "", [1500]);
    } else if (status == 10) {
        cm.sendNextS("…嗯… 你該不會是因為實驗的關係，造成腦部發生異常吧？", 5, 2159314);
    } else if (status == 11) {
        cm.sendNextPrevS("(數百年前？ 英雄們封印了黑魔法師？ 這到底是怎麼回事呢？ 是這些人在騙人嗎？ 但是這個陌生的地方、陌生的物品和陌生的勢力… 在那場戰鬥後… 到底經過多久了呢…)", 3);
    } else if (status == 12) {
        cm.sendNextPrevS("嗚嗯… 我也搞不清楚了。 喂， #p2159345#！ 你覺得呢？ 那個人像是在騙人嗎？", 5, 2159314);
    } else if (status == 13) {
        cm.sendNextPrevS("至少他沒有在說謊。 雖然他也有可能不是正常人… 不過我可以確定，他並沒有任何惡意。", 5, 2159345);
    } else if (status == 14) {
        cm.sendNextPrevS("既然怪醫說不是，那就應該不是… 那是有兩種可能性嗎？ 一種是那個人不正常，另一個則是他說的是真的。", 5, 2159316);
    } else if (status == 15) {
        cm.sendNextPrevS("如果他說的是真的，那他就是數百年前的人。 而且還曾經是黑魔法師的軍團長… 不過，既然是軍團長，又為何要和黑魔法師對抗呢？", 5, 2159315);
    } else if (status == 16) {
        cm.sendNextPrevS("…只是因為私人的因素。 我已經回答了，那我也可以提出疑問嗎？ 你們是誰呢？ 那些叫做黑色翅膀的人是…？", 3);
    } else if (status == 17) {
        cm.sendNextPrevS("就如同我們初次見面時說的一樣，我們是末日反抗軍。 我們是為了對抗黑色翅膀所組成的組織，為了奪回我們的村子埃德爾斯坦而戰鬥。 ", 5, 2159344);
    } else if (status == 18) {
        cm.sendNextPrevS("抽取你的力量的那些人就是黑色翅膀。 原本我們的村子是很和平的，後來卻被佔領，他們同時還奪走村子的能量，是一群相當邪惡的勢力… 我不懂他們為何要這樣四處收集能量。 我只知道他們信奉黑魔法師而已。", 5, 2159344);
    } else if (status == 19) {
        cm.sendNextPrevS("一群信奉黑魔法師的人？ 不是說黑魔法師已經被封印了嗎？ 但是為何會出現那些人呢？", 3);
    } else if (status == 20) {
        cm.sendNextPrevS("這是我們大家都想知道的一個謎。 他們深信黑魔法師會再次來到這個楓之谷世界的。 實際上，四處都可以看到這一類的徵兆… 就是相當不平靜的狀況。", 5, 2159312);
    } else if (status == 21) {
        cm.sendNextPrevS("黑魔法師再次出現在楓之谷世界？ 那… 那還真是件讓人聽起來感到慶幸的事情。", 3);
    } else if (status == 22) {
        cm.sendNextPrevS("…我竟然還有機會可以再去報仇…", 3);
    } else if (status == 23) {
        cm.sendNextPrevS("…雖然不清楚你是否正常，但可以確定的是你真的很痛恨黑魔法師的。", 5, 2159312);
    } else if (status == 24) {
        cm.sendNextPrevS("想要向黑魔法師報仇的人… 既然如此，要不要成為我們的同事呢？", 5, 2159311);
    } else if (status == 25) {
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg1/4", [1500, -90, -150, 1, 1, 0, 0, 0]);
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg1/4", [1500, 210, -150, 1, 1, 0, 0, 0]);
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg1/4", [1500, 100, -150, 1, 1, 0, 0, 0]);
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg1/4", [1500, -180, -150, 1, 1, 0, 0, 0]);
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg1/4", [1500, -260, -150, 1, 1, 0, 0, 0]);
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg1/4", [1500, 270, -150, 1, 1, 0, 0, 0]);
        cm.sendNextPrevS("校長？！ 那是什麼意思呢…", 5, 2159315);
    } else if (status == 26) {
        cm.sendNextPrevS(" 你相信這個人說的話嗎？ 說不定他只是因為實驗的後遺症導致變成不正常。 就算他說的是真的，但他曾經是黑魔法師的軍團長呀！？", 5, 2159313);
    } else if (status == 27) {
        cm.sendNextPrevS("看到大家這樣聚集在一起，就足以讓人變得更加堅強。 呵呵呵…", 5, 2159311);
    } else if (status == 28) {
        cm.sendNextPrevS("#p2159345#若是他沒有說謊，至少他的劍是指向黑魔法師的不是嗎？ 只是#b'前職'#k是軍團長而已，但現在卻已經不是了。", 5, 2159311);
    } else if (status == 29) {
        cm.sendNextPrevS("這樣說確實是沒有錯。 不過他就算到外頭去，也只會被黑色翅膀抓走而已，又能做些什麼事情呢？", 5, 2159312);
    } else if (status == 30) {
        cm.sendNextPrevS("同伴增加並不是壞事。 只要他和我們的目的相同，不就可以一起共同奮戰嗎？", 5, 2159311);
    } else if (status == 31) {
        cm.sendNextPrevS("等、等一下！ 為何會突然發展到這種情況呢？ 我還沒有適應目前的這個情況… 我需要一點時間思考！", 3);
    } else if (status == 32) {
        cm.sendNextPrevS("還需要思考嗎？ 情況已經很明確了。 你不是想和黑魔法師戰鬥嗎？ 那麼就一定免不了和追隨黑魔法師的黑色翅膀戰鬥了。 敵人的敵人是朋友？ 這樣我們就可以成為朋友了呀？ 最重要的是，反正你也沒有選擇的餘地。 只要離開這裡，外頭到處都是黑色翅膀。 以你現在的狀況能夠贏過他們嗎？", 5, 2159314);
    } else if (status == 33) {
        cm.sendNextPrevS("你慎重的態度還真是令人佩服！ 反正目前要彼此相信對方是很困難的。 我們監視你，而你監視我們… 以這種方式合作不就行了嗎？ 信賴只要慢慢累積就可以了。", 5, 2159316);
    } else if (status == 34) {
        cm.sendNextPrevS("…你說的沒錯。 那就是…  我就姑且相信你們的話吧。", 3);
    } else if (status == 35) {
        cm.sendNextPrevS("可是… 雖然現在說似乎有些太慢，不過很感謝你們救了我。", 3);
    } else if (status == 36) {
        cm.sendNextPrevS("聽到這番話，讓人開始有些安心了呢… 因為懂得感恩的人是不太會背叛他人的。", 5, 2159344);
    } else if (status == 37) {
        cm.sendNextPrevS("在你們背叛我之前，我是絕對不會背叛你們的。", 3);
    } else if (status == 38) {
        cm.sendNextPrevS("那你就放輕鬆一點，不要太拘束。 若是改變心意，隨時都可以跟我們說… 呵呵呵", 5, 2159311);
    } else {
        cm.forceCompleteQuest(23279);
        cm.EnableUI(0);
        cm.DisableUI(false);
        cm.dispose();
        cm.warp(931050040, 0);
    }
}