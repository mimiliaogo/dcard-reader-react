import axios from 'axios';
const baseUrl = `https://www.dcard.tw/_apicors/posts?popular=true`;
export function getDcardPostList(lastPostId) {
    console.log(`Making request to ${baseUrl}`);
    let url;
    if (lastPostId===0) {
        url = baseUrl;
    } else url = `${baseUrl}&before=${lastPostId}`
    return axios.get(url).then(res => {
        return res.data;
    });
}