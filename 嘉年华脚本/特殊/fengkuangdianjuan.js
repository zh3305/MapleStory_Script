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
        var selStr = "亲爱的#r#h ##k您好，我是点击使者 本次活动时间为5分钟.\r\n你每次点击可以获得1-50的点数.\r\n那就看你运气啦 开始吧:\r\n\r\n#b#L0#开始点击#l";//\r\n\r\n#b#L0#开始点击#l
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                var dj=Math.floor(Math.random() * 60);
                if(dj==0){
                    cm.gainNX(+100);
                    cm.worldMessage("恭喜玩家" + cm.getChar().getName() + "在疯狂点击中获得100点卷." );
		    cm.sendOk("恭喜你获得了100点。");
		    cm.dispose();
                }else if(dj>=60){
                    cm.gainNX(+dj);
                    cm.worldMessage("恭喜玩家" + cm.getChar().getName() + "在疯狂点击中获得"+dj+"点卷." );
		    cm.sendOk("恭喜你获得了"+dj+"点。");
		    cm.dispose();
                }else{
                    cm.gainNX(+dj);
		    cm.sendOk("恭喜你获得了"+dj+"点。");
		    cm.dispose();
                }
                break;
        }
    }
}