function enter(pi) {
    if (pi.isQuestActive(22008)) {
        pi.warp(100030103, "west00");
    } else {
        pi.playerMessage("沒事的話，不能移至後院。");
    }
    return true;
}  