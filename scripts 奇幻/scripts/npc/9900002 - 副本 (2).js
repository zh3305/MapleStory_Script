//积分活动

var status = 0;

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
			var text ="\t以下排行榜实时更新：\r\n\r\n"
			var payRanking = cm.getConnection().prepareStatement("select account, sum(rmb) as totalpay from paylog where paytime>'2014-11-07 23:59:59' GROUP BY account ORDER BY totalpay desc limit 10;").executeQuery();
			var account="";
			var totalpay="";
			var i=0;
			while(payRanking.next()) {
				account=payRanking.getString("account");
				totalpay=payRanking.getString("totalpay");
				i++;
				var r=1;
				if (i<10)
					r="0"+i;
				else
					r=i;
				text+=r+". 账号："+account.substring(0, 5)+"*** \t充值金额："+totalpay;
				text+="\r\n";
			}
			
			
			cm.sendOk(text);
			cm.dispose();
		}
   }
}