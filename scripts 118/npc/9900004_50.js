
var newopen = 0;//消耗商品




//消耗商品
var news = Array(
Array(5150040,200,1,"皇家美发卡"),
Array(2430692,200,1,"打开后可以从里面获得一个随机能力的星岩"),
Array(5750001,500,1,"将星岩及所带属性从装备上永久移除#。装备将失去对应属性，被移除的星岩及其属性将保留。（1次只能移除1个星岩）"),
Array(5750000,300,1,"凝聚来自宇宙的能量，重置它所触碰到的星岩 属性和潜能。"),
Array(5360016,1500,1,"双倍爆率永久权"),
Array(5210002,3000,1,"永久权的2倍经验卡"),
Array(5211060,5000,1,"三倍经验卡，永久权，不消失，装备后打猎经验值三倍!"),
Array(5520000,300,1,"宿命剪刀"),
Array(5520001,500,1,"白金宿命剪刀"),
Array(5060003,300,1,"打开以后可以随机获得意想不到的奖品哦"),
Array(5490000,100,1,"重生的热度"),
Array(5490001,200,1,"永恒的热度"),
Array(5062000,100,1,"用于把装备洗到好的属性。最高S级"),
Array(5062001,250,1,"用于把2条潜能属性的装备有一定的几率变3条"),
Array(5062002,1000,1,"用于把装备洗到好的属性。最高SS级"),
Array(5064100,500,1,"保护物品的魔法盾。在装备物品上使用，可以在使用卷轴失败时防止装备物品#c可升级次数#减少，#c仅限1次#。但是使用卷轴成功时，防御效果也会消失。"),	 
Array(5064000,500,1,"保护物品的魔法盾。在装备物品上使用，可以在使用卷轴失败时防止装备物品损坏，仅限1次但是使用卷轴成功时，防御效果也会消失，强化12星以上的物品无法使用。"),
Array(2049400,100,1,"为C级装备物品附加潜能，但不减少可升级次数。只能用于C级物品#\n成功率：100%"),
Array(2049300,100,1,"将升级到最高的装备道具再强化一个等级。强化次数越高，获得高级属性的概率越高，强化失败时，物品损坏"),
Array(4001129,100,1,"可以用于角色转生的金币"),					 
Array(5570000,500,1,"以70%的几率可提高一次道具的强化次数。一个道具最多可提高2次强化次数,失败时道具不消失。注意：该道具不能用于黑龙项环。"),
Array(2340000,100,1,"与其他卷轴一起使用, 即使升级装备失败, 装备可升级次数也不会减少。"),
Array(2049100,100,1,"随机变换装备的属性。不可用于现金道具。"),
Array(2041200,500,1,"具有飞龙神秘力量的石头，只能用在#c没有升级的#暗黑龙王的项链或进阶黑暗龙王的项链上。 成功率：100%，物理防御力+350，魔法防御力+350，回避值+150，所有属性+15。")
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
                    cm.sendSimple("#r元宝商店#k --->>#b10RMB=1000元宝#k\r\n\r\n你当前的元宝剩余：#r"+cm.getHyPay(1)+"#k 点 \r\n#b最新上架神器：#v1082392# #z1082392##k\r\n\r\n #b#L1#商城物品#l  #L2#高级装备#l  #L3#130级武器#l  #L4#140级武器#l \r\n\r\n #b#L5#130级套装#l #b#L6#140级套装#l #b#L7#135级装备#l #b#L8#135级套装#l \r\n\r\n #b#L9#终极系列#l  #b#L10#骑宠专卖#l  #L11#现金装备#l")
                }else if (a == 1){
                if (selection == 1){
                    var selStr = "#b - 自动销售机 >> 元宝商店 >> 商城物品#b#k";
                    for (var i = 0; i < news.length; i++) {
                        selStr += "\r\n#L"+ i +"##b #i"+news[i][0]+"#  #z"+news[i][0]+"##l\r\n\r\n#r\r\n物品数量：#d"+news[i][2]+"#r 个。\r\n物品价格：#d"+news[i][1]+" #r元宝。\r\n#r物品介绍：#d"+news[i][3]+"#k "
                    }
                    if (newopen == 0){
                        cm.sendSimple(selStr)
                    }else{
                        a = -1
                        cm.sendNext("商城好像正在上架。");
                    }
                }else if (selection == 2){//新品热卖
                    cm.dispose();
                    cm.openNpc(9900004,51);
                }else if (selection == 3){
                    cm.dispose();
                    cm.openNpc(9900004,52);
                }else if (selection == 4){
                    cm.dispose();
                    cm.openNpc(9900004,53);
                }else if (selection == 5){
                    cm.dispose();
                    cm.openNpc(9900004,54);
                }else if (selection == 6){
                    cm.dispose();
                    cm.openNpc(9900004,55);
                }else if (selection == 7){
                    cm.dispose();
                    cm.openNpc(9900004,56);
                }else if (selection == 8){
                    cm.dispose();
                    cm.openNpc(9900004,57);
                }else if (selection == 9){
                    cm.sendOk("敬请期待.筹备中.如果你有好的建议也可以联系客户")	
                    cm.dispose();
                }else if (selection == 10){
                    cm.dispose();
                    cm.openNpc(9900004,60);
                }else if (selection == 11){
                    cm.sendOk("敬请期待.筹备中.如果你有好的建议也可以联系客户")	
                    cm.dispose();
                }
            }else if (a == 2){
                Select = selection;
                cm.sendYesNo("#r - 自动销售机 >> 元宝商店 >> 商城商品 >> 购物车 #k\r\n\r\n 即将购买 ------------------- #b\r\n\r\n#b #i"+news[Select][0]+"#  #z"+news[Select][0]+"##l\r\n#r物品数量：#d"+news[Select][2]+"#r 个。\r\n物品价格：#d"+news[Select][1]+" #r点卷。\r\n#r物品介绍：#d"+news[Select][3]+"#k ");
				
            }else if (a == 3){
				
                cm.sendGetText("你想购买多少个？请输入1以上的整数！\r\n#b必须输入整数1 2 3 4 5 6 7 8 9 10 11以此类推！#r\r\n输入小数点将会翻倍扣除元宝，后果自负！");
				
            }else if (a == 4){
                cost = cm.getText() * news[Select][1] ;
                if (cm.getText() < 1){
                    cm.sendOk("大于1 的数字可以输入。")
                    cm.dispose();
                }else if (cm.getHyPay(1) < cost){
                    cm.sendOk("对不起，你的元宝不足 #r"+ cost +"#k 点。")
                    cm.dispose();
                }else if (!cm.canHold(news[Select][0])){
                    cm.sendOk("对不起，你的背包空间不足。")	
                    cm.dispose();
                }else{
                    cm.gainItem(news[Select][0], cm.getText() * news[Select][2]) 
                    cm.addHyPay(+cost)
                    cm.worldMessage("[商城公告]：恭喜玩家【"+ cm.getPlayer().getName() +"】购买了商城物品！");
                    cm.sendOk("购买成功了，你一共花费了"+ cost +" 元宝 。")
                    cm.dispose();
                }
            }
        }
    }
}