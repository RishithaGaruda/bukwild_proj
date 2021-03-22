const useFetch = () => {
   const getData = async () => {
       try{
        const response = await fetch("https://f.v1.n0.cdn.getcloudapp.com/items/3e1W2F0W1s2U2d3R2Z46/content.json", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            }
          });
          const response_data = await response.json();
          if (!response.ok) {
            throw new Error(response_data.message);
          }
          console.log( response_data , 'data')
       }catch(err){
           console.log( err )
       }
       
   };
   getData();
};

export default useFetch;