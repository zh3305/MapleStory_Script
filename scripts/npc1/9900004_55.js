
var newopen = 0;//140级套装系列




//140级套装系列
var news = Array(		 
    
    Array(1003172,1102275,1082295,1052314,1072485,"狮心战斗套装",7000),
    Array(1003173,1102276,1082296,1052315,1072486,"龙尾法师套装",7000),
    Array(1003174,1102277,1082297,1052316,1072487,"鹰翼哨兵套装",7000),
    Array(1003175,1102278,1082298,1052317,1072488,"渡鸦之魂追踪者套装",7000),
    Array(1003176,1102279,1082299,1052318,1072489,"鲨齿船长套装",7000)
    );

var Select = -1;

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (a >= 2 && mode != 1){
        cm.dispose();
    }else{
        if (mode == -1) {
            cm.dispose();
        } else {
            if (mode == 1)
                a++;
            else
                a--;
            if (a == -1){
                cm.dispose();
            }else
            if (a == 0) {
                cm.sendSimple("#r - 自动销售机 >> 元宝商店#k \r\n#L1#140级套装系列#l")
            }else if (a == 1){
                if (selection == 1){
                    var selStr = "#b - 自动销售机 >> 元宝商店 >> 140级套装系列#b#k";
                    for (var i = 0; i < news.length; i++) {
                        selStr += "\r\n#L"+ i +"##b #i"+news[i][0]+"#  #i"+news[i][1]+"# #i"+news[i][2]+"# #i"+news[i][3]+"# #i"+news[i][4]+"##l \r\n\r\n #z"+news[i][0]+"# #z"+news[i][1]+"# #z"+news[i][2]+"# \r\n #z"+news[i][3]+"# #z"+news[i][4]+"##l#r[点击名字查看属性]#k\r\n\r\n#b套装名字：#r"+news[i][5]+"#b 。\r\n购买价格：#r"+news[i][6]+"#b 元宝。#k \r\n------------------------------------------------------ "
                    }
                    if (newopen == 0){
                        cm.sendSimple(selStr)
                    }else{
                        a = -1
                        cm.sendNext("商城好像正在上架。");
                    }
                }		
				
            }else if (a == 2){
                Select = selection;
                cm.sendYesNo("#r - 自动销售机 >> 元宝商店 >> 140级套装系列 >> 购物车 #k\r\n\r\n 即将购买 - #b\r\n#i"+news[Select][0]+"#  #i"+news[Select][1]+"# #i"+news[Select][2]+"# #i"+news[Select][3]+"# #i"+news[Select][4]+"##l \r\n\r\n #z"+news[Select][0]+"# #z"+news[Select][1]+"# #z"+news[Select][2]+"# \r\n #z"+news[Select][3]+"# #z"+news[Select][4]+"##l#r[点击名字查看属性]#k \r\n#b 套装名字：#r"+news[Select][5]+"#b 。 \r\n 一共要花费元宝：#r"+news[Select][6]+"#b点 。\r\n\r\n#r[注意]：购买的时候，一定要被#b背包栏#k#r空出#b6#k#r个格子，否则拿不到装备损失字符！");
				
            }else if (a == 3){
				
                cm.sendGetText("你想购买多少个？请输入1以上的整数！\r\n#b必须输入整数1 2 3 4 5 6 7 8 9 10 11以此类推！#r\r\n输入小数点将会翻倍扣除元宝，后果自负！");
				
            }else if (a == 4){
                var cost = cm.getText() * news[Select][6] ;
			   
                if (cm.getHyPay(1) < cost){
                    cm.sendOk("对不起，你的元宝不足 #r"+ cost +"#k 点。")
                    cm.dispose();
                }else if(cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.getByType(1)).isFull(6)){
                    cm.sendOk("您至少应该让装备栏空出6格.");
                    cm.dispose();
                }else if (cm.getText() != 1){
                    cm.sendOk("请输入等于 1 的数字。")
                    cm.dispose();
                    var paye = cm.getText() ;
                }else{
                    cm.gainItem(news[Select][0], cm.getText());
                    cm.gainItem(news[Select][1], cm.getText());
                    cm.gainItem(news[Select][2], cm.getText());
                    cm.gainItem(news[Select][3], cm.getText());
                    cm.gainItem(news[Select][4], cm.getText());
                    cm.addHyPay(+cost);
                    cm.worldMessage("[商城公告]：恭喜玩家【"+ cm.getPlayer().getName() +"】购买了超强的140级牛逼套装！");
                    cm.sendOk("购买成功了，你一共花费了"+ cost +" 元宝 。")
                    cm.dispose(); 
                }						
            }
        }
    }
}