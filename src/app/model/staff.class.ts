export class Staff{
	public code : string;
	public name : string;
	public gender : number;
	public birthday : string;
	public phone : string;
	public email : string;
	public degree : string;
	public lookStatus : number;

	constructor(code: string, name:string, gender: number, birthday: string, phone: string,
		email: string, degree: string, lookStatus: number){
		this.code = code;
		this.name = name;
		this.gender = gender;
		this.birthday = birthday;
		this.phone = phone;
		this.email = email;
		this.degree = degree;
		this.lookStatus = lookStatus;
	}
}