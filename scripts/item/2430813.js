//Green General Cap 1003611 - 15
var ii = Packages.server.MapleItemInformationProvider.getInstance();

function start() {
    if (im.getInventory(1).getNumFreeSlot() < 1) {
        im.sendOk("Please make more inventory space.");
        im.dispose();
        return;
    }
		if (im.getJob() >= 1000 && im.getJob() < 2000) {
			job = im.getJob() - 1000;
		} else if (im.getJob() >= 2000 && im.getJob() < 3000) {
			job = im.getJob() - 2000;
		} else if (im.getJob() >= 3000 && im.getJob() < 4000) {
			job = im.getJob() - 3000;
		} else if (im.getJob() >= 4000 && im.getJob() < 5000) {
			job = im.getJob() - 4000;			
		} else if (im.getJob() >= 5000 && im.getJob() < 6000) {
			job = im.getJob() - 5000;			
		} else if (im.getJob() >= 0 && im.getJob() < 1000) {
			job = im.getJob();
		} else {
			im.sendOk("error");
			im.dispose();
		}
		if (job >= 100 && job < 200) {
			cap = 1003611;
		} else if (job >= 200 && job < 300) {
			cap = 1003612;
		} else if (job >= 300 && job < 400) {
			cap = 1003613;
		} else if (job >= 400 && job < 500) {
			cap = 1003614;
		} else if (job >= 500 && job < 600) {
			cap = 1003615;		
		} else {
			im.sendOk("error");
			im.dispose();
		}		
			var ii = Packages.server.MapleItemInformationProvider.getInstance();
			var item = ii.getEquipById(cap);
			item.resetPotential();
			Packages.server.MapleInventoryManipulator.addFromDrop(im.getC(),item,false);	   
    im.removeItem(2430813);
    im.dispose();
}