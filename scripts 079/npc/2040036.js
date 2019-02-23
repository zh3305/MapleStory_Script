importPackage(net.sf.odinms.client);
var status = 0;
//直接购买需要的元宝

var v1 = 00;//买VIP1需要的元宝
var v2 = 30;//买VIP2需要的元宝
var v3 = 70;//买VIP3需要的元宝
var v4 = 120;//买VIP4需要的元宝
var v5 = 180;//买VIP5需要的元宝
var v6 = 240;//买VIP6需要的元宝
var v7 = 320;//买VIP7需要的元宝
var v8 = 400;//买VIP8需要的元宝

//升级需要

var v2v3 = 40;//2-3
var v3v4 = 50;//3-4
var v4v5 = 60;//4-5
var v5v6 = 60;//5-6
var v6v7 = 80;//6-7
var v7v8 = 80;//7-8


//点卷|10E邮票|修炼点|勋章属性|精灵吊坠10天,属性|属性点|GM卷|黄金猪猪|骑宠抽奖卷
var libao1 = Array(100000,1,1000,500,100,100,0,5,0);	
var libao2 = Array(1000000,3,5000,1000,300,1000,10,5,2);
var libao3 = Array(3000000,5,10000,1500,600,3000,15,10,3);
var libao4 = Array(4000000,8,20000,2000,1000,4000,20,15,5);
var libao5 = Array(5000000,12,30000,2500,1200,5000,25,20,6);
var libao6 = Array(6000000,15,40000,3000,1500,6000,30,30,7);
var libao7 = Array(8000000,18,50000,4000,1800,7000,35,35,8);
var libao8 = Array(10000000,20,60000,5000,2000,8000,40,40,10);


//·········以下为VIP地图设置,请根据需要设置地图ID
var vip1map = 209000000;
var vip2map = 229020000;
var vip3map = 229020100;
var vip4map = 229020200;
var vip5map = 229020300;
var vip6map = 229020400;

var vip7map = 209000006;
var vip8map = 209000007;




//·········以下为工资（金币）参数,请根据需要自行配置;
var GZ_Player_money = 1000000;
var GZ_V1_money = 100000000;
var GZ_V2_money = 300000000;
var GZ_V3_money = 500000000;
var GZ_V4_money = 800000000;
var GZ_V5_money = 1200000000;
var GZ_V6_money = 1500000000;
var GZ_V7_money = 1800000000;
var GZ_V8_money = 2000000000;
//·········以下为工资（道具）参数,请根据需要自行配置; 
var GZ_Player_item = Array(4002002,0);   //配置方法 只需更改 Aarray(道具ID,数量);
var GZ_V1_item = Array(4002002,0);       //数量为0 表示不给.
var GZ_V2_item = Array(4002002,0);
var GZ_V3_item = Array(4002002,0);
var GZ_V4_item = Array(4002002,0);
var GZ_V5_item = Array(4002002,0);
var GZ_V6_item = Array(4002002,0);
var GZ_V7_item = Array(4002002,0);
var GZ_V8_item = Array(4002002,0);
//·········以下为工资（抵用券）参数,请根据需要自行配置;

var GZ_Player_Nx = 2000;
var GZ_V1_Nx = 5000;
var GZ_V2_Nx = 8000;
var GZ_V3_Nx = 10000;
var GZ_V4_Nx = 15000;
var GZ_V5_Nx = 20000;
var GZ_V6_Nx = 30000;
var GZ_V7_Nx = 40000;
var GZ_V8_Nx = 50000;
//·········以下为工资（爱乐币）参数,请根据需要自行配置;

var GZ_Player_zb = 0;
var GZ_V1_zb = 0;
var GZ_V2_zb = 1;
var GZ_V3_zb = 2;
var GZ_V4_zb = 3;
var GZ_V5_zb = 4;
var GZ_V6_zb = 5;
//////////////////////////////////////////////////////////

//==============以上是参数部分======================


var ttt ="#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//美化1
var ttt2 ="#fUI/UIWindow/Quest/icon6/7#";//"+ttt2+"//美化2
var ttt3 ="#fUI/UIWindow/Quest/basic#";//"+ttt3+"//美化3
var ttt6 ="#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//美化会员
var name = "5元冒险岛";//这里填上F的名字
importPackage(net.sf.odinms.client);
function start() { 
status = -1; 
action(1, 0, 0); 
} 
function action(mode, type, selection) { 
if (mode == -1) { 
cm.dispose(); 
} else { 
if (status >= 0 && mode == 0) { 
cm.sendOk("#d好的,下次再来吧!"); 
cm.dispose(); 
return;                     
} 
if (mode == 1) { 
status++; 
} else { 
status--; 
} 


if (status == 0) { 
//设置
if(cm.getChar().getVip() <= 0){
var vipstr = ""+ttt6+" 普通玩家";					
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
}else if(cm.getChar().getVip() == 6){
var vipstr = ""+ttt6+" "+cm.mxdmz()+"会员⑥";	
}else if(cm.getChar().getVip() == 7){
var vipstr = ""+ttt6+" "+cm.mxdmz()+"会员⑦";				
}else{
var vipstr = ""+ttt6+" "+cm.mxdmz()+"会员⑧";					
}

//选项

var textz = "#r"+cm.mxdmz()+"冒险岛#k,会员系统.\r\n#b  会员等级:#r"+vipstr+"  #b剩余元宝:#r" + cm.getChar().getzb() + "#k#b 块  #b转生:#r" + cm.getChar().getReborns() + "#k#b 次\r\n\r\n";

textz += "#L2#"+ttt+" #b Vip① #k#b"+ttt3+"#l";

textz += "#L3#"+ttt+" #b "+cm.mxdmz()+"Vip② #k#b[#r"+v2+"#n#b 元宝]#l\r\n";

textz += "#L4#"+ttt+" #b "+cm.mxdmz()+"Vip③ #k#b[#r"+v3+" #n#b元宝]#l";

textz += "#L5#"+ttt+" #b "+cm.mxdmz()+"Vip④ #k#b[#r"+v4+"#n#b元宝]#l\r\n";

textz += "#L6#"+ttt+" #b "+cm.mxdmz()+"Vip⑤ #k#b[#r"+v5+"#n#b元宝]#l";

textz += "#L7#"+ttt+" #b "+cm.mxdmz()+"Vip⑥ #k#b[#r"+v6+"#n#b元宝]#l\r\n\r\n";

//textz += "#L8#"+ttt+" 购买#r 会员⑦ #k#b[#r"+v7+"#n#b元宝]#l";

//textz += "#L9#"+ttt+" 购买#r 会员⑧ #k#b[#r"+v8+"#n#b元宝]#l\r\n\r\n";

textz += "#L100#"+ttt+" 升级#r#k#b[#r会员#n#b,依然送礼]#l";

textz += "#L101#"+ttt+" 领取#r#k#b[#r会员工资#n#b]#l\r\n\r\n";

textz += "#L17#"+ttt2+" 查看#k#b>>>>[#r会员说明#n#b]#l  ";

textz += "#L16#"+ttt2+" 换取#k#b>>>>[#r必成卷轴#n#b]#l\r\n";

textz += "#L18#"+ttt2+" 换取#k#b>>>>[#r骑宠椅子#n#b]#l  ";

textz += "#L19#"+ttt2+" 使用#k#b>>>>[#r会员功能#n#b]#l\r\n";

//textz += "#L20#"+ttt+" 进入#r 会员⑤ #k#b[#r地图项#n#b]#l";

//textz += "#L21#"+ttt+" 进入#r 会员⑥ #k#b[#r地图项#n#b]#l\r\n";

//textz += "#L22#"+ttt+" 进入#r 会员⑦ #k#b[#r地图项#n#b]#l";

//textz += "#L23#"+ttt+" 进入#r 会员⑧ #k#b[#r地图项#n#b]#l\r\n\r\n";

cm.sendSimple (textz);    




//★★★★★★★★★★★★★★★★★★★★★★

//购买5元会员①

}else if  (selection == 2) { 
if(cm.getChar().getVip() >= 1) {
cm.sendOk("#b您已经是"+cm.mxdmz()+"会员①了."); 
cm.dispose(); 

//判断是否有吊坠 有则无法购买

} else  if(cm.haveItem(1122017,1,true,false)){
cm.sendOk("#b你已经有一个精灵吊坠了！请扔掉或者过期后再办理该业务.");
cm.dispose();

//判断是否有等级超过120级 无则无法购买

} else if(cm.getPlayer().getLevel() >= 1) { 
if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(4)).isFull()){
cm.sendOk("#b请保证其他栏位有空格接受VIP礼包.");
cm.dispose();

}else{   

cm.setzb(-v1);  
cm.getChar().SetVip(1); 

//普通礼包
cm.gainNX(libao1[0]);//点卷
cm.gainItem(4002001,libao1[1]);//邮票
cm.gainrw13(libao1[2]); //修炼

//勋章
var xunzhang = 1142004;//勋章
var shuxing = libao1[3]; //设置
var toDrop = new net.sf.odinms.client.Equip(xunzhang,0);
toDrop.setStr(shuxing);
toDrop.setDex(shuxing);
toDrop.setInt(shuxing);
toDrop.setLuk(shuxing);
toDrop.setSpeed(20);
toDrop.setJump(20);					
net.sf.odinms.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);

//吊坠
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1122017); //获得装备的类形
var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // 生成一个Equip类
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 30 * 4 *10); //时间
toDrop.setExpiration(temptime); //给装备时间
toDrop.setStr(libao1[4]);
toDrop.setDex(libao1[4]);
toDrop.setInt(libao1[4]);
toDrop.setLuk(libao1[4]);
cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //刷新背包	

