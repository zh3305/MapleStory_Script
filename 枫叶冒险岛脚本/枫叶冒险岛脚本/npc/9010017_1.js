var status = 0;
var typed = 0;
var itemid = 0;
var itemprice = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        cm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == -1) {
            cm.dispose();
		} else if (status == 0) {
			var text = "#r#e绝版点装管理系统#k#n\r\n";
			text+="#b#L1#增加绝版点装#l\r\n";
			text+="#b#L2#修改/删除绝版点装#l\r\n";
			cm.sendSimple(text);
		} else if (status == 1) {
			if (selection == 1 || typed==1) {
				cm.sendGetNumber("#d#eStep 1.#n#k 输入要添加的物品ID：", 0, 999999, 9999999);
				typed = 1;
			} else if (selection == 2) {
				cm.dispose();
			}
		} else if (status == 2) {
			if (typed==1) {
				itemid = selection;
				if (cm.getItemName(itemid)==null)
				{
					status = 0;
					cm.sendNext("不存在的ID，请重新输入"+itemid);
				} else {
					cm.sendGetNumber("#d#eStep 2.#n#k 您添加的物品为#b<#z"+itemid+"#>#k，请输入物品的价格：", 0, 1, 9999999);
				}
			} else {
				
			}
		} else if (status == 3) {
			if (typed==1) {
				itemprice = selection;
				var conn = cm.getConnection();
				var sql = "insert into npccashshop(itemid,itemname,itemprice) values(?,?,?)";
				var pstmt = conn.prepareStatement(sql);
				pstmt.setInt(1, itemid);
				pstmt.setString(2, cm.getItemName(itemid));
				pstmt.setInt(3, itemprice);
				pstmt.executeUpdate();
				pstmt.close();
				//conn.close();
				cm.sendOk("添加成功");
				cm.dispose();
			}
		}
    }//mode
}//f