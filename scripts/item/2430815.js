//Green General Shoes 1072719 - 23
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
			shoes = 1072719;
		} else if (job >= 200 && job < 300) {
			shoes = 1072720;
		} else if (job >= 300 && job < 400) {
			shoes = 1072721;
		} else if (job >= 400 && job < 500) {
			shoes = 1072722;
		} else if (job >= 500 && job < 600) {
			shoes = 1072723;		
		} else {
			im.sendOk("error");
			im.dispose();
		}		
			var ii = Packages.server.MapleItemInformationProvider.getInstance();
			var item = ii.getEquipById(shoes);
			item.resetPotential();
			Packages.server.MapleInventoryManipulator.addFromDrop(im.getC(),item,false);	   
    im.removeItem(2430815);
    im.dispose();
}