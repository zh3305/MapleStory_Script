var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
    }

    if (status == 0) {
        cm.sendNext("看來，你似乎已經知道你要走哪條路了。很好。剩下來的事就是你進行選擇了。");
    } else if (status == 1) {
        cm.sendNext("騎士團長們在左邊正等著你呢。仔細聽一聽他們的話，選擇一條你所希望的路。那是一條為你而準備的路…");
    } else {
        cm.dispose();
    }
}