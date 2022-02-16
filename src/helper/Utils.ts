import moment from 'moment'

export const capitalize = (str:string = '') =>{
    const lower = str?.toLocaleLowerCase()
    return str?.charAt(0).toUpperCase() + lower?.slice(1)
}

export const titleCase = (str:string) => {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
 }
  

export const getFormattedDate = (date?:string, format?: string) => {
    return date ? moment(date).utcOffset('+0600')?.format(format): '';
}

export const commaRemover = (value:string) =>{
    return value.replace(/\,/g,'');
}