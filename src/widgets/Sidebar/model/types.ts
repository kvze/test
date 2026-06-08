export type SidebarItem = {
    label: string;
    isActive?: boolean;
    isDisabled?: boolean;
    hasDot?: boolean;
    items?: SidebarItem[];
};
