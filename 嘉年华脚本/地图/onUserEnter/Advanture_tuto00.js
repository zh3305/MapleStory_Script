/*
 Made by Pungin
 */

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        ms.getDirectionStatus(true);
        ms.EnableUI(1); // Disable UI
        ms.DisableUI(true);
        ms.getDirectionInfo(3, 0);
        ms.getDirectionInfo(1, 30);
    } else if (status == 1) {
        ms.getDirectionInfo("Effect/Direction3.img/effect/tuto/BalloonMsg0/0", 2100, 0, -120, 0, 0);
        ms.getDirectionInfo(1, 2100);
    } else if (status == 2) {
        ms.getDirectionInfo(3, 2);
        ms.getDirectionInfo(1, 420);
    } else if (status == 3) {
        ms.getDirectionInfo(3, 1);
        ms.getDirectionInfo(1, 420);
    } else if (status == 4) {
        ms.getDirectionInfo(3, 2);
        ms.getDirectionInfo(1, 420);
    } else if (status == 5) {
        ms.getDirectionInfo(3, 0);
        ms.getDirectionInfo("Effect/Direction12.img/effect/tuto/BalloonMsg0/1", 2100, 0, -120, 0, 0);
        ms.getDirectionInfo(1, 1800);
    } else if (status == 6) {
        ms.getDirectionInfo("Effect/Direction3.img/effect/tuto/BalloonMsg0/1", 2100, 0, -120, 0, 0);
        ms.getDirectionInfo(1, 2100);
    } else if (status == 7) {
        ms.getDirectionEffect("Effect/Direction3.img/effect/tuto/key/0", 3000000, -300, 0);
        ms.getDirectionEffect("Effect/Direction3.img/effect/tuto/key/0", 3000000, 0, 0);
        ms.getDirectionEffect("Effect/Direction3.img/effect/tuto/key/0", 3000000, 300, 0);
        ms.getDirectionEffect("Effect/Direction3.img/effect/tuto/key/1", 3000000, 540, 70);
        ms.getDirectionInfo(1, 1200);
    } else if (status == 8) {
        ms.getDirectionInfo("Effect/Direction3.img/effect/tuto/BalloonMsg0/2", 2100, 0, -120, 0, 0);
        ms.getDirectionInfo(1, 2100);
    } else if (status == 9) {
        ms.topMsg("按鍵盤的[←],[→]級可移動.");
        ms.getDirectionInfo(1, 3000);
    } else {
        ms.topMsg("移動到傳送點所在處,按[↑]就可以進入地圖.");
        ms.EnableUI(0);
        ms.dispose();
    }
}

