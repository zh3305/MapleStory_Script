var status = -1;
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var day = ca.get(java.util.Calendar.DATE);//获取日
var hour = ca.get(java.util.Calendar.HOUR); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE);//获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendNext("呵呵，好吧，你继续玩吧。");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
            cm.sendYesNo("#e#r爆物如下：#n\r\n#v4001839# #v2049323# #v5062009# #v5062500# #v5062024# #v2028048# #v2431743# \r\n\r\n#b你想进入地图吗，看好时间哦。\r\n#d每小时#r10#b#d分#r00#d秒-#r15#d分#r00#d秒开始？");
    } else if (status == 1) {
    //    cm.sendNext("真没耐心。如果你非要走的话，我也不会拦你。再见。");
  //  } else if (status == 2) {
        cm.warp(910040001);
           cm.worldSpouseMessage(0x0A, "[被召唤的怪物] : 玩家 " + cm.getChar().getName() + " 在市场雪人飞到了隐藏地图等待被召唤的怪物中!");
        cm.dispose();
    }
}