const getSleepHours = (day) => {
    let weekDays = ['monday', 'tuesday','wednesday', 'thursday', 'friday']
    let weekEnds = ['saturday', 'sunday']
  
      if(day === weekEnds[0] || day === weekEnds[1]) {
        return 8;
      }else{
        return 6;
      }
    }
    const getActualSleepHours = () =>{
        let weekDays = ['monday', 'tuesday','wednesday', 'thursday', 'friday','saturday', 'sunday']
        let total = 0;
        for(let i= 0; i<weekDays.length; i++){
          total += getSleepHours(weekDays[i]);
        }
        console.log(total);
        return total;
    }
  const getIdealSleepHours = () =>{ 
    const idealHours = 9;
    return idealHours * 7;
  }
  // console.log(getIdealSleepHours())
  const calculateSleepDebt = () =>{
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if(actualSleepHours === idealSleepHours){
      console.log(`Perfect actual sleep hours of ${actualSleepHours}`)
    }else if(actualSleepHours  > idealSleepHours){
      console.log(`You doing great with this. ${actualSleepHours}`)
    }else{
      console.log(`Get some sleep, you cant go on with just ${actualSleepHours} hrs of sleep`)
    }
  }
  
  calculateSleepDebt()
  
  
  
  
  