function start() {

if(cm.getChar().getVip() < 0) {
cm.sendOk("我是专为VIP3服务十二星座挑战")
}else if(cm.getChar().getMapId() != 910000000) {
cm.sendOk("十二星座挑战只能在自由市场才能启动")
} else {
    cm.sendSimple (""+cm.mxdmz()+"冒险岛十二星座挑战说明：\r\n\r\n每次挑战一个boss需要10E金币.#r属性装备暴率为30%#k\r\n各种材料暴率为90%[#d材料可合成物品.元宝.必成卷#k]\r\n#L0##r[十二星座挑战]-魔蝎[#d爆稀有戒指+各种材料#k]#b[血量：10E]#k#l\r\n#L1##r[十二星座挑战]-金牛[#d爆稀有项链+各种材料]#b[血量：10E]#k#l\r\n#L2##r[十二星座挑战]-绵羊[#d爆稀有耳环+各种材料]#b[血量：5 E]#k#l\r\n#L3##r[十二星座挑战]-双子[#d爆稀有腰带+各种材料]#b[血量：10E]#k#l\r\n#L4##r[十二星座挑战]-狮子[#d爆稀有鞋子+各种材料]#b[血量：80W]#k#l\r\n#L5##r[十二星座挑战]-处女[#d爆稀有手套+各种材料]#b[血量：10E]#k#l\r\n#L6##r[十二星座挑战]-天秤[#d爆稀有帽子+各种材料]#b[血量：10E]#k#l\r\n#L7##r[十二星座挑战]-射手[#d爆稀有脸饰+各种材料]#b[血量：10E]#k#l\r\n#L8##r[十二星座挑战]-水瓶[#d爆稀有面巾+各种材料]#b[血量：10E]#k#l\r\n#L9##r[十二星座挑战]-双鱼[#d爆稀有眼睛+各种材料]#b[血量：10E]#k#l\r\n#L10##r[十二星座挑战]-蘑菇[#d爆稀有玩具+各种材料]#b[血量：10E]#k#l\r\n#L11##r[十二星座挑战]-雪人[#d爆稀有披风+各种材料]#b[血量：10E]#k#l\r\n\#b#e#L111#<<副本秘籍,新人必看>>#k#n\r\n\r\n#L110#<<回自由市场>>#l");
    }
}
function action(mode, type, selection) {
        cm.dispose();
    
if (cm.getMeso() >= 100000000) {

cm.dispose();
        
    if (selection == 0) {
        cm.gainMeso(-1000000000);
        //怪物ID, HP, EXP, 数量
        cm.summonMob(9500342, 1000000000, 10000, 1);//蟹
    } else if (selection == 1) {
        cm.gainMeso(-1000000000);
        cm.summonMob(9400612, 1000000000, 10000, 1);//牛魔王
    } else if (selection == 2) {
        cm.gainMeso(-1000000000);
        cm.summonMob(9100010, 300000000, 100, 1);//黑绵羊
    } else if (selection == 3) {
        cm.gainMeso(-1000000000);
        cm.summonMob(9300380, 1000000000, 100, 1);//双子
    } else if (selection == 4) {
        cm.gainMeso(-1000000000);
        cm.summonMob(9600063, 800000, 100, 1);//狮子
    } else if (selection == 5) {
        cm.gainMeso(-1000000000);
        cm.summonMob(9400121, 1000000000, 100, 1);//处女座女老板
    } else if (selection == 6) {
        cm.gainMeso(-1000000000);
        cm.summonMob(9600000, 1000000000, 100, 1);//天平座[黄金蛋]
    } else if (selection == 7) {
        cm.gainMeso(-1000000000);
        cm.summonMob(9001002, 1000000000, 100, 1);//射手
    } else if (selection == 8) {
        cm.gainMeso(-1000000000);
        cm.summonMob(9400300, 1000000000, 100, 1);//小吃
    } else if (selection == 9) {
        cm.gainMeso(-1000000000);
        cm.summonMob(9600074, 1000000000, 100, 1);//双鱼
    } else if (selection == 10) {
        cm.gainMeso(-1000000000);
        cm.summonMob(3300008, 1000000000, 500, 1);//蘑菇
    } else if (selection == 11) {
        cm.gainMeso(-1000000000);
        cm.summonMob(3300007, 1000000000, 500, 1);//雪人
    } else if (selection == 12) {
        cm.gainMeso(-1000000);
        cm.summonMob(9300012, 1000000000, 4800, 1);//阿丽莎乐
    } else if (selection == 13) {
        cm.gainMeso(-1000000);
        cm.summonMob(9300012, 1000000000, 4800, 1);//阿丽莎乐
    } 
}

if (cm.getMeso() >= 5000000) {

cm.dispose();
        
    if (selection == 41) {
        cm.gainMeso(-1000000);
        cm.summonMob(9500167, 200000, 18000, 15);//金猪
    } else if (selection == 42) {
        cm.gainMeso(-1000000);
        cm.summonMob(6130207, 16700, 1200, 20);//猿公
    } else if (selection == 43) {
        cm.gainMeso(-1000000);
        cm.summonMob(4230102, 18500, 5500, 30);//大幽灵 
    } else if (selection == 44) {
        cm.gainMeso(-5000000);
        cm.summonMob(9001000, 18000, 450, 5);//教官
        cm.summonMob(9001001, 18000, 450, 5);
        cm.summonMob(9001002, 18000, 450, 5);
        cm.summonMob(9001003, 18000, 450, 5);
    } else if (selection == 45) {
        cm.gainMeso(-5000000);
        cm.summonMob(100100, 400, 25000, 8);//绿蜗牛 
    } else if (selection == 46) {
        cm.gainMeso(-5000000);
        cm.summonMob(7130001, 75000, 11000, 20);//猎犬
    } else if (selection == 47) {
        cm.gainMeso(-5000000);
        cm.summonMob(8140500, 15000, 17500, 10);//火焰猎犬
    } else if (selection == 48) {
        cm.gainMeso(-5000000);
        cm.summonMob(7130200, 18000, 30000, 10);//红狼
    } else if (selection == 49) {
        cm.gainMeso(-5000000);
        cm.summonMob(8140000, 5000, 10000, 8);//白狼
    } else if (selection == 50) {
        cm.gainMeso(-5000000);
        cm.summonMob(8140100, 5000, 10000, 8);//企鹅王与黑雪人 
    } else if (selection == 51) {
        cm.gainMeso(-5000000);
        cm.summonMob(8140103, 18000, 10500, 1);//寒冰半人马
    } else if (selection == 52) {
        cm.gainMeso(-5000000);
        cm.summonMob(8140101, 2000, 12000, 1);//暗黑半人马
    } else if (selection == 53) {
        cm.gainMeso(-5000000);
        cm.summonMob(8810020, 1800, 10000, 8);//蓝飞龙 
    } else if (selection == 54) {
        cm.gainMeso(-5000000);
        cm.summonMob(8810021, 1800, 10000, 8);//黑飞龙
    } else if (selection == 55) {
        cm.gainMeso(-5000000);
        cm.summonMob(8810023, 2200, 15000, 10);//邪恶双刀蜥蜴
    } else if (selection == 56) {
        cm.gainMeso(-5000000);
        cm.summonMob(9300077, 3000, 20000, 20);//骷髅龙
    } else if (selection == 57) {
        cm.gainMeso(-5000000);
        cm.summonMob(8150101, 1800, 10000, 20);//尖鼻鲨鱼 
    } else if (selection == 58) {
        cm.gainMeso(-5000000);
        cm.summonMob(8142100, 1800, 10000, 20);//致命乌贼怪 
    } else if (selection == 59) {
        cm.gainMeso(-5000000);
        cm.summonMob(8160000, 4000, 11500, 10);//时间门神 
    } else if (selection == 60) {
        cm.gainMeso(-5000000);
        cm.summonMob(8170000, 5000, 11500, 10);//黑甲凶灵
    } else if (selection == 61) {
        cm.gainMeso(-5000000);
        cm.summonMob(8141100, 6000, 12500, 10);//大海贼王
    } else if (selection == 62) {
        cm.gainMeso(-5000000);
        cm.summonMob(8143000, 6000, 12500, 10);//时之鬼王 
    } else if (selection == 100) {
        cm.gainMeso(-5000000);
        cm.gainItem(4000019,200);//绿色蜗牛壳 
    } else if (selection == 101) {
        cm.gainMeso(-5000000);
        cm.gainItem(4000000,200);//蓝色蜗牛壳  
    } else if (selection == 102) {
        cm.gainMeso(-5000000); 
        cm.gainItem(4000016,200);//红色蜗牛壳 
        
    } 
}
    
if (cm.getMeso() >= 10000000) {

cm.dispose();
        
    if (selection == 71) {
        cm.gainMeso(-10000000);
        cm.summonMob(7220000, 1800000, 50000, 1);//肯德熊
    } else if (selection == 72) {
        cm.gainMeso(-10000000);
        cm.summonMob(8220000, 1670000, 50000, 1);//艾里杰
    } else if (selection == 73) {
        cm.gainMeso(-10000000);
        cm.summonMob(3220001, 1850000, 50000, 1);//大宇
    } else if (selection == 74) {
        cm.gainMeso(-10000000);
        cm.summonMob(4220000, 1800000, 450, 1);//歇尔夫
    } else if (selection == 75) {
        cm.gainMeso(-10000000);
        cm.summonMob(5220002, 4000000, 50000, 1);//浮士德
    } else if (selection == 76) {
        cm.gainMeso(-10000000);
        cm.summonMob(6220000, 75000000, 11000, 1);//多尔
    } else if (selection == 77) {
        cm.gainMeso(-10000000);
        cm.summonMob(6220001, 150000000, 17500, 1);//朱诺
    } else if (selection == 78) {
        cm.gainMeso(-10000000);
        cm.summonMob(7220001, 1800000, 30000, 1);//九尾狐
    } else if (selection == 79) {
        cm.gainMeso(-10000000);
        cm.summonMob(7220002, 5000000, 10000, 1);//妖怪绅士
    } else if (selection == 80) {
        cm.gainMeso(-10000000);
        cm.summonMob(8220002, 5000000, 10000, 1);//吉米拉
    } else if (selection == 81) {
        cm.gainMeso(-10000000);
        cm.summonMob(8220003, 1800000, 10500, 1);//大海兽
    } else if (selection == 82) {
        cm.gainMeso(-10000000);
        cm.summonMob(9300151, 2000000, 12000, 1);//人造人
    } else if (selection == 83) {
        cm.gainMeso(-10000000);
        cm.summonMob(9300151, 1800000, 10000, 1);//愤怒人造人
    } else if (selection == 84) {
        cm.gainMeso(-10000000);
        cm.summonMob(9400014, 1800000, 10000, 1);//天狗
    } else if (selection == 111) {
cm.sendOk("#r5元冒险岛#k,十二星座副本说明.\r\n\r\n#d[魔 蝎 座]：#r血量:#d■■■■■■■■■■ \r\n#r            攻击:#d■■■■■\r\n[金 牛 座]：#r血量:#d■■■■■■■■■■ \r\n#r            攻击:#d■■■■■\r\n[绵 羊 座]：#r血量:#d■■■ \r\n#r            攻击:#d■■■ [绵羊座物理免疫]\r\n[双 子 座]：#r血量:#d■■■■■■■■■■ \r\n#r            攻击:#d■■■■■\r\n[狮 子 座]：#r血量:#d■■■■■■■ \r\n#r            攻击:#d■■■■■ [狮子座伤害固定]\r\n[处 女 座]：#r血量:#d■■■■■■■■■■ \r\n#r            攻击:#d■■■■■\r\n[天 秤 座]：#r血量:#d■■■■■■■■■■ \r\n#r            攻击:#d■■■■■\r\n[射 手 座]：#r血量:#d■■■■■■■■■■ \r\n#r            攻击:#d■■■■■\r\n[水 瓶 座]：#r血量:#d■■■■■■■■■■ \r\n#r            攻击:#d■■■■■\r\n[蘑 菇 座]：#r血量:#d■■■■■■■■■■ \r\n#r            攻击:#d■■■■■\r\n[雪 人 座]：#r血量:#d■■■■■■■■■■ \r\n#r            攻击:#d■■■■■");
cm.dispose();

    } 
    
} else {
cm.sendOk("你的钱不够呀.");
cm.dispose();
}
    if (selection == 110) {
        cm.warp(910000000, 0);
		cm.dispose();
    } 
    
}