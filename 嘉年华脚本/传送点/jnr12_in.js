function enter(pi) {
    if (pi.getMap().getCharactersSize() >= 1) {
        pi.warpParty(926110401, 0);
    } else {
        pi.playerMessage(5, "请确认每一个队员都在这!");
    }
}
