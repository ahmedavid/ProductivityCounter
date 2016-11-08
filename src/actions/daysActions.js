import firebase from 'firebase';

export const daysCreate = () => {
    const today = new Date();
    console.log(today)
    return () => {
        firebase.database().ref('/days').push({date:"SEX"})
            .then(()=>console.log('day created')).catch((err)=>console.log("ERROR",err))
    }
};