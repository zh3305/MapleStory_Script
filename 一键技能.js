var status = 0;

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
    if (status == 0) {
        var selStr = "亲爱的#r#h ##k您好，您需要满技能吗？ \r\n#r#e#L1#一键技能全满#n#k \r\n#b出现卡NPC 请输入@ea解卡！#k";
        cm.sendSimple(selStr);
    } else if (status == 1){
                            if(cm.getJob() == 0) {
                                cm.dispose();
				cm.teachSkill(1003,30,30);
                                cm.teachSkill(80001000,30,30); 
				cm.teachSkill(1005,30,30);
                                cm.sendOk("恭喜您，技能已成功全满了!!");
		}else if (cm.getJob() >= 430 && cm.getJob() <= 434){		
//暗影双刀
               cm.teachSkill(4000000,30,30);
               cm.teachSkill(4001003,30,30);
               cm.teachSkill(4001334,30,30);
               cm.teachSkill(4001344,30,30);
               cm.teachSkill(4001005,30,30);

               cm.teachSkill(4300000,30,30);
               cm.teachSkill(4301003,30,30);
               cm.teachSkill(4301004,30,30);

               cm.teachSkill(4311002,30,30);
               cm.teachSkill(4311003,30,30);
               cm.teachSkill(4311005,30,30);
               cm.teachSkill(4311009,30,30);
               cm.teachSkill(4310006,30,30);

               cm.teachSkill(4321002,30,30);
               cm.teachSkill(4321004,30,30);
               cm.teachSkill(4320005,30,30);
               cm.teachSkill(4321006,30,30);
               cm.teachSkill(4321002,30,30);

               cm.teachSkill(4331000,30,30);
               cm.teachSkill(4330001,30,30);
               cm.teachSkill(4331002,30,30);
               cm.teachSkill(4331006,30,30);
               cm.teachSkill(4330007,30,30);
               cm.teachSkill(4330008,30,30);
               cm.teachSkill(4330009,30,30);

               cm.teachSkill(4341000,30,30);
               cm.teachSkill(4341002,30,30);
               cm.teachSkill(4341004,30,30);
               cm.teachSkill(4341006,30,30);
               cm.teachSkill(4341007,30,30);
               cm.teachSkill(4341008,30,30);
               cm.teachSkill(4341009,30,30);
               cm.teachSkill(4340010,30,30);
               cm.teachSkill(4341011,30,30);
               cm.teachSkill(4340012,30,30);
               cm.teachSkill(4340013,30,30);
        cm.sendOk("恭喜 您职业技能已满！！");
               cm.dispose();
               }else if (cm.getJob() >= 501 && cm.getJob() <= 501){		
//海盗炮手
               cm.teachSkill(5011000,30,30);
               cm.teachSkill(5011001,30,30);
               cm.teachSkill(5011002,30,30);
               cm.teachSkill(5010003,30,30);
               cm.teachSkill(5301000,30,30);
               cm.teachSkill(5301001,30,30);
               cm.teachSkill(5301002,30,30);
               cm.teachSkill(5301003,30,30);
               cm.teachSkill(5300004,30,30);
               cm.teachSkill(5300005,30,30);
               cm.teachSkill(5300008,30,30);
               cm.teachSkill(5311000,30,30);
               cm.teachSkill(5311001,30,30);
               cm.teachSkill(5311002,30,30);
               cm.teachSkill(5311003,30,30);
               cm.teachSkill(5311004,30,30);
               cm.teachSkill(5311005,30,30);
               cm.teachSkill(5310006,30,30);
               cm.teachSkill(5310007,30,30);
               cm.teachSkill(5310009,30,30);
               cm.teachSkill(5321000,30,30);
               cm.teachSkill(5321012,30,30);
               cm.teachSkill(5321001,30,30);
               cm.teachSkill(5321003,30,30);
               cm.teachSkill(5321004,30,30);
               cm.teachSkill(5320007,30,30);
               cm.teachSkill(5320008,30,30);
               cm.teachSkill(5320009,30,30);
               cm.teachSkill(5321010,30,30);
               cm.teachSkill(5321005,30,30);
               cm.teachSkill(5321006,30,30);
        cm.sendOk("恭喜 您职业技能已满！！");
               cm.dispose();
               }else if (cm.getJob() >= 530 && cm.getJob() <= 532){		
//火炮手
               cm.teachSkill(5011000,30,30);
               cm.teachSkill(5011001,30,30);
               cm.teachSkill(5011002,30,30);
               cm.teachSkill(5010003,30,30);
               cm.teachSkill(5301000,30,30);
               cm.teachSkill(5301001,30,30);
               cm.teachSkill(5301002,30,30);
               cm.teachSkill(5301003,30,30);
               cm.teachSkill(5300004,30,30);
               cm.teachSkill(5300005,30,30);
               cm.teachSkill(5300008,30,30);
               cm.teachSkill(5311000,30,30);
               cm.teachSkill(5311001,30,30);
               cm.teachSkill(5311002,30,30);
               cm.teachSkill(5311003,30,30);
               cm.teachSkill(5311004,30,30);
               cm.teachSkill(5311005,30,30);
               cm.teachSkill(5310006,30,30);
               cm.teachSkill(5310007,30,30);
               cm.teachSkill(5310009,30,30);
               cm.teachSkill(5321000,30,30);
               cm.teachSkill(5321012,30,30);
               cm.teachSkill(5321001,30,30);
               cm.teachSkill(5321003,30,30);
               cm.teachSkill(5321004,30,30);
               cm.teachSkill(5320007,30,30);
               cm.teachSkill(5320008,30,30);
               cm.teachSkill(5320009,30,30);
               cm.teachSkill(5321010,30,30);
               cm.teachSkill(5321005,30,30);
               cm.teachSkill(5321006,30,30);
        cm.sendOk("恭喜 您职业技能已满！！");
               cm.dispose();
               }else if (cm.getJob() >= 2300 && cm.getJob() <= 2312){		
//双弩精灵
               cm.teachSkill(23001000,30,30);
               cm.teachSkill(23000001,30,30);
               cm.teachSkill(23001002,30,30);
               cm.teachSkill(23000003,30,30);
               cm.teachSkill(23101000,30,30);
               cm.teachSkill(23101001,30,30);
               cm.teachSkill(23100004,30,30);
               cm.teachSkill(23101002,30,30);
               cm.teachSkill(23101003,30,30);
               cm.teachSkill(23100005,30,30);
               cm.teachSkill(23100006,30,30);
               cm.teachSkill(23100008,30,30);
               cm.teachSkill(23111000,30,30);
               cm.teachSkill(23111001,30,30);
               cm.teachSkill(23111002,30,30);
               cm.teachSkill(23111003,30,30);
               cm.teachSkill(23110006,30,30);
               cm.teachSkill(23111004,30,30);
               cm.teachSkill(23111005,30,30);
               cm.teachSkill(23111008,30,30);
               cm.teachSkill(23121000,30,30);
               cm.teachSkill(23121002,30,30);
               cm.teachSkill(23121003,30,30);
               cm.teachSkill(23120011,30,30);
               cm.teachSkill(23121004,30,30);
               cm.teachSkill(23120009,30,30);
               cm.teachSkill(23120010,30,30);
               cm.teachSkill(23120012,30,30);
               cm.teachSkill(23121005,30,30);
               cm.teachSkill(23121008,30,30);
        cm.sendOk("恭喜 您职业技能已满！！");
               cm.dispose();
               }else if (cm.getJob() >= 3100 && cm.getJob() <= 3112){		
//恶魔猎手
               cm.teachSkill(31000004,30,30);
               cm.teachSkill(31001000,30,30);
               cm.teachSkill(31001001,30,30);
               cm.teachSkill(31000002,30,30);
               cm.teachSkill(31000003,30,30);
               cm.teachSkill(31100007,30,30);
               cm.teachSkill(31101000,30,30);
               cm.teachSkill(31101001,30,30);
               cm.teachSkill(31101002,30,30);
               cm.teachSkill(31101003,30,30);
               cm.teachSkill(31100004,30,30);
               cm.teachSkill(31100006,30,30);
               cm.teachSkill(31100005,30,30);
               cm.teachSkill(31110010,30,30);
               cm.teachSkill(31111000,30,30);
               cm.teachSkill(31111001,30,30);
               cm.teachSkill(31111003,30,30);
               cm.teachSkill(31111005,30,30);
               cm.teachSkill(31111004,30,30);
               cm.teachSkill(31110006,30,30);
               cm.teachSkill(31110007,30,30);
               cm.teachSkill(31110008,30,30);
               cm.teachSkill(31110009,30,30);
               cm.teachSkill(311200130,30,30);
               cm.teachSkill(31121000,30,30);
               cm.teachSkill(31121001,30,30);
               cm.teachSkill(31121003,30,30);
               cm.teachSkill(31121006,30,30);
               cm.teachSkill(31121005,30,30);
               cm.teachSkill(31121007,30,30);
               cm.teachSkill(31121002,30,30);
               cm.teachSkill(31121004,30,30);
               cm.teachSkill(31120008,30,30);
               cm.teachSkill(31120009,30,30);
               cm.teachSkill(31120011,30,30);
        cm.sendOk("恭喜 您职业技能已满！！");
               cm.dispose();
               }else if (cm.getJob() >= 2400 && cm.getJob() <= 2412){		
//幻影
               cm.teachSkill(24001000,30,30);
               cm.teachSkill(24001001,30,30);
               cm.teachSkill(24001002,30,30);
               cm.teachSkill(24000003,30,30);
               cm.teachSkill(24101000,30,30);
               cm.teachSkill(24101001,30,30);
               cm.teachSkill(24101002,30,30);
               cm.teachSkill(24100003,30,30);
               cm.teachSkill(24100004,30,30);
               cm.teachSkill(24101005,30,30);
               cm.teachSkill(24100006,30,30);
               cm.teachSkill(24111000,30,30);
               cm.teachSkill(24111001,30,30);
               cm.teachSkill(24111002,30,30);
               cm.teachSkill(24111003,30,30);
               cm.teachSkill(24110004,30,30);
               cm.teachSkill(24111005,30,30);
               cm.teachSkill(24111006,30,30);
               cm.teachSkill(24110007,30,30);
               cm.teachSkill(24121000,30,30);
               cm.teachSkill(24121001,30,30);
               cm.teachSkill(24120002,30,30);
               cm.teachSkill(24121003,30,30);
               cm.teachSkill(24121004,30,30);
               cm.teachSkill(24121005,30,30);
               cm.teachSkill(24120006,30,30);
               cm.teachSkill(24121007,30,30);
               cm.teachSkill(24121008,30,30);
               cm.teachSkill(24121009,30,30);
               cm.teachSkill(24121010,30,30);
        cm.sendOk("恭喜 您职业技能已满！！");
               cm.dispose();
               }else if (cm.getJob() >= 5100 && cm.getJob() <= 5112){		
//米哈尔
               cm.teachSkill(51000000,30,30);
               cm.teachSkill(51000001,30,30);
               cm.teachSkill(51000002,30,30);
               cm.teachSkill(51001003,30,30);
               cm.teachSkill(51001004,30,30);

               cm.teachSkill(51100000,30,30);
               cm.teachSkill(51100001,30,30);
               cm.teachSkill(51100002,30,30);
               cm.teachSkill(51101003,30,30);
               cm.teachSkill(51101004,30,30);
               cm.teachSkill(51101005,30,30);
               cm.teachSkill(51101006,30,30);

               cm.teachSkill(51110000,30,30);
               cm.teachSkill(51110001,30,30);
               cm.teachSkill(51110002,30,30);
               cm.teachSkill(51111003,30,30);
               cm.teachSkill(51111004,30,30);
               cm.teachSkill(51111005,30,30);
               cm.teachSkill(51111006,30,30);
               cm.teachSkill(51111007,30,30);

               cm.teachSkill(51120000,30,30);
               cm.teachSkill(51120001,30,30);
               cm.teachSkill(51120002,30,30);
               cm.teachSkill(51120003,30,30);
               cm.teachSkill(51121004,30,30);
               cm.teachSkill(51121005,30,30);
               cm.teachSkill(51121006,30,30);
               cm.teachSkill(51121007,30,30);
               cm.teachSkill(51121008,30,30);
        cm.sendOk("恭喜 您职业技能已满！！");
               cm.dispose();
               }else if (cm.getJob() >= 508 && cm.getJob() <= 572){		
//龙的传人
               cm.teachSkill(5080000,30,30);
               cm.teachSkill(5081002,30,30);
               cm.teachSkill(5081003,30,30);
               cm.teachSkill(5080004,30,30);
               cm.teachSkill(5081001,30,30);
               cm.teachSkill(5081005,30,30);
               cm.teachSkill(5700000,30,30);
               cm.teachSkill(5701005,30,30);
               cm.teachSkill(5700004,30,30);
               cm.teachSkill(5701006,30,30);
               cm.teachSkill(5701007,30,30);
               cm.teachSkill(5701001,30,30);
               cm.teachSkill(5700003,30,30);
               cm.teachSkill(5700005,30,30);
               cm.teachSkill(5711001,30,30);
               cm.teachSkill(5711002,30,30);
               cm.teachSkill(5710005,30,30);
               cm.teachSkill(5711006,30,30);
               cm.teachSkill(5711011,30,30);
               cm.teachSkill(5711000,30,30);
               cm.teachSkill(5710004,30,30);
               cm.teachSkill(5721000,30,30);
               cm.teachSkill(5721001,30,30);
               cm.teachSkill(5721002,30,30);
               cm.teachSkill(5721003,30,30);
               cm.teachSkill(5721004,30,30);
               cm.teachSkill(5720005,30,30); 
               cm.teachSkill(5721006,30,30);
               cm.teachSkill(5721007,30,30);
               cm.teachSkill(5720008,30,30);
               cm.teachSkill(5721009,30,30);
               cm.teachSkill(5720012,30,30);
        cm.sendOk("恭喜 您职业技能已满！！");
               cm.dispose();
               }else if (cm.getJob() >= 3500 && cm.getJob() <= 3512){		
//机械师
               cm.teachSkill(35111004,30,30);
               cm.teachSkill(35100011,30,30);
               cm.teachSkill(35121007,30,30);
               cm.teachSkill(35121008,30,30);
               cm.teachSkill(35101007,30,30);
               cm.teachSkill(35101004,30,30);
               cm.teachSkill(35101005,30,30);
               cm.teachSkill(35001002,30,30);
               cm.teachSkill(35001004,30,30);
               cm.teachSkill(35001001,30,30);
               cm.teachSkill(35001003,30,30);
               cm.teachSkill(35101003,30,30);
               cm.teachSkill(35100000,30,30);
               cm.teachSkill(35101006,30,30);
               cm.teachSkill(35100008,30,30);
               cm.teachSkill(35111015,30,30);
               cm.teachSkill(35110014,30,30);
               cm.teachSkill(35111001,30,30);
               cm.teachSkill(35111004,30,30);
               cm.teachSkill(35111002,30,30);
               cm.teachSkill(35111011,30,30);
               cm.teachSkill(35111005,30,30);
               cm.teachSkill(35111013,30,30);
               cm.teachSkill(35120000,30,30);
               cm.teachSkill(35121005,30,30);
               cm.teachSkill(35121012,30,30);
               cm.teachSkill(35121006,30,30);
               cm.teachSkill(35121003,30,30);
               cm.teachSkill(35121009,30,30);
               cm.teachSkill(35121010,30,30);
               cm.teachSkill(35120001,30,30);
        cm.sendOk("恭喜 您职业技能已满！！");
               cm.dispose();
               }else if (cm.getJob() >= 3300 && cm.getJob() <= 3312){		
//豹弩游侠
               cm.teachSkill(33001000,30,30);
               cm.teachSkill(33001001,30,30);
               cm.teachSkill(33001002,30,30);
               cm.teachSkill(33001003,30,30);

               cm.teachSkill(33100000,30,30);
               cm.teachSkill(33101001,30,30);
               cm.teachSkill(33101002,30,30);
               cm.teachSkill(33101003,30,30);
               cm.teachSkill(33101004,30,30);
               cm.teachSkill(33101005,30,30);
               cm.teachSkill(33100009,30,30);
               cm.teachSkill(33100010,30,30);
               
               cm.teachSkill(33110000,30,30);
               cm.teachSkill(33111001,30,30);
               cm.teachSkill(33111002,30,30);
               cm.teachSkill(33111003,30,30);
               cm.teachSkill(33111004,30,30);
               cm.teachSkill(33111005,30,30);
               cm.teachSkill(33111006,30,30);
               cm.teachSkill(33111007,30,30);

               cm.teachSkill(33121009,30,30);
               cm.teachSkill(33121002,30,30);
               cm.teachSkill(33121001,30,30);
               cm.teachSkill(33120000,30,30);
               cm.teachSkill(33121004,30,30);
               cm.teachSkill(33121005,30,30);
               cm.teachSkill(33121007,30,30);
               cm.teachSkill(33120010,30,30);
               cm.teachSkill(33120011,30,30);
               cm.teachSkill(32121008,30,30);
        cm.sendOk("恭喜 您职业技能已满！！");
               cm.dispose();
               }else if (cm.getJob() >= 3200 && cm.getJob() <= 3212){		
//唤灵斗师
               cm.teachSkill(32001000,30,30);
               cm.teachSkill(32001001,30,30);
               cm.teachSkill(32001002,30,30);
               cm.teachSkill(32001003,30,30);

               cm.teachSkill(32001000,30,30);
               cm.teachSkill(32101001,30,30);
               cm.teachSkill(32111012,30,30);
               cm.teachSkill(32101003,30,30);

               cm.teachSkill(32101000,30,30);
               cm.teachSkill(32101001,30,30);
               cm.teachSkill(32101003,30,30);
               cm.teachSkill(32101004,30,30);
               cm.teachSkill(32101005,30,30);
               cm.teachSkill(32100006,30,30);
               cm.teachSkill(32100007,30,30);

               cm.teachSkill(32111002,30,30);
               cm.teachSkill(32111003,30,30);
               cm.teachSkill(32110001,30,30);
               cm.teachSkill(32111012,30,30);
               cm.teachSkill(32110000,30,30);
               cm.teachSkill(32111004,30,30);
               cm.teachSkill(32111005,30,30);
               cm.teachSkill(32111006,30,30);
               cm.teachSkill(32111010,30,30);
               cm.teachSkill(32111014,30,30);

               cm.teachSkill(32121002,30,30);
               cm.teachSkill(32121003,30,30);
               cm.teachSkill(32121004,30,30);
               cm.teachSkill(32120000,30,30);
               cm.teachSkill(32120001,30,30);
               cm.teachSkill(32121006,30,30);
               cm.teachSkill(32121007,30,30);
               cm.teachSkill(32121008,30,30);
               cm.teachSkill(32120009,30,30);
        cm.sendOk("恭喜 您职业技能已满！！");
               cm.dispose();
               }else if (cm.getJob() >= 2100 && cm.getJob() <= 2112){		
//战神
               cm.teachSkill(21000002,30,30);
               cm.teachSkill(21000000,30,30);
               cm.teachSkill(21001003,30,30);
               cm.teachSkill(21001001,30,30);
               cm.teachSkill(21000004,30,30);
               cm.teachSkill(21100000,30,30);
               cm.teachSkill(21100001,30,30);
               cm.teachSkill(21101006,30,30);
               cm.teachSkill(21101003,30,30);
               cm.teachSkill(21100005,30,30);
               cm.teachSkill(21100007,30,30);
               cm.teachSkill(21100008,30,30);
               cm.teachSkill(21100010,30,30);
               cm.teachSkill(21110002,30,30);
               cm.teachSkill(21111009,30,30);
               cm.teachSkill(21110000,30,30);
               cm.teachSkill(21111001,30,30);
               cm.teachSkill(21110003,30,30);
               cm.teachSkill(21110010,30,30);
               cm.teachSkill(21110006,30,30);
               cm.teachSkill(21110011,30,30);
               cm.teachSkill(21121000,30,30);
               cm.teachSkill(21121008,30,30);
               cm.teachSkill(21120001,30,30);
               cm.teachSkill(21120002,30,30);
               cm.teachSkill(21120004,30,30);
               cm.teachSkill(21121003,30,30);
               cm.teachSkill(21120005,30,30);
               cm.teachSkill(21120007,30,30);
               cm.teachSkill(21120006,30,30);
               cm.teachSkill(21120011,30,30);
               cm.teachSkill(21120012,30,30);
               cm.teachSkill(21111012,30,30);
               cm.teachSkill(21100002,30,30);
        cm.sendOk("恭喜 您职业技能已满！！");
               cm.dispose();
               }else if (cm.getJob() >= 2200 && cm.getJob() <= 2218){		
//龙神
               cm.teachSkill(22000000,30,30);
               cm.teachSkill(22001001,30,30);
               cm.teachSkill(22101000,30,30);
               cm.teachSkill(22101001,30,30);
               cm.teachSkill(22111000,30,30);
               cm.teachSkill(22111001,30,30);
               cm.teachSkill(22121000,30,30);
               cm.teachSkill(22120001,30,30);
               cm.teachSkill(22120002,30,30);
               cm.teachSkill(22131000,30,30);
               cm.teachSkill(22131001,30,30);
               cm.teachSkill(22131002,30,30);
               cm.teachSkill(22140000,30,30);
               cm.teachSkill(22141001,30,30);
               cm.teachSkill(22141002,30,30);
               cm.teachSkill(22141004,30,30);
               cm.teachSkill(22150000,30,30);
               cm.teachSkill(22151001,30,30);
               cm.teachSkill(22151002,30,30);
               cm.teachSkill(22151003,30,30);
               cm.teachSkill(22150004,30,30);
               cm.teachSkill(22160000,30,30);
               cm.teachSkill(22161001,30,30);
               cm.teachSkill(22161002,30,30);
               cm.teachSkill(22161003,30,30);
               cm.teachSkill(22161005,30,30);
               cm.teachSkill(22161004,30,30);
               cm.teachSkill(22171000,30,30);
               cm.teachSkill(22171004,30,30);
               cm.teachSkill(22170001,30,30);
               cm.teachSkill(22171002,30,30);
               cm.teachSkill(22171003,30,30);
               cm.teachSkill(22181000,30,30);
               cm.teachSkill(22181001,30,30);
               cm.teachSkill(22181002,30,30);
               cm.teachSkill(22181003,30,30);
               cm.teachSkill(22181004,30,30);
        cm.sendOk("恭喜 您职业技能已满！！");
               cm.dispose();
               }else if (cm.getJob() >= 100 && cm.getJob() <= 100){		
//战士
               cm.teachSkill(1001003,30,30);
               cm.teachSkill(1001004,30,30);
               cm.teachSkill(1001005,30,30);
               cm.teachSkill(1000006,30,30);
        cm.sendOk("恭喜 您职业技能已满！！");
               cm.dispose();
               }else if (cm.getJob() >= 110 && cm.getJob() <= 112){		
//剑客
               cm.teachSkill(1001003,30,30);
               cm.teachSkill(1001004,30,30);
               cm.teachSkill(1001005,30,30);
               cm.teachSkill(1000006,30,30);

               cm.teachSkill(1100000,30,30);
               cm.teachSkill(1100002,30,30);
               cm.teachSkill(1101004,30,30);
               cm.teachSkill(1101006,30,30);
               cm.teachSkill(1101007,30,30);
               cm.teachSkill(1101008,30,30);
               cm.teachSkill(1100009,30,30);
               cm.teachSkill(1101010,30,30);

               cm.teachSkill(1110000,30,30);
               cm.teachSkill(1111002,30,30);
               cm.teachSkill(1111003,30,30);
               cm.teachSkill(1111005,30,30);
               cm.teachSkill(1111007,30,30);
               cm.teachSkill(1111008,30,30);
               cm.teachSkill(1111010,30,30);
               cm.teachSkill(1110009,30,30);

               cm.teachSkill(1120003,30,30);
               cm.teachSkill(1121000,30,30);
               cm.teachSkill(1121001,30,30);
               cm.teachSkill(1121002,30,30);
               cm.teachSkill(1121006,30,30);
               cm.teachSkill(1121008,30,30);
               cm.teachSkill(1121010,30,30);
               cm.teachSkill(1120012,30,30);
               cm.teachSkill(1120013,30,30);
               cm.teachSkill(1121011,30,30);
        cm.sendOk("恭喜 您职业技能已满！！");
               cm.dispose();
               }else if (cm.getJob() >= 120 && cm.getJob() <= 122){		
//准骑士
               cm.teachSkill(1001003,30,30);
               cm.teachSkill(1001004,30,30);
               cm.teachSkill(1001005,30,30);
               cm.teachSkill(1000006,30,30);

               cm.teachSkill(1200000,30,30);
               cm.teachSkill(1200002,30,30);
               cm.teachSkill(1201004,30,30);
               cm.teachSkill(1201006,30,30);
               cm.teachSkill(1201006,30,30);
               cm.teachSkill(1201007,30,30);
               cm.teachSkill(1201008,30,30);
               cm.teachSkill(1200009,30,30);
               cm.teachSkill(1201010,30,30);

               cm.teachSkill(1210001,30,30);
               cm.teachSkill(1211002,30,30);
               cm.teachSkill(1211004,30,30);
               cm.teachSkill(1211006,30,30);
               cm.teachSkill(1211008,30,30);
               cm.teachSkill(1211011,30,30);
               cm.teachSkill(1211009,30,30);
               cm.teachSkill(1211010,30,30);

               cm.teachSkill(1220005,30,30);
               cm.teachSkill(1220006,30,30);
               cm.teachSkill(1220010,30,30);
               cm.teachSkill(1221000,30,30);
               cm.teachSkill(1221002,30,30);
               cm.teachSkill(1221004,30,30);
               cm.teachSkill(1221007,30,30);
               cm.teachSkill(1221009,30,30);
               cm.teachSkill(1220013,30,30);
               cm.teachSkill(1221011,30,30);
               cm.teachSkill(1221012,30,30);
        cm.sendOk("恭喜 您职业技能已满！！");
               cm.dispose();
               }else if (cm.getJob() >= 130 && cm.getJob() <= 132){		
//枪战士
               cm.teachSkill(1001003,30,30);
               cm.teachSkill(1001004,30,30);
               cm.teachSkill(1001005,30,30);
               cm.teachSkill(1000006,30,30);

               cm.teachSkill(1300000,30,30);
               cm.teachSkill(1300002,30,30);
               cm.teachSkill(1301004,30,30);
               cm.teachSkill(1301006,30,30);
               cm.teachSkill(1201006,30,30);
               cm.teachSkill(1301007,30,30);
               cm.teachSkill(1301008,30,30);
               cm.teachSkill(1300009,30,30);
               cm.teachSkill(1301010,30,30);

               cm.teachSkill(1310000,30,30);
               cm.teachSkill(1311001,30,30);
               cm.teachSkill(1311003,30,30);
               cm.teachSkill(1311005,30,30);
               cm.teachSkill(1311006,30,30);
               cm.teachSkill(1311007,30,30);
               cm.teachSkill(1211009,30,30);
               cm.teachSkill(1211010,30,30);
               cm.teachSkill(1220005,30,30);
               cm.teachSkill(1220006,30,30);
               cm.teachSkill(1311006,30,30);
               cm.teachSkill(1311008,30,30);
               cm.teachSkill(1310009,30,30);

               cm.teachSkill(1320006,30,30);
               cm.teachSkill(1320008,30,30);
               cm.teachSkill(1320009,30,30);
               cm.teachSkill(1321000,30,30);
               cm.teachSkill(1321001,30,30);
               cm.teachSkill(1321002,30,30);
               cm.teachSkill(1321003,30,30);
               cm.teachSkill(1321007,30,30);
               cm.teachSkill(1321010,30,30);
               cm.teachSkill(1320011,30,30);
               cm.teachSkill(1321012,30,30);
        cm.sendOk("恭喜 您职业技能已满！！");
               cm.dispose();
               }else if (cm.getJob() >= 200 && cm.getJob() <= 200){		
//魔法师
               cm.teachSkill(2001002,30,30);
               cm.teachSkill(2001003,30,30);
               cm.teachSkill(2001004,30,30);
               cm.teachSkill(2001005,30,30);
               cm.teachSkill(2000006,30,30);
        cm.sendOk("恭喜 您职业技能已满！！");
               cm.dispose();
               }else if (cm.getJob() >= 210 && cm.getJob() <= 212){		
//火毒魔法师
               cm.teachSkill(2001002,30,30);
               cm.teachSkill(2001003,30,30);
               cm.teachSkill(2001004,30,30);
               cm.teachSkill(2001005,30,30);
               cm.teachSkill(2000006,30,30);

               cm.teachSkill(2100000,30,30);
               cm.teachSkill(2101001,30,30);
               cm.teachSkill(2101002,30,30);
               cm.teachSkill(2101003,30,30);
               cm.teachSkill(2101004,30,30);
               cm.teachSkill(2101005,30,30);
               cm.teachSkill(2100006,30,30);
               cm.teachSkill(2100007,30,30);

               cm.teachSkill(2110000,30,30);
               cm.teachSkill(2110001,30,30);
               cm.teachSkill(2111002,30,30);
               cm.teachSkill(2111003,30,30);
               cm.teachSkill(2111006,30,30);
               cm.teachSkill(2111004,30,30);
               cm.teachSkill(2111005,30,30);
               cm.teachSkill(2111007,30,30);
               cm.teachSkill(2111008,30,30);
               cm.teachSkill(2110009,30,30);

               cm.teachSkill(2121000,30,30);
               cm.teachSkill(2121001,30,30);
               cm.teachSkill(2121003,30,30);
               cm.teachSkill(2121004,30,30);
               cm.teachSkill(2121005,30,30);
               cm.teachSkill(2121006,30,30);
               cm.teachSkill(2121007,30,30);
               cm.teachSkill(2121008,30,30);
               cm.teachSkill(2121009,30,30);
               cm.teachSkill(2120010,30,30);
        cm.sendOk("恭喜 您职业技能已满！！");
               cm.dispose();
               }else if (cm.getJob() >= 220 && cm.getJob() <= 222){		
//冰雷魔法师
               cm.teachSkill(2001002,30,30);
               cm.teachSkill(2001003,30,30);
               cm.teachSkill(2001004,30,30);
               cm.teachSkill(2001005,30,30);
               cm.teachSkill(2000006,30,30);

               cm.teachSkill(2200000,30,30);
               cm.teachSkill(2201001,30,30);
               cm.teachSkill(2201002,30,30);
               cm.teachSkill(2201003,30,30);
               cm.teachSkill(2201004,30,30);
               cm.teachSkill(2201005,30,30);
               cm.teachSkill(2200006,30,30);
               cm.teachSkill(2200007,30,30);

               cm.teachSkill(2210000,30,30);
               cm.teachSkill(2210001,30,30);
               cm.teachSkill(2211002,30,30);
               cm.teachSkill(2211003,30,30);
               cm.teachSkill(2211006,30,30);
               cm.teachSkill(2211004,30,30);
               cm.teachSkill(2211005,30,30);
               cm.teachSkill(2211007,30,30);
               cm.teachSkill(2211008,30,30);
               cm.teachSkill(2210009,30,30);

               cm.teachSkill(2221000,30,30);
               cm.teachSkill(2221001,30,30);
               cm.teachSkill(2221003,30,30);
               cm.teachSkill(2221004,30,30);
               cm.teachSkill(2221005,30,30);
               cm.teachSkill(2221006,30,30);
               cm.teachSkill(2221007,30,30);
               cm.teachSkill(2221008,30,30);
               cm.teachSkill(2221009,30,30);
               cm.teachSkill(2220010,30,30);
        cm.sendOk("恭喜 您职业技能已满！！");
               cm.dispose();
               }else if (cm.getJob() >= 230 && cm.getJob() <= 232){		
//神圣魔法师
               cm.teachSkill(2001002,30,30);
               cm.teachSkill(2001003,30,30);
               cm.teachSkill(2001004,30,30);
               cm.teachSkill(2001005,30,30);
               cm.teachSkill(2000006,30,30);

               cm.teachSkill(2300000,30,30);
               cm.teachSkill(2301001,30,30);
               cm.teachSkill(2301002,30,30);
               cm.teachSkill(2301003,30,30);
               cm.teachSkill(2301004,30,30);
               cm.teachSkill(2301005,30,30);
               cm.teachSkill(2300006,30,30);
               cm.teachSkill(2300007,30,30);

               cm.teachSkill(2311001,30,30);
               cm.teachSkill(2311002,30,30);
               cm.teachSkill(2311003,30,30);
               cm.teachSkill(2311006,30,30);
               cm.teachSkill(2311004,30,30);
               cm.teachSkill(2311005,30,30);
               cm.teachSkill(2311007,30,30);
               cm.teachSkill(2310008,30,30);
               cm.teachSkill(2311009,30,30);
               cm.teachSkill(2311010,30,30);

               cm.teachSkill(2321000,30,30);
               cm.teachSkill(2321001,30,30);
               cm.teachSkill(2321003,30,30);
               cm.teachSkill(2321004,30,30);
               cm.teachSkill(2321005,30,30);
               cm.teachSkill(2321006,30,30);
               cm.teachSkill(2321007,30,30);
               cm.teachSkill(2321008,30,30);
               cm.teachSkill(2321009,30,30);
               cm.teachSkill(2321010,30,30);
               cm.teachSkill(2320011,30,30);
        cm.sendOk("恭喜 您职业技能已满！！");
               cm.dispose();
               }else if (cm.getJob() >= 300 && cm.getJob() <= 300){		
//弓箭手
               cm.teachSkill(3000001,30,30);
               cm.teachSkill(3000002,30,30);
               cm.teachSkill(3001004,30,30);
               cm.teachSkill(3001005,30,30);
        cm.sendOk("恭喜 您职业技能已满！！");
               cm.dispose();
               }else if (cm.getJob() >= 310 && cm.getJob() <= 312){		
//猎人
               cm.teachSkill(3000001,30,30);
               cm.teachSkill(3000002,30,30);
               cm.teachSkill(3001004,30,30);
               cm.teachSkill(3001005,30,30);

               cm.teachSkill(3100000,30,30);
               cm.teachSkill(3100001,30,30);
               cm.teachSkill(3101002,30,30);
               cm.teachSkill(3101003,30,30);
               cm.teachSkill(3101004,30,30);
               cm.teachSkill(3101005,30,30);
               cm.teachSkill(3100006,30,30);
               cm.teachSkill(3101007,30,30);

               cm.teachSkill(3111000,30,30);
               cm.teachSkill(3110001,30,30);
               cm.teachSkill(3111002,30,30);
               cm.teachSkill(3111003,30,30);
               cm.teachSkill(3111004,30,30);
               cm.teachSkill(3111005,30,30);
               cm.teachSkill(3111006,30,30);
               cm.teachSkill(3110007,30,30);
               cm.teachSkill(3111008,30,30);

               cm.teachSkill(3120005,30,30);
               cm.teachSkill(3120006,30,30);
               cm.teachSkill(3121000,30,30);
               cm.teachSkill(3121002,30,30);
               cm.teachSkill(3121004,30,30);
               cm.teachSkill(3121007,30,30);
               cm.teachSkill(3120008,30,30);
               cm.teachSkill(3121009,30,30);
               cm.teachSkill(3120010,30,30);
               cm.teachSkill(3120011,30,30);
               cm.teachSkill(3120012,30,30);
        cm.sendOk("恭喜 您职业技能已满！！");
               cm.dispose();
               }else if (cm.getJob() >= 320 && cm.getJob() <= 322){		
//弩弓手
               cm.teachSkill(3000001,30,30);
               cm.teachSkill(3000002,30,30);
               cm.teachSkill(3001004,30,30);
               cm.teachSkill(3001005,30,30);

               cm.teachSkill(3200000,30,30);
               cm.teachSkill(3200001,30,30);
               cm.teachSkill(3201002,30,30);
               cm.teachSkill(3201003,30,30);
               cm.teachSkill(3201004,30,30);
               cm.teachSkill(3201005,30,30);
               cm.teachSkill(3200006,30,30);
               cm.teachSkill(3201007,30,30);

               cm.teachSkill(3211000,30,30);
               cm.teachSkill(3210001,30,30);
               cm.teachSkill(3211002,30,30);
               cm.teachSkill(3211003,30,30);
               cm.teachSkill(3211004,30,30);
               cm.teachSkill(3211005,30,30);
               cm.teachSkill(3211006,30,30);
               cm.teachSkill(3210007,30,30);
               cm.teachSkill(3211008,30,30);

               cm.teachSkill(3220004,30,30);
               cm.teachSkill(3220005,30,30);
               cm.teachSkill(3221000,30,30);
               cm.teachSkill(3221001,30,30);
               cm.teachSkill(3221002,30,30);
               cm.teachSkill(3221006,30,30);
               cm.teachSkill(3221007,30,30);
               cm.teachSkill(3221008,30,30);
               cm.teachSkill(3220009,30,30);
               cm.teachSkill(3220010,30,30);
               cm.teachSkill(3220012,30,30);
        cm.sendOk("恭喜 您职业技能已满！！");
               cm.dispose();
               }else if (cm.getJob() >= 400 && cm.getJob() <= 400){		
//飞侠
               cm.teachSkill(4000000,30,30);
               cm.teachSkill(4001003,30,30);
               cm.teachSkill(4001334,30,30);
               cm.teachSkill(4001344,30,30);
               cm.teachSkill(4001005,30,30);
        cm.sendOk("恭喜 您职业技能已满！！");
               cm.dispose();
               }else if (cm.getJob() >= 410 && cm.getJob() <= 412){		
//刺客
               cm.teachSkill(4000000,30,30);
               cm.teachSkill(4001003,30,30);
               cm.teachSkill(4001334,30,30);
               cm.teachSkill(4001344,30,30);
               cm.teachSkill(4001005,30,30);

               cm.teachSkill(4100000,30,30);
               cm.teachSkill(4100001,30,30);
               cm.teachSkill(4101003,30,30);
               cm.teachSkill(4100007,30,30);
               cm.teachSkill(4101008,30,30);
               cm.teachSkill(4101009,30,30);
               cm.teachSkill(4101010,30,30);

               cm.teachSkill(4111002,30,30);
               cm.teachSkill(4111003,30,30);
               cm.teachSkill(4111007,30,30);
               cm.teachSkill(4110008,30,30);
               cm.teachSkill(4111009,30,30);
               cm.teachSkill(4111010,30,30);
               cm.teachSkill(4110011,30,30);
               cm.teachSkill(4110012,30,30);
               cm.teachSkill(4111013,30,30);
               cm.teachSkill(4110014,30,30);

               cm.teachSkill(4121000,30,30);
               cm.teachSkill(4120002,30,30);
               cm.teachSkill(4121003,30,30);
               cm.teachSkill(4120011,30,30);
               cm.teachSkill(4120012,30,30);
               cm.teachSkill(4121013,30,30);
               cm.teachSkill(4121014,30,30);
               cm.teachSkill(4121015,30,30);
               cm.teachSkill(4121016,30,30);
               cm.teachSkill(4121009,30,30);
        cm.sendOk("恭喜 您职业技能已满！！");
               cm.dispose();
               }else if (cm.getJob() >= 420 && cm.getJob() <= 422){		
//刀客
               cm.teachSkill(4000000,30,30);
               cm.teachSkill(4001003,30,30);
               cm.teachSkill(4001334,30,30);
               cm.teachSkill(4001344,30,30);
               cm.teachSkill(4001005,30,30);

               cm.teachSkill(4200000,30,30);
               cm.teachSkill(4201002,30,30);
               cm.teachSkill(4201004,30,30);
               cm.teachSkill(4201005,30,30);
               cm.teachSkill(4201008,30,30);
               cm.teachSkill(4201009,30,30);
               cm.teachSkill(4201011,30,30);
               cm.teachSkill(4200007,30,30);
               cm.teachSkill(4200010,30,30);

               cm.teachSkill(4211002,30,30);
               cm.teachSkill(4211003,30,30);
               cm.teachSkill(4211008,30,30);
               cm.teachSkill(4210010,30,30);
               cm.teachSkill(4211011,30,30);
               cm.teachSkill(4210012,30,30);
               cm.teachSkill(4210013,30,30);
               cm.teachSkill(4211006,30,30);
               cm.teachSkill(4211007,30,30);

               cm.teachSkill(4221000,30,30);
               cm.teachSkill(4221001,30,30);
               cm.teachSkill(4220002,30,30);
               cm.teachSkill(4221006,30,30);
               cm.teachSkill(4221007,30,30);
               cm.teachSkill(4221010,30,30);
               cm.teachSkill(4221010,30,30);
               cm.teachSkill(4220012,30,30);
               cm.teachSkill(4220011,30,30);
               cm.teachSkill(4121009,30,30);
               cm.teachSkill(4221008,30,30);
        cm.sendOk("恭喜 您职业技能已满！！");
               cm.dispose();
               }else if (cm.getJob() >= 1100 && cm.getJob() <= 1112){		
//魂骑士
               cm.teachSkill(11001001,30,30);
               cm.teachSkill(11001002,30,30);
               cm.teachSkill(11001003,30,30);
               cm.teachSkill(11001004,30,30);
               cm.teachSkill(11000005,30,30);

               cm.teachSkill(11100000,30,30);
               cm.teachSkill(11101001,30,30);
               cm.teachSkill(11101002,30,30);
               cm.teachSkill(11101003,30,30);
               cm.teachSkill(11101004,30,30);
               cm.teachSkill(11101005,30,30);
               cm.teachSkill(11101006,30,30);
               cm.teachSkill(11100007,30,30);

               cm.teachSkill(11110000,30,30);
               cm.teachSkill(11111001,30,30);
               cm.teachSkill(11111002,30,30);
               cm.teachSkill(11111003,30,30);
               cm.teachSkill(11111004,30,30);
               cm.teachSkill(11110005,30,30);
               cm.teachSkill(11111006,30,30);
               cm.teachSkill(11111007,30,30);
               cm.teachSkill(11111008,30,30);
        cm.sendOk("恭喜 您职业技能已满！！");
               cm.dispose();

               }else if (cm.getJob() >= 1210 && cm.getJob() <= 1212){		
//炎术士
               cm.teachSkill(12001001,30,30);
               cm.teachSkill(12001002,30,30);
               cm.teachSkill(12001003,30,30);
               cm.teachSkill(12001004,30,30);
               cm.teachSkill(12000005,30,30);

               cm.teachSkill(12101000,30,30);
               cm.teachSkill(12101001,30,30);
               cm.teachSkill(12101002,30,30);
               cm.teachSkill(12101003,30,30);
               cm.teachSkill(12101004,30,30);
               cm.teachSkill(12101005,30,30);
               cm.teachSkill(12101006,30,30);
               cm.teachSkill(12100007,30,30);
               cm.teachSkill(12100008,30,30);

               cm.teachSkill(12110000,30,30);
               cm.teachSkill(12110001,30,30);
               cm.teachSkill(12111002,30,30);
               cm.teachSkill(12111003,30,30);
               cm.teachSkill(12111004,30,30);
               cm.teachSkill(12111005,30,30);
               cm.teachSkill(12111006,30,30);
               cm.teachSkill(12111007,30,30);

        cm.sendOk("恭喜 您职业技能已满！！");
               cm.dispose();
               }else if (cm.getJob() >= 1310 && cm.getJob() <= 1312){		
//风灵使者
               cm.teachSkill(13000000,30,30);
               cm.teachSkill(13000001,30,30);
               cm.teachSkill(13001003,30,30);
               cm.teachSkill(13001004,30,30);
               cm.teachSkill(12000005,30,30);

               cm.teachSkill(13100000,30,30);
               cm.teachSkill(13101001,30,30);
               cm.teachSkill(13101002,30,30);
               cm.teachSkill(13101003,30,30);
               cm.teachSkill(13101004,30,30);
               cm.teachSkill(13101005,30,30);
               cm.teachSkill(13101006,30,30);
               cm.teachSkill(13101007,30,30);
               cm.teachSkill(13100008,30,30);

               cm.teachSkill(13111000,30,30);
               cm.teachSkill(13111001,30,30);
               cm.teachSkill(13111002,30,30);
               cm.teachSkill(13110003,30,30);
               cm.teachSkill(13111004,30,30);
               cm.teachSkill(13111005,30,30);
               cm.teachSkill(13111006,30,30);
               cm.teachSkill(13111007,30,30);
               cm.teachSkill(13110008,30,30);
               cm.teachSkill(13110009,30,30);
        cm.sendOk("恭喜 您职业技能已满！！");
               cm.dispose();

               }else if (cm.getJob() >= 1400 && cm.getJob() <= 1412){		
//夜行者
               cm.teachSkill(14000000,30,30);
               cm.teachSkill(14001003,30,30);
               cm.teachSkill(14001004,30,30);
               cm.teachSkill(14001005,30,30);
               cm.teachSkill(14001007,30,30);

               cm.teachSkill(14100000,30,30);
               cm.teachSkill(14100001,30,30);
               cm.teachSkill(14101002,30,30);
               cm.teachSkill(14101004,30,30);
               cm.teachSkill(14101006,30,30);
               cm.teachSkill(14101008,30,30);
               cm.teachSkill(14101009,30,30);
               cm.teachSkill(14100010,30,30);

               cm.teachSkill(14111000,30,30);
               cm.teachSkill(14111001,30,30);
               cm.teachSkill(14110004,30,30);
               cm.teachSkill(14110009,30,30);
               cm.teachSkill(14110011,30,30);
               cm.teachSkill(14111005,30,30);
               cm.teachSkill(14111006,30,30);
               cm.teachSkill(14111007,30,30);
               cm.teachSkill(14111008,30,30);
               cm.teachSkill(14111010,30,30);
        cm.sendOk("恭喜 您职业技能已满！！");
               cm.dispose();
               }else if (cm.getJob() >= 1510 && cm.getJob() <= 1512){		
//奇袭者
               cm.teachSkill(15000000,30,30);
               cm.teachSkill(15001002,30,30);
               cm.teachSkill(15001003,30,30);
               cm.teachSkill(15001004,30,30);
               cm.teachSkill(15000006,30,30);
               cm.teachSkill(15000008,30,30);

               cm.teachSkill(15100001,30,30);
               cm.teachSkill(15101002,30,30);
               cm.teachSkill(15101003,30,30);
               cm.teachSkill(15100004,30,30);
               cm.teachSkill(15101005,30,30);
               cm.teachSkill(15101008,30,30);
               cm.teachSkill(15101010,30,30);
               cm.teachSkill(15100009,30,30);

               cm.teachSkill(15110009,30,30);
               cm.teachSkill(15110010,30,30);
               cm.teachSkill(15111004,30,30);
               cm.teachSkill(15111005,30,30);
               cm.teachSkill(15111006,30,30);
               cm.teachSkill(15111007,30,30);
               cm.teachSkill(15111008,30,30);
               cm.teachSkill(15111011,30,30);
               cm.teachSkill(15111012,30,30);
        cm.sendOk("恭喜 您职业技能已满！！");
               cm.dispose();
		}
	}
}
