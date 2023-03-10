export default function ArticleOverview() {
	const articlesOverview1Container = document.querySelector('.article-overview__1-container');
	const articlesOverview2Container = document.querySelector('.article-overview__2-container');

	const articles1 = [
		{
			header: 'Anhalt University of Applied Sciences',
			title: 'Dessau Summer School of Architecture',
			image: '/assets/images/alan-rostovtev-eSKy3o8P_Bw-unsplash.jpg',
			alt: 'White wall',
			link: '/article.html',
			gridClass: 'article-overview__grid-span9 article-overview__grid-order1',
		},
		{
			header: 'ArkDes',
			title: 'Joar Nango: Girjegumpi',
			image: '/assets/images/mohammad-mohsen-rohani-M__1P-S3Iro-unsplash.jpg',
			alt: 'White building',
			link: '/article.html',
			gridClass: 'article-overview__grid-span4',
		},
		{
			header: 'Sabu Kohso',
			title: 'Nuclear Recursivity and Seismic Awakening',
			image: '/assets/images/albert-stoynov-Opwvoz9zwYk-unsplash.jpg',
			alt: 'Angled building',
			link: '/article.html',
			gridClass: 'article-overview__grid-span5x2 article-overview__grid-order1',
		},
		{
			header: 'Bauhaus Dessau Foundation',
			title: 'Bauhaus Lab 2023: Concrete Antarctic',
			image: '/assets/images/brice-cooper-9ZOY7LR3Imw-unsplash.jpg',
			alt: 'Building with bridge',
			link: '/article.html',
			gridClass: 'article-overview__grid-span4',
		},
	]

	const articles2 = [
		{
			header: 'Radiowaves Collective',
			title: 'Mothering a Movement: Notes from India’s Longest Anti-Nuclear Struggle',
			image: '/assets/images/op23-Mq12w9VRe5o-unsplash.jpg',
			alt: 'Glass building',
			link: '/article.html',
			gridClass: 'article-overview__grid-span9',
		},
		{
			header: 'Livia Krohn Miller',
			title: 'Ten Thousand Years of Isolation',
			image: '/assets/images/refargotohp-4gF39OLYwhk-unsplash.jpg',
			alt: 'White building',
			link: '/article.html',
			gridClass: 'article-overview__grid-span5',
		},
		{
			header: 'AA editorial',
			title: 'The Avant-Garde Museum',
			image: '/assets/images/tingfeng-xia-5Hxcox7APfc-unsplash.jpg',
			alt: 'Bridge',
			link: '/article.html',
			gridClass: 'article-overview__grid-span4',
		},
	]

	renderHTML();

	function renderHTML() {
		if (articlesOverview1Container && articlesOverview2Container) {
			renderArticles();
		}
	}

	function renderArticles() {
		for (const oneArticle of articles1) {
			const article = createArticle(oneArticle.link, oneArticle.gridClass);
			const image = createImage(oneArticle.image, oneArticle.alt); 
			const card = createCard(oneArticle.header, oneArticle.title);

			article.append(image);
			image.append(card);
			articlesOverview1Container.append(article);
		}

		for (const oneArticle of articles2) {
			const article = createArticle(oneArticle.link, oneArticle.gridClass);
			const image = createImage(oneArticle.image, oneArticle.alt); 
			const card = createCard(oneArticle.header, oneArticle.title);

			article.append(image);
			image.append(card);
			articlesOverview2Container.append(article);
		}

		function createArticle(link, gridClass) {
			const article = document.createElement('a');
			article.className = `article-overview ${gridClass}`;
			article.href = link;

			return article;
		}

		function createImage(source, alt) {
			const imageContainer = document.createElement('div');
			const image = document.createElement('img');
			
			imageContainer.className = 'article-overview__image';
			image.src = source;
			image.alt = alt;

			imageContainer.append(image);
			
			return imageContainer;
		}

		function createCard(header, title) {
			const card = document.createElement('div');
			const cardHeader = document.createElement('p');
			const cardTitle = document.createElement('p');

			card.className = 'article-overview__card';
			cardHeader.className = 'article-overview__header';
			cardTitle.className = 'article-overview__title';

			cardHeader.innerText = header;
			cardTitle.innerText = title;
			
			card.append(cardHeader);
			card.append(cardTitle);
			
			return card;
		}
	}
}