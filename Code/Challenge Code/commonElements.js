const commonElements = (arr1, arr2) => {
    // create an output array
    const output = []
    // iterate through arr1
    arr1.forEach(value => {
      if (arr2.includes(value) && !output.includes(value)) {
      output.push(value) 
      }
    })
    return output
      // arr1 element exists in arr2
      // arr1 element exists in the output array
        // push arr1 element into output array
    // return output array
    
  }

// Frank's solution

function commonElements(arr1, arr2) {
    // Code here
    const newArr = [];
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          newArr.push(arr1[i]);
        }
      }
    }
    return newArr;
  }

  // Sean's solution

  function commonElements(arr1, arr2) {
    return arr1.filter((e) => {
      return arr2.includes(e);
    });
  }

  // Filter solution

  const commonElements = (arr1, arr2) => arr1.reduce((acc, val) => {
    if (arr2.includes(val) && !acc.includes(val)) acc.push(val)
    return acc
  }, [])

  // Frank's short solution