//普通礼包	
cm.getPlayer().gainAp(libao1[5]);//属性点
cm.gainItem(4001003,libao1[6]);//大吉(换GM卷)
cm.gainItem(4032226,libao1[7]);//黄金猪猪(抽奖)
cm.gainItem(4031250,libao1[8]);//盛大易宝(骑宠抽奖)


//---------------------------------------------------
cm.getChar().saveToDB(true);
cm.sendOk("#b成功成为#r"+cm.mxdmz()+"会员①#k!"); 
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜：" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员①!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜：" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员①!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜：" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员①!!!",true).getBytes());
cm.dispose(); 
}
} else { 
cm.sendOk("#b您的等级不足120级."); 
cm.dispose();   
} 



//★★★★★★★★★★★★★★★★★★★★★★

//购买5元会员②

}else if  (selection == 3) { 
if(cm.getChar().getVip() >= 2) {
cm.sendOk("#b您已经是"+cm.mxdmz()+"会员②了."); 
cm.dispose();  

//判断是否有吊坠 有则无法购买

} else  if(cm.haveItem(1122017,1,true,false)){
cm.sendOk("#b你已经有一个精灵吊坠了！请扔掉或者过期后再办理该业务.");
cm.dispose();

//判断是否拥有足够元宝 没有则无法购买

} else if(cm.getzb() >= v2) { 
if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(4)).isFull()){
cm.sendOk("#b请保证其他栏位有空格接受VIP礼包.");
cm.dispose();

}else{   

cm.setzb(-v2);  
cm.getChar().SetVip(2); 


//普通礼包
cm.gainNX(libao2[0]);//点卷
cm.gainItem(4002001,libao2[1]);//邮票
cm.gainrw13(libao2[2]); //修炼

//勋章
var xunzhang = 1142173;//勋章
var shuxing = libao2[3]; //设置
var toDrop = new net.sf.odinms.client.Equip(xunzhang,0);
toDrop.setStr(shuxing);
toDrop.setDex(shuxing);
toDrop.setInt(shuxing);
toDrop.setLuk(shuxing);
toDrop.setSpeed(20);
toDrop.setJump(20);					
net.sf.odinms.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);

//吊坠
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1122017); //获得装备的类形
var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // 生成一个Equip类
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 30 * 4 *10); //时间
toDrop.setExpiration(temptime); //给装备时间
toDrop.setStr(libao2[4]);
toDrop.setDex(libao2[4]);
toDrop.setInt(libao2[4]);
toDrop.setLuk(libao2[4]);
cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //刷新背包	

//普通礼包	
cm.getPlayer().gainAp(libao1[5]);//属性点
cm.gainItem(4001003,libao2[6]);//大吉(换GM卷)
cm.gainItem(4032226,libao2[7]);//黄金猪猪(抽奖)
cm.gainItem(4031250,libao2[8]);//骑宠抽奖卷4031579
cm.gainItem(4031579,1);//宝物袋

//---------------------------------------------------
cm.getChar().saveToDB(true);
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(3,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜:" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员②!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(3,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜:" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员②!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(3,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜:" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员②!!!",true).getBytes());	
cm.sendOk("#b成功成为#r"+cm.mxdmz()+"会员②#k!"); 
cm.dispose();  
} 
} else { 
cm.sendOk("#b你没有足够的元宝.请联系客服购买."); 
cm.dispose();   
}  


//★★★★★★★★★★★★★★★★★★★★★★

//购买5元会员③
}else if  (selection == 4) { 
if(cm.getChar().getVip() >= 3) {
cm.sendOk("#b您已经是"+cm.mxdmz()+"会员③了."); 
cm.dispose();  

//判断是否有吊坠 有则无法购买

} else  if(cm.haveItem(1122017,1,true,false)){
cm.sendOk("#b你已经有一个精灵吊坠了！请扔掉或者过期后再办理该业务.");
cm.dispose();

//判断是否拥有足够元宝 没有则无法购买

} else if(cm.getzb() >= v3) { 
if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(4)).isFull()){
cm.sendOk("#b请保证其他栏位有空格接受VIP礼包.");
cm.dispose();

}else{   

cm.setzb(-v3);  
cm.getChar().SetVip(3); 

//普通礼包
cm.gainNX(libao3[0]);//点卷
cm.gainItem(4002001,libao3[1]);//邮票
cm.gainrw13(libao3[2]); //修炼

//勋章
var xunzhang = 1142174;//勋章
var shuxing = libao3[3]; //设置
var toDrop = new net.sf.odinms.client.Equip(xunzhang,0);
toDrop.setStr(shuxing);
toDrop.setDex(shuxing);
toDrop.setInt(shuxing);
toDrop.setLuk(shuxing);
toDrop.setSpeed(20);
toDrop.setJump(20);					
net.sf.odinms.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);

