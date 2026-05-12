export type PressKind = 'review' | 'interview' | 'overview' | 'article';

export type PressEntry = {
	url: string;
	title: string;
	publisher: string;
	publisherUrl?: string;
	datePublished: string;
	kind: PressKind;
	author?: string;
	imageKey?: string;
	imageAlt?: string;
};

export const press: PressEntry[] = [
	{
		url: 'https://www.wz.de/nrw/wuppertal/abschluss-des-tanzrauschen-festivals-on-move-move-on_aid-148164699',
		title: 'Closing of the Tanzrauschen Festival "on move/move on"',
		publisher: 'Westdeutsche Zeitung',
		publisherUrl: 'https://www.wz.de',
		datePublished: '2026-05-11',
		kind: 'review',
		author: 'Bernadette Brutscheid',
		imageKey: 'tanzrauschen',
		imageAlt: 'Jasmine Fan performing with a wooden chair under deep red stage light at the Tanzrauschen Festival closing event',
	},
	{
		url: 'https://www.der-theaterverlag.de/tanz/aktuelles-heft/artikel/videoueberwachung/',
		title: 'Videoüberwachung',
		publisher: 'Der Theater Verlag tanz',
		publisherUrl: 'https://www.der-theaterverlag.de',
		datePublished: '2023-11',
		kind: 'article',
	},
	{
		url: 'https://danceartjournal.com/2023/08/09/are-you-viewing-or-being-viewed-surveillance-in-and-out-of-the-performance-space/',
		title: 'Are you viewing or being viewed? Surveillance in and out of the performance space',
		publisher: 'Dance Art Journal',
		publisherUrl: 'https://danceartjournal.com',
		datePublished: '2023-08-09',
		kind: 'interview',
	},
	{
		url: 'http://www.hamburgtheater.de/03c198b00d104c00a.html',
		title: 'Schutz oder Kontrolle?',
		publisher: 'Hamburgtheater',
		publisherUrl: 'http://www.hamburgtheater.de',
		datePublished: '2023-05-23',
		kind: 'overview',
	},
];
