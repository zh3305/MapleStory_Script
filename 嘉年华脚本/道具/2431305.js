/*：
 脚本功能：武器箱子（转职赠送）
 */


function start() {
    if (im.getSpace(1) >= 7 && im.getSpace(2) >= 4 && im.getLevel() >= 10) {
        im.gainItem(2431305, -1);
        Gift(im.getJob());
        im.playerMessage(-1, "送给你道具，请你好好保存。");
        im.sendOk("送给你道具请注意查收");
        im.dispose();
    } else {
        im.playerMessage(-1, "请让你的背包都充裕,等级达到10级后使用。");
        im.sendOk("请您等级达到10级转职后再使用，10级送10级的，30级以后送30级的，70级以后送70的，100级以后送100级的 ，请选择等级后再使用.或者背包空间不足.");
        im.dispose();
    }
    im.dispose();
}

function Gift(job) {
    switch (job) {
		case 14210:
			im.gainItem(1262001, 1);
			break;
		case 14211:
			im.gainItem(1262003, 1);
			break;
        case 100://战士        
            im.gainItem(1302135, 1); //挑战之单手剑 - 10级
            im.gainItem(1312049, 1) //挑战之单手斧 - 10级
            im.gainItem(1322077, 1); //挑战之单手钝器 - 10级
            break;
        case 1100://魂骑士
        case 5100://米哈尔
            im.gainItem(1302135, 1); //挑战之单手剑 - 10级 
            break;
        case 5110:
        case 110:
        case 1110:
        case 6110:
            im.gainItem(1402081, 1);//挑战之双手剑 - 25级 (无描述)
            break;
        case 1111:
        case 5111:
        case 111:
        case 6111:
            im.gainItem(1402084, 1);//挑战之双手剑 - 70级 (无描述)
            break;
        case 112:
        case 5112:
        case 1112:
        case 6112:
            im.gainItem(1402075, 1);
            break;
        case 120:
            im.gainItem(1402081, 1);
            im.gainItem(1412051, 1);
            break;
        case 121:
            im.gainItem(1402084, 1);
            im.gainItem(1412054, 1);
            break;
        case 122:
            im.gainItem(1422058, 1);
            break;
        case 130:
            im.gainItem(1432071, 1);
            im.gainItem(1442099, 1);
            break;
        case 131:
            im.gainItem(1432074, 1);
            break;
        case 132:
            im.gainItem(1432076, 1);
            break;
        case 1200:
        case 200:
            im.gainItem(1372043, 1);
            break;
        case 1210:
        case 210:
            im.gainItem(1382017, 1);
            break;
        case 1211:
        case 211:
            im.gainItem(1372069, 1);
            break;
        case 1212:
        case 212:
            im.gainItem(1382094, 1);
            break;
        case 220:
            im.gainItem(1382017, 1);
            break;
        case 221:
            im.gainItem(1372069, 1);
            break;
        case 222:
            im.gainItem(1382094, 1);
            break;
        case 230:
            im.gainItem(1382017, 1);
            break;
        case 231:
            im.gainItem(1372069, 1);
            break;
        case 232:
            im.gainItem(1382094, 1);
            break;
        case 1300:
        case 3300:
        case 300:
            im.gainItem(1452093, 1);
            im.gainItem(1462078, 1);
            im.gainItem(2060000, 1000); //弓矢
            im.gainItem(2061000, 1000); //弩矢
            break;
        case 1310:
        case 310:
            im.gainItem(1452096, 1);
            break;
        case 1311:
        case 311:
            im.gainItem(1452023, 1);
            break;
        case 1312:
        case 312:
            im.gainItem(1452101, 1);
            break;
        case 3310:
        case 320:
            im.gainItem(1462000, 1);
            break;
        case 3311:
        case 321:
            im.gainItem(1462008, 1);
            break;
        case 3312:
        case 322:
            im.gainItem(1462015, 1);
            break;
        case 1400:
        case 400:
            im.gainItem(1332063, 1); //短刀
            im.gainItem(1472061, 1); //拳套
            break;
        case 1410:
        case 410:
            im.gainItem(1472008, 1);
            break;
        case 1411:
        case 411:
            im.gainItem(1472037, 1);
            break;
        case 1412:
        case 412:
            im.gainItem(1472053, 1);
            break;
        case 420:
            im.gainItem(1332012, 1);
            break;
        case 421:
            im.gainItem(1332036, 1);
            break;
        case 422:
            im.gainItem(1332052, 1);
            break;
        case 430://20
            im.gainItem(1342000, 1);
            im.gainItem(1332008, 1)
            break;
        case 431://30
            im.gainItem(1342001, 1);
            im.gainItem(1332009, 1);
            break;
        case 432://45
            im.gainItem(1342002, 1);
            im.gainItem(1332014, 1)
            break;
        case 433://60
            im.gainItem(1342004, 1);
            im.gainItem(1332015, 1);
            break;
        case 434://100
            im.gainItem(1342008, 1);
            im.gainItem(1332052, 1);
            break;
        case 1500:
            im.gainItem(1482066, 1)
            break;
        case 500:
            im.gainItem(1492066, 1);
            im.gainItem(1482066, 1);
            im.gainItem(2330000, 1000); //银子弹
            break;
        case 3500:
            im.gainItem(1492066, 1);
            break;
        case 1510:
        case 510:
            im.gainItem(1492069, 1);
            break;
        case 1511:
        case 511:
            im.gainItem(1492072, 1);
            break;
        case 1512:
        case 512:
            im.gainItem(1492074, 1);
            break;
        case 3510:
            im.gainItem(1492069, 1);
            break;
        case 520:
            im.gainItem(1492069, 1);
            break;
        case 3511:
            im.gainItem(1492072, 1);
            break;
        case 521:
            im.gainItem(1492072, 1);
            break;
        case 3512:
            im.gainItem(1492074, 1);
            break;
        case 522:
            im.gainItem(1492074, 1)
            break;//冒险家、骑士团 机械师 豹弩游侠 部分完成
        case 508://龙的传人
            im.gainItem(1492066, 1);
            im.gainItem(2330003, 1000); //银子弹
            break;
        case 570:
            im.gainItem(1492069, 1);
            break;
        case 571:
            im.gainItem(1492072, 1);
            break;
        case 572://龙的传人结束
            im.gainItem(1492074, 1)
            break;
        case 2100:
            im.gainItem(1442096, 1);
            break;
        case 2110:
            im.gainItem(1442099, 1);
            break;
        case 2111:
            im.gainItem(1442102, 1);
            break;
        case 2112:
            im.gainItem(1442105, 1);
            break;//战神部分完成
        case 2300:
            im.gainItem(1522000, 1);
            im.gainItem(1352000, 1);
            break;
        case 2310:
            im.gainItem(1522004, 1);
            im.gainItem(1352001, 1);
            break;
        case 2311:
            im.gainItem(1522008, 1);
            im.gainItem(1352002, 1);
            break;
        case 2312:
            im.gainItem(1522012, 1);
            im.gainItem(1352003, 1);
            break;//双弩部分完成
        case 2400:
            im.gainItem(1362000, 1);
            im.gainItem(1352100, 1);
            break;
        case 2410:
            im.gainItem(1362005, 1);
            im.gainItem(1352101, 1);
            break;
        case 2411:
            im.gainItem(1362009, 1);
            im.gainItem(1352102, 1);
            break;
        case 2412:
            im.gainItem(1362013, 1);
            im.gainItem(1352103, 1);
            break;//幻影部分完成
        case 2700:
            im.gainItem(1212001, 1);
            break;
        case 2710:
            im.gainItem(1212002, 1);
            break;
        case 2711:
            im.gainItem(1212004, 1);
            break;
        case 2712:
            im.gainItem(1212007, 1);
            break;//TODO 夜光部分 自动穿戴宝珠
        case 3100://恶魔猎手
            im.gainItem(1322122, 1);
            break;
        case 3110:
            im.gainItem(1322124, 1);
            break;
        case 3111:
            im.gainItem(1322126, 1);
            break;
        case 3112:
            im.gainItem(1322127, 1);
            break;
        case 3200://唤灵法师
            im.gainItem(1382085, 1);
            break;
        case 3210:
            im.gainItem(1382088, 1);
            break;
        case 3211:
            im.gainItem(1382091, 1);
            break;
        case 3212:
            im.gainItem(1382094, 1);
            break;
        case 3600://尖兵
            im.gainItem(1242001, 1);
            break;
        case 3610:
            im.gainItem(1242002, 1);
            break;
        case 3611:
            im.gainItem(1242004, 1);
            break;
        case 3612:
            im.gainItem(1242008, 1);
            break;//尖兵结束
        case 6100://狂龙战士
            im.gainItem(1402177, 1);
            break;
        case 6500:
            im.gainItem(1222001, 1);
            break;
        case 6510:
            im.gainItem(1222002, 1);
            break;
        case 6511:
            im.gainItem(1222004, 1);
            break;
        case 6512:
            im.gainItem(1222008, 1);
            break;
        case 3101:
            im.gainItem(1232001, 1);
            break;
        case 3120:
            im.gainItem(1232002, 1);
            break;
        case 3121:
            im.gainItem(1232004, 1);
            break;
        case 3122:
            im.gainItem(1232008, 1);
            break;
        case 501://火炮手
            im.gainItem(1532045, 1);
            break;
        case 530:
            im.gainItem(1532049, 1);
            break;
        case 531:
            im.gainItem(1532053, 1);
            break;
        case 532:
            im.gainItem(1532057, 1);
            break;
        case 2500:
            im.gainItem(1482066, 1);
            im.gainItem(1353100, 1);
            break;
        case 2510:
            im.gainItem(1482069, 1);
            im.gainItem(1353101, 1);
            break;
        case 2511:
            im.gainItem(1482072, 1);
            im.gainItem(1353102, 1);
            break;
        case 2512:
            im.gainItem(1482074, 1);
            im.gainItem(1353103, 1);
            break;
        case 4100://剑豪 阿斗一转
            im.gainItem(1142490, 1);
            im.gainItem(1542049, 1);
            break;
        case 4110://剑豪 阿斗二转
            im.gainItem(1142491, 1);
            im.gainItem(1003555, 1);//护额
            im.gainItem(1542050, 1);
            break;
        case 4111://剑豪 阿斗三转
            im.gainItem(1142492, 1);
            im.gainItem(1542054, 1);
            im.gainItem(1003556, 1);//护额
            break;
        case 4112://剑豪 阿斗四转
            im.gainItem(1142493, 1);
            im.gainItem(1542056, 1);
            im.gainItem(1003557, 1);//护额
            break;


        case 4200://阴阳师
            im.gainItem(1142506, 1);
            im.gainItem(1552000, 1);
            im.gainItem(1003570, 1);//发带
            break;
        case 4210://阴阳师
            im.gainItem(1142507, 1);
            im.gainItem(1003571, 1);//发带
            im.gainItem(1552002, 1);
            break;
        case 4211://阴阳师
            im.gainItem(1142508, 1);
            im.gainItem(1552005, 1);
            im.gainItem(1003572, 1);//发呆
            break;
        case 4222://阴阳师
            im.gainItem(1142509, 1);
            im.gainItem(1552009, 1);
            im.gainItem(1003573, 1);//护额
            break;
    }
}
/*
 * 
 * <imgdir name="5620000">
 <string name="name" value="双刀风暴 20 精通"/>
 <string name="desc" value="便于“暗影双刀”职业在4转前都能顺利转职的特别卷轴。有100%的概率将#c双刀风暴#的最高等级提升到20级，且使用后#c技能等级直接提高1级#。\n职业：双刀客 \n条件:技能等级5以上 \n#c每个角色只能使用1次"/>
 </imgdir>
 <imgdir name="5620001">
 <string name="name" value="暗影飞跃斩 20 精通"/>
 <string name="desc" value="便于“暗影双刀”职业在4转前都能顺利转职的特别卷轴。有100%的概率将#c暗影飞跃斩#的最高等级提升到20级，且使用后#c技能等级直接提高1级#。\n职业：血刀 \n条件:技能等级5以上 \n#c每个角色只能使用1次"/>
 </imgdir>
 <imgdir name="5620002">
 <string name="name" value="镜像分身 20 精通"/>
 <string name="desc" value="便于“暗影双刀”职业在4转前都能顺利转职的特别卷轴。有100%的概率将#c镜像分身#的最高等级提升到20级，且使用后#c技能等级直接提高1级#。\n职业：血刀 \n条件:技能等级10以上 \n#c每个角色只能使用1次"/>
 </imgdir>
 <imgdir name="5620003">
 <string name="name" value="影子闪避 20 精通"/>
 <string name="desc" value="便于“暗影双刀”职业在4转前都能顺利转职的特别卷轴。有100%的概率将#c影子闪避#的最高等级提升到20级，且使用后#c技能等级直接提高1级#。\n职业：血刀 \n条件:技能等级10以上\n#c每个角色只能使用1次"/>
 </imgdir>
 */