import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getEducations } from "../../../services/educationService";
import EducationCard from "./EducationCard";

function EducationTimeline() {

  const [educations,setEducations]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState("");

  useEffect(()=>{
    fetchEducation();
  },[]);

  const fetchEducation=async()=>{

    try{

      const data=await getEducations();

      setEducations(Array.isArray(data)?data:[]);

    }catch{

      setError("Unable to load education.");

    }finally{

      setLoading(false);

    }

  };

  if(loading){
    return(
      <p className="text-center mt-16 text-gray-400">
        Loading...
      </p>
    );
  }

  if(error){
    return(
      <p className="text-center mt-16 text-red-400">
        {error}
      </p>
    );
  }

  return(

    <motion.div

      initial="hidden"

      whileInView="show"

      viewport={{once:true}}

      variants={{
        hidden:{},
        show:{
          transition:{
            staggerChildren:.18
          }
        }
      }}

      className="
      grid
      md:grid-cols-2
      xl:grid-cols-3
      gap-8
      mt-20
      "

    >

      {educations.map(item=>(

        <motion.div

          key={item._id}

          variants={{
            hidden:{
              opacity:0,
              y:30
            },
            show:{
              opacity:1,
              y:0
            }
          }}

        >

          <EducationCard item={item}/>

        </motion.div>

      ))}

    </motion.div>

  );

}

export default EducationTimeline;