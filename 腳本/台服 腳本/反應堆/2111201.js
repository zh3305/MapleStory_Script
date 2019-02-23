/*
 Zakum Altar - Summons Zakum.
 */

/* global rm */

function act() {
    rm.changeMusic("Bgm06/FinalFight");
    rm.getMap().spawnSimpleZakum(-10, -215);
    rm.mapMessage("簡易殘暴炎魔出現了，請在規定時間範圍內擊敗它。");
    if (!rm.getPlayer().isGM()) {
        rm.getMap().startSpeedRun();
    }
}