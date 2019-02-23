function start() {
        im.gainItem(2430241, -1);
                im.gainItem(2500000, 1);// HP椅子
		im.gainItem(1132151, 1);//  紫金枫叶腰带腰带
		im.gainItem(1152088, 1);//  紫金枫叶肩章肩章
		im.gainItem(1003529, 1);//  紫金枫叶黄金帽黄金帽
		im.gainItem(1102394, 1);//  金枫叶披风明星斗篷
		im.gainItem(1082430, 1);//  紫金枫叶手套手套
		im.gainItem(1052457, 1);//  紫金枫叶套装套装
		im.gainItem(1072660, 1);//  紫金枫叶鞋鞋子
		im.gainItem(5030000, 1, 7);// HP椅子
		im.gainItem(3010061, 1);// 枫叶数下
		im.gainItem(3015183, 1);// 绿水灵背景椅子		
		im.gainItem(2000005, 300);// 超级药水
		im.gainItem(2022452, 11);// 经验值上升(大)
		im.gainItem(1072337, 1);// 喜洋洋拖鞋
		im.gainItem(1082170, 1);// 粉色电子表
		im.gainItem(1052671, 1);// 特大号白衬衫
		im.gainItem(1112150, 1);// 天使降临名片戒指
		im.gainItem(1112262, 1);// 天使聊天戒指
		im.gainItem(1003859, 1);// 满天星普赛克
		im.gainItem(1012057, 1);// 透明面具
		im.gainItem(1022048, 1);// 透明眼饰
		im.gainItem(1032024, 1);// 透明耳环
		im.gainItem(1702442, 1);// 棒球棒
		im.gainItem(5150040, 3);// 皇家理发
		im.gainItem(5152053, 3);// 皇家整容
		im.gainItem(5150052, 1);// 万能高级美发
		im.gainItem(5153015, 1);// 万能护肤
		im.gainItem(5152057, 1);// 万能高级整形
		im.gainItem(5072000, 50);// 高质地喇叭
		//im.gainItem(5060000, 3);// 装备刻名 X3
		//im.gainItem(2431092, 1);//
		im.gainItem(1112918, 1, 1);// 回归戒指 X1 24小时
		var toDrop = im.getNewEquip(1190400);
        var timeStamp = java.lang.System.currentTimeMillis();
        var expirationDate = timeStamp + 48 * 60 * 60  * 1000;
        toDrop.setExpiration(expirationDate);
		toDrop.setStr(50); //装备力量
		toDrop.setDex(50); //装备敏捷
		toDrop.setInt(50); //装备智力
		toDrop.setLuk(50); //装备运气
		toDrop.setMatk(30); //物理攻击
		toDrop.setWatk(30); //魔法攻击
		toDrop.setEnhance(25);
		im.addFromDrop(toDrop);	
		var toDrop = im.getNewEquip(1002186);
        var timeStamp = java.lang.System.currentTimeMillis();
        var expirationDate = timeStamp + 12 * 60 * 60  * 1000;
        toDrop.setExpiration(expirationDate);
		toDrop.setStr(50); //装备力量
		toDrop.setDex(50); //装备敏捷
		toDrop.setInt(50); //装备智力
		toDrop.setLuk(50); //装备运气
		toDrop.setMatk(30); //物理攻击
		toDrop.setWatk(30); //魔法攻击
		im.addFromDrop(toDrop);
		im.sendOk("恭喜您获得 #r管理员送出的礼物#k 。");
		im.worldSpouseMessage(0x20,"『新手驾到』：恭喜玩家 "+ im.getChar().getName() +" 来到了" + im.getServerName() + "。热烈祝贺他(她)吧。");
		im.dispose(); 
}
