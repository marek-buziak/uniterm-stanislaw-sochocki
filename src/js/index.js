document.onreadystatechange = () => {
if (document.readyState === 'complete') {

//	console.log(blurredElements(document.querySelector('body')));	
disableScrollOnNavbarShow(document.querySelector('button.navbar-toggler'), document.querySelector('body'));
		stickyNavbar();
//	NavbarTopToggler();

		// Jeśli w pamięci lokalnej przeglądarki jest klucz langStorage o wartości 'en' - zastosuj go
		if (localStorage.getItem('langStorage') === 'en') {
document.documentElement.lang = localStorage.getItem('langStorage');
		const langInit = localStorage.getItem('langStorage');
//		console.log('Język strony - z pamięci lokalnej:', langInit);
		fieldsTranslator(document.documentElement.lang, getTranslationsFields('[data-translate]'), translations[document.documentElement.lang]);
		// pokaż string "POLAND" na ekranie, pod kodem pocztowym i miejscowością
		document.querySelector('p.country').style.display = "block";
}

//	const currentPath = window.location.pathname;
//	console.log('ściezka względna:', currentPath.replace('/',''));
		if (document.body.contains(document.querySelector('div.gallery-content')) || document.body.contains(document.querySelector('div.credentials-content'))) {
			console.log('istnieje galeria!');
//			new Glide('.glide', {
//				perView: 5,
//				breakpoints: {
//				
//					1200: {
//						perView: 3
//					},
//					768: {
//						perView: 2
//					},
//					576: {
//						perView: 1
//					}
//				}
//			}).mount();

			const lightbox = GLightbox({
				touchNavigation: true,
				loop: true,
				onOpen: () => {
					console.log('Lightbox opened')
				}
			});
		}



langSelect();
//	// w przeciwnym wypadku dokument zachowuje wartość domyślną jezyka - 'pl'
//	else {
//		const langDefault = document.documentElement.lang;
//		console.log('Język strony - domyślny HTML:', langDefault);
//		langSelect(langDefault);
//	}



//	const langDefault = document.documentElement.lang;
//	console.log('jezyk strony',pageLang);

//	console.log(lang.pl.pageTitle);
//	console.log(lang.en.pageTitle);
//		console.log('ścieżka', window.location.pathname);
//		console.log('cały url', window.location.href);
//		console.log('pl:', translations.pl.navHome, 'en:', translations.en.navHome);

//		getTranslationsFields('[data-translate]');
//		langSelect(langDefault);
//		stickyNavbar();
}

};
//const translateCurrentURL = (param) => {
//	
//	param.addEventListener('click', (e) => {
//		e.current
//	});
//};


// Kliknięcie flagi/wybór języka 
		const langSelect = () => {

//	console.log('wybór jezyka działa');
const langFlag = document.querySelector('div.lang');
		langFlag.addEventListener('click', (e) => {
		if (e.target.tagName === 'IMG'){

		const pageLang = document.documentElement.lang;
//			console.log('Język strony początkowy:',pageLang);

				const langChoice = e.target.parentElement.getAttribute('class');
//			console.log('klasa:',langChoice);
//			window.location.assign('http://local.uniterm.test:8080/');

				const currentPathFull = window.location.pathname;
//			const currentPathShort = currentPathFull.replace('/','');
//			console.log('Ściezka aktualna:', currentPathShort);
//			const currentPath = window.location.pathname;
//			const currentUrl = window.location.href;

//				console.log('ściezka względna:', currentPathFull);
//			console.log('cały adres:', currentUrl);

//			let pageLang = document.documentElement.lang;

//			changeDocLang(langChoice);

//			console.log('pageLang:', pageLang);
//			console.log('langChoice:', langChoice);

				if (pageLang !== langChoice) {
//				console.log('zmiana języka!');
		
		// nadanie tagowi p o klasie country display "block"
		if (langChoice === 'en') {
			 document.querySelector('p.country').style.display = "block";
		}
		else {
			document.querySelector('p.country').style.display = "none";
		}
		 
		// rozwiązanie aktualizacji adresu URL - nieeleganckie, do przemyślenia i późniejszej ewentualnej zmiany
//		if (currentPathFull === '/' && langChoice === 'en') { window.location.assign('home'); }
//		if (currentPathFull === '/' && langChoice === 'pl') { window.location.assign('strona-glowna'); }
////				
//		if (currentPathFull === '/strona-glowna' && langChoice === 'en') { window.location.assign('home'); }
//		if (currentPathFull === '/home' && langChoice === 'pl') { window.location.assign('strona-glowna'); }
//
//		if (currentPathFull === '/kilka-slow-o-nas' && langChoice === 'en') { window.location.assign('a-few-words-about-us'); }
//		if (currentPathFull === '/a-few-words-about-us' && langChoice === 'pl') { window.location.assign('kilka-slow-o-nas'); }
//
//		if (currentPathFull === '/korzysci-wspolpracy' && langChoice === 'en') { window.location.assign('benefits-of-cooperation'); }
//		if (currentPathFull === '/benefits-of-cooperation' && langChoice === 'pl') { window.location.assign('korzysci-wspolpracy'); }
//
//		if (currentPathFull === '/referencje-kontrahentow' && langChoice === 'en') { window.location.assign('contractors-credentials'); }
//		if (currentPathFull === '/contractors-credentials' && langChoice === 'pl') { window.location.assign('/referencje-kontrahentow'); }
//
//		if (currentPathFull === '/galeria-zrealizowanych-prac' && langChoice === 'en') { window.location.assign('/gallery-of-completed-works'); }
//		if (currentPathFull === '/gallery-of-completed-works' && langChoice === 'pl') { window.location.assign('/galeria-zrealizowanych-prac'); }

		// tłumaczenie pól
		fieldsTranslator(changeDocLang(langChoice), getTranslationsFields('[data-translate]'), translations[langChoice]);
		}

//			
//			else if (langChoice == 'en') {
//				
////				console.log('zmiana na angielski');
//				
//				changeDocLang(langChoice);
////				changeWindowLocation(currentUrl, currentPath, langChoice, pageLang);
//			}

//BACKUP START
//			const langChoice = e.target.parentElement.getAttribute('data-lang');
////			console.log(e.target.parentElement.getAttribute('data-lang'));
////			window.location.assign('http://local.uniterm.test:8080/');
//			
//			let currentPath = window.location.pathname;
//			let currentUrl = window.location.href;
//			
//			console.log(currentPath);
////			console.log(langChoice);
//			
//			let pageLang = document.documentElement.lang;
//			console.log('jezyk strony',pageLang);
//			
//			if (langChoice == 'pl') {
////				console.log('zmiana na polski');
//				
//				changeDocLang(langChoice);
//				changeWindowLocation(currentUrl, currentPath, langChoice, pageLang);
//			}
//			
//			else if (langChoice == 'en') {
//				
////				console.log('zmiana na angielski');
//				
//				changeDocLang(langChoice);
//				changeWindowLocation(currentUrl, currentPath, langChoice, pageLang);
//			}
//BACKUP END
		}
		});
		};
