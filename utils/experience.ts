export const getExperience = (startDate: Date): string => {
    const currentDate = new Date();
  
    const totalMonths =
      (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
      (currentDate.getMonth() - startDate.getMonth());
  
    const years = Math.floor(totalMonths / 12);
  
    return totalMonths < 24
        ? `${totalMonths} months`
        : totalMonths % 12 === 0
        ? `${years} years`
        : `more than ${years} years`;
}