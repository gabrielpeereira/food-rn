import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses/',
    headers: {
        Authorization: 'Bearer sbzlHA3WTa8WzZDtB2ZJh4C_cvZgdjSFHJvFO4Ijt5d5pwJUOPkdQE2Zd_EI17CDsGl5mOKlzgHHrG9g3j1TWFfsx1yt2ZFWR-V7WZ663ncq_mJlvq5DCQLQyn0EX3Yx'
    }
});