import mongoose from "mongoose";

const conn = () => {
    mongoose.connect(process.env.DB_URI, {
        dbName: 'webProje',
    }).then(() => {
        console.log("Veritabanına bağlandı");
    }).catch((err) => {
        console.log(`Veritabanına bağlanılamadı:, ${err}`);
    });
};

export default conn;