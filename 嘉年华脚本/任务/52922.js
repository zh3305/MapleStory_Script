var status = -1;
var complete = false;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        qm.sendNext("鐐轰簡灏嶆姉閫愭几璁婂挤鐨勯粦鏆楀姏閲�,妤撲箣璋风殑鎵�鏈夊媷澹繀闋堜竴璧疯畩寮�.");
    } else if (status == 1) {
        qm.sendNextPrev("鍕囧＋闃�...绲︿綘娉ㄥ叆浜嗘垜鐨勫姏閲忕殑妤撴柟濉�");
    } else if (status == 2) {
        qm.sendNextPrev("閫欏�嬫柟濉婃槸鍙や唬鐓夐噾琛撳斧瑁戒綔鐨�,闆栫劧鏍规摎浣跨敤娆℃暩闇�瑕佺殑妤撳梗鏈冮�愭几澧炲姞,浣嗛�欏�嬫柟濉婃槸涓嶆渻閬滄柤浠ュ墠鏀厤妤撲箣璋风殑鍚勭ó鏂瑰鐨�.");
    } else if (status == 3) {
        qm.sendNextPrev("鐝惧湪瑕侀噸鏂版敞鍏ユ垜鐨勫姏閲�,璜嬫敹涓�..");
    } else if (status == 4) {
        if (!complete) {
            qm.gainItemPeriod(3994895, 1, 12, true, "");
            qm.forceCompleteQuest();
            complete = true;
        }
        qm.sendNextPrevS("鍥犵偤鍦ㄧ灛闁撶Щ鍕曚腑鍥犳鐒℃硶娉ㄥ叆澶鍔涢噺,浣嗚珛涓嶈鎿斿績.", 1);
    } else if (status == 5) {
        qm.sendNextPrevS("鑻ヨΚ鑷締鏉戣帄鎵炬垜,鎴戞渻瑁戒綔鎿佹湁鏇村鍔涢噺鐨勬柟濉婄郸浣�.", 1);
    } else if (status == 6) {
        qm.dispose();
    }
}
