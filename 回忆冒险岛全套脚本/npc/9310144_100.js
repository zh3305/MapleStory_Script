var status = 0;
var itemid = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendGetText("请输入想要查询的#r物品ID#k：");
		} else if (status == 1){
			itemid = cm.getText()*1;
			if (isNaN(itemid)) {
				cm.sendOk("很抱歉，物品ID只能为#r数字#k，请重新确认后查询！");
				cm.dispose();
				return;
			}
			var text = "您所查询的物品：#v"+itemid+"##r#t"+itemid+"##k掉宝信息如下：\r\n";
			var conn = cm.getConnection();
			var pstmt = conn.prepareStatement("select id from drop_data_global where itemid = "+itemid+" limit 1;");
			var GlobalDropData = pstmt.executeQuery();
			if (GlobalDropData.next()) {
				text += "\r\n#b该物品所有怪物均可掉落#k\r\n";
				GlobalDropData.close();
			} else {
				pstmt = conn.prepareStatement("select dropperid from drop_data where itemid = "+itemid+" order by chance;");
				var Monsters = pstmt.executeQuery();
				var count = 0;
				while (Monsters.next()) {
					var monster = Monsters.getString("dropperid");
					text += "#b#o"+monster+"#\r\n";
					count++;
				}
				Monsters.close();
				if (count > 0) {
					text += "#k\r\n共为您找到#r"+count+"#k只可爆该物品的怪物";
				} else {
					text += "#r很抱歉，没有查询到相关数据，请联系管理员进行添加！#k"
				}
			}
			pstmt.close();
			//conn.close();
			cm.sendOk(text);
			cm.dispose();
		}
   }
}