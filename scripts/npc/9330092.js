importPackage(net.sf.odinms.client);
var status = 0;
var ttt ="#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//美化1
var ttt2 ="#fUI/UIWindow/Quest/icon6/7#";//"+ttt2+"//美化2
var ttt3 ="#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//美化圆
var ttt4 ="#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//美化New
var ttt5 ="#fUI/UIWindow/Quest/icon0#";//"+ttt5+"//美化!
var ttt6 ="#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//美化会员

//·········以下为VIP地图设置,请根据需要设置地图ID
var vip1map = 803001200;
var vip2map = 925020000;
var vip2bj = 910000004;
var vip3map = 925010400;
var vip3bj = 910000005;
var vip4map = 920010000;
var vip4bj = 910000006;


//·········以下为工资（金币）参数,请根据需要自行配置;
var GZ_Player_money = 2000000;
var GZ_V1_money = 50000000;
var GZ_V2_money = 100000000;
var GZ_V3_money = 200000000;
var GZ_V4_money = 300000000;


//·········以下为工资（道具）参数,请根据需要自行配置; 
var GZ_Player_item = Array(1002140,0);   //配置方法 只需更改 Aarray(道具ID,数量);
var GZ_V1_item = Array(2340000,0);       //数量为0 表示不给.
var GZ_V2_item = Array(2340000,5);
var GZ_V3_item = Array(2340000,10);
var GZ_V4_item = Array(2340000,20);


//·········以下为工资（抵用券）参数,请根据需要自行配置;

var GZ_Player_Nx = 10000;
var GZ_V1_Nx = 10000;
var GZ_V2_Nx = 20000;
var GZ_V3_Nx = 30000;
var GZ_V4_Nx = 40000;


//·········以下为工资（宿命豆）参数,请根据需要自行配置;

var GZ_Player_zb = 1000;
var GZ_V1_zb = 1000;
var GZ_V2_zb = 5000;
var GZ_V3_zb = 7000;
var GZ_V4_zb = 10000;


//////////////////////////////////////////////////////////
function start() {
status = -1;
action(1, 0, 0);
}

function action(mode, type, selection) {
if (mode == -1) {
cm.dispose();
} else {
if (status >= 0 && mode == 0) {
cm.dispose();
return;
}
if (mode == 1)
status++;
else
status--;
if (status == 0) {
cm.sendSimple("#r"+cm.mxdmz()+"冒险岛#k副本任务！\r\n请选择您要挑战的任务.\r\n#b#L9#"+ttt+""+ttt2+""+ttt+""+ttt2+"#r1 VS 1#bPK房间#e >>>> #n[独家PK系统]#l\r\n#b#L12#"+ttt+""+ttt2+""+ttt+""+ttt2+"挑战十二星座#e >>>> #n[全新Boss,够激情]#l\r\n#b#L0#"+ttt+""+ttt2+""+ttt+""+ttt2+"挑战绯红任务#e >>>> #n[绯红武器拿到手软]#l\r\n#b#L1#"+ttt+""+ttt2+""+ttt+""+ttt2+"废弃组队任务#e >>>> #n[新手无鸭梨]#l\r\n#b#L3#"+ttt+""+ttt2+""+ttt+""+ttt2+"沉苦跳跳任务#e >>>> #n[轻松跳跳拿玩具]#l\r\n#b#L10#"+ttt+""+ttt2+""+ttt+""+ttt2+"扎昆跳跳任务#e >>>> #n[激情跳跳拿椅子]#l\r\n#b#L4#"+ttt+""+ttt2+""+ttt+""+ttt2+"疯狂奶牛任务#e >>>> #n[每晚8点,轻松得修炼点]#l\r\n#L5#"+ttt+""+ttt2+""+ttt+""+ttt2+"幽灵鬼船任务#e >>>> #n[邪恶BOSS大挑战]#l\r\n#L6#"+ttt+""+ttt2+""+ttt+""+ttt2+"地狱大公任务#e >>>> #n[地狱武器遍地爆]#l\r\n#L8#"+ttt+""+ttt2+""+ttt+""+ttt2+"挑战大蝙蝠魔#e >>>> #n[需要恶魔标识]#l\r\n#L7#"+ttt+""+ttt2+""+ttt+""+ttt2+"家族综合系统#e >>>> #n[让家族与众不同]#l");	
			
}else if (status == 1) {

var viplevel = cm.getChar().getVip();

if(selection == 0){
if(viplevel < 0){					
cm.sendOk("#b您不是●5元会员,无法进入此地图")
cm.dispose();
}else{
cm.warp(vip1map,0);
cm.sendOk("#b暴绯红系列装备!.");					
cm.dispose();
}


} else if (selection == 8) { 
if (cm.haveItem(4001035)>=1){
cm.warp(105050400,0);	
cm.dispose();
}else  {
cm.sendOk("你必须有 恶魔标识才能进行.");
cm.dispose();
}

} else if (selection == 10) { 
cm.openNpc(9250010);

} else if (selection == 9) { 
cm.openNpc(9000036);

} else if (selection == 1) { 
cm.openNpc(9020000);

}else if(selection == 2){
cm.sendOk("#b任务调试中!.");				
cm.dispose();

} else if (selection == 3) { 
cm.openNpc(9250011);

} else if (selection == 7) { 
cm.openNpc(1002003);

} else if (selection == 11) { 
cm.openNpc(9900002);

} else if (selection == 12) { 
cm.openNpc(9900003);

}else if (selection == 4){
if(viplevel < 0){					
cm.sendOk("您目前的VIP等级无权进入此地图!")					
cm.dispose();
}else{
cm.warp(vip3map,0);
cm.sendOk("请在这里等待时间的到来吧!.");						
cm.dispose();
}

} else if (selection == 5) { 
if (cm.getHour() < 16) {
cm.sendOk("现在幽灵船的大门还没有打开.");
cm.dispose();
}else if (cm.haveItem(4000382) ||cm.haveItem(4000379) ||cm.haveItem(4000383)) {
cm.sendOk("请把你背包里面的:#v4000382##v4000379##v4000383#清空.");
cm.dispose();
}else {	
cm.warp(541010010,0);	
cm.sendOk("但愿你能打败幽灵船长,请先展现下你的实力吧~收集300个#v4000382#.请注意时间!!!超过24点,任务将视为放弃.!");
cm.dispose();
}

} else if (selection == 6) { 
cm.warp(677000013,0);	
cm.dispose();




			}										
		}
	}
}

