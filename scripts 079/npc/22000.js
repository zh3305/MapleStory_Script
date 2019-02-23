importPackage(net.sf.odinms.client);
var status = 0;
var zz =" 5元冒险岛"; //这里设置名字
var ttt ="#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//美化1
var ttt2 ="#fUI/UIWindow/Quest/icon6/7#";//"+ttt2+"//美化2
var ttt3 ="#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//美化圆
var ttt4 ="#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//美化New
var ttt5 ="#fUI/UIWindow/Quest/icon0#";//"+ttt5+"//美化!
var ttt6 ="#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//美化会员
var temp = "#fEtc/pachinko/controller/base/1#";
var temp2 = "#fEtc/SpeedAnimationQuiz/BeijingOlympic/AniQuiz/5/ani/1#";
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
if(cm.getChar().getVip() <= 0){
var vipstr = "普通玩家";					
}else if(cm.getChar().getVip() == 1){
var vipstr = ""+ttt6+" 5元会员①";					
}else if(cm.getChar().getVip() == 2){
var vipstr = ""+ttt6+" 5元会员②";					
}else if(cm.getChar().getVip() == 3){
var vipstr = ""+ttt6+" 5元会员③";
}else if(cm.getChar().getVip() == 4){
var vipstr = ""+ttt6+" 5元会员④";	
}else if(cm.getChar().getVip() == 5){
var vipstr = ""+ttt6+" 5元会员⑤";					
}else{
var vipstr = ""+ttt6+" 5元会员⑥";					
}
if (cm.getPlayer().getnld() >= 0) {
var text = "\r\n	#L19#"+ttt+"快速进行转生 >>>> [快速方便]"+ttt2+"#l\r\n	#L8#"+ttt+"打开商店系统 >>>> [快速买药]"+ttt2+"#l\r\n";

text +="	#L1900##r"+ttt+"锁定特殊装备 >>>> [快速方便]"+ttt2+"#l\r\n	#L1901##r"+ttt+"销毁特殊装备 >>>> [快速方便]"+ttt2+"#l\r\n	#L1900002#"+ttt+"打开会员系统 >>>> [会员功能]"+ttt2+"#l";

if (cm.getPlayer().getRw13() == 0) {

text +="\r\n\r\n   #L10##d"+ttt3+"领取在线修炼点(#r您目前无修炼点可领取#k)"+ttt3+"#l ";

} else{

text +="\r\n\r\n   #L9##d"+ttt3+"领取在线修炼点(您目前有#r" + cm.getChar().getRw13() + "#k#d点)"+ttt3+"#l ";

}

text +="\r\n   #L19033##b"+ttt3+"每日领取黄金猪猪2个#r[需转升2次]"+ttt3+"#l ";

cm.sendSimple("#r"+cm.mxdmz()+"冒险岛#k,拍卖系统.\r\n	#L1##b"+ttt+"返回自由市场 >>>> [快速方便]"+ttt2+"#l\r\n	#L20#"+ttt+"快速进行转职 >>>> [快速方便]"+ttt2+"#l"+
text);

}
} else if (status == 1) {
if (selection == 1) {
if (cm.getPlayer().getMapId() >=910000000 && cm.getPlayer().getMapId() <=910000022) {
cm.sendOk("您已经在自由市场中间了.");
cm.dispose();
}else{
cm.warp(910000000,0);
cm.sendOk("成功传送.");
cm.dispose();
}	
}			
if (selection == 2) {
cm.openShop( 603); 
cm.dispose();   
}
if (selection == 18) {
cm.openNpc(9310059); 
}
if (selection == 19) {
cm.openNpc(9201023); 
}
if (selection == 1900) {
cm.openNpc(1063004); 
}
if (selection == 19034) {
cm.openNpc(9900001); 
}
if (selection == 1900001) {
cm.openNpc(9100000); 
}
if (selection == 1900002) {
cm.openNpc(2040036); 
}
if (selection == 1901) {
cm.openNpc(1063005); 
}
if (selection == 1902) {
cm.openNpc(2040037);
}
if (selection == 19033) {
if(cm.getPlayer().getReborns() >= 2 && cm.getBossLog("ZhuZhu")< 1) { 
cm.gainItem(4032226, 2); 
cm.setBossLog("ZhuZhu"); 
cm.getPlayer().dropMessage(1, "成功!");
cm.dispose(); 
}else{
cm.getPlayer().dropMessage(1, "请明天再来，或者转生次数未有2次.");
cm.dispose(); 
}
}
if (selection == 23) {
cm.openNpc(2040031); 
}
if (selection == 20) {
cm.openNpc(9310057); 
}
if (selection == 22) {
cm.openShop(5001); 
}
if (selection == 21) {
if (cm.getPlayer().getNX() >=5000) {  
cm.gainNX(-5000); 
cm.openNpc(2002000); 
}else{
cm.getPlayer().dropMessage(1, "打开需要5,000点卷.");
cm.dispose(); 
}
}

if (selection == 4) {
cm.openNpc(2040049);   
}
if (selection == 9) {
var zengjia=cm.getChar().getRw13();
cm.gainrw15(+zengjia);
cm.setRw13(0);
cm.getPlayer().dropMessage(1, "成功领取"+zengjia+"点修炼点.");
cm.dispose(); 
}
if (selection == 10) {
cm.getPlayer().dropMessage(1, "目前你没有修炼点数可以领取.");
cm.dispose();
}
if (selection == 11) {
cm.openNpc(1300001);   
}
if (selection == 8) {
cm.openNpc(9010001);
}
if (selection == 5) {
cm.openNpc(1022100);   
}
if (selection == 6) {
if(cm.getzb() >= 5){
if(cm.haveItem(1122017,1,true,false)){
cm.sendOk("你已经有一个精灵吊坠了！");
cm.dispose();
}else{
cm.setzb(-5);
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1122017); //获得装备的类形
var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // 生成一个Equip类
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 30); //时间
toDrop.setExpiration(temptime); //给装备时间
toDrop.setStr(100);
toDrop.setDex(100);
toDrop.setInt(100);
toDrop.setLuk(100);
cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //刷新背包		
cm.getChar().saveToDB(true);
cm.sendOk("成功花了5元宝购买到 6 小时权精灵吊坠！");
cm.dispose();
}
}else{
cm.sendOk("你没有足够的元宝！");
cm.dispose();
}
}
if (selection == 7) {
cm.openNpc(9310022);   
}
if (selection == 3) {
cm.sendYesNo("该功能可以切换#b点击拍卖的用途#k,继续将改变成#b点击拍卖直接进入自由市场#k,是否继续？");
}
} else if (status == 2) {
cm.setRw11(1);
cm.sendOk("成功变成#b直接进入自由市场#k,如果改变,请找#b可乐小姐#k,进行设置.");
cm.dispose();
}
}
}
