var status = -1;

function action(mode, type, selection) {
    status++;
    if (status == 0) {
        cm.sendNext("背着大人偷偷地出来，我有点紧张。虽然可能会被骂，但好不容易有哥哥姐姐陪我玩，就算被骂也没关系。");
    } else if (status == 1) {
        cm.dispose();
    }
}