var status = 0;
var starTime = "上午08时00分00秒";    //注意时间日期格式。时分秒分别两位数字,前面可为零
var endTime = "下午02时00分00秒"     //时间为12小时制，前面必须加上午或下午 

function start() {
status = -1;
action(1, 0, 0);
}

function action(mode, type, selection) {
if (mode == -1) {
cm.dispose();
} else {
if (mode == 0 && status == 0) {
cm.dispose();
return;
}
if (mode == 1)
status++;
else
status--;
if (status == 0) {			
var myDate = new Date();
if(starTime > endTime){
if(myDate.toLocaleTimeString() > starTime || myDate.toLocaleTimeString() < endTime){
if(cm.getBossLog("huodong") >= 5){
cm.sendOk("此活动每天只有5次机会,您今天已经不能再参加了");
cm.dispose();
}else{
cm.sendSimple("#d现在时间是:#r" + myDate.toLocaleString() + "\r\n#b沉睡森林跳跳活动现在可以开始进入.\r\n#d此次活动到#r" +  endTime + "#d结束\r\n\r\n#b #L0#进入活动地图#l      #L1#查看活动介绍#l");
}
}else{
cm.sendSimple("您好,现在不是活动时间。\r\n此活动开始时间是: #r" + starTime + "\r\n#k此活动结束时间是:#r " + endTime + "#k\r\n当前服务器时间为: #r" + myDate.toLocaleString() + "\r\n   #b#L1#查看任务介绍#l");						
}
}else{
if(myDate.toLocaleTimeString() > starTime && myDate.toLocaleTimeString() < endTime){
if(cm.getBossLog("huodong") >= 5){
cm.sendOk("此活动每天只有5次机会,您今天已经不能再参加了");
cm.dispose();
}else{							
cm.sendSimple("现在时间是:#r" + myDate.toLocaleString() + "\r\n#b沉睡森林跳跳活动现在可以开始进入.\r\n#d此次活动到#r" +  endTime + "#d结束\r\n\r\n#b #L0#进入活动地图#l      #L1#查看活动介绍#l");
}
}else{
cm.sendSimple("您好,现在不是活动时间。\r\n此活动开始时间是: #r" + starTime + "\r\n#k此活动结束时间是:#r " + endTime + "#k\r\n当前服务器时间为: #r" + myDate.toLocaleString() + "\r\n   #b#L1#查看任务介绍#l");
}
}                                
} else if(status == 1){
if (selection == 0){
if(cm.getChar().getReborns > 0 || cm.getLevel() >= 120){
cm.setBossLog("huodong");
cm.getC().getChannelServer().getMapFactory().getMap(105040310).setOnUserEnter("huodong_Msg");
cm.warp(105040310,0);
cm.dispose();
}else{
cm.sendOk("#b此活动只有1转以上或120级以上的玩家有资格参加。");
cm.dispose();
}
}else if(selection == 1){
cm.sendOk("此活动于每天#b" + starTime + "#k开始到#b" + endTime + "#k结束! 活动时间内,1转以上或120级以上的玩家可通过此NPC传送进跳跳活动地图,活动分为两关.跳到最上面,点击最顶上的#v4031025#NPC,既可随机获得丰厚的奖励.每人每天限制参加#r5#k次." );
cm.dispose();
}
}
}
}