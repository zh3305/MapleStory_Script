/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：巨匠武器箱
 *  @Author Kent 
 */


var status = 0;
var psrw = Array(
        //这个为获取物品   （ID, 数量）
        Array(1212077, 1),
        Array(1222072, 1),
        Array(1232071, 1),
        Array(1242076, 1),
        Array(1252058, 1),
        Array(1302285, 1),
        Array(1312162, 1),
        Array(1322213, 1),
        Array(1332235, 1),
        Array(1362099, 1),
        Array(1372186, 1),
        Array(1382220, 1),
        Array(1402204, 1),
        Array(1412144, 1),
        Array(1422149, 1),
        Array(1432176, 1),
        Array(1442232, 1),
        Array(1452214, 1),
        Array(1462202, 1),
        Array(1472223, 1),
        Array(1482177, 1),
        Array(1492188, 1),
        Array(1522103, 1),
        Array(1532106, 1),
        Array(1542075, 1),
        Array(1552075, 1)
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
            im.sendOk("请确背包装备栏有空位，请先整理一下吧。");
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
