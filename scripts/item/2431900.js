/*
10级武器
*/
function start() {
    if (im.getJob() == 3101) {//恶魔复仇者
		im.gainItem(1232000,1);
		im.gainItem(2431900, -1);
        im.dispose();
	}else if (im.getJob() == 2002 || im.getJob() == 2310){//双弩精灵
		im.gainItem(1352000, 1);
		im.gainItem(2431900, -1);
        im.dispose();
	} else if (im.getJob() == 2004 || im.getJob() == 2700){//夜光
		im.gainItem(1352400, 1);
		im.gainItem(2431900, -1);
        im.dispose();
	}else if (im.getJob() == 6001){//天使
		im.getPlayer().changeJob(6500);
		im.getChar().levelUp();
		im.getChar().levelUp();
		im.getChar().levelUp();
		im.getChar().levelUp();
		im.getChar().levelUp();
		im.getChar().levelUp();
		im.getChar().levelUp();
		im.getChar().levelUp();
		im.getChar().levelUp();
		im.gainItem(2431900, -1);
        im.dispose();
	}else if (im.getJob() == 6000 || im.getJob() ==  6100){//狂龙
		im.gainItem(1352500, 1);
		im.gainItem(2431900, -1);
        im.dispose();
	}else {
     im.sendOk("你不是有缘人，所以无法打开。");
    }
    im.dispose();
}