/* 
 * 2432293 - ×øÆï ÄÏ¹ÏÂí³µ ÓÀ¾Ã
 */
var period = -1;
var mountSkillId = 80001329;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period);//, true);
    im.dispose();
}