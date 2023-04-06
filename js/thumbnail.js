const thumbnailTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');
const container = document.querySelector('.pictures');

const createThumbnail = (photo) => {
  const {url, description, comments, likes, id} = photo;
  const thumbnail = thumbnailTemplate.cloneNode(true);
  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.message.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__img').dataset.thumbnailid = id;

  return thumbnail;
};

const renderThumbnails = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });
  container.append(fragment);
};

export {renderThumbnails};
