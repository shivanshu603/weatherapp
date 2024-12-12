import react ,{useEffect, useState }from "react";
import "./css/style.css";
const Weather =()=> {

    const [city, setCity] = useState(null);

    const [search, setSearch] = useState("delhi");

    useEffect ( () => {
        const fetchApi = async () =>{

            let Api_key = "5cdd618ae93c09590b4b6d5e9d28bd2e";
            const url =  `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${Api_key}`

         
            const response = await fetch(url)
            

            const resjson = await response.json();
            // console.log (resjson)
            setCity(resjson.main);
            

        }        
        fetchApi();
    } , [search])

return(

    

    <div>
        <div className="box">
            <div className="inputData">
                <input
                type="search"
                className="inputFeild" 
                value={search}
                onChange ={(event)=>{
                    setSearch(event.target.value)

                }}   />
            </div>

            {!city ? (
                <p className="errorMsg">No Data Found</p>

            ) : (  
                <div> 


                <div className="info">
                <h2 className="location">
                <i className="fa-solid fa-street-view"> <span id="state">{search} </span> </i> 
                    </h2>

                    
                    <h1 className="temp">Temp = {city.temp} °Cel <i class="fa-solid fa-temperature-quarter"></i> </h1>

                    <h1 className="temp">humidity = {city.humidity}</h1>

                    {/* <h1 className="temp">Min Temp = {city.temp_min}°Cel</h1> */}

                    {/* <h1 className="temp">Max temp = {city.temp_max}°Cel</h1> */}

                    {/* <h1 className="temp">speed  = {city.speed}</h1> */}

                    
                     
                     <h3 className="tempmin_max">Min :{city.temp_min}°Cel   / Max :{city.temp_max}°Cel   </h3>
                </div>
    
                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
</div>


            ) }
        

       


        </div>
        </div>
    )
}

export default Weather;