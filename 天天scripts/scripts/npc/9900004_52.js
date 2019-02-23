
var newopen = 0;//130级武器




//130级武器
var news = Array(
    Array(1362056,2500,1,"移动鼠标到道具名字上查看属性！"),
    Array(1302207,2500,1,"移动鼠标到道具名字上查看属性！"),
    Array(1312110,2500,1,"移动鼠标到道具名字上查看属性！"),
    Array(1322150,2500,1,"移动鼠标到道具名字上查看属性！"),
    Array(1332184,2500,1,"移动鼠标到道具名字上查看属性！"),
    Array(1402142,2500,1,"移动鼠标到道具名字上查看属性！"),
    Array(1412099,2500,1,"移动鼠标到道具名字上查看属性！"),
    Array(1422102,2500,1,"移动鼠标到道具名字上查看属性！"),
    Array(1432131,2500,1,"移动鼠标到道具名字上查看属性！"),
    Array(1452162,2500,1,"移动鼠标到道具名字上查看属性！"),
    Array(1472174,2500,1,"移动鼠标到道具名字上查看属性！"),
    Array(1482135,2500,1,"移动鼠标到道具名字上查看属性！"),
    Array(1522064,2500,1,"移动鼠标到道具名字上查看属性！"),
    Array(1532068,2500,1,"移动鼠标到道具名字上查看属性！"),
    Array(1372130,2500,1,"移动鼠标到道具名字上查看属性！"),
    Array(1382158,2500,1,"移动鼠标到道具名字上查看属性！"),
    Array(1442170,2500,1,"移动鼠标到道具名字上查看属性！"),
    Array(1462152,2500,1,"移动鼠标到道具名字上查看属性！"),
    Array(1492135,2500,1,"移动鼠标到道具名字上查看属性！")
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
                cm.sendSimple("#r - 自动销售机 >> 元宝商店#k \r\n #L1#130级武器#l")
            }else if (a == 1){
                if (selection == 1){
                    var selStr = "#b - 自动销售机 >> 元宝商店 >> 130级武器#b#k";
                    for (var i = 0; i < news.length; i++) {
                        selStr += "\r\n#L"+ i +"##b #i"+news[i][0]+"#  #z"+news[i][0]+"##l\r\n\r\n#r\r\n物品数量：#d"+news[i][2]+"#r 个。\r\n物品价格：#d"+news[i][1]+" #r元宝。\r\n#r物品介绍：#d"+news[i][3]+"#k "
                    }
                    if (newopen == 0){
                        cm.sendSimple(selStr)
                    }else{
                        a = -1
                        cm.sendNext("物品好像正在上架。");
                    }
                }		
				
            }else if (a == 2){
                Select = selection;
                cm.sendYesNo("#r - 自动销售机 >> 元宝商店 >> 130级武器 >> 购物车 #k\r\n\r\n 即将购买 ------------------- #b\r\n\r\n#b #i"+news[Select][0]+"#  #z"+news[Select][0]+"##l\r\n#r物品数量：#d"+news[Select][2]+"#r 个。\r\n物品价格：#d"+news[Select][1]+" #r元宝。\r\n#r物品介绍：#d"+news[Select][3]+"#k ");
				
            }else if (a == 3){
				
                cm.sendGetText("你想购买多少个？请输入1以上的整数！\r\n#b必须输入整数1 2 3 4 5 6 7 8 9 10 11以此类推！#r\r\n输入小数点将会翻倍扣除元宝，后果自负！");
				
            }else if (a == 4){
                cost = cm.getText() * news[Select][1] ;
                if (cm.getText() != 1){
                    cm.sendOk("只能输入等于1 的数字。")
                    cm.dispose();
                }else if (cm.getHyPay(1) < cost){
                    cm.sendOk("对不起，你的元宝不足 #r"+ cost +"#k 点。")
                    cm.dispose();
                }else if (!cm.canHold(news[Select][0])){
                    cm.sendOk("对不起，你的背包空间不足。")	
                    cm.dispose();
                }else{
                    cm.gainItem(news[Select][0], cm.getText() * news[Select][2]) 
                    cm.addHyPay(+cost);
                    cm.worldMessage("[商城公告]：恭喜玩家【"+ cm.getPlayer().getName() +"】购买了超强的130级武器！");
                    cm.sendOk("购买成功了，你一共花费了"+ cost +" 元宝 。")
                    cm.dispose();
                }						
            }
        }
    }
}