import type { SidebarItem } from "./sidebar.types";

export const sidebarItems: SidebarItem[] = [
    {
        label: "Работники",
        isDisabled: false,
    },
    {
        label: "База работников",
        hasDot: true,
        isDisabled: false,
    },
    {
        label: "Карьерные записи",
        isDisabled: true,
    },
    {
        label: "Обращения",
        isDisabled: false,
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
        isDisabled: false,
    },
    {
        label: "Отчеты",
        isDisabled: false,
    },
    {
        label: "Отчеты по мед. деятельности",
        isDisabled: true,
    },
    {
        label: "BI-аналитика",
        isDisabled: true,
    },
    {
        label: "Склад",
        isDisabled: false,
    },
    {
        label: "Учет мед. препаратов",
        isDisabled: true,
    },
    {
        label: "Анкетирование",
        isDisabled: false,
    },
    {
        label: "Бракераж",
        isDisabled: false,
    },
    {
        label: "Администрирование",
        isDisabled: false,
    },
    {
        label: "Пользователи",
        isDisabled: true,
    },
    {
        label: "Организации",
        isDisabled: true,
    },
    {
        label: "Локации",
        isDisabled: true,
    },
];
