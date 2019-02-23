var status = 0;
var statuss = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
        cm.dispose();
    }
    if (status == 0) {
        cm.sendSimple("#v3994641##v3994642##v3994643##v3994644##v3994645#\r\n#r112版本已修改转职等级,除龙神之外其他职业转职3转等级调整为60级,4转等级调整为100级#k.\r\n你确定要转职?请选择你梦想的职业：\r\n#L13##b[冒险家]#l #L12#[骑士团]#l #L10#[战神]#l #L11#[龙神]#l#k\r\n#L0##r[火炮手]#l #L2#[双弩]#l   #L3#[恶魔]#l #L6#[夜光师]#l#k\r\n#L7##b[幻灵师]#l #L8#[弩豹侠]#l #L9#[机械师]#l#L110#[萌天使]#l#k\r\n#L1#[暗影双刀]#l#L100#[狂龙战士]#l#L4#[米哈尔]#l#L5#[幻影]#l#k\r\n#L120##b[龙的传人]#l#L200#[尖兵]#l   #L500#[林之灵]#l#L400#[神之子]#k#l\r\n#L300##r[恶魔复仇者]#k#l  #L600##r[隐月][118新]#k#l");
    } else if (status == 1) {
        switch (selection) {
		case 600:
			if ((cm.getJob() == 0 || cm.getJob() == 2005) && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(2500);
				cm.teachSkill(25001000, 25, 0); //冲击拳
                cm.teachSkill(25001002, 25, 0); //闪拳
				cm.teachSkill(25001204, 20, 0); //跳跃
                cm.teachSkill(25000105, 20, 0); //乾坤一体
                cm.sendOk("系统已经为您转职为隐月1转.");
            } else if (cm.getJob() == 2500 && cm.getPlayer().getLevel() >= 30) {
                cm.getPlayer().changeJob(2510);
				cm.teachSkill(25101000, 20, 0); //破力拳
                cm.teachSkill(25101003, 10, 0); //粉碎铁爪 - 下
				cm.teachSkill(25101004, 10, 0); //粉碎铁爪 - 前
                cm.teachSkill(25101205, 15, 0); //后方移动
				cm.teachSkill(25100106, 10, 0); //拳甲修炼
				cm.teachSkill(25100107, 10, 0); //精灵凝聚第2招
                cm.teachSkill(25100108, 10, 0); //力量锻炼
				cm.teachSkill(25100009, 10, 0); //狐灵
                cm.sendOk("系统已经为您转职为隐月2转.");
            } else if (cm.getJob() == 2510 && cm.getPlayer().getLevel() >= 60) {
                cm.getPlayer().changeJob(2511);
				cm.teachSkill(25111000, 20, 0); //通背拳
                cm.teachSkill(25111004, 10, 0); //粉碎铁爪 - 回
				cm.teachSkill(25111005, 20, 0); //招魂之幕
                //cm.teachSkill(25111206, 15, 0); //束缚术
				cm.teachSkill(25110107, 20, 0); //精灵凝聚第3招
				cm.teachSkill(25110108, 10, 0); //招魂式
                cm.teachSkill(25111209, 10, 0); //幻灵招魂
				cm.teachSkill(25110210, 20, 0); //弱化
                cm.sendOk("系统已经为您转职为隐月3转.");
            } else if (cm.getJob() == 2511 && cm.getPlayer().getLevel() >= 100) {
                cm.getPlayer().changeJob(2512);
				cm.teachSkill(25121000, 30, 30); //爆流拳
                cm.teachSkill(25121005, 30, 30); //鬼斩
				cm.teachSkill(25121006, 20, 20); //四魂刻印
                cm.teachSkill(25121007, 20, 20); //分魂斩
				//cm.teachSkill(25121209, 10, 10); //招魂结界
				cm.teachSkill(25120110, 20, 20); //火狐灵
                cm.teachSkill(25120112, 30, 30); //精灵凝聚第4招
				cm.teachSkill(25120113, 30, 30); //高级拳甲修炼
				cm.teachSkill(25120214, 30, 30); //洞察之眼
                cm.sendOk("系统已经为您转职为隐月4转.");
            } else {
                cm.sendOk("你的当前职业条件不满足,无法为你提供转职服务!");
            }
            cm.dispose();
		break;
        case 500:
            if (cm.getJob() == 0 && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(11200);
                cm.sendOk("系统已经为您转职为林之灵,后面的的技能将会在满足的等级自动加满.");
            } else {
                cm.sendOk("你的当前职业条件不满足,无法为你提供转职服务!");
            }
            cm.dispose();
            break;
        case 400:
            if (cm.getJob() == 0 && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(10112);
                cm.sendOk("系统已经为您转职为神之子,后面的的技能将会在满足的等级自动加满.");
            } else {
                cm.sendOk("你的当前职业条件不满足,无法为你提供转职服务!");
            }
            cm.dispose();
            break;
        case 300:
            if ((cm.getJob() == 0 || cm.getJob() == 3001) && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(3101);
                cm.teachSkill(31011000, 20, 20); //超越：十字斩
                cm.teachSkill(31010002, 10, 10); //生命吸收
                cm.teachSkill(31010003, 15, 15); //恶魔之力
                cm.teachSkill(31011001, 20, 20); //负荷释放
                cm.sendOk("系统已经为您转职为恶魔复仇者1转.");
            } else if (cm.getJob() == 3101 && cm.getPlayer().getLevel() >= 30) {
                cm.getPlayer().changeJob(3120);
                cm.teachSkill(31201000, 20, 20); //超越：恶魔突袭
                cm.teachSkill(31201001, 20, 20); //暗影蝙蝠
                cm.teachSkill(31201002, 10, 10); //恶魔加速
                cm.teachSkill(31201003, 20, 20); //深渊之怒
                cm.teachSkill(31200004, 10, 10); //铜墙铁壁
                cm.teachSkill(31200005, 10, 10); //亡命剑精通 
                cm.teachSkill(31200006, 5, 5); //心灵之力
                cm.sendOk("系统已经为您转职为恶魔复仇者2转.");
            } else if (cm.getJob() == 3120 && cm.getPlayer().getLevel() >= 60) {
                cm.getPlayer().changeJob(3121);
                cm.teachSkill(31211000, 20, 20); //超越：月光斩
                cm.teachSkill(31211001, 20, 20); //活力吞噬
                cm.teachSkill(31211002, 20, 20); //持盾突击
                cm.teachSkill(31211003, 20, 20); //驱邪
                cm.teachSkill(31211004, 20, 20); //恶魔恢复
                cm.teachSkill(31210005, 20, 20); //负荷缓解
                cm.teachSkill(31210006, 5, 5); //进阶生命吸收
                cm.sendOk("系统已经为您转职为恶魔复仇者3转.");
            } else if (cm.getJob() == 3121 && cm.getPlayer().getLevel() >= 100) {
                cm.getPlayer().changeJob(3122);
                cm.teachSkill(31221000, 10, 10); //超越：处决
                cm.teachSkill(31221001, 10, 10); //追击盾
                cm.teachSkill(31221002, 20, 20); //破甲
                cm.teachSkill(31221003, 10, 10); //血腥禁锢
                cm.teachSkill(31221004, 10, 10); //惊天之力
                cm.teachSkill(31220005, 10, 10); //防御专精
                cm.teachSkill(31220006, 10, 10); //进阶亡命剑精通
                cm.teachSkill(31220007, 10, 10); //强化超越
                cm.teachSkill(31221008, 10, 10); //冒险岛勇士
                cm.teachSkill(31221052, 1, 1); //万剑斩
                cm.sendOk("系统已经为您转职为恶魔复仇者4转.");
            } else {
                cm.sendOk("你的当前职业条件不满足,无法为你提供转职服务!");
            }
            cm.dispose();
            break;
        case 200:
            if ((cm.getJob() == 0 || cm.getJob() == 3002) && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(3600);
                cm.teachSkill(36001000, 20, 20); //能量曲线
                cm.teachSkill(36001005, 4, 4); //精准火箭
                cm.teachSkill(36000003, 10, 10); //神经系统改造
                cm.teachSkill(36000004, 10, 10); //多线程Ⅱ
                cm.teachSkill(36001001, 10, 10); //突然加速
                //cm.teachSkill(36001002, 20, 20); //超能力量
                cm.sendOk("系统已经为您转职为尖兵1转.");
            } else if (cm.getJob() == 3600 && cm.getPlayer().getLevel() >= 30) {
                cm.getPlayer().changeJob(3610);
                cm.teachSkill(36101000, 20, 20); //银色快剑：闪光
                cm.teachSkill(36101001, 15, 15); //原子推进器
                cm.teachSkill(36100010, 4, 4); //精准火箭1次强化
                cm.teachSkill(36100005, 5, 5); //精英支援
                cm.teachSkill(36100006, 10, 10); //尖兵精通
                cm.teachSkill(36100007, 1, 1); //多线程Ⅲ
                cm.teachSkill(36101002, 20, 20); //直线透视
                cm.teachSkill(36101003, 10, 10); //高效输能
                cm.teachSkill(36101004, 10, 10); //尖兵加速
                cm.sendOk("系统已经为您转职为尖兵2转.");
            } else if (cm.getJob() == 3610 && cm.getPlayer().getLevel() >= 60) {
                cm.getPlayer().changeJob(3611);
                cm.teachSkill(36111000, 20, 20); //战斗切换：爆炸
                cm.teachSkill(36111001, 20, 20); //斜线追击
                cm.teachSkill(36111002, 20, 20); //反重力力场
                cm.teachSkill(36110005, 10, 10); //三角进攻
                cm.teachSkill(36110012, 4, 4); //精准火箭2次强化
                cm.teachSkill(36110004, 10, 10); //宙斯盾系统
                cm.teachSkill(36110007, 1, 1); //多线程Ⅳ
                cm.teachSkill(36111006, 20, 20); //全息投影
                cm.teachSkill(36111003, 20, 20); //双重防御
                cm.teachSkill(36111008, 5, 5); //额外供给
                cm.sendOk("系统已经为您转职为尖兵3转.");
            } else if (cm.getJob() == 3611 && cm.getPlayer().getLevel() >= 100) {
                cm.getPlayer().changeJob(3612);
                cm.teachSkill(36121000, 10, 10); //刀锋之舞
                cm.teachSkill(36121001, 10, 10); //聚能脉冲炮：狙击
                cm.teachSkill(36121002, 10, 10); //全息力场 ：穿透
                cm.teachSkill(36120015, 4, 4); //精准火箭最终强化
                cm.teachSkill(36120005, 10, 10); //瞬间闪避
                cm.teachSkill(36120006, 10, 10); //尖兵专家
                cm.teachSkill(36120010, 1, 1); //多线程Ⅴ
                cm.teachSkill(36120016, 1, 1); //多线程Ⅵ
                cm.teachSkill(36121003, 10, 10); //神秘代码
                cm.teachSkill(36121004, 10, 10); //攻击矩阵
                cm.teachSkill(36121007, 1, 1); //时间胶囊
                cm.teachSkill(36121008, 10, 10); //冒险岛勇士	
                cm.sendOk("系统已经为您转职为尖兵4转.");
            } else {
                cm.sendOk("你的当前职业条件不满足,无法为你提供转职服务!");
            }
            cm.dispose();
            break;
        case 0:
            if (cm.getJob() == 0 && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(501);
                cm.teachSkill(5011000, 20, 20); //溅射炮
                cm.teachSkill(5011001, 20, 20); //炮击拳
                cm.teachSkill(5011002, 15, 15); //紧急后撤
                cm.teachSkill(5010003, 10, 10); //升级火炮
                cm.sendOk("系统已经为您转职为火炮手1转.");
            } else if (cm.getJob() == 501 && cm.getPlayer().getLevel() >= 30) {
                cm.getPlayer().changeJob(530);
                cm.teachSkill(5301000, 20, 20); //强击炮
                cm.teachSkill(5301001, 20, 20); //猴子炸药桶
                cm.teachSkill(5301002, 20, 20); //大炮加速
                cm.teachSkill(5301003, 20, 20); //猴子魔法
                cm.teachSkill(5300005, 20, 20); //精准炮
                cm.teachSkill(5300004, 15, 15); //致命炮火
                cm.teachSkill(5300008, 10, 10); //海盗训练
                cm.sendOk("系统已经为您转职为火炮手2转.");
            } else if (cm.getJob() == 530 && cm.getPlayer().getLevel() >= 60) {
                cm.getPlayer().changeJob(531);
                cm.teachSkill(5311000, 20, 20); //穿甲炮
                cm.teachSkill(5311001, 20, 20); //猴子超级炸弹
                cm.teachSkill(5311003, 15, 15); //炮击跳跃
                cm.teachSkill(5311002, 20, 20); //猴子冲击波
                cm.teachSkill(5311004, 10, 10); //随机橡木桶
                cm.teachSkill(5311005, 20, 20); //幸运骰子
                cm.teachSkill(5310006, 15, 15); //火炮强化
                cm.teachSkill(5310007, 20, 20); //生命强化
                cm.teachSkill(5310009, 15, 15); //反击炮
                cm.teachSkill(5310008, 20, 20); //猴子冲击波
                cm.sendOk("系统已经为您转职为火炮手3转.");
            } else if (cm.getJob() == 531 && cm.getPlayer().getLevel() >= 100) {
                cm.getPlayer().changeJob(532);
                cm.teachSkill(5321000, 30, 30); //加农火箭炮
                cm.teachSkill(5321001, 30, 30); //诺特勒斯战舰
                cm.teachSkill(5321003, 15, 15); //磁性船锚
                cm.teachSkill(5321004, 15, 15); //双胞胎猴子支援
                cm.teachSkill(5321005, 30, 30); //冒险岛勇士
                cm.teachSkill(5320007, 5, 5); //双幸运骰子
                cm.teachSkill(5320008, 10, 10); //超级猴子魔法
                cm.teachSkill(5320009, 30, 30); //极限燃烧弹
                cm.teachSkill(5321010, 30, 30); //海盗精神
                cm.teachSkill(5321012, 30, 30); //集中炮击
                cm.sendOk("系统已经为您转职为火炮手4转.");
            } else {
                cm.sendOk("你的当前职业条件不满足,无法为你提供转职服务!");
            }
            cm.dispose();
            break;
        case 1:
            if (cm.getJob() == 400 && cm.getPlayer().getLevel() >= 20) {
                cm.getPlayer().changeJob(430);
                cm.teachSkill(4001003, 10, 0); //隐身术
                cm.teachSkill(4001011, 10, 0); //闪跃
                cm.teachSkill(4000012, 10, 0); //侧移
                cm.teachSkill(4001013, 10, 0); //快刀斩
                cm.teachSkill(4300000, 20, 0); //精准双刀
                cm.teachSkill(4301003, 10, 0); //暗影轻功
                cm.teachSkill(4301004, 15, 0); //龙卷风
                cm.teachSkill(4311002, 30, 0); //流云斩
                cm.teachSkill(4311003, 20, 0); //双刀风暴
                cm.teachSkill(4311005, 20, 0); //命运
                cm.teachSkill(4310006, 10, 0); //物理训练
                cm.teachSkill(4311009, 10, 0); //快速双刀
                cm.teachSkill(4321002, 5, 0); //闪光弹
                cm.teachSkill(4321004, 20, 0); //悬浮地刺
                //cm.teachSkill(4320005, 20, 0); //武器用毒液
                cm.teachSkill(4321006, 20, 0); //暗影飞跃斩
                cm.teachSkill(4330009, 10, 0); //影子闪避
                cm.teachSkill(4311007, 10, 0); //暗影二段跳
                cm.teachSkill(4331000, 20, 0); //血雨腥风
                cm.teachSkill(4330001, 10, 0); //进阶隐身术
                cm.teachSkill(4331002, 30, 0); //镜像分身
                cm.teachSkill(4331003, 20, 0); //死亡猫头鹰
                cm.teachSkill(4331006, 20, 0); //地狱锁链
                cm.teachSkill(4330007, 10, 0); //生命偷取
                cm.teachSkill(4330008, 20, 0); //永恒黑暗
                cm.teachSkill(4341000, 30, 0); //冒险岛勇士
                //cm.teachSkill(4340001, 30, 0); //武器用毒液
                cm.teachSkill(4341002, 30, 0); //终极斩
                cm.teachSkill(4340010, 10, 0); //锋利
                cm.teachSkill(4341011, 30, 0); //突然袭击
                cm.teachSkill(4341004, 30, 0); //暴怒刀阵
                cm.teachSkill(4341006, 30, 0); //傀儡召唤
                cm.teachSkill(4341007, 10, 0); //荆棘
                cm.teachSkill(4341008, 5, 0); //勇士的意志
                cm.teachSkill(4341009, 30, 0); //幽灵一击
                //cm.teachSkill(4340012, 10, 0); //致命毒液
                cm.teachSkill(4340013, 10, 0); //双刀专家
                cm.sendOk("系统已经为您转职为暗影双刀1转.");
            } else if (cm.getJob() == 430 && cm.getPlayer().getLevel() >= 30) {
                cm.getPlayer().changeJob(431);
                cm.sendOk("系统已经为您转职为暗影双刀2转.");
            } else if (cm.getJob() == 431 && cm.getPlayer().getLevel() >= 55) {
                cm.getPlayer().changeJob(432);
                cm.sendOk("系统已经为您转职为暗影双刀3转.");
            } else if (cm.getJob() == 432 && cm.getPlayer().getLevel() >= 60) {
                cm.getPlayer().changeJob(433);
                cm.sendOk("系统已经为您转职为暗影双刀4转.");
            } else if (cm.getJob() == 433 && cm.getPlayer().getLevel() >= 100) {
                cm.getPlayer().changeJob(434);
                cm.sendOk("系统已经为您转职为暗影双刀5转.");
            } else {
                cm.sendOk("你不是飞侠(一转)职业 或你的等级没有达到20.(双刀一转请转飞侠)");
            }
            cm.dispose();
            break;
        case 2:
            if ((cm.getJob() == 0 || cm.getJob() == 2002) && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(2300);
                //cm.teachSkill(20021110, 1, 1); //精灵的祝福
                //cm.teachSkill(20020111, 1, 1); //优雅移动
                //cm.teachSkill(20020112, 1, 1); //王者资格
                cm.teachSkill(20021160, 1, 1);
                cm.teachSkill(23001000, 20, 0); //快速二连射
                cm.teachSkill(23000001, 15, 0); //潜力激发
                cm.teachSkill(23001002, 20, 0); //杂耍跳
                cm.teachSkill(23000003, 20, 0); //敏锐瞄准
                cm.teachSkill(23101000, 20, 0);
                cm.teachSkill(23101001, 20, 0);
                cm.teachSkill(23100004, 20, 0);
                cm.teachSkill(23110006, 20, 0);
                cm.teachSkill(23120011, 20, 0);
                cm.teachSkill(23001000, 20, 0);
                cm.teachSkill(23101002, 20, 0);
                cm.teachSkill(23101003, 20, 0);
                cm.teachSkill(23100005, 20, 0);
                cm.teachSkill(23100006, 20, 0);
                cm.teachSkill(23100008, 20, 0);
                cm.teachSkill(23101002, 20, 0);
                cm.teachSkill(23111000, 20, 0); //急袭双杀
                cm.teachSkill(23111001, 20, 0); //飞叶龙卷风
                cm.teachSkill(23111002, 20, 0); //独角兽之角
                cm.teachSkill(23111003, 20, 0); //狂风俯冲
                cm.teachSkill(23110006, 15, 0); //爆裂飞腿
                cm.teachSkill(23111004, 20, 0); //火焰咆哮
                cm.teachSkill(23111005, 20, 0); //水盾
                cm.teachSkill(23111008, 20, 0); //精灵骑士
                cm.teachSkill(23121000, 30, 0); //伊师塔之环
                cm.teachSkill(23121002, 20, 0); //传说之矛
                cm.teachSkill(23121003, 30, 0); //闪电刀刃
                cm.teachSkill(23120011, 20, 0); //旋转月瀑坠击
                cm.teachSkill(23121004, 30, 0); //古老意志
                cm.teachSkill(23120009, 30, 0); //双弩枪专家
                cm.teachSkill(23120010, 20, 0); //防御突破
                cm.teachSkill(23120012, 30, 0); //进阶终极攻击
                cm.teachSkill(23121005, 30, 0); //冒险岛勇士
                cm.teachSkill(23121052, 1, 1); //艾琳之怒    
                cm.sendOk("系统已经为您转职为双弩精灵1转.");
            } else if (cm.getJob() == 2300 && cm.getPlayer().getLevel() >= 30) {
                cm.getPlayer().changeJob(2310);
                cm.sendOk("系统已经为您转职为双弩精灵2转.");
            } else if (cm.getJob() == 2310 && cm.getPlayer().getLevel() >= 60) {
                cm.getPlayer().changeJob(2311);
                cm.sendOk("系统已经为您转职为双弩精灵3转.");
            } else if (cm.getJob() == 2311 && cm.getPlayer().getLevel() >= 100) {
                cm.getPlayer().changeJob(2312);
                cm.sendOk("系统已经为您转职为双弩精灵4转.");
            } else {
                cm.sendOk("你的当前职业条件不满足,无法为你提供转职服务!");
            }
            cm.dispose();
            break;
        case 3:
            if ((cm.getJob() == 0 || cm.getJob() == 3001) && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(3110);
                cm.teachSkill(80000001, 1, 1); //恶魔之怒
                cm.teachSkill(30010110, 1, 1); //恶魔跳跃
                cm.teachSkill(30011109, 1, 1); //恶魔之翼
                cm.teachSkill(30010111, 1, 1); //死亡诅咒
                cm.teachSkill(30010112, 1, 1); //恶魔之怒
                cm.teachSkill(30010185, 1, 1); //恶魔之血
                cm.teachSkill(31000004, 10, 1); //恶魔血月斩1次强化
                cm.teachSkill(31001000, 20, 1); //恶魔血月斩1次强化
                cm.teachSkill(31001001, 20, 1); //恶魔血月斩1次强化
                cm.teachSkill(31000002, 20, 1); //恶魔血月斩1次强化
                cm.teachSkill(31000003, 20, 1); //恶魔血月斩1次强化
                cm.teachSkill(31100007, 1, 1); //恶魔血月斩1次强化
                cm.teachSkill(31101000, 20, 20); //灵魂吞噬	
                cm.teachSkill(31101001, 20, 20); //黑暗猛攻
                cm.teachSkill(31101002, 15, 15); //恶魔追踪
                cm.teachSkill(31101003, 20, 20); //
                cm.teachSkill(31100004, 20, 20); //
                cm.teachSkill(31101005, 20, 20); //
                cm.teachSkill(31100006, 20, 20); //
                cm.teachSkill(31100005, 20, 20); //
                cm.sendOk("系统已经为您转职为恶魔猎手1转和2转.");
            } else if (cm.getJob() == 3110 && cm.getPlayer().getLevel() >= 60) {
                cm.getPlayer().changeJob(3111);
                cm.teachSkill(31110010, 1, 1); //恶魔血月斩2次强化
                cm.teachSkill(31111000, 20, 20); //黑暗审判
                cm.teachSkill(31111001, 20, 20); //死亡牵引
                cm.teachSkill(31111003, 20, 20); //血腥渡鸦
                cm.teachSkill(31111005, 20, 20); //恶魔呼吸
                cm.teachSkill(31111004, 20, 20); //黑暗忍耐
                cm.teachSkill(31110006, 15, 15); //邪恶拷问
                cm.teachSkill(31110007, 20, 20); //精神集中
                cm.teachSkill(31110008, 15, 15); //精气防护
                cm.teachSkill(31110009, 5, 5); //极限精气吸收
                cm.sendOk("系统已经为您转职为恶魔猎手3转.");
            } else if (cm.getJob() == 3111 && cm.getPlayer().getLevel() >= 100) {
                cm.getPlayer().changeJob(3112);
                cm.teachSkill(31120011, 1, 1); //恶魔血月斩最终强化
                cm.teachSkill(31121000, 30, 30); //恶魔爆炸
                cm.teachSkill(31121001, 30, 30); //恶魔冲击波
                cm.teachSkill(31121003, 20, 20); //鬼泣
                cm.teachSkill(31121006, 20, 20); //黑暗束缚
                cm.teachSkill(31121005, 30, 30); //黑暗变形
                cm.teachSkill(31121007, 15, 15); //无限精气
                cm.teachSkill(31121002, 10, 10); //吸血鬼之触
                cm.teachSkill(31121004, 30, 30); //冒险岛勇士
                cm.teachSkill(31120008, 30, 30); //进阶精准武器
                cm.teachSkill(31120009, 30, 30); //皮肤硬化
                cm.sendOk("系统已经为您转职为恶魔猎手4转.");
            } else {
                cm.sendOk("你的当前职业条件不满足,无法为你提供转职服务!");
            }
            cm.dispose();
            break;
        case 4:
            if ((cm.getJob() == 0 || cm.getJob() == 5000) && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(5100);
                equip(1098000);
                cm.teachSkill(51000000, 10, 10); //增加HP
                cm.teachSkill(51000001, 15, 15); //灵魂盾
                cm.teachSkill(51000002, 10, 10); //灵魂敏捷
                cm.teachSkill(51001003, 10, 10); //灵魂跳跃
                cm.teachSkill(51001004, 20, 20); //灵魂之刃
                cm.sendOk("系统已经为您转职为米哈尔1转.");
            } else if (cm.getJob() == 5100 && cm.getPlayer().getLevel() >= 30) {
                cm.getPlayer().changeJob(5110);
                equip(1098001);
                cm.teachSkill(51100000, 10, 10); //物理训练
                cm.teachSkill(51100001, 20, 20); //精准剑
                cm.teachSkill(51100002, 20, 20); //终结攻击
                cm.teachSkill(51101003, 20, 20); //快速剑
                cm.teachSkill(51101004, 20, 20); //愤怒
                cm.teachSkill(51101005, 20, 20); //灵魂突刺
                cm.teachSkill(51101006, 20, 20); //闪耀追逐
                cm.sendOk("系统已经为您转职为米哈尔2转.");
            } else if (cm.getJob() == 5110 && cm.getPlayer().getLevel() >= 60) {
                cm.getPlayer().changeJob(5111);
                equip(1098002);
                cm.teachSkill(51110000, 30, 30); //自我恢复
                cm.teachSkill(51110001, 20, 20); //专注
                cm.teachSkill(51110002, 20, 20); //灵魂突击
                cm.teachSkill(51111003, 10, 10); //闪耀之光
                cm.teachSkill(51111004, 20, 20); //灵魂恢复术
                cm.teachSkill(51111005, 20, 20); //魔击无效
                cm.teachSkill(51111006, 20, 20); //灵魂挥剑
                cm.teachSkill(51111007, 20, 20); //闪耀爆破
                cm.sendOk("系统已经为您转职为米哈尔3转.");
            } else if (cm.getJob() == 5111 && cm.getPlayer().getLevel() >= 100) {
                cm.getPlayer().changeJob(5112);
                equip(1098003);
                cm.teachSkill(51120000, 30, 30); //战斗精通
                cm.teachSkill(51120001, 30, 30); //进阶精准剑
                cm.teachSkill(51120002, 30, 30); //进阶终结攻击
                cm.teachSkill(51120003, 30, 30); //进阶灵魂盾
                cm.teachSkill(51121004, 30, 30); //稳如泰山
                cm.teachSkill(51121005, 30, 30); //冒险岛勇士
                cm.teachSkill(51121006, 30, 30); //灵魂之怒
                cm.teachSkill(51121007, 30, 30); //灵魂抨击
                cm.teachSkill(51121008, 30, 30); //闪耀爆炸
                cm.sendOk("系统已经为您转职为米哈尔4转.");
            } else {
                cm.sendOk("你的当前职业条件不满足,无法为你提供转职服务!");
            }
            cm.dispose();
            break;
        case 5:
            if ((cm.getJob() == 0 || cm.getJob() == 2003) && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(2400);
                cm.teachSkill(24000003, 10, 10); //快速逃避
                cm.teachSkill(24001000, 20, 20); //二连刺
                cm.teachSkill(24001001, 20, 20); //幻影印技天赋
                cm.teachSkill(24001002, 15, 15); //迅捷幻影
                cm.sendOk("系统已经为您转职为幻影神偷1转.");
            } else if (cm.getJob() == 2400 && cm.getPlayer().getLevel() >= 30) {
                cm.getPlayer().changeJob(2410);
                cm.teachSkill(24100003, 10, 10); //卡片雪舞
                cm.teachSkill(24100004, 20, 20); //精准手杖
                cm.teachSkill(24100006, 10, 10); //超级幸运星
                cm.teachSkill(24101000, 20, 20); //命运召唤
                cm.teachSkill(24101001, 20, 20); //幻影印技天赋 Ⅱ
                cm.teachSkill(24101002, 20, 20); //和风卡浪
                cm.teachSkill(24101005, 20, 20); //快速手杖
                cm.sendOk("系统已经为您转职为幻影神偷2转.");
            } else if (cm.getJob() == 2410 && cm.getPlayer().getLevel() >= 60) {
                cm.getPlayer().changeJob(2411);
                cm.teachSkill(24110004, 20, 20); //电光回避
                cm.teachSkill(24110007, 20, 20); //敏锐直觉
                cm.teachSkill(24111000, 20, 20); //卡牌斩碎
                cm.teachSkill(24111001, 20, 20); //幻影印技天赋 Ⅲ
                cm.teachSkill(24111002, 20, 0); //神秘的运气 
                cm.teachSkill(24111003, 20, 20); //幸运保护
                cm.teachSkill(24111005, 20, 20); //月光祝福
                cm.teachSkill(24111006, 20, 20); //幻影突击
                cm.teachSkill(24111008, 20, 20); //幻影突击
                cm.sendOk("系统已经为您转职为幻影神偷3转.");
            } else if (cm.getJob() == 2411 && cm.getPlayer().getLevel() >= 100) {
                cm.getPlayer().changeJob(2412);
                cm.teachSkill(24120002, 10, 10); //黑色秘卡
                cm.teachSkill(24120006, 30, 30); //手杖专家
                cm.teachSkill(24121000, 30, 30); //蓝光连击
                cm.teachSkill(24121001, 30, 30); //幻影印技天赋 Ⅳ
                cm.teachSkill(24121003, 20, 20); //暮光祝福
                cm.teachSkill(24121004, 30, 30); //圣歌祈祷
                cm.teachSkill(24121005, 30, 30); //卡片风暴
                cm.teachSkill(24121007, 10, 0); //灵魂偷取
                cm.teachSkill(24121008, 30, 30); //冒险岛勇士
                cm.teachSkill(24121009, 10, 10); //勇士的意志
                cm.teachSkill(24121010, 20, 20); //暮光祝福
                cm.teachSkill(24121052, 1, 1); //玫瑰卡片终结
                cm.sendOk("系统已经为您转职为幻影神偷4转.");
            } else {
                cm.sendOk("你的当前职业条件不满足,无法为你提供转职服务!");
            }
            cm.dispose();
            break;
        case 6:
            if ((cm.getJob() == 0 || cm.getJob() == 2004) && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(2700);
                cm.teachSkill(27001100, 20, 20); //耀眼光球
                cm.teachSkill(27001201, 20, 20); //黑暗降临
                cm.teachSkill(27001002, 10, 10); //光束瞬移
                cm.teachSkill(27000003, 10, 10); //普通魔法防护
                cm.teachSkill(27001004, 20, 20); //魔力延伸
                cm.teachSkill(27001005, 1, 1); //魔法偷窃
                cm.teachSkill(27000106, 10, 10); //强化光之魔法
                cm.teachSkill(27000207, 10, 10); //强化暗之魔法
                cm.sendOk("系统已经为您转职为夜光法师1转.");
            } else if (cm.getJob() == 2700 && cm.getPlayer().getLevel() >= 30) {
                cm.getPlayer().changeJob(2710);
                cm.teachSkill(27101100, 20, 20); //仙女发射
                cm.teachSkill(27101101, 20, 20); //闪爆光柱
                cm.teachSkill(27101202, 20, 20); //虚空重压
                cm.teachSkill(27100003, 20, 20); //黑暗祝福
                cm.teachSkill(27101004, 20, 20); //魔法狂暴
                cm.teachSkill(27100005, 20, 20); //咒语精通
                cm.teachSkill(27100006, 20, 20); //智慧激发
                cm.sendOk("系统已经为您转职为夜光法师2转.");
            } else if (cm.getJob() == 2710 && cm.getPlayer().getLevel() >= 60) {
                cm.getPlayer().changeJob(2711);
                cm.teachSkill(27111100, 20, 20); //超级光谱
                cm.teachSkill(27111101, 20, 20); //闪耀救赎
                cm.teachSkill(27111202, 20, 20); //暗锁冲击
                cm.teachSkill(27111303, 20, 20); //黑色死亡
                cm.teachSkill(27111004, 20, 20); //抵抗之魔法盾
                cm.teachSkill(27111005, 20, 20); //光影防护
                cm.teachSkill(27111006, 20, 20); //光照精神力
                cm.teachSkill(27110007, 20, 20); //生命潮汐
                cm.sendOk("系统已经为您转职为夜光法师3转.");
            } else if (cm.getJob() == 2711 && cm.getPlayer().getLevel() >= 100) {
                cm.getPlayer().changeJob(2712);
                cm.teachSkill(27121100, 30, 30); //闪电反击
                cm.teachSkill(27121201, 30, 30); //晨星坠落
                cm.teachSkill(27121202, 30, 30); //启示录
                cm.teachSkill(27121303, 30, 30); //绝对死亡
                cm.teachSkill(27121304, 5, 5); //末日审判
                cm.teachSkill(27121005, 30, 30); //黑暗高潮
                cm.teachSkill(27121006, 30, 30); //黑暗巫术
                cm.teachSkill(27120007, 30, 30); //魔法精通
                cm.teachSkill(27120008, 5, 5); //暗光精通
                cm.teachSkill(27121009, 30, 30); //冒险岛勇士
                cm.teachSkill(27121010, 20, 20); //勇士的意志
                cm.teachSkill(27120211, 30, 30); //晨星坠落
                cm.teachSkill(27121052, 1, 1); //末日审判
                cm.sendOk("系统已经为您转职为夜光法师4转.");
            } else {
                cm.sendOk("你的当前职业条件不满足,无法为你提供转职服务!");
            }
            cm.dispose();
            break;
        case 7:
            if ((cm.getJob() == 0 || cm.getJob() == 3000) && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(3200);
                cm.teachSkill(32001000, 20, 20); //三段冲击
                cm.teachSkill(32001001, 10, 10); //惩戒
                cm.teachSkill(32100006, 20, 20);
                cm.teachSkill(32001002, 15, 15); //快速移动
                cm.teachSkill(32001003, 20, 20); //黑暗灵气
                cm.teachSkill(32101000, 20, 20); //四段冲击
                cm.teachSkill(32101001, 20, 20); //黑暗锁链
                cm.teachSkill(32111012, 20, 20); //蓝色灵气
                cm.teachSkill(32101003, 20, 20); //黄色灵气
                cm.teachSkill(32101004, 20, 20); //伤害吸收
                cm.teachSkill(32101005, 20, 20); //快速长杖
                cm.teachSkill(32100007, 10, 10); //智慧激发
                cm.teachSkill(32110001, 20, 20); //战斗精通
                cm.teachSkill(32111002, 20, 20); //死亡冲击
                cm.teachSkill(32111003, 20, 20); //黑暗闪电
                cm.teachSkill(32111004, 10, 10); //转化
                cm.teachSkill(32111005, 20, 20); //霸体
                cm.teachSkill(32111006, 20, 20); //重生
                cm.teachSkill(32111010, 10, 10); //快速移动精通
                cm.teachSkill(32111011, 20, 20); //进阶黑暗连锁
                cm.teachSkill(32111014, 10, 10); //稳如泰山
                cm.teachSkill(32110000, 10, 10); //进阶蓝色灵气
                cm.teachSkill(32120000, 10, 10); //进阶黑暗灵气
                cm.teachSkill(32120001, 10, 10); //进阶黄色灵气
                cm.teachSkill(32121002, 30, 30); //致命冲击
                cm.teachSkill(32121003, 30, 30); //飓风
                cm.teachSkill(32121004, 30, 30); //黑暗创世
                cm.teachSkill(32121006, 30, 0); //避难所
                cm.teachSkill(32121007, 30, 30); //冒险岛勇士
                //cm.teachSkill(32121008,5,5);//勇士的意志
                cm.teachSkill(32120009, 30, 0); //活力激化
                cm.sendOk("系统已经为您转职为幻灵斗师1转.");
            } else if (cm.getJob() == 3200 && cm.getPlayer().getLevel() >= 30) {
                cm.getPlayer().changeJob(3210);
                cm.sendOk("系统已经为您转职为幻灵斗师2转.");
            } else if (cm.getJob() == 3210 && cm.getPlayer().getLevel() >= 60) {
                cm.getPlayer().changeJob(3211);
                cm.sendOk("系统已经为您转职为幻灵斗师3转.");
            } else if (cm.getJob() == 3211 && cm.getPlayer().getLevel() >= 100) {
                cm.getPlayer().changeJob(3212);
                cm.sendOk("系统已经为您转职为幻灵斗师4转.");
            } else {
                cm.sendOk("你的当前职业条件不满足,无法为你提供转职服务!");
            }
            cm.dispose();
            break;
        case 8:
            if ((cm.getJob() == 0 || cm.getJob() == 3000) && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(3300);
                cm.teachSkill(80001000, 1, 1);
                cm.teachSkill(33001000, 20, 20); //连环三箭
                cm.teachSkill(33001001, 15, 15); //美洲豹骑士
                cm.teachSkill(33001002, 10, 10); //豹二阶跳
				cm.teachSkill(33000005, 20, 20); //自动射击装置
                cm.sendOk("系统已经为您转职为弩豹游侠1转.");
            } else if (cm.getJob() == 3300 && cm.getPlayer().getLevel() >= 30) {
                cm.getPlayer().changeJob(3310);
                cm.teachSkill(33100000, 10, 10); //精准弩
                cm.teachSkill(33101001, 20, 20); //炸裂箭
                cm.teachSkill(33101002, 15, 15); //美洲豹怒吼
                cm.teachSkill(33101003, 5, 5); //无形箭：弩
				cm.teachSkill(33101005, 10, 10); //呼啸
                cm.teachSkill(33100010, 10, 10); //物理训练
                cm.teachSkill(33100009, 20, 20); //终极弓弩
				cm.teachSkill(33101012, 10, 10); //快速弩
                cm.sendOk("系统已经为您转职为弩豹游侠2转.");
            } else if (cm.getJob() == 3310 && cm.getPlayer().getLevel() >= 60) {
                cm.getPlayer().changeJob(3311);
				cm.teachSkill(33110000, 15, 15); //骑宠精通
                cm.teachSkill(33111001, 20, 20); //狂野射击
                cm.teachSkill(33111002, 20, 20); //十字攻击
                cm.teachSkill(33111006, 20, 20); //利爪狂风
                cm.teachSkill(33111007, 30, 30); //暴走形态
                cm.teachSkill(33110008, 15, 15); //疾风
				cm.teachSkill(33111009, 20, 20); //集中精力
                cm.sendOk("系统已经为您转职为弩豹游侠3转.");
            } else if (cm.getJob() == 3311 && cm.getPlayer().getLevel() >= 100) {
                cm.getPlayer().changeJob(3312);
                cm.teachSkill(33121009, 30, 30); //奥义箭乱舞
				cm.teachSkill(33121002, 30, 30); //音速震波
                cm.teachSkill(33120000, 30, 30); //神弩手
                cm.teachSkill(33121004, 30, 30); //火眼晶晶
                cm.teachSkill(33121007, 30, 30); //冒险岛勇士
                cm.teachSkill(33121008, 5, 5); //勇士的意志
                cm.teachSkill(33120010, 10, 10); //野性本能
                cm.teachSkill(33120011, 10, 10); //进阶终极攻击
				cm.teachSkill(33121012, 30, 30); //辅助打猎单元
				cm.teachSkill(33121013, 20, 20); //弹仓扩展
                cm.sendOk("系统已经为您转职为弩豹游侠4转.");
            } else {
                cm.sendOk("你的当前职业条件不满足,无法为你提供转职服务!");
            }
            cm.dispose();
            break;
        case 9:
            if ((cm.getJob() == 0 || cm.getJob() == 3000) && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(3500);
                cm.teachSkill(35001001, 20, 20); //火焰喷射器
                cm.teachSkill(35001002, 10, 10); //金属机甲
                cm.teachSkill(35001003, 20, 20); //钻臂冲击
                cm.teachSkill(35001004, 15, 15); //机枪扫射
                cm.teachSkill(35100000, 20, 20); //机械精通
                cm.teachSkill(35101003, 20, 20); //原子锤
                cm.teachSkill(35101004, 20, 20); //火箭推进器
                cm.teachSkill(35101005, 10, 10); //传送门
                cm.teachSkill(35101006, 20, 20); //机械加速
                cm.teachSkill(35101007, 20, 20); //完美机甲
                cm.teachSkill(35100008, 20, 20); //精准重武器
                cm.teachSkill(35100011, 5, 5); //物理训练
                //cm.teachSkill(35101009, 20, 20); //强化火焰喷射器
                //cm.teachSkill(35101010, 15, 15); //强化机枪扫射
                cm.teachSkill(35111001, 10, 10); //人造卫星
                cm.teachSkill(35111002, 10, 10); //磁场
                cm.teachSkill(35111004, 20, 20); //金属机甲：重机枪
                cm.teachSkill(35111005, 15, 15); //加速器
                cm.teachSkill(35111011, 20, 20); //治疗机器人
                cm.teachSkill(35111013, 20, 20); //幸运骰子
                cm.teachSkill(35120014, 5, 5); //幸运骰子
                cm.teachSkill(35110014, 20, 20); //精准机械拳
                cm.teachSkill(35111015, 20, 20); //火箭拳
                cm.teachSkill(35111016, 15, 15); //状态调试
                cm.teachSkill(35120000, 30, 30); //终极机甲
                cm.teachSkill(35120001, 15, 15); //机器人精通
                cm.teachSkill(35121003, 30, 30); //战争机器：泰坦
                cm.teachSkill(35121005, 30, 30); //金属机甲：导弹战车
                cm.teachSkill(35121006, 25, 25); //卫星防护
                cm.teachSkill(35121007, 30, 30); //冒险岛勇士
                cm.teachSkill(35121008, 5, 5); //勇士的意志
                cm.teachSkill(35121009, 30, 30); //机器人工厂：RM1
                cm.teachSkill(35121010, 20, 20); //放大器
                cm.teachSkill(35121012, 30, 30); //激光爆破
                cm.teachSkill(35121013, 20, 20); //金属机甲：重机枪
                cm.sendOk("系统已经为您转职为机械师1转.");
            } else if (cm.getJob() == 3500 && cm.getPlayer().getLevel() >= 30) {
                cm.getPlayer().changeJob(3510);
                cm.sendOk("系统已经为您转职为机械师2转.");
            } else if (cm.getJob() == 3510 && cm.getPlayer().getLevel() >= 60) {
                cm.getPlayer().changeJob(3511);
                cm.sendOk("系统已经为您转职为机械师3转.");
            } else if (cm.getJob() == 3511 && cm.getPlayer().getLevel() >= 100) {
                cm.getPlayer().changeJob(3512);
                cm.sendOk("系统已经为您转职为机械师4转.");
            } else {
                cm.sendOk("你的当前职业条件不满足,无法为你提供转职服务!");
            }
            cm.dispose();
            break;
        case 10:
            cm.sendOk("该职业暂时无法转职!");
            /* if ((cm.getJob() == 0 || cm.getJob() == 2000) && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(2100);
				cm.teachSkill(21000004, 10, 10); //斗气爆裂
				cm.teachSkill(21000002, 20, 20); //双重重击
				cm.teachSkill(21000000, 10, 10); //矛连击强化
				cm.teachSkill(21001001, 5, 5); //战斗步伐
                cm.teachSkill(21001003, 20, 20); //快速矛
                cm.sendOk("系统已经为您转职为战神1转.");
            } else if (cm.getJob() == 2100 && cm.getPlayer().getLevel() >= 30) {
                cm.getPlayer().changeJob(2110);
				cm.teachSkill(21100001, 20, 20); //三重重击
				cm.teachSkill(21101011, 20, 20); //战神突进
				cm.teachSkill(21100007, 20, 20); //幻影狼牙
				cm.teachSkill(21100000, 20, 20); //精准矛
                cm.teachSkill(21100008, 10, 10); //物理训练
                cm.teachSkill(21100010, 20, 20); //终极矛
				cm.teachSkill(21101003, 10, 10); //抗压
                cm.teachSkill(21101006, 20, 20); //冰雪矛
				cm.teachSkill(21100005, 20, 20); //连环吸血
                cm.sendOk("系统已经为您转职为战神2转.");
            } else if (cm.getJob() == 2110 && cm.getPlayer().getLevel() >= 60) {
                cm.getPlayer().changeJob(2111);
				cm.teachSkill(21110011, 20, 20); //战神之审判
				cm.teachSkill(21111013, 20, 20); //终极投掷
				cm.teachSkill(21111014, 20, 20); //旋风
				cm.teachSkill(21110002, 20, 20); //全力挥击
				cm.teachSkill(21110000, 20, 20); //进阶矛连击强化
				cm.teachSkill(21110010, 20, 20); //分裂攻击
				cm.teachSkill(21111012, 10, 10); //摩诃祝福
				cm.teachSkill(21111001, 20, 20); //威势
				cm.teachSkill(21111009, 20, 20); //斗气重生
                cm.sendOk("系统已经为您转职为战神3转.");
            } else if (cm.getJob() == 2111 && cm.getPlayer().getLevel() >= 100) {
                cm.getPlayer().changeJob(2112);
				cm.teachSkill(21120001, 30, 30); //攻击策略
                cm.teachSkill(21120002, 30, 30); //战神之舞
				cm.teachSkill(21120014, 30, 30); //BOSS斗气重生
				cm.teachSkill(21120011, 10, 10); //迅捷移动
				cm.teachSkill(21120012, 10, 10); //进阶终极攻击
				cm.teachSkill(21121000, 30, 30); //冒险岛勇士
				cm.teachSkill(21121003, 30, 30); //战神的意志
				cm.teachSkill(21120004, 30, 30); //防守策略
				cm.teachSkill(21121013, 30, 30); //巨熊咆哮
                cm.teachSkill(21120006, 20, 20); //钻石星辰
                cm.teachSkill(21120007, 30, 30); //战神之盾
                cm.teachSkill(21121008, 5, 5); //勇士的意志
                cm.sendOk("系统已经为您转职为战神4转.");
            } else {
                cm.sendOk("你的当前职业条件不满足,无法为你提供转职服务!");
            }
            cm.dispose(); */
            break;
        case 11:
            if ((cm.getJob() == 0 || cm.getJob() == 2001) && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(2200);
                cm.teachSkill(22000000, 20, 20); //龙魂
                cm.teachSkill(22001001, 20, 20); //魔法导弹
                cm.sendOk("系统已经为您转职为龙神1转.");
            } else if (cm.getJob() == 2200 && cm.getPlayer().getLevel() >= 20) {
                cm.getPlayer().changeJob(2210);
                cm.teachSkill(22101000, 20, 20); //火焰环
                cm.teachSkill(22101001, 20, 20); //快速移动
                cm.sendOk("系统已经为您转职为龙神2转.");
            } else if (cm.getJob() == 2210 && cm.getPlayer().getLevel() >= 30) {
                cm.getPlayer().changeJob(2211);
                cm.teachSkill(22111000, 20, 20); //闪电箭
                cm.teachSkill(22111001, 20, 20); //魔法盾
                cm.sendOk("系统已经为您转职为龙神3转.");
            } else if (cm.getJob() == 2211 && cm.getPlayer().getLevel() >= 40) {
                cm.getPlayer().changeJob(2212);
                cm.teachSkill(22121000, 20, 20); //冰点寒气
                cm.teachSkill(22121001, 10, 10); //自然力重置
                cm.teachSkill(22120002, 10, 10); //咒语精通
                cm.teachSkill(22120001, 10, 10); //智慧激发
                cm.sendOk("系统已经为您转职为龙神4转.");
            } else if (cm.getJob() == 2212 && cm.getPlayer().getLevel() >= 60) {
                cm.getPlayer().changeJob(2213);
                cm.teachSkill(22131000, 20, 20); //魔力闪爆
                cm.teachSkill(22131001, 10, 10); //魔法屏障
                cm.teachSkill(22131002, 10, 10); //缓速术
                cm.sendOk("系统已经为您转职为龙神5转.");
            } else if (cm.getJob() == 2213 && cm.getPlayer().getLevel() >= 80) {
                cm.getPlayer().changeJob(2214);
                cm.teachSkill(22140000, 15, 15); //魔法爆击
                cm.teachSkill(22141001, 20, 20); //龙推力
                cm.teachSkill(22141002, 20, 20); //魔法狂暴
                cm.teachSkill(22141004, 10, 10); //飞龙传动
                cm.sendOk("系统已经为您转职为龙神6转.");
            } else if (cm.getJob() == 2214 && cm.getPlayer().getLevel() >= 100) {
                cm.getPlayer().changeJob(2215);
                cm.teachSkill(22151001, 20, 20); //火焰喷射
                cm.teachSkill(22151002, 10, 10); //魔翼斩杀
                cm.teachSkill(22151003, 10, 10); //抗魔领域
                cm.teachSkill(22150000, 15, 15); //魔力激化
                cm.teachSkill(22150004, 10, 10); //飞龙闪
                cm.sendOk("系统已经为您转职为龙神7转.");
            } else if (cm.getJob() == 2215 && cm.getPlayer().getLevel() >= 120) {
                cm.getPlayer().changeJob(2216);
                cm.teachSkill(22160000, 5, 5); //龙的愤怒
                cm.teachSkill(22161001, 20, 20); //地震
                cm.teachSkill(22161002, 10, 10); //鬼刻符
                cm.teachSkill(22161003, 5, 5); //极光恢复
                cm.teachSkill(22161004, 20, 20); //玛瑙的保佑
                cm.sendOk("系统已经为您转职为龙神8转.");
            } else if (cm.getJob() == 2216 && cm.getPlayer().getLevel() >= 140) {
                cm.getPlayer().changeJob(2217);
                cm.teachSkill(22171000, 30, 30); //冒险岛勇士
                cm.teachSkill(22170001, 30, 30); //魔法精通
                cm.teachSkill(22171002, 30, 30); //魔龙分身
                cm.teachSkill(22171003, 30, 30); //火焰轮
                cm.teachSkill(22171004, 5, 5); //勇士的意志
                cm.sendOk("系统已经为您转职为龙神9转.");
            } else if (cm.getJob() == 2217 && cm.getPlayer().getLevel() >= 160) {
                cm.getPlayer().changeJob(2218);
                cm.teachSkill(22181000, 25, 25); //玛瑙的祝福
                cm.teachSkill(22181001, 30, 30); //熊熊烈火
                cm.teachSkill(22181002, 30, 30); //黑暗迷雾
                cm.teachSkill(22181003, 20, 20); //灵魂之石
                cm.teachSkill(22181004, 20, 20); //玛瑙的意志
                //cm.teachSkill(22161005, 10, 10); //快速移动精通
                cm.sendOk("系统已经为您转职为龙神10转.");
            } else {
                cm.sendOk("你的当前职业条件不满足,无法为你提供转职服务!");
            }
            cm.dispose();
            break;
        case 12:
            cm.sendSimple("骑士团职业转职等级分别为(10,30,60,100),你需要转职成?\r\n#L13#魂骑士转职(1~4转 112#r[新]#k)#l\r\n#L14#炎术士转职(1~3转)#l\r\n#L15#风灵使者转职(1~4转 112#r[新]#k)#l\r\n#L16#夜行者转职(1~3转)#l\r\n#L17#奇袭者转职(1~4转 111#r[新]#k)#l");
            break;
        case 13:
            cm.sendSimple("冒险家职业转职等级分别为(10,30,60,100),你需要转职成?\r\n#L18#战士转职(1~4转)#l\r\n#L19#魔法师转职(1~4转)#l\r\n#L20#弓箭手转职(1~4转)#l\r\n#L21#飞侠转职(1~4转)#l\r\n#L22#海盗转职(1~4转)#l");
            break;
        case 100:
            if ((cm.getJob() == 0 || cm.getJob() == 6000) && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(6100);
                equip(1352500);
                cm.teachSkill(60001218, 1, 1); //垂直连接
                cm.teachSkill(60001216, 1, 1); //模式转换：防御模式
                cm.teachSkill(60001217, 10, 10); //模式转换：攻击模式
                cm.teachSkill(27000003, 10, 10); //普通魔法防护
                cm.teachSkill(61001000, 20, 20); //飞龙斩
                cm.teachSkill(61001101, 20, 20); //烈火箭
                cm.teachSkill(61001002, 15, 15); //双重跳跃
                cm.teachSkill(61000003, 10, 10); //皮肤保护
                cm.sendOk("系统已经为您转职为狂龙战士1转.");
            } else if (cm.getJob() == 6100 && cm.getPlayer().getLevel() >= 30) {
                cm.getPlayer().changeJob(6110);
                equip(1352501);
                cm.teachSkill(61101100, 20, 20); //冲击波
                cm.teachSkill(61101101, 20, 20); //穿刺冲击
                cm.teachSkill(61101002, 20, 20); //剑刃之壁
                cm.teachSkill(61101004, 0, 0); //熊熊烈火升级
                cm.teachSkill(61100005, 20, 20); //防御模式1次强化
                cm.teachSkill(61100006, 20, 20); //精准剑
                cm.teachSkill(61100007, 20, 20); //内心火焰
                cm.teachSkill(61100008, 20, 20); //攻击模式1次强化
                cm.teachSkill(61100009, 20, 20); //飞龙斩1次强化
                cm.sendOk("系统已经为您转职为狂龙战士转.");
            } else if (cm.getJob() == 6110 && cm.getPlayer().getLevel() >= 60) {
                cm.getPlayer().changeJob(6111);
                equip(1352502);
                cm.teachSkill(61111100, 20, 20); //扇击
                cm.teachSkill(61111101, 20, 20); //牵引锁链
                cm.teachSkill(61111002, 15, 15); //石化
                cm.teachSkill(61111003, 20, 20); //重拾力量
                cm.teachSkill(61111004, 20, 20); //催化
                cm.teachSkill(61110005, 1, 1); //防御模式2次强化
                cm.teachSkill(61110006, 5, 5); //自我恢复
                cm.teachSkill(61110007, 10, 10); //进阶内心火焰
                cm.teachSkill(61111008, 10, 10); //终极变形
                cm.teachSkill(61110010, 1, 1); //攻击模式2次强化
                cm.teachSkill(61110015, 2, 2); //飞龙斩 2次强化
                cm.sendOk("系统已经为您转职为狂龙战士3转.");
            } else if (cm.getJob() == 6111 && cm.getPlayer().getLevel() >= 100) {
                cm.getPlayer().changeJob(6112);
                equip(1352503);
                cm.teachSkill(61120020, 2, 2); //飞龙斩 3次强化
                cm.teachSkill(61121100, 30, 30); //怒雷屠龙斩
                cm.teachSkill(61121102, 30, 30); //天空剑影
                cm.teachSkill(61121104, 30, 30); //剑气突袭
                cm.teachSkill(61121105, 30, 30); //恶魔之息
                cm.teachSkill(61120007, 10, 10); //进阶剑刃之壁
                cm.teachSkill(61120008, 10, 10); //终极变形
                cm.teachSkill(61121009, 10, 10); //强健护甲
                cm.teachSkill(61120010, 1, 1); //防御模式3次强化
                cm.teachSkill(61120011, 10, 10); //无敌之勇
                cm.teachSkill(61120012, 10, 10); //进阶精准剑
                cm.teachSkill(61120013, 1, 1); //攻击模式3次强化
                cm.teachSkill(61121014, 30, 30); //诺巴的勇士
                cm.teachSkill(61121052, 1, 1); //日珥
                cm.sendOk("系统已经为您转职为狂龙战士4转.");
            } else {
                cm.sendOk("你的当前职业条件不满足,无法为你提供转职服务!");
            }
            cm.dispose();
            break;
        case 110:
            if ((cm.getJob() == 0 || cm.getJob() == 6001) && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(6500);
                equip(1352601);
                cm.teachSkill(60011218, 1, 1); //魔法裂隙
                cm.teachSkill(60011221, 1, 1); //协调
                cm.teachSkill(60011222, 1, 1); //装扮
                cm.teachSkill(60011216, 1, 1); //释世书
                cm.teachSkill(65001100, 20, 20); //泡沫之星
                cm.teachSkill(65001001, 20, 20); //魔法转移
                cm.teachSkill(65001002, 15, 15); //火眼金睛
                cm.teachSkill(65000003, 20, 20); //亲和Ⅰ
                cm.sendOk("系统已经为您转职为爆莉萌天使1转.");
            } else if (cm.getJob() == 6500 && cm.getPlayer().getLevel() >= 30) {
                cm.getPlayer().changeJob(6510);
                equip(1352602);
                cm.teachSkill(65101100, 20, 20); //穿刺爆炸
                cm.teachSkill(65101001, 20, 20); //粉粉旋风
                cm.teachSkill(65101002, 20, 20); //力量转移
                cm.teachSkill(65100003, 10, 10); //精准灵魂手铳
                cm.teachSkill(65100004, 5, 5); //内心之火
                cm.teachSkill(65100005, 20, 20); //亲和Ⅱ
                cm.sendOk("系统已经为您转职为爆莉萌天使转.");
            } else if (cm.getJob() == 6510 && cm.getPlayer().getLevel() >= 60) {
                cm.getPlayer().changeJob(6511);
                equip(1352603);
                cm.teachSkill(65111100, 20, 20); //灵魂吸取
                cm.teachSkill(65111101, 20, 20); //坠落群星
                cm.teachSkill(65111002, 20, 20); //力量召唤
                cm.teachSkill(65111003, 20, 20); //远古召唤
                cm.teachSkill(65111004, 20, 20); //钢铁莲花
                cm.teachSkill(65110005, 10, 10); //内心平和
                cm.teachSkill(65110006, 20, 20); //亲和Ⅲ
                cm.sendOk("系统已经为您转职为爆莉萌天使3转.");
            } else if (cm.getJob() == 6511 && cm.getPlayer().getLevel() >= 100) {
                cm.getPlayer().changeJob(6512);
                equip(1352604);
                cm.teachSkill(65121100, 10, 10); //原始之吼
                cm.teachSkill(65121101, 10, 10); //三位一体
                cm.teachSkill(65121002, 10, 10); //大地冲击波
                cm.teachSkill(65121003, 10, 10); //灵魂共鸣
                cm.teachSkill(65121004, 10, 10); //灵魂凝视
                cm.teachSkill(65120005, 10, 10); //灵魂手铳手
                cm.teachSkill(65120006, 10, 10); //强亲和Ⅳ
                cm.teachSkill(65121009, 30, 30); //诺巴的勇士
                cm.teachSkill(65121052, 1, 1); //超级诺巴
                cm.sendOk("系统已经为您转职为爆莉萌天使4转.");
            } else {
                cm.sendOk("你的当前职业条件不满足,无法为你提供转职服务!");
            }
            cm.dispose();
            break;
        case 120:
            if (cm.getJob() == 0 && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(508);
                cm.teachSkill(5080000, 10, 10); //侠客行
                cm.teachSkill(5081001, 20, 20); //龙翼拳
                cm.teachSkill(5081002, 20, 20); //双弹射击
                cm.teachSkill(5081003, 10, 10); //前空翻
                cm.teachSkill(5080004, 10, 10); //狮子的力量
                cm.teachSkill(5081005, 20, 20); //螺旋冲击
                cm.sendOk("系统已经为您转职为龙的传人1转.");
            } else if (cm.getJob() == 508 && cm.getPlayer().getLevel() >= 30) {
                cm.getPlayer().changeJob(570);
                cm.teachSkill(5700000, 20, 20); //精准枪
                cm.teachSkill(5700003, 10, 10); //物理训练
                cm.teachSkill(5700004, 20, 20); //三连射杀
                cm.teachSkill(5700005, 15, 15); //侠士的忍耐
                cm.teachSkill(5701001, 20, 20); //熊猫地震
                cm.teachSkill(5701005, 20, 20); //速射
                cm.teachSkill(5701006, 20, 20); //冥想
                cm.teachSkill(5701007, 20, 20); //双重螺旋
                cm.sendOk("系统已经为您转职为龙的传人2转.");
            } else if (cm.getJob() == 570 && cm.getPlayer().getLevel() >= 60) {
                cm.getPlayer().changeJob(571);
                cm.teachSkill(5710004, 20, 20); //侠义韧性
                cm.teachSkill(5710005, 20, 20); //气运丹田
                cm.teachSkill(5711000, 20, 20); //双管枪射击
                cm.teachSkill(5711001, 20, 20); //滑膛炮
                cm.teachSkill(5711002, 20, 20); //猛虎扑食
                cm.teachSkill(5711006, 30, 30); //求道之拳
                cm.teachSkill(5711011, 20, 20); //幸运骰子
                cm.sendOk("系统已经为您转职为龙的传人3转.");
            } else if (cm.getJob() == 571 && cm.getPlayer().getLevel() >= 100) {
                cm.getPlayer().changeJob(572);
                cm.teachSkill(5721000, 30, 30); //冒险岛勇士
                cm.teachSkill(5721001, 30, 30); //连射
                cm.teachSkill(5721002, 30, 30); //勇士的意志
                cm.teachSkill(5721003, 20, 20); //无尽追击
                cm.teachSkill(5721004, 30, 30); //亢龙有悔
                cm.teachSkill(5720005, 10, 10); //双幸运骰子
                cm.teachSkill(5721006, 30, 30); //爆头
                cm.teachSkill(5720008, 30, 30); //狂热
                cm.teachSkill(5721007, 30, 30); //英勇突袭
                cm.teachSkill(5721009, 20, 20); //海盗气魄
                cm.teachSkill(5721009, 20, 20); //勇士的意志
                cm.teachSkill(5720012, 20, 20); //反制攻击
                cm.sendOk("系统已经为您转职为龙的传人4转.");
            } else {
                cm.sendOk("你的当前职业条件不满足,无法为你提供转职服务!");
            }
            cm.dispose();
            break;
        }
    } else if (status == 2) {
        if (selection == 13) {
            changeJobByKnights(1);
        } else if (selection == 14) {
            changeJobByKnights(2);
        } else if (selection == 15) {
            changeJobByKnights(3);
        } else if (selection == 16) {
            changeJobByKnights(4);
        } else if (selection == 17) {
            changeJobByKnights(5);
        } else if (selection == 18) {
            if (cm.getJob() == 0 && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(100);
                cm.teachSkill(1001005, 20, 0); //群体攻击
                cm.teachSkill(1001008, 20, 0); //战士飞叶
                cm.teachSkill(1000009, 20, 0); //战士精通
                cm.teachSkill(1001003, 20, 0); //圣甲术
                cm.sendOk("系统已经为您转职为战士1转.");
                cm.dispose();
            } else if (cm.getJob() >= 100 && cm.getPlayer().getLevel() >= 30) {
                cm.sendSimple("#b#L23#剑客转职(2~4转)#l\r\n#b#L24#圣骑转职(2~4转)#l\r\n#b#L25#枪战转职(2~4转)#l\r\n");
            } else {
                cm.sendOk("你的当前职业条件不满足,无法为你提供转职服务!");
                cm.dispose();
            }
        } else if (selection == 19) {
            if (cm.getJob() == 0 && cm.getPlayer().getLevel() >= 8) {
                cm.getPlayer().changeJob(200);
                cm.teachSkill(2001008, 20, 0); //魔法弹
                cm.teachSkill(2001002, 10, 0); //魔法盾
                cm.teachSkill(2000010, 10, 0); //魔法铠甲
                cm.teachSkill(2001009, 5, 0); //快速移动
                cm.teachSkill(2000006, 20, 0); //MP增加
                cm.sendOk("系统已经为您转职为魔法师1转.");
                cm.dispose();
            } else if (cm.getJob() >= 200 && cm.getPlayer().getLevel() >= 30) {
                cm.sendSimple("#b#L26#火毒法师转职(2~4转)#l\r\n#b#L27#冰雷法师转职(2~4转)#l\r\n#b#L28#牧师法师转职(2~4转)#l\r\n");
            } else {
                cm.sendOk("你的当前职业条件不满足,无法为你提供转职服务!");
                cm.dispose();
            }
        } else if (selection == 20) {
            if (cm.getJob() == 0 && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(300);
                cm.teachSkill(3000001, 20, 0); //强力箭
                cm.teachSkill(3001004, 20, 0); //断魂箭
                cm.teachSkill(3001007, 10, 0); //二阶跳
                cm.teachSkill(3000002, 15, 0); //弓箭手精通
                cm.sendOk("系统已经为您转职为弓箭手1转.");
                cm.dispose();
            } else if (cm.getJob() >= 300 && cm.getPlayer().getLevel() >= 30) {
                cm.sendSimple("#b#L29#猎人转职(2~4转)#l\r\n#b#L30#游侠转职(2~4转)#l");
            } else {
                cm.sendOk("你的当前职业条件不满足,无法为你提供转职服务!");
                cm.dispose();
            }
        } else if (selection == 21) {
            if (cm.getJob() == 0 && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(400);
                cm.teachSkill(4000000, 10, 0); //集中术
                cm.teachSkill(4001003, 10, 0); //隐身术
                cm.teachSkill(4001014, 5, 0); //二段跳
                cm.teachSkill(4001334, 20, 0); //二连击
                cm.teachSkill(4001344, 20, 0); //双飞斩
                cm.teachSkill(4001005, 20, 0); //轻功
                cm.sendOk("系统已经为您转职为飞侠1转.");
                cm.dispose();
            } else if (cm.getJob() >= 400 && cm.getPlayer().getLevel() >= 30) {
                cm.sendSimple("#b#L31#刺客转职(2~4转)#l\r\n#b#L32#侠客转职(2~4转)#l");
            } else {
                cm.sendOk("你的当前职业条件不满足,无法为你提供转职服务!");
                cm.dispose();
            }
        } else if (selection == 22) {
            if (cm.getJob() == 0 && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(500);
                cm.teachSkill(5001002, 20, 0); //半月踢
                cm.teachSkill(5001003, 20, 0); //双弹射击
                cm.teachSkill(5001010, 5, 0); //章鱼助推
                cm.teachSkill(5001005, 5, 0); //疾驰
                cm.teachSkill(5000007, 10, 0); //致命咆哮
                cm.teachSkill(5000000, 10, 0); //快动作
                cm.sendOk("系统已经为您转职为海盗1转.");
                cm.dispose();
            } else if (cm.getJob() >= 500 && cm.getPlayer().getLevel() >= 30) {
                cm.sendSimple("#b#L33#拳手转职(2~4转)#l\r\n#b#L34#火枪手转职(2~4转)#l");
            } else {
                cm.sendOk("你的当前职业条件不满足,无法为你提供转职服务!");
                cm.dispose();
            }
        }
    } else if (status == 3) {
        if (selection == 23) {
            changeJobByAdventurer(1);
        } else if (selection == 24) {
            changeJobByAdventurer(2);
        } else if (selection == 25) {
            changeJobByAdventurer(3);
        } else if (selection == 26) {
            changeJobByAdventurer(4);
        } else if (selection == 27) {
            changeJobByAdventurer(5);
        } else if (selection == 28) {
            changeJobByAdventurer(6);
        } else if (selection == 29) {
            changeJobByAdventurer(7);
        } else if (selection == 30) {
            changeJobByAdventurer(8);
        } else if (selection == 31) {
            changeJobByAdventurer(9);
        } else if (selection == 32) {
            changeJobByAdventurer(10);
        } else if (selection == 33) {
            changeJobByAdventurer(11);
        } else if (selection == 34) {
            changeJobByAdventurer(12);
        }
    }
}

