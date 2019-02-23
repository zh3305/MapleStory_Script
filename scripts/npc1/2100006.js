/* Author: aaroncsn (MapleSea Like)
	NPC Name: 		Mazra
	Map(s): 		The Burning Road: Ariant(2600000000)
	Description: 	Hair Salon Owner
*/

var status = 0;
var beauty = 0;
var mhair = Array(30030, 30020, 30000, 30130, 30350, 30190, 30110, 30180, 30050, 30040, 30160);
var fhair = Array(31050, 31040, 31000, 31060, 31090, 31020, 31130, 31120, 31140, 31330, 31010);
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
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            cm.sendSimple("呵呵呵……知道在炎热的沙漠里需要换换发型，你可真是个时髦的人。只要你有万能高级美发卡，我可以帮你更换发型。\r\n#b#L0#更换发型（使用高级会员卡）#l\r\n#L1#染色（使用高级会员卡）#l");
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
                cm.sendStyle("呵呵呵～只要有#b万能会员卡#k，我就可以帮你更换发型。挑选你喜欢的发型吧。", hairnew, 5150052);
            } else if (selection == 1) {
                beauty = 2;
                haircolor = Array();
                var current = parseInt(cm.getChar().getHair() / 10) * 10;
                for (var i = 0; i < 8; i++) {
                    haircolor.push(current + i);
                }
                cm.sendStyle("有时换换发色就能换心情…呼呼.. 我来帮你换，你有#b万能会员卡#k的话选选看你想要的颜色吧.", haircolor, 5151036);
            }
        } else if (status == 2) {
            cm.dispose();
            if (beauty == 1) {
                if (cm.haveItem(5150052) == true) {
                    cm.gainItem(5150052, -1);
                    cm.setHair(hairnew[selection]);
                    cm.sendOk("好了,让朋友们赞叹你的新发型吧!");
                } else {
                    cm.sendNext("看起来你并没有我们的高级会员卡,我恐怕不能给你染发,我很抱歉.请你先购买吧.");
                }
            }
            if (beauty == 2) {
                if (cm.haveItem(5151036) == true) {
                    cm.gainItem(5151036, -1);
                    cm.setHair(haircolor[selection]);
                    cm.sendOk("好了,让朋友们赞叹你的新发色吧!");
                } else {
                    cm.sendNext("看起来你并没有我们的高级会员卡,我恐怕不能给你染发,我很抱歉.请你先购买吧.");
                }
            }
        }
    }
}