//吊坠
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1122017); //获得装备的类形
var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // 生成一个Equip类
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 30 * 4 *10); //时间
toDrop.setExpiration(temptime); //给装备时间
toDrop.setStr(libao3[4]);
toDrop.setDex(libao3[4]);
toDrop.setInt(libao3[4]);
toDrop.setLuk(libao3[4]);
cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //刷新背包		

//普通礼包
cm.getPlayer().gainAp(libao3[5]);//属性点
cm.gainItem(4001003,libao3[6]);//大吉(换GM卷)
cm.gainItem(4032226,libao3[7]);//黄金猪猪(抽奖)
cm.gainItem(4031250,libao3[8]);//骑宠抽奖卷
cm.gainItem(4031579,2);//宝物袋

//---------------------------------------------------

cm.getChar().saveToDB(true);
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜:" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜:" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员③!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜:" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员③!!!",true).getBytes());
cm.sendOk("#b成功成为#r"+cm.mxdmz()+"会员③#k!"); 
cm.dispose();  
} 
} else { 
cm.sendOk("#b你没有足够的元宝.请联系客服购买."); 
cm.dispose();   
} 



//★★★★★★★★★★★★★★★★★★★★★★

//购买5元会员④
}else if  (selection == 5) { 
if(cm.getChar().getVip() >= 4) {
cm.sendOk("#b您已经是"+cm.mxdmz()+"会员④了.");
cm.dispose();    

//判断是否有吊坠 有则无法购买

} else  if(cm.haveItem(1122017,1,true,false)){
cm.sendOk("#b你已经有一个精灵吊坠了！请扔掉或者过期后再办理该业务.");
cm.dispose();

//判断是否拥有足够元宝 没有则无法购买

} else if(cm.getzb() >= v4) { 
if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(4)).isFull()){
cm.sendOk("#b请保证其他栏位有空格接受VIP礼包.");
cm.dispose();

}else{   

cm.setzb(-v4);  
cm.getChar().SetVip(4); 

//普通礼包
cm.gainNX(libao4[0]);//点卷
cm.gainItem(4002001,libao4[1]);//邮票
cm.gainrw13(libao4[2]); //修炼

//勋章
var xunzhang = 1142177;//勋章
var shuxing = libao4[3]; //设置
var toDrop = new net.sf.odinms.client.Equip(xunzhang,0);
toDrop.setStr(shuxing);
toDrop.setDex(shuxing);
toDrop.setInt(shuxing);
toDrop.setLuk(shuxing);
toDrop.setSpeed(20);
toDrop.setJump(20);
net.sf.odinms.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);

//吊坠
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1122017); //获得装备的类形
var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // 生成一个Equip类
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 30 * 4 *10); //时间
toDrop.setExpiration(temptime); //给装备时间
toDrop.setStr(libao4[4]);
toDrop.setDex(libao4[4]);
toDrop.setInt(libao4[4]);
toDrop.setLuk(libao4[4]);
cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //刷新背包		

//普通礼包
cm.getPlayer().gainAp(libao4[5]);//属性点
cm.gainItem(4001003,libao4[6]);//大吉(换GM卷)
cm.gainItem(4032226,libao4[7]);//黄金猪猪(抽奖)
cm.gainItem(4031250,libao4[8]);//骑宠抽奖卷
cm.gainItem(4031579,3);//宝物袋

//---------------------------------------------------

cm.getChar().saveToDB(true);
cm.sendOk("#b成功成为#r"+cm.mxdmz()+"会员④#k!"); 
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜:" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员④!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜:" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员④!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜:" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员④!!!",true).getBytes());	
cm.dispose();  
} 
} else { 
cm.sendOk("#b你没有足够的元宝.请联系客服购买."); 
cm.dispose();   
} 


//★★★★★★★★★★★★★★★★★★★★★★

//购买5元会员⑤
}else if  (selection == 6) { 
if(cm.getChar().getVip() >= 5) {
cm.sendOk("#b您已经是"+cm.mxdmz()+"会员⑤了.");
cm.dispose();  

//判断是否有吊坠 有则无法购买

} else  if(cm.haveItem(1122017,1,true,false)){
cm.sendOk("#b你已经有一个精灵吊坠了！请扔掉或者过期后再办理该业务.");
cm.dispose();

//判断是否拥有足够元宝 没有则无法购买

} else if(cm.getzb() >= v5) { 
if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(4)).isFull()){
cm.sendOk("#b请保证其他栏位有空格接受VIP礼包.");
cm.dispose();

}else{   

cm.setzb(-v5);  
cm.getChar().SetVip(5); 

//普通礼包
cm.gainNX(libao5[0]);//点卷
cm.gainItem(4002001,libao5[1]);//邮票
cm.gainrw13(libao4[2]); //修炼

//勋章
var xunzhang = 1142178;//勋章
var shuxing = libao5[3]; //设置
var toDrop = new net.sf.odinms.client.Equip(xunzhang,0);
toDrop.setStr(shuxing);
toDrop.setDex(shuxing);
toDrop.setInt(shuxing);
toDrop.setLuk(shuxing);
toDrop.setSpeed(20);
toDrop.setJump(20);
net.sf.odinms.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);

//吊坠
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1122017); //获得装备的类形
var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // 生成一个Equip类
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 30 * 4 *10); //时间
toDrop.setExpiration(temptime); //给装备时间
toDrop.setStr(libao5[4]);
toDrop.setDex(libao5[4]);
toDrop.setInt(libao5[4]);
toDrop.setLuk(libao5[4]);
cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //刷新背包	

//普通礼包	
cm.getPlayer().gainAp(libao5[5]);//属性点
cm.gainItem(4001003,libao5[6]);//大吉(换GM卷)
cm.gainItem(4032226,libao5[7]);//黄金猪猪(抽奖)
cm.gainItem(4031250,libao5[8]);//骑宠抽奖卷
cm.gainItem(4031579,4);//宝物袋

//---------------------------------------------------

cm.getChar().saveToDB(true);
cm.sendOk("#b成功成为#r"+cm.mxdmz()+"会员⑤#k!"); 
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜:" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员⑤!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜:" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员⑤!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜:" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员⑤!!!",true).getBytes());	
cm.dispose();  
} 
} else { 
cm.sendOk("#b你没有足够的元宝.请联系客服购买.")
cm.dispose();   
} 


//★★★★★★★★★★★★★★★★★★★★★★

//购买5元会员⑥
}else if  (selection == 7) { 
if(cm.getChar().getVip() >= 6) {
cm.sendOk("#b您已经是"+cm.mxdmz()+"会员⑥了.");  
cm.dispose();  

//判断是否有吊坠 有则无法购买

} else  if(cm.haveItem(1122017,1,true,false)){
cm.sendOk("#b你已经有一个精灵吊坠了！请扔掉或者过期后再办理该业务.");
cm.dispose();

//判断是否拥有足够元宝 没有则无法购买

} else if(cm.getzb() >= v6) { 
if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(4)).isFull()){
cm.sendOk("#b请保证其他栏位有空格接受VIP礼包.");
cm.dispose();

}else{  
 
cm.setzb(-v6);  
cm.getChar().SetVip(6); 

//普通礼包
cm.gainNX(libao6[0]);//点卷
cm.gainItem(4002001,libao6[1]);//邮票
cm.gainrw13(libao6[2]); //修炼

//勋章
var xunzhang = 1142176;//勋章
var shuxing = libao6[3]; //设置
var toDrop = new net.sf.odinms.client.Equip(xunzhang,0);
toDrop.setStr(shuxing);
toDrop.setDex(shuxing);
toDrop.setInt(shuxing);
toDrop.setLuk(shuxing);
toDrop.setSpeed(20);
toDrop.setJump(20);
net.sf.odinms.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);