/*
冒险家转职
*/

function changeJobByAdventurer(type) {
    if (type == 1) {
        if (cm.getJob() == 100 && cm.getPlayer().getLevel() >= 30) {
            cm.getPlayer().changeJob(110);
            cm.teachSkill(1101011, 20, 0); //轻舞飞扬
            cm.teachSkill(1101012, 20, 0); //狂澜之力
            cm.teachSkill(1101013, 1, 0); //斗气集中
            cm.teachSkill(1101004, 10, 0); //快速武器
            //cm.teachSkill(1101006, 20, 0); //愤怒之火
            cm.teachSkill(1100000, 10, 0); //精准武器
            cm.teachSkill(1100002, 20, 0); //终极剑斧
            cm.teachSkill(1100009, 5, 0); //物理训练
            cm.sendOk("系统已经为您转职为剑客(战士2转).");
        } else if (cm.getJob() == 110 && cm.getPlayer().getLevel() >= 60) {
            cm.getPlayer().changeJob(111);
            cm.teachSkill(1111010, 20, 0); //勇猛劈砍
            cm.teachSkill(1111012, 10, 0); //突进
            cm.teachSkill(1111003, 20, 0); //恐慌
            cm.teachSkill(1111008, 20, 0); //虎咆哮
            cm.teachSkill(1110013, 20, 0); //斗气协合
            cm.teachSkill(1110000, 10, 0); //自我恢复
            cm.teachSkill(1110009, 10, 0); //终极剑斧
            cm.teachSkill(1110011, 20, 0); //抵抗力
            cm.sendOk("系统已经为您转职为勇士(战士3转).");
        } else if (cm.getJob() == 111 && cm.getPlayer().getLevel() >= 100) {
            cm.getPlayer().changeJob(112);
            cm.teachSkill(1120003, 30, 30); //进阶斗气
            cm.teachSkill(1121000, 30, 30); //冒险岛勇士
            cm.teachSkill(1121008, 30, 30); //终极打击
            cm.teachSkill(1121015, 30, 30); //烈焰冲斩
            cm.teachSkill(1121016, 20, 20); //魔击无效
            cm.teachSkill(1120014, 10, 10); //稳如泰山
            cm.teachSkill(1121010, 30, 30); //葵花宝典
            cm.teachSkill(1121011, 5, 5); //勇士的意志
            cm.teachSkill(1120012, 30, 30); //战斗精通
            cm.teachSkill(1120013, 5, 5); //进阶终极攻击
            cm.sendOk("系统已经为您转职为英雄(战士4转).");
        } else {
            cm.sendOk("你的当前职业条件不满足,无法为你提供转职服务!");
        }
    } else if (type == 2) {
        if (cm.getJob() == 100 && cm.getPlayer().getLevel() >= 30) {
            cm.getPlayer().changeJob(120);
            cm.teachSkill(1201011, 20, 0); //火焰冲击
            cm.teachSkill(1201012, 20, 0); //寒冰冲击
            cm.teachSkill(1200014, 1, 0); //元素冲击
            cm.teachSkill(1201013, 10, 0); //准骑士密令
            cm.teachSkill(1201004, 10, 0); //快速武器
            cm.teachSkill(1200000, 10, 0); //精准武器
            cm.teachSkill(1200002, 20, 0); //终极剑钝器
            cm.teachSkill(1200009, 5, 0); //物理训练
            cm.sendOk("系统已经为您转职为准骑士(战士2转).");
        } else if (cm.getJob() == 120 && cm.getPlayer().getLevel() >= 60) {
            cm.getPlayer().changeJob(121);
            cm.teachSkill(1211008, 20, 0); //雷鸣冲击
            cm.teachSkill(1211010, 20, 0); //元气恢复
            cm.teachSkill(1211012, 10, 0); //突进
            cm.teachSkill(1211013, 20, 0); //压制术
            //cm.teachSkill(1211014, 10, 0); //抗震防御
            cm.teachSkill(1211011, 20, 0); //战斗命令
            cm.teachSkill(1210001, 10, 0); //盾防精通
            cm.teachSkill(1210015, 20, 0); //阿基里斯
            cm.teachSkill(1210016, 10, 0); //祝福护甲
            cm.sendOk("系统已经为您转职为骑士(战士3转).");
        } else if (cm.getJob() == 121 && cm.getPlayer().getLevel() >= 100) {
            cm.getPlayer().changeJob(122);
            //cm.teachSkill(1220010, 10, 10); //万佛归一破
            cm.teachSkill(1221000, 30, 30); //冒险岛勇士
            cm.teachSkill(1221016, 20, 20); //守护之神
            cm.teachSkill(1220018, 30, 30); //圣骑士专家
            cm.teachSkill(1221009, 30, 30); //连环环破
            cm.teachSkill(1221004, 30, 30); //神圣冲击
            cm.teachSkill(1221014, 10, 10); //魔击无效
            cm.teachSkill(1221011, 30, 30); //圣域
            cm.teachSkill(1221015, 30, 30); //虚空元素
            cm.teachSkill(1220017, 30, 30); //稳如泰山
            cm.sendOk("系统已经为您转职为圣骑士(战士4转).");
        } else {
            cm.sendOk("你的当前职业条件不满足,无法为你提供转职服务!");
        }
    } else if (type == 3) {
        if (cm.getJob() == 100 && cm.getPlayer().getLevel() >= 30) {
            cm.getPlayer().changeJob(130);
            cm.teachSkill(1301011, 20, 0); //贯穿刺透
            cm.teachSkill(1301012, 10, 0); //神矛天引
            cm.teachSkill(1301013, 1, 0); //灵魂助力
            cm.teachSkill(1101004, 10, 0); //快速武器
            cm.teachSkill(1301004, 10, 0); //快速武器
            cm.teachSkill(1301006, 10, 0); //极限防御
            cm.teachSkill(1301007, 10, 0); //神圣之火
            cm.teachSkill(1300000, 10, 0); //精准武器
            cm.teachSkill(1300002, 20, 0); //终极枪矛
            cm.teachSkill(1300009, 10, 0); //物理训练
            cm.sendOk("系统已经为您转职为枪战士(战士2转).");
        } else if (cm.getJob() == 130 && cm.getPlayer().getLevel() >= 60) {
            cm.getPlayer().changeJob(131);
            cm.teachSkill(1311011, 20, 0); //拉曼查之枪
            cm.teachSkill(1311012, 10, 0); //突进
            cm.teachSkill(1311013, 10, 0); //灵魂助力统治
            cm.teachSkill(1311014, 20, 0); //灵魂助力震惊
            cm.teachSkill(1311015, 20, 0); //交叉锁链
            cm.teachSkill(1310009, 10, 0); //黑暗至尊
            cm.teachSkill(1310010, 20, 0); //抵抗力
            cm.teachSkill(1310016, 20, 0); //灵魂祝福
            cm.sendOk("系统已经为您转职为龙骑士(战士3转).");
        } else if (cm.getJob() == 131 && cm.getPlayer().getLevel() >= 100) {
            cm.getPlayer().changeJob(132);
            cm.teachSkill(1321013, 30, 30); //神枪降临
            cm.teachSkill(1321014, 10, 10); //魔击无效
            cm.teachSkill(1321000, 30, 30); //冒险岛勇士
            cm.teachSkill(1320011, 0, 0); //灵魂复仇
            cm.teachSkill(1320016, 30, 30); //重生契约
            cm.teachSkill(1320018, 30, 30); //进阶精准武器
            cm.teachSkill(1321012, 30, 30); //黑暗穿刺
            cm.teachSkill(1320017, 30, 30); //稳如泰山
            cm.teachSkill(1321015, 30, 30); //龙之献祭
            cm.sendOk("系统已经为您转职为黑骑士(战士4转).");
        } else {
            cm.sendOk("你的当前职业条件不满足,无法为你提供转职服务!");
        }
    } else if (type == 4) {
        if (cm.getJob() == 200 && cm.getPlayer().getLevel() >= 30) {
            cm.getPlayer().changeJob(210);
            cm.teachSkill(2101004, 20, 0); //火焰宝珠
            cm.teachSkill(2100009, 1, 0); //元素吸收
            cm.teachSkill(2101005, 10, 0); //毒雾术
            cm.teachSkill(2101001, 20, 0); //精神力
            cm.teachSkill(2101008, 10, 0); //魔法狂暴
            cm.teachSkill(2100010, 10, 0); //燎原之火
            cm.teachSkill(2100006, 10, 0); //咒语精通
            cm.teachSkill(2100007, 5, 0); //智慧激发
            cm.teachSkill(2100000, 10, 0); //魔力吸收
            cm.sendOk("系统已经为您转职为火毒法师(魔法师2转).");
        } else if (cm.getJob() == 210 && cm.getPlayer().getLevel() >= 60) {
            cm.getPlayer().changeJob(211);
            cm.teachSkill(2111002, 20, 0); //末日烈焰
            cm.teachSkill(2111003, 20, 0); //致命毒雾
            cm.teachSkill(2111010, 10, 0); //绿水灵病毒
            cm.teachSkill(2111011, 20, 0); //元素配合(火毒)
            cm.teachSkill(2111008, 10, 0); //自然力重置
            cm.teachSkill(2111007, 10, 0); //快速移动精通
            cm.teachSkill(2110012, 10, 0); //魔力纵燃
            cm.teachSkill(2110009, 10, 0); //魔法爆击
            cm.teachSkill(2110001, 10, 0); //魔力激化
            cm.teachSkill(2110000, 10, 0); //极限魔力（火，毒）
            cm.sendOk("系统已经为您转职为火毒巫师(魔法师3转).");
        } else if (cm.getJob() == 211 && cm.getPlayer().getLevel() >= 100) {
            cm.getPlayer().changeJob(212);
            cm.teachSkill(2121000, 30, 30); //冒险岛勇士
            cm.teachSkill(2121004, 30, 30); //终极无限
            cm.teachSkill(2121003, 30, 30); //迷雾爆发
            cm.teachSkill(2120014, 1, 1); //元素配合(火毒)
            cm.teachSkill(2121006, 30, 30); //美杜莎之眼
            cm.teachSkill(2121007, 30, 30); //天降落星
            cm.teachSkill(2121011, 30, 30); //炙焰笼罩
            cm.teachSkill(2121008, 5, 5); //勇士的意志
            cm.teachSkill(2120010, 30, 30); //神秘瞄准术
            cm.teachSkill(2120012, 10, 10); //魔力精通
            cm.sendOk("系统已经为您转职为火毒魔导师(魔法师4转).");
        } else {
            cm.sendOk("你的当前职业条件不满足,无法为你提供转职服务!");
        }
    } else if (type == 5) {
        if (cm.getJob() == 200 && cm.getPlayer().getLevel() >= 30) {
            cm.getPlayer().changeJob(220);
            cm.teachSkill(2201008, 20, 0); //冰冻术
            cm.teachSkill(2200011, 1, 0); //极冻效果
            cm.teachSkill(2201005, 10, 0); //雷电术
            cm.teachSkill(2201009, 10, 0); //寒冰步
            cm.teachSkill(2201001, 20, 0); //精神力
            cm.teachSkill(2201010, 10, 0); //魔法狂暴
            cm.teachSkill(2200006, 10, 0); //咒语精通
            cm.teachSkill(2200007, 5, 0); //智慧激发
            cm.teachSkill(2200000, 10, 0); //魔力吸收
            cm.sendOk("系统已经为您转职为冰雷法师(魔法师2转).");
        } else if (cm.getJob() == 220 && cm.getPlayer().getLevel() >= 60) {
            cm.getPlayer().changeJob(221);
            cm.teachSkill(2211002, 20, 0); //冰咆哮
            cm.teachSkill(2211010, 20, 0); //冰河锁链
            cm.teachSkill(2211011, 10, 0); //闪电风暴
            cm.teachSkill(2210000, 20, 0); //极限魔力（冰，雷）
            cm.teachSkill(2211008, 10, 0); //自然力重置
            cm.teachSkill(2211007, 10, 0); //快速移动精通
            cm.teachSkill(2210012, 10, 0); //魔力纵燃
            cm.teachSkill(2210009, 10, 0); //魔法爆击
            cm.teachSkill(2210001, 10, 0); //魔力激化
            cm.teachSkill(2210013, 10, 0); //寒霜破裂
            cm.sendOk("系统已经为您转职为冰雷巫师(魔法师3转).");
        } else if (cm.getJob() == 221 && cm.getPlayer().getLevel() >= 100) {
            cm.getPlayer().changeJob(222);
            cm.teachSkill(2221000, 30, 30); //冒险岛勇士
            cm.teachSkill(2221004, 30, 30); //终极无限
            cm.teachSkill(2221003, 30, 30); //迷雾爆发
            cm.teachSkill(2220014, 30, 30); //落霜冰破
            cm.teachSkill(2221006, 30, 30); //链环闪电
            //cm.teachSkill(2221011, 30, 30); //极冻吐息
            cm.teachSkill(2221012, 30, 30); //寒霜爆晶
            cm.teachSkill(2221008, 5, 5); //勇士的意志
            cm.teachSkill(2220010, 30, 30); //神秘瞄准术
            cm.teachSkill(2220013, 10, 10); //魔力精通
            cm.sendOk("系统已经为您转职为冰雷魔导师(魔法师4转).");
        } else {
            cm.sendOk("你的当前职业条件不满足,无法为你提供转职服务!");
        }
    } else if (type == 6) {
        if (cm.getJob() == 200 && cm.getPlayer().getLevel() >= 30) {
            cm.getPlayer().changeJob(230);
            cm.teachSkill(2301005, 20, 0); //圣箭术
            cm.teachSkill(2300009, 1, 0); //祈祷众生
            cm.teachSkill(2301002, 20, 0); //群体治愈
            cm.teachSkill(2301004, 10, 0); //祝福
            cm.teachSkill(2301008, 20, 0); //魔法狂暴
            cm.teachSkill(2301003, 10, 0); //神之保护
            cm.teachSkill(2300006, 10, 0); //咒语精通
            cm.teachSkill(2300007, 5, 0); //智慧激发
            cm.teachSkill(2300000, 10, 0); //魔力吸收
            cm.sendOk("系统已经为您转职为牧师(魔法师2转).");
        } else if (cm.getJob() == 230 && cm.getPlayer().getLevel() >= 60) {
            cm.getPlayer().changeJob(231);
            cm.teachSkill(2311004, 20, 0); //圣光
            //cm.teachSkill(2311011, 10, 0); //神圣源泉
            cm.teachSkill(2311012, 10, 0); //神圣保护
            cm.teachSkill(2311002, 20, 0); //时空门
            cm.teachSkill(2311001, 10, 0); //净化
            cm.teachSkill(2311003, 20, 0); //神圣祈祷
            cm.teachSkill(2311007, 10, 0); //快速移动精通
            cm.teachSkill(2311009, 20, 0); //神圣魔法盾
            cm.teachSkill(2310010, 10, 0); //魔法爆击
            cm.teachSkill(2310008, 10, 0); //神圣集中
            cm.sendOk("系统已经为您转职为祭祀(魔法师3转).");
        } else if (cm.getJob() == 231 && cm.getPlayer().getLevel() >= 100) {
            cm.getPlayer().changeJob(232);
            cm.teachSkill(2321000, 30, 30); //冒险岛勇士
            cm.teachSkill(2321004, 30, 30); //终极无限
            cm.teachSkill(2321001, 30, 30); //创世之破
            cm.teachSkill(2320013, 30, 30); //祈祷和音
            cm.teachSkill(2321005, 20, 20); //进阶祝福
            cm.teachSkill(2321007, 30, 30); //光芒飞箭
            cm.teachSkill(2321006, 10, 10); //复活术
            cm.teachSkill(2321008, 30, 30); //圣光普照
            cm.teachSkill(2321009, 5, 5); //勇士的意志
            cm.teachSkill(2320012, 10, 10); //魔力精通
            cm.teachSkill(2320011, 30, 30); //神秘瞄准术
            cm.sendOk("系统已经为您转职为主教(魔法师4转).");
        } else {
            cm.sendOk("你的当前职业条件不满足,无法为你提供转职服务!");
        }
    } else if (type == 7) {
        if (cm.getJob() == 300 && cm.getPlayer().getLevel() >= 30) {
            cm.getPlayer().changeJob(310);
            cm.teachSkill(3101005, 20, 0); //爆炸箭
            cm.teachSkill(3101008, 10, 0); //后撤跳疾射
            cm.teachSkill(3101009, 1, 0); //三彩箭矢
            cm.teachSkill(3100006, 20, 0); //物理训练
            cm.teachSkill(3101002, 10, 0); //快速箭
            cm.teachSkill(3100000, 20, 0); //精准弓
            cm.teachSkill(3100001, 20, 0); //终极弓
            cm.teachSkill(3101004, 20, 0); //无形箭
            cm.sendOk("系统已经为您转职为猎人(弓箭手2转).");
        } else if (cm.getJob() == 310 && cm.getPlayer().getLevel() >= 60) {
            cm.getPlayer().changeJob(311);
            cm.teachSkill(3111003, 20, 0); //烈火箭
            cm.teachSkill(3111009, 20, 0); //暴风箭雨
            cm.teachSkill(3111005, 10, 0); //火凤凰
            cm.teachSkill(3111010, 10, 0); //寒冰爪钩
            cm.teachSkill(3111011, 10, 0); //极限射箭 : 弓
            cm.teachSkill(3110012, 20, 0); //精神集中
            cm.teachSkill(3110014, 20, 0); //射术精修
            cm.teachSkill(3110007, 20, 0); //闪避
            cm.teachSkill(3110001, 20, 0); //贯穿箭
            cm.sendOk("系统已经为您转职为射手(弓箭手3转).");
        } else if (cm.getJob() == 311 && cm.getPlayer().getLevel() >= 100) {
            cm.getPlayer().changeJob(312);
            cm.teachSkill(3121013, 30, 30); //箭矢炮盘
            cm.teachSkill(3121014, 10, 10); //创伤之射
            cm.teachSkill(3121015, 30, 30); //骤雨箭矢
            cm.teachSkill(3121000, 30, 30); //冒险岛勇士
            cm.teachSkill(3121016, 10, 10); //进阶箭筒
            cm.teachSkill(3120018, 20, 20); //防甲穿透
            cm.teachSkill(3120005, 30, 30); //神箭手
            cm.teachSkill(3121002, 30, 30); //火眼晶晶
            cm.teachSkill(3121007, 30, 30); //幻影步
            cm.teachSkill(3120008, 30, 30); //进阶终极攻击
            cm.teachSkill(3121009, 5, 5); //勇士的意志
            cm.sendOk("系统已经为您转职为神射手(弓箭手4转).");
        } else {
            cm.sendOk("你的当前职业条件不满足,无法为你提供转职服务!");
        }
    } else if (type == 8) {
        if (cm.getJob() == 300 && cm.getPlayer().getLevel() >= 30) {
            cm.getPlayer().changeJob(320);
            cm.teachSkill(3201005, 20, 0); //爆炸箭
            cm.teachSkill(3200009, 1, 0); //远近效应
            cm.teachSkill(3201008, 10, 0); //星云撒网
            cm.teachSkill(3201002, 10, 0); //快速弩
            cm.teachSkill(3201004, 20, 0); //无形箭
            cm.teachSkill(3200000, 10, 0); //精准弩
            cm.teachSkill(3200001, 20, 0); //终极弩
            cm.teachSkill(3200006, 20, 0); //物理训练
            cm.sendOk("系统已经为您转职为弩弓手(弩弓手2转).");
        } else if (cm.getJob() == 320 && cm.getPlayer().getLevel() >= 60) {
            cm.getPlayer().changeJob(321);
            cm.teachSkill(3211009, 20, 0); //破裂雷电 
            cm.teachSkill(3211008, 10, 0); //飞龙冲击波
            cm.teachSkill(3211005, 10, 0); //冰凤凰
            cm.teachSkill(3211010, 10, 0); //寒冰爪钩
            cm.teachSkill(3211011, 20, 0); //治愈长杖
            cm.teachSkill(3211012, 10, 0); //极限射箭 : 弩
            cm.teachSkill(3210001, 10, 0); //贯穿箭
            cm.teachSkill(3210013, 20, 0); //伤害置换
            cm.teachSkill(3210015, 20, 0); //射术精修
            cm.teachSkill(3210007, 10, 0); //闪避
            cm.sendOk("系统已经为您转职为游侠(弩弓手3转).");
        } else if (cm.getJob() == 321 && cm.getPlayer().getLevel() >= 100) {
            cm.getPlayer().changeJob(322);
            cm.teachSkill(3221017, 30, 30); //穿透箭
            cm.teachSkill(3220004, 30, 30); //神弩手
            //cm.teachSkill(3220015, 10, 10); //天赐神箭
            cm.teachSkill(3220016, 10, 10); //剑指一人
            cm.teachSkill(3220018, 20, 20); //弱点捕捉
            cm.teachSkill(3221000, 30, 30); //冒险岛勇士
            cm.teachSkill(3221002, 30, 30); //火眼晶晶
            cm.teachSkill(3221006, 30, 30); //幻影步
            cm.teachSkill(3221007, 30, 30); //一击要害箭
            //cm.teachSkill(3221014, 30, 30); //神箭幻影
            cm.teachSkill(3221008, 5, 5); //勇士的意志
            cm.sendOk("系统已经为您转职为箭神(弩弓手4转).");
        } else {
            cm.sendOk("你的当前职业条件不满足,无法为你提供转职服务!");
        }
    } else if (type == 9) {
        if (cm.getJob() == 400 && cm.getPlayer().getLevel() >= 30) {
            cm.getPlayer().changeJob(410);
            cm.teachSkill(4101008, 20, 0); //爆裂飞镖
            cm.teachSkill(4100012, 1, 0); //刺客标记
            cm.teachSkill(4101010, 20, 0); //风之护符
            cm.teachSkill(4101003, 10, 0); //快速暗器
            cm.teachSkill(4100000, 20, 0); //精准暗器
            cm.teachSkill(4100001, 30, 0); //强力投掷
            cm.teachSkill(4100007, 20, 0); //物理训练
            cm.sendOk("系统已经为您转职为刺客(飞侠2转).");
        } else if (cm.getJob() == 410 && cm.getPlayer().getLevel() >= 60) {
            cm.getPlayer().changeJob(411);
            cm.teachSkill(4111010, 20, 0); //三连环光击破
            cm.teachSkill(4111015, 20, 0); //影子分裂
            //cm.teachSkill(4111007, 10, 0); //黑暗杂耍
            cm.teachSkill(4111003, 10, 0); //影网术
            cm.teachSkill(4111002, 20, 0); //影分身
            cm.teachSkill(4111009, 30, 0); //暗器伤人
            cm.teachSkill(4110008, 20, 0); //永恒黑暗
            cm.teachSkill(4110011, 10, 0); //武器用毒液
            cm.teachSkill(4110012, 10, 0); //娴熟飞镖术
            cm.teachSkill(4110014, 10, 0); //药品吸收
            cm.sendOk("系统已经为您转职为无影人(飞侠3转).");
        } else if (cm.getJob() == 411 && cm.getPlayer().getLevel() >= 100) {
            cm.getPlayer().changeJob(412);
            cm.teachSkill(4121000, 30, 30); //冒险岛勇士
            cm.teachSkill(4120002, 30, 30); //假动作
            cm.teachSkill(4121009, 5, 5); //勇士的意志
            cm.teachSkill(4120011, 10, 10); //致命毒液
            cm.teachSkill(4120012, 30, 30); //暗器专家
            cm.teachSkill(4121013, 30, 30); //四连镖
            cm.teachSkill(4121017, 20, 20); //决战之巅
            //cm.teachSkill(4121014, 30, 30); //黑暗祝福
            cm.teachSkill(4121015, 30, 30); //模糊领域
            cm.teachSkill(4121016, 30, 30); //突然袭击
            cm.sendOk("系统已经为您转职为隐士(飞侠4转).");
        } else {
            cm.sendOk("你的当前职业条件不满足,无法为你提供转职服务!");
        }
    } else if (type == 10) {
        if (cm.getJob() == 400 && cm.getPlayer().getLevel() >= 30) {
            cm.getPlayer().changeJob(420);
            cm.teachSkill(4201012, 20, 0); //回旋斩
            cm.teachSkill(4200013, 1, 0); //暴击蓄能
            cm.teachSkill(4201004, 10, 0); //神通术
            cm.teachSkill(4201002, 10, 0); //快速短刀
            cm.teachSkill(4201011, 10, 0); //金钱护盾
            cm.teachSkill(4201009, 20, 0); //命运
            cm.teachSkill(4200000, 10, 0); //精准短刀
            cm.teachSkill(4200007, 20, 0); //物理训练
            cm.teachSkill(4200010, 10, 0); //盾防精通
            cm.sendOk("系统已经为您转职为侠客(飞侠2转).");
        } else if (cm.getJob() == 420 && cm.getPlayer().getLevel() >= 60) {
            cm.getPlayer().changeJob(421);
            cm.teachSkill(4211002, 20, 0); //炼狱
            cm.teachSkill(4211003, 5, 0); //敛财术
            cm.teachSkill(4211008, 20, 0); //影分身
            cm.teachSkill(4210010, 10, 0); //武器用毒液
            cm.teachSkill(4211011, 20, 0); //刀刃之舞
            cm.teachSkill(4210012, 5, 0); //贪婪
            cm.teachSkill(4210013, 10, 0); //永恒黑暗
            //cm.teachSkill(4211006, 20, 0); //金钱炸弹
            //cm.teachSkill(4211007, 10, 0); //黑暗杂耍
            cm.sendOk("系统已经为您转职为独行客(飞侠3转).");
        } else if (cm.getJob() == 421 && cm.getPlayer().getLevel() >= 100) {
            cm.getPlayer().changeJob(422);
            cm.teachSkill(4221014, 30, 30); //暗杀
            cm.teachSkill(4221000, 30, 30); //冒险岛勇士
            cm.teachSkill(4220002, 30, 30); //假动作
            cm.teachSkill(4221006, 30, 30); //烟幕弹
            cm.teachSkill(4221007, 30, 30); //一出双击
            cm.teachSkill(4220015, 10, 10); //名流爆击
            cm.teachSkill(4221008, 5, 5); //勇士的意志
            cm.teachSkill(4221010, 30, 30); //突然袭击
            cm.teachSkill(4220011, 10, 10); //致命毒液
            cm.teachSkill(4220012, 30, 30); //短刀专家
            //cm.teachSkill(4221013, 20, 20); //侠盗本能
            cm.sendOk("系统已经为您转职为侠盗(飞侠4转).");
        } else {
            cm.sendOk("你的当前职业条件不满足,无法为你提供转职服务!");
        }
    } else if (type == 11) {
        if (cm.getJob() == 500 && cm.getPlayer().getLevel() >= 30) {
            cm.getPlayer().changeJob(510);
            cm.teachSkill(5101012, 10, 0); //龙卷风拳
            cm.teachSkill(5101004, 20, 0); //贯骨击
            cm.teachSkill(5101011, 20, 0); //静心
            cm.teachSkill(5101006, 10, 0); //急速拳
            cm.teachSkill(5100001, 10, 0); //精准拳
            cm.teachSkill(5100009, 10, 0); //HP增加
            cm.teachSkill(5100010, 5, 0); //物理训练
            cm.teachSkill(5100013, 20, 0); //忍耐
            cm.sendOk("系统已经为您转职为拳手(海盗2转).");
        } else if (cm.getJob() == 510 && cm.getPlayer().getLevel() >= 60) {
            cm.getPlayer().changeJob(511);
            cm.teachSkill(5110000, 10, 0); //迷惑攻击
            cm.teachSkill(5111002, 20, 0); //能量爆破
            cm.teachSkill(5110014, 20, 0); //超级冲击
            cm.teachSkill(5111007, 20, 0); //幸运骰子
            cm.teachSkill(5111009, 20, 0); //双龙飓风
            cm.teachSkill(5111010, 10, 0); //树木防御
            cm.teachSkill(5110011, 10, 0); //致命狂热
            cm.teachSkill(5111012, 20, 0); //碎石乱击
            cm.sendOk("系统已经为您转职为斗士(海盗3转).");
        } else if (cm.getJob() == 511 && cm.getPlayer().getLevel() >= 100) {
            cm.getPlayer().changeJob(512);
            cm.teachSkill(5121000, 30, 30); //冒险岛勇士
            cm.teachSkill(5121001, 30, 30); //潜龙出渊
            cm.teachSkill(5121007, 30, 30); //激怒拳
            cm.teachSkill(5121009, 20, 20); //极速领域
            cm.teachSkill(5121010, 5, 5); //伺机待发
            cm.teachSkill(5120011, 10, 10); //反制攻击
            cm.teachSkill(5120012, 10, 10); //双幸运骰子
            cm.teachSkill(5120018, 10, 10); //终极冲击
            cm.teachSkill(5121013, 30, 30); //诺特勒斯战舰
            cm.teachSkill(5120014, 20, 20); //重装碾压
            cm.teachSkill(5121019, 30, 30); //潜龙出渊
            cm.teachSkill(5121020, 30, 30); //暴怒拳
            cm.teachSkill(5121015, 30, 30); //蛇拳
            cm.teachSkill(5121016, 30, 30); //能量爆炸
            cm.teachSkill(5121017, 30, 30); //双重爆炸
            cm.teachSkill(5121008, 5, 5); //勇士的意志
            cm.sendOk("系统已经为您转职为冲锋队长(海盗4转).");
        } else {
            cm.sendOk("你的当前职业条件不满足,无法为你提供转职服务!");
        }
    } else {
        if (cm.getJob() == 500 && cm.getPlayer().getLevel() >= 30) {
            cm.getPlayer().changeJob(520);
            cm.teachSkill(5200010, 20, 0); //三连射杀
            cm.teachSkill(5201001, 20, 0); //快枪手
            cm.teachSkill(5201006, 20, 0); //激退射杀
            cm.teachSkill(5201003, 10, 0); //速射
            cm.teachSkill(5201011, 5, 0); //轻羽鞋
            cm.teachSkill(5201008, 5, 0); //无限子弹
            cm.teachSkill(5200000, 10, 0); //精准枪
            cm.teachSkill(5200009, 5, 0); //物理训练
            cm.sendOk("系统已经为您转职为火枪手(海盗2转).");
        } else if (cm.getJob() == 520 && cm.getPlayer().getLevel() >= 60) {
            cm.getPlayer().changeJob(521);
            cm.teachSkill(5211007, 20, 0); //幸运骰子
            cm.teachSkill(5211008, 20, 0); //双管枪射击
            cm.teachSkill(5211009, 20, 0); //空尖弹
            cm.teachSkill(5211010, 20, 0); //冲撞弹
            cm.teachSkill(5210012, 10, 0); //坚忍不拔
            cm.teachSkill(5210013, 20, 0); //合金子弹
			cm.teachSkill(5211014, 10, 0); //八轮重机枪
            cm.sendOk("系统已经为您转职为大副(海盗3转).");
        } else if (cm.getJob() == 521 && cm.getPlayer().getLevel() >= 100) {
            cm.getPlayer().changeJob(522);
            cm.teachSkill(5221000, 30, 30); //冒险岛勇士
            cm.teachSkill(5221004, 30, 30); //金属风暴
            //cm.teachSkill(5221022, 30, 30); //战船轰炸机
            cm.teachSkill(5220012, 10, 10); //反制攻击
            cm.teachSkill(5221013, 30, 30); //诺特勒斯战舰
            cm.teachSkill(5220014, 30, 30); //双幸运骰子
            cm.teachSkill(5221015, 10, 10); //无尽追击
            cm.teachSkill(5221016, 30, 30); //爆头
            cm.teachSkill(5221018, 10, 10); //海盗气魄
            cm.teachSkill(5220020, 30, 30); //船长的威严
            cm.teachSkill(5221021, 10, 10); //神速衔接
            cm.sendOk("系统已经为您转职为船长(海盗4转).");
        } else {
            cm.sendOk("你的当前职业条件不满足,无法为你提供转职服务!");
        }
    }
    cm.dispose();
}

