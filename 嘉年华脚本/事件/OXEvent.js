/*
 * 菜菜制作 奇幻冒险岛工作室所有
 * 修改人：AND 358122354
 * 欢迎定制各种脚本
 * OX问答副本  问题显示NPC
 */
var questions = new Array("铁观音是哪里出产的名茶？\r\nO:安徽\tX:福建", //false,
        "蜂蜜用那种水冲泡更好？\r\nO:温水\tX:冰水", //true,
        "以下哪种菜系不属于中国八大菜系之列？\r\nO:鄂菜\tX:皖", //true,
        "黄瓜不宜与下列哪种食物搭配？\r\nO:番茄\tX:鸡蛋", // true,
        "黄鹤楼在什么地方？\r\nO:武汉\tX:广州", //true,
        "东方明珠是世界第几高塔？\r\nO:第四\tX:第六", //false,
        "火影忍者疾风传主角名字\r\nO:漩涡鸣人\tX:大蛇丸", //true
        "尼玛可爱吗？\r\nO:可爱\tX:非常可爱", //false
        "GTO麻辣教师是哪种类型的？\r\nO:动漫\tX动漫和电视剧", //false
        "夜间行车远光会造成什么影响？\r\nO:短暂性致盲\tX:毫无影响", //true
        "世界上最小的鸟是什么鸟？\r\nO:蜂鸟\tX:小燕子", //true
        "世界上跑得最快的是什么？\r\nO:金钱豹\tX:鸵鸟", //false
        "和谐号高铁最高时速能达到多少？\r\nO:300\tX:500", //false
        "阿苏顿马丁是什么？\r\nO:人名\tX:跑车", //false
        "LOL里的大龙叫全名叫什么？\r\nO:纳什男爵\tX:无敌大龙", //true
        "冒险岛里只有冒险家一种法师吗？\r\nO:是\tX:不是", //false
        "时速100码的汽车紧急制动需要多久能停？\r\nO:40-45秒\tX:50-60秒", //true
        "LOL里的堕落天使叫什么？\r\nO:堕天使\tX:莫甘娜", //false
        "老虎属于什么类动物？\r\nO:猫科动物\tX:爬行动物", //true
        "花儿为什么是香的？\r\nO:那是因为我\tX:那是因为你", //true
        "一直被模范从未被超越是为啥？\r\nO:太给力\tX:哥是你模仿不了的", //false
        "蒙奇?D?路飞的爷爷叫什么？\r\nO:蒙奇?D?卡普\tX:蒙奇?D?多拉格", //true
        "蒙奇?D?路飞跟谁学会的霸气？\r\nO:博雅汉库克\tX:冥王雷利", //false
        "泷泽萝拉是？\r\nO:模特\tX:日本女优", //false
        "中国死海位于哪里？\r\nO:四川\tX:重庆", //true
        "毛泽东故乡在哪里？\r\nO:长沙\tX:湘潭", //false
        "长隆水上乐园在哪里？\r\nO:广州\tX:深圳" //true
        );
var answers = new Array(false, true, true, true, true, false, true, false, false, true, true, false, false, false, true, false, true, false, true, true, false, true, false, false, true, false, true);

var asked = new Array();//判断已经回答的个数
var currentQuestion;
var eim;
var mapidPre = 910048000;//准备地图
var mapid = 910048100;//进行地图
var map;
var setupTask;
var setupTaskEvent;

function init() {
    scheduleNew();
    eim = em.newInstance("OXEvent")
    map = eim.getMapInstance(mapid);
    ResetProperty();
}

function ResetProperty() {
    em.setProperty("OXEventState", "0");
    em.setProperty("start", "0");
    em.setProperty("question", "0");
    em.setProperty("RightAnwser", "0");//得到问题的正确答案
    asked = Array();
    //setupTaskEvent.cancel(true);
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 0);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 60 * 1;//1分钟检查一次时间
    }
    setupTask = em.scheduleAtTimestamp("startEvent", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}


function startEvent() {
    if (em.getProperty("start") == "1") {//已经可以让后面的玩家进来了。
        if (eim.getMapFactoryMap(mapid).getCharactersSize() == 0) {
            ResetProperty();//如果活动地图没人，自动释放开启入口等待下一个人的进入。
            scheduleNew();
        } else {
            for (var i = 0; i < eim.getMapFactoryMap(mapid).getCharactersSize(); i++) {
                if (eim.getMapFactoryMap(mapid).getCharactersSize() != 0) {
                    map.startMapEffect("现在有3分钟的时间等候其它玩家，请稍后！", 5121052);
                    //eim.getMapFactoryMap(mapid).getCharactersThreadsafe().get(i).getClient().getSession().write(Packages.tools.MaplePacketCreator.getClock(180));//10秒
                    eim.getMapFactoryMap(mapid).getCharactersThreadsafe().get(i).openNpc(9000277,"oxxianshi");//问题显示NPC
                }
            }
            em.broadcastServerMsg("[OX宾果活动] OX宾果活动已经开始了，现在大约有3分钟的报名时间，请速度到拍卖报到！");
            em.setProperty("start", "2");//等待状态
            setupTaskEvent = em.schedule("WatingStatus", 1000 * 60 * 3, eim);//3分钟后检查问题
        }
    } else if (em.getProperty("start") == "3") {//关闭入口状态
        if (eim.getMapFactoryMap(mapid).getCharactersSize() == 0) {
            ResetProperty();//如果活动地图没人，自动释放开启入口等待下一个人的进入。
            scheduleNew();
            cancelSchedule();
        }
    } else if (em.getProperty("start") == "4") {//任务完成状态
        ResetProperty();//如果活动地图没人，自动释放开启入口等待下一个人的进入。
        scheduleNew();
    } else {
        ResetProperty();
        scheduleNew();
    }
}

