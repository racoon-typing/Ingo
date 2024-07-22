export interface IUploadFiles {
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

export interface IFileCategory {
    id: number;
    name: string;
    value: string;
}