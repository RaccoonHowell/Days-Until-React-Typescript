const daysUntil = (date: Date): number => {
    const today = new Date();
    
    return Math.ceil((+date - +today) / 8.64e7);
}

export default daysUntil;