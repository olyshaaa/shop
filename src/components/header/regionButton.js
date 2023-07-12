const regionCityButton = document.querySelector('.region-city-button')
const regionName = document.querySelector('.region-name-button')

regionCityButton.addEventListener('mouseover', ()=>{
    regionName.classList.add('hovered')
    regionCityButton.classList.add('hovered')
})

regionCityButton.addEventListener('mouseout', function() {
    regionCityButton.classList.remove('hovered');
    regionName.classList.remove('hovered');
  });