function start() {
    var honor = im.nextInt(1000000000);
    im.getPlayer().gainHonor(honor, true);
	im.gainItem(2431174,-1);
	im.dispose();
}