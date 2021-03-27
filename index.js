/**
 * Created by Yes.Man on 2021/3/19 4:09 下午.
 * name: 日历
 */

class Calendar {
  /**
   * 初始化
   */
  init () {
    // 年选择器
    this.yearEle = document.getElementById('year');

    // 月选择器
    this.monthEle = document.getElementById('month');

    // 生成select选项
    this.genSelectOptions(this.yearEle, 1900, 2050);
    this.genSelectOptions(this.monthEle, 1, 12);

    // 查询按钮
    const queryEle = document.getElementById('query');

    // 给查询按钮绑定change事件
    queryEle.addEventListener('click', this.query.bind(this));

    // 默认取当前年月
    const now = new Date();
    this.yearEle.value = now.getFullYear();
    this.monthEle.value = now.getMonth() + 1;
    this.query();
  }

  /**
   * 获取年
   * @return { year }
   */
  get year () {
    return this.yearEle.value;
  }

  /**
   * 获取月
   * @return { month }
   */
  get month () {
    return this.monthEle.value;
  }

  /**
   * 生成select选项
   * @param ele 插入的父元素
   * @param startVal 起始值
   * @param endVal 结束值
   */
  genSelectOptions (ele, startVal, endVal) {
    do {
      // 创建option
      const optionEle = document.createElement('option');
      optionEle.innerHTML = optionEle.value = startVal + '';

      // 插入到ele
      ele.appendChild(optionEle);
    } while (startVal++ < endVal);
  }

  /**
   * 查询
   */
  query () {
    const { year, month } = this;

    // 判断是否选择年月
    if (Number(year) > 0 || Number(month) > 0) {
      this.genDayList();
    } else {
      alert('请选择年月！');
    }
  }

  /**
   * 获取天数
   * @param year
   * @param month
   * @return { number }
   */
  getDays (year, month) {
    return new Date(year, month, 0).getDate();
  }

  /**
   * 获取星期几
   * @param year
   * @param month
   * @param day
   * @return { number }
   */
  getWeek (year, month, day) {
    return new Date(year, month - 1, day).getDay();
  }

  /**
   * 排列日期
   */
  genDayList () {
    const { year, month } = this;

    // 获取 year 年 month 月 1 日 星期几
    const dayStart = this.getWeek(year, month, 1);

    // 获取 year 年 month 月 天数
    const days = this.getDays(year, month);

    // 获取 year 年 month - 1 月 天数
    const preDays = this.getDays(year, month - 1);

    // 获取 year 年 month + 1 月 天数
    const nextDays = this.getDays(year, month + 1);

    // 获取 year 年 month 月 周数
    const weeks = Math.ceil((days + dayStart) / 7);

    // 获取tbody
    const tbodyEle = document.querySelector('tbody');
    tbodyEle.innerHTML = '';

    // 排列日期
    let start = 1;
    let next = 1;
    for (let week = 1; week <= weeks; week++) {
      const trEle = document.createElement('tr');

      // 每周排列 0 - 6
      for (let day = 0; day <= 6; day++) {
        const tdEle = document.createElement('td');
        const fontEle = document.createElement('font');

        tdEle.appendChild(fontEle);

        if ((week > 1 || (week === 1 && day >= dayStart)) && start <= days) {
          fontEle.innerHTML = String(start++);
          tdEle.className = 'current-month';
        } else if (week === 1 && day < dayStart) {
          // // 上个月
          fontEle.innerHTML = preDays - (dayStart - day - 1) + '';
          tdEle.className = 'pre-month';
        } else {
          // 下个月
          fontEle.innerHTML = String(next++);
          tdEle.className = 'next-month';
        }

        trEle.appendChild(tdEle);
      }

      tbodyEle.appendChild(trEle);
    }
  }
}

/**
 * 初始化加载
 */
function init () {
  console.log('window onload.');
  new Calendar().init();
}
