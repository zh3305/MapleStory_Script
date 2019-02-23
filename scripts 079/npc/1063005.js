
importPackage(net.sf.odinms.server);
importPackage(java.util);
importPackage(net.sf.odinms.client);

var slot;
var item;
var qty;
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status <= 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (status >= 1 && mode == 0) {
            cm.sendOk("为了帮助更多的人管理好自己的装备,我非常的忙！");
            cm.dispose();
            return;
        }
    if (mode == 1)
            status++;
    else
            status--;
        if (status == 0) {
            cm.sendNext("我将为你销毁#b装备栏第一个位置的装备#k,你要清理吗?");
        } else if (status == 1) {
            slot = selection;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot);

cm.sendYesNo("你确定要销毁这件装备吗?")
        } else if (status == 2) {
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1)==0){
cm.sendOk("你输入的物品位置没有装备!")
cm.dispose();
}else{
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
cm.sendOk("成功.");
cm.dispose();
}}
    }
}  
