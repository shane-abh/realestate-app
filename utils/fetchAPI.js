import axios from "axios";



export const baseUrl =  'https://bayut.p.rapidapi.com'


export const fetchApi = async(url)=> {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '9e093fec61msh65321bb33f8989bp1f5cb3jsn249cf86337e7',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });

    return data;
}