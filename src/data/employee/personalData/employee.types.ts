export type EmployeeDocuments = {
    documentType: string;
    seriesAndNumber: string;
    issueDate: string;
    issuedBy: string;
    departmentCode: string;
    snils: string;
    inn: string;
    omsPolicy: string;
    dmsPolicy: string;
};

export type EmployeeCareer = {
    personnelNumber: string;
    position: string;
    shopCode: string;
    organization: string;
    department: string;
    area: string;
    employmentDate: string;
    harmfulFactors: string[];
    status: string;
};

export type Employee = {
    id: string;
    fullName: string;
    lastName: string;
    firstName: string;
    middleName: string;
    birthDate: string;
    age: number;
    gender: string;
    birthplace: string;
    citizenship: string;
    mobilePhone: string;
    workPhone: string;
    email: string;
    registrationAddress: string;
    photo: string;
    documents: EmployeeDocuments;
    career: EmployeeCareer;
};
