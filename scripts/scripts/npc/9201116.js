status = -1;
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);//获得星期（星期天是 1 ，依次下去，星期六是 7）
var day = ca.get(java.util.Calendar.DATE);//获取日
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var min = ca.get(java.util.Calendar.MINUTE);//获得分钟
var sec = ca.get(java.util.Calendar.SECOND); //获得秒
var event;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    event = cm.getEventManager("Gailou"); //获取活动脚本的名称 test 对应 event 目录里面的 gailou.js 文件
    if (status == 0) {
        if (event == null) {
            cm.sendOk("活动脚本错误...请联系管理员修复！或重新打开。");
            cm.dispose();
        } else if (cm.getPlayer().getClient().getChannel() != 1) {
            cm.sendOk("活动只能在1频道进行！");
	    cm.dispose();
        } else if (event != null && event.getProperty("state").equals("true")) {
            cm.sendYesNo("亲爱的#r#h ##k您好，我是盖楼活动员，本次活动时间为10分钟.\r\n活动分一等奖，二等奖和三等奖.\r\n一等奖：第一个到达建楼高度的玩家获得一等奖。\r\n二等奖：一等奖之后后续补楼的10个玩家为二等奖\r\n三等奖：为结束活动奖励只限1人随机获得 1000-3000点卷\r\n那就看你运气啦 开始吧？");
        } else {
            cm.sendOk("活动2小时一次每次10分钟，活动结束后奖励会立即发放，请关注我们盖楼活动，多多参加。\r\n活动分一等奖6666点卷，二等奖3000-5000，三等奖1000-3000\r\n一等奖：第一个到达建楼高度的玩家获得一等奖。\r\n二等奖：一等奖之后后续补楼的5个玩家为二等奖\r\n三等奖：为结束活动奖励只限1人随机获得 1000 - 3000点卷");
            cm.dispose();
        }
    } else if (status == 1) {
        if (event != null && event.getProperty("state").equals("true")) {
            event.setProperty("check", "" + (parseInt(event.getProperty("check")) + 1)); //设置点击次数+1
            var count = parseInt(event.getProperty("check")); //获得总点击次数
            var max = parseInt(event.getProperty("maxCheck"));
			var dj  = 6666;
            var dj2 = rand(3000, 5000);
            var dj3 = rand(1000, 3000);
            if (count == max) {
                cm.gainNX( + dj);
				cm.setBossLog("抢楼第一",1);
                cm.worldSpouseMessage(0x18,"[抢楼活动]一等奖：恭喜玩家 " + cm.getName() + " 在抢楼活动中获得一等奖 6666点卷.");
                cm.sendOk("恭喜你获得了抢楼活动一等奖：奖金6666点。");
            } else if (count > max && count <= (max + 8)) {
                cm.gainNX( + dj2);
                cm.worldSpouseMessage(0x18,"[抢楼活动]二等奖：恭喜玩家 " + cm.getName() + " 在抢楼活动中获得二等奖 " + dj2 + "点卷.");
                cm.sendOk("恭喜你获得了抢楼活动二等奖。\r\n奖金 3000 - 5000 点不等。");
            } else if (count > (max + 10)) {
                cm.gainNX( + dj3);
                event.setProperty("state", "false");
                event.setProperty("endEvent", "true");
                cm.worldSpouseMessage(0x18,"[抢楼活动]三等奖：恭喜玩家 " + cm.getName() + " 在抢楼活动中获得三等奖 " + dj3 + "点卷.");
                cm.sendOk("恭喜你获得了抢楼活动三等奖。\r\n奖金 1000 - 3000 点不等。\r\n本次抢楼活动已经结束...");
            } else {
                cm.sendOk("当前楼层: " + parseInt(event.getProperty("check")) + " 楼。");
            }
        } else {
            cm.sendOk("活动还未开启或者活动已经结束，所有奖励均已经发放，请下次在参加。");
        }
        cm.dispose();
    }
}

function rand(lbound, ubound) {
    return Math.floor(Math.random() * (ubound - lbound)) + lbound;
}