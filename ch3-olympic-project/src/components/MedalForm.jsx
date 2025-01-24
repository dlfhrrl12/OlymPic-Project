import React, { useState } from 'react'


function MedalForm({countries, setCountries}) {
  const [countryName, setCountryName] = useState(''); // 국가명
  const [goldMedal, setGoldMedal] = useState(0); // 금메달
  const [silverMedal, setSilverMedal] = useState(0); // 은메달
  const [bronzeMedal, setBronzeMedal] = useState(0); // 동메달

  const Submit = (e) => {
    e.preventDefault();
    const FindCountry = countries.find(country => country.name === countryName);
    if(FindCountry){ // 등록된 국가인지 아닌지 확인 하기 등록되어 있으면 경고메세지를 표시하고 return해서 실행중단
      alert("이미 등록된 국가 입니다.");
      return;
    }
    // 새로운 국가 와 메달 정보를 저장
    setCountries([{name: countryName.trim(), gold: goldMedal, silver: silverMedal, bronze: bronzeMedal } ,...countries ]);
    // 정보가 저장되면은 초기 값으로 
    setCountryName("");
    setGoldMedal(0);
    setSilverMedal(0);
    setBronzeMedal(0);
  }
  const handleUpdate = () =>{
    // 국가를 비교해서 찾을 수 있게 공백 제거 소문자화(한글이면 상관은 없음)
    const normalCountryName = countryName.trim().toLowerCase(); 
    // countries 배열에서 입력된 국가명을 찾음
    const countryUpdate = countries.find(country => country.name.toLowerCase() === normalCountryName);
    if(countryUpdate){
      const updatedCountries = countries.map(country =>{ 
        if(country.name.toLowerCase() === normalCountryName){ // 업데이트할 국가일 경우, 금/은/동 메달 값을 새 값으로 설정
          return {...country, gold: goldMedal, silver: silverMedal, bronze: bronzeMedal}
        }else{ // 다른 국가일 경우, 원래 값을 그대로 유지
          return country;
        }
    });
    // 업데이트된 countries 배열을 상태로 설정
    setCountries(updatedCountries);
    setCountryName("");
    setGoldMedal(0);
    setSilverMedal(0);
    setBronzeMedal(0);
    }else{ // 입력된 국가가 목록에 없으면 경고창 표시 그리고 초기화
      alert("해당 국가를 찾을 수 없습니다.");
      setCountryName("");
      setGoldMedal(0);
      setSilverMedal(0);
      setBronzeMedal(0);
    }
  }
  return (
    <form className='input-group' onSubmit={Submit}>
      <div className="input-field">
        <label htmlFor="">국가명</label>
        <input type="text" placeholder='국가 입력' value={countryName} onChange={(e) => setCountryName(e.target.value)}/>
      </div>
      <div className="input-field">
        <label htmlFor="">금메달</label>
        <input type="number" value={goldMedal} onChange={(e) => setGoldMedal(Number(e.target.value))}/>
      </div>
      <div className="input-field">
        <label htmlFor="">은메달</label>
        <input type="number" value={silverMedal} onChange={(e) => setSilverMedal(Number(e.target.value))}/>
      </div>
      <div className="input-field">
        <label htmlFor="">동메달</label>
        <input type="number" value={bronzeMedal} onChange={(e) => setBronzeMedal(Number(e.target.value))}/>
      </div>
      <div className="button-group">
        <button type="submit">국가 추가</button>
        <button type="button" onClick={handleUpdate}>업데이트</button>
      </div>
    </form>
  )
}

export default MedalForm
