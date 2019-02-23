
var newopen = 0;//135级套装




//135级套装
var news = Array(
    Array(1003540,1082432,1052460,1072664,1032142,1122197,1132152,1112738,"外星人套装",5000)
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
                cm.sendSimple("#r - 自动销售机 >> 元宝商店#k \r\n#L1#135级套装#l")
            }else if (a == 1){
                if (selection == 1){
                    var selStr = "#b - 自动销售机 >> 元宝商店 >> 135级套装#b#k";
                    for (var i = 0; i < news.length; i++) {
                        selStr += "\r\n#L"+ i +"##b #i"+news[i][0]+"#  #i"+news[i][1]+"# #i"+news[i][2]+"# #i"+news[i][3]+"# #i"+news[i][4]+"# #i"+news[i][5]+"# #i"+news[i][6]+"# #i"+news[i][7]+"##l\r\n\r\n #z"+news[i][0]+"# #z"+news[i][1]+"# #z"+news[i][2]+"# #z"+news[i][3]+"#\r\n#z"+news[i][4]+"# #z"+news[i][5]+"# #z"+news[i][6]+"# #z"+news[i][7]+"##l\r\n#r[点击名字查看属性]#k\r\n\r\n#b套装名字：#r"+news[i][8]+"#b 。\r\n购买价格：#r"+news[i][9]+"#b 元宝。#k \r\n------------------------------------------------------ "
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
                cm.sendYesNo("#r - 自动销售机 >> 元宝商店 >> 135级套装 >> 购物车 #k\r\n\r\n 即将购买 - #b\r\n#i"+news[Select][0]+"#  #i"+news[Select][1]+"# #i"+news[Select][2]+"# #i"+news[Select][3]+"# #i"+news[Select][4]+"# #i"+news[Select][5]+"# #i"+news[Select][6]+"# #i"+news[Select][7]+"##l \r\n\r\n #z"+news[Select][0]+"# #z"+news[Select][1]+"# #z"+news[Select][2]+"# #z"+news[Select][3]+"#\r\n #z"+news[Select][4]+"# #z"+news[Select][5]+"# #z"+news[Select][6]+"##z"+news[Select][7]+"##l\r\n#r[点击名字查看属性]#k \r\n#b 套装名字：#r"+news[Select][8]+"#b 。 \r\n 一共要花费元宝：#r"+news[Select][9]+"#b点 。\r\n\r\n#r[注意]：购买的时候，一定要被#b背包栏#k#r空出#b6#k#r个格子，否则拿不到装备损失字符！");
				
            }else if (a == 3){
				
                cm.sendGetText("你想购买多少个？请输入1以上的整数！\r\n#b必须输入整数1 2 3 4 5 6 7 8 9 10 11以此类推！#r\r\n输入小数点将会翻倍扣除元宝，后果自负！");
				
            }else if (a == 4){
                var cost = cm.getText() * news[Select][9] ;
			   
                if (cm.getHyPay(1) < cost){
                    cm.sendOk("对不起，你的元宝不足 #r"+ cost +"#k 点。")
                    cm.dispose();
                }else if(cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.getByType(1)).isFull(8)){
                    cm.sendOk("您至少应该让装备栏空出8格.");
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
                    cm.gainItem(news[Select][5], cm.getText());
                    cm.gainItem(news[Select][6], cm.getText());
                    cm.gainItem(news[Select][7], cm.getText());
                    cm.addHyPay(+cost);
                    cm.worldMessage("[商城公告]：恭喜玩家【"+ cm.getPlayer().getName() +"】购买了超强的135级外星人套装！");
                    cm.sendOk("购买成功了，你一共花费了"+ cost +" 元宝 。")
                    cm.dispose(); 
                }						
            }
        }
    }
}