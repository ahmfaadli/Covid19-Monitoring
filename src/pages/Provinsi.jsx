import Hero from "../components/Hero/Hero";
import Table from "../components/Table/Table";
import Form from "../components/Form/Form";
import { useState } from "react";
import data from "../utils/constants/provinces";


function ProvinsiPage() {
    const [province, setProvinceData] = useState(data.provinces);

    const AddProvince = (formData) => {
        const updatedData = province.map((province) => {
            if (province.provinsi === formData.provinsi) {
                return {
                    ...province,
                    [formData.status]: parseInt(formData.jumlah),
                }
            }
            return province;
        });
        setProvinceData(updatedData);
    };

    return (
        <div>
            <Hero />
            <Table
                title="Provinsi"
                Tabledata={province}
                subtitle="Lacak Pilihan Covid"
            />
            <Form AddProvince={AddProvince}  />
        </div>
    );
}

export default ProvinsiPage;