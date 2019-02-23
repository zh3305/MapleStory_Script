/*
	武陵道场公布
*/
var status = -1;
var sel;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.sendNext("#b(Once I hurried took my hand off the notice, the mystifying ayra disappeared as well.)");
        cm.safeDispose();
        return;
    }
    if (status == 0) {
        cm.sendSimple("#e< 公告 >#n\r\n凡是有勇气挑战武陵道场者，欢迎你前来武陵道场！-武公-\r\n\r\n#b#L0# 挑战武陵道场！#l\r\n#L1# 详细阅读公告#l")
    } else if (status == 1) {
        sel = selection;
        if (sel == 1) {
            cm.sendNext("#e< 公告：挑战吧！ >#n\r\n我是武陵道场的主人名叫武公。很久以前我是在武陵山开始修练仙术，现在我的内功已达到快超越极限的阶段。以前武陵道场的主人懦弱到不象样的程度。所以今天开始以我接管武陵道场。只有强者可以拥有武陵道场的资格。\r\n想要得到武术指点的人尽管来挑战！或着想要挑战我的人也无妨。我会让你知道你的无知！！");
        } else {
            cm.sendYesNo("#b(Once I laid my hands on the notice, a mystifying force started to surround me from head to toe.)#k\r\n\r\nWould you like to be transfered to Mulung Training Tower?");
        }
    } else if (status == 2) {
        if (sel == 1) {
            cm.sendNextPrev("备注：欢迎你来挑战。如果没有勇气的话，找其它伙伴一起也无妨。");
        } else {
            cm.saveLocation("MULUNG_TC");
            cm.warp(925020000, 0);
            cm.dispose();
        }
    } else if (status == 3) {
        cm.dispose();
    }
}