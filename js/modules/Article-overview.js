export default function ArticleOverview() {
	const articles1 = [
		{
			header: 'Anhalt University of Applied Sciences',
			title: 'Dessau Summer School of Architecture',
			image: '/assets/images/alan-rostovtev.jpg',
			link: '/article.html',
		},
		{
			header: 'ArkDes',
			title: 'Joar Nango: Girjegumpi',
			image: '/assets/images/mohammad-mohsen-rohani.jpg',
			link: '/article.html',
		},
		{
			header: 'Sabu Kohso',
			title: 'Nuclear Recursivity and Seismic Awakening',
			image: '/assets/images/albert-stoynov.jpg',
			link: '/article.html',
		},
		{
			header: 'Bauhaus Dessau Foundation',
			title: 'Bauhaus Lab 2023: Concrete Antarctic',
			image: '/assets/images/brice-cooper.jpg',
			link: '/article.html',
		},
	]

	const articles2 = [
		{
			header: 'Radiowaves Collective',
			title: 'Mothering a Movement: Notes from India’s Longest Anti-Nuclear Struggle',
			image: '/assets/images/alan-rostovtev-article.jpg',
			link: '/article.html',
		},
		{
			header: 'Livia Krohn Miller',
			title: 'Ten Thousand Years of Isolation',
			image: '/assets/images/refargotohp.jpg',
			link: '/article.html',
		},
		{
			header: 'AA editorial',
			title: 'The Avant-Garde Museum',
			image: '/assets/images/tingfeng-xiav.jpg',
			link: '/article.html',
		},
	]

	function renderHTML() {
		const article = document.createElement('div');
		article.className = 'article-overview';

		const imageContainer = document.createElement('div');
		imageContainer.className = 'article-overview__image';
		const image = document.createElement('img');
		image.src = '/assets/images/alan-rostovtev-article.png';
		imageContainer.append(image);
		article.append(imageContainer);

		const card = document.createElement('div');
		card.className = 'article-overview__card';

		const cardHeader = document.createElement('p');
		cardHeader.className = 'article-overview__header';
		cardHeader.innerText = 'Bauhaus Dessau Foundation';

		const cardName = document.createElement('p');
		cardName.className = 'article-overview__header';
		cardName.innerText = 'Bauhaus Lab 2023: Concrete Antarctic';
		card.append(cardHeader);
		card.append(cardName);
		article.append(card);

		layout.append(article);
	}
}