importPackage(net.sf.odinms.client);
var status = 0;
var ttt ="#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//美化1
var ttt2 ="#fUI/UIWindow/Quest/icon6/7#";//"+ttt2+"//美化2
var ttt3 ="#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//美化圆
var ttt4 ="#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//美化New
var ttt5 ="#fUI/UIWindow/Quest/icon0#";//"+ttt5+"//美化!
var ttt6 ="#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//美化会员

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
if(cm.getChar().getVip() <= 0){
var vipstr = "普通玩家";					
}else if(cm.getChar().getVip() == 1){
var vipstr = ""+ttt6+" "+cm.mxdmz()+"会员①";					
}else if(cm.getChar().getVip() == 2){
var vipstr = ""+ttt6+" "+cm.mxdmz()+"会员②";					
}else if(cm.getChar().getVip() == 3){
var vipstr = ""+ttt6+" "+cm.mxdmz()+"会员③";
}else if(cm.getChar().getVip() == 4){
var vipstr = ""+ttt6+" "+cm.mxdmz()+"会员④";	
}else if(cm.getChar().getVip() == 5){
var vipstr = ""+ttt6+" "+cm.mxdmz()+"会员⑤";					
}else{
var vipstr = ""+ttt6+" "+cm.mxdmz()+"会员⑥";					
}
var textz = "#r"+cm.mxdmz()+"冒险岛#k,任务系统.\r\n#b  会员等级:#r"+vipstr+"  #b剩余元宝:#r" + cm.getChar().getzb() + "#k#b 块  #b转生:#r" + cm.getChar().getReborns() + "#k#b 次\r\n";


//textz += "#L7#"+ttt3+"制作商城点卷"+ttt4+"#l#l\r\n";

//textz += "#L8#"+ttt3+"制作商城喇叭        "+ttt4+"#l#l\r\n";

textz += "#L2#"+ttt3+"合成祝福卷轴[材料各大BOSS有爆]         "+ttt4+"#l#l\r\n";

textz += "#L10##r"+ttt3+"家族荣誉任务[一人做任务全员得奖励]     "+ttt4+"#l#b\r\n";

textz += "#L3#"+ttt3+"金币换物品[银行系统]                   "+ttt4+"#l\r\n";

textz += "#L1#"+ttt3+"制作巨霸品客宾★#r          [稀有][Hot]#b"+ttt+"#l#b\r\n";

textz += "#L4#"+ttt3+"制作法老的腰带★★#r            [制作][Hot]"+ttt2+ "#b#l\r\n";

textz += "#L5#"+ttt3+"升级法老的腰带★★★#r          [升级][Hot]"+ttt+"#b#l\r\n";

textz += "#L9#"+ttt3+"#r永恒武器制作#b             [地狱武器合成]"+ttt2+"#l\r\n";

textz += "#L6#"+ttt3+"#r武器装备强化#b           [强化][多种方式]"+ttt+"#l\r\n";

cm.sendSimple (textz);    
				
}else if (status == 1) {

var viplevel = cm.getChar().getVip();

if(selection == 1){
cm.openNpc( 9330042);

}else if(selection == 2){
cm.openNpc( 9000017);

}else if(selection == 10){
cm.openNpc( 9000019);

}else if(selection == 9){
cm.openNpc( 1022003);

}else if(selection == 5){
cm.openNpc( 9310070);

}else if(selection == 6){
cm.sendSimple("#r"+cm.mxdmz()+"冒险岛#k,装备强化系统#r\r\n["+ttt4+"]#k装备强化方法多种，所需要的物品也不相同.\r\n#L99#"+ttt2+"#b>>>> 装备强化方法一 [1元宝][2000属性][100%成功]#l\r\n#L8#"+ttt+"#b>>>> 装备强化方法二 #r[装备升级][2E金币][70%成功]#b#l\r\n#L17#"+ttt2+"#b>>>> 装备强化方法三 [时限强化][开发中]#l");

}else if(selection == 77){
cm.sendOk("#b即将开放啦.");
cm.dispose();

}else if(selection == 88){
cm.openNpc( 9330078);


}else if(selection == 4){
cm.openNpc( 9310071);


}else if(selection == 3){
cm.openNpc( 9000041);
}


}else if (selection == 5) {
if (cm.itemQuantity(4002002) >= 500) {
cm.sendOk("#b你的邮票过多,请使用部分后在来兑换.");
cm.dispose();

} else if (cm.getMeso() >= 1500000000) {
cm.gainMeso(-1500000000);                
cm.dispose();
} else {
cm.sendOk("#b对不起,您没有足够的金币来兑换邮票.");
cm.dispose();
}   
                             
} else if (selection == 6) {
if (cm.getMeso() >= 647000000) {
cm.sendOk("#b对不起,您身上的钱过多,强制兑换可能导致错误.");
cm.dispose();

} else if (cm.itemQuantity(4002002) >= 1) {
cm.gainMeso(1450000000);                
cm.gainItem(4002002, -1); 
cm.dispose();
} else {
cm.sendOk("#b对不起,您没有足够的邮票来兑换金币.");
cm.dispose();
}    

} else if (selection == 7) {
cm.sendOk("#b即将开放啦.");
cm.dispose();

} else if (selection == 8) {
cm.openNpc( 9330078);

} else if (selection == 17) {
cm.openNpc( 9250028);
 
} else if (selection == 99) {
cm.openNpc( 9900005);

} else if (selection == 10) {
if (cm.getMeso() >= 1647000000) {
cm.sendOk("#b对不起,您身上的钱过多,强制兑换可能导致错误.");
cm.dispose();

} else if (cm.itemQuantity(4002000) >= 1) {
cm.gainMeso(450000000);                
cm.gainItem(4002000, -1); 
cm.dispose();
} else {
cm.sendOk("#b对不起,您没有足够的邮票来兑换金币.");
cm.dispose();
}    

















					
}
}
}

