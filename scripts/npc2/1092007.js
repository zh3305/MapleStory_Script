/*
Muirhat - Nautilus' Port
*/


function start() {
    if (cm.isQuestActive(2175)) {
	cm.sendOk("Are you ready? Good, I''ll send you to where the disciples of the Black Magician are. Look for the pigs around the area where I''ll be sending you. You''ll be able to find it by tracking them.");
    } else {
    	cm.sendOk("不是什么时候都能进去的地方……");
	cm.safeDispose();
    }
}

function action(mode, type, selection) {
    cm.warp(912000000,0);
    cm.dispose();
}
