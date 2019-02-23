var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        cm.sendNextS("嗯…", 3);
    } else if (status == 1) {
        cm.sendNextPrevS("(這裡是…  是一個陌生的房間。 不是剛才的那個洞穴… 嗚嗯… 全身都好痛。)", 3);
    } else if (status == 1) {
        cm.getDirectionEffect(3, "", [1]);
        cm.getDirectionEffect(1, "", [600]);
    } else if (status == 2) {
        cm.getDirectionEffect(3, "", [0]);
        cm.sendNextS("(雖然看起來很陌生，但卻像是醫療室… 這裡是什麼地方呢？ 我怎麼了呢？)", 3);
    } else if (status == 3) {
        cm.sendNextPrevS("(稍微整理一下整個情況。)", 3);
    } else if (status == 4) {
        cm.sendNextPrevS("(黑魔法師沒有遵守和我的約定，破壞了媽媽和戴維安居住的艾納斯島大陸南部地區。 故鄉只剩下廢墟而已… 到底是為什麼…)", 3);
    } else if (status == 5) {
        cm.sendNextPrevS("(吊飾！ 吊飾跑去哪了？)", 3);
    } else if (status == 6) {
        cm.sendNextPrevS("(在戰鬥的過程中弄丟了嗎？ 與家人相關的物品竟然一個也不剩了… 嗚嗯…)", 3);
    } else if (status == 7) {
        cm.getDirectionEffect(3, "", [2]);
        cm.getDirectionEffect(1, "", [600]);
    } else if (status == 8) {
        cm.getDirectionEffect(3, "", [0]);
        cm.sendNextS("(為了向黑魔法師報仇而去時間神殿… 途中派遣了 #p2151009#。 若是還在的話，應該早就喪命在其他軍團長的手中了…  雖然有#p2159309#從中妨礙，但很快就撤退了…  仔細想想，當時英雄們好像有來？)", 3);
    } else if (status == 9) {
        cm.sendNextPrevS("(黑魔法師果然很強。 本以為只要賭上性命，至少可以讓他受到傷害的… 結果只是打破防護魔法，稍微碰到他的衣袖而已…  雖然剛開始還期待可以擊敗他的…)", 3);
    } else if (status == 10) {
        cm.sendNextPrevS("(不過，為何我還活著呢？ 黑魔法師不可能放過背叛自己的部下呀… 難道是有人從中造成妨礙嗎？ 是那些被稱為英雄的人嗎？)", 3);
    } else if (status == 11) {
        cm.sendNextPrevS("(呼… 頭好痛。 光是靠推測根本就無法確定任何事情… 畢竟現在無法知道這裡到底是什麼地方… 在萬物都被破壞的楓之谷世界當中竟然還有這種地方，真是令人驚訝。 而且那些物品… 感覺好陌生。)", 3);
    } else if (status == 12) {
        cm.getDirectionEffect(3, "", [1]);
        cm.getDirectionEffect(1, "", [600]);
    } else if (status == 13) {
        cm.getDirectionEffect(3, "", [0]);
        cm.sendNextS("(就先檢查一下身體狀態吧… 雖然不清楚怎麼回事，但為了應對必要情況，就必須擁有力量… 力量還有多少呢？)", 3);
    } else if (status == 14) {
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg0/13", [2000, 0, -100, 0, 0]);
        cm.getDirectionEffect(1, "", [1500]);
    } else if (status == 15) {
        cm.sendNextS("(…可惡！ 力量幾乎已經所剩無幾了…！ 光是看減少的力量之盾，就可以知道我的身體狀況了。 幾乎所有能力都消失了。 就算是負傷，沒想到我的身體會虛弱到這種程度… 這樣像話嗎？)", 3);
    } else if (status == 16) {
        cm.sendNextPrevS("(變成這麼弱，若是敵人出現的話，我撐得住嗎？ 當時，那個戴帽子的男人… 雖然他似乎不是敵人，但卻還是未知數…)", 3);
    } else if (status == 17) {
        cm.sendNextPrevS("(呼… 反正想要恢復力量，還需要好一段時間。 這樣待著根本就無法改變些什麼… 還不如起來多動一下。)", 3);
    } else if (status == 18) {
        cm.getDirectionEffect(3, "", [1]);
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg1/3", [2000, 0, -100, 0, 0]);
        cm.getDirectionEffect(1, "", [1000]);
    } else if (status == 19) {
        cm.getDirectionEffect(3, "", [0]);
        cm.sendNextS("(好像有什麼聲音…)", 3);
    } else if (status == 20) {
        cm.sendNextPrevS("本來想確認過和發電所的能量傳送裝置一樣的物品與蛋連接在一起後就回來的。 至少埃德爾斯坦的能量應該沒有被帶走。 不過那時候，他打破了蛋，然後將黑色翅膀全都消滅了。", 5, 2159344);
    } else if (status == 21) {
        cm.sendNextPrevS("老實說，要不是 J你親口說出那番話，這件事根本就荒謬到令人難以置信。 黑色翅膀到底在做些什麼呢？ 而且那個人… 他的背上甚至還有翅膀。 至少可以知道他並不是平凡的人類。", 5, 2159315);
    } else if (status == 22) {
        cm.sendNextPrevS("(是在說我嗎？)", 3);
    } else if (status == 23) {
        cm.sendNextPrevS("而且他使用的也是初次見到的技術。 非常的強悍… 老實說，要不是他失去力量變成可以壓制的狀態，我就不會帶他來了。 說不定會帶來危險。", 5, 2159344);
    } else if (status == 24) {
        cm.sendNextPrevS("難道是實驗體嗎？ 斐勒亦是如此，黑色翅膀在礦山深處進行何種實驗，根本就沒有人知道。 如果是瘋狂科學家傑利麥勒創造出來的實驗體，那一定也就是受害者。", 5, 2159312);
    } else if (status == 25) {
        cm.sendNextPrevS("可惡的傑利麥勒… 我一定會消滅那個傢伙的！", 5, 2159314);
    } else if (status == 26) {
        cm.sendNextPrevS("他差不多也該醒了吧。 得去確認一下才行。", 5, 2159344);
    } else if (status == 27) {
        cm.getDirectionEffect(3, "", [2]);
        cm.getDirectionEffect(1, "", [2000]);
    } else if (status == 28) {
        cm.getDirectionEffect(3, "", [1]);
        cm.spawnNPCRequestController(2159344, -600, -20);
        cm.getDirectionEffect(1, "", [30]);
    } else if (status == 29) {
        cm.getDirectionEffect(3, "", [0]);
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg1/3", [1500, 0, -100, 1, 1, 0, 0, 36951913]);
        cm.getDirectionEffect(1, "", [1000]);
    } else if (status == 30) {
        cm.sendNextS("原來你已經醒來了。 身體還好吧？ 你的臉色還很差…", 5, 2159344);
    } else if (status == 31) {
        cm.sendNextPrevS("…是你救了我嗎？", 3);
    } else if (status == 32) {
        cm.sendNextPrevS("總不能對一個倒在四周都是黑色翅膀的人見死不救吧。 從目前的情況看來，我們倆的利害關係似乎是一樣的。 你看起來也有很多話要說… 和我一起走吧。", 5, 2159344);
    } else if (status == 33) {
        cm.sendNextPrevS("(審問？ 勸誘？ 目前還不知道。 至少醒來看見的人是比黑色翅膀更具善意的…) 很好。", 3);
    } else {
        cm.removeNPCRequestController(2159344);
        cm.dispose();
        cm.warp(931050010, 0);
    }
}