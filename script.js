const list = document.getElementById('type-picker');
const listElements = list.querySelectorAll('li');
const selectButton = document.getElementById("check-type");


listElements.forEach((element) => {
  element.innerHTML = `<img src="${element.getAttribute('data-thumbnail')}"/> <span>${element.innerText}</span>`;
  element.onclick = () => {
    list.style.display = 'none';
    selectButton.setAttribute('value', element.getAttribute('value'));
    selectButton.innerHTML = element.outerHTML;
  };
});

selectButton.innerHTML = listElements[0].outerHTML;
selectButton.setAttribute('value', listElements[0].getAttribute('value'));


selectButton.onclick = (e) => {
  e.preventDefault();
  list.style.display = list.style.display === 'block' ? 'none' : 'block';
};