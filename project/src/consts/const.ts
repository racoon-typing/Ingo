import { Status } from "../types/types";

export const menuList = [
    {
        id: 1,
        name: "Личный кабинет",
        value: "account",
        link: '/account'
    },
    {
        id: 2,
        name: "Конвертировать файлы",
        value: "convert",
        link: '/convert'
    },
    {
        id: 3,
        name: "Сохраненные файлы",
        value: "files",
        link: '/files'
    },
    {
        id: 4,
        name: "Статистика",
        value: "statistic",
        link: '/statistic'
    },
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
        name: 'Документ 1',
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
        name: 'Документ 2',
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
        value: Status.ACTIVE,
    },
    {
        id: 2,
        name: 'Не обработанные',
        value: Status.UN_ACTIVE,
    },
    {
        id: 3,
        name: 'В архиве',
        value: Status.IN_ARCHIVE,
    },
]

export const userSaveFiles = [
    {
        id: 1,
        name: 'Документ 1',
        description: 'Первый тестовый документ',
        size: '1.5 MB',
        type: 'PDF',
        uploadTime: '10:30 17/07/2024',
        converted: true,
        status: Status.ACTIVE,
    },
    {
        id: 2,
        name: 'Изображение 1',
        description: 'Тестовое изображение высокого качества',
        size: '3.2 MB',
        type: 'JPEG',
        uploadTime: '11:15 17/07/2024',
        converted: false,
        status: Status.ACTIVE,
    },
    {
        id: 3,
        name: 'Видео 1',
        description: 'Тестовое видео файл',
        size: '20 MB',
        type: 'MP4',
        uploadTime: '12:00 17/07/2024',
        converted: true,
        status: Status.ACTIVE,
    },
    {
        id: 4,
        name: 'Документ 2',
        description: 'Второй тестовый документ',
        size: '2.5 MB',
        type: 'DOCX',
        uploadTime: '12:45 17/07/2024',
        converted: true,
        status: Status.IN_ARCHIVE,
    },
    {
        id: 5,
        name: 'Аудио 1',
        description: 'Тестовый аудио файл',
        size: '5 MB',
        type: 'MP3',
        uploadTime: '13:30 17/07/2024',
        converted: false,
        status: Status.UN_ACTIVE,
    },
    {
        id: 6,
        name: 'Аудио 2',
        description: 'Тестовый аудио файл',
        size: '5 MB',
        type: 'MP3',
        uploadTime: '13:30 17/07/2024',
        converted: false,
        status: Status.UN_ACTIVE,
    },
    {
        id: 7,
        name: 'Аудио 19',
        description: 'Тестовый аудио файл',
        size: '5 MB',
        type: 'MP3',
        uploadTime: '13:30 17/07/2024',
        converted: false,
        status: Status.IN_ARCHIVE,
    },
]