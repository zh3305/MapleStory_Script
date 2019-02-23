var status = -1;
var year;
var month;
var day;
var calendar;
var date;
var starDate = "2015-09-26";
var endDate = "2015-09-27";

function action(mode, type, selection) {
    calendar = java.util.Calendar.getInstance();
    year = calendar.get(java.util.Calendar.YEAR);
    month = calendar.get(java.util.Calendar.MONTH) + 1;
    if (Math.floor(month / 10) == 0) {
        month = "0" + month;
    }
    day = calendar.get(java.util.Calendar.DATE);
    if (Math.floor(day / 10) == 0) {
        day = "0" + day;
    }
    date = year + "-" + month + "-" + day;
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendNext("看来你对这个并不感兴趣..");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        if (date >= starDate && date <= endDate || cm.isAdmin()) {
            cm.sendYesNo("你是否想要就前往#b#e射手村猎场#n#k收集#r2015满月钱币#k？");
        } else {
            cm.sendOk("下次活动开放时间:" + starDate + " 至 " + endDate + " ,现在活动还没有开始!。");
            cm.dispose();
        }
    } else if (status == 1) {
        cm.warp(921170004, 0);
        cm.dispose();
    }
}
