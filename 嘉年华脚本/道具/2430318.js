/* 
 * 2430318 - 青蛙90天交换券 - 双击可以在90天内使用[青蛙]骑宠技能。
 */
var period = 90;
var mountSkillId = 10001121;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period, true);
    im.dispose();
}