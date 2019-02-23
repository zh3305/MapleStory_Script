/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：彩虹箱
 *  @Author Kent 
 */


var status = 0;
var psrw = Array(
        //这个为获取物品   （ID, 数量）
        Array(2470013, 1), 
        Array(2049406, 1), 
        Array(2048213, 1),
        Array(1032195, 1),
        Array(2040359, 1),
        Array(2040360, 1),
        Array(2040361, 1),
        Array(2040362, 1),
        Array(2040363, 1),
        Array(2040364, 1),
        Array(2000005, 20),
        Array(2000037, 20),
        Array(2000036, 20),
        Array(2530000, 1),
        Array(2022794, 1),
        Array(2022795, 1),
        Array(2022796, 1),
        Array(2022797, 1),
        Array(2022798, 1),
        Array(2022799, 1)
        );
//取随机  每一个物品获取到的概率都是一样的。
var rand = Math.floor(Math.random() * psrw.length);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
        im.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {
        var mapid = im.getMapId();
        //判断背包的空间  1 — 5 对应的是 装备 — 特殊
        if (im.getSpace(1) < 1 || im.getSpace(2) < 1 || im.getSpace(3) < 1 || im.getSpace(4) < 1 || im.getSpace(5) < 1) {
            im.sendOk("请确保你背包的每一栏都有空位，请先整理一下吧。");
            im.dispose();
            return;
        }
        var ii = im.getItemInfo();
        im.used(1);//这个为消耗掉这个道具  参数是消耗的数量   如果数量大于 1  还要先判断 是否拥有这么多个数量的道具
        im.gainItem(psrw[rand][0], +psrw[rand][1]); //随机这个道具 还有数量
        //这个为服务器公告
        //im.worldSpouseMessage(0x18, "『每日寻宝』" + "[" + im.getChar().getName() + "] 打开金利奇的黄金袋子获得了" + psrw[rand][1] + "个<" + ii.getName(psrw[rand][0]) + ">, 大家快去寻宝吧！");
        im.dispose();
    }
}
