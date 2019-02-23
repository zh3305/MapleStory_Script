var status = 0;
var choice;
var scrolls = Array(2431988,2049132,2049339,2049751,5062010,2340000,2028175,2290245,2290724,2290868,2290869,2290870,2290871,2290872,2290873,2290874,2290875,2290876,2290877,2290878,2290879,2290880,2290881,2290882,2290883,2290884,2290885,2290886,2290887,2290888,2290889,2290890,2290891,2290914,2291137);
var scrolls1 = Array(1288,488,777,888,88,388,999,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20);
/*
* 圣诞节
*/
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
    else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (status >= 1 && mode == 0) {
            cm.sendOk("好吧，欢迎下次继续光临！.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;

        if (status == 0) {
            var choices = "亲爱的#r#h ##k，Merry Christmas！\r\n你拥有< #b" + cm.itemQuantity(4310011) + "#k >枚#v4310011##z4310011#，请选择你要兑换的圣诞礼物";
            for (var i = 0; i < scrolls.length; i++) {
                choices += "\r\n#L" + i + "##v" + scrolls[i] + "##z" + scrolls[i] + "#　#d需要 #r" + scrolls1[i] + " 枚#v4310011##z4310011##k#l";
            }
            cm.sendSimpleS(choices,2);
        } else if (status == 1) {
            cm.sendYesNo("#d你确定需要购买这个物品么？\r\n#b这将花费你#r " + scrolls1[selection] + " #b枚#v4310011##z4310011#！！#k" +"\r\n要换取的物品为： #v" + scrolls[selection] + "##z" + scrolls[selection] + "#");
            choice = selection;
 } else if (cm.getSpace(1) < 2 || cm.getSpace(2) < 2 || cm.getSpace(3) < 2 || cm.getSpace(4) < 2) {  
                cm.sendOk("#r - 圣诞雪晶兑换 >> #k\r\n\r\n圣诞雪晶兑换失败，您的背包空格小于2个。");  
                 cm.dispose(); 
        } else if (status == 2) {
            if(cm.haveItem(4310011,scrolls1[choice])) {
                cm.gainItem(4310011,-scrolls1[choice]);//圣诞雪晶
                cm.gainItem(scrolls[choice], 1);
                cm.sendOk("恭喜你，兑换成功。\r\n物品已经放入你的背包了，请注意查看！");
                cm.dispose();
            } else {
                cm.sendOk("抱歉，你没足够的#v4310011##z4310011#.");
                cm.dispose();
            }
        }
    }
}
