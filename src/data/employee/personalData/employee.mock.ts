import type { Employee } from "./employee.types";

export const mockEmployee: Employee = {
    id: "PAT-1",
    fullName: "Константинопольский Константин Константинович",
    lastName: "Константинопольский",
    firstName: "Константин",
    middleName: "Константинович",
    birthDate: "11.06.1989",
    age: 35,
    gender: "мужской",
    birthplace: "г. Нижний Тагил",
    citizenship: "РФ",
    mobilePhone: "+7 900 000-00-00",
    workPhone: "+7 999 999-00-00",
    email: "konstantin@mail.ru",
    registrationAddress: "г. Нижний Тагил,\nул. Уличная, д.12, кв. 62",
    photo: "/assets/img/employee-photo.png",

    documents: {
        documentType: "паспорт гражданина РФ",
        seriesAndNumber: "0000 000000",
        issueDate: "01.01.2020",
        issuedBy: "МВД РФ ПО СПБ И ЛО",
        departmentCode: "—",
        snils: "000-000-000 00",
        inn: "00 00 000000 00",
        omsPolicy: "0000000000000000",
        dmsPolicy: "0000000000000000",
    },

    career: {
        personnelNumber: "0000 000000",
        position: "машинист тепловоза",
        shopCode: "G710",
        organization: "ООО «Ромашка»",
        department: "Цех ремонта и эксплуатации локомотивов",
        area: "Служба эксплуатации локомотивов",
        employmentDate: "20.07.2014",
        harmfulFactors: ["1.1", "1.3", "1.39", "1.1", "1.3", "1.39"],
        status: "Работает",
    },
};
