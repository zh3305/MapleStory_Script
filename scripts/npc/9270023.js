/* 	Noel
	Singapore Random Face Changer
	Credits to aaron and cody
	Side note by aaron [If there is something wrong PM me on fMS]
*/
var status = 0;
var beauty = 0;
var mface = Array(20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20012);
var fface = Array(21001, 21002, 21003, 21004, 21005, 21006, 21008, 21012, 21014, 21016);
var facenew = Array();

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        facenew = Array();
        if (cm.getChar().getGender() == 0) {
            for (var i = 0; i < mface.length; i++) {
                facenew.push(mface[i] + cm.getChar().getFace() % 1000 - (cm.getChar().getFace() % 100));
            }
        }
        if (cm.getChar().getGender() == 1) {
            for (var i = 0; i < fface.length; i++) {
                facenew.push(fface[i] + cm.getChar().getFace() % 1000 - (cm.getChar().getFace() % 100));
            }
        }
        cm.sendYesNo("如果你使用常规会员卡，那么你的面容将会随机变成新的样子…你是否使用#b万能会员卡#k，继续更换面容？");
    } else if (status == 1) {
        if (cm.setAvatar(5152037, facenew[Math.floor(Math.random() * facenew.length)]) == 1) {
            cm.sendOk("好了，手术完成。自己看一看吧，这里是镜子…感觉如何？我认为这看起来就是一件杰作…哈哈哈哈，等你想要新面容的时候再联系我，好吗？");
        } else {
            cm.sendOk("嗯…你似乎没有我们这里需要的特定会员卡…很抱歉，但没有会员卡我们就无法为你做整形手术。");
        }
        cm.dispose();
    }
}