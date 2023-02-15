import React, {useState} from 'react'

const useSearchbar = () => {

    const [isSearchIconClicked,setIsSearchIconClicked] = useState<boolean>(false);

  const handleSearchIconClick = () =>{
    setIsSearchIconClicked(!isSearchIconClicked);
  }

  return {
    isSearchIconClicked,
    handleSearchIconClick
  }
    
    
    
  
}

export default useSearchbar