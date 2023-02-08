
const gallery = document.querySelector('.gallery');
export function renderMarkup(pictures) {
  const markup = pictures.reduce((acc, { webformatURL, tags, largeImageURL, likes, views, comments, downloads }) => {
    return acc + `
      
   <div class="gallery-item">
   <a class="gallery__link" href="${largeImageURL}">
   <div class = "item">
    <img  src="${webformatURL}" alt="${tags}" loading="lazy" width = "200"/>
    </div></a> 
    <div class="info">
        <p class="info-item"><span>${likes}</span>
            <b>Likes</b>
        </p>
        <p class="info-item"><span>${views}</span>
            <b>Views</b>
        </p>
        <p class="info-item"><span>${comments}</span>
            <b>Comments</b>
        </p>
        <p class="info-item"><span>${downloads}</span>
            <b>Downloads</b>
        </p>
   </div>
</div>`}, '')

    return gallery.insertAdjacentHTML('beforeend', markup)
}