// Funkcja zczytująca wszystkie pola, które bedą tłumaczone - wartości data-translate
		const getTranslationsFields = (param) => {

//	console.log('Funkcja getTranslationsFields działa!');
const translationsFields = document.querySelectorAll(param);
//	console.log('Elementy, których wartości tekstowe będą tłumaczone:', translationsFields);

//	translationsFields.forEach(function (elem) {
////		console.log('Element:', elem,'Wartość atrybutu data-translate:',elem.getAttribute('data-translate'));
//		console.log(elem);
//	});
		return translationsFields;
		};
// Funkcja uaktualniająca atrybut "lang" html w zalezności od wybranego języka i ustanawiająca zmienną localStorage przechowującą ten język
		const changeDocLang = (param) => {

//	console.log('Funkcja changeDocLang działa!');	
const docLang = param;
//	console.log(docLang);
		document.documentElement.lang = docLang;
		localStorage.setItem('langStorage', docLang);
		return docLang;
		};
// Funkcja zczytująca aktualny język dokumentu html (wartość zwracana przez funkcję changeDocLang) i w oparciu o ten język dokonuje niezbędnych zmian wartości tekstowych pól, które mają byc tłumaczone - pola z atrybutem data-translate
		const fieldsTranslator = (lang, translateFields, translationsObj) => {
//	console.log('Funkcja fieldTranslator działa!');

translateFields.forEach((field) => {

//if (field.getAttribute('data-hreftranslate') != null) {
//const langHrefKey = field.getAttribute('data-hreftranslate');
//		console.log(langHrefKey);
//		field.setAttribute('href', translationsObj[langHrefKey]);
////			window.location.assign('/' + translationsObj[langHrefKey]);
//}

if (field.getAttribute('data-translate') !== 'false') {
const langTextKey = field.getAttribute('data-translate');
		//		console.log('Klucz językowy:',langTextKey);
		field.innerHTML = translationsObj[langTextKey];
}



//		console.log(field.getAttribute('data-translate'));
//		if (field.getAttribute('data-hreftranslate') != null) {
//			console.log(field.getAttribute('data-hreftranslate'));
//		}

});
//	const currentPath = window.location.pathname;
//	console.log('ściezka względna:', currentPath.replace('/',''));


//	console.log('Tłumaczenia',translationsObj[lang]);
//	console.log('Język:',lang);

//	console.log('Język:', lang);
//	console.log('Pola, które będą tłumaczone:', translateFields)
//	console.log('Obiekt z tłumaczonymi tekstami:', translationsObj);
		};
