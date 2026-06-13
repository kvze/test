export type MedicalRecordTab = {
    id: number;
    label: string;
    count: number;
    isActive: boolean;
};

export type MedicalRecordStatus = "Завершено" | "В работе";

export type MedicalRecord = {
    id: string;
    number: string;
    medicalCard: string;
    appealType: string;
    employee: string;
    location: string;
    dateTime: string;
    status: MedicalRecordStatus;
    result: string;
    createdBy: string;
};
