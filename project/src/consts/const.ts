import { AuthFormData } from "../pages/auth-page/AuthPage";
import { LoginFormData } from "../pages/login-page/LoginPage";
import { Department, FileDanger, FormField, FormFieldType, Status } from "../types/types";

export const CURRENT_USER = 'current_user';

export const menuList = [
    {
        id: 1,
        name: "Личный кабинет",
        value: "account",
        link: '/account'
    },
    {
        id: 2,
        name: "Загрузить файлы",
        value: "upload",
        link: '/upload'
    },
    {
        id: 3,
        name: "Загруженные файлы",
        value: "files",
        link: '/files'
    },
    {
        id: 3,
        name: "Папки",
        value: "folder",
        link: '/folder'
    },
    // {
    //     id: 4,
    //     name: "Статистика",
    //     value: "statistic",
    //     link: '/statistic'
    // },
];

export const userData = {
    name: 'Даниил Суворов',
    email: 'eo18622@yandex.ru',
    status: 'участник',
    unit: 'ВП',
}

export const userUploadFiles = [
    {
        path: 'document-1.pdf',
        name: 'Документ 2',
        description: 'Первый тестовый документ',
        size: '1.5 MB',
        type: 'PDF',
        uploadTime: '10:30 17/07/2024',
    },
    {
        path: 'image-1.jpeg',
        name: 'Изображение 1',
        description: 'Тестовое изображение высокого качества',
        size: '3.2 MB',
        type: 'JPEG',
        uploadTime: '11:15 17/07/2024',
    },
    {
        path: 'video-1.mp4',
        name: 'Видео 1',
        description: 'Тестовое видео файл',
        size: '20 MB',
        type: 'MP4',
        uploadTime: '12:00 17/07/2024',
    },
    {
        path: 'document-2.docx',
        name: 'Документ 22',
        description: 'Второй тестовый документ',
        size: '2.5 MB',
        type: 'DOCX',
        uploadTime: '12:45 17/07/2024',
    },
    {
        path: 'audio-1.mp3',
        name: 'Аудио 1',
        description: 'Тестовый аудио файл',
        size: '5 MB',
        type: 'MP3',
        uploadTime: '13:30 17/07/2024',
    },
    {
        path: 'audio-2.mp3',
        name: 'Аудио 2',
        description: 'Тестовый аудио файл',
        size: '5 MB',
        type: 'MP3',
        uploadTime: '13:30 17/07/2024',
    },
    {
        path: 'audio-3.mp3',
        name: 'Аудио 3',
        description: 'Тестовый аудио файл',
        size: '5 MB',
        type: 'MP3',
        uploadTime: '13:30 17/07/2024',
    },
    {
        path: 'audio-4.mp3',
        name: 'Аудио 4',
        description: 'Тестовый аудио файл',
        size: '5 MB',
        type: 'MP3',
        uploadTime: '13:30 17/07/2024',
    },
    {
        path: 'audio-5.mp3',
        name: 'Аудио 5',
        description: 'Тестовый аудио файл',
        size: '5 MB',
        type: 'MP3',
        uploadTime: '13:30 17/07/2024',
    },
    {
        path: 'audio-6.mp3',
        name: 'Аудио 6',
        description: 'Тестовый аудио файл',
        size: '5 MB',
        type: 'MP3',
        uploadTime: '13:30 17/07/2024',
    },
    {
        path: 'audio-7.mp3',
        name: 'Аудио 7',
        description: 'Тестовый аудио файл',
        size: '5 MB',
        type: 'MP3',
        uploadTime: '13:30 17/07/2024',
    },
    {
        path: 'audio-8.mp3',
        name: 'Аудио 8',
        description: 'Тестовый аудио файл',
        size: '5 MB',
        type: 'MP3',
        uploadTime: '13:30 17/07/2024',
    },
    {
        path: 'audio-99.mp3',
        name: 'Аудио 99',
        description: 'Тестовый аудио файл',
        size: '5 MB',
        type: 'MP3',
        uploadTime: '13:30 17/07/2024',
    },
    {
        path: 'audio-19.mp3',
        name: 'Аудио 19',
        description: 'Тестовый аудио файл',
        size: '5 MB',
        type: 'MP3',
        uploadTime: '13:30 17/07/2024',
    },
];


export const fileCategories = [
    {
        id: 1,
        name: 'Обработанные',
        value: { status: Status.ACTIVE, converted: true },
    },
    {
        id: 2,
        name: 'Не обработанные',
        value: { status: Status.ACTIVE, converted: false },
    },
]

// export const userSaveFiles = [
//     {
//         id: 1,
//         name: 'Документ 1',
//         description: 'Первый тестовый документ',
//         size: '1.5 MB',
//         type: 'PDF',
//         uploadTime: '10:30 17/07/2024',
//         converted: true,
//         status: Status.PROCESSED,
//         danger: FileDanger.DANGER,
//         path: '/dsd/dsm.mp3',
//         isChecked: false,
//     },
// ]

export const loginFormFields: Array<FormField & { name: keyof LoginFormData }> = [
    {
        id: 'firstName',
        name: 'firstName',
        label: 'Имя',
        placeholder: 'Даниил',
        inputType: FormFieldType.INPUT,
        type: 'text',
    },
    {
        id: 'lastName',
        name: 'lastName',
        label: 'Фамилия',
        placeholder: 'Суворов',
        type: 'text',
        inputType: FormFieldType.INPUT,
    },
    {
        id: 'email',
        name: 'email',
        label: 'Почта',
        placeholder: 'test@mail.ru',
        type: 'email',
        inputType: FormFieldType.INPUT,
    },
    {
        id: 'tel',
        name: 'tel',
        label: 'Телефон',
        placeholder: '+7 123 456 78 90',
        type: 'tel',
        inputType: FormFieldType.INPUT,
    },
    {
        id: 'password',
        name: 'password',
        label: 'Пароль',
        placeholder: '***',
        type: 'password',
        inputType: FormFieldType.INPUT,
    },
    {
        id: 'userKey',
        name: 'userKey',
        label: 'Ключ',
        placeholder: '12345',
        type: 'text',
        inputType: FormFieldType.INPUT,
    },
    {
        className: 'col-span-full',
        id: 'department',
        name: 'department',
        label: 'Подразделение',
        placeholder: 'Даниил',
        inputType: FormFieldType.SELECT,
        options: [
            { name: Department.D1, value: 1 },
            { name: Department.D2, value: 2 },
            { name: Department.D3, value: 3 },
        ]
    },
]


export const authFormFields: Array<FormField & { name: keyof AuthFormData }> = [
    {
        id: 'email',
        name: 'email',
        label: 'Почта',
        placeholder: 'test@mail.ru',
        type: 'email',
        inputType: FormFieldType.INPUT,
    },
    {
        id: 'password',
        name: 'password',
        label: 'Пароль',
        placeholder: '***',
        type: 'password',
        inputType: FormFieldType.INPUT,
    },
]


export const userKeyStatus = {
    '11111': 'начальник',
    '22222': 'сотрудник',
    '33333': 'наблюдатель',
}