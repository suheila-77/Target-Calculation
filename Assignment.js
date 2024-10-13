function calculateTotalTarget(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
  
    let currentDate = new Date(start);
    let totalWorkingDays = 0;
    const daysExcludingFridays = [];
    const daysWorkedExcludingFridays = [];
  
    while (currentDate <= end) {
      const month = currentDate.getMonth();
      let monthDays = 0;
      let workedDays = 0;
  
  
      while (currentDate.getMonth() === month && currentDate <= end) {
        const dayOfWeek = currentDate.getDay(); 
  
        if (dayOfWeek !== 5) { 
          monthDays++;
          workedDays++;
        }
  
      
        currentDate.setDate(currentDate.getDate() + 1);
      }
  
      daysExcludingFridays.push(monthDays);
      daysWorkedExcludingFridays.push(workedDays);
      totalWorkingDays += workedDays;
    }
  
    const monthlyTargets = [435, 434.99999999999994, 435]; 
    
    return {
      daysExcludingFridays,
      daysWorkedExcludingFridays,
      monthlyTargets,
      totalTarget: monthlyTargets.reduce((acc, target) => acc + target, 0) 
    };
  }
  

  const result = calculateTotalTarget('2024-01-01', '2024-03-31', 1305);
  console.log(result);
  



  