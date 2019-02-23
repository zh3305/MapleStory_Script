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
        var selStr = "亲爱的#r#h ##k您好，兔花花疯狂的要送点卷啦，继续支持我们 支持自己请点击下面的“支持兔花花”！:\r\n\r\n#b#L0#支持兔花花#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                var dj=Math.floor(Math.random() * 99);
                if(dj==0){
                    cm.gainNX(+1000);
			cm.gainMeso(- 1000000);
		cm.worldSpouseMessage(0x20,"[疯狂点击]恭喜玩家！"+ cm.getChar().getName() +"  获得5000点卷. 活动请在圣诞树-疯狂点击 - 兔花花参加！");
                   //cm.worldMessage("恭喜玩家" + cm.getChar().getName() + "支持兔花花 获得5000点卷. 活动请在圣诞树-疯狂点击 - 兔花花参加！" );
		    cm.sendOk("感谢你支持兔花花 我们赠送您了5000点。");
		    cm.dispose();
                }else if(dj>=1 && dj<=10){
			cm.gainMeso(- 1);
                    cm.gainNX(+dj);
		cm.worldSpouseMessage(0x20,"[疯狂点击]恭喜玩家！"+ cm.getChar().getName() +"  获得"+dj+"点卷. 活动请在圣诞树-疯狂点击 - 兔花花参加！");
                    //cm.worldMessage("恭喜玩家" + cm.getChar().getName() + "支持兔花花 获得"+dj+"点卷. 活动请在圣诞树-疯狂点击 - 兔花花参加！" );
		    cm.sendOk("感谢你支持兔花花 我们赠送您了"+dj+"点。");
		    cm.dispose();
                }else if(dj>=1 && dj<=19){
		dj=dj*666;
		    cm.gainMeso(- 1);
                    cm.gainMeso(dj);
		cm.worldSpouseMessage(0x20,"[疯狂点击]恭喜玩家！"+ cm.getChar().getName() +"  获得"+dj+"金币. 活动请在圣诞树-疯狂点击 - 兔花花参加！");
                    //cm.worldMessage("恭喜玩家" + cm.getChar().getName() + "支持兔花花 获得"+dj+"金币. 活动请在圣诞树-疯狂点击 - 兔花花参加！" );
		    cm.sendOk("感谢你支持兔花花 我们赠送您了"+dj+"金币。");
		    cm.dispose();
                }else{
			cm.gainMeso(- 8);
                    cm.gainNX(+dj);
		cm.worldSpouseMessage(0x20,"[疯狂点击]恭喜玩家！"+ cm.getChar().getName() +"  获得"+dj+"点卷. 活动请在圣诞树-疯狂点击 - 兔花花参加！");
                    //cm.worldMessage("恭喜玩家" + cm.getChar().getName() + "支持兔花花 获得"+dj+"点卷. 活动请在圣诞树-疯狂点击 - 兔花花参加！" );
		    cm.sendOk("感谢你支持兔花花 我们赠送您了"+dj+"点。");
		    cm.dispose();
                }
                break;
        }
    }
}