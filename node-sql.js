class sqlFormat extends groupFunctionArray {
    constructor(getJoinTime, getSql, getRedis, getRedisString) {
        super(getJoinTime, getSql, getRedis, getRedisString);
    };
    selectFromSql(tableName, condition) {
        let condi = " WHERE ",
            selectSql = "SELECT * FROM " + tableName;
        for (let key in condition) {
            condi = condi + ' ' + key + ' ' + condition[key];
        };
        return super.getSql(selectSql + condi);
    };
    getLengthOfTable(tableName, condition) {
        let condi = " WHERE ",
            selectSql = "SELECT count(*) FROM " + tableName;
        for (let key in condition) {
            condi = condi + ' ' + key + ' ' + condition[key];
        };
        return super.getSql(selectSql + condi);
    }
    insertToSql(tableName, data) {
        let selectSql = "INSERT INTO " + tableName;
        if (Array.isArray(data)) {
            let condiArray = ' (' + Object.keys(data[0]).join(',') + ') VALUES ',
                dataArrayValue = '',
                dataLength = data.length;
            data.forEach((value, index) => {
                if (index !== dataLength - 1) {
                    dataArrayValue = dataArrayValue + getData(value) + ','
                } else {
                    dataArrayValue += getData(value);
                }
            });
            return super.getSql(selectSql + condiArray + dataArrayValue);
        } else {
            let condiArray = ' (' + Object.keys(data).join(',') + ') VALUES';
            return super.getSql(selectSql + condiArray + getData(data));
        }

        function getData(value) {
            // body...
            let condiArray = Object.keys(value),
                condi = ' (';
            condiArray.forEach((key, index, valuearray) => {
                let dataValue ;
                if(value[key] && typeof value[key].replace === 'function'){
                    dataValue = value[key].replace(/"/g, '\"').replace(/'/g, "\'");
                }else{
                    dataValue = value[key];
                }
                if (index !== valuearray.length - 1) {
                    condi = condi + "'" + dataValue + "',";
                } else {
                    condi = condi + "'" + dataValue + "'";
                }
            });
            return condi + ')';
        }
    }
    createTable(tableName, condition) {
        let basic = "CREATE TABLE IF NOT EXISTS " + tableName,
            condi = '(',
            keyArray = Object.keys(condition);
        keyArray.forEach((value, index) => {
            if (index === keyArray.length - 1) {
                condi = condi + value + ' ' + condition[value];
            } else {
                condi = condi + 　value + ' ' + condition[value] + ',';
            }
        });
        return super.getSql(basic + ' ' + condi + ')');
    }
    deleteFromSql(tableName, condition) {
        let condi = " WHERE ",
            selectSql = "DELETE FROM " + tableName;
        for (let key in condition) {
            condi = condi + ' ' + key + ' ' + condition[key];
        };
        return super.getSql(selectSql + condi);
    };
    updateToSql(tableName, data, condition) {
        let condi = " WHERE ",
            selectSql = "UPDATE " + tableName + ' SET ',
            dataValue = '',
            dateArray = Object.keys(data);
        dateArray.forEach((value, index) => {
            if (index === dateArray.length - 1) {
                dataValue = dataValue + value + '="' + data[value] + '"'
            } else {
                dataValue = dataValue + value + '="' + data[value] + '",'
            }
        })
        for (let key in condition) {
            condi = condi + ' ' + key + ' ' + condition[key];
        };
        return super.getSql(selectSql + dataValue + condi);
    }
    dropTable(tableName) {
        let selectSql = 'DROP TABLE ' + tableName;
        return super.getSql(selectSql);
    }
}
