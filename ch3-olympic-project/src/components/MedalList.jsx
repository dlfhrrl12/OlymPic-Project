import React from 'react'


function MedalList({countries , setCountries}) {

  // 삭제 화살표 함수
  const handleDelete = (name) => {
    const deleteCountries = countries.filter((country) => country.name !== name);
    setCountries(deleteCountries);
  }

  // 메달의 포인트 기준으로 내림 차순
  // 금: 15point, 은: 10point, 동: 5point
  const descending = [...countries].sort((a, b) => { 
    const aMedal = a.gold * 15 + a.silver * 10 + a.bronze * 5;
    const bMedal = b.gold * 15 + b.silver * 10 + b.bronze * 5;
    return bMedal - aMedal;
  });
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>국가명</th>
            <th>금메달</th>
            <th>은메달</th>
            <th>동메달</th>
            <th>갯수 합</th>
            <th>액션</th>
          </tr>
        </thead>
        <tbody>
        {descending.map((country, index) => (
            <tr key={index}>
              <td>{country.name}</td>
              <td>{country.gold}</td>
              <td>{country.silver}</td>
              <td>{country.bronze}</td>
              <td>{country.gold + country.silver + country.bronze}</td> {/* 갯수 합 표시 */}
              <td>
                <button onClick={() => handleDelete(country.name)}>삭제</button>
              </td>
            </tr>
          ))}  
        </tbody>
      </table>
    </div>
  )
}

export default MedalList
