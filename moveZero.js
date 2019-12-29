/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  // 先找到所有不为零的选项将它们保存在一个新数组中，然后让新数组中的所有不为零的选项都放在原数组的前面，再把原数组后面的选项都设为零那么就实现了移动零
  /**
     let nozeroNums = nums.filter(e => e != 0);
      nums.forEach((e, i) => {
      nums[i] = i < nozeroNums.length ? nozeroNums[i] : 0;
  });
 */
  //定义一个初始值为零的变量，对数组进行一次循环将所有不为零的选项都防止数组的前面，为零的选项都放在后面
  /**
   let j = 0;
   for (i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[j] = nums[i];
      if (i != j) {
        nums[i] = 0;
      }
      j++;
    }
  }
  */
};
// @lc code=end
