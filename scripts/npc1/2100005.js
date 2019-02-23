/* Author: aaroncsn (MapleSea Like)
	NPC Name: 		Shati
	Map(s): 		The Burning Road: Ariant(2600000000)
	Description: 	Assistant Hairdresser
*/

var status = 0;
var beauty = 0;
var mhair = Array(30250, 30350, 30270, 30150, 30300, 30600, 30160, 30700, 30720, 30420);
var fhair = Array(31040, 31250, 31310, 31220, 31300, 31680, 31160, 31030, 31230, 31690, 31210, 31170, 31450);
var hairnew = Array();

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status >= 0) {
            if (beauty == 1) {
                cm.sendNext("看来还没有做好心理准备.那决定好后再来找我吧.");
            }
            if (beauty == 2) {
                cm.sendNext("好，知道了.那下好决心后再来找我吧.");
            }
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            cm.sendSimple("我是专门研究发型的夏特. 是玛兹拉的助手. 要是您有#b万能会员卡#kk的话，我可以帮你做做头发噢.\r\n#b#L0# 换发型(使用普通会员卡)#l\r\n#L1# 染色(使用普通会员卡)#l");
        } else if (status == 1) {
            if (selection == 0) {
                beauty = 1;
                hairnew = Array();
                if (cm.getChar().getGender() == 0) {
                    for (var i = 0; i < mhair.length; i++) {
                        hairnew.push(mhair[i] + parseInt(cm.getChar().getHair() % 10));
                    }
                }
                if (cm.getChar().getGender() == 1) {
                    for (var i = 0; i < fhair.length; i++) {
                        hairnew.push(fhair[i] + parseInt(cm.getChar().getHair() % 10));
                    }
                }
                cm.sendYesNo("使用普通会员卡就可以随机换发型. 真的要使用#b万能会员卡#k换发型么?");
            } else if (selection == 1) {
                beauty = 2;
                haircolor = Array();
                var current = parseInt(cm.getChar().getHair() / 10) * 10;
                for (var i = 0; i < 8; i++) {
                    haircolor.push(current + i);
                }
                cm.sendYesNo("使用一般会员卡的话会随机换发色. 真的要使用#b万能会员卡#k换换么?");
            }
        } else if (status == 2) {
            cm.dispose();
            if (beauty == 1) {
                if (cm.haveItem(5150026) == true) {
                    cm.gainItem(5150026, -1);
                    cm.setHair(hairnew[Math.floor(Math.random() * hairnew.length)]);
                    cm.sendOk("好了,让朋友们赞叹你的新发型吧!");
                } else {
                    cm.sendNext("看起来你并没有我们的会员卡,我恐怕不能给你理发,我很抱歉.请你先购买吧.");
                }
            }
            if (beauty == 2) {
                if (cm.haveItem(5151021) == true) {
                    cm.gainItem(5151021, -1);
                    cm.setHair(haircolor[Math.floor(Math.random() * haircolor.length)]);
                    cm.sendOk("好了,让朋友们赞叹你的新发色吧!");
                } else {
                    cm.sendNext("看起来你并没有我们的会员卡,我恐怕不能给你染发,我很抱歉.请你先购买吧.");
                }
            }
        }
    }
}