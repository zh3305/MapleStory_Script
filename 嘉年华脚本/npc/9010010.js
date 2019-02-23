
function action(mode, type, selection) {
    
	/*var A = cm.getInventory(1).getItem(1);
	var toDrop = A.copy();
	toDrop.setStr(999);
	cm.addFromDrop(toDrop);
	cm.sendOk (cm.addFromDrop(toDrop)+""+cm.EquipList(cm.getClient()));*/
	cm.sendOk (""+cm.getTotalStat(cm.getInventory(1).getItem(1).getItemId()));
    cm.safeDispose()
}
