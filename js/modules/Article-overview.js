export default function ArticleOverview() {
	const articlesOverview1Container = document.querySelector('.article-overview__1-container');
	const articlesOverview2Container = document.querySelector('.article-overview__2-container');

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
			image: '/assets/images/alan-rostovtev-article.png',
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
			image: '/assets/images/tingfeng-xia.jpg',
			link: '/article.html',
		},
	]

	renderHTML();

	function renderHTML() {
		renderArticles();
	}

	function renderArticles() {
		for (const oneArticle of articles1) {
			const article = createArticle(oneArticle.link);
			const image = createImage(oneArticle.image); 
			article.append(image);
			const card = createCard(oneArticle.header, oneArticle.title);
			article.append(card);
			articlesOverview1Container.append(article);
		}

		for (const oneArticle of articles2) {
			const article = createArticle(oneArticle.link);
			const image = createImage(oneArticle.image); 
			article.append(image);
			const card = createCard(oneArticle.header, oneArticle.title);
			article.append(card);
			articlesOverview2Container.append(article);
		}

		function createArticle(link) {
			const article = document.createElement('div');
			article.className = 'article-overview';
			article.href = link;

			return article;
		}

		function createImage(source) {
			const imageContainer = document.createElement('div');
			imageContainer.className = 'article-overview__image';

			const image = document.createElement('img');
			image.src = source;
			imageContainer.append(image);
			
			return imageContainer;
		}

		function createCard(header, title) {
			const card = document.createElement('div');
			card.className = 'article-overview__card';
	
			const cardHeader = document.createElement('p');
			cardHeader.className = 'article-overview__header';
			cardHeader.innerText = header;
	
			const cardTitle = document.createElement('p');
			cardTitle.className = 'article-overview__header';
			cardTitle.innerText = title;
			card.append(cardHeader);
			card.append(cardTitle);
			
			return card;
		}
	}
}