// Funkcja edytująca bieżący href; przekierowanie do wybranej podstrony w obrębie wybranego języka
		const changeWindowLocation = (currUrl, currPath, lang, langPage) => {

const currentPathName = currPath;
		const currentUrl = currUrl;
		const currentPageLang = langPage;
		const targetLang = lang;
//		console.log('obecna lokalizacja:', currentPathName);
//		console.log('obecny href', currentUrl);
//		console.log('wybrany jezyk:', targetLang);
//	if (currentPathName == '/' && currentPageLang != targetLang) {
//		
//		const newPathName = 'lang/' + targetLang + '/index.html';
//		const newUrl = currentUrl + newPathName;
//		
//		console.log('obecnie jesteś na stronie głównej');
//		console.log('przekierowanie do',newPathName);
//		console.log('Pełny URL:,', newUrl);
//		window.location.assign(newUrl);
//	}
//	
//	else if (currentPathName != '/' && currentPageLang != targetLang){
//		
//		const newUrl = currentUrl.replace(currentPageLang, targetLang);
//		console.log('currentUrl:', currentUrl);
//		console.log('Nowy url:', newUrl);
//		window.location.assign(newUrl);
//		
//	}

		if (currentPathName == '/' && currentPageLang != targetLang) {

//		const newPathName = 'lang/' + targetLang + '/index.html';
//		const newUrl = currentUrl + newPathName;
//console.log('obecnie jesteś na stronie głównej');
//		console.log('zmiana języka!');
		if (targetLang == 'en') {
const newUrl = currentUrl + 'home';
		window.location.assign(newUrl);
}


//		console.log('przekierowanie do',newPathName);
//		console.log('Pełny URL:,', newUrl);
//		window.location.assign(newUrl);
}

else if (currentPathName != '/' && currentPageLang != targetLang) {

//		const newUrl = currentUrl.replace(currentPageLang, targetLang);
//		console.log('currentUrl:', currentUrl);
//		console.log('Nowy url:', newUrl);
//		window.location.assign(newUrl);

if (targetLang == 'pl' && currentPathName == '/home') {
const newUrl = currentUrl.replace(currentPathName, '/strona-glowna');
		window.location.assign(newUrl);
}

else if (targetLang == 'en' && currentPathName == '/strona-glowna') {
const newUrl = currentUrl.replace(currentPathName, '/home');
		window.location.assign(newUrl);
}
}

};
// Przyklejanie menu-navbar do góry strony przy scrollowaniu
// TODO - ogarnąć przeliczanie wysokości navbar parenta przy kliknięciu toggler'a dla menu na mobilu!
		const stickyNavbar = () => {
//console.log('stickyNavBar działa!');
		const navbar = document.querySelector('#navbar-wrapper');
		const navbarParent = navbar.parentElement;
//		console.log(navbarParent);
		const navbarParentOffsetHeight = navbarParent.offsetHeight;
//		console.log('Navbar Parent offset:', navbarParentOffsetHeight);
//	const compStyles = window.getComputedStyle(navbarSibling);
//	const navbarSiblingPaddingTop = compStyles.getPropertyValue('padding-top');
//	const navbarSiblingPaddingTopRaw = parseInt(navbarSiblingPaddingTop.replace('px', ''));
//	console.log(navbarSiblingPaddingTopRaw);

		window.addEventListener('scroll', () => {

		if (window.scrollY > 0) {
//			navbarSibling.style.paddingTop = navbarOffsetHeight+navbarSiblingPaddingTopRaw+16+'px';
		navbarParent.style.height = navbarParentOffsetHeight + 'px';
				navbar.classList.add('sticky');
		}
//		
		else if (window.scrollY === 0) {

		navbar.classList.remove('sticky');
				navbarParent.style.height = 'auto';
////			navbarSibling.style.paddingTop = navbarSiblingPaddingTop;

		}
		});
		};
// wyłączenie paska scrollowania, gdy na widoku mobilnym rozwinięte zostanie menu górne
		const disableScroll = (bodyElem) => {


if (bodyElem.classList.contains('scroll-disabled')) {
//		addBlur(false, document.querySelector('div.lp-content-outer'), document.querySelector('footer'), document.querySelector('p.copy'));
addBlur(false, blurredElements(document.querySelector('body')));
		bodyElem.classList.remove('scroll-disabled');
}
else {
bodyElem.classList.add('scroll-disabled');
//		addBlur(true, document.querySelector('div.lp-content-outer'), document.querySelector('footer'), document.querySelector('p.copy'));
		addBlur(true, blurredElements(document.querySelector('body')));
}
};
// funkcja wywołująca wyłączenie scroll'a przy kliknięciu przycisku rozwijania menu górnego
		const disableScrollOnNavbarShow = (trigger, bodyElem) => {

trigger.addEventListener('click', () => {
disableScroll(bodyElem);
});
		};
		const addBlur = (trigger, elems) => {

if (trigger) {

elems.forEach((e) => {
e.classList.add('blur-overlay');
});
}

else {

elems.forEach((e) => {
e.classList.remove('blur-overlay');
});
}

};
		const blurredElements = (parentElem) => {

let parentChildren = [];
		for (const item of parentElem.children) {
//	console.log('Dziecko:', item);
if (item === parentElem.firstElementChild || item.tagName === 'SCRIPT') {
continue;
}
parentChildren.push(item);
		}

return parentChildren;
		};