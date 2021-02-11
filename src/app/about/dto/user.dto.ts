import { DatePipe } from "@angular/common";

export class UserHtml {
  "Nome": string;
  "Sobrenome": string;
  "Idade": number;
  "E-mail": string;
  "Telefone": string;
  "Cidade": string;
  "Linguagens": string;
  "Nacionalidade": string;
  "Freelancer": string;

  constructor(data: UserService) {
    this["Nome"] = data ? data.first_name : null;
    this["Sobrenome"] = data ? data.last_name : null;
    this["Idade"] = data ? this._calculateAge(data.birthdate) : null;
    this["E-mail"] = data ? data.email : null;
    this["Telefone"] = data ? data.phone : null;
    this["Cidade"] = data ? data.city : null;
    this["Linguagens"] = data ? data.languages : null;
    this["Nacionalidade"] = data ? data.nationality : null;
    this["Freelancer"] = data
      ? data.freelance == true
        ? "Disponível"
        : "Indisponível"
      : null;
  }

  _calculateAge(birthday) {
    const ageDifMs = Date.now() - new Date(birthday).getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

export interface UserService {
  age: number;
  birthdate: string;
  city: string;
  createdAt: string;
  email: string;
  first_name: string;
  freelance: boolean;
  id: string;
  languages: string;
  last_name: string;
  nationality: string;
  phone: string;
  updatedAt: string;
}