//吊坠
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1122017); //获得装备的类形
var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // 生成一个Equip类
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 30 * 4 *10); //时间
toDrop.setExpiration(temptime); //给装备时间
toDrop.setStr(libao6[4]);
toDrop.setDex(libao6[4]);
toDrop.setInt(libao6[4]);
toDrop.setLuk(libao6[4]);
cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //刷新背包		

//普通礼包
cm.getPlayer().gainAp(libao6[5]);//属性点
cm.gainItem(4001003,libao6[6]);//大吉(换GM卷)
cm.gainItem(4032226,libao6[7]);//黄金猪猪(抽奖)
cm.gainItem(4031250,libao6[8]);//骑宠抽奖卷
cm.gainItem(4031579,5);//宝物袋

//---------------------------------------------------

cm.getChar().saveToDB(true);
cm.sendOk("#b成功成为#r"+cm.mxdmz()+"会员⑥#k!"); 
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜:" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员⑥!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜:" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员⑥!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜:" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员⑥!!!",true).getBytes());	
cm.viplaba("恭喜:" + cm.getPlayer().getName() +"加入"+cm.mxdmz()+"会员⑥.",5121006);
cm.dispose();  
} 
} else { 
cm.sendOk("#b你没有足够的元宝.请联系客服购买."); 
cm.dispose();   
} 



//★★★★★★★★★★★★★★★★★★★★★★

//购买5元会员⑦
}else if  (selection == 8) { 
if(cm.getChar().getVip() >= 7) {
cm.sendOk("#b您已经是"+cm.mxdmz()+"会员⑦了."); 
cm.dispose();  

//判断是否有吊坠 有则无法购买

} else  if(cm.haveItem(1122017,1,true,false)){
cm.sendOk("#b你已经有一个精灵吊坠了！请扔掉或者过期后再办理该业务.");
cm.dispose();

//判断是否拥有足够元宝 没有则无法购买

} else if(cm.getzb() >= v7) { 
if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(4)).isFull()){
cm.sendOk("#b请保证其他栏位有空格接受VIP礼包.");
cm.dispose();

}else{  
 
cm.setzb(-v7);  
cm.getChar().SetVip(7); 

//普通礼包
cm.gainNX(libao7[0]);//点卷
cm.gainItem(4002001,libao7[1]);//邮票
cm.gainrw13(libao7[2]); //修炼

//勋章
var xunzhang = 1142189;//勋章
var shuxing = libao7[3]; //设置
var toDrop = new net.sf.odinms.client.Equip(xunzhang,0);
toDrop.setStr(shuxing);
toDrop.setDex(shuxing);
toDrop.setInt(shuxing);
toDrop.setLuk(shuxing);
toDrop.setSpeed(20);
toDrop.setJump(20);
net.sf.odinms.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);

//吊坠
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1122017); //获得装备的类形
var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // 生成一个Equip类
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 30 * 4 *10); //时间
toDrop.setExpiration(temptime); //给装备时间
toDrop.setStr(libao7[4]);
toDrop.setDex(libao7[4]);
toDrop.setInt(libao7[4]);
toDrop.setLuk(libao7[4]);
cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //刷新背包		

//普通礼包
cm.getPlayer().gainAp(libao7[5]);//属性点
cm.gainItem(4001003,libao7[6]);//大吉(换GM卷)
cm.gainItem(4032226,libao7[7]);//黄金猪猪(抽奖)
cm.gainItem(4031250,libao7[8]);//骑宠抽奖卷

//---------------------------------------------------

cm.getChar().saveToDB(true);
cm.sendOk("#b成功成为#r"+cm.mxdmz()+"会员⑦#k!"); 
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜:" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员⑦!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜:" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员⑦!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜:" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员⑦!!!",true).getBytes());	
cm.viplaba("恭喜:" + cm.getPlayer().getName() +"加入"+cm.mxdmz()+"会员⑦.",5121006);
cm.dispose();  
} 
} else { 
cm.sendOk("#b你没有足够的元宝.请联系客服购买."); 
cm.dispose();   
} 




//★★★★★★★★★★★★★★★★★★★★★★

//购买5元会员⑧
}else if  (selection == 9) { 
if(cm.getChar().getVip() >= 8) {
cm.sendOk("#b您已经是"+cm.mxdmz()+"会员⑧了."); 
cm.dispose();  

//判断是否有吊坠 有则无法购买

} else  if(cm.haveItem(1122017,1,true,false)){
cm.sendOk("#b你已经有一个精灵吊坠了！请扔掉或者过期后再办理该业务.");
cm.dispose();

//判断是否拥有足够元宝 没有则无法购买

} else if(cm.getzb() >= v8) { 
if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(4)).isFull()){
cm.sendOk("#b请保证其他栏位有空格接受VIP礼包.");
cm.dispose();

}else{  
 
cm.setzb(-v8);  
cm.getChar().SetVip(8); 

//普通礼包
cm.gainNX(libao8[0]);//点卷
cm.gainItem(4002001,libao8[1]);//邮票
cm.gainrw13(libao8[2]); //修炼

//勋章
var xunzhang = 1142167;//勋章
var shuxing = libao8[3]; //设置
var toDrop = new net.sf.odinms.client.Equip(xunzhang,0);
toDrop.setStr(shuxing);
toDrop.setDex(shuxing);
toDrop.setInt(shuxing);
toDrop.setLuk(shuxing);
toDrop.setSpeed(20);
toDrop.setJump(20);
net.sf.odinms.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);

//吊坠
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1122017); //获得装备的类形
var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // 生成一个Equip类
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 30 * 4 *10); //时间
toDrop.setExpiration(temptime); //给装备时间
toDrop.setStr(libao8[4]);
toDrop.setDex(libao8[4]);
toDrop.setInt(libao8[4]);
toDrop.setLuk(libao8[4]);
cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //刷新背包		

//普通礼包
cm.getPlayer().gainAp(libao8[5]);//属性点
cm.gainItem(4001003,libao8[6]);//大吉(换GM卷)
cm.gainItem(4032226,libao8[7]);//黄金猪猪(抽奖)
cm.gainItem(4031250,libao8[8]);//骑宠抽奖卷

//---------------------------------------------------

cm.getChar().saveToDB(true);
cm.sendOk("#b成功成为#r"+cm.mxdmz()+"会员⑧#k!"); 
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜:" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员⑧!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜:" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员⑧!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜:" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员⑧!!!",true).getBytes());	
cm.viplaba("恭喜:" + cm.getPlayer().getName() +"加入"+cm.mxdmz()+"会员⑧.",5121006);
cm.dispose();  
} 
} else { 
cm.sendOk("#b你没有足够的元宝.请联系客服购买."); 
cm.dispose();   
} 











