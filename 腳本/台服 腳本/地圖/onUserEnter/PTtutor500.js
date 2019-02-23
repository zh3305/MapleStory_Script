/* global ms */

var status = -1;

function action(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.getDirectionStatus(true);
        ms.EnableUI(1);
        ms.DisableUI(true);
        ms.showEffect(false, "phantom/mapname3");
        ms.wait(3000);
    } else if (status === i++) {
        ms.sendNextS("（果然全都聚集了。雖然似乎還沒有開始的樣子…因為她還沒有出現。看到適當的位置，就去那邊坐吧。）", 17);
    } else if (status === i++) {
        ms.getDirectionEffect(3, "", [2]);
        ms.wait(1500);
    } else if (status === i++) {
        ms.getDirectionEffect(3, "", [0]);
        ms.wait(500);
    } else if (status === i++) {
        ms.sendNextS("（是目前的女帝和騎士們嗎…？氣氛不是很好。大家都擺出相當不悅的表情。也是，以目前的情況來說，這也是理所當然的。）", 17);
    } else if (status === i++) {
        ms.sendNextPrevS("（議員們的氣氛似乎也不太尋常。他們會如何判斷這種情況呢？悄悄走進去吧？）", 17);
    } else if (status === i++) {
        ms.wait(2000);
    } else if (status === i++) {
        ms.getDirectionEffect(3, "", [0]);
        ms.sendOthersTalk("西格諾斯竟然不是真正的女皇…會是真的嗎？", 1402200, [false, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("你說話太過份了。什麼叫做不是真正的女皇？難道我們在伺候一名冒牌的女皇嗎？西格諾斯現在也還是女皇。", 1402201, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("雖然不清楚是真是假…她的正統性備受質疑是不爭的事實不是嗎？倘若她真的是擁有耶雷弗寶物的人…", 1402203, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("艾麗亞先皇留下的寶物…那項紀錄相當確實。", 1402202, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("呼…很困難。若是那項寶物能證明真正的女皇，真正女皇血統是西格諾斯以外的人的話…我們該怎麼做呢？", 1402200, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("雖然無法背叛一直以來率領耶雷弗的西格諾斯…對於真正女皇的血統視若無睹也並非正確之舉…真是令人煩悶呀。", 1402203, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("楓之谷世界好不容易終於誕生了結合唯一的聯盟…那些全都是相信西格諾斯而加入聯盟的人。除了西格諾斯以外的人成為女皇的話，聯盟也會受到動搖的。", 1402202, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("光靠我們自己討論，能夠找出答案嗎？主張自己擁有真正血統的那個人是什麼樣的人呢…當務之急就是先確認這一點。", 1402201, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("噓…好像終於到了。", 1402201, [true, true]);
    } else if (status === i++) {
        ms.getDirectionEffect(3, "", [0]);
        ms.wait(500);
    } else if (status === i++) {
        ms.sendOthersTalk("（…終於，這一點也不有趣的戲劇編劇者登場了。）", 1402201, [false, true], 17);
    } else if (status === i++) {
        ms.showEffect(false, "phantom/hillah");
        ms.playSound("Magatia/alceCircle");
        ms.wait(1200);
    } else if (status === i++) {
        ms.spawnNPCRequestController(1402400, -131, -7);
        ms.spawnNPCRequestController(1402401, -209, -7);
        ms.spawnNPCRequestController(1402401, -282, -7, 0, 1402402);
        ms.spawnNPCRequestController(1402401, -59, -7, 0, 1402403);
        ms.getDirectionEffect(3, "", [0]);
        ms.wait(4500);
    } else if (status === i++) {
        ms.sendOthersTalk("看來聚集了相當多人呢。這也意味著大家都有仔細聽我說的話吧？真是太感謝了。我就是那個自稱擁有真正女皇血統的希拉。", 1402400, [false, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("......", 1402100, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("…我們只是為了證明那番話是謊言才會聚集在這裡的。沒有其他意思。", 1402101, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("啊啊，當然…我也不認為你們會一次就相信我所說的話。但是，真相終究會大白的。從現在開始，我將要說被耶雷弗的許多人遺忘的古老故事。黑魔法師企圖支配楓之谷世界的當時的那個女皇…關於艾麗亞的事情…", 1402400, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("(…艾麗亞...)", 1402400, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("相信大家都知道了，當時耶雷弗有許多東西都被黑魔法師破壞，幾乎沒有完整保存下來的紀錄。不過，卻有一個廣為人知的事實。當時的女皇艾麗亞擁有一個叫做天之星的寶物。", 1402400, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("艾麗亞女皇擁有的耶雷弗的寶物，天之星…那是楓之谷世界由女皇代代相傳的神秘寶物。具有保護女皇，強化女皇能力的力量。", 1402400, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("關於天之星的紀錄確實存在著，不過，那個寶石具備何種力量，根本就沒有人知道。", 1402104, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("這是當然的。畢竟西格諾斯並未擁有天之星。但我卻不一樣了。因為天之星傳給了我。", 1402400, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("耶雷弗受到黑魔法師和軍團長們的破壞後，天之星便消失了…這就是各位知道的一切。但是，女皇的信物天之星有可能這麼容易消失嗎？如此重要的物品，先祖們會坐視讓它就這樣消失不管嗎？", 1402400, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("當然不可能。天之星被暗地悄悄地帶到別的地方去了。為了不被黑魔法師和他的手下攻擊，於是便保守了此一秘密…交給擁有真正女皇血統的人…就這樣悄悄地流傳了數百年。", 1402400, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("妳想要主張就是妳嗎？", 1402105, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("這是不爭的事實。", 1402400, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("但、但是…妳要如何證明妳永遠的天之星是真的呢？妳擁有的也可能是假的！", 1402103, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("呵呵，說得好！天之星只是名聲廣為流傳而已，但是卻幾乎沒有人見過，是相當神秘的寶石。目前在楓之谷世界知道天之星長怎麼樣子的人…就只有看過天之星圖畫的各位而已。", 1402400, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("若是我擁有的天之星和各位所知道的是吻合的話，那答案就相當簡單了吧？", 1402400, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("喂，妳到底想說什麼呢？寶石不就長那個樣子嗎？也不能斷定其他地區並沒有關於天之星的紀錄呀？", 1402106, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("又不是數百年前的人，不對，就算是數百年前的人，也幾乎沒有人見過天之星…老實說，可能性實在太低了？", 1402400, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("還有其他證據。西格諾斯那脆弱的身體也是如此。倘若西格諾斯擁有真正的女皇血統，就不會被神獸的力量壓制住…就是因為她並未擁有真正女皇的血統，身體才會如此脆弱。西格諾斯，妳應該也很清楚吧？妳之所以會如此虛弱…", 1402400, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("放肆無禮！", 1402102, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("唉呀…若是有冒犯之處，那還真是抱歉！不過，我也沒說錯吧？", 1402400, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("我絕對不是要各位立刻相信我所說的話。不過，各位若是對我所說的話有些許的信任，至少也要深入討論一下吧？這就是妳的角色不是嗎，西格諾斯？", 1402400, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("…沒錯。我之所以能夠升到現今的地位…並非因為我很特別。而是天生的命運。", 1402100, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("若是有人懷疑我是否擁有正統性…這也是理所當然的。若是需要的話…就儘管提出疑問吧！", 1402100, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("西格諾斯！", 1402101, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("只因為是對的，就不斷地將他人捲入戰爭當中。儘管如此，我也只是一昧地在這裡讓大家保護而已。只因為我是女皇的關係，沒有其他理由。但是，倘若我沒有成為女皇的資格…", 1402100, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("能夠號召楓之谷世界的眾多人的資格…也就不會有。", 1402100, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("（聲音聽起來有所動搖，但是眼神卻相當堅定。看起來很脆弱，但是心志堅定！從絕對難以接受的策士的表情，以及一副想要戰鬥的騎士們的態度來看，倒是挺有人脈的呢？果然艾麗亞的…）", 1402100, [true, true], 17);
    } else if (status === i++) {
        ms.sendOthersTalk("好了，既然如此，就不需要一一解釋了。我就在此證明誰才擁有真正女皇的血統。天之星會在真正主人的手中發出光芒。耶雷弗的女帝西格諾斯…倘若妳擁有真正女皇的血統，就試著拿起這個天之星。", 1402400, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("假設妳是真正楓之谷世界的女皇，天之星也一定會發光。", 1402400, [true, true]);
    } else if (status === i++) {
        ms.showEffect(false, "phantom/skaia");
        ms.playSound("phantom/skaia");
        ms.getDirectionEffect(3, "", [0]);
        ms.wait(7500);
    } else if (status === i++) {
        ms.sendOthersTalk("...啊...", 1402100, [false, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("果然完全沒有發光。這樣還不足以當作證明嗎？", 1402400, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("......", 1402100, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("現在下結論還太早，女帝。", 1402102, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("沒錯，女帝。老實說，該如何知道那個光芒的真假呢？", 1402106, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("沒、沒錯！我也會使用散發光芒的魔法。", 1402103, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("神獸回來後，一切就會真相大白的！西格諾斯。絕對不能相信那個女人的話。", 1402104, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("若是您動搖的話，我們騎士也全都會動搖的！振作一點！", 1402105, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("現在才剛進入組成聯盟，楓之谷世界合而為一的初期而已，西格諾斯。說不定這只是為了動搖我們，讓我們這段時間的信任瓦解的陰謀。千萬不能被一個來路不明的女人所迷惑。", 1402101, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("所有...", 1402100, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("嗯…看來妳的騎士們想要否定真相呢。", 1402400, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("這段時間以賢明的方式在耶雷弗率領騎士，然後領導楓之谷世界的女帝…我並非否定妳的辛勞。不過，就是因為妳夠賢明，趁一切還來得及的時候，請做出正確的選擇。", 1402400, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("承認誰才是真正的女皇，讓出女皇的位子吧。", 1402400, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("然後將這項事實告訴聯盟。", 1402400, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("當然，我並非在催促妳。相信妳一定很混亂，我會給妳時間整理這一切的。若是懷疑我的話，可以繼續相關的調查。", 1402400, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("但是，最後還是會知道真相的。楓之谷世界真正的女皇是我希拉…", 1402400, [true, true]);
    } else if (status === i++) {
        ms.sendOthersTalk("（阿普雷德應該已經準備好了吧…輪到我上場了嗎？好，那麼先深呼吸，一、二、三！）", 1402400, [true, true], 17);
    } else if (status === i++) {
        ms.showEffect(false, "phantom/phantom");
        ms.getDirectionEffect(3, "", [0]);
        ms.wait(1500);
    } else if (status === i++) {
        ms.sendOthersTalk("還沒到下結論的時候吧?", 1402400, [false, true], 17);
    } else if (status === i++) {
        ms.wait(500);
    } else if (status === i++) {
        ms.forceStartQuest(25001);
        ms.EnableUI(0);
        ms.removeNPCRequestController(1402400);
        ms.removeNPCRequestController(1402401);
        ms.removeNPCRequestController(1402402);
        ms.removeNPCRequestController(1402403);
        ms.forceStartQuest(25010);
        ms.dispose();
        ms.warp(150000000);
    } else {
        ms.dispose();
    }
}