/**
 * Created by Yes.Man on 2021/3/19 4:09 下午.
 * name: 日历
 */

// 年份选择
const yearEle = document.getElementById('year');

for (let year = 1900; year <= 2050; year++) {
  const optionEle = document.createElement('option');
  optionEle.innerHTML = year + '';
  optionEle.value = year + '';
  // yearEle.insertAdjacentElement('beforeend', optionEle);
  yearEle.appendChild(optionEle);
}

// 月份选择
const monthEle = document.getElementById('month');

for (let month = 1; month <= 12; month++) {
  const optionEle = document.createElement('option');
  optionEle.innerHTML = month + '';
  optionEle.value = month + '';
  // monthEle.insertAdjacentElement('beforeend', optionEle);
  monthEle.appendChild(optionEle);
}