//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





}else if  (selection == 100) { 
cm.sendSimple ("#bVIP升级赠送的礼品依然有哦..#k\r\n#L10#"+ttt+"#b 升级 >>>> #r会员②升会员③ #k#b[#r"+v2v3+"#n#b元宝]#l\r\n\r\n#L11#"+ttt+"#b 升级 >>>> #r会员③升会员④ #k#b[#r"+v3v4+"#n#b元宝]#l\r\n\r\n#L12#"+ttt+"#b 升级 >>>> #r会员④升会员⑤ #k#b[#r"+v4v5+"#n#b元宝]#l\r\n\r\n#L13#"+ttt+"#b 升级 >>>> #r会员⑤升会员⑥ #k#b[#r"+v5v6+"#n#b元宝]#l");







//★★★★★★★★★★★★★★★★★★★★★★

//购买5元会员③
}else if  (selection == 10) { 
if(cm.getChar().getVip() != 2) {
cm.sendOk("#b您的会员等级不适合进行该操作.");
cm.dispose();  

//判断是否有吊坠 有则无法购买

} else  if(cm.haveItem(1122017,1,true,false)){
cm.sendOk("#b你已经有一个精灵吊坠了！请扔掉或者过期后再办理该业务.");
cm.dispose();

//判断是否拥有足够元宝 没有则无法购买

} else if(cm.getzb() >= v2v3) { 
if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(4)).isFull()){
cm.sendOk("#b请保证其他栏位有空格接受VIP礼包.");
cm.dispose();

}else{   

cm.setzb(-v2v3);  
cm.getChar().SetVip(3); 

//普通礼包
cm.gainNX(libao3[0]-libao2[0]);//点卷
cm.gainItem(4002001,libao3[1]-libao2[1]);//邮票
cm.gainrw13(libao3[2]-libao2[2]); //修炼

//勋章
var xunzhang = 1142174;//勋章
var shuxing = libao3[3]; //设置
var toDrop = new net.sf.odinms.client.Equip(xunzhang,0);
toDrop.setStr(shuxing);
toDrop.setDex(shuxing);
toDrop.setInt(shuxing);
toDrop.setLuk(shuxing);
toDrop.setSpeed(20);
toDrop.setJump(20);					
net.sf.odinms.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);

//吊坠
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1122017); //获得装备的类形
var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // 生成一个Equip类
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 30 * 4 *10); //时间
toDrop.setExpiration(temptime); //给装备时间
toDrop.setStr(libao3[4]);
toDrop.setDex(libao3[4]);
toDrop.setInt(libao3[4]);
toDrop.setLuk(libao3[4]);
cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //刷新背包		

//普通礼包
cm.getPlayer().gainAp(libao3[5]-libao2[5]);//属性点
cm.gainItem(4001003,libao3[6]-libao2[6]);//大吉(换GM卷)
cm.gainItem(4032226,libao3[7]-libao2[7]);//黄金猪猪(抽奖)
cm.gainItem(4031250,libao3[8]-libao2[8]);//骑宠抽奖卷
cm.gainItem(4031579,1);//宝物袋

//---------------------------------------------------

cm.getChar().saveToDB(true);
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜:" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜:" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员③!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜:" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员③!!!",true).getBytes());
cm.sendOk("#b成功成为#r"+cm.mxdmz()+"会员③#k!"); 
cm.dispose();  
} 
} else { 
cm.sendOk("#b你没有足够的元宝.请联系客服购买."); 
cm.dispose();   
} 



//★★★★★★★★★★★★★★★★★★★★★★

//购买5元会员④
}else if  (selection == 11) { 
if(cm.getChar().getVip() != 3) {
cm.sendOk("#b您的会员等级不适合进行该操作.");
cm.dispose();    

//判断是否有吊坠 有则无法购买

} else  if(cm.haveItem(1122017,1,true,false)){
cm.sendOk("#b你已经有一个精灵吊坠了！请扔掉或者过期后再办理该业务.");
cm.dispose();

//判断是否拥有足够元宝 没有则无法购买

} else if(cm.getzb() >= v3v4) { 
if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(4)).isFull()){
cm.sendOk("#b请保证其他栏位有空格接受VIP礼包.");
cm.dispose();

}else{   

cm.setzb(-v3v4);  
cm.getChar().SetVip(4); 

//普通礼包
cm.gainNX(libao4[0]-libao3[0]);//点卷
cm.gainItem(4002001,libao4[1]-libao3[1]);//邮票
cm.gainrw13(libao4[2]-libao3[2]); //修炼

//勋章
var xunzhang = 1142177;//勋章
var shuxing = libao4[3]; //设置
var toDrop = new net.sf.odinms.client.Equip(xunzhang,0);
toDrop.setStr(shuxing);
toDrop.setDex(shuxing);
toDrop.setInt(shuxing);
toDrop.setLuk(shuxing);
toDrop.setSpeed(20);
toDrop.setJump(20);
net.sf.odinms.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);

//吊坠
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1122017); //获得装备的类形
var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // 生成一个Equip类
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 30 * 4 *10); //时间
toDrop.setExpiration(temptime); //给装备时间
toDrop.setStr(libao4[4]);
toDrop.setDex(libao4[4]);
toDrop.setInt(libao4[4]);
toDrop.setLuk(libao4[4]);
cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //刷新背包		

//普通礼包
cm.getPlayer().gainAp(libao4[5]-libao3[5]);//属性点
cm.gainItem(4001003,libao4[6]-libao3[6]);//大吉(换GM卷)
cm.gainItem(4032226,libao4[7]-libao3[7]);//黄金猪猪(抽奖)
cm.gainItem(4031250,libao4[8]-libao3[8]);//骑宠抽奖卷
cm.gainItem(4031579,1);//宝物袋

//---------------------------------------------------

cm.getChar().saveToDB(true);
cm.sendOk("#b成功成为#r"+cm.mxdmz()+"会员④#k!"); 
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜:" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员④!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜:" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员④!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜:" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员④!!!",true).getBytes());	
cm.dispose();  
} 
} else { 
cm.sendOk("#b你没有足够的元宝.请联系客服购买."); 
cm.dispose();   
} 


//★★★★★★★★★★★★★★★★★★★★★★

//购买5元会员⑤
}else if  (selection == 12) { 
if(cm.getChar().getVip() != 4) {
cm.sendOk("#b您的会员等级不适合进行该操作.");
cm.dispose();  

//判断是否有吊坠 有则无法购买

} else  if(cm.haveItem(1122017,1,true,false)){
cm.sendOk("#b你已经有一个精灵吊坠了！请扔掉或者过期后再办理该业务.");
cm.dispose();

//判断是否拥有足够元宝 没有则无法购买

} else if(cm.getzb() >= v4v5) { 
if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(4)).isFull()){
cm.sendOk("#b请保证其他栏位有空格接受VIP礼包.");
cm.dispose();

}else{   

cm.setzb(-v4v5);  
cm.getChar().SetVip(5); 

//普通礼包
cm.gainNX(libao5[0]);//点卷
cm.gainItem(4002001,libao5[1]-libao4[1]);//邮票
cm.gainrw13(libao4[2]-libao3[2]); //修炼

//勋章
var xunzhang = 1142178;//勋章
var shuxing = libao5[3]; //设置
var toDrop = new net.sf.odinms.client.Equip(xunzhang,0);
toDrop.setStr(shuxing);
toDrop.setDex(shuxing);
toDrop.setInt(shuxing);
toDrop.setLuk(shuxing);
toDrop.setSpeed(20);
toDrop.setJump(20);
net.sf.odinms.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);

