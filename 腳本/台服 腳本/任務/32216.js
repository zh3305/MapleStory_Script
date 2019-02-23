/*
 RED 1st impact
 Job selection
 Sugar
 Made by Pungin
 */


var status = -1;
var sel = 0;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 7) {
            qm.dispose();
            return;
        }
        status--;
    }

    if (status == 0) {
        qm.sendNextS("幫我這件事也是,剛剛的怪物也是, #h #已經是很像樣的冒險家了呢.你決定好要選什麼職業了嗎?", 1);
    } else if (status == 1) {
        qm.sendNextPrevS("#b什麼職業?#k", 17);
    } else if (status == 2) {
        qm.sendNextPrevS("嗯,你現在去維多利亞島之後,可以轉職成其他五種職業.有...戰士,魔法師,弓箭手,盜賊和海盜這五種職業.", 1);
    } else if (status == 3) {
        qm.sendNextPrevS("#b那些職業各有什麼不同?#k", 17);
    } else if (status == 4) {
        qm.sendNextPrevS("戰士著重於力量和體力,適合近距離戰鬥,防禦力也很傑出,所以不容易打倒.魔法師則跟戰士不同,是用魔法戰鬥,所以比起力量,智力對魔法師來說更重要,使用魔法可以在遠處一次攻擊多位敵人.", 1);
    } else if (status == 5) {
        qm.sendNextPrevS("最適合遠攻的就是弓箭手,弓箭手在遠處抓準距離射箭的能力很出色.盜賊不亞於戰士,可以近攻.但是對盜賊來說,快速的戰鬥比力量還來得重要.", 1);
    } else if (status == 6) {
        qm.sendNextPrevS("最後是海盜...有點難以用一句話說明海盜的特徵.海盜可以用體術近距離攻擊,遠距離也可以用槍或大砲攻擊.不管是近攻或遠攻,攻擊效果很華麗並且很有個性!", 1);
    } else if (status == 7) {
        qm.sendSimple("船長說,現在先決定的話,他會先聯絡好,在一到達港口時就能接到轉職官的聯絡.#h # 要選擇什麼職業? \r\n#b#L1# 擁有強大力量和防禦力的戰士#l\r\n#L2# 高智力的魔法師#l\r\n#L3# 遠攻和距離感出色的弓箭手#l\r\n#L4# 快速戰鬥的盜賊#l \r\n#L5# 華麗獨特風格的海盜#l#k");
    } else if (status == 8) {
        sel = selection;
        if (selection == 1) {
            qm.sendNextS("嗯! #h # 一定可以成為很帥氣的  戰士!", 1);
        } else if (selection == 2) {
            qm.sendNextS("嗯! #h # 一定可以成為很帥氣的  魔法師!", 1);
        } else if (selection == 3) {
            qm.sendNextS("嗯! #h # 一定可以成為很帥氣的  弓箭手!", 1);
        } else if (selection == 4) {
            qm.sendNextS("嗯! #h # 一定可以成為很帥氣的  盜賊!", 1);
        } else if (selection == 5) {
            qm.sendNextS("嗯! #h # 一定可以成為很帥氣的  海盜!", 1);
        }
    } else if (status == 9) {
        if (sel == 1) {
            qm.sendNextS("#h # 那我要成為魔法師嗎?雖然我不是很可靠,但說不定我可以在遠處用魔法幫人.", 1);
        } else {
            qm.sendNextS("我想成為戰士.我希望以後就算不靠別人幫助,也可以靠自己的力量解決問題.當然,培養出的力量如果可以幫助別人那就更好了.", 1);
        }
    } else if (status == 10) {
        qm.getDirectionStatus(true);
        qm.EnableUI(1, 0);
        qm.environmentChange("advStory/whistle", 5);
        qm.getDirectionEffect(1, "", [2000]);
        qm.showWZEffect("Effect/Direction3.img/adventureStory/Scene2");
    } else if (status == 11) {
        qm.sendNextS("現在船好像要出發了!", 1);
    } else if (status == 12) {
        qm.warp(4000004);
        qm.forceCompleteQuest();
        while (qm.getLevel() < 10) {
            qm.levelUp();
        }
        qm.forceStartQuest(1406, sel);
        qm.forceStartQuest(17901);
        qm.introEnableUI(0);
        qm.DisableUI(false);
        qm.dispose();
    }
}