/*
骑士团转职
*/

function changeJobByKnights(type) {
    if (type == 1) {
        if ((cm.getJob() == 0 || cm.getJob() == 1000) && cm.getPlayer().getLevel() >= 10) {
            cm.getPlayer().changeJob(1100);
            cm.teachSkill(11001020, 20, 0); //三连斩
            cm.teachSkill(11001021, 15, 0); //光之刃
            cm.teachSkill(11001022, 20, 0); //元素：灵魂
            cm.teachSkill(11000023, 20, 0); //灵魂鸣响
            cm.sendOk("系统已经为您转职为魂骑士1转.");
        } else if (cm.getJob() == 1100 && cm.getPlayer().getLevel() >= 30) {
            cm.getPlayer().changeJob(1110);
            cm.teachSkill(11101120, 20, 0); //瞬步
            //cm.teachSkill(11101220, 20, 0); //猛袭
            cm.teachSkill(11101121, 30, 0); //摄魂斩
            //cm.teachSkill(11101221, 20, 0); //灼影之焰
            cm.teachSkill(11101022, 30, 0); //月光洒落
            cm.teachSkill(11101023, 20, 0); //坚定意志
            cm.teachSkill(11101024, 10, 0); //机警灵活
            cm.teachSkill(11100025, 10, 0); //精准剑
            cm.teachSkill(11100026, 10, 0); //人神一体
            cm.sendOk("系统已经为您转职为魂骑士2转.");
        } else if (cm.getJob() == 1110 && cm.getPlayer().getLevel() >= 60) {
            cm.getPlayer().changeJob(1111);
            cm.teachSkill(11111120, 20, 0); //月影斩
            cm.teachSkill(11111220, 20, 0); //光速突击
            cm.teachSkill(11111121, 20, 0); //月光十字斩
            cm.teachSkill(11111221, 20, 0); //日光十字斩
            cm.teachSkill(11111022, 20, 0); //旭日
            cm.teachSkill(11111023, 20, 0); //灵魂之眼
            cm.teachSkill(11111024, 20, 0); //灵魂守卫
            cm.teachSkill(11110025, 20, 0); //钢铁之轮
            cm.teachSkill(11110026, 20, 0); //心灵呐喊
            cm.sendOk("系统已经为您转职为魂骑士3转.");
        } else if (cm.getJob() == 1111 && cm.getPlayer().getLevel() >= 100) {
            cm.getPlayer().changeJob(1112);
            //cm.teachSkill(11121000, 20, 20); //希纳斯的骑士
            cm.teachSkill(11121101, 20, 20); //月光之舞
            //cm.teachSkill(11121201, 20, 20); //极速霞光
            //cm.teachSkill(11121102, 20, 20); //月光之舞（空中）
            //cm.teachSkill(11121202, 20, 20); //极速霞光（空中）
            //cm.teachSkill(11121103, 20, 20); //新月斩
            cm.teachSkill(11121203, 20, 20); //烈日之刺
            cm.teachSkill(11121004, 20, 20); //落魂剑
            cm.teachSkill(11121005, 20, 20); //日月轮转
            cm.teachSkill(11121006, 20, 20); //灵魂誓约
            cm.teachSkill(11120007, 20, 20); //长剑专家
            cm.teachSkill(11120008, 20, 20); //幻千之刃
            cm.teachSkill(11120009, 20, 20); //人剑合一
            //cm.teachSkill(11121010, 20, 20); //人剑合一（旭日）
            //cm.teachSkill(11121011, 20, 20); //日月轮转（月光洒落）
            //cm.teachSkill(11121012, 20, 20); //日月轮转（旭日）
            //cm.teachSkill(11121013, 20, 20); //落魂剑（傀儡）
            cm.teachSkill(11121055, 1, 1); //落魂剑（傀儡）
            cm.sendOk("系统已经为您转职为魂骑士4转.");
        } else {
            cm.sendOk("你的当前职业条件不满足,无法为你提供转职服务!");
        }
    } else if (type == 2) {
        if ((cm.getJob() == 0 || cm.getJob() == 1000) && cm.getPlayer().getLevel() >= 10) {
            cm.getPlayer().changeJob(1200);
            cm.teachSkill(12000005, 10, 10); //MP增加
            cm.teachSkill(12001001, 15, 15); //魔法盾
            cm.teachSkill(12001002, 15, 15); //魔法铠甲
            cm.teachSkill(12001003, 20, 20); //魔法双击
            cm.teachSkill(12001004, 10, 10); //炎精灵
            cm.sendOk("系统已经为您转职为炎术士1转.");
        } else if (cm.getJob() == 1200 && cm.getPlayer().getLevel() >= 30) {
            cm.getPlayer().changeJob(1210);
            cm.teachSkill(12101000, 20, 20); //精神力
            cm.teachSkill(12100007, 20, 20); //精神力
            cm.teachSkill(12101001, 10, 10); //缓速术
            cm.teachSkill(12101002, 30, 30); //火焰箭
            cm.teachSkill(12101003, 20, 20); //快速移动
            cm.teachSkill(12101004, 20, 20); //魔法狂暴
            cm.teachSkill(12101005, 10, 10); //自然力重置
            cm.teachSkill(12101006, 20, 20); //火柱
            cm.teachSkill(12100008, 10, 10); //智慧激发
            cm.sendOk("系统已经为您转职为炎术士2转.");
        } else if (cm.getJob() == 1210 && cm.getPlayer().getLevel() >= 70) {
            cm.getPlayer().changeJob(1211);
            cm.teachSkill(12110000, 20, 20); //魔法爆击
            cm.teachSkill(12110001, 20, 20); //魔力激化
            cm.teachSkill(12111002, 20, 20); //封印术
            cm.teachSkill(12111003, 0, 0); //天降落星
            cm.teachSkill(12111004, 20, 20); //火魔兽
            cm.teachSkill(12111005, 20, 20); //火牢术屏障
            cm.teachSkill(12111006, 30, 30); //火风暴
            cm.sendOk("系统已经为您转职为炎术士3转.");
        } else {
            cm.sendOk("你的当前职业条件不满足,无法为你提供转职服务!");
        }
    } else if (type == 3) {
        if ((cm.getJob() == 0 || cm.getJob() == 1000) && cm.getPlayer().getLevel() >= 10) {
            cm.getPlayer().changeJob(1300);
            cm.teachSkill(13001020, 20, 20); //清风箭
            cm.teachSkill(13001021, 15, 15); //风影漫步
            cm.teachSkill(13001022, 20, 20); //元素：风
            cm.teachSkill(13000023, 20, 20); //风之私语	
            cm.sendOk("系统已经为您转职为风灵使者1转.");
        } else if (cm.getJob() == 1300 && cm.getPlayer().getLevel() >= 30) {
            cm.getPlayer().changeJob(1310);
            cm.teachSkill(13101020, 20, 20); //仙灵回旋
            cm.teachSkill(13101021, 20, 20); //疾风箭
            cm.teachSkill(13100022, 20, 20); //狂风肆虐Ⅰ
            cm.teachSkill(13101023, 20, 20); //快速箭
            cm.teachSkill(13101024, 20, 20); //风精灵相助
            cm.teachSkill(13100025, 20, 20); //精准弓
            cm.teachSkill(13100026, 20, 20); //物理训练
            cm.teachSkill(13100027, 20, 20); //狂风肆虐Ⅰ
            cm.sendOk("系统已经为您转职为风灵使者2转.");
        } else if (cm.getJob() == 1310 && cm.getPlayer().getLevel() >= 60) {
            cm.getPlayer().changeJob(1311);
            cm.teachSkill(13111020, 20, 20); //风霜雪舞
            cm.teachSkill(13111021, 20, 20); //精准箭
            cm.teachSkill(13110022, 20, 20); //狂风肆虐Ⅱ
            cm.teachSkill(13111023, 20, 20); //信天翁
            cm.teachSkill(13111024, 20, 20); //绿水晶花
            cm.teachSkill(13110025, 20, 20); //轻如鸿毛
            cm.teachSkill(13110026, 20, 20); //重振精神
            cm.teachSkill(13110027, 20, 20); //狂风肆虐Ⅱ
            cm.sendOk("系统已经为您转职为风灵使者3转.");
        } else if (cm.getJob() == 1311 && cm.getPlayer().getLevel() >= 100) {
            cm.getPlayer().changeJob(1312);
            cm.teachSkill(13121000, 30, 30); //希纳斯的骑士
            cm.teachSkill(13121001, 30, 30); //天空之歌
            cm.teachSkill(13121002, 30, 30); //旋风箭
            cm.teachSkill(13120003, 20, 20); //狂风肆虐Ⅲ
            cm.teachSkill(13121004, 30, 30); //风之祝福
            cm.teachSkill(13121005, 20, 20); //火眼晶晶
            cm.teachSkill(13120006, 20, 20); //神箭手
            cm.teachSkill(13120007, 20, 20); //钻石星尘
            cm.teachSkill(13120008, 20, 20); //极限信天翁
            //cm.teachSkill(13121009, 20, 20); //旋风箭
            cm.teachSkill(13120010, 20, 20); //狂风肆虐Ⅲ
            cm.teachSkill(13121052, 1, 1); //季候风
            cm.sendOk("系统已经为您转职为风灵使者4转.");
        } else {
            cm.sendOk("你的当前职业条件不满足,无法为你提供转职服务!");
        }
    } else if (type == 4) {
        if ((cm.getJob() == 0 || cm.getJob() == 1000) && cm.getPlayer().getLevel() >= 10) {
            cm.getPlayer().changeJob(1400);
            cm.teachSkill(14000000, 20, 20); //集中术
            cm.teachSkill(14000001, 5, 5); //远程暗器
            cm.teachSkill(14001002, 10, 10); //诅咒术
            cm.teachSkill(14001003, 10, 10); //隐身术
            cm.teachSkill(14001004, 20, 20); //双飞斩
            cm.teachSkill(14001005, 10, 10); //夜精灵
            //cm.teachSkill(14001007, 0, 0); //轻功
            cm.teachSkill(14100000, 20, 20); //精准暗器
            cm.teachSkill(14100001, 20, 20); //强力投掷
            cm.teachSkill(14101002, 20, 20); //快速暗器
            //cm.teachSkill(14101003, 0, 0); //轻功
            cm.teachSkill(14101004, 20, 20); //二段跳
            cm.teachSkill(14100005, 10, 10); //驱逐
            cm.teachSkill(14101006, 20, 20); //吸血
            cm.teachSkill(14101008, 20, 20); //爆裂飞镖
            cm.teachSkill(14101009, 20, 20); //风之护符
            cm.teachSkill(14100010, 10, 10); //物理训练
            cm.teachSkill(14111000, 20, 20); //影分身
            cm.teachSkill(14111001, 20, 20); //影网术
            cm.teachSkill(14111002, 20, 20); //多重飞镖
            cm.teachSkill(14110003, 20, 20); //药剂精通
            //cm.teachSkill(14110004, 20, 20); //武器用毒液
            cm.teachSkill(14111005, 20, 20); //三连环光击破
            cm.teachSkill(14111006, 30, 30); //毒炸弹
            cm.teachSkill(14111007, 10, 10); //暗器伤人
            cm.teachSkill(14111008, 20, 20); //影子分裂
            cm.teachSkill(14110009, 20, 20); //永恒黑暗
            cm.teachSkill(14110011, 10, 10); //药剂吸收
            cm.sendOk("系统已经为您转职为夜行者1转.");
        } else if (cm.getJob() == 1400 && cm.getPlayer().getLevel() >= 30) {
            cm.getPlayer().changeJob(1410);
            cm.sendOk("系统已经为您转职为夜行者2转.");
        } else if (cm.getJob() == 1410 && cm.getPlayer().getLevel() >= 70) {
            cm.getPlayer().changeJob(1411);
            cm.sendOk("系统已经为您转职为夜行者3转.");
        } else {
            cm.sendOk("你的当前职业条件不满足,无法为你提供转职服务!");
        }
    } else if (type == 5) {
        if ((cm.getJob() == 0 || cm.getJob() == 1000) && cm.getPlayer().getLevel() >= 10) {
            cm.getPlayer().changeJob(1500);
            cm.teachSkill(15001020, 20, 20); //闪电冲击
            cm.teachSkill(15000023, 20, 20); //光速
            cm.teachSkill(15001022, 10, 10); //元素：闪电
            cm.sendOk("系统已经为您转职为奇袭者1转.");
        } else if (cm.getJob() == 1500 && cm.getPlayer().getLevel() >= 30) {
            cm.getPlayer().changeJob(1510);
            cm.teachSkill(15101020, 20, 20); //转轮踢
            cm.teachSkill(15101021, 20, 20); //波涛汹涌
            cm.teachSkill(15100023, 10, 10); //精准拳
            cm.teachSkill(15100024, 15, 15); //体力锻炼
            cm.teachSkill(15100025, 20, 20); //雷魄
            cm.teachSkill(15101022, 10, 10); //急速拳
            cm.sendOk("系统已经为您转职为奇袭者2转.");
        } else if (cm.getJob() == 1510 && cm.getPlayer().getLevel() >= 60) {
            cm.getPlayer().changeJob(1511);
            cm.teachSkill(15111020, 20, 20); //冲天
            cm.teachSkill(15111021, 20, 20); //雷鸣
            cm.teachSkill(15111022, 20, 20); //疾风
            cm.teachSkill(15111023, 20, 20); //漩涡
            cm.teachSkill(15111024, 10, 10); //极限铠甲
            cm.teachSkill(15110025, 20, 20); //连锁达人
            cm.teachSkill(15110026, 20, 20); //雷帝
            cm.sendOk("系统已经为您转职为奇袭者3转.");
        } else if (cm.getJob() == 1511 && cm.getPlayer().getLevel() >= 100) {
            cm.getPlayer().changeJob(1512);
            cm.teachSkill(15121001, 30, 30); //毁灭
            cm.teachSkill(15121002, 30, 30); //霹雳
            cm.teachSkill(15120003, 30, 30); //台风
            cm.teachSkill(15121004, 30, 30); //聚雷
            cm.teachSkill(15121005, 20, 20); //极速领域
            cm.teachSkill(15120006, 30, 30); //拳甲专家
            cm.teachSkill(15120007, 10, 10); //刺激
            cm.teachSkill(15120008, 30, 30); //雷神
            cm.teachSkill(15121052, 1, 1); //海神降临
            cm.teachSkill(15121053, 1, 1); //守护者之荣誉
            cm.sendOk("系统已经为您转职为奇袭者4转.");
        } else {
            cm.sendOk("你的当前职业条件不满足,无法为你提供转职服务!");
        }
    }
    cm.dispose();
}

function equip(itemId) {
    var item = cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).findById(itemId);
    if (item == null) {
        cm.gainItem(itemId, 1);
    }
    //这里再查找一次 防止第一次查找的时候为null
    var item2 = cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).findById(itemId);
    //var item2 = cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIPPED).getItem(-10);
    //查找玩家背包有没有这个物品,没有就给玩家
    if (item2 != null) {
        var pos = item2.getPosition();
        Packages.server.MapleInventoryManipulator.equip(cm.getC(), pos, -10);
    }
    //如果已经装备了副手武器或者背包没有满的情况下 取下副手装备到背包
    //if(item2 !=null && cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).isFull() == false){
    //Packages.server.MapleInventoryManipulator.unequip(cm.getC(),-10,cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNextFreeSlot());
    //}
}