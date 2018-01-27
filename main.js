(function(gb) {
  const document = gb.document,
    target = document.activeElement.getElementsByClassName("tilt_object")[0];
  let targetData = target.getBoundingClientRect();

  let centerY = targetData.top + targetData.height / 2;
  let centerX = targetData.left + targetData.width / 2;

  target.addEventListener("mousemove", e => {
    yDifference = (centerY - e.clientY) / 5;
    xDifference = (centerX - e.clientX) / 4.5;

    target.style.transform = `rotateX(${yDifference}deg) rotateY(${xDifference}deg) rotateZ(0deg) scale(1.1,1.1)`;
  });
 
  target.addEventListener("mouseout", e => {
    target.style.transform = ` scale(1,1)`;
  });
})(window);
