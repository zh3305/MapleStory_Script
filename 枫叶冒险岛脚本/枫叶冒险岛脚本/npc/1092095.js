/*

 脚本功能：疯狂挤奶
 
 */

var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var day = ca.get(java.util.Calendar.DATE);//获取日
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE);//获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒
var chance1 = Math.floor(Math.random()*200+1);
var chance2 = Math.floor(Math.random()*50);
var chance3 = (Math.floor(Math.random()*20)+1);
var chance4 = Math.floor(Math.random()*1+6);

function start() {
	if((minute >= 30 && minute <= 33)){
		cm.gainNX(1, chance4);
		cm.sendOk("你挤出 #r"+ chance4 +"#k 点卷");
		cm.worldMessage(0x18, "『疯狂挤奶』 : 恭喜 " + cm.getChar().getName() + " 在市场12洞门口奶牛挤出 "+ chance4 +" 点卷.");
		cm.dispose();
	}else{
		cm.sendOk("      #d当前服务器时间: #r"+hour+" #b点 #r"+minute+" #b分\r\n\r\n         #e#r疯狂挤奶活动暂未开启\r\n\r\n#r     活动将在每小时30分-33分开始#n\r\n\r\n#b开启活动后请疯狂点击我。这样您将随机获得一些点卷奖励。#k");
		cm.dispose();
	}
}