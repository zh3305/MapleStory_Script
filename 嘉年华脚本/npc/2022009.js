function action(mode, type, selection) {
    if (cm.haveItem(2022698)) {
        cm.removeNpc(2022009);
        cm.nextNodeAction(9300275, 0);
        cm.startMapEffect("如果你们在护卫我的时候，我陷入了危险，你们必须毫不犹豫地让我喝下万年冰河水。那就继续吧？", 5120035);
    } else {
        cm.sendNext("你们要喝万年冰河水吗？");
    }
    cm.dispose();
}
