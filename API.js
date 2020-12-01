import Axios from 'axios';

export const getAll= async () => {
	try{
	const resp=await Axios.get('http://localhost:8080/postgres/restos');
	return resp.data;

	}
	catch(e){
		console.log("Error "+e);

	}
}

export const getAllVisits= async () => {
	try{
	const resp=await Axios.get('http://localhost:8080/postgres/visits');

	return resp.data;

	}
	catch(e){
		console.log("Error "+e);
	}
}

export const postVisited = async (data) => {
    try{
		const resp= await Axios.post("http://localhost:8080/postgres/addVisits",
            data

        )

    }catch(e){
        console.log("Error " +e)
    }
}