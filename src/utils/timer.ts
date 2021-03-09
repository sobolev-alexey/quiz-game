export default (startTime: number) => {
    const duration = new Date().getTime() - startTime;
    
    // Time calculations for hours, minutes and seconds
    const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = ((duration % (1000 * 60)) / 1000).toFixed(1);
    
    return `${hours > 0 ? `${hours}h ` : ''}${minutes > 0 ? `${minutes}m ` : ''}${seconds}s`;
}