import type { SidebarItem } from "./types";

export const sidebarItems: SidebarItem[] = [
    {
        label: "Работники",
    },
    {
        label: "База работников",
        isActive: true,
        hasDot: true,
    },
    {
        label: "Карьерные записи",
        isDisabled: true,
    },
    {
        label: "Обращения",
    },
    {
        label: "Приемы",
        isDisabled: true,
    },
    {
        label: "Медицинские осмотры",
        isDisabled: true,
        items: [
            { label: "Периодические", isDisabled: true },
            { label: "Предварительные", isDisabled: true },
            { label: "Предсменные", isDisabled: true },
            { label: "ОПО", isDisabled: true },
        ],
    },
    {
        label: "Неотложная экстренная помощь",
        isDisabled: true,
    },
    {
        label: "Направления",
        isDisabled: true,
    },
    {
        label: "Вакцинации",
        isDisabled: true,
    },
    {
        label: "Больничные листы",
        isDisabled: true,
    },
    {
        label: "Журналы",
    },
    {
        label: "Отчеты",
    },

    { label: "Отчеты по мед. деятельности", isDisabled: true },

    { label: "BI-аналитика", isDisabled: true },

    {
        label: "Склад",
    },
    { label: "Учет мед. препаратов", isDisabled: true },
    {
        label: "Анкетирование",
    },
    {
        label: "Бракераж",
    },
    {
        label: "Администрирование",
    },
    { label: "Пользователи", isDisabled: true },
    { label: "Организации", isDisabled: true },
    { label: "Локации", isDisabled: true },
];