//吊坠
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1122017); //获得装备的类形
var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // 生成一个Equip类
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 30 * 4 *10); //时间
toDrop.setExpiration(temptime); //给装备时间
toDrop.setStr(libao5[4]);
toDrop.setDex(libao5[4]);
toDrop.setInt(libao5[4]);
toDrop.setLuk(libao5[4]);
cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //刷新背包	

//普通礼包	
cm.getPlayer().gainAp(libao5[5]-libao4[5]);//属性点
cm.gainItem(4001003,libao5[6]-libao4[6]);//大吉(换GM卷)
cm.gainItem(4032226,libao5[7]-libao4[7]);//黄金猪猪(抽奖)
cm.gainItem(4031250,libao5[8]-libao4[8]);//骑宠抽奖卷
cm.gainItem(4031579,1);//宝物袋

//---------------------------------------------------

cm.getChar().saveToDB(true);
cm.sendOk("#b成功成为#r"+cm.mxdmz()+"会员⑤#k!"); 
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜:" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员⑤!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜:" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员⑤!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜:" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员⑤!!!",true).getBytes());	
cm.dispose();  
} 
} else { 
cm.sendOk("#b你没有足够的元宝.请联系客服购买.")
cm.dispose();   
} 


//★★★★★★★★★★★★★★★★★★★★★★

//购买5元会员⑥
}else if  (selection == 13) { 
if(cm.getChar().getVip() != 5) {
cm.sendOk("#b您的会员等级不适合进行该操作.");
cm.dispose();  

//判断是否有吊坠 有则无法购买

} else  if(cm.haveItem(1122017,1,true,false)){
cm.sendOk("#b你已经有一个精灵吊坠了！请扔掉或者过期后再办理该业务.");
cm.dispose();

//判断是否拥有足够元宝 没有则无法购买

} else if(cm.getzb() >= v5v6) { 
if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(4)).isFull()){
cm.sendOk("#b请保证其他栏位有空格接受VIP礼包.");
cm.dispose();

}else{  
 
cm.setzb(-v5v6);  
cm.getChar().SetVip(6); 

//普通礼包
cm.gainNX(libao6[0]);//点卷
cm.gainItem(4002001,libao6[1]-libao5[1]);//邮票
cm.gainrw13(libao6[2]-libao5[2]); //修炼

//勋章
var xunzhang = 1142176;//勋章
var shuxing = libao6[3]; //设置
var toDrop = new net.sf.odinms.client.Equip(xunzhang,0);
toDrop.setStr(shuxing);
toDrop.setDex(shuxing);
toDrop.setInt(shuxing);
toDrop.setLuk(shuxing);
toDrop.setSpeed(20);
toDrop.setJump(20);
net.sf.odinms.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);

//吊坠
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1122017); //获得装备的类形
var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // 生成一个Equip类
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 30 * 4 *10); //时间
toDrop.setExpiration(temptime); //给装备时间
toDrop.setStr(libao6[4]);
toDrop.setDex(libao6[4]);
toDrop.setInt(libao6[4]);
toDrop.setLuk(libao6[4]);
cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //刷新背包		

//普通礼包
cm.getPlayer().gainAp(libao6[5]-libao5[5]);//属性点
cm.gainItem(4001003,libao6[6]-libao5[6]);//大吉(换GM卷)
cm.gainItem(4032226,libao6[7]-libao5[7]);//黄金猪猪(抽奖)
cm.gainItem(4031250,libao6[8]-libao5[8]);//骑宠抽奖卷
cm.gainItem(4031579,1);//宝物袋

//---------------------------------------------------

cm.getChar().saveToDB(true);
cm.sendOk("#b成功成为#r"+cm.mxdmz()+"会员⑥#k!"); 
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜:" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员⑥!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜:" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员⑥!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜:" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员⑥!!!",true).getBytes());	
cm.viplaba("恭喜:" + cm.getPlayer().getName() +"加入"+cm.mxdmz()+"会员⑥.",5121006);
cm.dispose();  
} 
} else { 
cm.sendOk("#b你没有足够的元宝.请联系客服购买."); 
cm.dispose();   
} 



//★★★★★★★★★★★★★★★★★★★★★★

//购买5元会员⑦
}else if  (selection == 14) { 
if(cm.getChar().getVip() != 6) {
cm.sendOk("#b您的会员等级不适合进行该操作.");
cm.dispose();  

//判断是否有吊坠 有则无法购买

} else  if(cm.haveItem(1122017,1,true,false)){
cm.sendOk("#b你已经有一个精灵吊坠了！请扔掉或者过期后再办理该业务.");
cm.dispose();

//判断是否拥有足够元宝 没有则无法购买

} else if(cm.getzb() >= v6v7) { 
if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(4)).isFull()){
cm.sendOk("#b请保证其他栏位有空格接受VIP礼包.");
cm.dispose();

}else{  
 
cm.setzb(-v6v7);  
cm.getChar().SetVip(7); 

//普通礼包
cm.gainNX(libao7[0]);//点卷
cm.gainItem(4002001,libao7[1]);//邮票
cm.gainrw13(libao7[2]); //修炼

//勋章
var xunzhang = 1142189;//勋章
var shuxing = libao7[3]; //设置
var toDrop = new net.sf.odinms.client.Equip(xunzhang,0);
toDrop.setStr(shuxing);
toDrop.setDex(shuxing);
toDrop.setInt(shuxing);
toDrop.setLuk(shuxing);
toDrop.setSpeed(20);
toDrop.setJump(20);
net.sf.odinms.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);

//吊坠
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1122017); //获得装备的类形
var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // 生成一个Equip类
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 30 * 4 *10); //时间
toDrop.setExpiration(temptime); //给装备时间
toDrop.setStr(libao7[4]);
toDrop.setDex(libao7[4]);
toDrop.setInt(libao7[4]);
toDrop.setLuk(libao7[4]);
cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //刷新背包		

//普通礼包
cm.getPlayer().gainAp(libao7[5]);//属性点
cm.gainItem(4001003,libao7[6]);//大吉(换GM卷)
cm.gainItem(4032226,libao7[7]);//黄金猪猪(抽奖)
cm.gainItem(4031250,libao7[8]);//骑宠抽奖卷

//---------------------------------------------------

cm.getChar().saveToDB(true);
cm.sendOk("#b成功成为#r"+cm.mxdmz()+"会员⑦#k!"); 
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜:" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员⑦!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜:" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员⑦!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜:" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员⑦!!!",true).getBytes());	
cm.viplaba("恭喜:" + cm.getPlayer().getName() +"加入"+cm.mxdmz()+"会员⑦.",5121006);
cm.dispose();  
} 
} else { 
cm.sendOk("#b你没有足够的元宝.请联系客服购买."); 
cm.dispose();   
} 




