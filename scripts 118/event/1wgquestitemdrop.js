var maps = 970010000;//活动执行 地图ID
var timea = 1;//更新时间
var times = 5;

var setupTask;



function init() {
    scheduleNew();
}


function scheduleNew() {
    setupTask = em.schedule("start", timea*1000);//900000时间

}

function cancelSchedule() {
    setupTask.cancel(false);
}

function start() {
    scheduleNew();

	 //  em.getChannelServer().RemoveDrops();//清除物品

    //       em.getChannelServer().Drops(maps);//掉落物品


}