function WatingStatus(eim) {
    if (em.getProperty("start") == "2") {//等待状态
        em.setProperty("start", "3");//关闭入口，不允许进入
        if (eim.getMapFactoryMap(mapid).getCharactersSize() == 0) {
            ResetProperty();
            scheduleNew();//再次循环
        }
        if (eim.getMapFactoryMap(mapid).getCharactersThreadsafe() != 0) {//如果开始了的话
            setupTaskEvent = em.schedule("QuetionStart", 1000 * 10, eim);//10秒后检查问题
            for (var i = 0; i < eim.getMapFactoryMap(mapid).getCharactersSize(); i++) {
                if (eim.getMapFactoryMap(mapid).getCharactersSize() != 0) {
                    //eim.getMapFactoryMap(mapid).getCharactersThreadsafe().get(i).getClient().getSession().write(Packages.tools.MaplePacketCreator.getClock(10));//10秒
                    //  eim.getMapFactoryMap(mapid).getCharactersThreadsafe().get(i).dropMessage(1, "将在10秒后出题，请做好准备！");
                    eim.getMapFactoryMap(mapid).getCharactersThreadsafe().get(i).dropMessage(6, "将在10秒后出题，请做好准备！");
                }
            }
            // map.startMapEffect("将在10秒后出题，请做好准备！", 5121052);
        } else {
            ResetProperty();
            scheduleNew();//再次循环
        }
    } else {
        if (eim.getMapFactoryMap(mapid).getCharactersSize() == 0) {
            ResetProperty();
            scheduleNew();//再次循环
        }
    }
}

function QuetionStart(eim) {//问题提出部分
    if (asked.length != 20) {
        currentQuestion = Math.floor(Math.random() * questions.length);
        asked.push(currentQuestion);
        em.setProperty("question", currentQuestion);//得到问题的index
        for (var i = 0; i < eim.getMapFactoryMap(mapid).getCharactersSize(); i++) {
            if (eim.getMapFactoryMap(mapid).getCharactersSize() != 0) {
                eim.getMapFactoryMap(mapid).getCharactersThreadsafe().get(i).openNpc(9000277,"oxxianshi1");//问题显示NPC
            }
        }
        setupTaskEvent = em.schedule("AfterQuestion", 1000 * 15, eim);//15秒后检查问题
        for (var i = 0; i < eim.getMapFactoryMap(mapid).getCharactersSize(); i++) {
            if (eim.getMapFactoryMap(mapid).getCharactersSize() != 0) {
                //eim.getMapFactoryMap(mapid).getCharactersThreadsafe().get(i).getClient().getSession().write(Packages.tools.MaplePacketCreator.getClock(15));//15秒
                eim.getMapFactoryMap(mapid).getCharactersThreadsafe().get(i).dropMessage(6, "将在15秒后检查问题！请站好正确的位置！");
                //    eim.getMapFactoryMap(mapid).getCharactersThreadsafe().get(i).dropMessage(1, "将在15秒后检查问题！请站好正确的位置！");
            }
        }
        //map.startMapEffect("将在30秒后检查问题！请站好正确的位置！", 5121052);
    } else {//已经回答了20道题目
        for (var i = 0; i < eim.getMapFactoryMap(mapid).getCharactersSize(); i++) {
            if (eim.getMapFactoryMap(mapid).getCharactersSize() != 0) {
                eim.getMapFactoryMap(mapid).getCharactersThreadsafe().get(i).openNpc(9000277,"oxxianshi3");//余下人员奖励NPC,这个NPC要直接把玩家送出地图
            }
        }
        em.setProperty("start", "4");//任务完成状态
        scheduleNew();//再次循环
    }
    em.setProperty("OXEventState", asked.length);
}

function AfterQuestion(eim) {//问题检查部分
    em.setProperty("question", currentQuestion);//得到问题的index
    for (var i = 0; i < eim.getMapFactoryMap(mapid).getCharactersSize(); i++) {
        eim.getMapFactoryMap(mapid).getCharactersThreadsafe().get(i).openNpc(9000277,"oxxianshi2");//问题检查NPC
    }
    for (var i = 0; i < eim.getMapFactoryMap(mapid).getCharactersSize(); i++) {
        if (eim.getMapFactoryMap(mapid).getCharactersSize() != 0) {
            //eim.getMapFactoryMap(mapid).getCharactersThreadsafe().get(i).openNpc(9000277, 2);//问题检查NPC
            eim.getMapFactoryMap(mapid).getCharactersThreadsafe().get(i).dropMessage(6, "将在5秒后再次出题！");
            // eim.getMapFactoryMap(mapid).getCharactersThreadsafe().get(i).dropMessage(1, "将在5秒后再次出题！");
            //eim.getMapFactoryMap(mapid).getCharactersThreadsafe().get(i).getClient().getSession().write(Packages.tools.MaplePacketCreator.getClock(5));//5
        }//避免报错
    }
    //map.startMapEffect("将在10秒后再次出题！", 5121052);
    if (eim.getMapFactoryMap(mapid).getCharactersSize() != 0) {//避免报错
        setupTaskEvent = em.schedule("QuetionStart", 1000 * 5, eim);//5秒后再次出题
    } else {
        scheduleNew();//再次循环
        ResetProperty();
    }
}
