/* RED 1st impact
 The New Explorer
 Made by Daenerys
 */
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        qm.sendNextS("嗨!我的名字是麥加.第一次見到你呢,你是新來的#b冒險家#k吧?", 1);
    } else if (status == 1) {
        qm.sendNextPrevS("#b冒險家?#k", 17);
    } else if (status == 2) {
        qm.sendNextPrevS("沒錯.為了冒險而來到楓之谷世界的其他世界的人,我們都稱呼他們為冒險家.冒險家都是從這個#b楓之島#k開始冒險的.", 1);
    } else if (status == 3) {
        qm.sendNextPrevS("#b楓之島?#k", 17);
    } else if (status == 4) {
        qm.sendNextPrevS("嗯.楓之島!雖然原本只是座小島.隨著冒險家們的到來,漸漸有了各種設施,現在已經是很有規模的村莊了.也有像我這樣,以給你們這些新手冒險家幫助為職業.", 1);
    } else if (status == 5) {
        qm.sendNextPrevS("你說你叫#h0#......?初到楓之谷世界,要不要多聽一點我的說明?如果通過我給你的所有小考驗,我會給你對冒險很有幫助的禮物!", 1);
    } else if (status == 6) {
        qm.sendNextPrevS("如果不想聽我的說明,我可以馬上送你去村莊.不過,我就不會給你禮物了", 1);
    } else if (status == 7) {
        qm.sendSimpleS("了解了吧,那現在是選擇的時候了..你要選那邊?\r\n#b#L0# 仔細聽完麥加的說明領取禮物—新裝備.#l\r\n#L1# 不聽說明馬上移動到村莊.#l#k", 1);
    } else if (status == 8) {
        sel = selection;
        if (selection == 0) {
            qm.sendNextS("選的很好!多聽別人的建議,以後你在楓之谷世界生活就沒問題了.", 1);
            qm.forceStartQuest();
            qm.forceCompleteQuest();
            qm.gainExp(20);
            qm.dispose();
        } else if (selection == 1) {
            qm.sendNextS("好.那我馬上送你到楓葉村.", 1);
        }
    } else if (status == 9) {
        if (sel == 1) {
            qm.sendNextS("這是我給你的禮物!我給了你一些恢復藥水,之後記得打開消耗道具欄確認看看.", 1);
            qm.gainItem(2000013, 50)
            qm.gainItem(2000014, 50)
        }
    } else if (status == 10) {
        if (sel == 1) {
            qm.sendNextS("到楓葉村別忘了和#b路卡斯#k村長見面!他會給你到新世界的建議.", 1);
        }
    } else if (status == 11) {
        if (sel == 1) {
            qm.warp(4000020, 0);
            qm.forceStartQuest(32210);
        }
        qm.dispose();
    }
}