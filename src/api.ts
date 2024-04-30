import axios from 'axios';

export const getCharaterList = async () => {
    try {
        const response = await axios.get('https://api.potterdb.com/v1/characters?filter[name_cont]=Weasley');
        return response.data; // 반환값에 .data를 추가하여 응답 데이터만 반환
    } catch (error) {
        console.log(error);
        return null; // 에러 발생 시 null을 반환하거나 다른 처리 방법을 선택할 수 있음
    }
}