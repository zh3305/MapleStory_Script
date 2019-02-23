/* 
 * 2430416 - 妮娜的魔法7天使用券 - 妮娜的魔法7天使用券.\r\n#c双击后可以在7天内使用好朋友坐骑技能.#
 */
var period = 7;
var mountSkillId = 80001058;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period);
    im.dispose();
}