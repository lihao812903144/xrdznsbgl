package com.xrd.znsbgl.service;

import com.xrd.znsbgl.entity.LoginLog;

import java.util.ArrayList;

public interface LogService {

    public void addLog(Integer id,String ip);

    public ArrayList<LoginLog> getAllLoginLog();
}
