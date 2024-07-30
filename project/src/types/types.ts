export interface IUploadFiles {
    path: string;
    name: string;
    description: string;
    size: string;
    type: string;
    uploadTime: string;
    converted: boolean;
}

export interface IMenuItem {
    id: number;
    name: string;
    value: string;
    link: string;
}

export interface IActiveFilter {
    status: Status,
    converted?: boolean,
}

export enum Status {
    ACTIVE = 'active',
    IN_ARCHIVE = 'archive',
}

export enum FileDanger {
    DANGER = 'danger',
    ANALIS = 'analis',
    CHECKED = 'checked',
}

export interface IFileCategory {
    id: number;
    name: string;
    value: IActiveFilter;
}

export interface ISaveFile {
    id: number,
    name: string,
    description: string,
    path: string,
    size: string,
    type: string,
    uploadTime: string,
    converted: boolean,
    status: Status,
    danger: FileDanger,
    isChecked: boolean,
}

export enum RootStore {
    DATA = 'data',
    USER = 'user',
}

export enum FormFieldType {
    INPUT = 'input',
    SELECT = 'select',
}

export enum Department {
    D1 = 'Подразделение 1',
    D2 = 'Подразделение 2',
    D3 = 'Подразделение 3',
}

export type LoginFormSelect = { name: Department, value: number }[];

export interface FormField {
    id: string;
    name: string;
    label: string;
    placeholder?: string;
    inputType: FormFieldType,
    type?: string;
    className?: string;
    options?: LoginFormSelect,
}

export interface LoginFormData {
    firstName: string;
    lastName: string;
    tel: string;
    email: string;
    password: string;
    userKey: string;
    department: string;
}

export interface UserData {
    id: string;
    firstName: string;
    lastName: string;
    tel: string;
    email: string;
    userRights: string;
    department: string;
    userFiles: string[];
}



