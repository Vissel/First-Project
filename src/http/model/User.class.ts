export class User{
	id: number;
	name: string;
	username: string;
	email: string;
	address: string;
	phone: number;
	website:string;
	company: string;
	constructor(name, username,email,address,phone,website,company){
		this.name = name;
		this.username = username;
		this.email = email;
		this.address = address;
		this.phone= website;
		this.company = company;
	}
}