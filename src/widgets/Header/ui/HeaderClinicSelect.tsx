import { Box } from "@chakra-ui/react";

type HeaderClinicSelectProps = {
    clinicName: string;
};

const HeaderClinicSelect = ({ clinicName }: HeaderClinicSelectProps) => {
    return <Box>{clinicName}</Box>;
};

export default HeaderClinicSelect;
