package com.xrd.znsbgl.util;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Date;

public class TimestampUtil {


    public static Timestamp getTimestamp(){
        //存入数据库时间
        Date date = new Date();//获取当前时间
        String nowTime = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(date);
        Timestamp timestamp = Timestamp.valueOf(nowTime);
        return timestamp;
    }
}
