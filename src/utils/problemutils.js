const axios = require('axios');

const getLanguageById=(lang)=>{
    const languageMap={
        "c++":54,
        "java":62,
        "javaScript":63
    }
    return languageMap[lang.toLowerCase()];
}

const submitBatch=async (submissions)=>{
    
    //judgeo create a batch submission se lao
    

const options = {
  method: 'POST',
  url: 'https://judge0-ce.p.rapidapi.com/submissions/batch',
  params: {
    base64_encoded: 'false'
  },
  headers: {
    'x-rapidapi-key': '1144c13d65msh79962d6addc58b9p1e0254jsn445c181f15c2',
    'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
    'Content-Type': 'application/json'
  },
  data: {
    submissions:{submissions}
  }
  
};

async function fetchData() {
	try {
		const response = await axios.request(options);
		return response.data;
	} catch (error) {
		console.error(error);
	}
}

return await fetchData();
}
const submitToken= async (resultToken)=>{
    // judge0 se batch submission lao
const waiting= async(timer)=>{
    
    setTimeout(()=>{
        return 1;

    },timer);
}
const options = {
  method: 'GET',
  url: 'https://judge0-ce.p.rapidapi.com/submissions/batch',
  params: {
    tokens: resultToken.join(','), // yaha change karo
    base64_encoded: 'false',
    fields: '*'
  },
  headers: {
    'x-rapidapi-key': '1144c13d65msh79962d6addc58b9p1e0254jsn445c181f15c2',
    'x-rapidapi-host': 'judge0-ce.p.rapidapi.com'
  }
};

async function fetchData() {
	try {
		const response = await axios.request(options);
		return response.data
	} catch (error) {
		console.error(error);
	}
}
while(true){
const result=await fetchData(); // change karo
const IsResultObtained=result.submissions.every((r)=>r.status_id>2);
if(IsResultObtained)
    return result.submissions;

  await waiting(1000);
}
}


module.exports={getLanguageById,submitBatch,submitToken};