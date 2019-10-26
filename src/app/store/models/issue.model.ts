export interface Issue{
	title: string;
	createdAt: string;
	publisher: string;
	url: string;
}

export class Issue{
	title: string;
	createdAt: string;
	publisher: string;
	url: string;

	constructor(pTitle: string, pCreatedAt: string, pPublisher:string, pUrl: string ){
		this.title = pTitle;
		this.createdAt = pCreatedAt;
		this.publisher = pPublisher;
		this.url = pUrl;
	}
}