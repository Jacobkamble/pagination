import { useCallback, useState ,useEffect, memo} from "react";
const WithPagination=(WrappedComponent)=>{

    return function Enhanced (props){

        const {data:initialData=[] }=props;
        const {setPaginatedData}=props        
        const [currentPage,setCurrentPage]=useState(1);
        const [pageSize,setPageSize]=useState(10);
        const[totalItems,setTotalItems]=useState(0);
        const[totalpages,setTotalPages]=useState(0);
        const [data,setData]=useState([]);


        const fetchData=()=>{
            const startIndex=(currentPage-1)*pageSize;
            const endIndex=startIndex+pageSize;

            const slicedData=initialData.slice(startIndex,endIndex);
            setPaginatedData(slicedData)
            setTotalItems(initialData.length);
            setTotalPages(Math.ceil(initialData.length/pageSize))
        }

        const goToPage=useCallback((page)=>{
            setCurrentPage(page)
        },[setCurrentPage])
        
        const changePageSize=useCallback((size)=>{
            setPageSize(size)
            setCurrentPage(1);
        },
        [setPageSize,setCurrentPage ])

        useEffect(() => {
            fetchData();
          }, [currentPage, pageSize,initialData]);

          console.log("hoc render......")

        return (<>
        <WrappedComponent
        {...props}

        data={data}

        currentPage={currentPage}
        pageSize={pageSize}
        totalItems={totalItems}
        totalpages={totalpages}
        goToPage={goToPage}
        changePageSize={changePageSize}
        
        />
        </>)
    }

}

export default  WithPagination;