export default function CircleModule() {
  // tính toán và phân bổ vị trí item lên hình tròn
  function updateCircleItemsPosition() {
    const circleItems = document.querySelectorAll('.circle-item');
    const circleList = document.querySelector('.circle-list');
    const itemCount = circleItems.length;
    const radius = circleList?.offsetWidth / 2;
    const angle = (2 * Math.PI) / itemCount;

    if (circleList) {
      circleItems.forEach((item, index) => {
        const itemAngle = angle * index;
        const x = Math.round(radius + radius * Math.cos(itemAngle)) - item.offsetWidth / 2;
        const y = Math.round(radius + radius * Math.sin(itemAngle)) - item.offsetHeight / 2;
        item.style.left = `${x}px`;
        item.style.top = `${y}px`;
      });
    }
  }

  // Gọi hàm khi trang tải lần đầu
  updateCircleItemsPosition();

  // Gọi hàm khi cửa sổ trình duyệt thay đổi kích thước
  window.addEventListener('resize', updateCircleItemsPosition);

  function alignCircleText() {
    const circleItems = document.querySelectorAll('.circle-item');
    circleItems.forEach(circleItem => {
      const circleText = circleItem.querySelector('.circle-text');
      const circleItemRect = circleItem.getBoundingClientRect();
      const circleTextRect = circleText.getBoundingClientRect();

      if (circleItemRect.left < window.innerWidth / 2) {
        circleText.style.left = '-320%';
        circleText.style.right = 'auto';
        circleText.style.textAlign = 'right';
      } else {
        circleText.style.left = 'auto';
        circleText.style.right = '-320%';
        circleText.style.textAlign = 'left';
      }
    });
  }

  window.addEventListener('resize', alignCircleText);
  alignCircleText();
}