# Calendar
let index = 0;
let start = 1;
const trList = [];
const tdList = [];

    do {
      // 创建td
      const tdEle = document.createElement('td');

      if (week <= index) {
        tdEle.innerHTML = +start++ + '';
      } else {
        tdEle.innerHTML = '-';
      }

      tdList.push(tdEle);

      // 每七个排成一行
      if (index > 0 && index % 7 === 0) {
        // 创建tr
        const trEle = document.createElement('tr');

        tdList.forEach(tdNode => trEle.appendChild(tdNode));
        trList.push(trEle);

        tdList.length = 0;
      }
    } while (index++ < days + week);

    

    tbodyEle.innerHTML = '';
    trList.forEach(trNode => tbodyEle.appendChild(trNode));
