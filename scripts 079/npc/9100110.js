function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
		cm.sendOk("出错啦.你不是管理员.");
		cm.dispose();
	}
}