/* global cm */

var status = -1;

function start() {
    if (cm.getMapId() === 915000300) {
        cm.dispose();
    } else {
        cm.sendNext("咿咦，沒看過的人。你是新人嗎?");
    }
}

function action(mode, type, selection) {
    if (mode === 1) {
        status++;
    } else {
        status--;
    }

    var i = -1;
    if (status <= i++)
        ms.dispose();
    else if (status === i++)
        cm.sendNextPrevS("你在說些什麼呢，奇丹？難道你已經忘記我了嗎？上次明明已經向你打過招呼了！", 2);
    else if (status === i++)
        cm.sendNextPrev("哦…是這樣嗎？很抱歉，我沒什麼印象了…");
    else if (status === i++)
        cm.sendNextPrevS("雖然我知道來往的人很多，不過請你稍微記一下長相。我明明已經跟你打過招呼好幾次了…真是令人難過。", 2);
    else if (status === i++)
        cm.sendNextPrev("真、真是抱歉。就如同你所知道的，耶雷弗的氣氛本來就不是很好。騎士團全都聚集在一起，所以當然會讓人搞混。");
    else if (status === i++)
        cm.sendNextPrevS("…氣氛有這麼糟糕嗎？", 2);
    else if (status === i++)
        cm.sendNextPrev("這是理所當然的。一直以來伺候的西格諾斯女王竟然有可能不是真正女皇的血統…聽到這個消息後，誰高興得起來呢？");
    else if (status === i++)
        cm.sendNextPrevS("呼…也是，原來如此。因為我也是得知消息後才跑來的。", 2);
    else if (status === i++)
        cm.sendNextPrev("秉持堅定意志率領騎士團的西格諾斯同樣也深受打擊的樣子。她的臉色看起來相當慘白。唉…");
    else if (status === i++)
        cm.sendNextPrevS("奇丹似乎很討厭西格諾斯以外的其他女皇吧？", 2);
    else if (status === i++)
        cm.sendNextPrev("這是理所當然的。大家明明很清楚她是多麼地努力。騎士團之所以能夠如此壯大，也全都是透過她的努力。但是，卻突然冒出另一個女皇…");
    else if (status === i++)
        cm.sendNextPrevS("真是難以置信。除了西格諾斯以外，還有誰會是擁有真正女皇血統的人呢？", 2);
    else if (status === i++)
        cm.sendNextPrev("那個叫做希拉的女人主張自己擁有真正女皇的血統…那番話似乎不是沒有依據的。從騎士團長們如此驚訝這一點來看的話…");
    else if (status === i++)
        cm.sendNextPrevS("所以氣氛才會這麼的…", 2);
    else if (status === i++)
        cm.sendNextPrev("沒錯。這種時候，若是神獸能在就好了，偏偏這個時候卻不在…");
    else if (status === i++)
        cm.sendNextPrev("那個女人為何偏偏要挑這種時候證明血統呢？神獸在的時候證明不是比較好嗎？嘖嘖！");
    else if (status === i++)
        cm.sendNextPrevS("哈啊…就是說呀。", 2);
    else if (status === i++)
        cm.sendNextPrev("希望這件事情能順利解決…如果西格諾斯女王並未擁有真正女皇的血統，那會變成怎麼樣呢？我絕對不要伺候除了西格諾斯以外的女皇…");
    else if (status === i++)
        cm.sendNextPrev("耶雷弗也無法劃分為二…這樣下去一定會造成騷亂的…");
    else if (status === i++)
        cm.sendNextPrevS("請不要太擔心，奇丹。說不定事情能夠順利解決呀？", 2);
    else if (status === i++)
        cm.sendNextPrev("但願如此…既然事情會鬧這麼大，就表示那個叫做希拉的女人也有相當程度的自信。");
    else if (status === i++)
        cm.sendNextPrevS("大概是吧…這也不一定呀？說不定會突然出現關鍵人物…解決這件事情。", 2);
    else if (status === i++)
        cm.sendNextPrev("關鍵人物？…到底是誰呢？");
    else if (status === i++)
        cm.sendNextPrevS("誰知道呢…哈哈哈，總而言之，奇丹…請不要太擔心！那我也要去大會議場了。", 2);
    else if (status === i++)
        cm.sendNextPrev("對。再見。");
    else
        cm.dispose();
}