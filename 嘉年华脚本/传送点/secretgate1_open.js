/*
Stage 4: Mark of Evil Door - Guild Quest

@Author Lerk
*/

function enter(pi) {
    if (pi.getMap().getReactorByName("secretgate1").getState() == 1) {
        pi.warp(990000611, 1);
        return true;
    } else {
        pi.playerMessage("这个门是关闭的。");
        return false;
    }
}
