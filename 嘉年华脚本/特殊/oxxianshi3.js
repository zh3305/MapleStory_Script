/*
 * 菜菜制作 奇幻冒险岛工作室所有
 * 修改人：AND 358122354
 * 欢迎定制各种脚本
 * OX问答副本  问题显示NPC
 */
var status = 0;


function start() {
    cm.warp(910000000,0);
    cm.sendOk("恭喜你完成了我的考验，赠送您#i2432971 # #t2432971# 2个!");
    cm.gainItem(2432971,2);
    cm.spouseMessage(0x25, "[OX宾果活动] 恭喜 "+cm.getPlayer().getName()+" 玩家从OX宾果活动获取了 夏季限量椅子箱 2个！");
    cm.dispose();
}