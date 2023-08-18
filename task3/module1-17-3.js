const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';

const body = document.querySelector('body');

const renderList = () => {
    const list = document.createElement('ol');
    list.className = 'data-container';

    const span = document.createElement('span');
    span.setAttribute('hidden', '')
    span.textContent = 'Загрузка...';

    body.append(list);
    list.insertAdjacentElement("beforebegin", span);

    return { list, span };
};

const { list, span } = renderList();

const toggleLoader = () => {
    span.hidden = !span.hidden;
};

toggleLoader()

const renderAlbums = async () => {
    try {
        const response = await fetch(ALBUMS_URL);
        if (!response.ok) {
            throw new Error();
        }
        const albums = await response.json()
        
        albums.forEach(element => {
            const albumListItem = document.createElement('li');
            albumListItem.textContent = element.title;
            list.append(albumListItem);
        });
    } catch (error) {
        console.log(error);
        list.textContent = 'Произошла ошибка в получении данных об альбомах...';
    } finally {
        toggleLoader();
    }
};

renderAlbums();
