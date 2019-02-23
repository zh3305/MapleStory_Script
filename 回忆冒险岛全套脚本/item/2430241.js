function start() {
        im.gainItem(2430241, -1);
		im.gainItem(3010180, 1);// HP椅子
		im.gainItem(3012003, 1);// 爱心椅子
		im.gainItem(3010583, 1);// 蛇椅子
		im.gainItem(3010682, 1);// 天文台椅子
		im.gainItem(2000005, 300);// 超级药水
		im.gainItem(1072407, 1);// HELLO喵喵拖
		im.gainItem(1082170, 1);// 粉色电子表
		im.gainItem(1042096, 1);// 超人衣服
		im.gainItem(1062098, 1);// 牛仔裤子
		im.gainItem(1112116, 1);
		im.gainItem(1112226, 1);
		im.gainItem(1002186, 1);
		im.gainItem(1012057, 1);
		im.gainItem(1022048, 1);
		im.gainItem(1032024, 1);
		im.gainItem(5150040, 3);// 皇家理发
		im.gainItem(5152053, 3);// 皇家整容
		im.gainItem(5150052, 1);// 万能高级美发
		im.gainItem(5153015, 1);// 万能护肤
		im.gainItem(5152057, 1);// 万能高级整形
		im.gainItem(5340000, 1, 3);
		im.gainItem(2300000, 200);
		im.gainItem(5211060, 1, 2 * 60 * 60 * 1000);// 三倍经验
		im.gainItem(5360015, 1, 2 * 60 * 60 * 1000);// 双爆
		//im.gainItem(5050000, 100);// 洗血的能力值
		im.gainItem(5072000, 10);// 高质地喇叭
		im.gainItem(5060000, 3);// 装备刻名 X3
		im.gainItem(2431092, 1);//
		im.gainItem(1112164, 1, 2 * 60 * 60 * 1000);//夏日甜心名片戒指 24小时
		im.gainItem(1112276, 1, 2 * 60 * 60 * 1000);//夏日甜心聊天戒指 24小时
		im.gainItem(1102630, 1, 1);// 浪漫四翼天使 24小时
		im.gainItem(1102709, 1, 1);// 双色糖果翅膀 1天
		im.gainItem(1112918, 1, 1);// 回归戒指 X1 24小时
		im.gainPet(5000054, im.getItemName(5000054), 1, 0, 100, 3*86400, 0); 
		var ii = im.getItemInfo();				
		var toDrop = ii.randomizeStats(ii.getEquipById(1112941)).copy(); // 生成一个Equip类                    
		toDrop.setStr(100); //装备力量
		toDrop.setDex(100); //装备敏捷
		toDrop.setInt(100); //装备智力
		toDrop.setLuk(100); //装备运气
		toDrop.setMatk(100); //物理攻击
		toDrop.setWatk(100); //魔法攻击 
		var timeStamp = java.lang.System.currentTimeMillis();
		var expirationDate = timeStamp+3*86400*1000;
		toDrop.setExpiration(expirationDate);
		im.addFromDrop(im.getC(), toDrop, false);
		//im.gainItem(1302063, 1);// 火刀
		im.sendOk("恭喜您获得 #r管理员送出的礼物#k 。");
		//im.worldSpouseMessage(0x20,"『新手驾到』：恭喜玩家 "+ im.getChar().getName() +" 来到了回忆冒险岛。热烈祝贺他(她)吧。");
		im.dispose(); 
}
