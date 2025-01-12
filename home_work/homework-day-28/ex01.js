setInterval(() => {
  const yearNow = new Date();
  const year2026 = new Date("2026-01-01T00:00:00");
  const timeExpected = year2026 - yearNow;
  const day = 1000 * 60 * 60 * 24;
  const hour = 1000 * 60 * 60;
  const minute = 1000 * 60;
  const second = 1000;
  const days = Math.floor(timeExpected / day);
  const hours = Math.floor((timeExpected % day) / hour);
  const minutes = Math.floor((timeExpected % hour) / minute);
  const seconds = Math.floor((timeExpected % minute) / second);
  let notiFiCaTion = `Còn ${days} ngày ${hours} giờ ${minutes} phút ${seconds}giây là đến năm 2026`;
  document.write(notiFiCaTion);
  document.close();
}, 1000);
