package com.xrd.znsbgl.controller;

import com.xrd.znsbgl.entity.LoginLog;
import com.xrd.znsbgl.service.AdminService;
import com.xrd.znsbgl.service.LogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@RestController
public class LogController {

    @Autowired
    LogService logService;
    @Autowired
    AdminService adminService;

    //获得所有的日志信息
    @GetMapping("/getAllLog")
    public Map<String,Object> getAllLog(){
        Map<String,Object> map = new HashMap<String,Object>();

        //存着所有的登录信息
        ArrayList<LoginLog> al = logService.getAllLoginLog();

        //length——数组的属性；length()——String的方法；size()——集合的方法；
        for (int i = 0;i<al.size();i++){
            //集合类中的 List.get() 方法用于获取列表指定位置的元素。返回通过索引获取的元素。
            //获取索引位置0的id,并赋值给adminid
            int adminid = al.get(i).getAdminid();
            //getAdminById 根据id查询用户信息
            al.get(i).setAdmin(adminService.getAdminById(adminid));  //用户的所有信息
        }
        map.put("data",al);
        map.put("code",1);
        map.put("msg","查询成功");

        return map;
    }
}