//★★★★★★★★★★★★★★★★★★★★★★

//购买5元会员⑧
}else if  (selection == 15) { 
if(cm.getChar().getVip() != 7) {
cm.sendOk("#b您的会员等级不适合进行该操作.");
cm.dispose();  

//判断是否有吊坠 有则无法购买

} else  if(cm.haveItem(1122017,1,true,false)){
cm.sendOk("#b你已经有一个精灵吊坠了！请扔掉或者过期后再办理该业务.");
cm.dispose();

//判断是否拥有足够元宝 没有则无法购买

} else if(cm.getzb() >= v7v8) { 
if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(4)).isFull()){
cm.sendOk("#b请保证其他栏位有空格接受VIP礼包.");
cm.dispose();

}else{  
 
cm.setzb(-v7v8);  
cm.getChar().SetVip(8); 

//普通礼包
cm.gainNX(libao8[0]);//点卷
cm.gainItem(4002001,libao8[1]);//邮票
cm.gainrw13(libao8[2]); //修炼

//勋章
var xunzhang = 1142167;//勋章
var shuxing = libao8[3]; //设置
var toDrop = new net.sf.odinms.client.Equip(xunzhang,0);
toDrop.setStr(shuxing);
toDrop.setDex(shuxing);
toDrop.setInt(shuxing);
toDrop.setLuk(shuxing);
toDrop.setSpeed(20);
toDrop.setJump(20);
net.sf.odinms.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);

//吊坠
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1122017); //获得装备的类形
var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // 生成一个Equip类
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 30 * 4 *10); //时间
toDrop.setExpiration(temptime); //给装备时间
toDrop.setStr(libao8[4]);
toDrop.setDex(libao8[4]);
toDrop.setInt(libao8[4]);
toDrop.setLuk(libao8[4]);
cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //刷新背包		

//普通礼包
cm.getPlayer().gainAp(libao8[5]);//属性点
cm.gainItem(4001003,libao8[6]);//大吉(换GM卷)
cm.gainItem(4032226,libao8[7]);//黄金猪猪(抽奖)
cm.gainItem(4031250,libao8[8]);//骑宠抽奖卷

//---------------------------------------------------

