import { useState, useEffect } from "react";

function useGetstore (store,callback){
          const result = store(callback);
          const [state, setState] = useState(result);
          useEffect(() => {
                    console.log(result);
                    setState(result);
          }, [result])
          return state;
}

export default useGetstore;