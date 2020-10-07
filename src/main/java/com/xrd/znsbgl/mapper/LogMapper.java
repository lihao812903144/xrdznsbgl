package com.xrd.znsbgl.mapper;

import com.xrd.znsbgl.entity.Admin;
import com.xrd.znsbgl.entity.LoginLog;
import org.apache.ibatis.annotations.Mapper;

import java.util.ArrayList;

@Mapper
public interface LogMapper {
    //登录以后自动添加到登录日志表中
    public int addLog(LoginLog loginlog);

    public ArrayList<LoginLog> getAllLoginLog();
}
