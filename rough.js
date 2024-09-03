
  const boxes = document.querySelectorAll('.box');
  const container = document.querySelector('.container');
  
  function handleBoxClick(event) {
      const boxContent = event.target.textContent;
  
      container.textContent += boxContent + ' ';
  }
  
  boxes.forEach(box => {
      box.addEventListener('click', handleBoxClick);
  });
  


  