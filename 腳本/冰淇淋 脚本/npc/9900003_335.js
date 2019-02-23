function start() {
    setEventPoints(50, cm.getPlayer().getId(), 1);
    cm.getPlayer().dropMessage(-1,"获得了 自由市场泡点积分 x1");
    cm.dispose();
}

function DelEventPoints(Eventid, charid) {
    var delectData = cm.getConnection().prepareStatement("delete from EventTimes where eventid = " + Eventid + " and cid = " + charid + "");
    delectData.executeUpdate(); //删除数据
}

function getEventTimes(Eventid, charid) {//通过eventid来得到参与这个活动的次数
    var i = 0;
    var Times = cm.getConnection().prepareStatement("SELECT * FROM EventTimes where eventid = " + Eventid + " and cid = " + charid + "").executeQuery(); // 查询数据
    while (Times.next()) {
        i = Times.getString("times");//得到次数
    }
    return parseInt(i);
}

function getEventPoints(Eventid, charid) {//通过eventid来得到参与这个活动的点数
    var i = 0;
    var Times = cm.getConnection().prepareStatement("SELECT * FROM EventTimes where eventid = " + Eventid + " and cid = " + charid + "").executeQuery(); // 查询数据
    while (Times.next()) {
        i = Times.getString("points");//得到点数
    }
    return parseInt(i);
}

function setEventPoints(Eventid, charid, points) {//通过eventid来给予参与这个活动的点数
    var i = 0;
    var Times = cm.getConnection().prepareStatement("SELECT * FROM EventTimes where eventid = " + Eventid + " and cid = " + charid + "").executeQuery(); // 查询数据
    while (Times.next()) {
        i++;
    }
    if (i == 0) {//insert
        var insert = cm.getConnection().prepareStatement("INSERT INTO EventTimes VALUES(?,?,?,?,?,?,?)"); // 载入数据
        insert.setString(1, null); //载入记录ID
        insert.setString(2, Eventid); //载入活动ID
        insert.setString(3, cm.getPlayer().getId());//cid
        insert.setString(4, cm.getPlayer().getName());//cname
        insert.setString(5, points);//points 点数
        insert.setString(6, getEventTimes(1, charid));//times 次数
        insert.setString(7, null);//
        insert.executeUpdate(); //更新
    } else {//update
        var update = cm.getConnection().prepareStatement("update EventTimes set points = ? where eventid = " + Eventid + " and cid = " + charid + "");//更新为已使用
        update.setString(1, getEventPoints(Eventid, charid) + points);
        update.executeUpdate();
    }
}

function setEventTimes(Eventid, charid, times) {//通过eventid来设置参与这个活动的次数
    var i = 0;
    var Times = cm.getConnection().prepareStatement("SELECT * FROM EventTimes where eventid = " + Eventid + " and cid = " + charid + "").executeQuery(); // 查询数据
    while (Times.next()) {
        i++;
    }
    if (i == 0) {//insert
        var insert = cm.getConnection().prepareStatement("INSERT INTO EventTimes VALUES(?,?,?,?,?,?,?)"); // 载入数据
        insert.setString(1, null); //载入记录ID
        insert.setString(2, Eventid); //载入活动ID
        insert.setString(3, cm.getPlayer().getId());//cid
        insert.setString(4, cm.getPlayer().getName());//cname
        insert.setString(5, getEventPoints(2, charid));//points 点数
        insert.setString(6, times);//times 次数
        insert.setString(7, null);//
        insert.executeUpdate(); //更新
    } else {//update
        var update = cm.getConnection().prepareStatement("update EventTimes set times = ? where eventid = " + Eventid + " and cid = " + charid + "");//更新为已使用
        update.setString(1, getEventTimes(Eventid, charid) + times);
        update.executeUpdate();
    }
}