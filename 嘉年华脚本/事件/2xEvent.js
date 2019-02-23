/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：双倍活动
 *  @Author Kent 
 */

﻿var year;
var month;
var day;
var weekday;
var hour;
var cal;
var date;
var cheakdate;
var timestamp;
var setupTask;
var specialday = false;
var starday = "2016-01-19";
var endday = "2016-01-22";

function init() {
    scheduleChange();
}

function scheduleChange() {
    cal = java.util.Calendar.getInstance();

    weekday = cal.get(java.util.Calendar.DAY_OF_WEEK);
    hour = cal.get(java.util.Calendar.HOUR_OF_DAY);
    refreshDates(cal);
    cheakdate = year + "-" + month + "-" + day;

    if (cheakdate >= starday && cheakdate <= endday) {
        if (hour >= 0 && hour < 24) {
            specialday = true;
            startEvent();
        }
    } else if (weekday == 1 || weekday == 7) {
        if (hour >= 0 && hour < 24) {
            specialday = false;
            startEvent();
        }
    } else {
        cal.set(java.util.Calendar.DATE, cal.get(java.util.Calendar.DATE) + (7 - weekday));
        refreshDates(cal);
        var date = year + "-" + month + "-" + day + " 00:00:00.0";
        var timeStamp = java.sql.Timestamp.valueOf(date).getTime();
        setupTask = em.scheduleAtTimestamp("startEvent", timeStamp);
    }
}

function finishEvent() {
    em.DoubleRateEvent(false);
    scheduleChange();
}

function startEvent() {
    changeRates();
    refreshDates(cal);
    date = year + "-" + month + "-" + day + " 23:59:59.0";
    if (specialday) {
        date = endday + " 23:59:59.0";
    }
    timeStamp = java.sql.Timestamp.valueOf(date).getTime();
    setupTask = em.scheduleAtTimestamp("finishEvent", timeStamp);
}

function changeRates() {
    em.DoubleRateEvent(true);
    em.broadcastServerMsg(5120014, "双倍经验活动现在开始。", true);
}

function refreshDates(calendar) {
    year = calendar.get(java.util.Calendar.YEAR);
    month = calendar.get(java.util.Calendar.MONTH) + 1;
    if (Math.floor(month / 10) == 0) {
        month = "0" + month;
    }
    day = calendar.get(java.util.Calendar.DATE);
    if (Math.floor(day / 10) == 0) {
        day = "0" + day;
    }
}

function cancelSchedule() {
    setupTask.cancel(true);
}