cm.getChar().saveToDB(true);
cm.sendOk("#b成功成为#r"+cm.mxdmz()+"会员⑧#k!"); 
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜:" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员⑧!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜:" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员⑧!!!",true).getBytes());
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),""+cm.mxdmz()+"冒险岛" + " : 恭喜:" + cm.getPlayer().getName() +" 玩家成为"+cm.mxdmz()+"会员⑧!!!",true).getBytes());	
cm.viplaba("恭喜:" + cm.getPlayer().getName() +"加入"+cm.mxdmz()+"会员⑧.",5121006);
cm.dispose();  
} 
} else { 
cm.sendOk("#b你没有足够的元宝.请联系客服购买."); 
cm.dispose();   
} 









                   
//=====================================================================================
//进入会员地图
}else if(selection == 16){
cm.sendSimple("#r"+cm.mxdmz()+"冒险岛#k,使用#v4001003#兑换必成卷.\r\n#b  		剩余元宝:#r" + cm.getChar().getzb() + "#k#b 块  #b转生:#r" + cm.getChar().getReborns() + "#k#b 次\r\n#b\r\n#L89#"+ttt+" 兑换手套攻击卷轴 #l  #L90#"+ttt+" 兑换拳套攻击卷轴 #l\r\n#L91#"+ttt+" 兑换战枪攻击卷轴 #l  #L92#"+ttt+" 兑换双手剑攻卷轴 #l\r\n#L93#"+ttt+" 兑换单手剑攻卷轴 #l  #L94#"+ttt+" 兑换矛器攻击卷轴 #l\r\n#L95#"+ttt+" 兑换短杖魔力卷轴 #l  #L96#"+ttt+" 兑换长杖魔力卷轴 #l\r\n#L97#"+ttt+" 兑换耳环智力卷轴 #l  #L98#"+ttt+" 兑换鞋子跳跃卷轴 #l\r\n#L99#"+ttt+" 兑换短剑攻击卷轴 #l  #L200#"+ttt+" 兑换弓箭攻击卷轴 #l");

}else if(selection == 17){
cm.openNpc(9330081);

}else if(selection == 18){
cm.openNpc(9310074);

}else if(selection == 19){
cm.openNpc(9310072);









}else if(selection == 20){
if(cm.getChar().getVip() < 5){					
cm.sendOk("#b您目前的VIP等级无权进入此地图!")
cm.dispose();
}else{
cm.warp(vip5map,0);		
cm.getC().getChannelServer().getMapFactory().getMap(229020400).killAllMonsters();		
cm.dispose();
}

}else if(selection == 21){
if(cm.getChar().getVip() < 6){					
cm.sendOk("#b您目前的VIP等级无权进入此地图!")
cm.dispose();
}else{
cm.warp(vip6map,0);		
cm.getC().getChannelServer().getMapFactory().getMap(229020400).killAllMonsters();			
cm.dispose();
}

}else if(selection == 22){
if(cm.getChar().getVip() < 7){					
cm.sendOk("#b您目前的VIP等级无权进入此地图!")
cm.dispose();
}else{
cm.warp(vip7map,0);		
cm.getC().getChannelServer().getMapFactory().getMap(229020400).killAllMonsters();			
cm.dispose();
}

}else if(selection == 23){
if(cm.getChar().getVip() < 8){					
cm.sendOk("#b您目前的VIP等级无权进入此地图!")
cm.dispose();
}else{
cm.warp(vip8map,0);		
cm.getC().getChannelServer().getMapFactory().getMap(229020400).killAllMonsters();		
cm.dispose();
}




}else if (selection == 89) {
if (cm.haveItem(4001003) == false){
cm.sendOk("抱歉,您没有带来#v4001003#,所以我不能和你交换"); 
cm.dispose();
}else{
cm.gainItem(4001003,-1);
cm.gainItem(2040807,1); 
cm.sendOk("哈哈,换取成功,快去砸极品装备吧");
cm.dispose(); 
}

}else if (selection == 90) {
if (cm.haveItem(4001003) == false){
cm.sendOk("抱歉,您没有带来#v4001003#,所以我不能和你交换"); 
cm.dispose();
}else{
cm.gainItem(4001003,-1);
cm.gainItem(2044703,1);
cm.sendOk("哈哈,换取成功,快去砸极品装备吧");
cm.dispose(); 
}

}else if (selection == 91) {
if (cm.haveItem(4001003) == false){
cm.sendOk("抱歉,您没有带来#v4001003#,所以我不能和你交换"); 
cm.dispose();
}else{
cm.gainItem(4001003,-1);
cm.gainItem(2044303,1); 
cm.sendOk("哈哈,换取成功,快去砸极品装备吧");
cm.dispose(); 
}

}else if (selection == 92) {
if (cm.haveItem(4001003) == false){
cm.sendOk("抱歉,您没有带来#v4001003#,所以我不能和你交换"); 
cm.dispose();
}else{
cm.gainItem(4001003,-1);
cm.gainItem(2044003,1);
cm.sendOk("哈哈,换取成功,快去砸极品装备吧");
cm.dispose(); 
}

}else if (selection == 93) {
if (cm.haveItem(4001003) == false){
cm.sendOk("抱歉,您没有带来#v4001003#,所以我不能和你交换"); 
cm.dispose();
}else{
cm.gainItem(4001003,-1);
cm.gainItem(2043003,1); 
cm.sendOk("哈哈,换取成功,快去砸极品装备吧");
cm.dispose(); 
}

}else if (selection == 94) {
if (cm.haveItem(4001003) == false){
cm.sendOk("抱歉,您没有带来#v4001003#,所以我不能和你交换"); 
cm.dispose();
}else{
cm.gainItem(4001003,-1);
cm.gainItem(2044403,1); 
cm.sendOk("哈哈,换取成功,快去砸极品装备吧");
cm.dispose(); 
}

}else if (selection == 95) {
if (cm.haveItem(4001003) == false){
cm.sendOk("抱歉,您没有带来#v4001003#,所以我不能和你交换"); 
cm.dispose();
}else{
cm.gainItem(4001003,-1);
cm.gainItem(2043703,1); 
cm.sendOk("哈哈,换取成功,快去砸极品装备吧");
cm.dispose(); 
}

}else if (selection == 96) {
if (cm.haveItem(4001003) == false){
cm.sendOk("抱歉,您没有带来#v4001003#,所以我不能和你交换"); 
cm.dispose();
}else{
cm.gainItem(4001003,-1);
cm.gainItem(2043803,1); 
cm.sendOk("哈哈,换取成功,快去砸极品装备吧");
cm.dispose(); 
}

}else if (selection == 97) {
if (cm.haveItem(4001003) == false){
cm.sendOk("抱歉,您没有带来#v4001003#,所以我不能和你交换"); 
cm.dispose();
}else{
cm.gainItem(4001003,-1);
cm.gainItem(2040303,1); 
cm.sendOk("哈哈,换取成功,快去砸极品装备吧");
cm.dispose(); 
}

}else if (selection == 98) {
if (cm.haveItem(4001003) == false){
cm.sendOk("抱歉,您没有带来#v4001003#,所以我不能和你交换"); 
cm.dispose();
}else{
cm.gainItem(4001003,-1);
cm.gainItem(2040710,1); 
cm.sendOk("哈哈,换取成功,快去砸极品装备吧");
cm.dispose(); 
}

}else if (selection == 99) {
if (cm.haveItem(4001003) == false){
cm.sendOk("抱歉,您没有带来#v4001003#,所以我不能和你交换"); 
cm.dispose();
}else{
cm.gainItem(4001003,-1);
cm.gainItem(2043303,1); 
cm.sendOk("哈哈,换取成功,快去砸极品装备吧");
cm.dispose(); 
}

}else if (selection == 200) {
if (cm.haveItem(4001003) == false){
cm.sendOk("抱歉,您没有带来#v4001003#,所以我不能和你交换"); 
cm.dispose();
}else{
cm.gainItem(4001003,-1);
cm.gainItem(2044503,1); 
cm.sendOk("哈哈,换取成功,快去砸极品装备吧");
cm.dispose(); 
}







}else if (selection == 101){
if(cm.getBossLog("smmxd_GZ")< 1){
var vipstr = "普通玩家";
var sf_money = 0;
var sf_item = 0;
var sf_Nx = 0;
var noticeType = 2;
var quantity;


if(cm.getChar().getVip() <= 0){
sf_money = GZ_Player_money;
sf_item = GZ_Player_item[0];
quantity = GZ_Player_item[1];
sf_Nx = GZ_Player_Nx; 
vipstr = "●5元玩家"
var noticeType = 2;


}else if(cm.getChar().getVip() == 1){
sf_money = GZ_V1_money;
sf_item = GZ_V1_item[0];
quantity = GZ_V1_item[1];
sf_Nx = GZ_V1_Nx;	
vipstr = "●5元会员①";
var noticeType = 2;


}else if(cm.getChar().getVip() == 2){
sf_money = GZ_V2_money;
sf_item = GZ_V2_item[0];
quantity = GZ_V2_item[1];
sf_Nx = GZ_V2_Nx;
vipstr = "●5元会员②";
var noticeType = 3;


}else if(cm.getChar().getVip() == 3){
sf_money = GZ_V3_money;
sf_item = GZ_V3_item[0];
quantity = GZ_V3_item[1];
sf_Nx = GZ_V3_Nx;
sf_zb = GZ_V3_zb;
vipstr = "●5元会员③";
var noticeType = 11;


}else if(cm.getChar().getVip() == 4){
sf_money = GZ_V4_money;
sf_item = GZ_V4_item[0];
quantity = GZ_V4_item[1];
sf_Nx = GZ_V4_Nx;
sf_zb = GZ_V4_zb;
vipstr = "●5元会员④";	
var noticeType = 12;	


}else if(cm.getChar().getVip() == 5){
sf_money = GZ_V5_money;
sf_item = GZ_V5_item[0];
quantity = GZ_V5_item[1];
sf_Nx = GZ_V5_Nx;
sf_zb = GZ_V5_zb;
vipstr = "●5元会员⑤";	
var noticeType = 12;	

					                                
}else if(cm.getChar().getVip() == 6){
sf_money = GZ_V6_money;
sf_item = GZ_V6_item[0];
quantity = GZ_V6_item[1];
sf_Nx = GZ_V6_Nx;
sf_zb = GZ_V6_zb;
vipstr = "●5元会员⑥";	
var noticeType = 12;	


}else if(cm.getChar().getVip() == 7){
sf_money = GZ_V7_money;
sf_item = GZ_V7_item[0];
quantity = GZ_V7_item[1];
sf_Nx = GZ_V7_Nx;
vipstr = "●5元会员⑦";	
var noticeType = 12;	


}else if(cm.getChar().getVip() == 8){
sf_money = GZ_V8_money;
sf_item = GZ_V8_item[0];
quantity = GZ_V8_item[1];
sf_Nx = GZ_V8_Nx;
vipstr = "●5元会员⑧";	
var noticeType = 12;
}
					

if((cm.getMeso()+ sf_money) < 2147483647){
cm.gainMeso(sf_money);			
cm.getChar().modifyCSPoints(1,sf_Nx);
cm.getChar().UpdateCash();   //更新显示抵用状态
if (quantity > 0){
cm.gainItem(sf_item,quantity);
}
cm.setBossLog("smmxd_GZ");
cm.sendOk("您已成功领取到#r" + vipstr + "#k的工资#r" + sf_money + "#k金币、#r" + sf_Nx + "#k点抵用券"  + sf_zb + "#k元宝.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(noticeType,cm.getC().getChannel(),"工资发放员" + " : " + "恭喜 " + vipstr + " " + cm.getPlayer().getName() +" 领取到今天的工资"  + sf_money + "金币、" + sf_Nx + "点抵用券" + sf_zb + "#k元宝.",true).getBytes());
cm.setzb(sf_zb);
cm.dispose();
}else{
cm.sendOk("#b由于您身上的钱过多,已经装不下今天的工资了,请存银行后再来领取吧！");
cm.dispose();
}
}else{
cm.sendOk("#b工资为24小时发放一次,今天已经领取过工资了,请明天再来!");
cm.dispose();
}





} 
}
}
