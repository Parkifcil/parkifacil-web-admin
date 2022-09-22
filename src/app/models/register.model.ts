export class UserModelCreator {
  UserName: string;
  StrNombre: string;
  StrApellidos: string;
  PhoneNumber: string;
  StrRfc: string;
  StrDireccion: string;
  StrCP: string;
  StrRazonSocial: string;
  Email: string;
  CreatedBy?: string;
  Password: string;
  Rol: string;
  str_cp: string;
  IntIdCiudad: number;
  IntIdconcesionId: number;
}

export interface UserModelReador {
  id: string;
  strNombre: string;
  strApellidos: string;
  userName: string;
  email: string;
  bitStatus: boolean;
  intIdConcesion: number;
  strNombreCliente: string;
  strTipoUsuario: string;
  phoneNumber: string;
  intIdCiudad: number;
  intIdTipoUsuario: number;
  strRfc: string;
  strDireccion: string;
  strCp: string;
  strRazonSocial: string;
  password?: string;
}

export interface UsersResponse {
  responseCode: number;
  responseText: string;
  data: UserModelReador[];
}

export interface UserResponse {
  responseCode: number;
  responseText: string;
  data: UserModelReador;
}

