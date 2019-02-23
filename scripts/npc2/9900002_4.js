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
        var selStr = "您好，欢迎来到永恒冒险岛:\r\n\r\n#b#L0#购买绿色时尚转椅#v3010002#   60000点卷#l\r\n#L1#红色时尚转椅#v3010003#   60000点卷#l\r\n#L2#购买黄色时尚转椅#v3010006#   60000点卷#l\r\n#L3#购买黄蓝休闲椅#v3010004#   60000点卷#l\r\n#L4#购买红蓝休闲椅#v3010005#   60000点卷#l\r\n#L5#购买椰子树沙滩椅#v3010018#   60000点卷#l\r\n#L6#购买蓝环凳#v3010029#   60000点卷#l\r\n#L7#购买黑环凳#v3010030#   60000点卷#l\r\n#L8#购买红环凳#v3010031#   60000点卷#l\r\n#L9#购买黄环凳#v3010032#   60000点卷#l\r\n#L10#购买绿环凳#v3010033#   60000点卷#l\r\n#L11#购买魔女的飞扫把#v3010043#   60000点卷#l\r\n#L12#购买烟花祭#v3013002#   60000点卷#l\r\n#L13#购买双刀同门#v3010166#   60000点卷#l\r\n#L14#购买粉色海豹靠垫#v3010007#   90000点卷#l\r\n#L15#购买蓝色海豹靠垫#v3010008#   90000点卷#l\r\n#L16#购买白色海豹靠垫#v3010010#   90000点卷#l\r\n#L17#购买黑色海豹靠垫#v3010016#   90000点卷#l\r\n#L18#购买金色海豹靠垫#v3010017#   90000点卷#l\r\n#L19#购买玩具粉熊椅#v3010024#   90000点卷#l\r\n#L20#购买枫叶纪念凳#v3010025#   90000点卷#l\r\n#L21#购买月亮弯#v3010014#   120000点卷#l\r\n#L22#购买寿司椅#v3010019#   120000点卷#l\r\n#L23#购买暖暖桌#v3010021#   120000点卷#l\r\n#L24#购买悠长假期(红)#v3010034#   120000点卷#l\r\n#L25#购买悠长假期(蓝)#v3010035#   120000点卷#l\r\n#L26#购买猪猪凳#v3010037#   120000点卷#l\r\n#L27#购买空气沙发#v3010038#   120000点卷#l\r\n#L28#购买蝙蝠椅#v3010040#   120000点卷#l\r\n#L29#购买骷髅王座#v3010041#   120000点卷#l\r\n#L30#购买同一红伞下#v3010044#   120000点卷#l\r\n#L31#购买寒冰椅子#v3010045#   120000点卷#l\r\n#L32#购买雪房子#v3010049#   120000点卷#l\r\n#L33#购买露水椅子#v3010068#   120000点卷#l\r\n#L34#购买公主凳#v3010050#   120000点卷#l\r\n#L35#购买大黄风#v3010069#   120000点卷#l\r\n#L36#购买鲜美的火鸡#v3010093#   120000点卷#l\r\n#L37#购买漂漂猪椅子#v3010094#   120000点卷#l\r\n#L38#购买石头人座椅#v3010095#   120000点卷#l\r\n#L39#购买塌塌凳#v3010009#   130000点卷#l\r\n#L40#购买海盗的俘虏#v3010028#   130000点卷#l\r\n#L41#购买浪漫秋千#v3010036#   130000点卷#l\r\n#L42#购买红龙椅#v3010046#   130000点卷#l\r\n#L43#购买蓝龙椅#v3010047#   130000点卷#l\r\n#L44#购买圣诞树椅子#v3010048#   130000点卷#l\r\n#L45#购买沙漠兔子靠垫1#v3010051#   130000点卷#l\r\n#L46#购买沙漠兔子靠垫2#v3010052#   130000点卷#l\r\n#L47#购买呼噜呼噜床#v3010054#   130000点卷#l\r\n#L48#购买血色玫瑰#v3010057#   130000点卷#l\r\n#L49#购买世界末日#v3010058#   130000点卷#l\r\n#L50#购买神兽椅#v3010071#   130000点卷#l\r\n#L51#购买baby品克缤#v3010073#   130000点卷#l\r\n#L52#购买我为音乐狂#v3010075#   130000点卷#l\r\n#L53#购买猫头鹰椅子#v3010077#   130000点卷#l\r\n#L54#购买恐龙化石宝座#v3010096#   130000点卷#l\r\n#L55#购买电视宅人#v3010098#   130000点卷#l\r\n#L56#购买北极熊椅子#v3010099#   130000点卷#l\r\n#L57#购买财神椅子#v3010100#   130000点卷#l\r\n#L59#购买舒适大白熊椅子#v3010110#   130000点卷#l\r\n#L60#购买虎虎生威#v3010111#   130000点卷#l\r\n#L61#购买情书柜子#v3010112#   130000点卷#l\r\n#L62#购买摇滚之魂椅子#v3010116#   130000点卷#l\r\n#L63#购买魔法书椅子#v3010117#   130000点卷#l\r\n#L64#购买糖果音符椅子#v3010118#   130000点卷#l\r\n#L65#购买羊羊椅子#v3010119#   130000点卷#l\r\n#L66#购买彩蛋篮子#v3010120#   130000点卷#l\r\n#L67#购买夏日花朵#v3010123#   130000点卷#l\r\n#L68#购买都纳斯喷气椅子#v3010124#   130000点卷#l\r\n#L69#购买尼贝隆战舰椅#v3010125#   130000点卷#l\r\n#L70#购买蝙蝠魔王座#v3010126#   130000点卷#l\r\n#L71#购买篝火#v3012001#   130000点卷#l\r\n#L72#购买浴桶#v3012002#   130000点卷#l\r\n#L73#购买深蓝色绒毛沙发#v3010066#   130000点卷#l\r\n#L74#购买红色设计师椅#v3010067#   130000点卷#l\r\n#L75#购买柿子树鞦韆#v3010080#   130000点卷#l\r\n#L76#购买红帽月妙抱枕椅#v3010081#   130000点卷#l\r\n#L77#购买蓝帽月妙抱枕椅#v3010082#   130000点卷#l\r\n#L78#购买扇子月妙抱枕椅#v3010083#   130000点卷#l\r\n#L79#购买太平萧月妙抱枕椅#v3010084#   130000点卷#l\r\n#L80#购买龙龙的蛋壳椅#v3010107#   130000点卷#l\r\n#L81#购买幼龙秋千#v3010108#   130000点卷#l\r\n#L82#购买暖炉椅#v3010109#   130000点卷#l\r\n#L83#购买幽魂发条熊椅子#v3010113#   130000点卷#l\r\n#L84#购买冰雪糕丸子椅#v3010055#   130000点卷#l\r\n#L85#购买周年庆水晶枫叶椅#v3010145#   130000点卷#l\r\n#L86#购买6周年怪物王座#v3010136#   130000点卷#l\r\n#L87#购买神龙椅子#v3010137#   130000点卷#l\r\n#L88#购买猫咪风扇椅#v3010149#   130000点卷#l\r\n#L89#购买七夕椅子#v3010144#   130000点卷#l\r\n#L90#购买暗影双刀的猫头鹰#v3010155#   130000点卷#l\r\n#L91#购买大熊猫椅子#v3010078#   130000点卷#l\r\n#L93#购买撒娇猫咪椅#v3010132#   130000点卷#l\r\n#L94#购买帐篷椅#v3010133#   130000点卷#l\r\n#L95#购买爱心椅子#v3012003#   180000点卷#l\r\n#L96#购买风吹稻香#v3012006#   180000点卷#l\r\n#L97#购买巧克力蛋糕恋人#v3012010#   180000点卷#l\r\n#L98#购买我爱巧克力火锅#v3012011#   180000点卷#l\r\n#L99#购买浮游飞行器#v3010156#   180000点卷#l\r\n#L100#购买黄三角帐篷椅#v3010152#   180000点卷#l\r\n#L101#购买果月椅子#v3010162#   180000点卷#l\r\n#L102#购买满月椅#v3010163#   180000点卷#l\r\n#L103#购买节日独角兽椅子#v3010135#   180000点卷#l\r\n#L104#购买私密空间#v3010139#   180000点卷#l\r\n#L105#购买友谊万岁椅子#v3010168#   180000点卷#l\r\n#L106#购买星空椅子#v3010172#   180000点卷#l\r\n#L107#购买万圣节塔罗椅子#v3010173#   180000点卷#l\r\n#L108#购买名画家椅子#v3010175#   180000点卷#l\r\n#L109#购买燕尾服猫咪椅#v3010179#   180000点卷#l\r\n#L110#购买纸箱里(求领养)#v3010169#   180000点卷#l\r\n#L111#购买过来抱抱椅#v3010171#   180000点卷#l\r\n#L112#购买女巫炼药椅#v3010174#   180000点卷#l\r\n#L113#购买兔子家族椅#v3010182#   180000点卷#l\r\n#L114#购买胡萝卜椅子#v3010183#   180000点卷#l\r\n#L115#购买兔子纪念版椅子#v3010053#   180000点卷#l\r\n#L116#购买水族馆椅子#v3010142#   180000点卷#l\r\n#L117#购买草莓冰淇淋月饼椅#v3010209#   180000点卷#l\r\n#L118#购买香草冰淇淋月饼椅#v3010210#   180000点卷#l\r\n#L119#购买英雄的椅子-战神#v3010197#   180000点卷#l\r\n#L120#购买英雄的椅子-龙神#v3010200#   180000点卷#l\r\n#L121#购买英雄的椅子-暗影#v3010201#   180000点卷#l\r\n#L122#购买鼠鼠椅#v3010161#   180000点卷#l\r\n#L123#购买月光仙子椅子#v3010226#   180000点卷#l\r\n#L124#购买鬼娃娃椅子#v3010085#   300000点卷#l\r\n#L125#购买樱花树下#v3013000#   300000点卷#l\r\n#L126#购买手柄座椅#v3010177#   300000点卷#l\r\n#L127#购买扎昆宝座#v3010127#   900000点卷#l\r\n#L128#购买黑龙王椅#v3010128#   1200000点卷#l\r\n#L129#购买黑龙椅子#v3010311#   1200000点卷#l\r\n#L130#购买巨无霸品克缤#v3010070#   1300000点卷0#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.getPlayer().getCSPoints(1)>=60000) { 
	    cm.gainNX(-60000);
	    cm.gainItem(3010002,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足60000.");
		cm.dispose();
            }
            break;
        case 1:
            if (cm.getPlayer().getCSPoints(1)>=60000) { 
	    cm.gainNX(-60000);
	    cm.gainItem(3010003,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足60000.");
		cm.dispose();
            }
            break;
        case 2:
            if (cm.getPlayer().getCSPoints(1)>=60000) { 
	    cm.gainNX(-60000);
	    cm.gainItem(3010006,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足60000.");
		cm.dispose();
            }
            break;
        case 3:
            if (cm.getPlayer().getCSPoints(1)>=60000) { 
	    cm.gainNX(-60000);
	    cm.gainItem(3010004,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足60000.");
		cm.dispose();
            }
            break;
        case 4:
            if (cm.getPlayer().getCSPoints(1)>=60000) { 
	    cm.gainNX(-60000);
	    cm.gainItem(3010005,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足60000.");
		cm.dispose();
            }
            break;
        case 5:
            if (cm.getPlayer().getCSPoints(1)>=60000) { 
	    cm.gainNX(-60000);
	    cm.gainItem(3010018,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足60000.");
		cm.dispose();
            }
            break;
        case 6:
            if (cm.getPlayer().getCSPoints(1)>=60000) { 
	    cm.gainNX(-60000);
	    cm.gainItem(3010029,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足60000.");
		cm.dispose();
            }
            break;
        case 7:
            if (cm.getPlayer().getCSPoints(1)>=60000) { 
	    cm.gainNX(-60000);
	    cm.gainItem(3010030,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足60000.");
		cm.dispose();
            }
            break;
        case 8:
            if (cm.getPlayer().getCSPoints(1)>=60000) { 
	    cm.gainNX(-60000);
	    cm.gainItem(3010031,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足60000.");
		cm.dispose();
            }
            break;
        case 9:
            if (cm.getPlayer().getCSPoints(1)>=60000) { 
	    cm.gainNX(-60000);
	    cm.gainItem(3010032,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足60000.");
		cm.dispose();
            }
            break;
        case 10:
            if (cm.getPlayer().getCSPoints(1)>=60000) { 
	    cm.gainNX(-60000);
	    cm.gainItem(3010033,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足60000.");
		cm.dispose();
            }
            break;
        case 11:
            if (cm.getPlayer().getCSPoints(1)>=60000) { 
	    cm.gainNX(-60000);
	    cm.gainItem(3010043,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足60000.");
		cm.dispose();
            }
            break;
        case 12:
            if (cm.getPlayer().getCSPoints(1)>=60000) { 
	    cm.gainNX(-60000);
	    cm.gainItem(3010002,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足60000.");
		cm.dispose();
            }
            break;
        case 13:
            if (cm.getPlayer().getCSPoints(1)>=60000) { 
	    cm.gainNX(-60000);
	    cm.gainItem(3010166,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足60000.");
		cm.dispose();
            }
            break;
        case 14:
            if (cm.getPlayer().getCSPoints(1)>=90000) { 
	    cm.gainNX(-90000);
	    cm.gainItem(3010007,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足90000.");
		cm.dispose();
            }
            break;
        case 15:
            if (cm.getPlayer().getCSPoints(1)>=90000) { 
	    cm.gainNX(-90000);
	    cm.gainItem(3010008,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足90000.");
		cm.dispose();
            }
            break;
        case 16:
            if (cm.getPlayer().getCSPoints(1)>=90000) { 
	    cm.gainNX(-90000);
	    cm.gainItem(3010010,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足90000.");
		cm.dispose();
            }
            break;
        case 17:
            if (cm.getPlayer().getCSPoints(1)>=90000) { 
	    cm.gainNX(-90000);
	    cm.gainItem(3010016,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足90000.");
		cm.dispose();
            }
            break;
        case 18:
            if (cm.getPlayer().getCSPoints(1)>=90000) { 
	    cm.gainNX(-90000);
	    cm.gainItem(3010017,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足90000.");
		cm.dispose();
            }
            break;
        case 19:
            if (cm.getPlayer().getCSPoints(1)>=90000) { 
	    cm.gainNX(-90000);
	    cm.gainItem(3010024,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足90000.");
		cm.dispose();
            }
            break;
        case 20:
            if (cm.getPlayer().getCSPoints(1)>=90000) { 
	    cm.gainNX(-90000);
	    cm.gainItem(3010025,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足90000.");
		cm.dispose();
            }
            break;
        case 21:
            if (cm.getPlayer().getCSPoints(1)>=120000) { 
	    cm.gainNX(-120000);
	    cm.gainItem(3010014,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足120000.");
		cm.dispose();
            }
            break;
        case 22:
            if (cm.getPlayer().getCSPoints(1)>=120000) { 
	    cm.gainNX(-120000);
	    cm.gainItem(3010019,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足120000.");
		cm.dispose();
            }
            break;
        case 23:
            if (cm.getPlayer().getCSPoints(1)>=120000) { 
	    cm.gainNX(-120000);
	    cm.gainItem(3010021,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足120000.");
		cm.dispose();
            }
            break;
        case 24:
            if (cm.getPlayer().getCSPoints(1)>=120000) { 
	    cm.gainNX(-120000);
	    cm.gainItem(3010034,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足120000.");
		cm.dispose();
            }
            break;
        case 25:
            if (cm.getPlayer().getCSPoints(1)>=120000) { 
	    cm.gainNX(-120000);
	    cm.gainItem(3010035,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足120000.");
		cm.dispose();
            }
            break;
        case 26:
            if (cm.getPlayer().getCSPoints(1)>=120000) { 
	    cm.gainNX(-120000);
	    cm.gainItem(3010037,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足120000.");
		cm.dispose();
            }
            break;
        case 27:
            if (cm.getPlayer().getCSPoints(1)>=120000) { 
	    cm.gainNX(-120000);
	    cm.gainItem(3010038,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足120000.");
		cm.dispose();
            }
            break;
        case 28:
            if (cm.getPlayer().getCSPoints(1)>=120000) { 
	    cm.gainNX(-120000);
	    cm.gainItem(3010040,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足120000.");
		cm.dispose();
            }
            break;
        case 29:
            if (cm.getPlayer().getCSPoints(1)>=120000) { 
	    cm.gainNX(-120000);
	    cm.gainItem(3010041,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足120000.");
		cm.dispose();
            }
            break;
        case 30:
            if (cm.getPlayer().getCSPoints(1)>=120000) { 
	    cm.gainNX(-120000);
	    cm.gainItem(3010044,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足120000.");
		cm.dispose();
            }
            break;
        case 31:
            if (cm.getPlayer().getCSPoints(1)>=120000) { 
	    cm.gainNX(-120000);
	    cm.gainItem(3010045,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足120000.");
		cm.dispose();
            }
            break;
        case 32:
            if (cm.getPlayer().getCSPoints(1)>=120000) { 
	    cm.gainNX(-120000);
	    cm.gainItem(3010049,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足120000.");
		cm.dispose();
            }
            break;
        case 33:
            if (cm.getPlayer().getCSPoints(1)>=120000) { 
	    cm.gainNX(-120000);
	    cm.gainItem(3010068,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足120000.");
		cm.dispose();
            }
            break;
        case 34:
            if (cm.getPlayer().getCSPoints(1)>=120000) { 
	    cm.gainNX(-120000);
	    cm.gainItem(3010050,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足120000.");
		cm.dispose();
            }
            break;
        case 35:
            if (cm.getPlayer().getCSPoints(1)>=120000) { 
	    cm.gainNX(-120000);
	    cm.gainItem(3010069,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足120000.");
		cm.dispose();
            }
            break;
        case 36:
            if (cm.getPlayer().getCSPoints(1)>=120000) { 
	    cm.gainNX(-120000);
	    cm.gainItem(3010093,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足120000.");
		cm.dispose();
            }
            break;
        case 37:
            if (cm.getPlayer().getCSPoints(1)>=120000) { 
	    cm.gainNX(-120000);
	    cm.gainItem(3010094,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足120000.");
		cm.dispose();
            }
            break;
        case 38:
            if (cm.getPlayer().getCSPoints(1)>=120000) { 
	    cm.gainNX(-120000);
	    cm.gainItem(3010095,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足120000.");
		cm.dispose();
            }
            break;
        case 39:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010009,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 40:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010028,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 41:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010036,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 42:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010046,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 43:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010047,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 44:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010048,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 45:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010051,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 46:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010052,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 47:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010054,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 48:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010057,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 49:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010058,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 50:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010071,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 51:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010073,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 52:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010075,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 53:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010077,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 54:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010096,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 55:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010098,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 56:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010099,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 57:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010100,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 58:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010101,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 59:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010110,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 60:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010111,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 61:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010112,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 62:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010116,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 63:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010117,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 64:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010118,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 65:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010119,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 66:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010120,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 67:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010123,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 68:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010124,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 69:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010125,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 70:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010126,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 71:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3012001,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 72:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3012002,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 73:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010066,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 74:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010067,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 75:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010080,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 76:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010081,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 77:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010082,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 78:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010083,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 79:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010084,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 80:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010107,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 81:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010108,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 82:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010109,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 83:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010113,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 84:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010055,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 85:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010145,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 86:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010136,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 87:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010137,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 88:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010149,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 89:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010144,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 90:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010155,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 91:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(3010078,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 92:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(30100127,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 93:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(30100132,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 94:
            if (cm.getPlayer().getCSPoints(1)>=130000) { 
	    cm.gainNX(-130000);
	    cm.gainItem(30100133,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足130000.");
		cm.dispose();
            }
            break;
        case 95:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3012003,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足180000.");
		cm.dispose();
            }
            break;
        case 96:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3012006,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足180000.");
		cm.dispose();
            }
            break;
        case 97:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3012010,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足180000.");
		cm.dispose();
            }
            break;
        case 98:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3012011,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足180000.");
		cm.dispose();
            }
            break;
        case 99:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010156,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足180000.");
		cm.dispose();
            }
            break;
        case 100:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010152,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足180000.");
		cm.dispose();
            }
            break;
        case 101:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010162,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足180000.");
		cm.dispose();
            }
            break;
        case 102:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010163,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足180000.");
		cm.dispose();
            }
            break;
        case 103:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010135,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足180000.");
		cm.dispose();
            }
            break;
        case 104:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010139,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足180000.");
		cm.dispose();
            }
            break;
        case 105:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010168,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足180000.");
		cm.dispose();
            }
            break;
        case 106:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010172,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足180000.");
		cm.dispose();
            }
            break;
        case 107:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010173,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足180000.");
		cm.dispose();
            }
            break;
        case 108:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010175,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足180000.");
		cm.dispose();
            }
            break;
        case 109:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010179,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足180000.");
		cm.dispose();
            }
            break;
        case 110:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010169,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足180000.");
		cm.dispose();
            }
            break;
        case 111:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010171,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足180000.");
		cm.dispose();
            }
            break;
        case 112:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010174,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足180000.");
		cm.dispose();
            }
            break;
        case 113:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010182,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足180000.");
		cm.dispose();
            }
            break;
        case 114:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010183,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足180000.");
		cm.dispose();
            }
            break;
        case 115:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010053,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足180000.");
		cm.dispose();
            }
            break;
        case 116:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010142,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足180000.");
		cm.dispose();
            }
            break;
        case 117:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010209,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足180000.");
		cm.dispose();
            }
            break;
        case 118:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010210,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足180000.");
		cm.dispose();
            }
            break;
        case 119:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010197,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足180000.");
		cm.dispose();
            }
            break;
        case 120:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010200,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足180000.");
		cm.dispose();
            }
            break;
        case 121:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010201,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足180000.");
		cm.dispose();
            }
            break;
        case 122:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010161,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足180000.");
		cm.dispose();
            }
            break;
        case 123:
            if (cm.getPlayer().getCSPoints(1)>=180000) { 
	    cm.gainNX(-180000);
	    cm.gainItem(3010226,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足180000.");
		cm.dispose();
            }
            break;
        case 124:
            if (cm.getPlayer().getCSPoints(1)>=300000) { 
	    cm.gainNX(-300000);
	    cm.gainItem(3010085,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足300000.");
		cm.dispose();
            }
            break;
        case 125:
            if (cm.getPlayer().getCSPoints(1)>=300000) { 
	    cm.gainNX(-300000);
	    cm.gainItem(3013000,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足300000.");
		cm.dispose();
            }
            break;
        case 126:
            if (cm.getPlayer().getCSPoints(1)>=300000) { 
	    cm.gainNX(-300000);
	    cm.gainItem(3010177,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足300000.");
		cm.dispose();
            }
            break;
        case 127:
            if (cm.getPlayer().getCSPoints(1)>=900000) { 
	    cm.gainNX(-900000);
	    cm.gainItem(3010127,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足900000.");
		cm.dispose();
            }
            break;
        case 128:
            if (cm.getPlayer().getCSPoints(1)>=1200000) { 
	    cm.gainNX(-1200000);
	    cm.gainItem(3010128,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足1200000.");
		cm.dispose();
            }
            break;
        case 129:
            if (cm.getPlayer().getCSPoints(1)>=1200000) { 
	    cm.gainNX(-1200000);
	    cm.gainItem(3010311,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足1200000.");
		cm.dispose();
            }
            break;
        case 130:
            if (cm.getPlayer().getCSPoints(1)>=1300000) { 
	    cm.gainNX(-1300000);
	    cm.gainItem(3010070,1);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足1300000.");
		cm.dispose();
            }
            break;
        }
    }
}