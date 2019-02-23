/* Amon
 * Last Mission : Zakum's Altar (280030000)
 */

/* global cm */

function start() {
    cm.sendYesNo("你現在是想離開這裡嗎？");
}

function action(mode, type, selection) {
    if (mode === 1) {
        cm.warp(211042300, 0);
    }
    cm.dispose();
}