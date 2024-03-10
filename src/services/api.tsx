import axios from 'axios';

const api = axios.create({
    baseURL : 'https://api.data.gov.my/data-catalogue',
});
export const reqCovidApi = async () => {
  try {
      const response = await api.get('?id=covid_cases');
    return response.data;
   
  } catch (error) {
    console.error('Error fetching COVID-19 statistics:');
    return null;
  }
};
