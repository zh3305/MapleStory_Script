/**
 *芬芬时尚潮流 为客户weinan9988制作
 **/

function start() {

    if(cm.countMonster()< 50) {
        cm.sendSimple ("#b亲爱的#r#h ##k#b您好，我可以为你召唤BOSS 请选择:\r\n#L0#扎昆#l\r\n#L1#进阶扎昆#l\r\n#L2#暗黑龙王#l\r\n#L3#进阶暗黑龙王#l\r\n#L4#暴力熊#l\r\n#L5#心疤狮王#l\r\n#L6#品克缤#l\r\n#L7#努克斯#l\r\n#L8#欧碧拉#l\r\n#L9#班·雷昂#l\r\n#L10#希纳斯#l\r\n#L11#恶魔#l\r\n#L12#地狱船长#l\r\n#L13#雷卡#l\r\n#L14#布雷兹首脑#l\r\n#L15#海之魔女#l\r\n#L16#血焰将军#l\r\n#L17#神兽#l\r\n#L18#暗影杀手#l\r\n#L19#贝尔加莫特#l\r\n#L20#创世使者#l\r\n#L21#大海兽#l\r\n#L22#变异的漂漂大猪#l\r\n#L23#离开地图出去#l\r\n\r\n        制作人：芬芬时尚潮流 ");
    } else {
        cm.sendOk("一次不能出现多余50个BOSS")
    }
}
function action(mode, type, selection) {
    cm.dispose();
    if (selection == 0) {//扎昆
    if (cm.getPlayer().getMeso() < 1){  
        cm.sendOk("你的冒险币不能少于1")
        cm.dispose();
       }else{	
        cm.gainItem(3991054,-1);
        //怪物ID, X坐标，Y坐标
	cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(8800000, -410, -400);   
        cm.dispose();
        }
} else if (selection == 1) {//进阶扎昆
    if (cm.getPlayer().getMeso() < 1){  
        cm.sendOk("你的冒险币不能少于1")
        cm.dispose();
}else{	
        cm.gainItem(3991054,-1);
        cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(8800100, -410, -400);   
        cm.dispose();
        }
} else if (selection == 2) {//黑龙
    if (cm.getPlayer().getMeso() < 1){  
        cm.sendOk("你的冒险币不能少于1")
        cm.dispose();
}else{	
        cm.gainItem(3991054,-1);
        cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(8810026, -410, -400);   
        cm.dispose();
        }
//} else if (selection == 3) {//进阶黑龙
       // cm.sendOk("暂不开放")
       // cm.dispose();
       // }
} else if (selection == 4) {//暴力熊
    if (cm.getPlayer().getMeso() < 1){  
        cm.sendOk("你的冒险币不能少于1")
        cm.dispose();
}else{	
        cm.gainItem(3991054,-1);
        cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(9420541, -410, -400);
        cm.dispose();
        }
} else if (selection == 5) {//心疤狮王
    if (cm.getPlayer().getMeso() < 1){  
        cm.sendOk("你的冒险币不能少于1")
        cm.dispose();
}else{	
        cm.gainItem(3991054,-1);
        cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(9420546, -410, -400);   
        cm.dispose();
        }
//} else if (selection == 6) {//品克缤
      //  cm.sendOk("暂无开放")
      //  cm.dispose();
      //  }
} else if (selection == 7) {//努克斯
    if (cm.getPlayer().getMeso() < 1){  
        cm.sendOk("你的冒险币不能少于1")
        cm.dispose();
}else{	
        cm.gainItem(3991054,-1);
        cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(9400266, -410, -400);   
        cm.dispose();
        }
} else if (selection == 8) {//欧碧拉
    if (cm.getPlayer().getMeso() < 1){  
        cm.sendOk("你的冒险币不能少于1")
        cm.dispose();
}else{	
        cm.gainItem(3991054,-1);
        cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(9400289, -410, -400);   
        cm.dispose();
        }
} else if (selection == 9) {//班·雷昂
    if (cm.getPlayer().getMeso() < 1){  
        cm.sendOk("你的冒险币不能少于1")
        cm.dispose();
}else{	
        cm.gainItem(3991054,-1);
        cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(9500408, -410, -400);   
        cm.dispose();
        }
} else if (selection == 10) {//希纳斯
    if (cm.getPlayer().getMeso() < 1){  
        cm.sendOk("你的冒险币不能少于1")
        cm.dispose();
}else{	
        cm.gainItem(3991054,-1);
        cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(8850011, -410, -400);   
        cm.dispose();
        }
} else if (selection == 11) {//恶魔铁心
    if (cm.getPlayer().getMeso() < 1){  
        cm.sendOk("你的冒险币不能少于1")
        cm.dispose();
}else{	
        cm.gainItem(3991054,-1);
        cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(2500701, -410, -400);   
        cm.dispose();
        }
} else if (selection == 12) {//地狱船长
    if (cm.getPlayer().getMeso() < 1){  
        cm.sendOk("你的冒险币不能少于1")
        cm.dispose();
}else{	
        cm.gainItem(3991054,-1);
        cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(9400419, -410, -400);   
        cm.dispose();
        }
} else if (selection == 13) {//雷卡
    if (cm.getPlayer().getMeso() < 1){  
        cm.sendOk("你的冒险币不能少于1")
        cm.dispose();
}else{	
        cm.gainItem(3991054,-1);
        cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(9800113, -410, -400);   
        cm.dispose();
        }
} else if (selection == 14) {//布雷兹首脑
    if (cm.getPlayer().getMeso() < 1){  
        cm.sendOk("你的冒险币不能少于1")
        cm.dispose();
}else{	
        cm.gainItem(3991054,-1);
        cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(9400296, -410, -400);   
        cm.dispose();
        }
} else if (selection == 15) {//海之魔女
    if (cm.getPlayer().getMeso() < 1){  
        cm.sendOk("你的冒险币不能少于1")
        cm.dispose();
}else{	
        cm.gainItem(3991054,-1);
        cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(9400438, -410, -400);   
        cm.dispose();
        }
} else if (selection == 16) {//血焰将军
    if (cm.getPlayer().getMeso() < 1){  
        cm.sendOk("你的冒险币不能少于1")
        cm.dispose();
}else{	
        cm.gainItem(3991054,-1);
        cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(9400439, -410, -400);   
        cm.dispose();
        }
} else if (selection == 17) {//神兽
    if (cm.getPlayer().getMeso() < 1){  
        cm.sendOk("你的冒险币不能少于1")
        cm.dispose();
}else{	
        cm.gainItem(3991054,-1);
        cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(8850010, -410, -400);   
        cm.dispose();
        }
} else if (selection == 18) {//暗影杀手
    if (cm.getPlayer().getMeso() < 1){  
        cm.sendOk("你的冒险币不能少于1")
        cm.dispose();
}else{	
        cm.gainItem(3991054,-1);
        cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(9400441, -410, -400);   
        cm.dispose();
        }
} else if (selection == 19) {//贝尔加莫特
    if (cm.getPlayer().getMeso() < 1){  
        cm.sendOk("你的冒险币不能少于1")
        cm.dispose();
}else{	
        cm.gainItem(3991054,-1);
        cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(9400263, -410, -400);   
        cm.dispose();
        }
//} else if (selection == 20) {//创世使者
       // cm.sendOk("暂无开放")
       // cm.dispose();
      //  }
} else if (selection == 21) {//大海兽
    if (cm.getPlayer().getMeso() < 1){  
        cm.sendOk("你的冒险币不能少于1")
        cm.dispose();
}else{	
        cm.gainItem(3991054,-1);
        cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(9305335, -410, -400);   
        cm.dispose();
        }
} else if (selection == 22) {//变异的漂漂大猪
    if (cm.getPlayer().getMeso() < 1){  
        cm.sendOk("你的冒险币不能少于1")
        cm.dispose();
}else{	
        cm.gainItem(3991054,-1);
        cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(8600003, -410, -400);   
        cm.dispose();
        }
} else if (selection == 23) {//离开地图
            cm.warp(910000000, 0);
            cm.dispose();
			
        }
    }