/* 
 * 2431390 - ×øÆï ·É´¬ ÓÀ¾Ã
 */
var period = 90;
var mountSkillId = 80001330;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period);
    im.dispose();
}