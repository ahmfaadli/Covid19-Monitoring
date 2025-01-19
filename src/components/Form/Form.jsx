
import data from '../../utils/constants/provinces';
import { useState } from 'react';
import { Heading } from '../UI/Typography/Typography';
import { FormLeftStyle, FormRightStyle, StyleForm } from './Form.styled';
import Button from '../UI/Button/Button';

function Form({addProvince}) {
  const [formdata, setProvinceData] = useState({
    provinsi: '',
    status: '',
    jumlah: 0
  });
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setProvinceData({
      ...formdata,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formdata.provinsi && formdata.status && formdata.jumlah) {
      addProvince(formdata);
      setProvinceData({
        provinsi: '',
        status: '',
        jumlah: 0
      });
    }
  }
  return (
    <StyleForm>
      <section>
        <FormLeftStyle>
          <img src="https://l.top4top.io/p_31149sokb1.png" alt="" />
        </FormLeftStyle>
        <FormRightStyle>
          <Heading>Form Data Covid</Heading>
          <form onSubmit={handleSubmit}>
            <label>Provinsi</label> <br />
            <select name="provinsi" value={formdata.provinsi} onChange={handleChange}>
              <option value="">Pilih Provinsi</option>
              {data.provinces.map((province, index) => (
                <option key={index} value={province.provinsi}>{province.provinsi}</option>
              ))}
            </select> <br />

            <label>Status</label> <br />
            <select name="status" value={formdata.status} onChange={handleChange}>
              <option value="">Pilih Status</option>
              <option value="kasus">Kasus</option>
              <option value="sembuh">Sembuh</option>
              <option value="dirawat">Dirawat</option>
              <option value="meninggal">Meninggal</option>
              </select> <br />

            <label>Jumlah</label> <br />
            <input type="number" name="jumlah" value={formdata.jumlah} onChange={handleChange}/> <br />
            <Button>Sumbit</Button>
          </form>
        </FormRightStyle>
      </section>
    </StyleForm>
    );
}

export default Form;