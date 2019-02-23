status = -1;
position = Array();
itemCount = 0;
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            im.sendOk("不想使用吗？");
            im.dispose();
        }
        status--;
    }
    if (status == 0) {
        im.sendSimple("我能为你身上的道具附魔，增加你的战斗力！#b#L1#玩法说明#l\r\n#L2#开始附魔#l\r\n");
    } else if (status == 1) {
		if (selection==1) {
			status=-1;
			var text="附魔能够随机为你穿戴在身上的装备进行#r1-3#k点的属性值加成，能够加成的属性值有#b力、敏、智、运、攻击、魔攻、防御、魔防、命中值、回避值、HP、MP#k，附魔时请保证身上穿戴的装备超过15件（包含15件）。";
			cm.sendSimple(text);
		} else {
			for(var i = 1; i<=26; i++) {
				var item = im.getInventory(-1).getItem(-i);
				if (item!=null) {
					text +=i+":item:#v"+item.getItemId()+"#\r\n";
					position.push(item.getPosition());
					itemCount++;
				}
			}
			im.sendYesNo("是否继续？");
		}
	} else {
		var ii = im.getItemInfo();
		var pos = Math.floor(Math.random()*position.length);
		var item = im.getInventory(-1).getItem(position[pos]);
		var toDrop = item.copy();
		var attrName = "";
		var attr = Math.floor(Math.random()*12);
		var upgradeNum = Math.floor(Math.random()*3+1);
		switch(attr) {
			case 0:
				toDrop.setStr(item.getStr()+upgradeNum);
				attrName = "力量";
				break;
			case 1:
				toDrop.setDex(item.getDex()+upgradeNum);
				attrName = "敏捷";
				break;
			case 2:
				toDrop.setInt(item.getInt()+upgradeNum);
				attrName = "智力";
				break;
			case 3:
				toDrop.setLuk(item.getLuk()+upgradeNum);
				attrName = "运气";
				break;
			case 4:
				toDrop.setHp(item.getHp()+upgradeNum);
				attrName = "HP";
				break;
			case 5:
				toDrop.setMp(item.getMp()+upgradeNum);
				attrName = "MP";
				break;
			case 6:
				toDrop.setWatk(item.getWatk()+upgradeNum);
				attrName = "攻击力";
				break;
			case 7:
				toDrop.setMatk(item.getMatk()+upgradeNum);
				attrName = "魔法力";
				break;
			case 8:
				toDrop.setWdef(item.getWdef()+upgradeNum);
				attrName = "防御力";
				break;
			case 9:
				toDrop.setMdef(item.getMdef()+upgradeNum);
				attrName = "魔法防御力";
				break;
			case 10:
				toDrop.setAcc(item.getAcc()+upgradeNum);
				attrName = "命中值";
				break;
			case 11:
				toDrop.setAvoid(item.getAvoid()+upgradeNum);
				attrName = "回避值";
				break;
		}
		im.removeSlot(-1, position[pos], 1)
		im.addFromDrop(im.getC(), toDrop, true);
		var text = "恭喜你，成功使#v"+item.getItemId()+"#增加了#r"+upgradeNum+"#k点#b"+attrName+"#k，已将装备卸下至装备栏，请自行穿戴。";
		im.sendOk(text);
		im.dispose();
	}
}