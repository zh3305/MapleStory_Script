/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：黄金鹅蛋
 *  @Author Kent 
 */


var status = 0;
var psrw = Array(
        //这个为获取物品   （ID, 数量）
        Array(2049100, 1),
        Array(2049133, 1),
        Array(2049122, 1),
        Array(2049603, 1),
        Array(2049009, 1),
        Array(2049500, 1),
        Array(2049419, 1),
        Array(2048306, 1),
        Array(2000005, 200),
        Array(2000037, 200),
        Array(2000036, 200),
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
        if (im.getSpace(1) < 1) {
            im.sendOk("背包装备栏需要有空位，请先整理一下吧。");
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
